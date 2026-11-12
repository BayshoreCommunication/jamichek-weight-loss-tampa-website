import React, { ReactNode } from "react";
import Link from "next/link";

export const howNutritionalCounselingFitsIntoAMedicalWeightLossProgramMeta = {
  title: "How Nutritional Counseling Fits Into a Medical Weight Loss Program",
  metaTitle: "Nutritional Counseling in Medical Weight Loss 2026",
  slug: "how-nutritional-counseling-fits-into-a-medical-weight-loss-program",
  description:
    "See how nutritional counseling fits in a medical weight loss program, from protein targets to weight regain, with Medical Weight Loss Tampa, Florida.",
  image:
    "/images/static-blogs/nutritional-counseling-medical-weight-loss-guide.webp",
  altText:
    "Doctor showing a digital nutrition plan on a tablet to a patient beside fresh fruit and a measuring tape.",
  imageTitle: "How Nutritional Counseling Fits Medical Weight Loss",
  imageDescription:
    "Discover how personalized nutritional counseling supports medical weight loss programs by building healthy eating habits and delivering sustainable, long-term results.",
  caption:
    "Learn how personalized nutritional counseling enhances your medical weight loss journey.",
  category: "Medical Weight Loss",
  publishedAt: "2026-11-12",
  canonicalUrl:
    "https://www.medicalweightlosstampa.com/the-wellness-journal/how-nutritional-counseling-fits-into-a-medical-weight-loss-program",
};

const keyTakeaways = [
  "Medication lowers hunger. Counseling decides which kind of calorie you will intake during weight loss.",
  "The four main factors are protein, fiber, fluids, and strength work with the evidence.",
  "In the STEP 1 semaglutide trial, every participant got counseling from a dietitian or similar professional every four weeks.",
  "After treatment and lifestyle support ended, participants had regained two-thirds of their lost weight within a year.",
];

const evidenceStats = [
  {
    value: "2/3",
    description:
      "of lost weight regained within a year of stopping semaglutide and lifestyle support",
  },
  {
    value: "1.2 to 1.6",
    description:
      "grams of protein per kilogram per day in the 2025 to 2030 Dietary Guidelines",
  },
  {
    value: "4 weeks",
    description:
      "between counseling visits, written into the STEP 1 trial protocol",
  },
  {
    value: "29.6%",
    description: "of Florida adults had obesity in 2024",
  },
];

const proteinTargets = [
  { pounds: "150 lb", kg: "68 kg", min: 82, max: 109 },
  { pounds: "180 lb", kg: "82 kg", min: 98, max: 131 },
  { pounds: "220 lb", kg: "100 kg", min: 120, max: 160 },
  { pounds: "260 lb", kg: "118 kg", min: 142, max: 189 },
];

const step1ExtensionBars = [
  {
    labelLine1: "Semaglutide",
    labelLine2: "week 68",
    labelLine3: "(on treatment)",
    value: 17.3,
    color: "#0E7C86",
  },
  {
    labelLine1: "Semaglutide",
    labelLine2: "week 120",
    labelLine3: "(1 year off)",
    value: 5.6,
    color: "#D9622B",
  },
  {
    labelLine1: "Placebo",
    labelLine2: "week 68",
    labelLine3: "",
    value: 2.0,
    color: "#9DB0B5",
  },
  {
    labelLine1: "Placebo",
    labelLine2: "week 120",
    labelLine3: "",
    value: 0.1,
    color: "#CBD5DC",
  },
];

const trackingPlanRows = [
  {
    metric: "Protein per kilogram",
    why: "Protects lean mass while total intake drops",
    tampaPlate: "Eggs and black beans before 9 a.m., not toast alone",
  },
  {
    metric: "Fiber and fluids",
    why: "Slowed digestion and constipation are common complaints",
    tampaPlate:
      "Chia, citrus, beans, and water on a timer through summer heat",
  },
  {
    metric: "Micronutrients",
    why: "Smaller meals shrink the margin for iron, calcium, vitamin D, magnesium, and potassium",
    tampaPlate:
      "Leafy greens, sardines, yogurt, and labs that confirm instead of guess",
  },
  {
    metric: "Meal timing",
    why: "Early fullness and nausea punish big plates",
    tampaPlate: "Four small plates, protein first, fried food last or never",
  },
  {
    metric: "Strength work",
    why: "Gives all that protein somewhere to go",
    tampaPlate: "Two or three resistance sessions a week, even short ones",
  },
];

const realCounselingBullets = [
  "Visits are booked in advance, not offered as needed.",
  "Advice changes when your dose, labs, or symptoms change.",
  "Someone talks about tapering or stopping before you ever need to.",
  "The prescriber and the counselor work from one shared chart.",
];

const clinicTrustStats = [
  {
    value: "4.9",
    label: "star rating on Google",
  },
  {
    value: "140",
    label: "Google reviews",
  },
  {
    value: "4 years",
    label: "named Tampa Top Doc in Cosmetic Surgery",
  },
];

const faqs = [
  {
    question: "Will I have to count calories forever?",
    answer:
      "Rarely. It is most useful early on. Most people land on a few anchor habits, protein every meal being the big one, and only go back to tracking if things start drifting.",
  },
  {
    question: "Can I drink alcohol while taking a GLP-1 medication?",
    answer:
      "Check with your prescriber first, always. Alcohol makes nausea and reflux worse, adds calories with zero protein, and hits harder on a smaller appetite than it used to.",
  },
  {
    question: "Is nutritional counseling worth it without medication?",
    answer:
      "Yes. It has its own evidence base, medication or not, and it builds the exact skills medication later amplifies if you end up adding it. In a medical program, the medication's an option. It was never the requirement.",
  },
];

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-nutritional-counseling-fits-into-a-medical-weight-loss-program#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.medicalweightlosstampa.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "The Wellness Journal",
          item: "https://www.medicalweightlosstampa.com/the-wellness-journal",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How Nutritional Counseling Fits Into a Medical Weight Loss Program",
          item:
            "https://www.medicalweightlosstampa.com/the-wellness-journal/how-nutritional-counseling-fits-into-a-medical-weight-loss-program",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id":
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-nutritional-counseling-fits-into-a-medical-weight-loss-program#blogposting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.medicalweightlosstampa.com/the-wellness-journal/how-nutritional-counseling-fits-into-a-medical-weight-loss-program",
      },
      headline:
        "How Nutritional Counseling Fits Into a Medical Weight Loss Program",
      name: "Nutritional Counseling in Medical Weight Loss 2026",
      description:
        "See how nutritional counseling fits in a medical weight loss program, from protein targets to weight regain, with Medical Weight Loss Tampa, Florida.",
      url:
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-nutritional-counseling-fits-into-a-medical-weight-loss-program",
      image: {
        "@type": "ImageObject",
        url:
          "https://www.medicalweightlosstampa.com/images/static-blogs/nutritional-counseling-medical-weight-loss-guide.webp",
      },
      isPartOf: {
        "@type": "Blog",
        "@id":
          "https://www.medicalweightlosstampa.com/the-wellness-journal#blog",
        name: "The Wellness Journal",
        url: "https://www.medicalweightlosstampa.com/the-wellness-journal",
      },
      about: {
        "@type": "Thing",
        name: "Nutritional Counseling in Medical Weight Loss Programs",
      },
      keywords: [
        "nutritional counseling medical weight loss",
        "medical weight loss Tampa",
        "GLP-1 nutrition counseling",
        "protein targets GLP-1",
        "STEP 1 weight regain",
        "SURMOUNT-4 tirzepatide",
        "preserve lean muscle mass weight loss",
        "personalized nutrition plan Tampa",
        "physician-supervised weight loss",
        "Medical Weight Loss Tampa",
      ],
      author: {
        "@type": "Organization",
        name: "Medical Weight Loss Tampa Clinical Team",
        url: "https://www.medicalweightlosstampa.com/",
      },
      publisher: {
        "@type": "Organization",
        name: "Medical Weight Loss Tampa",
        url: "https://www.medicalweightlosstampa.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.medicalweightlosstampa.com/images/hero/logo.png",
        },
      },
      datePublished: "2026-11-12",
      dateModified: "2026-11-12",
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-nutritional-counseling-fits-into-a-medical-weight-loss-program#faq",
      url:
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-nutritional-counseling-fits-into-a-medical-weight-loss-program",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const ExternalLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="nofollow noopener noreferrer"
    className={
      className ||
      "font-semibold text-[#0E7C86] underline decoration-[#0E7C86]/50 underline-offset-4 transition-colors hover:text-[#0B2A3B]"
    }
  >
    {children}
  </a>
);

const InternalLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <Link
    href={href}
    className={
      className ||
      "font-semibold text-[#0E7C86] underline decoration-[#0E7C86]/50 underline-offset-4 transition-colors hover:text-[#0B2A3B]"
    }
  >
    {children}
  </Link>
);

const ProteinRangeChart = () => {
  const minDomain = 40;
  const maxDomain = 210;
  const chartLeft = 80;
  const chartRight = 668;
  const chartWidth = chartRight - chartLeft;
  const xTicks = [40, 60, 80, 100, 120, 140, 160, 180, 200];

  const toX = (val: number) =>
    chartLeft + ((val - minDomain) / (maxDomain - minDomain)) * chartWidth;

  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-[#D9D4C5] bg-white p-4 sm:p-6 shadow-sm">
      <div className="w-full">
        <svg
          viewBox="0 0 700 310"
          role="img"
          aria-label="Title: Range graph of daily protein targets by body weight - Description: Range graph of daily protein targets by body weight"
          className="w-full h-auto"
        >
          <title>Range graph of daily protein targets by body weight</title>
          <desc>
            Range graph of daily protein targets by body weight from 150 lb to
            260 lb at 1.2 to 1.6 grams per kilogram per day.
          </desc>

          {/* Vertical dotted grid lines and X-axis ticks */}
          {xTicks.map((tick) => {
            const x = toX(tick);
            return (
              <g key={tick}>
                <line
                  x1={x}
                  y1={20}
                  x2={x}
                  y2={245}
                  stroke="#D9D4C5"
                  strokeWidth={1}
                  strokeDasharray="2 3"
                />
                <line
                  x1={x}
                  y1={245}
                  x2={x}
                  y2={251}
                  stroke="#5B6770"
                  strokeWidth={1}
                />
                <text
                  x={x}
                  y={269}
                  textAnchor="middle"
                  fontSize="13"
                  fill="#5B6770"
                  fontFamily="sans-serif"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {/* Bottom axis line */}
          <line
            x1={chartLeft}
            y1={245}
            x2={chartRight}
            y2={245}
            stroke="#CBD5DC"
            strokeWidth={1.5}
          />

          {/* Horizontal range bars */}
          {proteinTargets.map((row, idx) => {
            const centerY = 48 + idx * 54;
            const xStart = toX(row.min);
            const xEnd = toX(row.max);
            const barHeight = 28;
            return (
              <g key={row.pounds}>
                <text
                  x={chartLeft - 14}
                  y={centerY + 5}
                  textAnchor="end"
                  fontSize="14"
                  fontWeight="600"
                  fill="#222B33"
                  fontFamily="sans-serif"
                >
                  {row.pounds}
                </text>

                <rect
                  x={xStart}
                  y={centerY - barHeight / 2}
                  width={xEnd - xStart}
                  height={barHeight}
                  rx={3}
                  fill="#0E7C86"
                />

                {/* Min endpoint dot & label */}
                <circle cx={xStart} cy={centerY} r={5.5} fill="#0B2A3B" />
                <text
                  x={xStart - 12}
                  y={centerY + 5}
                  textAnchor="end"
                  fontSize="14"
                  fontWeight="700"
                  fill="#0B2A3B"
                  fontFamily="sans-serif"
                >
                  {row.min}
                </text>

                {/* Max endpoint dot & label */}
                <circle cx={xEnd} cy={centerY} r={5.5} fill="#F2A900" />
                <text
                  x={xEnd + 12}
                  y={centerY + 5}
                  textAnchor="start"
                  fontSize="14"
                  fontWeight="700"
                  fill="#0B2A3B"
                  fontFamily="sans-serif"
                >
                  {row.max}
                </text>
              </g>
            );
          })}

          {/* X-axis title */}
          <text
            x={(chartLeft + chartRight) / 2}
            y={296}
            textAnchor="middle"
            fontSize="13.5"
            fill="#5B6770"
            fontFamily="sans-serif"
          >
            Grams of protein per day (low end at 1.2 g per kg, high end at 1.6 g
            per kg)
          </text>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs sm:text-sm text-[#5B6770] italic">
        Daily protein range by body weight, calculated from the 1.2 to 1.6 grams
        per kilogram guideline
      </figcaption>
    </figure>
  );
};

const Step1ExtensionChart = () => {
  const chartLeft = 72;
  const chartRight = 674;
  const chartTop = 26;
  const chartBottom = 252;
  const chartHeight = chartBottom - chartTop;
  const maxVal = 20;
  const yTicks = [0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20];
  const slotWidth = (chartRight - chartLeft) / step1ExtensionBars.length;
  const barWidth = 86;

  const toY = (val: number) => chartBottom - (val / maxVal) * chartHeight;

  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-[#D9D4C5] bg-white p-4 sm:p-6 shadow-sm">
      <div className="w-full">
        <svg
          viewBox="0 0 700 326"
          role="img"
          aria-label="Title: Vertical bar graph of net weight loss in the STEP 1 extension - Description: Vertical bar graph of net weight loss in the STEP 1 extension"
          className="w-full h-auto"
        >
          <title>
            Vertical bar graph of net weight loss in the STEP 1 extension
          </title>
          <desc>
            Vertical bar graph comparing net weight loss from starting weight in
            the STEP 1 extension: Semaglutide week 68 at 17.3%, Semaglutide week
            120 at 5.6%, Placebo week 68 at 2.0%, and Placebo week 120 at 0.1%.
          </desc>

          {/* Horizontal grid lines */}
          {yTicks.map((tick) => {
            const y = toY(tick);
            return (
              <g key={tick}>
                <line
                  x1={chartLeft}
                  y1={y}
                  x2={chartRight}
                  y2={y}
                  stroke={tick === 0 ? "#CBD5DC" : "#E6E2D8"}
                  strokeWidth={tick === 0 ? 1.5 : 1}
                />
                <text
                  x={chartLeft - 10}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="12.5"
                  fill="#5B6770"
                  fontFamily="sans-serif"
                >
                  {tick.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Y-axis label */}
          <text
            x={22}
            y={(chartTop + chartBottom) / 2}
            textAnchor="middle"
            fontSize="13"
            fill="#5B6770"
            fontFamily="sans-serif"
            transform={`rotate(-90 22 ${(chartTop + chartBottom) / 2})`}
          >
            Net weight lost from starting weight (%)
          </text>

          {/* Bars and labels */}
          {step1ExtensionBars.map((bar, idx) => {
            const centerX = chartLeft + slotWidth * (idx + 0.5);
            const x = centerX - barWidth / 2;
            const y = toY(bar.value);
            const h = Math.max(chartBottom - y, 2);
            return (
              <g key={`${bar.labelLine1}-${bar.labelLine2}`}>
                <rect
                  x={x}
                  y={bar.value < 0.2 ? chartBottom - 2 : y}
                  width={barWidth}
                  height={h}
                  fill={bar.color}
                  rx={2}
                />
                <text
                  x={centerX}
                  y={(bar.value < 0.2 ? chartBottom - 2 : y) - 9}
                  textAnchor="middle"
                  fontSize="14.5"
                  fontWeight="700"
                  fill="#0B2A3B"
                  fontFamily="sans-serif"
                >
                  {bar.value.toFixed(1)}%
                </text>
                <text
                  x={centerX}
                  y={chartBottom + 20}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="500"
                  fill="#222B33"
                  fontFamily="sans-serif"
                >
                  {bar.labelLine1}
                </text>
                <text
                  x={centerX}
                  y={chartBottom + 36}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="500"
                  fill="#222B33"
                  fontFamily="sans-serif"
                >
                  {bar.labelLine2}
                </text>
                {bar.labelLine3 ? (
                  <text
                    x={centerX}
                    y={chartBottom + 52}
                    textAnchor="middle"
                    fontSize="12.5"
                    fill="#5B6770"
                    fontFamily="sans-serif"
                  >
                    {bar.labelLine3}
                  </text>
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs sm:text-sm text-[#5B6770] italic">
        Net weight lost from starting weight in the STEP 1 extension subset
      </figcaption>
    </figure>
  );
};

export default function HowNutritionalCounselingFitsIntoAMedicalWeightLossProgram() {
  return (
    <article className="mt-8 bg-white text-[#222B33]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Header metadata section */}
      <section className="border-y border-[#D9D4C5] py-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B2A3B]">
          Medical Weight Loss Tampa | medicalweightlosstampa.com
        </p>
        <p className="mt-2 text-sm font-semibold text-[#5B6770]">
          <Link href="/" className="hover:underline text-[#0E7C86]">
            medicalweightlosstampa.com
          </Link>{" "}
          | Tampa, FL
        </p>
        <p className="mt-4 text-base font-semibold text-[#0B2A3B]">
          Explained by the Clinical Team at Medical Weight Loss Tampa
        </p>
        <p className="text-sm text-[#5B6770]">
          Published: November 12, 2026 | Updated: November 12, 2026
        </p>
      </section>

      {/* Intro paragraph */}
      <div className="mt-8 space-y-6 text-[17px] leading-8">
        <p className="text-left sm:text-justify italic text-[#222B33]">
          Nutritional counseling encourages safe weight loss. Because
          counseling decides whether your lost weight stays lost or returns. It
          helps people build habits during the process. It also fills any
          nutritional gaps if you have them when you start taking smaller
          meals.
        </p>
      </div>

      {/* Key Takeaways Box */}
      <section className="mt-10 border-l-[6px] border-[#0E7C86] bg-[#FBF6EC] rounded-r-xl overflow-hidden shadow-sm px-5 sm:px-7 py-6">
        <h2 className="text-lg sm:text-xl font-bold uppercase tracking-[0.12em] text-[#0B2A3B] text-left sm:text-justify">
          Key Takeaways
        </h2>
        <ul className="mt-4 space-y-3.5 text-[17px] leading-8">
          {keyTakeaways.map((item, index) => (
            <li key={index} className="flex gap-3 text-left">
              <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0E7C86]" />
              <span className="text-[#222B33]">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Content Sections */}
      <div className="mt-12 space-y-12">
        {/* Section 1 */}
        <section className="border-t-2 border-[#0B2A3B] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0B2A3B] md:text-[28px]">
            What does nutritional counseling do inside a medical weight loss
            program?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              A well built{" "}
              <InternalLink href="/medical-weight-loss">
                medical weight loss program
              </InternalLink>{" "}
              splits the job in two. One side is watching your dose, your labs,
              whether blood pressure&apos;s finally behaving. The other side is
              asking what you actually ate Tuesday. Neither one covers for the
              other. A program running on just the first question is running on
              one cylinder, full stop.
            </p>
            <p className="text-left sm:text-justify">
              Open{" "}
              <ExternalLink href="https://cdn.clinicaltrials.gov/large-docs/35/NCT03548935/Prot_002.pdf">
                the protocol for STEP 1
              </ExternalLink>
              , the 68 week semaglutide trial everyone quotes for that 15
              percent number, and buried in the methods is this. Every
              participant, drug or placebo, was booked for counseling with a
              dietitian or similarly qualified professional every fourth week.
              Food diaries got reviewed. Activity diaries too. So no, the trial
              never tested a drug against nothing.
            </p>

            {/* 4-Stat Metric Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {evidenceStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#EEF6F6] border-t-4 border-[#0E7C86] p-5 rounded-b-xl shadow-sm"
                >
                  <div className="text-3xl font-extrabold text-[#0E7C86]">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm text-[#5B6770] font-medium leading-relaxed text-left sm:text-justify">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="border-t-2 border-[#0B2A3B] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0B2A3B] md:text-[28px]">
            Why isn&apos;t medication alone enough?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              These drugs don&apos;t choose what you eat. They just make you
              want less of it, overall, which sounds like the same thing until
              you actually watch it play out across someone&apos;s week.
            </p>
            <p className="text-left sm:text-justify">
              In 2025, four professional societies – the American College of
              Lifestyle Medicine, the American Society for Nutrition, the
              Obesity Medicine Association, and The Obesity Society –{" "}
              <ExternalLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12304835/">
                issued a joint advisory
              </ExternalLink>{" "}
              on nutritional care for patients on GLP-1 drugs. Eight priorities
              and more than half of them are clearly the domain of counselors.
              Baseline nutrition assessment, management of gastrointestinal side
              effects and vigilance for micronutrient deficiencies before they
              become clinically significant.
            </p>

            {/* Quote Box 1 */}
            <div className="mt-8 border-l-[6px] border-[#F2A900] bg-[#FBF6EC] px-5 sm:px-7 py-5 rounded-r-xl shadow-sm">
              <blockquote className="text-[17px] sm:text-[18px] leading-8 text-[#0B2A3B] italic font-medium text-left sm:text-justify">
                &ldquo;GLP-1s mark significant progress in obesity treatment,
                but medication alone isn&apos;t enough.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-left sm:text-justify">
                <strong className="text-[#0E7C86] font-bold">
                  Dariush Mozaffarian, MD, DrPH
                </strong>{" "}
                <span className="text-[#5B6770]">
                  | Tufts University, chair of the joint advisory
                </span>
              </p>
            </div>

            <p className="text-left sm:text-justify">
              Muscle is where people argue, so let&apos;s be careful here. The
              STEP 1 body composition substudy, 140 people, found that roughly
              four out of every ten pounds lost showed up as lean mass on the
              DEXA scan. Tirzepatide&apos;s version of that same study landed
              closer to a quarter. And lean tissue as a share of total body mass
              actually rose in both groups. Before anyone shrugs it off either,
              the advisory still lists muscle preservation as its priority. Eat
              enough protein. Lift something heavy a couple times a week. Let
              the ratio tilt toward fat.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="border-t-2 border-[#0B2A3B] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0B2A3B] md:text-[28px]">
            How much protein do you need when your appetite reduces?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              The newest{" "}
              <ExternalLink href="https://extension.okstate.edu/fact-sheets/the-new-dietary-guidelines-for-americans-2025-2030">
                federal guidelines
              </ExternalLink>
              , out January 7, 2026, point to 1.2 to 1.6 grams of protein per
              kilogram of body weight a day, nearly double the old 0.8 gram
              standard most of us grew up with. Convert your weight, do the
              multiplication, and what you get is a range, not a single magic
              number.
            </p>

            {/* Range Graph */}
            <ProteinRangeChart />

            {/* Protein Targets Table */}
            <div className="mt-6 overflow-x-auto border border-[#D9D4C5] rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-[#0B2A3B] text-white text-sm sm:text-base font-bold">
                    <th className="p-3.5 sm:p-4 w-1/3">Body weight</th>
                    <th className="p-3.5 sm:p-4 w-1/3">Kilograms</th>
                    <th className="p-3.5 sm:p-4 w-1/3">Daily protein range</th>
                  </tr>
                </thead>
                <tbody>
                  {proteinTargets.map((row, idx) => (
                    <tr
                      key={row.pounds}
                      className={
                        idx % 2 === 0
                          ? "bg-white hover:bg-[#FAF7F0] transition-colors"
                          : "bg-[#FBF6EC] hover:bg-[#F5EFE2] transition-colors"
                      }
                    >
                      <td className="p-3.5 sm:p-4 border-t border-[#D9D4C5] font-bold text-[#0B2A3B] text-sm sm:text-base">
                        {row.pounds}
                      </td>
                      <td className="p-3.5 sm:p-4 border-t border-[#D9D4C5] text-[#222B33] text-sm sm:text-base">
                        {row.kg}
                      </td>
                      <td className="p-3.5 sm:p-4 border-t border-[#D9D4C5] text-[#222B33] text-sm sm:text-base">
                        {row.min} to {row.max} grams
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-left sm:text-justify">
              Some nutrition scientists note the final figure went past what the
              guideline committee&apos;s own report had actually recommended.
              People carrying more weight are often counseled off an adjusted
              number instead of scale weight. Practically this means grilled
              grouper, Gulf shrimp, eggs, cottage cheese, black beans, spread
              across three or four meals so the number stops feeling like
              homework. Thirty grams at breakfast changes the whole rest of the
              day more than most people expect.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="border-t-2 border-[#0B2A3B] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0B2A3B] md:text-[28px]">
            What happens to your weight when treatment stops?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              In the STEP 1 extension, people who stopped semaglutide regained
              about two thirds of what they&apos;d lost within a year, once the
              drug and the counseling both stopped at the same time.
            </p>
            <p className="text-left sm:text-justify">
              <ExternalLink href="https://pmc.ncbi.nlm.nih.gov/articles/9542252">
                The extension
              </ExternalLink>{" "}
              followed 327 people. By week 68 they&apos;d lost 17.3 percent of
              body weight on average, on semaglutide. Stop the drug, and by week
              120 they&apos;d regained 11.6 percentage points of that, landing
              at a net 5.6 percent. Blood pressure and blood sugar numbers
              drifted back too, mostly.
            </p>
            <p className="text-left sm:text-justify">
              Biology pushes back after weight loss. Hunger climbs, energy use
              drops a little, that&apos;s just what bodies do when they sense
              they&apos;ve lost ground. But the extension pulled the drug and
              the counseling out at the exact same moment, so it genuinely
              can&apos;t tell you which absence did more damage. Meanwhile{" "}
              <ExternalLink href="https://pubmed.ncbi.nlm.nih.gov/38078870/">
                SURMOUNT 4
              </ExternalLink>
              , the tirzepatide withdrawal trial, had people switch to placebo
              while lifestyle support kept going and they still regained around
              14 percent. So counseling by itself doesn&apos;t hold the line
              either. Nobody gets to feel smug here.
            </p>

            {/* STEP 1 Extension Bar Graph */}
            <Step1ExtensionChart />

            <p className="text-left sm:text-justify">
              So no, counseling isn&apos;t a safety net you fall into. It&apos;s
              what makes the next decision, continue, step down, taper off
              entirely, an informed one instead of a cliff edge you didn&apos;t
              see coming. We&apos;d argue the exit plan belongs in the first
              visit, not the last one. That&apos;s the philosophy running
              through the programs on{" "}
              <InternalLink href="/our-services">our services page</InternalLink>
              , for what it&apos;s worth.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="border-t-2 border-[#0B2A3B] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0B2A3B] md:text-[28px]">
            What should a good counseling plan track and why?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Five things earn a permanent spot on the tracking list. Protein.
              Fiber and fluids. Micronutrients. Meal timing. Strength work. Not
              because they&apos;re trendy, but because these are exactly where
              GLP-1 therapy tends to leave gaps, over and over, across the
              research.
            </p>

            {/* Tracking Plan Table */}
            <div className="mt-6 overflow-x-auto border border-[#D9D4C5] rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-[#0B2A3B] text-white text-sm sm:text-base font-bold">
                    <th className="p-3.5 sm:p-4 w-1/4">What gets tracked</th>
                    <th className="p-3.5 sm:p-4 w-3/8">Why it matters</th>
                    <th className="p-3.5 sm:p-4 w-3/8">
                      What it looks like on a Tampa plate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trackingPlanRows.map((row, idx) => (
                    <tr
                      key={row.metric}
                      className={
                        idx % 2 === 0
                          ? "bg-white hover:bg-[#FAF7F0] transition-colors"
                          : "bg-[#FBF6EC] hover:bg-[#F5EFE2] transition-colors"
                      }
                    >
                      <td className="p-3.5 sm:p-4 border-t border-[#D9D4C5] font-bold text-[#0B2A3B] text-sm sm:text-base align-top">
                        {row.metric}
                      </td>
                      <td className="p-3.5 sm:p-4 border-t border-[#D9D4C5] text-[#222B33] text-sm sm:text-base align-top text-left sm:text-justify">
                        {row.why}
                      </td>
                      <td className="p-3.5 sm:p-4 border-t border-[#D9D4C5] text-[#222B33] text-sm sm:text-base align-top text-left sm:text-justify">
                        {row.tampaPlate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-left sm:text-justify">
              Every one of those rows shifts when your dose shifts, too. Dose
              goes up, appetite usually drops further, and the plate plan needs
              revising in that same visit. Not three weeks later, once the
              damage is already done.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="border-t-2 border-[#0B2A3B] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0B2A3B] md:text-[28px]">
            What does real nutritional counseling do?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              A real program makes nutrition a scheduled, individualized part of
              actual medical care.
            </p>

            <ul className="space-y-3 pl-1">
              {realCounselingBullets.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-left sm:text-justify text-[#222B33]"
                >
                  <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0E7C86]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-left sm:text-justify">
              This is where Medical Weight Loss Tampa actually earns the claim.
              Full background&apos;s on{" "}
              <InternalLink href="/team">the team page</InternalLink> if you
              want to check it yourself, which you probably should. Google page
              sits at 4.9 stars across 140 reviews and reviewers keep saying
              variations of the same positive feeling.
            </p>

            {/* 3-Stat Clinic Trust Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {clinicTrustStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#EEF6F6] border-t-4 border-[#0E7C86] p-5 rounded-b-xl shadow-sm"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0E7C86]">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm text-[#5B6770] font-medium leading-relaxed text-left sm:text-justify">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Box 2 */}
            <div className="mt-8 border-l-[6px] border-[#F2A900] bg-[#FBF6EC] px-5 sm:px-7 py-5 rounded-r-xl shadow-sm">
              <blockquote className="text-[17px] sm:text-[18px] leading-8 text-[#0B2A3B] italic font-medium text-left sm:text-justify">
                &ldquo;We all deserve to not only look, but feel our
                best.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-left sm:text-justify">
                <strong className="text-[#0E7C86] font-bold">
                  Dr. Emily Devol Webster
                </strong>{" "}
                <span className="text-[#5B6770]">
                  | Medical Director, Medical Weight Loss Tampa
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="border-t-2 border-[#0B2A3B] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0B2A3B] md:text-[28px]">
            So where does our nutritional counseling fit?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Right in the middle of everything, honestly. Medication changes
              the appetite. Counseling changes the plate. The medical team keeps
              both of them honest with labs and actual follow up.
            </p>
            <p className="text-left sm:text-justify">
              The advisory says it plainly too. Weight lost with a plan tends to
              stay lost. According to{" "}
              <ExternalLink href="https://www.tfah.org/state-details/florida/">
                Trust for America&apos;s Health
              </ExternalLink>
              , 29.6 percent of Florida adults had obesity in 2024, 37.0 percent
              had hypertension, and 12.1 percent had diabetes. Tampa Bay lives
              inside those numbers, which is why a medical weight loss program
              here has to do more than hand out a dose schedule.
            </p>
            <p className="text-left sm:text-justify">
              So where does nutritional counseling actually sit inside a medical
              program? What does the evidence say it does, versus what the
              marketing says? And how do you tell real counseling from a pamphlet
              with your name typed on it? We&apos;ll lean on the trials here,
              mostly because the trials are more interesting than the brochures
              ever are.
            </p>

            {/* CTA Box */}
            <div className="mt-10 border-l-[6px] border-[#F2A900] bg-[#0B2A3B] px-6 sm:px-8 py-8 text-white rounded-r-2xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold text-white text-left sm:text-justify">
                Build a weight loss plan that survives the last dose.
              </h2>
              <p className="mt-3 text-base sm:text-[17px] leading-8 text-[#DCE7EA] text-left sm:text-justify">
                Medical Weight Loss Tampa pairs medical supervision with
                nutritional counseling at 5111 Ehrlich Rd. Ste 128, Tampa, FL
                33624. Ask about the new patient consultation special.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#F2A900] text-[#0B2A3B] px-7 py-3 rounded-full font-bold transition-all duration-300 hover:bg-[#dca00a] shadow-md hover:shadow-lg no-underline text-base"
                >
                  Book your visit &rarr;
                </Link>
                <span className="text-[#DCE7EA] text-base">
                  or call{" "}
                  <a
                    href="tel:8132697546"
                    className="font-bold text-white underline decoration-[#F2A900]/70 underline-offset-4 hover:text-[#F2A900] transition-colors"
                  >
                    813.269.7546
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t-2 border-[#0B2A3B] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0B2A3B] md:text-[28px] mb-6">
            FAQ
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#D9D4C5] bg-[#EEF6F6] p-5 sm:p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#0B2A3B] text-left sm:text-justify">
                  {faq.question}
                </h3>
                <p className="mt-2 text-[17px] leading-8 text-[#222B33] text-left sm:text-justify">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="mt-10 border-l-4 border-[#5B6770] bg-[#F1F1EE] p-4 rounded-r-lg">
          <p className="text-sm text-[#6B7280] leading-6 italic text-left">
            Disclaimer: This article is for informational and educational
            purposes only. It shouldn&apos;t be a substitute for medical advice.
            Always consult with a qualified healthcare practitioner before
            making any medical treatment decisions.
          </p>
        </section>
      </div>
    </article>
  );
}

