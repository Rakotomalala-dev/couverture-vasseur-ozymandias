"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Check,
  Loader2,
  AlertCircle,
  Upload,
} from "lucide-react";

import { site } from "@/lib/site";

const workTypes = [
  "Réfection de toiture",
  "Couverture en ardoise",
  "Réparation de fuite",
  "Zinguerie",
  "Gouttières / chéneaux",
  "Démoussage / traitement",
  "Fenêtres de toit",
  "Isolation des combles",
  "Autre / diagnostic",
] as const;

type WorkType = (typeof workTypes)[number];

type FormData = {
  name: string;
  phone: string;
  email: string;
  commune: string;
  workType: string;
  message: string;
  photo: File | null;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const initialState: FormData = {
  name: "",
  phone: "",
  email: "",
  commune: "",
  workType: "",
  message: "",
  photo: null,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialState);

  const [status, setStatus] = useState<FormStatus>("idle");

  const [error, setError] = useState("");

  /**
   * Mise à jour des champs texte/select.
   */
  const updateField =
    (field: Exclude<keyof FormData, "photo">) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  /**
   * Gestion de l'upload de photo.
   */
  const updatePhoto = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] ?? null;

    setForm((current) => ({
      ...current,
      photo: file,
    }));
  };

  /**
   * Envoi du formulaire.
   *
   * Cette fonction utilise /api/contact.
   * Il faudra créer la route API correspondante
   * dans app/api/contact/route.ts.
   */
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setStatus("loading");
    setError("");

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("commune", form.commune);
      formData.append("workType", form.workType);
      formData.append("message", form.message);

      if (form.photo) {
        formData.append("photo", form.photo);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Une erreur est survenue lors de l'envoi."
        );
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error("Erreur formulaire de contact :", err);

      setStatus("error");

      setError(
        err instanceof Error
          ? err.message
          : "Impossible d'envoyer votre demande. Veuillez réessayer."
      );
    }
  };

  /**
   * Écran de succès.
   */
  if (status === "success") {
    return (
      <div className="border border-border bg-card p-8 text-center lg:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center bg-slate-cobalt text-white">
          <Check
            className="h-7 w-7"
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-6 heading-display text-2xl text-slate-deep">
          Demande envoyée
        </h3>

        <p className="mt-3 leading-relaxed text-slate-natural">
          Merci. Nous revenons vers vous sous 48 h pour
          organiser le diagnostic. Pour une urgence,
          appelez-nous directement.
        </p>

        <a
          href={site.phoneHref}
          className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-slate-cobalt transition-colors hover:text-slate-deep"
        >
          {site.phone}
        </a>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setError("");
          }}
          className="mt-6 block w-full font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-slate-deep"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-b border-border py-3 px-0 text-base text-slate-deep placeholder:text-muted-foreground/60 focus:border-slate-cobalt focus:outline-none transition-colors";

  const labelClass =
    "mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      {/* =========================================
          NOM + TÉLÉPHONE
      ========================================= */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cf-name"
            className={labelClass}
          >
            Nom complet *
          </label>

          <input
            id="cf-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={updateField("name")}
            className={inputClass}
            autoComplete="name"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label
            htmlFor="cf-phone"
            className={labelClass}
          >
            Téléphone *
          </label>

          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={updateField("phone")}
            className={inputClass}
            autoComplete="tel"
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>

      {/* =========================================
          EMAIL + COMMUNE
      ========================================= */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cf-email"
            className={labelClass}
          >
            Email
          </label>

          <input
            id="cf-email"
            name="email"
            type="email"
            value={form.email}
            onChange={updateField("email")}
            className={inputClass}
            autoComplete="email"
            placeholder="votre@email.fr"
          />
        </div>

        <div>
          <label
            htmlFor="cf-commune"
            className={labelClass}
          >
            Commune *
          </label>

          <select
            id="cf-commune"
            name="commune"
            required
            value={form.commune}
            onChange={updateField("commune")}
            className={inputClass}
          >
            <option value="" disabled>
              Sélectionner…
            </option>

            {site.communes.map((commune) => (
              <option
                key={commune}
                value={commune}
              >
                {commune}
              </option>
            ))}

            <option value="Autre">
              Autre commune (rayon 30 km)
            </option>
          </select>
        </div>
      </div>

      {/* =========================================
          TYPE DE TRAVAUX
      ========================================= */}
      <div>
        <label
          htmlFor="cf-worktype"
          className={labelClass}
        >
          Type de travaux *
        </label>

        <select
          id="cf-worktype"
          name="workType"
          required
          value={form.workType}
          onChange={updateField("workType")}
          className={inputClass}
        >
          <option value="" disabled>
            Sélectionner…
          </option>

          {workTypes.map((workType: WorkType) => (
            <option
              key={workType}
              value={workType}
            >
              {workType}
            </option>
          ))}
        </select>
      </div>

      {/* =========================================
          MESSAGE
      ========================================= */}
      <div>
        <label
          htmlFor="cf-message"
          className={labelClass}
        >
          Décrivez votre besoin
        </label>

        <textarea
          id="cf-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={updateField("message")}
          className={`${inputClass} resize-none`}
          placeholder="Nature du chantier, ancienneté de la toiture, signes observés…"
        />
      </div>

      {/* =========================================
          PHOTO
      ========================================= */}
      <div>
        <label
          htmlFor="cf-photo"
          className={labelClass}
        >
          Photo de la toiture (optionnel)
        </label>

        <div className="flex items-center gap-3 border-b border-border py-3">
          <Upload
            className="h-4 w-4 shrink-0 text-muted-foreground"
            aria-hidden="true"
          />

          <input
            id="cf-photo"
            name="photo"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic"
            onChange={updatePhoto}
            className="text-sm text-slate-natural file:mr-4 file:rounded-none file:border-0 file:bg-slate-deep file:px-4 file:py-2 file:font-mono file:text-[10px] file:uppercase file:tracking-[0.15em] file:text-white hover:file:bg-slate-natural"
          />
        </div>

        {form.photo && (
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-cobalt">
            {form.photo.name}
          </p>
        )}
      </div>

      {/* =========================================
          ERREUR
      ========================================= */}
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 border border-destructive/30 bg-destructive/5 p-4"
        >
          <AlertCircle
            className="mt-0.5 h-4 w-4 shrink-0 text-destructive"
            aria-hidden="true"
          />

          <p className="text-sm text-destructive">
            {error}
          </p>
        </div>
      )}

      {/* =========================================
          SUBMIT
      ========================================= */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="group flex w-full items-center justify-center gap-3 bg-slate-cobalt py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-slate-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2
              className="h-4 w-4 animate-spin"
              aria-hidden="true"
            />

            Envoi en cours…
          </>
        ) : (
          "Demander mon devis gratuit"
        )}
      </button>

      {/* =========================================
          INFORMATIONS
      ========================================= */}
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        Réponse sous 48 h · {site.emergency}
      </p>
    </form>
  );
}