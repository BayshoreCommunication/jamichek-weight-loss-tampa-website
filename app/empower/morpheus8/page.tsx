import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import TreatmentLandingPage, { TreatmentData } from "@/components/empower/TreatmentLandingPage";

const morpheus8Data: TreatmentData = {
  name: "Morpheus8",
  tagline:
    "Achieve younger-looking skin that gets better and better — with little to no downtime.",
  heroSubline:
    "RF Microneedling that targets skin laxity, fine lines, wrinkles, tone, texture, acne scarring, cellulite, and stretch marks — all in one treatment.",
  description:
    "Morpheus8 combines microneedling with radiofrequency energy to promote new collagen and elastin growth, remodel existing collagen and elastin, and leave the skin tighter, firmer, and more youthful in appearance. It reaches deeper layers of the skin than traditional treatments, delivering transformative results from within.",
  benefits: [
    "Boost your natural collagen production",
    "Soften fine lines and wrinkles",
    "Tighten loose or lax skin",
    "Minimize enlarged pores",
    "Visibly fade acne scars",
    "Smooth skin tone and texture",
    "Reduce cellulite and stretch marks",
    "Little to no downtime",
    "Virtually painless with topical numbing",
  ],
  howItWorks: {
    title: "How Morpheus8 Works — RF Microneedling Like No Other",
    intro:
      "Morpheus8 combines two clinically proven technologies — microneedling and radiofrequency — to address both superficial and deep skin concerns simultaneously.",
    points: [
      "Microneedling stimulates rejuvenation and delivers radiofrequency energy more precisely",
      "Radiofrequency energy adds heat to boost the skin's collagen and elastin production",
      "Targets the skin's deeper layers while avoiding surface skin damage",
      "Results continue to improve over 3–6 months as new collagen forms",
    ],
    moreEffective: [
      "More dramatic results than traditional microneedling or radiofrequency treatments alone",
      "Brighter and smoother skin after just one session",
      "Firmer, tighter skin in as few as three to four months",
      "Less risk of swelling, burning, scarring, and pigmentation issues",
      "Best of both worlds: immediate results that get better with time",
    ],
  },
  whySection: {
    headline: "Why Morpheus8?",
    points: [
      "Treatment penetrates deeper into the skin than any RF microneedling alone",
      "More collagen stimulation in deeper tissue — 3–4× improvement over surface treatments",
      "Addresses face AND body concerns (abdomen, arms, thighs, neck)",
      "Excellent for all skin types and tones",
      "Smoother, tighter, and glowing skin from within",
      "Performed by our board-supervised medical team in a clinical setting",
    ],
  },
  testimonials: [
    {
      quote:
        "I'm already seeing amazing results after just one session! My skin feels so much tighter and smoother throughout. I can't wait to see the full results after my complete treatment plan.",
      author: "Sarah M., Tampa FL",
      stars: 5,
    },
    {
      quote:
        "I was incredibly comfortable and surprised by how thorough Dr. Webster's team was throughout the whole process. I'm so excited to continue my treatments and see my confidence come back.",
      author: "Jennifer T., Tampa FL",
      stars: 5,
    },
    {
      quote:
        "My skin has never felt this smooth and firm. Tamara was incredibly professional and explained every step. I'm so excited to be certified by this treatment and see more results!",
      author: "Diana R., Tampa FL",
      stars: 5,
    },
  ],
  imagePlaceholders: {
    hero: "/images/empower/morpheus8/hero.jpg",
    treatment: "/images/empower/morpheus8/treatment.jpg",
    beforeAfterCount: 6,
  },
};

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Morpheus8"
        highlight="RF Microneedling"
        items={[
          { label: "Home", href: "/" },
          { label: "Empower", href: "/empower" },
          { label: "Morpheus8" },
        ]}
      />
      <TreatmentLandingPage treatment={morpheus8Data} />
    </>
  );
};

export default page;
