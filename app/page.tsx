import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import Empower from "@/components/home/Empower";
import Hero from "@/components/home/hero";
import MedicalWeight from "@/components/home/MedicalWeight";
import NewPatientSpecial from "@/components/home/NewPatientSpecial";
import OurTeam from "@/components/home/OurTeam";
import PainRelief from "@/components/home/PainRelief";
import Testimonials from "@/components/home/Testimonials";
import Transformation from "@/components/home/Transformation";
import WhyChoose from "@/components/home/WhyChoose";
import Faq from "@/components/shared/Faq";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
      >
        Skip to main content
      </a>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <WhyChoose />
        <NewPatientSpecial />
        <Empower />
        <About />
        <MedicalWeight />
        <Testimonials />
        <OurTeam />
        <Transformation />
        <PainRelief />
        <Faq />
        {/* <Blog /> */}
      </main>
    </>
  );
}
