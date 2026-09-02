import Seo from "@/components/seo/Seo";
import PageHero from "@/components/sections/PageHero";
import ProseBlock, { ProseImage } from "@/components/sections/ProseBlock";
import Process from "@/components/home/Process";
import Price from "@/components/home/Price";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import ContactSection from "@/components/home/ContactSection";
import { faqService, site } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const breadcrumbs = [
  { name: "Accueil", to: "/" },
  { name: "Réfection toiture ardoise" },
];

export default function Service() {
  return (
    <>
      <Seo
        title="Réfection toiture ardoise à Angers | Couverture Vasseur"
        description="Réfection de toiture en ardoise naturelle à Angers : diagnostic, dépose, charpente, liteaunage, pose, faîtage et zinguerie. Artisan RGE Qualibat, devis gratuit sous 48h."
        canonical="/toiture-ardoise-angers"
        ogImage={IMAGES.ardoiseMacro}
        faqItems={faqService}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Réfection toiture ardoise", url: "/toiture-ardoise-angers" },
        ]}
      />
      <PageHero
        image={IMAGES.faitage}
        imageAlt="Détail de faîtage et d'arêtier sur une toiture en ardoise naturelle à Angers"
        breadcrumbItems={breadcrumbs}
        label="PRESTATION · ARDOISE · ANGERS"
        title="Réfection de toiture en ardoise à Angers"
        intro="Du diagnostic à la réception, une réfection menée dans les règles de l'art — pensée pour la longévité de la couverture et le respect du bâti angevin."
      />

      <div className="py-20 lg:py-28">
        <div className="container-vasseur">
          <div className="space-y-20 lg:space-y-28">
            <ProseBlock number="01 //" eyebrow="Introduction" title="Une toiture en ardoise, un ouvrage qui se pense avant de se poser">
              <p>
                Une réfection de toiture en ardoise n'est pas une simple opération de
                remplacement. C'est un chantier qui engage la solidité de l'ouvrage, la
                protection du bâti et la pérennité d'un matériau choisi pour sa longévité.
                À Angers, où l'ardoise habite le paysage depuis des générations, refaire une
                toiture en ardoise c'est aussi s'inscrire dans une continuité architecturale.
              </p>
              <p>
                Cette page décrit concrètement comment se déroule une réfection : les signes
                qui doivent alerter, le diagnostic, la préparation du chantier, la dépose, le
                travail sur la charpente, le liteaunage, la pose, le faîtage, la zinguerie et
                l'étanchéité. L'objectif est que vous sachiez précisément ce que vous achetez
                quand vous confiez votre toiture à un artisan.
              </p>
            </ProseBlock>

            <ProseBlock number="02 //" eyebrow="Diagnostic" title="Les signes d'une toiture en ardoise à rénover">
              <p>
                Plusieurs signes doivent faire envisager une rénovation. Des ardoises qui
                glissent ou se fendillent, une accumulation de mousse, des traces d'humidité
                dans les combles, des coulures sur les murs ou une déformation du liteaunage
                sont autant d'indicateurs. Une toiture en ardoise peut aussi simplement
                atteindre un âge où la reprise devient plus économique que les réparations
                successives.
              </p>
              <p>
                Le diagnostic se fait sur place. On examine l'état de la couverture, la
                fixation des ardoises, la charpente, les points singuliers et la zinguerie.
                C'est ce diagnostic qui détermine si une réfection partielle suffit ou si
                l'ensemble du versant doit être repris.
              </p>
            </ProseBlock>

            <ProseImage
              src={IMAGES.ardoiseMacro}
              alt="Gros plan de la matière ardoise naturelle, structure lamellaire"
              caption="ARDOISE NATURELLE · MATIÈRE"
            />

            <ProseBlock number="03 //" eyebrow="Matière" title="L'ardoise naturelle, un matériau qui se choisit">
              <p>
                L'ardoise naturelle est une pierre fendue en feuilles minces. Sa longévité en
                fait l'un des matériaux de couverture les plus durables qui soient. Bien
                posée, une toiture en ardoise dépasse largement plusieurs décennies de
                service. Sa résistance au gel, à l'humidité et aux variations climatiques la
                rend particulièrement adaptée au climat de l'Anjou.
              </p>
              <p>
                Le choix de l'ardoise — son origine, son format, son épaisseur — dépend de la
                pente, de l'exposition et des usages locaux. La pose au crochet ou au clou se
                décide selon les règles professionnelles et le contexte du chantier. C'est un
                matériau exigeant, qui récompense la précision.
              </p>
            </ProseBlock>

            <ProseBlock number="04 //" eyebrow="Étendue" title="Réfection partielle ou réfection complète">
              <p>
                On distingue la réfection partielle — reprise d'un versant ou d'une zone
                défectueuse — de la réfection complète. Lorsque l'ardoise est encore saine sur
                une partie de la toiture, on peut récupérer les ardoises en bon état pour les
                réutiliser et ne remplacer que les éléments défectueux. Cette approche
                économique et respectueuse du bâti est souvent pertinente sur les toitures
                anciennes.
              </p>
              <p>
                La réfection complète intervient quand la couverture a dépassé sa durée de vie
                utile ou que la charpente nécessite une reprise générale. Le diagnostic
                tranche entre les deux, et le devis détaille précisément le périmètre retenu.
              </p>
            </ProseBlock>

            <ProseBlock number="05 //" eyebrow="Chantier" title="La préparation et la dépose">
              <p>
                Avant toute dépose, le chantier est mis en sécurité : échafaudage, protection
                de la zone, organisation des accès. En centre ancien, les contraintes de
                stationnement et de voisinage sont anticipées dès cette phase.
              </p>
              <p>
                La dépose de l'ancienne couverture se fait versant par versant. Les ardoises
                saines sont triées et conservées pour réemploi. On profite de cette étape pour
                examiner l'état réel du liteaunage et de la charpente, qui n'apparaissent
                qu'une fois la couverture retirée.
              </p>
            </ProseBlock>

            <ProseBlock number="06 //" eyebrow="Structure" title="Charpente, liteaunage et écran de sous-toiture">
              <p>
                La charpente est inspectée. Les bois abîmés sont remplacés, les éléments
                déformés redressés. Une charpente saine est la condition d'une couverture qui
                dure : l'ardoise ne tient pas sur une structure fatiguée.
              </p>
              <p>
                Le liteaunage — les lattes horizontales sur lesquelles les ardoises sont
                fixées — est posé avec un espacement précis qui définit le pureau, c'est-à-dire
                la partie visible de chaque ardoise. Cet espacement conditionne l'alignement
                et l'étanchéité de la couverture.
              </p>
              <p>
                L'écran de sous-toiture est intégré lorsque la configuration le permet. Il
                améliore l'étanchéité à l'air, protège la charpente et limite les infiltrations
                sous l'effet du vent. En rénovation, on l'installe quand il apporte un réel
                bénéfice sans dégrader la ventilation du comble.
              </p>
            </ProseBlock>

            <ProseBlock number="07 //" eyebrow="Pose" title="La pose, le faîtage et la zinguerie">
              <p>
                Les ardoises sont posées une à une, du bas vers le haut, avec un recouvrement
                calculé. Chaque pièce est fixée au crochet ou au clif, alignée et vérifiée.
                C'est un travail lent, qui ne souffre pas l'à-peu-près.
              </p>
              <p>
                Le faîtage ferme le sommet du versant. Les arêtiers suivent les lignes de
                pente. Les rives, les noues et les raccords aux points singuliers sont traités
                avec la même attention que le versant lui-même.
              </p>
              <p>
                La zinguerie prend le relais là où l'ardoise ne suffit pas : solins, noquets,
                raccords de cheminée, gouttières et chéneaux. Le zinc est façonné sur place,
                épousant les lignes de la toiture pour assurer l'évacuation des eaux et
                l'étanchéité des transitions.
              </p>
            </ProseBlock>

            <ProseBlock number="08 //" eyebrow="Urbanisme" title="Urbanisme, ABF et copropriété à Angers">
              <p>
                Une déclaration préalable de travaux est généralement nécessaire pour une
                réfection de toiture, notamment en cas de changement de matériau ou de teinte.
                Dans les secteurs protégés et le centre ancien d'Angers, l'Architecte des
                Bâtiments de France (ABF) peut imposer le matériau, la teinte ou le mode de
                pose. Nous vous accompagnons dans la constitution du dossier.
              </p>
              <p>
                En copropriété, les travaux de toiture relèvent des parties communes. Nous
                fournissons les devis et documents nécessaires à la consultation du conseil
                syndical et à la validation de l'assemblée générale.
              </p>
            </ProseBlock>
          </div>
        </div>
      </div>

      <Process />
      <Price />
      <FAQSection
        items={faqService}
        number="09 //"
        title="Questions sur la réfection en ardoise"
        intro="Ce que l'on nous demande le plus souvent avant d'engager une réfection de toiture en ardoise."
      />
      <FinalCTA />
      <ContactSection />
    </>
  );
}