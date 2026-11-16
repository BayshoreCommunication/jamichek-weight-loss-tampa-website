import React, { ReactNode } from "react";
import Link from "next/link";

export const howToPrepareForYourMedicalWeightLossAppointmentInTampaMeta = {
  title: "How to Prepare for Your Medical Weight Loss Appointment in Tampa",
  metaTitle: "Prepare for Your Tampa Medical Weight Loss Visit",
  slug: "how-to-prepare-for-your-medical-weight-loss-appointment-in-tampa",
  description:
    "Know what to bring, how Florida Blue, AvMed and HSA cards work, and your options beyond GLP-1s before a weight loss visit near Carrollwood.",
  image:
    "/images/static-blogs/prepare-for-medical-weight-loss-appointment-tampa.webp",
  altText:
    "Female doctor smiling at a patient during a consultation with a pre-appointment checklist on a clipboard",
  imageTitle: "How to Prepare for Medical Weight Loss Appointment Tampa",
  imageDescription:
    "Learn how to prepare for your medical weight loss appointment in Tampa, including gathering health history, listing medications, and setting realistic goals",
  caption:
    "Follow this pre-appointment checklist to get the most out of your Tampa medical weight loss visit",
  category: "Medical Weight Loss",
  publishedAt: "2026-11-16",
  canonicalUrl:
    "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-prepare-for-your-medical-weight-loss-appointment-in-tampa",
};

const keyTakeaways = [
  "Your medication list and family history decide safe treatment",
  "Insurance coverage varies a lot by insurance company so call before you book.",
  "If you don’t want a GLP-1, other prescriptions exist.",
  "Check the license and the pharmacy before you hand over money.",
];

const appointmentChecklist = [
  {
    item: "Medication and supplement list",
    why: "Flags drugs that add weight or interact",
    time: "10 minutes",
  },
  {
    item: "Labs from the past 12 months",
    why: "Shows A1C, cholesterol, thyroid, and kidney function",
    time: "1 to 3 days",
  },
  {
    item: "Family history notes",
    why: "Thyroid cancer history can rule out some drugs",
    time: "15 minutes",
  },
  {
    item: "Seven day food and weight log",
    why: "Replaces estimates with real habits",
    time: "7 days",
  },
  {
    item: "Photo ID and payment or HSA card",
    why: "Confirms identity and payment options",
    time: "2 minutes",
  },
];

const drugTypesComparison = [
  {
    feature: "FDA safety review",
    brand: "Yes",
    compounded: "No",
    research: "No",
  },
  {
    feature: "Typical form",
    brand: "Prefilled pens",
    compounded: "Often vials with syringes",
    research: "Vials with no label standard",
  },
  {
    feature: "Legal use",
    brand: "With a prescription",
    compounded: "Only for individual medical need",
    research: "Not for human use",
  },
  {
    feature: "Your best move",
    brand: "Match label and lot number",
    compounded: "Ask the pharmacy name and license",
    research: "Walk away",
  },
];

const medicationAlternatives = [
  {
    option: "Semaglutide or tirzepatide",
    how: "Weekly injection",
    skip: "Thyroid cancer or MEN 2 history, pregnancy plans",
  },
  {
    option: "Contrave",
    how: "Pill, once or twice a day",
    skip: "Uncontrolled blood pressure, seizures, opioid use",
  },
  {
    option: "Qsymia",
    how: "Daily pill",
    skip: "Glaucoma, hyperthyroidism, recent MAOI use",
  },
  {
    option: "Orlistat",
    how: "Pill, three times a day",
    skip: "Trouble absorbing food",
  },
  {
    option: "Phentermine alone",
    how: "Short term pill",
    skip: "Uncontrolled blood pressure, heart disease history",
  },
];

const weightLossRangeBars = [
  {
    labelLine1: "Placebo plus",
    labelLine2: "lifestyle",
    min: 2.4,
    max: 5.7,
    color: "#55656D",
  },
  {
    labelLine1: "Semaglutide",
    labelLine2: "2.4 mg",
    min: 9.6,
    max: 16.0,
    color: "#0F4C5C",
  },
  {
    labelLine1: "Tirzepatide",
    labelLine2: "5 to 15 mg",
    min: 15.0,
    max: 20.9,
    color: "#0F4C5C",
  },
];

const prepTimelineSteps = [
  {
    day: "Day 14",
    action: "Book and request labs",
    highlight: false,
  },
  {
    day: "Days 13 to 8",
    action: "Log meals and weight",
    highlight: false,
  },
  {
    day: "Day 7",
    action: "Call insurer, list meds",
    highlight: false,
  },
  {
    day: "Day 3",
    action: "Check license and pharmacy",
    highlight: false,
  },
  {
    day: "Day 1",
    action: "Hydrate, sleep, set goals",
    highlight: false,
  },
  {
    day: "Visit day",
    action: "Arrive with everything",
    highlight: true,
  },
];

const unpreparedPoints = [
  "You guess at medication names.",
  "Labs get ordered again.",
  "You learn the cost at checkout.",
  "Your plan starts weeks later.",
];

const preparedPoints = [
  "You hand over a full list.",
  "Existing labs save time.",
  "You know your coverage upfront.",
  "Your plan can start at visit one.",
];

const faqs = [
  {
    question: "Should I fast before my appointment?",
    answer:
      "This is not necessary unless your provider asked you. Only if your provider orders fasting labs, which usually means 8 to 12 hours. Ask when you book.",
  },
  {
    question: "What if I already tried a GLP-1 somewhere else?",
    answer:
      "Bring your dose history, last injection date and side effects, plus the name of the pharmacy that supplied it.",
  },
  {
    question: "Is my information private?",
    answer:
      "Yes. HIPAA protects your records at licensed practices, and you can ask how your chart is shared.",
  },
];

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-prepare-for-your-medical-weight-loss-appointment-in-tampa#breadcrumb",
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
          name: "How to Prepare for Your Medical Weight Loss Appointment in Tampa",
          item:
            "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-prepare-for-your-medical-weight-loss-appointment-in-tampa",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id":
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-prepare-for-your-medical-weight-loss-appointment-in-tampa#blogposting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-prepare-for-your-medical-weight-loss-appointment-in-tampa",
      },
      headline:
        "How to Prepare for Your Medical Weight Loss Appointment in Tampa",
      name: "Prepare for Your Tampa Medical Weight Loss Visit",
      description:
        "Know what to bring, how Florida Blue, AvMed and HSA cards work, and your options beyond GLP-1s before a weight loss visit near Carrollwood.",
      url:
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-prepare-for-your-medical-weight-loss-appointment-in-tampa",
      image: {
        "@type": "ImageObject",
        url:
          "https://www.medicalweightlosstampa.com/images/static-blogs/prepare-for-medical-weight-loss-appointment-tampa.webp",
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
        name: "Preparing for a Medical Weight Loss Consultation in Tampa",
      },
      keywords: [
        "prepare for medical weight loss appointment Tampa",
        "medical weight loss consultation checklist",
        "Tampa weight loss clinic visit",
        "Florida weight loss doctor license check",
        "FDA approved vs compounded GLP-1",
        "weight loss medications beyond GLP-1",
        "Carrollwood medical weight loss",
        "Northdale Ehrlich Road weight loss clinic",
        "HSA card medical weight loss Tampa",
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
      datePublished: "2026-11-16",
      dateModified: "2026-11-16",
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-prepare-for-your-medical-weight-loss-appointment-in-tampa#faq",
      url:
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-prepare-for-your-medical-weight-loss-appointment-in-tampa",
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
      "font-bold text-[#E36414] underline decoration-[#E36414]/50 underline-offset-4 transition-colors hover:text-[#0F4C5C]"
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
      "font-bold text-[#E36414] underline decoration-[#E36414]/50 underline-offset-4 transition-colors hover:text-[#0F4C5C]"
    }
  >
    {children}
  </Link>
);

const WeightLossResultsChart = () => {
  const chartLeft = 72;
  const chartRight = 674;
  const chartTop = 36;
  const chartBottom = 312;
  const chartHeight = chartBottom - chartTop;
  const maxVal = 23;
  const yTicks = [0, 5, 10, 15, 20];
  const slotWidth = (chartRight - chartLeft) / weightLossRangeBars.length;
  const barWidth = 78;

  const toY = (val: number) => chartBottom - (val / maxVal) * chartHeight;

  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-[#E3DDD0] bg-white p-4 sm:p-6 shadow-sm">
      <div className="w-full">
        <svg
          viewBox="0 0 700 382"
          role="img"
          aria-label="Vertical range bars for placebo plus lifestyle 2.4 to 5.7 percent, semaglutide 9.6 to 16.0 percent, and tirzepatide 15.0 to 20.9 percent"
          className="w-full h-auto"
        >
          <title>
            Average body weight lost across placebo, semaglutide, and
            tirzepatide trials
          </title>
          <desc>
            Vertical range bars comparing average body weight lost: Placebo
            plus lifestyle 2.4% to 5.7%, Semaglutide 2.4 mg 9.6% to 16.0%, and
            Tirzepatide 5 to 15 mg 15.0% to 20.9%.
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
                  stroke={tick === 0 ? "#D8D2C5" : "#E6E2D8"}
                  strokeWidth={tick === 0 ? 1.5 : 1}
                />
                <text
                  x={chartLeft - 12}
                  y={y + 4.5}
                  textAnchor="end"
                  fontSize="13.5"
                  fill="#5B6B73"
                  fontFamily="sans-serif"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {/* Y-axis label */}
          <text
            x={22}
            y={(chartTop + chartBottom) / 2}
            textAnchor="middle"
            fontSize="14"
            fill="#5B6B73"
            fontFamily="sans-serif"
            transform={`rotate(-90 22 ${(chartTop + chartBottom) / 2})`}
          >
            Average body weight lost (%)
          </text>

          {/* Range bars and labels */}
          {weightLossRangeBars.map((bar, idx) => {
            const centerX = chartLeft + slotWidth * (idx + 0.5);
            const x = centerX - barWidth / 2;
            const yTop = toY(bar.max);
            const yBottom = toY(bar.min);
            const height = yBottom - yTop;
            return (
              <g key={bar.labelLine1}>
                <rect
                  x={x}
                  y={yTop}
                  width={barWidth}
                  height={height}
                  fill={bar.color}
                  rx={2}
                />
                <text
                  x={centerX}
                  y={yTop - 12}
                  textAnchor="middle"
                  fontSize="15"
                  fontWeight="700"
                  fill="#1B2B34"
                  fontFamily="sans-serif"
                >
                  {bar.max.toFixed(1)}%
                </text>
                <text
                  x={centerX}
                  y={yBottom + 20}
                  textAnchor="middle"
                  fontSize="15"
                  fontWeight="700"
                  fill="#1B2B34"
                  fontFamily="sans-serif"
                >
                  {bar.min.toFixed(1)}%
                </text>
                <text
                  x={centerX}
                  y={chartBottom + 24}
                  textAnchor="middle"
                  fontSize="14.5"
                  fontWeight="500"
                  fill="#1B2B34"
                  fontFamily="sans-serif"
                >
                  {bar.labelLine1}
                </text>
                <text
                  x={centerX}
                  y={chartBottom + 44}
                  textAnchor="middle"
                  fontSize="14.5"
                  fontWeight="500"
                  fill="#1B2B34"
                  fontFamily="sans-serif"
                >
                  {bar.labelLine2}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-3 text-left text-xs sm:text-sm text-[#5B6B73] italic leading-6">
        Averages from STEP 1 to 3 and SURMOUNT-1. Semaglutide runs from people
        with type 2 diabetes (9.6%) to people in an intensive behavior program
        (16.0%). Tirzepatide covers the 5 mg to 15 mg doses.
      </figcaption>
    </figure>
  );
};

export default function HowToPrepareForYourMedicalWeightLossAppointmentInTampa() {
  return (
    <article className="mt-8 bg-white text-[#1B2B34]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Header metadata section */}
      <section className="border-y border-[#E3DDD0] border-b-[3px] border-b-[#E36414] py-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0F4C5C]">
          Medical Weight Loss Tampa | medicalweightlosstampa.com
        </p>
        <p className="mt-2 text-sm font-semibold text-[#5B6B73]">
          <Link href="/" className="hover:underline text-[#E36414]">
            medicalweightlosstampa.com
          </Link>{" "}
          | Tampa, FL
        </p>
        <p className="mt-4 text-base font-semibold text-[#0F4C5C]">
          Explained by the Clinical Team at Medical Weight Loss Tampa
        </p>
        <p className="text-sm text-[#5B6B73]">
          Published: November 16, 2026 | Updated: November 16, 2026
        </p>
      </section>

      {/* Intro paragraph (doc alignment: left) */}
      <div className="mt-8 space-y-6 text-[17px] leading-8">
        <p className="text-left text-[#1B2B34]">
          To prepare for your medical weight loss consultation, gather together
          a list of your current medications, recent lab results and a family
          medical history. Track your food intake and your weight for a week.
          Make sure your provider is a licensed Florida physician.
        </p>
      </div>

      {/* Key Takeaways Box (doc alignment: left) */}
      <section className="mt-8 border-l-[6px] border-[#0F4C5C] bg-[#F4EFE6] rounded-r-xl overflow-hidden shadow-sm px-5 sm:px-7 py-6">
        <h2 className="text-lg sm:text-xl font-bold uppercase tracking-[0.12em] text-[#0F4C5C] text-left">
          Key Takeaways
        </h2>
        <ul className="mt-4 space-y-3.5 text-[17px] leading-8">
          {keyTakeaways.map((item, index) => (
            <li key={index} className="flex gap-3 text-left">
              <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F4C5C]" />
              <span className="text-[#1B2B34]">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Content Sections */}
      <div className="mt-12 space-y-12">
        {/* Section 1 (doc alignment: justify) */}
        <section className="border-t-2 border-[#0F4C5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0F4C5C] md:text-[28px] text-left sm:text-justify">
            What Should You Bring to a Tampa Medical Weight Loss Visit?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Most people arrive with an ID and good intentions. That wastes a
              first visit. Providers need data, not vibes. Use the table below
              as your checklist. Don&apos;t make a mistake like this one that
              most clinics skip. BMI alone tells them very little. Waist size,
              blood pressure, and A1C add real context. Ask which numbers will
              drive your plan.
            </p>
            <p className="text-left sm:text-justify">
              <ExternalLink href="https://www.niddk.nih.gov/health-information/weight-management/prescription-medications-treat-overweight-obesity">
                NIDDK guidance
              </ExternalLink>{" "}
              sets two entry points for prescription weight loss medication. One
              is a BMI of 30 or higher. The other is a BMI of 27 with a related
              condition. Your chart should prove whichever applies to you. Old
              labs from your primary doctor still count. Photos of pill bottles
              are more helpful than guesses.
            </p>
            <p className="text-left sm:text-justify">
              Never tidy up your history. Your prescriber reads it for safety,
              not judgment. Our{" "}
              <InternalLink href="/medical-weight-loss">
                medical weight loss program
              </InternalLink>{" "}
              begins with a full health assessment. Pull your records now, not
              the morning of. Some offices need several days to release labs.
              Patient portals often show results right away. Screenshot them for
              your phone.
            </p>

            {/* Subheading + Checklist Table */}
            <div className="pt-2">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-[#E36414] text-left sm:text-justify">
                YOUR APPOINTMENT CHECKLIST
              </h3>
              <div className="mt-4 overflow-x-auto border border-[#E3DDD0] rounded-xl shadow-sm">
                <table className="w-full text-left border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-[#0F4C5C] text-white text-sm sm:text-base font-bold">
                      <th className="p-3.5 sm:p-4 w-1/3">Item</th>
                      <th className="p-3.5 sm:p-4 w-5/12">Why It Matters</th>
                      <th className="p-3.5 sm:p-4 w-1/4">Time Needed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointmentChecklist.map((row, idx) => (
                      <tr
                        key={row.item}
                        className={
                          idx % 2 === 0
                            ? "bg-white hover:bg-[#FAF7F1] transition-colors"
                            : "bg-[#FAF7F1] hover:bg-[#F3EDE0] transition-colors"
                        }
                      >
                        <td className="p-3.5 sm:p-4 border-t border-[#E3DDD0] font-bold text-[#1B2B34] text-sm sm:text-base align-top text-left sm:text-justify">
                          {row.item}
                        </td>
                        <td className="p-3.5 sm:p-4 border-t border-[#E3DDD0] text-[#1B2B34] text-sm sm:text-base align-top text-left sm:text-justify">
                          {row.why}
                        </td>
                        <td className="p-3.5 sm:p-4 border-t border-[#E3DDD0] text-[#1B2B34] text-sm sm:text-base align-top text-left sm:text-justify">
                          {row.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 (doc alignment: justify) */}
        <section className="border-t-2 border-[#0F4C5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0F4C5C] md:text-[28px] text-left sm:text-justify">
            How Do You Verify a Tampa Weight Loss Clinic Before Booking?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Florida makes this easy. The Department of Health runs a{" "}
              <ExternalLink href="https://mqa-internet.doh.state.fl.us/MQASearchServices/Home">
                free license lookup
              </ExternalLink>
              . Search your provider by name or license number. Check the status
              and any disciplinary history. Do it before you book, not after.
            </p>
            <p className="text-left sm:text-justify">
              Next, ask where your medication comes from. The FDA tells patients
              to use{" "}
              <ExternalLink href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss">
                state licensed pharmacies
              </ExternalLink>
              . It also warns about vials labeled for research purposes. Walk
              away from any clinic selling those. The chart below shows how the
              three types differ.
            </p>

            {/* Subheading + Three Types Table */}
            <div className="pt-2">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-[#E36414] text-left sm:text-justify">
                THREE TYPES OF WEIGHT LOSS DRUGS YOU MAY BE OFFERED
              </h3>
              <div className="mt-4 overflow-x-auto border border-[#E3DDD0] rounded-xl shadow-sm">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-[#0F4C5C] text-white text-sm sm:text-base font-bold">
                      <th className="p-3.5 sm:p-4 w-1/4">
                        <span className="sr-only">Comparison Criteria</span>
                      </th>
                      <th className="p-3.5 sm:p-4 w-1/4">FDA Approved Brand</th>
                      <th className="p-3.5 sm:p-4 w-1/4">Compounded</th>
                      <th className="p-3.5 sm:p-4 w-1/4">
                        Sold for Research Use
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {drugTypesComparison.map((row, idx) => (
                      <tr
                        key={row.feature}
                        className={
                          idx % 2 === 0
                            ? "bg-white hover:bg-[#FAF7F1] transition-colors"
                            : "bg-[#FAF7F1] hover:bg-[#F3EDE0] transition-colors"
                        }
                      >
                        <td className="p-3.5 sm:p-4 border-t border-[#E3DDD0] font-bold text-[#1B2B34] text-sm sm:text-base align-top text-left sm:text-justify">
                          {row.feature}
                        </td>
                        <td className="p-3.5 sm:p-4 border-t border-[#E3DDD0] text-[#1B2B34] text-sm sm:text-base align-top text-left sm:text-justify">
                          {row.brand}
                        </td>
                        <td className="p-3.5 sm:p-4 border-t border-[#E3DDD0] text-[#1B2B34] text-sm sm:text-base align-top text-left sm:text-justify">
                          {row.compounded}
                        </td>
                        <td className="p-3.5 sm:p-4 border-t border-[#E3DDD0] text-[#1B2B34] text-sm sm:text-base align-top text-left sm:text-justify">
                          {row.research}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-left sm:text-justify">
              Ask three more questions. Who prescribes, and what is their
              license type? Who adjusts your dose, and how often? What happens
              when side effects hit at night? Vague answers are still answers.
            </p>
            <p className="text-left sm:text-justify">
              Pricing deserves the same scrutiny. Ask for the full monthly cost
              in writing. Include visits, labs, and dose increases. Hidden add
              ons are the usual trap.
            </p>
            <p className="text-left sm:text-justify">
              A good clinic answers the sourcing question in one sentence. Ask
              for that answer in writing.{" "}
              <InternalLink href="/contact">
                Contact our Tampa office
              </InternalLink>{" "}
              on Ehrlich Road with that question. You can also review our{" "}
              <InternalLink href="/our-services">
                weight loss services
              </InternalLink>{" "}
              before you visit.
            </p>
          </div>
        </section>

        {/* Section 3 (doc alignment: left) */}
        <section className="border-t-2 border-[#0F4C5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0F4C5C] md:text-[28px] text-left">
            What if semaglutide or tirzepatide isn&apos;t an option for you?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left">
              It happens, and it doesn&apos;t end your treatment. Here&apos;s
              who should skip what, though your prescriber makes the final call.
            </p>

            {/* Medications Alternatives Table (doc alignment: left) */}
            <div className="mt-6 overflow-x-auto border border-[#E3DDD0] rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse min-w-[580px]">
                <thead>
                  <tr className="bg-[#0F4C5C] text-white text-sm sm:text-base font-bold">
                    <th className="p-3.5 sm:p-4 w-1/3">Option</th>
                    <th className="p-3.5 sm:p-4 w-1/4">How you take it</th>
                    <th className="p-3.5 sm:p-4 w-5/12">Who should skip it</th>
                  </tr>
                </thead>
                <tbody>
                  {medicationAlternatives.map((row, idx) => (
                    <tr
                      key={row.option}
                      className={
                        idx % 2 === 0
                          ? "bg-white hover:bg-[#FAF7F1] transition-colors"
                          : "bg-[#FAF7F1] hover:bg-[#F3EDE0] transition-colors"
                      }
                    >
                      <td className="p-3.5 sm:p-4 border-t border-[#E3DDD0] font-bold text-[#1B2B34] text-sm sm:text-base align-top text-left">
                        {row.option}
                      </td>
                      <td className="p-3.5 sm:p-4 border-t border-[#E3DDD0] text-[#1B2B34] text-sm sm:text-base align-top text-left">
                        {row.how}
                      </td>
                      <td className="p-3.5 sm:p-4 border-t border-[#E3DDD0] text-[#1B2B34] text-sm sm:text-base align-top text-left">
                        {row.skip}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-left">
              Pills generally lead to smaller losses than the weekly injections
              in the chart below. Phentermine in particular is meant for short
              stretches and can push up heart rate and blood pressure. A common
              rule for pills is about twelve weeks. If you haven&apos;t lost
              roughly 5% by then, your prescriber should change the plan.
            </p>
          </div>
        </section>

        {/* Section 4 (doc alignment: h2 justify, paragraphs left, chart center) */}
        <section className="border-t-2 border-[#0F4C5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0F4C5C] md:text-[28px] text-left sm:text-justify">
            What Results Should You Realistically Expect After Visit One?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <WeightLossResultsChart />

            <p className="text-left">
              Look at the gray bar too. Placebo groups still lost weight, which
              tells you how much lifestyle work matters. Nutrition counseling
              does more here than most people give it credit for. We offer it
              through our{" "}
              <InternalLink href="/our-services">
                weight loss services
              </InternalLink>
              , and with AvMed it can even count toward the lifestyle
              requirement.
            </p>
            <p className="text-left">
              Compounded versions will come up, so we&apos;ll be blunt. The{" "}
              <ExternalLink href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss">
                FDA says
              </ExternalLink>{" "}
              they skip its safety review, and some dosing mix-ups have ended in
              hospital stays. Fill prescriptions at a state-licensed pharmacy,
              and run from anything labeled &ldquo;for research purposes.&rdquo;
            </p>
          </div>
        </section>

        {/* Section 5 (doc alignment: left) */}
        <section className="border-t-2 border-[#0F4C5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0F4C5C] md:text-[28px] text-left">
            The two weeks before your visit
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left">
              Some of you do crash diets. I would strongly suggest not doing it
              because it messes with your labs. Then, your prescriber gives a
              fake baseline. Eat the way you normally eat, supplements included
              and hold off on starting new ones.
            </p>

            {/* Six-Step Timeline (Responsive representation of doc timeline diagram) */}
            <div
              className="my-8 rounded-2xl border border-[#E3DDD0] bg-[#FAF7F1] p-4 sm:p-6 shadow-sm"
              role="region"
              aria-label="Six step timeline from booking and labs on day 14 to arriving prepared on visit day"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {prepTimelineSteps.map((step) => (
                  <div
                    key={step.day}
                    className={`rounded-xl px-3.5 py-5 text-center text-white shadow-sm flex flex-col justify-between ${
                      step.highlight ? "bg-[#E36414]" : "bg-[#0F4C5C]"
                    }`}
                  >
                    <div>
                      <div className="text-sm sm:text-base font-bold tracking-wide">
                        {step.day}
                      </div>
                      <div className="mx-auto my-3 h-px w-4/5 bg-white/40" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium leading-snug text-white/95">
                      {step.action}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-left">
              Measure your weight each morning using the same scale at the same
              time. Take your blood pressure at home. Document the numbers down
              because a blood pressure log can decide which pill is safe for
              you. Set three goals. Make one medical, like getting your blood
              pressure down. Make one physical, like walking Bayshore Boulevard
              without stopping to catch your breath. And make one that&apos;s
              only about you.
            </p>

            {/* Unprepared vs Prepared Comparison Grid (doc alignment: left) */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="bg-[#FBE7DA] border-t-4 border-[#E36414] p-5 sm:p-6 rounded-b-xl shadow-sm">
                <h3 className="text-lg font-bold text-[#E36414] text-left">
                  Unprepared Visit
                </h3>
                <ul className="mt-3 space-y-2.5 text-[16px] leading-7 text-[#1B2B34]">
                  {unpreparedPoints.map((pt, idx) => (
                    <li key={idx} className="flex gap-2.5 text-left">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#E36414]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#DCEEEE] border-t-4 border-[#0F4C5C] p-5 sm:p-6 rounded-b-xl shadow-sm">
                <h3 className="text-lg font-bold text-[#0F4C5C] text-left">
                  Prepared Visit
                </h3>
                <ul className="mt-3 space-y-2.5 text-[16px] leading-7 text-[#1B2B34]">
                  {preparedPoints.map((pt, idx) => (
                    <li key={idx} className="flex gap-2.5 text-left">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#0F4C5C]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 (doc alignment: left) */}
        <section className="border-t-2 border-[#0F4C5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0F4C5C] md:text-[28px] text-left">
            Getting to our Ehrlich Road office from Carrollwood, Northdale and
            Westchase
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left">
              We&apos;re at 5111 Ehrlich Road, Suite 128, in Northdale. The
              nearest Publix is about half a mile away, and Carrollwood Commons,
              Target and Sprouts all sit within two miles, so it&apos;s easy to
              bundle the trip with errands. Folks in Westchase have a short
              drive too. Not sure about the route?{" "}
              <InternalLink href="/contact">
                Contact our Tampa office
              </InternalLink>
              . Our medical director,{" "}
              <InternalLink href="/team">Dr. Emily Devol Webster</InternalLink>,
              leads the team that makes these calls.
            </p>

            {/* Dr. Webster Quote Box (doc alignment: left) */}
            <div className="mt-8 border-l-[6px] border-[#E36414] bg-[#FDF3EB] px-5 sm:px-7 py-5 rounded-r-xl shadow-sm">
              <blockquote className="text-[17px] sm:text-[18px] leading-8 text-[#0F4C5C] italic font-medium text-left">
                &ldquo;We all deserve to not only look, but feel our
                best.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs sm:text-sm font-bold tracking-wide text-[#5B6B73] text-left">
                DR. EMILY DEVOL WEBSTER, MEDICAL DIRECTOR, MEDICAL WEIGHT LOSS
                TAMPA
              </p>
            </div>

            <p className="text-left">
              Preparing for your medical weight loss appointment in Tampa takes
              about two weeks and a few phone calls. Do that and you leave with
              a plan, not a pamphlet.
            </p>
          </div>
        </section>

        {/* FAQ Section (doc alignment: left) */}
        <section className="border-t-2 border-[#0F4C5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#0F4C5C] md:text-[28px] mb-6 text-left">
            FAQs
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E3DDD0] bg-[#FAF7F1] p-5 sm:p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#0F4C5C] text-left">
                  {faq.question}
                </h3>
                <p className="mt-2 text-[17px] leading-8 text-[#1B2B34] text-left">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Box (doc alignment: center) */}
        <section className="mt-10 border-t-[6px] border-[#E36414] bg-[#0F4C5C] px-6 sm:px-8 py-8 text-center text-white rounded-b-2xl shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
            Walk in ready, walk out with a plan
          </h2>
          <div className="mt-3 space-y-1 text-base sm:text-[17px] leading-7 text-[#E6F0F1] text-center">
            <p>Medical Weight Loss Tampa</p>
            <p>5111 Ehrlich Rd, Ste 128, Tampa, FL 33624</p>
            <p>
              Call{" "}
              <a
                href="tel:8132697546"
                className="font-bold text-white underline decoration-[#E36414]/80 underline-offset-4 hover:text-[#E36414] transition-colors"
              >
                813.269.7546
              </a>
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-[#E36414] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-[#c8550f] shadow-md hover:shadow-lg no-underline text-base"
            >
              Book Your Visit &rarr;
            </Link>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-[#BFD3D7] text-center">
            New patients only. Restrictions may apply.
          </p>
        </section>

        {/* Medical Disclaimer (doc alignment: left) */}
        <section className="mt-10 border-l-4 border-[#0F4C5C] bg-[#EEF3F4] p-4 rounded-r-lg">
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
