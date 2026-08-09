import React, { ReactNode } from "react";

export const howTampaPatientsAreClearingMalarMoundsWithoutSurgeryMeta = {
  title:
    "Non-Invasive Festoon Treatment: How Tampa Patients Are Clearing Malar Mounds Without Surgery",
  metaTitle: "Non-Invasive Festoon Treatment Tampa for Flawless Cheeks",
  slug: "how-tampa-patients-are-clearing-malar-mounds-without-surgery",
  description:
    "Fix malar mounds with non-invasive festoon treatment in Tampa using Evolve Tite radiofrequency. See why standard fillers & Botox make them explode.",
  image:
    "/images/static-blogs/non-invasive-festoon-treatment-tampa-malar-mounds.webp",
  altText:
    "Non-invasive festoon treatment graphic showing a woman receiving a cosmetic treatment beneath the eye area in Tampa.",
  imageTitle:
    "Non-Invasive Festoon Treatment: How Tampa Patients Are Clearing Malar Mounds Without Surgery",
  imageDescription:
    "Educational wellness aesthetics graphic highlighting non-invasive festoon treatment for the appearance of malar mounds and under-eye contours. The image shows a woman receiving a targeted cosmetic treatment beneath the eye area, along with Tampa’s skyline and key treatment benefits such as a non-surgical approach, quick recovery, smoother under-eye contours, and long-lasting results.",
  caption:
    "Explore a non-invasive approach to improving the appearance of festoons and malar mounds while supporting smoother, refreshed-looking under-eye contours",
  category: "Regenerative Medicine",
  publishedAt: "2026-08-09",
  canonicalUrl:
    "https://www.medicalweightlosstampa.com/the-wellness-journal/how-tampa-patients-are-clearing-malar-mounds-without-surgery",
};

const keyPoints = [
  "Those malar mounds sit right between your lower eyelid and the cheekbone. They aren’t actually under the eye itself.",
  "Radiofrequency is the main non-surgical procedure that actually has the medical numbers to back it up.",
  "Our lovely Florida humidity and the blazing sun make these festoons worse, not better.",
  "Filler and Botox don’t fix festoons. In some cases, filler makes them worse.",
  "Severity determines the ceiling. Mild cases respond well. Advanced ones need a surgeon.",
];

const stats = [
  {
    value: "47.95",
    text: "Average age in RF facial tightening study",
    source: "Source figures cited below.",
  },
  {
    value: "24",
    text: "Weeks skin firmness kept improving post-RF",
    source: "MDPI Bioengineering study",
  },
  {
    value: "81/89",
    text: "Festoon cases in one study that were acquired, not congenital",
    source: "PubMed retrospective review",
  },
];

const festoonStages = [
  {
    stage: "Stage 1",
    title: "Mild puffiness",
    description:
      "Early laxity and subtle fluid collection along the upper cheek area.",
  },
  {
    stage: "Stage 2",
    title: "Persistent mound, visible all day",
    description:
      "Noticeable volume pooling and skin slackness across the prezygomatic space.",
  },
  {
    stage: "Stage 3",
    title: "Festoon overhangs the cheek, skin folds",
    description:
      "Advanced structural sagging requiring specialist or surgical consultation.",
  },
];

const comparisonTable = [
  {
    option: "Radiofrequency skin tightening",
    downtime: "None",
    bestFor: "Stage 1 to 2 mounds, early laxity",
    provider: "Medical Weight Loss Tampa (Evolve Tite)",
  },
  {
    option: "Filler camouflage",
    downtime: "1 to 2 days",
    bestFor: "Softening the crease, not the mound",
    provider: "Med spas and dermatology offices",
  },
  {
    option: "Surgical excision",
    downtime: "2 to 4 weeks",
    bestFor: "Stage 3, long-standing festoons",
    provider: "Oculoplastic or plastic surgeon",
  },
];

const faqs = [
  {
    question: "Can festoons go away on their own?",
    answer:
      "No. Fluid and lax tissue in that pocket do not resolve without intervention. Mild swelling from allergies or salt intake can fade, but a true festoon stays.",
  },
  {
    question: "Does losing weight change how festoons look?",
    answer:
      "Sometimes. Weight loss can make them a bit worse at first because the fat cells in your face shifts around. But lowering your overall inflammation can help out mild cases over the years to come.",
  },
  {
    question: "How many RF sessions are typically needed?",
    answer:
      "Most plans are 3 to 6 sessions over a few weeks. It takes a couple of months for the results to come together.",
  },
  {
    question: "Is festoon treatment covered by insurance?",
    answer:
      "Rarely. It is classified as cosmetic, so most Tampa patients pay out of pocket or use financing options like CareCredit.",
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
      "font-semibold text-[#1F4E79] underline decoration-[#2E75B6]/40 underline-offset-4 transition-colors hover:text-[#2E75B6]"
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
  <a
    href={href}
    className={
      className ||
      "font-semibold text-[#1F4E79] underline decoration-[#2E75B6]/40 underline-offset-4 transition-colors hover:text-[#2E75B6]"
    }
  >
    {children}
  </a>
);

export default function HowTampaPatientsAreClearingMalarMoundsWithoutSurgery() {
  return (
    <article className="mt-8 bg-white text-[#222]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header section */}
      <section className="border-y border-[#D6E4F0] py-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4E79]">
          Medical Weight Loss Tampa | medicalweightlosstampa.com
        </p>
        <p className="mt-2 text-sm font-semibold text-[#595959]">
          <a
            href="https://www.medicalweightlosstampa.com"
            className="hover:underline text-[#2E75B6]"
          >
            medicalweightlosstampa.com
          </a>{" "}
          | Tampa, FL
        </p>
        <p className="mt-4 text-base font-semibold text-[#2E75B6]">
          Explained by the Clinical Team at Medical Weight Loss Tampa
        </p>
        <p className="text-sm text-[#595959]">
          Published: August 9, 2026 | Updated: August 9, 2026
        </p>
      </section>

      {/* Intro paragraph */}
      <div className="mt-8 space-y-6 text-[17px] leading-8">
        <p className="text-justify italic" style={{ textAlign: "justify" }}>
          Non-invasive festoon treatments use radiofrequency energy and a good
          old-fashioned skin tightening approach to shrink down those puffy
          malar mounds. Now, it’s not going to completely erase a real bad Stage
          3 festoon. But if you are dealing with a mild or moderate case, it
          firms up the tissue without any surgery. You get no stitches and you
          don’t have to spend weeks hiding inside your air-conditioned house.
        </p>
      </div>

      {/* Key Points */}
      <section className="mt-10 border border-[#D6E4F0] bg-[#F2F8FD] rounded-xl overflow-hidden">
        <h2 className="bg-[#1F4E79] px-5 py-3 text-base font-bold uppercase tracking-[0.16em] text-white">
          Key Points
        </h2>
        <ul className="space-y-3 px-6 py-6 text-[17px] leading-8">
          {keyPoints.map((point, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-3 h-2 w-2 shrink-0 bg-[#2E75B6]" />
              <span className="text-justify" style={{ textAlign: "justify" }}>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Stats Grid */}
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="border border-[#D6E4F0] bg-white px-5 py-6 text-center rounded-xl flex flex-col justify-center"
          >
            <div className="text-4xl font-bold leading-none text-[#1F4E79]">
              {stat.value}
            </div>
            <p className="mt-3 text-sm font-semibold uppercase leading-6 text-[#1A526F]">
              {stat.text}
            </p>
            {stat.source && (
              <p className="mt-1 text-xs text-[#595959]">({stat.source})</p>
            )}
          </div>
        ))}
      </section>

      <div className="mt-12 space-y-12">
        {/* Section 1 */}
        <section className="border-t-2 border-[#2E75B6] pt-5">
          <h2 className="text-2xl font-bold leading-snug text-[#1F4E79] md:text-[28px]">
            What Exactly Are Festoons and Malar Mounds?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-justify" style={{ textAlign: "justify" }}>
              A festoon is not a tired eye bag. It is a chronic pocket of fluid
              and lax tissue that pools in the prezygomatic space, the shelf of
              skin sitting right on top of the cheekbone.{" "}
              <ExternalLink href="https://eyewiki.aao.org/Festoons_and_Malar_Mounds">
                EyeWiki, the ophthalmology reference maintained by the American
                Academy of Ophthalmology
              </ExternalLink>
              , classifies festoons as chronic collections of edematous soft
              tissue localized to the infraorbital and malar regions, distinct
              from garden-variety under-eye puffiness.
            </p>
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Malar mounds are the congenital cousins. Same location, same look,
              different origin story. Genetics builds them early. Sun, gravity,
              and fluid retention build festoons later. Either way, the fix has
              to address structure, not just skin surface. That is where creams
              and cold compresses hit a wall fast.
            </p>
            <p className="text-justify" style={{ textAlign: "justify" }}>
              An oculoplastic practice up in Hartford points out that people
              confuse festoons with malar bags most of the time. The pros mix
              words up, too. Well, the right diagnosis matters a whole lot
              because the game plan completely changes depending on what you
              actually have.
            </p>

            {/* CTA Box 1 */}
            <div className="mt-8 bg-[#1B4F8A] px-6 py-8 text-center text-white rounded-xl">
              <h2 className="text-2xl font-bold text-[#F0C040]">
                Not Sure If It&apos;s a Festoon or Just Puffiness?
              </h2>
              <p className="mt-2 text-[17px] leading-8 text-[#EAF4FB]">
                Book a consultation at Medical Weight Loss Tampa and get a real
                answer, not a guess.
              </p>
              <div className="mt-6">
                <ExternalLink
                  href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                  className="inline-block bg-[#F0C040] text-[#1B4F8A] px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-[#1B4F8A] no-underline"
                >
                  &gt;&gt; Claim Your $47 Consultation &lt;&lt;
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="border-t-2 border-[#2E75B6] pt-5">
          <h2 className="text-2xl font-bold leading-snug text-[#1F4E79] md:text-[28px]">
            Why Do Festoons Get Worse in Florida?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Heat swells tissue. Salt air and sun accelerate collagen
              breakdown. Humidity keeps skin damp and slack for months at a
              stretch. Tampa Bay checks every box that makes malar mounds
              progress faster than they would in a drier, cooler climate.
            </p>
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Most of our surveys show that folks all around the Tampa Bay area
              notice real flare-ups after a long weekend out on the boat, beach
              trips, or even just driving home from work with the windows rolled
              down. That salt air and UV damage don’t take a vacation.
            </p>
            <ul className="space-y-3 pl-5 list-disc">
              <li className="text-justify" style={{ textAlign: "justify" }}>
                <strong className="text-[#1F4E79]">
                  Year-round sunshine
                </strong>{" "}
                speeds up the loss of collagen and elastin that holds everything
                together.
              </li>
              <li className="text-justify" style={{ textAlign: "justify" }}>
                <strong className="text-[#1F4E79]">High humidity</strong> makes
                your body hold onto fluid right in that malar fat pad.
              </li>
              <li className="text-justify" style={{ textAlign: "justify" }}>
                <strong className="text-[#1F4E79]">Living near the coast</strong>{" "}
                means a bit more salt in the air and the diet, which makes that
                swelling around the eyes look worse.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="border-t-2 border-[#2E75B6] pt-5">
          <h2 className="text-2xl font-bold leading-snug text-[#1F4E79] md:text-[28px]">
            What Non-Surgical Options Can Shrink Your Malar Mounds?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Radiofrequency is sitting at the very top of the list for a good
              reason. A 2024 study published in{" "}
              <ExternalLink href="https://www.mdpi.com/journal/bioengineering">
                MDPI&apos;s Bioengineering journal
              </ExternalLink>{" "}
              tracked twenty women through monopolar RF treatment and found skin
              firmness in the cheek increased at four weeks and kept improving
              through 24 weeks. That is measured tissue change.
            </p>
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Microneedle RF, specifically, has periorbital data behind it. A
              study in{" "}
              <ExternalLink href="https://pmc.ncbi.nlm.nih.gov/">
                PMC
              </ExternalLink>{" "}
              following patients for six months documented significant
              improvement in the festooned infraorbital eye-bag that held through
              the entire follow-up window. Filler and light chemical peels help
              some patients smooth the crease around a mound, but they camouflage
              more than they correct.
            </p>

            {/* Festoon Severity Box */}
            <div className="mt-8 border border-[#D6E4F0] bg-[#F2F8FD] rounded-xl overflow-hidden">
              <div className="bg-[#1F4E79] px-5 py-3 text-base font-bold uppercase tracking-[0.16em] text-white">
                Festoon Severity and What Responds to RF
              </div>
              <div className="p-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  {festoonStages.map((stageItem) => (
                    <div
                      key={stageItem.stage}
                      className="bg-white border border-[#D6E4F0] p-4 rounded-lg shadow-sm"
                    >
                      <span className="inline-block bg-[#1F4E79] text-white text-xs font-bold px-2.5 py-1 rounded">
                        {stageItem.stage}
                      </span>
                      <h4 className="mt-2 font-bold text-[#1F4E79]">
                        {stageItem.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        {stageItem.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-[#D6E4F0] pt-4 text-[17px] leading-8 text-[#1A526F]">
                  This is the exact category{" "}
                  <InternalLink href="/medical-weight-loss">
                    Medical Weight Loss Tampa
                  </InternalLink>{" "}
                  works in with{" "}
                  <InternalLink href="/empower/evolvex">
                    Evolve Tite
                  </InternalLink>
                  , hands-free radiofrequency that warms targeted tissue to
                  support tighter, smoother-looking skin with zero downtime. It
                  was built for exactly this kind of mild to moderate laxity,
                  the same territory where festoons live before they turn
                  surgical.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="border-t-2 border-[#2E75B6] pt-5">
          <h2 className="text-2xl font-bold leading-snug text-[#1F4E79] md:text-[28px]">
            When Does a Festoon Need Surgery Instead?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Severity is the deciding factor, not preference. A retrospective
              review published on{" "}
              <ExternalLink href="https://pubmed.ncbi.nlm.nih.gov/">
                PubMed
              </ExternalLink>{" "}
              covering 89 surgical festoon cases found that 81 of them were
              acquired festoons, and nearly half of those patients had already
              tried some form of correction first. Non-surgical treatments often
              yield unsatisfactory results once a festoon reaches that
              advanced, overhanging stage.
            </p>
            <p className="text-justify" style={{ textAlign: "justify" }}>
              That is the honest line. RF and microneedling own the
              mild-to-moderate lane. Direct excision and midface lift procedures
              own the severe lane. Anyone promising surgical-grade results from
              a cream or a single laser pass in that advanced stage is selling a
              story, not a treatment.
            </p>
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Most of the festoon cases we see at our Tampa clinic are Stage 1 or
              Stage 2. Patients wait years thinking nothing short of surgery
              will help, when a series of radiofrequency sessions gets them
              looking rested again without a single incision.
            </p>

            {/* Doctor Quote Box */}
            <div className="mt-8 border-l-[8px] border-[#0d7a8a] bg-[#f0f7ff] px-6 py-5 rounded-r-lg">
              <blockquote className="text-[17px] leading-8 text-[#0d7a8a] italic font-medium">
                “Most of the festoon cases we see at our Tampa clinic are Stage
                1 or Stage 2. Patients wait years thinking nothing short of
                surgery will help, when a series of radiofrequency sessions gets
                them looking rested again without a single incision.”
              </blockquote>
              <p className="mt-2 text-sm text-[#595959] font-bold">
                — Dr. Emily Devol Webster, Medical Director, Medical Weight Loss
                Tampa
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="border-t-2 border-[#2E75B6] pt-5">
          <h2 className="text-2xl font-bold leading-snug text-[#1F4E79] md:text-[28px]">
            Will Filler or Botox Fix a Malar Mound?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-justify" style={{ textAlign: "justify" }}>
              The short answer is usually not and sometimes it completely
              backfires on you. This is one of the most common and most expensive
              mistakes people make before they ever get a real diagnosis.
            </p>
            <ol className="space-y-4 pl-5 list-decimal">
              <li className="text-justify" style={{ textAlign: "justify" }}>
                <strong className="text-[#1F4E79]">
                  Hyaluronic acid filler loves water.
                </strong>{" "}
                It actively pulls moisture right toward itself. If a provider
                places filler near a spot where your lymph nodes are already
                struggling to drain fluid, that filler is going to draw even
                more liquid into the exact same space. Instead of hiding the
                festoon, it inflates it. Clinical guidance on malar bag
                treatment options notes that filler-induced malar edema is a
                recognized complication, and the fix is often dissolving the
                filler with hyaluronidase before any other treatment can even
                begin.
              </li>
              <li className="text-justify" style={{ textAlign: "justify" }}>
                <strong className="text-[#1F4E79]">
                  Botox has a narrower, more legitimate use here.
                </strong>{" "}
                Some providers use a small, precise Botox injection as a
                diagnostic test, not a fix. If relaxing a specific muscle
                temporarily reduces the mound, that confirms muscle activity is
                contributing to the problem. It is a smart diagnostic tool. It
                is a weak long-term solution on its own.
              </li>
            </ol>

            {/* Warning Callout */}
            <div className="mt-8 border-l-[8px] border-[#D9534F] bg-[#FDF2F2] px-6 py-5 rounded-r-lg">
              <strong className="text-[#D9534F] text-lg block mb-1">
                ⚠ Warning
              </strong>
              <p className="text-[17px] leading-8 text-[#D9534F]">
                If your last provider only offered filler for your under-eye
                puffiness and it made things look worse a few weeks later, that
                is a strong sign you were dealing with a festoon, not standard
                volume loss.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Side by Side Comparison */}
        <section className="border-t-2 border-[#2E75B6] pt-5">
          <h2 className="text-2xl font-bold leading-snug text-[#1F4E79] md:text-[28px]">
            A Side-by-Side Comparison of Your Options
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Let us look at how the three real paths stack up so you can decide
              where to start your journey.
            </p>

            {/* Comparison Table */}
            <div className="mt-6 overflow-x-auto border border-[#D6E4F0] rounded-xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#1F4E79] text-white text-base font-bold">
                    <th className="p-4 border-r border-white/20">Option</th>
                    <th className="p-4 border-r border-white/20">Downtime</th>
                    <th className="p-4 border-r border-white/20">Best For</th>
                    <th className="p-4">Where Tampa Patients Get It</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr
                      key={row.option}
                      className={
                        index % 2 === 0 ? "bg-[#F2F8FD]" : "bg-white"
                      }
                    >
                      <td className="p-4 border-t border-[#D6E4F0] border-r border-[#D6E4F0] font-semibold text-[#1F4E79]">
                        {row.option}
                      </td>
                      <td className="p-4 border-t border-[#D6E4F0] border-r border-[#D6E4F0] text-gray-700">
                        {row.downtime}
                      </td>
                      <td className="p-4 border-t border-[#D6E4F0] border-r border-[#D6E4F0] text-gray-700">
                        {row.bestFor}
                      </td>
                      <td className="p-4 border-t border-[#D6E4F0] font-semibold text-[#1A526F]">
                        {row.provider}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="border-t-2 border-[#2E75B6] pt-5">
          <h2 className="text-2xl font-bold leading-snug text-[#1F4E79] md:text-[28px]">
            What Is the Cost for This Treatment Around Tampa?
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Pricing for radiofrequency skin tightening down here usually runs
              on a per-session basis. Most folks end up booking a small series
              rather than just a single visit if they want results that last.
              That is just standard practice across the board with any real
              provider, not some trick to get more money out of you. The thing
              that really changes is who is actually operating the machine.
            </p>
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Look for a provider under medical direction, not a spa technician
              working off a weekend certification.{" "}
              <InternalLink href="/medical-weight-loss">
                Medical Weight Loss Tampa
              </InternalLink>{" "}
              runs its{" "}
              <InternalLink href="/empower/evolvex">Evolve Tite</InternalLink>{" "}
              treatments and broader{" "}
              <InternalLink href="/empower">
                Empower body contouring line
              </InternalLink>{" "}
              under physician oversight at its{" "}
              <InternalLink href="/contact">Ehrlich Road location</InternalLink>
              , with medical-grade{" "}
              <InternalLink href="/skincare">skincare</InternalLink> layered in
              afterward to protect results against Florida sun. That
              combination, device plus oversight plus aftercare, is what
              separates a real result from a temporary glow.
            </p>
            <p className="text-justify" style={{ textAlign: "justify" }}>
              If you look at the wider research, like an overview from Orange
              County Plastic Surgery, they point to a 2026 clinical trial showing
              that monopolar radiofrequency hits all the right marks for safety
              and working well over a six-month stretch. This is not some weird
              science experiment anymore. It is proven, repeatable, and
              completely up to date for 2026.
            </p>

            {/* CTA Box 2 */}
            <div className="mt-8 bg-[#1B4F8A] px-6 py-8 text-center text-white rounded-xl">
              <h2 className="text-2xl font-bold text-[#F0C040]">
                Ready to Address Your Malar Mounds the Right Way?
              </h2>
              <p className="mt-2 text-[17px] leading-8 text-[#EAF4FB]">
                Medical Weight Loss Tampa offers physician-guided Evolve Tite
                treatment at our Ehrlich Road clinic. New patients start at only
                $47.
              </p>
              <div className="mt-6">
                <ExternalLink
                  href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                  className="inline-block bg-[#F0C040] text-[#1B4F8A] px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-[#1B4F8A] no-underline"
                >
                  &gt;&gt; Book Your Tampa Consultation Now &lt;&lt;
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Frequently Asked Questions */}
      <section className="mt-12">
        <h2 className="border-t-2 border-[#2E75B6] pt-5 text-2xl font-bold text-[#1F4E79]">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border-b border-[#D6E4F0] pb-6 last:border-b-0"
            >
              <h3 className="text-xl font-bold text-[#1F4E79]">
                {faq.question}
              </h3>
              <p
                className="mt-2 text-[17px] leading-8 text-[#222] text-justify"
                style={{ textAlign: "justify" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer & Location */}
      <div className="mt-8 border-t border-[#CCCCCC] pt-5 text-sm leading-7 text-[#555] space-y-2">
        <p className="text-justify" style={{ textAlign: "justify" }}>
          <strong className="text-gray-800">Disclaimer: </strong>
          This article is provided for general information only and does not
          constitute medical advice. Individual results from any cosmetic
          treatment vary based on skin condition, severity, and overall health.
          Schedule a consultation to determine the right treatment plan for
          your specific case.
        </p>
        <p className="text-xs text-gray-500 font-semibold">
          Medical Weight Loss Tampa | 5111 Ehrlich Rd. Ste 128, Tampa, FL 33624
        </p>
      </div>
    </article>
  );
}
