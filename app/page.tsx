import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import MedicalWeight from "@/components/MedicalWeight"
import Testimonials from "@/components/Testimonials";
import OurTeam from "@/components/OurTeam";
import Transformation from "@/components/Transformation"
import PainRelief from "@/components/PainRelief"
import Blog from "@/components/Blog"
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <WhyChoose />
      <About />
      <MedicalWeight />
      <Testimonials />
      <OurTeam />
      <Transformation />
      <PainRelief />
      <Blog />
    </>
  )
}
