import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import TreatmentLandingPage, { TreatmentData } from "@/components/empower/TreatmentLandingPage";

const evolvexData: TreatmentData = {
  name: "EvolveX",
  tagline:
    "One system. Three powerful modalities. Fully personalized for your skin, your body, your goals.",
  heroSubline:
    "Bipolar radiofrequency + electrical muscle stimulation in a single platform — customizable care plans that evolve with you.",
  description:
    "EvolveX brings together bipolar radiofrequency (RF) and electrical muscle stimulation (EMS) technologies within one system. Each modality can be used independently or combined across successive treatments, allowing us to tailor care plans based on individual assessment and treatment goals. Whether you're targeting skin laxity, fat reduction, or muscle toning — EvolveX does it all.",
  benefits: [
    "Bipolar RF tightens skin and targets stubborn fat",
    "EMS builds and tones muscle without surgery",
    "Modalities can be combined for comprehensive results",
    "Fully customizable to your assessment and goals",
    "Treats abdomen, arms, thighs, flanks, and more",
    "Hands-free applicators for a comfortable experience",
    "No surgery, no downtime, no scarring",
    "Visible improvements in skin tone, fat, and muscle",
  ],
  howItWorks: {
    title: "How EvolveX Works — RF + EMS in One Platform",
    intro:
      "EvolveX combines two scientifically proven energy modalities into a single, versatile system that can be tailored to achieve your unique body goals.",
    points: [
      "Bipolar RF energy heats deep tissue to tighten skin and disrupt fat cells",
      "EMS creates powerful muscle contractions to build strength and definition",
      "Modalities can be layered in a single session or combined across a treatment series",
      "Smart technology monitors tissue temperature for safe, consistent delivery",
    ],
    moreEffective: [
      "Addresses fat, skin, and muscle simultaneously — most other devices treat only one",
      "Bipolar RF reaches precise depths for optimal skin tightening and contouring",
      "Combined approach delivers body recomposition results, not just spot treatment",
      "One cohesive care plan — no need for multiple devices or separate appointments",
    ],
  },
  whySection: {
    headline: "Why EvolveX?",
    points: [
      "The most versatile body platform available — skin, fat, and muscle in one device",
      "Individually designed care plans based on your body assessment and goals",
      "Minimal discomfort and zero downtime — resume life immediately",
      "Administered by our expert medical team under physician oversight",
      "Proven platform trusted by leading aesthetic physicians worldwide",
      "Complements weight loss results by addressing skin laxity and body composition",
    ],
  },
  testimonials: [
    {
      quote:
        "After losing 40 lbs I had loose skin on my abdomen that I thought I'd need surgery for. EvolveX has tightened everything and I feel amazing. The team here is phenomenal.",
      author: "Christine W., Tampa FL",
      stars: 5,
    },
    {
      quote:
        "What sets EvolveX apart is how customized it is. They assessed my specific concerns and built a plan around me. The combination of RF and EMS together is next level.",
      author: "David M., Tampa FL",
      stars: 5,
    },
    {
      quote:
        "I can honestly say this is the best investment I've made in myself. My arms, abdomen, and thighs all look and feel different. Worth every single session.",
      author: "Natalie F., Tampa FL",
      stars: 5,
    },
  ],
  imagePlaceholders: {
    hero: "/images/empower/evolvex/hero.jpg",
    treatment: "/images/empower/evolvex/treatment.jpg",
    beforeAfterCount: 6,
  },
};

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="EvolveX"
        highlight="RF + EMS Body Platform"
        items={[
          { label: "Home", href: "/" },
          { label: "Empower", href: "/empower" },
          { label: "EvolveX" },
        ]}
      />
      <TreatmentLandingPage treatment={evolvexData} />
    </>
  );
};

export default page;
