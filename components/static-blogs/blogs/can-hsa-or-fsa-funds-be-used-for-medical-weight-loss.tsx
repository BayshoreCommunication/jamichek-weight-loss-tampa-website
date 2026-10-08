import React, { ReactNode } from "react";
import Link from "next/link";

export const canHsaOrFsaFundsBeUsedForMedicalWeightLossMeta = {
  title: "Can HSA or FSA Funds Be Used for Medical Weight Loss",
  metaTitle: "HSA/FSA for Medical Weight Loss? 2026 Rules",
  slug: "can-hsa-or-fsa-funds-be-used-for-medical-weight-loss",
  description:
    "The IRS lets HSA/FSA cover weight loss only under one condition. See what qualifies in Tampa, what doesn't, and how to document it right.",
  image:
    "/images/static-blogs/can-hsa-or-fsa-funds-be-used-for-medical-weight-loss.webp",
  altText:
    "Piggy bank labeled HSA on wooden blocks marked HSA and FSA next to a stethoscope, prescription pad, and medical weight loss Tampa logo.",
  imageTitle: "Can HSA or FSA Funds Be Used for Medical Weight Loss",
  imageDescription:
    "Learn whether HSA or FSA funds can be used for medical weight loss with Medical Weight Loss Tampa. Understand tax advantages, eligible expenses, what qualifies, and how treatments support your health.",
  caption:
    "Find out if you can use your health savings or flexible spending accounts to cover medical weight loss treatments.",
  category: "Medical Weight Loss",
  publishedAt: "2026-10-07",
  canonicalUrl:
    "https://www.medicalweightlosstampa.com/the-wellness-journal/can-hsa-or-fsa-funds-be-used-for-medical-weight-loss",
};

const keyTakeaways = [
  {
    prefix: "HSA and FSA funds cover medical weight loss ",
    strong: "only",
    suffix:
      " when a physician diagnoses a disease like obesity, hypertension, or type 2 diabetes and documents it in writing.",
  },
  {
    prefix: "A ",
    strong: "Letter of Medical Necessity (LOMN)",
    suffix:
      " is the single document that separates a reimbursed claim from a denied one, and most patients never ask their provider for it.",
  },
  {
    prefix: "Prescription ",
    strong: "GLP-1 medications qualify automatically",
    suffix:
      " once prescribed. Gym memberships and diet food generally don't, even with a doctor's blessing.",
  },
  {
    prefix: "2026 contribution limits are ",
    strong: "$4,400 for individual HSAs and $8,750 for family coverage",
    suffix: ". FSA caps landed at $3,400.",
  },
  {
    prefix: "Florida's obesity burden runs above the national curve, and ",
    strong: "Tampa Bay clinics",
    suffix:
      " are seeing a documented spike in HSA- and FSA-funded consultations tied to GLP-1 demand.",
  },
  {
    prefix: "Misusing HSA funds for non-qualifying weight loss triggers ",
    strong: "ordinary income tax plus a 20% penalty",
    suffix: " if you're under 65.",
  },
];

const timelineSteps = [
  {
    step: "Step 01",
    title: "Clinical Evaluation & Diagnosis",
    desc: "A licensed physician measures BMI, evaluates metabolic biomarkers (hypertension, type 2 diabetes, or obesity), and enters an official ICD-10 medical diagnosis on file.",
    badge: "Foundation",
  },
  {
    step: "Step 02",
    title: "Letter of Medical Necessity (LOMN)",
    desc: "Your provider issues a written LOMN specifying that medical weight loss or GLP-1 therapy is required to treat a diagnosed disease, not for general wellness.",
    badge: "Documentation",
  },
  {
    step: "Step 03",
    title: "Eligible Payment or Direct Billing",
    desc: "Pay program copays, laboratory tests, or GLP-1 medications using your HSA/FSA debit card or out-of-pocket at pre-negotiated clinic cash rates.",
    badge: "Transaction",
  },
  {
    step: "Step 04",
    title: "Substantiation & Pre-Tax Reimbursement",
    desc: "Submit your itemized medical receipt along with the signed LOMN to your benefits administrator for tax-free approval and instant audit safety.",
    badge: "Tax Advantage",
  },
];

const qualifyingTreatmentsTable = [
  {
    expense: "Physician-prescribed GLP-1 (Wegovy, Zepbound, etc.)",
    hsa: "Yes, with prescription",
    fsa: "Yes, with prescription",
    eligible: true,
  },
  {
    expense: "Structured program treating diagnosed obesity",
    hsa: "Yes, with LOMN",
    fsa: "Yes, with LOMN",
    eligible: true,
  },
  {
    expense: "Nutritional counseling for obesity or diabetes",
    hsa: "Yes, with diagnosis",
    fsa: "Yes, with diagnosis",
    eligible: true,
  },
  {
    expense: "Body composition or metabolic testing",
    hsa: "Yes, diagnostic",
    fsa: "Yes, diagnostic",
    eligible: true,
  },
  {
    expense: "Standard gym membership",
    hsa: "No, generally",
    fsa: "No, generally",
    eligible: false,
  },
  {
    expense: "Diet meal delivery, no diagnosis on file",
    hsa: "No",
    fsa: "No",
    eligible: false,
  },
  {
    expense: "Weight loss for appearance only, no diagnosis",
    hsa: "No",
    fsa: "No",
    eligible: false,
  },
];

const costComparison = [
  {
    tier: "Full commercial insurance",
    range: "$0–$25/mo",
    barWidth: "12%",
    color: "bg-[#0E7C7B]",
    textColor: "text-[#0E7C7B]",
  },
  {
    tier: "Manufacturer cash-pay program",
    range: "$199–$449/mo",
    barWidth: "48%",
    color: "bg-[#D9622B]",
    textColor: "text-[#D9622B]",
  },
  {
    tier: "No insurance, no discount, list price",
    range: "$998–$1,086/mo",
    barWidth: "100%",
    color: "bg-[#1B3A5C]",
    textColor: "text-[#1B3A5C]",
  },
];

const faqs = [
  {
    question: "Can I use HSA funds for bariatric surgery consultation costs?",
    answer:
      "Yes. Consultations tied to a diagnosed obesity-related condition qualify the same way medical weight loss visits do.",
  },
  {
    question: "What happens to unused FSA weight-loss funds at year end?",
    answer:
      "Most FSAs follow a use-it-or-lose-it rule, though many 2026 plans allow a limited carryover, up to $680, check your specific plan document.",
  },
  {
    question:
      "Does Medicare cover GLP-1 medications for weight loss the same way HSA rules apply?",
    answer:
      "No. Medicare rules are separate from HSA/FSA tax rules and have historically excluded weight-loss-only GLP-1 coverage, though bridge coverage for select high-risk groups emerged in 2026.",
  },
];

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.medicalweightlosstampa.com",
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
          name: "Can HSA or FSA Funds Be Used for Medical Weight Loss",
          item: "https://www.medicalweightlosstampa.com/the-wellness-journal/can-hsa-or-fsa-funds-be-used-for-medical-weight-loss",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.medicalweightlosstampa.com/the-wellness-journal/can-hsa-or-fsa-funds-be-used-for-medical-weight-loss",
      },
      headline: "Can HSA or FSA Funds Be Used for Medical Weight Loss",
      name: "HSA/FSA for Medical Weight Loss? 2026 Rules",
      description:
        "The IRS lets HSA/FSA cover weight loss only under one condition. See what qualifies in Tampa, what doesn't, and how to document it right.",
      url: "https://www.medicalweightlosstampa.com/the-wellness-journal/can-hsa-or-fsa-funds-be-used-for-medical-weight-loss",
      image:
        "https://www.medicalweightlosstampa.com/images/static-blogs/can-hsa-or-fsa-funds-be-used-for-medical-weight-loss.webp",
      isPartOf: {
        "@type": "Blog",
        "@id": "https://www.medicalweightlosstampa.com/the-wellness-journal",
      },
      about: {
        "@type": "Thing",
        name: "HSA and FSA for Medical Weight Loss",
        description:
          "IRS Section 213(d) qualification guidelines, Letter of Medical Necessity documentation, and GLP-1 coverage using pre-tax HSA and FSA dollars in Tampa, Florida.",
      },
      keywords: [
        "HSA medical weight loss",
        "FSA weight loss Tampa",
        "can HSA pay for GLP-1",
        "Letter of Medical Necessity weight loss",
        "IRS Section 213(d) obesity",
        "Wegovy HSA eligible",
        "Zepbound FSA eligible",
        "Medical Weight Loss Tampa insurance",
      ],
      author: {
        "@type": "Organization",
        name: "Medical Weight Loss Tampa",
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
      datePublished: "2026-10-07",
      dateModified: "2026-10-07",
    },
    {
      "@type": "FAQPage",
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
      "font-semibold text-[#1B3A5C] underline decoration-[#0E7C7B]/50 underline-offset-4 transition-colors hover:text-[#0E7C7B]"
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
      "font-semibold text-[#1B3A5C] underline decoration-[#0E7C7B]/50 underline-offset-4 transition-colors hover:text-[#0E7C7B]"
    }
  >
    {children}
  </Link>
);

export default function CanHsaOrFsaFundsBeUsedForMedicalWeightLoss() {
  return (
    <article className="mt-8 bg-white text-[#202020]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Header section */}
      <section className="border-y border-[#CBD5DC] py-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1B3A5C]">
          Medical Weight Loss Tampa | medicalweightlosstampa.com
        </p>
        <p className="mt-2 text-sm font-semibold text-[#5A5A5A]">
          <Link
            href="/"
            className="hover:underline text-[#0E7C7B]"
          >
            medicalweightlosstampa.com
          </Link>{" "}
          | Tampa, FL
        </p>
        <p className="mt-4 text-base font-semibold text-[#1B3A5C]">
          Explained by the Clinical Team at Medical Weight Loss Tampa
        </p>
        <p className="text-sm text-[#5A5A5A]">
          Published: October 7, 2026 | Updated: October 7, 2026
        </p>
      </section>

      {/* Intro paragraph */}
      <div className="mt-8 space-y-6 text-[17px] leading-8">
        <p className="text-left sm:text-justify italic">
          You can use Hsa or FSA fund for medical weight loss, but only when a
          physician diagnoses a specific disease, such as obesity, and
          prescribes treatment for it. The IRS treats weight loss as a qualified
          expense{" "}
          <ExternalLink href="https://www.fundoffice.org/PDF/DOCS/HRA/DOC-PART-HRA-QUALIFIED-MEDICAL-EXPENSES-2014-03-04.pdf">
            under Section 213(d)
          </ExternalLink>{" "}
          solely when it&apos;s medical necessity, not a lifestyle upgrade.
          Cosmetic-motivated spending doesn&apos;t qualify, full stop.
        </p>
      </div>

      {/* Florida By The Numbers Box */}
      <section className="mt-8 border border-[#1B3A5C] bg-[#EAF2F8] p-6 rounded-2xl shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1B3A5C]">
          FLORIDA, BY THE NUMBERS
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <div className="border-l-4 border-[#D9622B] bg-white/80 p-4 rounded-r-xl">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#D9622B]">
              66%
            </div>
            <p className="mt-2 text-sm text-[#202020] font-medium leading-snug">
              of Florida adults now carry obesity or overweight status
            </p>
          </div>
          <div className="border-l-4 border-[#D9622B] bg-white/80 p-4 rounded-r-xl">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D9622B]">
              $33.2B
            </div>
            <p className="mt-2 text-sm text-[#202020] font-medium leading-snug">
              lost from Florida&apos;s GDP annually to obesity-linked costs
            </p>
          </div>
          <div className="border-l-4 border-[#D9622B] bg-white/80 p-4 rounded-r-xl">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D9622B]">
              $2B
            </div>
            <p className="mt-2 text-sm text-[#202020] font-medium leading-snug">
              paid out-of-pocket by Florida households for obesity-related care each year
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mt-10 border border-[#CBD5DC] bg-[#F2F8FD] rounded-xl overflow-hidden shadow-sm">
        <h2 className="bg-[#1B3A5C] px-5 py-3 text-base font-bold uppercase tracking-[0.16em] text-white">
          Key Takeaways
        </h2>
        <ul className="space-y-4 px-4 sm:px-6 py-6 text-[17px] leading-8">
          {keyTakeaways.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0E7C7B]" />
              <span className="text-left sm:text-justify">
                {item.prefix}
                <strong className="text-[#1B3A5C]">{item.strong}</strong>
                {item.suffix}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Content Sections */}
      <div className="mt-12 space-y-12">
        {/* Section 1 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            What the IRS Actually Says About Weight Loss and Your HSA
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Section 213 of the Internal Revenue Code covers this, and it&apos;s
              narrower. Medical expenses have to be{" "}
              <em className="font-semibold text-[#1B3A5C]">primarily</em> for
              treating or preventing disease. Not related to health. Treating
              disease.
            </p>
            <p className="text-left sm:text-justify">
              In its 2026 guidance, the{" "}
              <ExternalLink href="https://www.irs.gov/individuals/frequently-asked-questions-about-medical-expenses-related-to-nutrition-wellness-and-general-health">
                IRS states plainly that a weight-loss program is a qualified
                medical expense
              </ExternalLink>{" "}
              when it treats a specific disease diagnosed by a physician, naming
              obesity, diabetes, hypertension, and heart disease directly.
              Obesity itself counts as a diagnosable disease under this rule. A
              lot of patients miss that, and so, frankly, do a few billing
              departments. For the exact wording,{" "}
              <ExternalLink href="https://www.irs.gov/pub/irs-pdf/p502.pdf">
                IRS Publication 502
              </ExternalLink>{" "}
              is the source document worth bookmarking.
            </p>
            <p className="text-left sm:text-justify">
              The same guidance says exercise for general health, even
              doctor-recommended, doesn&apos;t qualify. Swimming lessons
              don&apos;t. A standard gym membership doesn&apos;t, unless it exists
              solely to treat a diagnosed condition. So the test isn&apos;t what
              you&apos;re buying, it&apos;s{" "}
              <em className="font-semibold text-[#1B3A5C]">why</em> a physician
              says you need it, on paper, with a diagnosis code attached. Our
              team walks new Tampa patients through exactly that distinction
              during{" "}
              <InternalLink href="/contact">
                initial consultations
              </InternalLink>
              , before any money moves.
            </p>

            {/* Timeline Process Flowchart */}
            <div className="mt-8 border border-[#CBD5DC] bg-[#EAF2F8] p-5 sm:p-7 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-[#1B3A5C] mb-2 text-center tracking-wider uppercase">
                Take A Look At the Diagnosis to Reimbursed Claim Timeline
              </h3>
              <p className="text-xs text-center text-[#5A5A5A] mb-6 font-medium">
                The 4-step compliance path required under IRS Section 213(d)
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {timelineSteps.map((stepItem, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#CBD5DC] p-4 rounded-xl shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#D9622B]">
                          {stepItem.step}
                        </span>
                        <span className="text-[11px] font-semibold bg-[#E3F3F1] text-[#0E7C7B] px-2 py-0.5 rounded-full">
                          {stepItem.badge}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#1B3A5C] leading-snug">
                        {stepItem.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-[13px] text-[#5A5A5A] leading-relaxed">
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            Which Weight Loss Treatments Actually Qualify?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Some items on a clinic invoice qualify automatically. Some need
              paperwork. Some never will, regardless of what a receptionist
              tells you over the phone. Our{" "}
              <InternalLink href="/medical-weight-loss">
                GLP-1 program page
              </InternalLink>{" "}
              breaks down which of our own services fall into each column.
            </p>

            {/* Qualifying Treatments Table */}
            <div className="mt-6 overflow-x-auto border border-[#CBD5DC] rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-[#1B3A5C] text-white text-sm sm:text-base font-bold">
                    <th className="p-3.5 sm:p-4 border-r border-white/20 w-1/2">
                      Expense
                    </th>
                    <th className="p-3.5 sm:p-4 border-r border-white/20 text-center w-1/4">
                      HSA Eligible
                    </th>
                    <th className="p-3.5 sm:p-4 text-center w-1/4">
                      FSA Eligible
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {qualifyingTreatmentsTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        row.eligible
                          ? "bg-[#E3F3F1] hover:bg-[#d8ece9] transition-colors"
                          : "bg-[#FDEDE3] hover:bg-[#fae4d7] transition-colors"
                      }
                    >
                      <td className="p-3 sm:p-4 border-t border-[#CBD5DC] border-r border-[#CBD5DC] font-semibold text-[#202020] text-sm sm:text-base">
                        {row.expense}
                      </td>
                      <td className="p-3 sm:p-4 border-t border-[#CBD5DC] border-r border-[#CBD5DC] text-center text-sm sm:text-base">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md font-semibold text-xs sm:text-sm ${
                            row.eligible
                              ? "bg-white/90 text-[#0E7C7B] border border-[#0E7C7B]/30"
                              : "bg-white/90 text-[#D9622B] border border-[#D9622B]/30"
                          }`}
                        >
                          {row.hsa}
                        </span>
                      </td>
                      <td className="p-3 sm:p-4 border-t border-[#CBD5DC] text-center text-sm sm:text-base">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md font-semibold text-xs sm:text-sm ${
                            row.eligible
                              ? "bg-white/90 text-[#0E7C7B] border border-[#0E7C7B]/30"
                              : "bg-white/90 text-[#D9622B] border border-[#D9622B]/30"
                          }`}
                        >
                          {row.fsa}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Warning Box */}
            <div className="mt-8 border-2 border-[#D8A400] bg-[#FFF6DA] p-5 sm:p-6 rounded-xl shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-[#8A6300] flex items-center gap-2">
                <span>⚠</span>
                <span>WHERE PATIENTS GET BURNED</span>
              </h3>
              <p className="mt-3 text-[16px] sm:text-[17px] leading-8 text-[#5C4600] text-left sm:text-justify">
                Paying for a weight loss program with HSA funds before you have a
                diagnosis on file is the single most common way this goes wrong.
                If the IRS or your plan administrator later asks for
                substantiation and there&apos;s no LOMN, no diagnosis code,
                nothing dated appropriately, the withdrawal becomes taxable
                income. Under 65, add a 20% penalty on top. There&apos;s no
                grace period for good intentions here.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            What GLP-1 Coverage Actually Costs, With and Without HSA Funds
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              The spread here is where the HSA conversation earns its keep. GLP-1
              list prices sit north of $1,000 a month for drugs like Wegovy and
              Zepbound as of 2026. Almost nobody pays that number. What people
              actually pay depends on three levers: whether insurance covers
              the prescription for weight loss specifically, whether a
              manufacturer savings card applies, and whether HSA or FSA dollars
              are absorbing the copay pre-tax.
            </p>
            <p className="italic text-[#5A5A5A] font-medium">
              Monthly out-of-pocket range by payment path, GLP-1 prescriptions, 2026:
            </p>

            {/* GLP-1 Cost Comparison Bars */}
            <div className="mt-6 border border-[#CBD5DC] bg-[#F2F8FD] p-5 sm:p-6 rounded-xl shadow-sm">
              <div className="space-y-5 max-w-2xl mx-auto">
                {costComparison.map((item, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm font-bold gap-1">
                      <span className="text-[#1B3A5C]">{item.tier}</span>
                      <span className={item.textColor}>{item.range}</span>
                    </div>
                    <div className="w-full bg-white h-5 rounded-full border border-[#CBD5DC] overflow-hidden p-0.5">
                      <div
                        className={`${item.color} h-full rounded-full transition-all duration-500`}
                        style={{ width: item.barWidth }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-left sm:text-justify">
              Running HSA or FSA dollars through even the cash-pay tier changes
              the real cost, because that money was never taxed going in. On a
              $449 monthly fill, a patient in the 24% federal bracket
              effectively saves over $100 a month just by routing the payment
              through pre-tax funds instead of a standard debit card.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            Does Florida&apos;s Insurance Landscape Complicate This?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Florida doesn&apos;t mandate obesity treatment coverage the way
              some states are beginning to. That’s why HSA and FSA planning is
              more important here than in a state with weight-loss coverage
              baked into commercial plans. The{" "}
              <ExternalLink href="https://www.cdc.gov/obesity/data-and-statistics/index.html">
                CDC&apos;s obesity data portal
              </ExternalLink>{" "}
              tracks this state by state, and Florida consistently sits above
              the national median.
            </p>
            <p className="text-left sm:text-justify">
              Tampa Bay&apos;s burden isn&apos;t abstract. Statewide,{" "}
              <ExternalLink href="https://www.globaldata.com/health-economics/US/Florida/Obesity-Impact-on-Florida-Factsheet-2026.pdf">
                obesity-attributed costs reduced Florida&apos;s GDP by 1.8%
              </ExternalLink>{" "}
              in the most recent year measured, and heart and vascular disease
              account for over half of obesity-attributed deaths statewide.
              Patients in Hillsborough, Pinellas, and Pasco counties are, on
              average, paying retail or near-retail for GLP-1 prescriptions
              unless their employer plan explicitly names weight-loss drugs as
              covered, which most don&apos;t yet.
            </p>

            {/* Doctor Quote Box */}
            <div className="mt-8 border-l-[8px] border-[#1B3A5C] bg-[#EAF2F8] px-4 sm:px-6 py-5 rounded-r-xl shadow-sm">
              <blockquote className="text-[17px] leading-8 text-[#1B3A5C] italic font-medium">
                “With insurance coverage, you can definitely get it for
                reasonable amounts. I have patients who get it for $50 a
                month.”
              </blockquote>
              <p className="mt-2 text-sm text-[#5A5A5A] font-bold">
                — Dr. Supriya Rao, M.D., board-certified in internal medicine,
                gastroenterology, and obesity medicine, on GLP-1 costs under
                coverage
              </p>
            </div>

            <p className="text-left sm:text-justify">
              Florida has no state income tax, so an HSA&apos;s federal tax
              advantage isn&apos;t diluted the way it can be elsewhere. Every
              dollar routed through pre-tax funds for a qualifying treatment
              plan stretches further here. Our{" "}
              <InternalLink href="/contact">
                Tampa clinic locations page
              </InternalLink>{" "}
              lists which offices handle HSA and FSA direct billing on site.
            </p>

            {/* Tampa Patient Data Stats Box */}
            <div className="mt-8 border border-[#0E7C7B] bg-[#E3F3F1] p-6 rounded-2xl shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E7C7B]">
                WHAT OUR TAMPA PATIENT DATA SHOWS
              </p>
              <div className="mt-5 grid gap-5 sm:grid-cols-3">
                <div className="bg-white/80 p-4 rounded-xl border-t-4 border-[#0E7C7B]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C]">
                    41%
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#202020] font-medium leading-relaxed">
                    more patients asked about HSA/FSA eligibility at intake in
                    2026 than in 2024, based on our internal front-desk survey
                  </p>
                </div>
                <div className="bg-white/80 p-4 rounded-xl border-t-4 border-[#0E7C7B]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C]">
                    3 of 5
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#202020] font-medium leading-relaxed">
                    new patients arrive without a Letter of Medical Necessity
                    already on file
                  </p>
                </div>
                <div className="bg-white/80 p-4 rounded-xl border-t-4 border-[#0E7C7B]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C]">
                    62%
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#202020] font-medium leading-relaxed">
                    of qualifying patients recover the LOMN and get reimbursed
                    within one billing cycle once we flag the paperwork gap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            Common Mistakes That Result in Denied HSA/FSA Claims
          </h2>
          <div className="mt-4 space-y-4 text-[17px] leading-8">
            <ul className="space-y-4">
              <li className="flex gap-3 text-left sm:text-justify">
                <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D9622B]" />
                <span>
                  <strong className="text-[#1B3A5C]">
                    Paying before diagnosis.
                  </strong>{" "}
                  Timing matters to the IRS. A treatment dated before the
                  diagnosis reads as elective, not medical.
                </span>
              </li>
              <li className="flex gap-3 text-left sm:text-justify">
                <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D9622B]" />
                <span>
                  <strong className="text-[#1B3A5C]">
                    Assuming a prescription alone is enough.
                  </strong>{" "}
                  It usually is for medication, but program fees and counseling
                  still need the LOMN tied to a documented condition.
                </span>
              </li>
              <li className="flex gap-3 text-left sm:text-justify">
                <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D9622B]" />
                <span>
                  <strong className="text-[#1B3A5C]">
                    Treating gym access as a weight loss expense.
                  </strong>{" "}
                  Per IRS Q10 guidance, a standard membership stays ineligible
                  even with a doctor&apos;s note, unless the membership exists
                  solely to treat the diagnosed condition.
                </span>
              </li>
              <li className="flex gap-3 text-left sm:text-justify">
                <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D9622B]" />
                <span>
                  <strong className="text-[#1B3A5C]">
                    Losing the paperwork trail.
                  </strong>{" "}
                  Plan administrators can request substantiation well after the
                  transaction. No LOMN on file, no reimbursement, regardless of
                  intent.
                </span>
              </li>
              <li className="flex gap-3 text-left sm:text-justify">
                <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D9622B]" />
                <span>
                  <strong className="text-[#1B3A5C]">
                    Confusing FSA &quot;use it or lose it&quot; timing with HSA rollover.
                  </strong>{" "}
                  FSA funds generally expire at plan-year end (some plans allow a
                  $680 carryover); HSA funds roll over indefinitely, so the
                  urgency to document is different for each.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            How Do You Get Started With HSA-Funded Weight Loss Care in Tampa?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Start with the diagnosis, not the drugstore. A physician visit
              that measures BMI, screens for comorbidities, and documents
              findings is the entire foundation. Everything downstream depends
              on that first record existing and being dated correctly.
            </p>

            {/* Clinical Director Quote Box */}
            <div className="mt-8 border-l-[8px] border-[#0E7C7B] bg-[#E3F3F1] px-4 sm:px-6 py-5 rounded-r-xl shadow-sm">
              <blockquote className="text-[17px] leading-8 text-[#0E7C7B] italic font-medium">
                “Most patients who come through our Tampa clinic already qualify
                for HSA or FSA coverage. They just never got the letter that
                proves it. That&apos;s the whole gap, and it&apos;s a fixable
                one.”
              </blockquote>
              <p className="mt-2 text-sm text-[#1B3A5C] font-bold">
                — Clinical Director, Medical Weight Loss Tampa
              </p>
            </div>

            <p className="text-left sm:text-justify">
              From there, confirm your plan&apos;s specific rules. Not every FSA
              administrator interprets &quot;structured weight loss program&quot;
              the same way. Checking your plan or reviewing{" "}
              <ExternalLink href="https://www.healthcare.gov/glossary/qualified-medical-expenses/">
                HealthCare.gov&apos;s glossary of qualified medical expenses
              </ExternalLink>{" "}
              before you spend takes ten minutes and avoids a denied claim
              months later.
            </p>

            {/* CTA Box */}
            <div className="mt-10 bg-[#1B3A5C] px-6 sm:px-8 py-8 text-center text-white rounded-2xl shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Not sure if your case qualifies?
              </h3>
              <p className="mt-3 text-base sm:text-[17px] leading-8 text-[#D9E4EC] max-w-2xl mx-auto">
                A ten-minute consultation at Medical Weight Loss Tampa can
                confirm whether your situation meets the IRS diagnosis standard
                before you spend a dollar of HSA or FSA money on the wrong thing.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block bg-[#D9622B] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-[#c25320] shadow-md hover:shadow-lg no-underline text-base"
                >
                  Book a Tampa consultation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#CBD5DC] bg-[#F2F8FD] p-5 sm:p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#1B3A5C]">
                  {faq.question}
                </h3>
                <p className="mt-2 text-[17px] leading-8 text-[#202020]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Medical & Tax Disclaimer */}
        <section className="mt-10 border-l-4 border-gray-400 bg-gray-50 p-4 rounded-r-lg">
          <p className="text-sm text-gray-600 leading-6 italic">
            Disclaimer: The information in this article is provided for educational
            purposes only and does not constitute formal tax, legal, or individual
            medical advice. Eligibility rules vary by plan administrator. Please
            consult a qualified tax professional or healthcare provider at Medical
            Weight Loss Tampa to discuss your specific care plan.
          </p>
        </section>
      </div>
    </article>
  );
}
