// Centralized business data for Couverture Vasseur
// Single source of truth — never duplicate these values across the site.

export const site = {
  name: "Couverture Vasseur",
  logoUrl:
    "https://media.base44.com/images/public/6a966eb38c8621e5d3b67d3b/1d7665baa_logo-couverture-vasseur.png",
  owner: "Julien Vasseur",
  city: "Angers",
  department: "Maine-et-Loire",
  departmentCode: "49",
  region: "Pays de la Loire",
  yearsExperience: 12,
  teamSize: 4, // Julien + 3 compagnons
  rating: 4.9,
  reviewCount: 47,
  phone: "02 41 87 34 12",
  phoneHref: "+33241873412",
  email: "contact@couverture-vasseur.fr",
  promise: "Devis gratuit sous 48 h",
  emergency: "Intervention fuite 7 j / 7",
  certifications: [ "Garantie décennale AXA","RGE Qualibat"],
  // Approximate coordinates for Angers (publicly known, reliable)
  geo: { lat: 47.4724, lng: -0.5558 },
  interventionRadiusKm: 30,
  communes: [
    "Angers",
    "Avrillé",
    "Beaucouzé",
    "Les Ponts-de-Cé",
    "Trélazé",
    "Saint-Barthélemy-d'Anjou",
    "Écouflant",
  ],
};

export const nav = [
  { label: "Accueil", path: "/" },
  { label: "Prestations", path: "/#prestations" },
  { label: "Réalisations", path: "/#realisations" },
  { label: "Savoir-faire", path: "/#savoir-faire" },
  { label: "Angers", path: "/couvreur-angers" },
  { label: "Contact", path: "/#contact" },
];

export const services = [
  {
    id: "refection",
    title: "Réfection complète de toiture",
    description:
      "Dépose de l'ancienne couverture, contrôle de la charpente, mise en œuvre d'un écran de sous-toiture, liteaunage et pose d'une nouvelle couverture dans les règles de l'art. La solution when la toiture a dépassé sa durée de vie utile.",
  },
  {
    id: "fuite",
    title: "Réparation et recherche de fuite",
    description:
      "Diagnostic méthodique des infiltrations, localisation précise du point d'eau, réparation ciblée ou reprise localisée de la zone concernée. Intervention d'urgence 7 j / 7 pour limiter les dégâts.",
  },
  {
    id: "ardoise",
    title: "Couverture en ardoise naturelle",
    description:
      "Pose d'ardoise naturelle au crochet ou au clou, selon les règles professionnelles et l'usage local. La matière de référence pour les toitures angevines, choisie pour sa longévité et son intégration au bâti.",
  },
  {
    id: "zinguerie",
    title: "Zinguerie",
    description:
      "Façonnage et pose d'éléments en zinc : raccords, solins, noquets, rives et habillages. Le travail de zinguerie garantit l'étanchéité aux points singuliers où la couverture seule ne suffit pas.",
  },
  {
    id: "gouttieres",
    title: "Gouttières et chéneaux",
    description:
      "Pose et remplacement de gouttières en zinc, PVC ou aluminium, ainsi que des chéneaux. Évacuation des eaux pluviales dimensionnée pour protéger façades et soubassements.",
  },
  {
    id: "demoussage",
    title: "Démoussage et traitement hydrofuge",
    description:
      "Nettoyage de la toiture, élimination des mousses et lichens, puis application d'un traitement hydrofuge. Une intervention d'entretien qui prolonge la durée de vie de la couverture.",
  },
  {
    id: "fenetres-toit",
    title: "Fenêtres de toit",
    description:
      "Pose, remplacement et étanchéification des fenêtres de toit. Intégration soignée dans la couverture, raccord d'ardoise et de zinc autour de l'ouvrage pour une parfaite étanchéité.",
  },
  {
    id: "isolation",
    title: "Isolation des combles",
    description:
      "Isolation des combles en complément d'une intervention sur la toiture, pour améliorer le confort thermique et réduire les déperditions. Une approche cohérente quand on intervient sur le rampant.",
  },
];

export const process = [
  { num: "01", title: "Demande", text: "Vous nous contactez par téléphone ou via le formulaire. Nous échangeons sur la nature de votre besoin." },
  { num: "02", title: "Diagnostic", text: "Visite de la toiture, examen de l'état réel, identification de l'origine des désordres." },
  { num: "03", title: "Devis", text: "Présentation claire et chiffrée des travaux à réaliser, sans ambiguïté sur le périmètre." },
  { num: "04", title: "Intervention", text: "Organisation du chantier, mise en sécurité, réalisation dans le respect du bâti." },
  { num: "05", title: "Réception", text: "Contrôle final de la couverture et de la zinguerie, remise des documents et garantie." },
];

export const priceFactors = [
  "La surface de la toiture à traiter",
  "La pente et l'accessibilité du chantier",
  "L'état de la charpente existante",
  "Le matériau de couverture retenu",
  "L'étendue de la zinguerie à reprendre",
  "Le besoin d'échafaudage et la contrainte de stationnement",
  "La complexité du bâti : lucarnes, noues, points singuliers",
  "Les contraintes d'accès en centre ancien (rues étroites)",
];

export const faq = [
  {
    q: "Quand faut-il refaire une toiture en ardoise ?",
    a: "Une toiture en ardoise naturelle peut durer plusieurs décennies, mais plusieurs signes doivent alerter : ardoises qui glissent ou qui se fendillent, présence de mousse importante, traces d'infiltration dans les combles, déformation du liteaunage. Un diagnostic sur place permet de déterminer si une réfection partielle suffit ou si l'ensemble de la couverture doit être reprise.",
  },
  {
    q: "Combien coûte une rénovation de toiture ?",
    a: "Le coût dépend de la surface, de la pente, de l'état de la charpente, du matériau choisi, de la zinguerie à reprendre et des contraintes d'accès au chantier. C'est précisément pour cette raison que nous établissons un devis gratuit après visite, plutôt que de communiquer un prix générique qui ne correspondrait pas à votre situation.",
  },
  {
    q: "Comment identifier une fuite de toiture ?",
    a: "Les signes les plus fréquents sont des traces d'humidité au plafond, des auréoles, une odeur de moisi dans les combles, ou des coulures sur les murs. La fuite n'est pas toujours située à l'aplomb de la trace visible : l'eau peut cheminer le long de la charpente. La recherche de fuite demande une inspection méthodique de la couverture et des points singuliers.",
  },
  {
    q: "Combien de temps dure une intervention ?",
    a: "Cela varie selon l'ampleur des travaux. Une réparation ciblée de fuite peut être traitée en une demi-journée, tandis qu'une réfection complète se chiffre en jours ou semaines selon la surface. Nous communiquons un délai réaliste dès le devis.",
  },
  {
    q: "Peut-on rénover une ancienne toiture en ardoise ?",
    a: "Oui. Une toiture ancienne en ardoise peut souvent être conservée partiellement : on récupère les ardoises saines pour les réutiliser, et on remplace uniquement les éléments défectueux. Le diagnostic permet de juger de la pertinence d'une rénovation partielle plutôt qu'un remplacement complet.",
  },
  {
    q: "Faut-il une autorisation d'urbanisme ?",
    a: "Une déclaration préalable de travaux est généralement nécessaire pour une réfection de toiture, notamment en cas de changement de matériau ou de couleur. Dans le centre ancien d'Angers et en secteur protégé, l'Architecte des Bâtiments de France (ABF) peut imposer des contraintes. Nous vous accompagnons dans ces démarches.",
  },
  {
    q: "Quelles contraintes dans le centre ancien d'Angers ?",
    a: "Le bâti ancien angevin présente des accès étroits, des échafaudages difficiles à implanter et des contraintes de stationnement. Certaines rues imposent une organisation particulière du chantier. La connaissance du bâti local permet d'anticiper ces contraintes et de les intégrer au devis.",
  },
  {
    q: "Intervenez-vous en urgence ?",
    a: "Oui. En cas de fuite, nous intervenons 7 j / 7 pour sécuriser la toiture et limiter les dégâts. Une mise en sécurité provisoire peut être réalisée dans l'attente de la réparation définitive.",
  },
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui, le devis est gratuit et établi sous 48 h après la visite. Il détaille précisément les travaux à réaliser, sans engagement tant que vous ne l'avez pas signé.",
  },
  {
    q: "Quelle garantie couvre les travaux ?",
    a: "Nos travaux sont couverts par la garantie décennale AXA, qui protège contre les désordres affectant la solidité de l'ouvrage pendant dix ans. La certification RGE Qualibat est un engagement supplémentaire sur la qualité de mise en œuvre.",
  },
];

export const faqService = [
  {
    q: "Faut-il déposer toute la toiture pour une réfection ?",
    a: "Pas nécessairement. On distingue la réfection partielle — reprise d'un versant ou d'une zone défectueuse — de la réfection complète. Le diagnostic détermine ce qui doit être déposé. Lorsque l'ardoise est encore saine sur une partie de la toiture, une rénovation ciblée peut suffire.",
  },
  {
    q: "L'ardoise naturelle se pose-t-elle au crochet ou au clou ?",
    a: "Les deux techniques existent et dépendent de la pente, de l'exposition et des usages locaux. La pose au crochet est courante en France et permet un bon recouvrement ; la pose au clou est parfois retenue pour des pentes fortes ou des expositions particulières. Le choix se fait selon les règles professionnelles et le contexte du chantier.",
  },
  {
    q: "Faut-il un écran de sous-toiture ?",
    a: "L'écran de sous-toiture (HPV ou non) est aujourd'hui recommandé, voire obligatoire en construction neuve. En rénovation, on l'intègre lorsque la configuration le permet et qu'il apporte un réel bénéfice d'étanchéité à l'air et de protection du bois de charpente.",
  },
  {
    q: "Quelle est la durée de vie d'une ardoise naturelle ?",
    a: "L'ardoise naturelle est l'un des matériaux de couverture les plus durables. Bien posée, une toiture en ardoise peut dépasser plusieurs décennies de durée de vie. Sa longévité dépend de la qualité de la pierre, de la pente, de l'exposition et de la rigueur de la pose.",
  },
  {
    q: "L'ABF intervient-il pour une toiture en ardoise à Angers ?",
    a: "Dans les secteurs protégés et le centre ancien, l'Architecte des Bâtiments de France peut imposer le matériau, la teinte ou le mode de pose. La déclaration préalable de travaux est à déposer en mairie. Nous vous accompagnons dans la constitution du dossier.",
  },
];

export const faqLocal = [
  {
    q: "Intervenez-vous dans tout Angers ?",
    a: "Oui, nous intervenons à Angers intra-muros — La Doutre, le centre historique, Belle-Beille, La Baumette, Saint-Serge — ainsi que dans les communes limitrophes dans un rayon de 30 km : Avrillé, Beaucouzé, Les Ponts-de-Cé, Trélazé, Saint-Barthélemy-d'Anjou et Écouflant.",
  },
  {
    q: "Comment gérez-vous les accès difficiles en centre ancien ?",
    a: "Le centre ancien d'Angers présente des rues étroites, des façades rapprochées et des contraintes de stationnement. Nous adaptons l'organisation du chantier, le type d'échafaudage et les horaires pour respecter le voisinage et le bâti. Ces contraintes sont intégrées au devis dès le diagnostic.",
  },
  {
    q: "Connaissez-vous le bâti angevin ?",
    a: "Oui. Le bâti angevin mêle maisons de ville en pierre de tuffeau, hôtels particuliers, architecture des faubourgs et pavillonnaux plus récents. Chaque type de bâti appelle une approche différente de la couverture, notamment pour l'ardoise et la zinguerie des points singuliers.",
  },
  {
    q: "Intervenez-vous en copropriété ?",
    a: "Oui. Nous travaillons avec les syndics et les conseils syndicaux pour des interventions sur toitures de copropriété. Nous fournissons les devis et documents nécessaires à la consultation et à la validation des travaux.",
  },
  {
    q: "L'ardoise est-elle adaptée au climat angevin ?",
    a: "L'ardoise naturelle est particulièrement bien adaptée au climat de l'Anjou : elle résiste aux variations d'humidité, au gel et aux intempéries. C'est d'ailleurs le matériau historique des toitures angevines, choisi depuis longtemps pour sa robustesse et son intégration au paysage.",
  },
];