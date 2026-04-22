import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import TreatmentLandingPage, { TreatmentData } from "@/components/empower/TreatmentLandingPage";

const vtoneData: TreatmentData = {
  name: "VTone",
  tagline:
    "Reclaim your confidence — life-changing pelvic floor rehabilitation with zero surgery and zero downtime.",
  heroSubline:
    "FDA-cleared intravaginal EMS therapy that rehabilitates weak pelvic floor muscles and treats urinary incontinence — under doctor supervision.",
  description:
    "VTone is a small, anatomically shaped applicator that delivers intravaginal electrical muscle stimulation (EMS) to rehabilitate weak pelvic floor muscles. Under doctor supervision and treatment with VTone, you can achieve life-changing results — treating stress, urge, and mixed urinary incontinence without surgery, medication, or downtime.",
  benefits: [
    "Treats stress, urge, and mixed urinary incontinence",
    "Strengthens and rehabilitates pelvic floor muscles",
    "Non-surgical, non-invasive procedure",
    "No downtime — return to daily activities immediately",
    "Performed under direct doctor supervision",
    "Comfortable, in-office treatment sessions",
    "Clinically proven electrical muscle stimulation technology",
    "Results that improve quality of life and confidence",
  ],
  howItWorks: {
    title: "How VTone Works — Targeted Intravaginal EMS",
    intro:
      "VTone uses electrical muscle stimulation (EMS) — the same technology used in physical therapy — delivered precisely where it's needed most through a small, anatomically designed applicator.",
    points: [
      "The VTone applicator is gently inserted and delivers controlled EMS pulses",
      "EMS causes pelvic floor muscles to contract and relax, building strength",
      "Targets the specific muscle groups responsible for bladder control",
      "Multiple sessions gradually rehabilitate weakened or damaged pelvic floor",
    ],
    moreEffective: [
      "More targeted than Kegel exercises alone — works the full pelvic floor",
      "Medically supervised for safety and optimal treatment protocols",
      "Clinically studied for stress, urge, and mixed urinary incontinence",
      "Non-hormonal alternative to medication-based incontinence treatments",
    ],
  },
  whySection: {
    headline: "Why VTone?",
    points: [
      "1 in 3 women experience urinary incontinence — VTone offers real, lasting relief",
      "No surgery, no mesh, no medication side effects",
      "FDA-cleared technology with proven clinical outcomes",
      "Performed by our medical team in a private, comfortable setting",
      "Treatment plans are fully customized to your needs and goals",
      "Many patients report significant improvement after just a few sessions",
    ],
  },
  testimonials: [
    {
      quote:
        "After having three kids I thought leaking when I laugh or sneeze was just something I had to live with. After VTone I feel like myself again — it's truly life-changing.",
      author: "Michelle K., Tampa FL",
      stars: 5,
    },
    {
      quote:
        "I was nervous at first but the team made me feel completely at ease. The treatment is comfortable and the results have exceeded my expectations. I wish I had done this sooner.",
      author: "Patricia L., Tampa FL",
      stars: 5,
    },
    {
      quote:
        "The improvement in my quality of life is incredible. I can exercise, laugh, and sneeze without worry. This treatment gave me my confidence back.",
      author: "Susan B., Tampa FL",
      stars: 5,
    },
  ],
  imagePlaceholders: {
    hero: "/images/empower/vtone/hero.jpg",
    treatment: "/images/empower/vtone/treatment.jpg",
    beforeAfterCount: 4,
  },
};

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="VTone"
        highlight="Pelvic Floor Rehabilitation"
        items={[
          { label: "Home", href: "/" },
          { label: "Empower", href: "/empower" },
          { label: "VTone" },
        ]}
      />
      <TreatmentLandingPage treatment={vtoneData} />
    </>
  );
};

export default page;
