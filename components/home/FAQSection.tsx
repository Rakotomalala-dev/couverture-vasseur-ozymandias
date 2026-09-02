import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FAQAccordion from "@/components/home/FAQAccordion";
import { faq } from "@/lib/site";

export default function FAQSection({ items, number = "11 //", title = "Questions fréquentes", intro }:any) {
  const data = items || faq;
  return (
    <section className="py-20 lg:py-28">
      <div className="container-vasseur">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading number={`${number}`} eyebrow="FAQ" title={title} intro={intro} />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <FAQAccordion items={data} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}