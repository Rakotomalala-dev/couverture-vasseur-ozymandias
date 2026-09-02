import Seo from "@/components/seo/Seo";
import Hero from "@/components/home/Hero";
import ProofBar from "@/components/home/ProofBar";
import Services from "@/components/home/Services";
import SlateSignature from "@/components/home/SlateSignature";
import Craftsmanship from "@/components/home/Craftsmanship";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import Realisations from "@/components/home/Realisations";
import Artisan from "@/components/home/Artisan";
import Process from "@/components/home/Process";
import Price from "@/components/home/Price";
import Zone from "@/components/home/Zone";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import ContactSection from "@/components/home/ContactSection";
import { faq } from "@/lib/site";
import { IMAGES } from "@/lib/images";

export default function Home() {
  return (
    <>
      <Seo
        title="Couvreur à Angers — Toiture & ardoise naturelle | Couverture Vasseur"
        description="Artisan couvreur certifié RGE Qualibat à Angers. Spécialiste de l'ardoise naturelle, de la réfection de toiture et de la zinguerie. Devis gratuit sous 48h. Intervention urgence fuite 7j/7."
        canonical="/"
        ogImage={IMAGES.hero}
        faqItems={faq}
      />
      <Hero />
      <ProofBar />
      <Services />
      <SlateSignature />
      <Craftsmanship />
      <BeforeAfterSection />
      <Realisations />
      <Artisan />
      <Process />
      <Price />
      <Zone />
      <FAQSection
        number="11 //"
        title="Questions fréquentes"
        intro="Les questions que l'on nous pose le plus souvent, à Angers et dans les communes alentour."
      />
      <FinalCTA />
      <ContactSection />
    </>
  );
}