import type { ReactNode } from "react";

export const understandingArthritisMedicationMeta = {
  title:
    "Understanding Arthritis Medication: Options for Managing Pain and Inflammation Safely",
  metaTitle: "Arthritis Medication From Medical Weight Loss Tampa",
  slug: "understanding-arthritis-medication",
  description:
    "Learn how arthritis medication works, what is safest for pain and inflammation, and how weight management can support better joint health.",
  image: "/images/static-blogs/arthritis-medication-pain-management-consultation.webp",
  altText:
    "Doctor explaining arthritis medication options to patient experiencing hand pain and inflammation",
  imageTitle: "Arthritis Medication Options for Pain and Inflammation Relief",
  imageDescription:
    "Medical consultation focused on arthritis treatment options, pain management, and reducing joint inflammation through safe medication and personalized care plans.",
  caption:
    "Doctor discussing arthritis medication and treatment options to help manage joint pain and inflammation safely.",
  category: "Pain Relief & Arthritis Care",
  publishedAt: "2026-05-23",
  canonicalUrl:
    "https://www.medicalweightlosstampa.com/the-wellness-journal/understanding-arthritis-medication",
};

const sourceLinks = {
  cdcObesity: "https://www.cdc.gov/nchs/data/hestat/hestat111.htm",
  cdcArthritis: "https://www.cdc.gov/mmwr/volumes/72/wr/mm7241a1.htm",
  fdaJak:
    "https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-warnings-about-increased-risk-serious-heart-related-events-cancer-blood-clots-and-death",
  nihWeightLoss:
    "https://www.nih.gov/news-events/nih-research-matters/intensive-weight-loss-helps-knee-arthritis",
  niamsRa: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis/advanced",
};

const keyTakeaways = [
  "There is no single most effective arthritis medication; the right choice depends on the arthritis type.",
  "NSAIDs can reduce pain and inflammation, but long-term use may raise risks such as GI bleeding and kidney strain.",
  "Rheumatoid arthritis often needs DMARDs or biologics that target disease progression, not just symptoms.",
  "Weight loss can reduce joint load and may improve pain levels, mobility, and medication response.",
  "Corticosteroid injections can work quickly for flare-ups, but repeated use should be carefully limited.",
  "The FDA has issued warnings on some JAK inhibitors related to serious heart-related risks, blood clots, and certain cancers.",
  "Arthritis usually cannot be permanently cured, but it can often be managed well with the right care plan.",
];

const stats = [
  {
    value: "40.3%",
    text: "Adult obesity prevalence in the U.S. from August 2021 to August 2023",
    source: "CDC",
    href: sourceLinks.cdcObesity,
  },
  {
    value: "53.2M",
    text: "U.S. adults with diagnosed arthritis, or 21.2% of adults",
    source: "CDC MMWR",
    href: sourceLinks.cdcArthritis,
  },
  {
    value: "10%",
    text: "Weight loss associated with improved knee osteoarthritis symptoms in NIH research",
    source: "NIH",
    href: sourceLinks.nihWeightLoss,
  },
];

const medicationRows = [
  {
    type: "NSAIDs",
    examples: "Ibuprofen, Naproxen",
    usedFor: "OA and RA pain relief",
    howItWorks: "Reduces inflammation and pain",
    risk: "GI bleeding, kidney strain",
  },
  {
    type: "Acetaminophen",
    examples: "Common pain reliever",
    usedFor: "Mild osteoarthritis pain",
    howItWorks: "Blocks pain signals",
    risk: "Liver strain with overuse",
  },
  {
    type: "Topical NSAIDs",
    examples: "Creams and gels",
    usedFor: "Localized joint pain",
    howItWorks: "Targets a specific joint area",
    risk: "Minimal systemic exposure",
  },
  {
    type: "Corticosteroid Injections",
    examples: "In-office joint injections",
    usedFor: "Severe flare-ups",
    howItWorks: "Fast anti-inflammatory reset",
    risk: "May weaken cartilage if overused",
  },
  {
    type: "DMARDs",
    examples: "Disease-modifying medications",
    usedFor: "Rheumatoid arthritis",
    howItWorks: "Slows disease progression",
    risk: "Requires regular monitoring",
  },
  {
    type: "Biologics / JAK Inhibitors",
    examples: "Advanced immune-targeting therapy",
    usedFor: "Moderate to severe RA",
    howItWorks: "Targets specific inflammatory pathways",
    risk: "Heart risk, blood clots, FDA warning",
  },
];

const longTermRisks = [
  "Gastrointestinal bleeding",
  "Kidney problems",
  "Cardiovascular issues",
  "Liver strain in some cases",
];

const flareBenefits = [
  "Pain drops.",
  "Swelling reduces.",
  "Movement improves.",
  "Relief can happen fast.",
];

const managementGoals = [
  "Less pain",
  "Fewer flare-ups",
  "Slower joint damage",
  "Better daily function",
];

const metabolicBenefits = [
  "Joint load decreases",
  "Inflammation drops",
  "Medication may work more effectively",
  "Cartilage stress reduces",
];

const supervisedPlan = [
  "Nutrition guidance",
  "Metabolic monitoring",
  "Medication adjustments",
  "Long-term strategies",
];

const nutritionOptions = [
  "Omega-3-rich fish",
  "Turmeric or curcumin",
  "Vegetables with phytonutrients",
  "Whole grains and legumes",
];

const movementOptions = [
  "Walking",
  "Swimming",
  "Water therapy",
  "Light strength training",
];

const complementaryCare = [
  "Posture correction",
  "Soft tissue work",
  "Movement therapy",
];

const monitoringItems = [
  "CRP and ESR levels",
  "Medication safety markers",
  "Imaging results",
];

const faqs = [
  {
    question: "What is the safest arthritis medication for long-term use?",
    answer:
      "Acetaminophen and topical NSAIDs are generally considered safer for long-term use than oral NSAIDs for many people. The safest option still depends on arthritis type, overall health, liver and kidney function, and other medications, so long-term use should be guided by a doctor.",
  },
  {
    question: "Can weight loss replace arthritis medication?",
    answer:
      "Weight loss cannot replace prescribed arthritis medication by itself, but it can reduce joint stress and may improve how well a treatment plan works. For some patients, losing weight reduces pain enough that their clinician may adjust medication needs over time.",
  },
  {
    question: "How long does it take for arthritis medication to work?",
    answer:
      "NSAIDs and corticosteroid injections may help within hours to days. DMARDs and biologics used for rheumatoid arthritis can take several weeks to months before meaningful improvement is noticeable.",
  },
  {
    question: "What natural remedies help with arthritis pain?",
    answer:
      "Anti-inflammatory foods, low-impact movement, swimming, walking, and joint-friendly strength work can support arthritis pain management. These strategies are supportive tools, not replacements for prescribed medical treatment.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="nofollow noopener noreferrer"
    className="font-semibold text-[#1F4E79] underline decoration-[#2E75B6]/40 underline-offset-4 transition-colors hover:text-[#2E75B6]"
  >
    {children}
  </a>
);

const SectionHeading = ({
  numeral,
  title,
}: {
  numeral: string;
  title: string;
}) => (
  <div className="border-t-2 border-[#2E75B6] pt-5">
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#1F4E79] text-sm font-bold text-white">
        {numeral}
      </span>
      <h2 className="text-2xl font-bold leading-snug text-[#1F4E79] md:text-[28px]">
        {title}
      </h2>
    </div>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-[17px] leading-8">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-3 h-2 w-2 shrink-0 bg-[#2E75B6]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function UnderstandingArthritisMedication() {
  return (
    <article className="mt-8 bg-white text-[#222]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-y border-[#D6E4F0] py-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4E79]">
          Medical Weight Loss Tampa | Pain Relief & Arthritis Care | Tampa, FL
        </p>
        <p className="mt-2 text-sm font-semibold text-[#595959]">
          813.269.7546 | medicalweightlosstampa.com
        </p>
        <p className="mt-4 text-base font-semibold text-[#2E75B6]">
          Explained by the Clinical Team at Medical Weight Loss Tampa
        </p>
        <p className="text-sm text-[#595959]">Updated 2026</p>
      </section>

      <div className="mt-8 space-y-6 text-[17px] leading-8">
        <p>
          Arthritis medication varies based on the type and severity of the
          condition. From NSAIDs and acetaminophen for basic pain relief to
          biologics for autoimmune forms, each option carries trade-offs.
          Managing body weight alongside medication can play a direct role in
          reducing joint stress, improving medication response, and slowing
          disease progression.
        </p>
        <p>
          Arthritis is not one single problem. It is a whole category of joint
          disorders with different causes, different pain patterns, and
          different treatment needs. That is where most confusion begins. At
          Medical Weight Loss Tampa, pain relief matters, but so does safer
          medication use, movement support, and daily habits that reduce joint
          strain over time.
        </p>
      </div>

      <section className="mt-10 border border-[#D6E4F0] bg-[#F2F8FD]">
        <h2 className="bg-[#1F4E79] px-5 py-3 text-base font-bold uppercase tracking-[0.16em] text-white">
          Key Takeaways
        </h2>
        <ul className="space-y-3 px-6 py-6 text-[17px] leading-8">
          {keyTakeaways.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-3 h-2 w-2 shrink-0 bg-[#2E75B6]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="border border-[#D6E4F0] bg-white px-5 py-6 text-center"
          >
            <div className="text-4xl font-bold leading-none text-[#1F4E79]">
              {stat.value}
            </div>
            <p className="mt-3 text-sm font-semibold uppercase leading-6 text-[#1A526F]">
              {stat.text}
            </p>
            <p className="mt-2 text-xs text-[#595959]">
              Source:{" "}
              <ExternalLink href={stat.href}>{stat.source}</ExternalLink>
            </p>
          </div>
        ))}
      </section>

      <section className="mt-12 overflow-hidden border border-[#D6E4F0]">
        <div className="bg-[#1F4E79] px-5 py-4">
          <h2 className="text-2xl font-bold leading-snug text-white">
            Arthritis Medication Comparison: Types, Uses, and Risks
          </h2>
          <p className="mt-2 text-base text-[#D6E4F0]">
            A practical overview of common arthritis treatment options.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-[1.2fr_1fr_1.2fr_1.4fr_1.2fr]">
          {["Medication Type", "Examples", "Used For", "How It Works", "Key Risk"].map(
            (heading) => (
              <div
                key={heading}
                className="border-b border-r border-white/30 bg-[#2E75B6] px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white last:border-r-0"
              >
                {heading}
              </div>
            ),
          )}
          {medicationRows.map((row, index) => (
            <div
              key={row.type}
              className={`contents ${
                index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
              }`}
            >
              <div
                className={`border-b border-r border-[#D6E4F0] px-4 py-4 font-bold text-[#1F4E79] ${
                  index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
                }`}
              >
                {row.type}
              </div>
              <div
                className={`border-b border-r border-[#D6E4F0] px-4 py-4 text-sm leading-6 ${
                  index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
                }`}
              >
                {row.examples}
              </div>
              <div
                className={`border-b border-r border-[#D6E4F0] px-4 py-4 text-sm leading-6 ${
                  index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
                }`}
              >
                {row.usedFor}
              </div>
              <div
                className={`border-b border-r border-[#D6E4F0] px-4 py-4 text-sm leading-6 ${
                  index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
                }`}
              >
                {row.howItWorks}
              </div>
              <div
                className={`border-b border-[#D6E4F0] px-4 py-4 text-sm font-semibold leading-6 text-[#8A3B12] ${
                  index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
                }`}
              >
                {row.risk}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 p-4 md:hidden">
          {medicationRows.map((row) => (
            <div key={row.type} className="border border-[#D6E4F0] bg-white p-4">
              <h3 className="text-lg font-bold text-[#1F4E79]">{row.type}</h3>
              <dl className="mt-3 space-y-2 text-sm leading-6">
                <div>
                  <dt className="font-bold text-[#2E75B6]">Examples</dt>
                  <dd>{row.examples}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[#2E75B6]">Used For</dt>
                  <dd>{row.usedFor}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[#2E75B6]">How It Works</dt>
                  <dd>{row.howItWorks}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[#8A3B12]">Key Risk</dt>
                  <dd>{row.risk}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 space-y-12">
        <section>
          <SectionHeading
            numeral="I"
            title="What Is the Most Effective Medication for Arthritis?"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              Short answer: there is not one medication that is best for
              everyone. The type of arthritis matters more than many people
              expect. Osteoarthritis and rheumatoid arthritis may both affect
              joints, but they are not treated the same way.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="border border-[#D6E4F0] bg-[#F8FBFE] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                Osteoarthritis Medication
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                Osteoarthritis is mostly about wear and tear. Cartilage breaks
                down, movement becomes uncomfortable, and pain may feel sharp,
                dull, or simply persistent. Doctors often start with
                acetaminophen or NSAIDs to reduce pain and inflammation. For
                some people, that is enough to move better and get through the
                day.
              </p>
            </div>

            <div className="border border-[#D6E4F0] bg-[#F8FBFE] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                Rheumatoid Arthritis Medication
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                Rheumatoid arthritis is autoimmune, which means the immune
                system attacks joint tissue. Treatment usually needs to go
                deeper than symptom relief. DMARDs are often used because they
                can slow the disease itself, even when they do not remove pain
                immediately.
              </p>
            </div>
          </div>

          <div className="mt-7 border-l-[18px] border-[#2E75B6] bg-[#EAF4FB] px-6 py-5">
            <h3 className="text-xl font-bold text-[#1F4E79]">
              More Advanced Options
            </h3>
            <p className="mt-2 text-[17px] leading-8 text-[#1F4E79]">
              Biologics, TNF blockers, and JAK inhibitors target specific
              inflammatory pathways. They can be very effective in the right
              case, but the right choice depends on your body, risks, medical
              history, and diagnosis, not symptoms alone.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            numeral="II"
            title="Common Categories of Arthritis Medications Safely"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              Most people simply want something that works. Arthritis
              medications can help, but each option comes with trade-offs. The
              CDC reports that 53.2 million U.S. adults have diagnosed
              arthritis, which means many people are navigating the same
              decisions about relief, risk, and long-term safety.
            </p>
            <p>
              Source:{" "}
              <ExternalLink href={sourceLinks.cdcArthritis}>
                CDC Morbidity and Mortality Weekly Report
              </ExternalLink>
              .
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="border border-[#D6E4F0] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                NSAIDs for Pain and Inflammation
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                NSAIDs such as ibuprofen and naproxen are common because they
                reduce inflammation, ease pain, and help people move. The part
                people often skip is that long-term use can raise risks.
              </p>
              <div className="mt-4">
                <BulletList items={longTermRisks} />
              </div>
            </div>

            <div className="border border-[#D6E4F0] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                Topical vs. Oral Treatment
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                Sometimes a pill is not the best starting point. Topical NSAIDs
                can target a specific knee, elbow, wrist, or hand with less
                systemic exposure. For localized pain, that can make more
                practical sense than treating the whole body.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="border border-[#D6E4F0] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                Corticosteroid Injections
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                During severe flare-ups, corticosteroid injections can feel like
                a reset button. They are not meant to be overused because
                repeated injections may weaken cartilage and surrounding tissue.
              </p>
              <div className="mt-4">
                <BulletList items={flareBenefits} />
              </div>
            </div>

            <div className="border border-[#E6B8B7] bg-[#FDEDEC] px-5 py-5">
              <h3 className="text-xl font-bold text-[#8A1F17]">
                Biologics and JAK Inhibitors
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                For rheumatoid arthritis, doctors may recommend biologics or
                JAK inhibitors that go closer to the source of inflammation. The
                FDA has warned that some JAK inhibitors may increase the risk of
                serious heart-related events, blood clots, certain cancers, and
                death.
              </p>
              <p className="mt-3 text-sm font-semibold text-[#8A1F17]">
                Source:{" "}
                <ExternalLink href={sourceLinks.fdaJak}>
                  U.S. Food and Drug Administration
                </ExternalLink>
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            numeral="III"
            title="Can Arthritis Be Cured Permanently?"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              This is the question almost everyone asks. Most forms of
              arthritis cannot be permanently cured. The more realistic goal is
              control, not perfection. With the right plan, many people improve
              enough that arthritis interferes less with daily life.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="bg-[#1F4E79] px-6 py-6 text-white">
              <h3 className="text-xl font-bold">The Real Goal</h3>
              <div className="mt-4">
                <ul className="space-y-3 text-[17px] leading-8">
                  {managementGoals.map((goal) => (
                    <li key={goal} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 bg-[#D6E4F0]" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-[#D6E4F0] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                Functional Improvement Matters
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                Can you walk more comfortably? Sleep better? Move without
                constantly thinking about your joints? That is real progress.
                Less morning stiffness, easier stairs, and walking without
                hesitation can change your energy and confidence.
              </p>
            </div>
          </div>

          <div className="mt-7 border-l-[18px] border-[#2E75B6] bg-[#EAF4FB] px-6 py-5">
            <h3 className="text-xl font-bold text-[#1F4E79]">
              Weight Loss and Joint Stress
            </h3>
            <p className="mt-2 text-[17px] leading-8 text-[#1F4E79]">
              Weight is often underestimated in arthritis care. Even a modest
              reduction can take pressure off the knees and hips. NIH research
              notes that losing around 10% of body weight can improve knee
              osteoarthritis symptoms in overweight adults.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#1F4E79]">
              Source:{" "}
              <ExternalLink href={sourceLinks.nihWeightLoss}>
                National Institutes of Health
              </ExternalLink>
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            numeral="IV"
            title="The Weight Loss Connection to Medication Safety and Effectiveness"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              Extra weight does not just sit there quietly. It adds constant
              pressure to joints that are already struggling. Fat tissue can
              also release inflammatory chemicals that worsen joint damage and
              increase pain over time. So the issue is mechanical and
              biological.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="border border-[#D6E4F0] bg-[#F8FBFE] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                How Metabolic Health Supports Arthritis Treatment
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                When weight comes down, the whole treatment picture can shift.
                Lower joint load, lower inflammation, and less cartilage stress
                may all support better arthritis outcomes.
              </p>
              <div className="mt-4">
                <BulletList items={metabolicBenefits} />
              </div>
            </div>

            <div className="border border-[#D6E4F0] bg-[#F8FBFE] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                The Medical Advantage of Supervised Weight Loss
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                Trying to lose weight alone can get confusing. Extreme diets,
                random supplements, and inconsistent plans can make pain and
                medication decisions harder. Medical supervision keeps the
                approach structured, realistic, and safer.
              </p>
              <div className="mt-4">
                <BulletList items={supervisedPlan} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            numeral="V"
            title="Are There Natural Home Remedies for Rheumatoid Arthritis?"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              Natural options can help, but they are support tools, not
              replacements for medication when rheumatoid arthritis requires
              disease control. The goal is to lower inflammation, protect
              movement, and support the body between medical visits.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="border border-[#D6E4F0] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                Anti-Inflammatory Nutrition
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                Food is not magic, but it can be meaningful when choices are
                consistent.
              </p>
              <div className="mt-4">
                <BulletList items={nutritionOptions} />
              </div>
            </div>

            <div className="border border-[#D6E4F0] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                Movement and Joint Health
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                Joints need motion, not extreme workouts. Consistent movement
                helps maintain synovial fluid and reduce stiffness.
              </p>
              <div className="mt-4">
                <BulletList items={movementOptions} />
              </div>
            </div>

            <div className="border border-[#D6E4F0] px-5 py-5">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                Complementary Care
              </h3>
              <p className="mt-2 text-[17px] leading-8">
                Sometimes the issue is not just the joint. It is how everything
                around that joint is moving and compensating.
              </p>
              <div className="mt-4">
                <BulletList items={complementaryCare} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            numeral="VI"
            title="Do People Die From Rheumatoid Arthritis?"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              The question sounds scary, but rheumatoid arthritis can be
              serious when inflammation is not controlled. RA does not only
              affect joints. It can involve the heart, lungs, blood, nerves,
              eyes, and skin, which is why long-term monitoring matters.
            </p>
            <p>
              NIAMS notes that rheumatoid arthritis may cause medical problems
              outside the joints, including areas such as the heart and lungs.
              The point is to stay ahead of the disease instead of reacting too
              late.
            </p>
            <p>
              Source:{" "}
              <ExternalLink href={sourceLinks.niamsRa}>
                National Institute of Arthritis and Musculoskeletal and Skin
                Diseases
              </ExternalLink>
              .
            </p>
          </div>

          <div className="mt-7 border border-[#D6E4F0] bg-[#F2F8FD] px-6 py-5">
            <h3 className="text-xl font-bold text-[#1F4E79]">
              Doctors Often Track
            </h3>
            <div className="mt-4">
              <BulletList items={monitoringItems} />
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12 bg-[#1F4E79] px-6 py-8 text-white md:px-8">
        <h2 className="text-2xl font-bold leading-snug">
          Reclaim Your Quality of Life at Medical Weight Loss Tampa
        </h2>
        <p className="mt-4 text-[17px] leading-8 text-white/95">
          Arthritis care works best when everything is considered, not just
          pain. At Medical Weight Loss Tampa, the approach combines medication
          safety, metabolic health, movement support, and practical lifestyle
          care. One piece alone rarely solves the whole picture.
        </p>
        <p className="mt-4 text-base font-bold text-[#D6E4F0]">
          Medical supervision | Personalized weight management | Non-invasive
          pain strategies | Lifestyle support
        </p>
      </section>

      <section className="mt-12">
        <h2 className="border-t-2 border-[#2E75B6] pt-5 text-2xl font-bold text-[#1F4E79]">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-base font-semibold text-[#595959]">
          People Also Ask About Arthritis Medication
        </p>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-xl font-bold text-[#1F4E79]">
                {faq.question}
              </h3>
              <p className="mt-2 text-[17px] leading-8">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border border-[#D6E4F0] bg-[#F8FBFE] px-5 py-5 text-sm leading-7 text-[#1F4E79]">
        <p className="font-bold">
          Medical Weight Loss Tampa | Arthritis Medication, Pain Relief &
          Weight Management
        </p>
        <p>Serving Patients Across Tampa, FL</p>
        <p>813 269 7546 | Call Today for a Personalized Consultation</p>
        <p>Address: 5111 Ehrlich Rd. Ste 128, Tampa, FL 33624</p>
        <p>
          Website:{" "}
          <ExternalLink href="https://www.medicalweightlosstampa.com/">
            www.medicalweightlosstampa.com
          </ExternalLink>
        </p>
      </section>

      <p className="mt-8 border-t border-[#CCCCCC] pt-5 text-sm leading-7 text-[#555]">
        Disclaimer: This article offers general information and is not a
        replacement for professional medical advice. For personalized health
        assessments, arthritis medication questions, and weight loss plans,
        consult a licensed medical professional.
      </p>
    </article>
  );
}
