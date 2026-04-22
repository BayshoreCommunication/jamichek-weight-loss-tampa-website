import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import TreatmentLandingPage, { TreatmentData } from "@/components/empower/TreatmentLandingPage";

const evolveToneData: TreatmentData = {
  name: "Evolve Tone",
  tagline:
    "A more defined, toned physique — without a single incision, scar, or day of downtime.",
  heroSubline:
    "Non-invasive muscle strengthening and body toning that treats multiple areas simultaneously. Customized to your body, your goals, your results.",
  description:
    "Evolve Tone is an innovative non-invasive solution designed specifically to increase muscle strength. It is a non-surgical procedure that will enhance the shape and tone of your body. Treatments are customized and tailored to address your specific needs, so the end result is a more defined appearance without any incisions, scarring, or downtime. Multiple body areas can be treated simultaneously, leaving you with a more toned and defined physique.",
  benefits: [
    "Increases muscle strength and definition",
    "Enhances body shape and tone non-surgically",
    "No incisions, no scarring, no downtime",
    "Treat multiple body areas in a single session",
    "Fully customized to your specific goals and needs",
    "Comfortable, hands-free treatment experience",
    "Results visible as early as the first few sessions",
    "Ideal complement to a healthy diet and exercise routine",
  ],
  howItWorks: {
    title: "How Evolve Tone Works — EMS Muscle Stimulation",
    intro:
      "Evolve Tone uses electrical muscle stimulation (EMS) to create involuntary muscle contractions — the same principle behind physical therapy and athletic recovery, now optimized for body sculpting.",
    points: [
      "Hands-free applicators are placed over target areas (abdomen, arms, thighs, glutes)",
      "EMS pulses cause deep, consistent muscle contractions beyond what exercise achieves",
      "Sessions build muscle fiber density and improve overall tone over time",
      "Multiple areas can be treated at once — saving you time and maximizing results",
    ],
    moreEffective: [
      "Targets muscle groups more thoroughly than exercise alone",
      "Consistent stimulation leads to measurable strength gains",
      "No recovery time — walk in, walk out, resume your day",
      "Combines well with Evolve Transform or EvolveX for comprehensive body recomposition",
    ],
  },
  whySection: {
    headline: "Why Evolve Tone?",
    points: [
      "Non-surgical alternative to body contouring with real, visible results",
      "Ideal for stubborn areas that don't respond to diet or exercise alone",
      "Multiple treatment areas simultaneously — efficient and effective",
      "Fully customized treatment plans from our medical team",
      "Safe for most body types — our team will assess your candidacy",
      "Part of the proven Evolve platform trusted by leading aesthetic practices",
    ],
  },
  testimonials: [
    {
      quote:
        "I've been working out consistently but couldn't get definition in my abdomen. After Evolve Tone sessions I can actually see and feel a difference in my core strength and tone. Incredible technology.",
      author: "Marcus D., Tampa FL",
      stars: 5,
    },
    {
      quote:
        "The treatment is so easy — you just lie there while the device does all the work. My arms and thighs are noticeably more toned after my treatment series.",
      author: "Angela S., Tampa FL",
      stars: 5,
    },
    {
      quote:
        "What I love most is there's zero downtime. I had treatments during my lunch break and went straight back to work. The results keep getting better each week.",
      author: "Robert H., Tampa FL",
      stars: 5,
    },
  ],
  imagePlaceholders: {
    hero: "/images/empower/evolve-tone/hero.jpg",
    treatment: "/images/empower/evolve-tone/treatment.jpg",
    beforeAfterCount: 6,
  },
};

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Evolve Tone"
        highlight="Body Toning & Muscle Strength"
        items={[
          { label: "Home", href: "/" },
          { label: "Empower", href: "/empower" },
          { label: "Evolve Tone" },
        ]}
      />
      <TreatmentLandingPage treatment={evolveToneData} />
    </>
  );
};

export default page;
