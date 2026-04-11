export type EmpowerTreatment = {
  slug: string;
  section: "featured" | "evolve";
  title: string;
  badge: string;
  summary: string;
  intro: string;
  details: string[];
  benefits: string[];
  idealFor: string[];
  image: string;
  imageAlt: string;
};

export const empowerTreatments: EmpowerTreatment[] = [
  {
    slug: "empower-rf",
    section: "featured",
    title: "Empower RF",
    badge: "Collagen Support",
    summary:
      "It works by delivering controlled heat energy to support collagen production, helping the skin feel firmer, smoother, and refreshed.",
    intro:
      "Empower RF is a non-surgical treatment that uses controlled radiofrequency energy to warm targeted tissue and encourage a stronger collagen response.",
    details: [
      "The treatment is designed to support tone, texture, and overall rejuvenation without the recovery period that comes with surgery. Sessions are typically planned around your comfort level and your provider's recommendations.",
      "Patients often choose Empower RF when they want a modern option to address laxity, texture, and confidence concerns through a more convenient treatment plan.",
    ],
    benefits: [
      "Uses controlled radiofrequency energy in a non-surgical setting",
      "Supports collagen remodeling for a firmer and smoother result",
      "Designed for patients who want rejuvenation with minimal interruption",
    ],
    idealFor: [
      "Patients looking for a non-invasive rejuvenation option",
      "Anyone interested in improving tone and texture without surgery",
      "People who want a treatment plan tailored to comfort and lifestyle",
    ],
    image: "/images/empower/empower.jpeg",
    imageAlt: "Empower RF treatment device",
  },
  {
    slug: "evolve",
    section: "featured",
    title: "EvolveX",
    badge: "Body Contouring",
    summary:
      "It uses radiofrequency energy and electromagnetic stimulation to reshape targeted areas and improve overall body appearance without surgery.",
    intro:
      "Evolve is a non-invasive body contouring platform that can help address skin laxity, contour concerns, and muscle tone depending on the treatment approach.",
    details: [
      "By combining technologies in a customizable way, Evolve can target several body goals inside one treatment plan. That makes it useful for patients who want help refining shape without downtime or surgical recovery.",
      "A provider can recommend the right protocol based on the area being treated, your body-composition goals, and the results you want to prioritize.",
    ],
    benefits: [
      "Non-surgical body contouring with no incision or anesthesia",
      "Can support tone, tightening, and reshaping in targeted areas",
      "Flexible treatment planning based on your body goals",
    ],
    idealFor: [
      "Patients interested in contouring without surgery",
      "People who want support for tone and appearance in stubborn areas",
      "Anyone looking for a customizable, technology-based body treatment",
    ],
    image: "/images/empower/evolve.jpeg",
    imageAlt: "Evolve body contouring device",
  },
  {
    slug: "evolve-tite",
    section: "evolve",
    title: "Evolve Tite",
    badge: "Skin Tightening",
    summary:
      "Evolve Tite uses hands-free radiofrequency energy to warm targeted areas and support smoother, tighter-looking skin without surgery.",
    intro:
      "Evolve Tite is designed for patients who want a non-invasive option for skin tightening in common treatment areas such as the abdomen, arms, flanks, and thighs.",
    details: [
      "The applicators deliver controlled heat to the tissue while your provider customizes settings around comfort and treatment goals. This makes it a practical option for improving the appearance of mild laxity without downtime.",
      "Patients often choose Evolve Tite when they want to refine skin firmness and support a more sculpted look as part of a broader body-contouring plan.",
    ],
    benefits: [
      "Hands-free radiofrequency treatment with no surgery required",
      "Supports tighter-looking skin in targeted body areas",
      "Can fit into a broader contouring plan with minimal interruption",
    ],
    idealFor: [
      "Patients bothered by mild skin laxity",
      "Anyone looking for non-surgical tightening support",
      "People who want convenient treatment sessions with no recovery time",
    ],
    image: "/images/empower/tile.jpeg",
    imageAlt: "Evolve Tite body contouring technology",
  },
  {
    slug: "evolve-tone",
    section: "evolve",
    title: "Evolve Tone",
    badge: "Muscle Stimulation",
    summary:
      "Evolve Tone uses electromagnetic stimulation to create muscle contractions that can support tone, definition, and a stronger overall body-contouring result.",
    intro:
      "Evolve Tone focuses on muscle conditioning by delivering controlled electromagnetic stimulation to targeted areas such as the abdomen, buttocks, and limbs.",
    details: [
      "The treatment is designed for patients who want to complement exercise and lifestyle changes with a technology-based approach that supports muscle engagement and visible definition.",
      "Because sessions are customizable, providers can tailor a plan based on your goals, the treatment area, and how aggressively you want to pursue contour and tone improvements.",
    ],
    benefits: [
      "Uses electromagnetic stimulation to engage targeted muscles",
      "Helps support a more toned and defined appearance",
      "Can be combined with other Evolve modalities for a broader result",
    ],
    idealFor: [
      "Patients who want help improving tone in stubborn areas",
      "People looking to complement fitness and body goals",
      "Anyone interested in non-surgical muscle-conditioning support",
    ],
    image: "/images/empower/tone.jpeg",
    imageAlt: "Evolve Tone muscle stimulation treatment",
  },
  {
    slug: "evolve-transform",
    section: "evolve",
    title: "Evolve Transform",
    badge: "Contour And Tone",
    summary:
      "Evolve Transform combines radiofrequency energy with electromagnetic stimulation to support contouring, tightening, and muscle tone in one treatment approach.",
    intro:
      "Evolve Transform is the most comprehensive option in the Evolve platform, pairing body contouring and muscle-conditioning technologies inside a single treatment strategy.",
    details: [
      "This approach is useful for patients who want to target more than one concern at once, such as stubborn fullness, reduced firmness, and lack of muscle definition. It allows providers to build a treatment plan around overall body-shaping goals.",
      "Because Transform blends multiple technologies, it is often chosen by patients who want a broader non-surgical result without the downtime associated with more invasive procedures.",
    ],
    benefits: [
      "Combines contouring, tightening, and tone support in one platform",
      "Non-surgical option for patients who want a more comprehensive result",
      "Customizable treatment planning based on body goals and target areas",
    ],
    idealFor: [
      "Patients with multiple contouring goals in the same area",
      "People who want tightening and tone support together",
      "Anyone seeking a more complete non-surgical body treatment plan",
    ],
    image: "/images/empower/transform.jpeg",
    imageAlt: "Evolve Transform body contouring platform",
  },
];

export const getEmpowerTreatment = (slug: string) =>
  empowerTreatments.find((treatment) => treatment.slug === slug);

export const featuredEmpowerTreatments = empowerTreatments.filter(
  (treatment) => treatment.section === "featured",
);

export const evolveTreatments = empowerTreatments.filter(
  (treatment) => treatment.section === "evolve",
);
