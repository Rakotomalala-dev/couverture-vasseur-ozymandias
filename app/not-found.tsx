import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl text-center">

        {/* Code erreur */}
        <div className="mb-8">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-slate-cobalt">
            Erreur 404
          </span>

          <h1 className="mt-4 text-[clamp(6rem,20vw,12rem)] font-black leading-none tracking-[-0.08em] text-slate-deep">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-deep">
            Cette page n'existe pas
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-7 text-slate-600">
            La page que vous recherchez a peut-être été déplacée,
            supprimée ou l'adresse saisie est incorrecte.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              min-w-[190px]
              rounded-lg
              bg-slate-deep
              px-6 py-3.5
              text-sm font-semibold
              text-white
              transition-all duration-300
              hover:bg-slate-cobalt
              hover:-translate-y-0.5
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-slate-cobalt
              focus-visible:ring-offset-2
            "
          >
            Retour à l'accueil
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              min-w-[190px]
              rounded-lg
              border border-slate-deep
              bg-transparent
              px-6 py-3.5
              text-sm font-semibold
              text-slate-deep
              transition-all duration-300
              hover:bg-slate-deep
              hover:text-white
              hover:-translate-y-0.5
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-slate-cobalt
              focus-visible:ring-offset-2
            "
          >
            Nous contacter
          </Link>
        </div>

        {/* Informations entreprise */}
        <div className="mt-16 border-t border-slate-200 pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            Couverture Vasseur
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Couvreur à Angers et dans le Maine-et-Loire
          </p>
        </div>

      </div>
    </main>
  );
}