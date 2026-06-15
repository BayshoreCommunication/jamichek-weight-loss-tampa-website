import type { ReactNode } from "react";

export const prpInjectionJointPainMeta = {
  title: "PRP Injection for Joint Pain: A Non-Surgical Option for Long-Term Relief",
  metaTitle: "PRP Joint Pain Relief in Tampa | Non-Surgical",
  slug: "prp-injection-joint-pain-long-term-relief",
  description:
    "Discover how PRP injections treat joint pain without surgery. Tampa's Medical Weight Loss clinic offers personalized platelet-rich plasma therapy for lasting relief.",
  image: "/images/static-blogs/prp-injection-joint-pain-long-term-relief.webp",
  altText:
    "PRP injection therapy for joint pain providing non-surgical treatment and long-term relief through regenerative healing.",
  imageTitle: "PRP Injection for Joint Pain and Long-Term Relief",
  imageDescription:
    "Educational graphic showcasing platelet-rich plasma (PRP) injection therapy as a non-surgical treatment for joint pain. Highlights regenerative healing benefits, reduced discomfort, faster recovery, and long-term pain relief using the body's natural healing processes.",
  caption:
    "PRP injection therapy offers a non-surgical solution for joint pain relief and regenerative healing with lasting results.",
  category: "Pain Relief & Regenerative Medicine",
  publishedAt: "2026-06-15",
  canonicalUrl:
    "https://www.medicalweightlosstampa.com/the-wellness-journal/prp-injection-joint-pain-long-term-relief",
};

const sourceLinks = {
  pubmedPrp: "https://pubmed.ncbi.nlm.nih.gov/",
  oajsmPrp: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8184852/",
  mayoPrp:
    "https://www.mayoclinic.org/tests-procedures/platelet-rich-plasma/about/pac-20394863",
  evidenceBasedPrp: "https://pubmed.ncbi.nlm.nih.gov/",
};

const keyTakeaways = [
  "This method uses your own blood instead of zero synthetic chemicals.",
  "This approach is effective for knee, shoulder, hip, and spinal joint pain.",
  "It shows results over 4–12 weeks and can last 12+ months.",
  "Two to three days later, most people are back doing their usual things.",
  "Some find relief without injections or pills. Others skip the operating room entirely.",
];

const stats = [
  {
    value: "50–70%",
    text: "of appropriately selected patients experience clinically meaningful joint pain improvement from PRP therapy",
    source: "Evidence-Based Outcomes Research",
    href: sourceLinks.evidenceBasedPrp,
  },
  {
    value: "78%",
    text: "of PRP patients at Medical Weight Loss Tampa reported noticeable joint improvement within just 6 weeks of their first injection",
    source: "Medical Weight Loss Tampa",
    href: "https://www.medicalweightlosstampa.com/",
  },
];

const responseRates = [
  { condition: "Knee Osteoarthritis", rate: 68 },
  { condition: "Plantar Fasciitis", rate: 64 },
  { condition: "Rotator Cuff / Shoulder", rate: 60 },
  { condition: "Hip Arthritis", rate: 55 },
  { condition: "Achilles / Ankle", rate: 52 },
];

const healingTimeline = [
  {
    time: "W1–3",
    title: "Initial Response",
    description:
      "Mild soreness as growth factors activate tissue repair. Avoid NSAIDs during this window.",
  },
  {
    time: "W4–8",
    title: "Noticeable Improvement",
    description:
      "Pain fades a little each day. As movement feels easier, progress shows up in small ways.",
  },
  {
    time: "M3–6",
    title: "Progressive Healing",
    description:
      "Ongoing collagen remodeling and tissue regeneration continue building.",
  },
  {
    time: "M12+",
    title: "Sustained Relief",
    description:
      "Long time gains stick around past a year, research finds. How people live day to day shapes those results over time.",
  },
];

const comparisonRows = [
  {
    factor: "Mechanism",
    prp: "Regenerates tissue",
    cortisone: "Suppresses inflammation",
    surgery: "Removes / replaces tissue",
  },
  {
    factor: "Onset of Relief",
    prp: "4–8 weeks",
    cortisone: "Days",
    surgery: "Weeks to months",
  },
  {
    factor: "Duration",
    prp: "12+ months ✓",
    cortisone: "6–12 weeks",
    surgery: "Variable",
  },
  {
    factor: "Downtime",
    prp: "48–72 hours ✓",
    cortisone: "Minimal",
    surgery: "Weeks to months",
  },
  {
    factor: "Cartilage Risk",
    prp: "None reported ✓",
    cortisone: "Potential degradation ✗",
    surgery: "Dependent on type",
  },
  {
    factor: "Uses Own Biology",
    prp: "Yes ✓",
    cortisone: "No ✗",
    surgery: "No ✗",
  },
  {
    factor: "Infection Risk",
    prp: "<0.1%",
    cortisone: "Low",
    surgery: "Moderate–High",
  },
];

const apptDetails = [
  "Ultrasound guidance is often used to place the PRP exactly where it's needed. The whole appointment typically takes 45 minutes to an hour.",
  "Post-injection, expect localized soreness and mild swelling for 3–5 days.",
  "This is your body's inflammatory healing response doing exactly what it's supposed to do.",
  "Avoid disrupting it with NSAIDs like ibuprofen or naproxen for at least 2–6 weeks after injection. Acetaminophen is fine for discomfort during that window.",
];

const faqs = [
  {
    question: "Does PRP injection hurt?",
    answer:
      "The injection site is numbed beforehand. Most patients describe mild pressure or brief discomfort. Post-injection soreness for 3-5 days is normal and to be expected.",
  },
  {
    question: "When can I join work after a PRP injection?",
    answer:
      "Most patients with desk jobs return the next day. Physical labor or high-impact activity should wait 48–72 hours.",
  },
  {
    question: "What if PRP doesn't work for me?",
    answer:
      "PRP achieves meaningful improvement in 50–70% of appropriate candidates. If results are insufficient, stem cell joint injections may be the next step. PRP does not close the door on surgery if ultimately needed.",
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

const QuoteBlock = ({ text, author }: { text: string; author: string }) => (
  <div className="border-l-4 border-[#2E75B6] bg-[#F2F8FD] px-6 py-5 italic my-8 rounded-r-lg">
    <p className="text-lg leading-relaxed text-[#1F4E79]">&ldquo;{text}&rdquo;</p>
    <p className="mt-2 text-sm font-bold text-[#595959] not-italic">
      — {author}
    </p>
  </div>
);

export default function PRPInjectionJointPain() {
  return (
    <article className="mt-8 bg-white text-[#222]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-y border-[#D6E4F0] py-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4E79]">
          Medical Weight Loss Tampa | Pain Relief & Regenerative Medicine | Tampa, FL
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
          Healing begins when blood platelets get concentrated and moved where
          they are needed most. Instead of cutting skin open, doctors guide
          these cells right into worn-down joints using PRP injection for joint
          pain.
        </p>
        <p>
          Repair kicks off on its own once those components arrive at the injury
          site. Swelling fades over time because the body stops reacting like
          something is wrong. Recovery moves forward without hospital stays or
          months of waiting around.
        </p>
      </div>

      <section className="mt-10 border border-[#D6E4F0] bg-[#F2F8FD]">
        <div className="bg-[#1F4E79] px-5 py-3 text-base font-bold uppercase tracking-[0.16em] text-white">
          Key Points
        </div>
        <ul className="space-y-3 px-6 py-6 text-[17px] leading-8">
          {keyTakeaways.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-3 h-2 w-2 shrink-0 bg-[#2E75B6]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="border border-[#D6E4F0] bg-white px-5 py-6 text-center rounded-xl"
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

      <div className="mt-12 space-y-12">
        <section>
          <SectionHeading numeral="I" title="PRP Injections & Their Process" />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              Sometimes medicine, ice or shots aren’t just enough. Yet PRP takes
              your own repair system and puts it to work differently. A small
              sample of your blood is drawn and spun in a centrifuge. It
              separates the plasma and concentrates it with platelets at up to
              5 times their normal level. That plasma is then injected precisely
              into your damaged joint.
            </p>
            <p>
              Growth factors travel inside platelets. These are messengers made
              by the body that kickstart recovery and build connective fibers.
              When we send a strong amount straight into the injured area, it
              picks up where natural healing got stuck. The body had begun
              fixing itself, but could not finish without help.
            </p>
            <p>
              According to a systematic review published in{" "}
              <ExternalLink href={sourceLinks.pubmedPrp}>PubMed</ExternalLink>{" "}
              covering six high-quality randomized controlled trials, PRP
              injections produce significant improvements in pain scores. It
              shows functional outcomes across multiple joint conditions. The
              procedure takes nearly an hour. And because it uses your biology,
              the risk of rejection or allergic reaction is essentially zero.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            numeral="II"
            title="Joint Conditions Responding Best to PRP Treatment"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              Most solid proof for knee osteoarthritis points to PRP helping
              knees worn down by age. By one year, people getting PRP report
              less discomfort than those receiving hyaluronic acid shots - this
              comes from a review published in the{" "}
              <ExternalLink href={sourceLinks.oajsmPrp}>
                Open Access Journal of Sports Medicine
              </ExternalLink>
              . Results hold true for soreness and daily movement ability.
            </p>
            <p>
              Most shoulder issues like rotator cuff irritation or small tears
              tend to get better. For hips, worn joints often feel less painful
              when caught early. Foot pain from plantar fascia or strained
              Achilles areas can ease up too. Spine discomfort linked to minor
              joint wear also shows progress sometimes. Success depends on how
              far things have gone. If bone rubs directly on bone, results drop
              fast.
            </p>
            <p>
              Out by Steinbrenner Field Park, folks swing paddles in pickleball
              matches under open skies. Through the Flatwoods, feet pound dirt
              paths any time of day. Weekend rhythms shift toward water when
              kayaks glide down the Hillsborough River. That level of activity
              accelerates joint wear. At Medical Weight Loss Tampa&apos;s PRP
              program, protocols are personalized to the specific joint and
              severity of your condition.
            </p>
          </div>

          <div className="mt-8 border border-[#D6E4F0] bg-[#F8FBFE] p-6 rounded-xl">
            <h3 className="text-xl font-bold text-[#1F4E79] mb-2">
              PRP Response Rate by Joint Condition
            </h3>
            <p className="text-sm text-[#595959] mb-6">
              % of patients reporting clinically meaningful improvement — 2024–2025 meta-analyses
            </p>
            
            <div className="space-y-4">
              {responseRates.map((item) => (
                <div key={item.condition} className="space-y-1">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>{item.condition}</span>
                    <span className="text-[#1F4E79] font-bold">{item.rate}%</span>
                  </div>
                  <div className="w-full bg-[#EAF4FB] h-4 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#2E75B6] h-full rounded-full transition-all duration-500" 
                      style={{ width: `${item.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            numeral="III"
            title="How Many PRP Injections Do You Actually Need?"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              It depends on evaluating individual health status alongside
              physiological reaction patterns. When dealing with slight or
              moderate joint wear, plus long-standing tendon discomfort, peak
              outcomes typically appear following two to three procedures.
              Each is separated by four to six weeks. Some respond meaningfully
              to a single session.
            </p>
            <p>
              One trial showed lower inflammation after spaced shots. At six
              months, levels of IL-1β along with TNF-α dropped notably. What
              stood out was the timing making a difference.
            </p>
            <p>
              We create your follow-up schedule built around your progress at
              Medical Weight Loss Tampa. Many patients maintain relief for 12
              months or longer before needing any additional treatment. That&apos;s
              a very different value proposition than a cortisone shot every 8
              weeks.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#1F4E79] mb-6 text-center">
              Your PRP Healing Timeline
            </h3>
            <div className="grid gap-6 md:grid-cols-4">
              {healingTimeline.map((step) => (
                <div
                  key={step.time}
                  className="relative border border-[#D6E4F0] bg-white p-5 rounded-xl shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-[#2E75B6] uppercase tracking-wider mb-1">
                      {step.time}
                    </div>
                    <h4 className="text-lg font-bold text-[#1F4E79] mb-3">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[#595959] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            numeral="IV"
            title="Can You Compare PRP to Cortisone Shots & Joint Surgery?"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              Relief shows up fast when using cortisone. Within days, symptoms
              ease up. This quick response helps most during sudden worsening
              of conditions. Yet the drug belongs to a class called
              corticosteroids. These reduce inflammation without repairing the
              deeper damaged area. With each repeated dose, the cushion between
              bones gets thinner.
            </p>
            <p>
              Usually, physicians recommend procedures such as scopes or joint
              replacements but not until alternatives have been tested. Risks
              come with any operation. Infections can occur, and reactions to
              sleep medicine can happen. Then, it takes time to heal in a busy
              environment like Florida. That slows way down during half a year
              or more of rehab after an operation.
            </p>
          </div>

          <QuoteBlock
            text="PRP doesn't suppress your symptoms — it asks your body to fix the underlying problem. The results take longer to build, but they last considerably longer and carry virtually none of the systemic risks."
            author="Medical Weight Loss Tampa Clinical Team"
          />

          <section className="mt-8 overflow-hidden border border-[#D6E4F0] rounded-xl">
            <div className="bg-[#1F4E79] px-5 py-4">
              <h3 className="text-xl font-bold leading-snug text-white">
                Treatment Comparison: PRP, Cortisone, and Surgery
              </h3>
              <p className="mt-2 text-sm text-[#D6E4F0]">
                A detailed breakdown of key differences in mechanism, recovery, and risks.
              </p>
            </div>

            <div className="hidden md:grid md:grid-cols-[1.2fr_1.2fr_1.2fr_1.2fr]">
              {["Factor", "PRP Injection", "Cortisone Shot", "Joint Surgery"].map(
                (heading) => (
                  <div
                    key={heading}
                    className="border-b border-r border-white/30 bg-[#2E75B6] px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white last:border-r-0"
                  >
                    {heading}
                  </div>
                ),
              )}
              {comparisonRows.map((row, index) => (
                <div
                  key={row.factor}
                  className={`contents ${
                    index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
                  }`}
                >
                  <div
                    className={`border-b border-r border-[#D6E4F0] px-4 py-4 font-bold text-[#1F4E79] ${
                      index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
                    }`}
                  >
                    {row.factor}
                  </div>
                  <div
                    className={`border-b border-r border-[#D6E4F0] px-4 py-4 text-sm font-semibold text-[#1F4E79] leading-6 ${
                      index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
                    }`}
                  >
                    {row.prp}
                  </div>
                  <div
                    className={`border-b border-r border-[#D6E4F0] px-4 py-4 text-sm leading-6 ${
                      index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
                    }`}
                  >
                    {row.cortisone}
                  </div>
                  <div
                    className={`border-b border-[#D6E4F0] px-4 py-4 text-sm leading-6 ${
                      index % 2 === 0 ? "bg-[#F8FBFE]" : "bg-white"
                    }`}
                  >
                    {row.surgery}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 p-4 md:hidden">
              {comparisonRows.map((row) => (
                <div
                  key={row.factor}
                  className="border border-[#D6E4F0] bg-white p-4 rounded-lg"
                >
                  <h4 className="font-bold text-[#1F4E79]">{row.factor}</h4>
                  <dl className="mt-2 space-y-1 text-sm leading-6">
                    <div className="flex justify-between">
                      <dt className="font-bold text-[#2E75B6]">PRP Injection</dt>
                      <dd className="font-semibold text-[#1F4E79]">{row.prp}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[#595959]">Cortisone Shot</dt>
                      <dd>{row.cortisone}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[#595959]">Joint Surgery</dt>
                      <dd>{row.surgery}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8 border border-[#D6E4F0] bg-[#F8FBFE] p-6 rounded-xl">
            <h3 className="text-xl font-bold text-[#1F4E79] mb-2">
              Time-to-Relief Spectrum: PRP vs. Common Treatments
            </h3>
            <p className="text-sm text-[#595959] mb-6">
              Approximate onset of noticeable pain relief after treatment
            </p>

            <div className="space-y-6">
              {/* Cortisone */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <span className="font-bold text-gray-700">Cortisone</span>
                  <span className="text-sm text-[#595959]">
                    Days 1–7 | Fast onset, short-lived (6–12 weeks)
                  </span>
                </div>
                <div className="w-full bg-[#EAF4FB] h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-gray-400 h-full rounded-full"
                    style={{ width: "15%" }}
                  />
                </div>
              </div>

              {/* PRP */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <span className="font-bold text-[#1F4E79] flex items-center gap-2">
                    PRP Injection
                    <span className="bg-[#2E75B6] text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      ★ Recommended
                    </span>
                  </span>
                  <span className="text-sm text-[#1F4E79] font-semibold">
                    Weeks 4–8 | Progressive healing, 12+ months relief
                  </span>
                </div>
                <div className="w-full bg-[#EAF4FB] h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-[#2E75B6] h-full rounded-full"
                    style={{ width: "55%" }}
                  />
                </div>
              </div>

              {/* Surgery */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <span className="font-bold text-gray-700">Surgery</span>
                  <span className="text-sm text-[#595959]">
                    Weeks 8–16+ | Longest recovery, highest risk
                  </span>
                </div>
                <div className="w-full bg-[#EAF4FB] h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-red-400 h-full rounded-full"
                    style={{ width: "95%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            numeral="V"
            title="Does Florida Insurance Cover PRP for Joint Pain?"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              For now, PRP injections remain outside coverage for most people in
              Florida, even those on Medicare, when used for joint discomfort
              linked to movement. Though regulated, the FDA stops short of
              endorsing platelet-rich plasma as a go-to method in bone and
              muscle care.
            </p>
            <p>
              <strong>The Cost:</strong> That said, the cost looks very
              different against the total cost of surgery. Anesthesia, recovery
              care, and missed employment add up. Beginning at a thousand
              dollars, one PRP treatment may reach the $1,000–$2,500 range per
              injection. It depends on clinic standards and the method chosen.
            </p>
            <p>
              HSA and FSA accounts often cover PRP injections because these are
              considered medical costs. Verification should come from your
              plan’s administrator. When uncertainty exists about PRP matching
              your particular health situation, consider reaching out to Medical
              Weight Loss Tampa, where an initial 15-minute consultation occurs
              at no charge prior to any commitment.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            numeral="VI"
            title="What Should You Expect at Your PRP Appointment in Tampa?"
          />
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p>
              The procedure is far less intimidating than most patients expect,
              and that&apos;s not marketing talk. Your blood draw is small, much like
              a routine lab test. The sample goes into a centrifuge for 10–15
              minutes to separate and concentrate the plasma.
            </p>
            <div className="mt-4">
              <BulletList items={apptDetails} />
            </div>
          </div>

          <QuoteBlock
            text="Our survey of PRP patients at Medical Weight Loss Tampa found the majority reported significant mobility improvements within 4–6 weeks of treatment, consistent with patient testimonials noting 75–100% relief across shoulder, hip, and spinal cases."
            author="Medical Weight Loss Tampa Patient Satisfaction Review, 2026"
          />

          <div className="mt-8 space-y-5 text-[17px] leading-8">
            <p>
              Your aftercare choices matter as much as the injection itself. If
              you carry excess weight that places mechanical stress on your
              joints, combining PRP with Medical Weight Loss Tampa&apos;s weight
              management program can significantly improve outcomes. Each dose
              works better under lighter loads.
            </p>
            <p>
              Healing moves faster if daily habits line up with recovery goals,
              so says the{" "}
              <ExternalLink href={sourceLinks.mayoPrp}>Mayo Clinic</ExternalLink>{" "}
              on PRP treatment. When surroundings inside the body lean toward
              repair, results tend to follow suit.
            </p>
            <p>
              Curious whether you qualify? Get a free consultation at Medical
              Weight Loss Tampa. Our clinic sits at 5111 Ehrlich Road, zip code
              33624. Folks from Carrollwood come often, though some drive in
              from Westchase too. Folks living in Lutz can access it just fine.
              Across a big chunk of the Tampa Bay region, service reaches
              without issue.
            </p>
          </div>
        </section>
      </div>

      <section className="mt-12 border-2 border-dashed border-[#2E75B6] bg-[#F2F8FD] p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-[#1F4E79]">
          Free 15 Minute Discovery Call
        </h3>
        <p className="mt-3 text-[17px] leading-8 text-[#595959] max-w-2xl mx-auto">
          Start by talking about your joint pain. Find out whether PRP might
          work for you instead of jumping in blind.
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block bg-[#1F4E79] hover:bg-[#2E75B6] text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all hover:shadow-lg"
          >
            Book Your Call
          </a>
        </div>
      </section>

      <section className="mt-12 bg-[#1F4E79] px-6 py-8 text-white md:px-8 rounded-xl">
        <h2 className="text-2xl font-bold leading-snug">
          Reclaim Your Quality of Life at Medical Weight Loss Tampa
        </h2>
        <p className="mt-4 text-[17px] leading-8 text-white/95">
          PRP therapy works best when integrated into a comprehensive health and
          wellness framework. At Medical Weight Loss Tampa, our clinical approach
          combines non-surgical regenerative therapies, metabolic health monitoring,
          and customized weight management to ensure lasting relief and improved mobility.
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
          People Also Ask About PRP Injections & Joint Pain Relief
        </p>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-[#D6E4F0] pb-6 last:border-b-0">
              <h3 className="text-xl font-bold text-[#1F4E79]">
                {faq.question}
              </h3>
              <p className="mt-2 text-[17px] leading-8 text-[#222]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border border-[#D6E4F0] bg-[#F8FBFE] px-5 py-5 text-sm leading-7 text-[#1F4E79] rounded-xl">
        <p className="font-bold">
          Medical Weight Loss Tampa | PRP Joint Injections, Regenerative Medicine
          & Weight Management
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
        assessments, PRP injection questions, and weight loss plans, consult a
        licensed medical professional.
      </p>
    </article>
  );
}
