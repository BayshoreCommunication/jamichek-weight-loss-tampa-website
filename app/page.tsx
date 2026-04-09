import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import Empower from "@/components/home/Empower";
import Hero from "@/components/home/hero";
import MedicalWeight from "@/components/home/MedicalWeight";
import NewPatientSpecial from "@/components/home/NewPatientSpecial";
import OurTeam from "@/components/home/OurTeam";
import PainRelief from "@/components/home/PainRelief";
import PeptideConsultation from "@/components/peptides/PeptideConsultation";
import Testimonials from "@/components/home/Testimonials";
import Transformation from "@/components/home/Transformation";
import WhyChoose from "@/components/home/WhyChoose";
import Faq from "@/components/shared/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <NewPatientSpecial />
      <Empower />
      {/* <PeptideConsultation /> */}
      <About />
      <MedicalWeight />
      <Testimonials />
      <OurTeam />
      <Transformation />
      <PainRelief />
      <Faq />
      {/* <Blog /> */}
    </>
  );
}
