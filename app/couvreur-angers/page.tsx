import Seo from "@/components/seo/Seo";
import PageHero from "@/components/sections/PageHero";
import ProseBlock, { ProseImage } from "@/components/sections/ProseBlock";
import Zone from "@/components/home/Zone";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import ContactSection from "@/components/home/ContactSection";
import SlateSignature from "@/components/home/SlateSignature";
import { faqLocal, site } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const breadcrumbs = [
  { name: "Accueil", to: "/" },
  { name: "Couvreur Angers" },
];

export default function Local() {
  return (
    <>
      <Seo
        title="Couvreur à Angers — Rénovation & réparation toiture | Vasseur"
        description="Couvreur artisan à Angers spécialiste de l'ardoise naturelle, réfection, rénovation et réparation de toiture, zinguerie et recherche de fuite. RGE Qualibat, devis sous 48h."
        canonical="/couvreur-angers"
        ogImage={IMAGES.maisonAngevine}
        faqItems={faqLocal}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Couvreur Angers", url: "/couvreur-angers" },
        ]}
      />
      <PageHero
        image={IMAGES.maisonAngevine}
        imageAlt="Maison angevine traditionnelle à toiture d'ardoise à Angers"
        breadcrumbItems={breadcrumbs}
        label="COUVREUR · ANGERS · 49"
        title="Couvreur à Angers — spécialiste des toitures en ardoise"
        intro="Une intervention de proximité, qui connaît le bâti angevin, ses accès, ses contraintes d'urbanisme et ses usages de la couverture."
      />

      <div className="py-20 lg:py-28">
        <div className="container-vasseur">
          <div className="space-y-20 lg:space-y-28">
            <ProseBlock number="01 //" eyebrow="Ancrage" title="Un couvreur qui connaît l'Anjou">
              <p>
                Intervenir à Angers, ce n'est pas seulement se déplacer. C'est connaître le
                bâti, les matériaux locaux, les contraintes d'accès et les règles
                d'urbanisme qui s'appliquent au centre ancien. Couverture Vasseur est une
                entreprise angevine, basée à Angers, qui intervient dans la ville et dans un
                rayon de {site.interventionRadiusKm} km autour.
              </p>
              <p>
                Cette proximité change la manière de travailler. On connaît les rues étroites
                de La Doutre, les façades rapprochées du centre historique, les accès
                compliqués des faubourgs. On sait qu'une intervention en centre ancien ne se
                prépare pas comme un chantier en pavillonnaire. Tout cela se devine dès le
                diagnostic, et se chiffre honnêtement dans le devis.
              </p>
            </ProseBlock>

            <ProseBlock number="02 //" eyebrow="Bâti local" title="Le bâti angevin et ses toitures">
              <p>
                Angers mêle plusieurs types de bâti : maisons de ville en pierre de tuffeau,
                hôtels particuliers du centre, architecture des faubourgs, pavillonnaire plus
                récent en périphérie. Chaque typologie appelle une approche différente de la
                couverture.
              </p>
              <p>
                Les toitures anciennes du centre ont souvent une charpente en bois qui mérite
                d'être examinée avec attention avant toute intervention. L'ardoise y est
                fréquente, parfois posée selon des usages locaux qu'il faut respecter. Sur
                le pavillonnaire, les contraintes sont autres : accès plus simples, mais
                parfois des reprises de zinguerie et d'étanchéité à anticiper.
              </p>
            </ProseBlock>

            <ProseImage
              src={IMAGES.faitage}
              alt="Ligne de toiture en ardoise sur une maison angevine"
              caption="TOITURE ANGEVINE · ARDOISE"
            />

            <ProseBlock number="03 //" eyebrow="Matière locale" title="L'ardoise d'Anjou, un matériau du paysage">
              <p>
                L'ardoise est le matériau historique des toitures angevines. Elle habite le
                paysage de la ville depuis longtemps, sur les édifices remarquables comme sur
                l'habitat courant. Choisir l'ardoise, à Angers, c'est s'inscrire dans une
                continuité : celle d'un matériau qui résiste au climat de l'Anjou et qui vieillit
                sans se dégrader.
              </p>
              <p>
                Sa teinte profonde, légèrement bleutée, dialogue avec la pierre de tuffeau et
                les toits alentour. Une réfection en ardoise respecte donc non seulement le
                bâti, mais aussi la cohérence visuelle du quartier.
              </p>
            </ProseBlock>

            <ProseBlock number="04 //" eyebrow="Contraintes" title="Accès, échafaudage et centre ancien">
              <p>
                Le centre ancien d'Angers impose des contraintes concrètes. Les rues sont
                étroites, le stationnement limité, les façades rapprochées. Un échafaudage ne
                s'implante pas n'importe comment : il faut parfois négocier l'emprise au sol,
                organiser le chantier sur des horaires adaptés et respecter le voisinage.
              </p>
              <p>
                Ces contraintes ne sont pas des obstacles : ce sont des paramètres du chantier,
                que l'on intègre dès le diagnostic. Le devis les prend en compte, sans
                surprise a posteriori.
              </p>
            </ProseBlock>

            <ProseBlock number="05 //" eyebrow="Urbanisme" title="Urbanisme, ABF et déclaration préalable">
              <p>
                À Angers, une réfection de toiture relève souvent de la déclaration préalable
                de travaux. Dans les secteurs protégés et le centre ancien, l'Architecte des
                Bâtiments de France peut imposer le matériau, la teinte ou le mode de pose.
                L'ardoise, matériau traditionnel, s'inscrit généralement sans difficulté dans
                ces contraintes.
              </p>
              <p>
                Nous vous accompagnons dans la constitution du dossier et dans le respect des
                prescriptions locales. L'objectif est que le chantier soit conforme, et que la
                toiture finie soit en accord avec le bâti environnant.
              </p>
            </ProseBlock>

            <ProseBlock number="06 //" eyebrow="Entretien" title="Entretien, infiltrations et mousse">
              <p>
                Une toiture en ardoise demande peu d'entretien, mais elle n'est pas exempte de
                surveillance. La mousse et les lichens peuvent s'installer, surtout sur les
                versants peu exposés au soleil. Un démoussage suivi d'un traitement hydrofuge
                prolonge la durée de vie de la couverture.
              </p>
              <p>
                Les infiltrations, elles, ne se voient pas toujours à l'aplomb de la trace
                d'humidité. L'eau chemine le long de la charpente et peut apparaître loin de
                son point d'entrée. La recherche de fuite demande une inspection méthodique de
                la couverture et des points singuliers. En cas d'urgence, nous intervenons
                {site.emergency.toLowerCase()}.
              </p>
            </ProseBlock>

            <ProseBlock number="07 //" eyebrow="Copropriété" title="Intervention en copropriété">
              <p>
                Les toitures de copropriété — immeubles du centre, ensembles plus récents —
                relèvent des parties communes. Nous travaillons avec les syndics et les conseils
                syndicaux. Nous fournissons les devis détaillés et les documents nécessaires à
                la consultation et à la validation des travaux en assemblée générale.
              </p>
            </ProseBlock>
          </div>
        </div>
      </div>

      <SlateSignature />
      <Zone />
      <FAQSection
        items={faqLocal}
        number="08 //"
        title="Couvreur à Angers : vos questions"
        intro="Les questions locales que l'on nous pose le plus souvent, à Angers et dans les communes du secteur."
      />
      <FinalCTA />
      <ContactSection />
    </>
  );
}