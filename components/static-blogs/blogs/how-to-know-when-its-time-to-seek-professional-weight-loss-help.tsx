import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export const howToKnowWhenItsTimeToSeekProfessionalWeightLossHelpMeta = {
  title: "How to Know When It's Time to Seek Professional Weight Loss Help",
  metaTitle: "When to Seek Medical Weight Loss Help in Tampa",
  slug: "how-to-know-when-its-time-to-seek-professional-weight-loss-help",
  description:
    "When metabolism slows down, diets fail. Learn about 5 medical signs that you should be evaluated for doctor assisted weight loss in Tampa.",
  image:
    "/images/static-blogs/how-to-know-when-its-time-to-seek-professional-weight-loss-help.webp",
  altText:
    "Female doctor showing weight loss progress on a digital tablet to a patient during a consultation at Medical Weight Loss Tampa.",
  imageTitle: "How to Know When It's Time to Seek Professional Weight Loss Help",
  imageDescription:
    "Learn how to know when it is time to seek professional weight loss help with Medical Weight Loss Tampa. Understand how plateaued progress, health concerns, emotional impacts, and expert guidance can help you achieve sustainable results.",
  caption:
    "Discover the key signs that indicate it is time to seek professional guidance for your weight loss journey.",
  category: "Medical Weight Loss",
  publishedAt: "2026-10-14",
  canonicalUrl:
    "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-know-when-its-time-to-seek-professional-weight-loss-help",
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

const keyPoints = [
  "A slowing metabolism is not a character flaw, it is a documented physiological response",
  "BMI above 30, or above 27 with a related condition, is the standard clinical threshold for medical evaluation",
  "Two or more serious attempts at self-directed weight loss without lasting results is a reasonable trigger to ask for help",
  "Tampa's own health data gives Floridians more reason to act early than most of the country",
];

const fiveSigns = [
  {
    number: "1",
    title: "You have tried, in earnest, more than twice.",
    description: (
      <>
        <ExternalLink href="https://news.gallup.com/poll/150986/Lose-Weight-Americans-Rely-Dieting-Exercise.aspx">
          Gallup polling
        </ExternalLink>{" "}
        shows nearly a third of Americans are trying to lose weight at any given
        moment, and two thirds have made a serious attempt at some point in their
        life. Repetition without result is data, not a character flaw.
      </>
    ),
  },
  {
    number: "2",
    title: "Your weight is affecting a diagnosable condition.",
    description:
      "When excess weight causes high blood pressure, prediabetes, sleep apnea, joint pain or any fertility issues, it then crosses the line from lifestyle to medical.",
  },
  {
    number: "3",
    title: "BMI is >30 or >27 if you have a comorbidity.",
    description: (
      <>
        This is the threshold the{" "}
        <ExternalLink href="https://obesitymedicine.org/">
          Obesity Medicine Association
        </ExternalLink>{" "}
        and most physicians use to determine when medical intervention, rather
        than lifestyle coaching alone, becomes appropriate.
      </>
    ),
  },
  {
    number: "4",
    title: "You have lost and regained the same 20 or 30 pounds more than once.",
    description:
      "Weight cycling is its own risk factor, independent of your starting weight, and it is one of the clearest signals that the underlying driver has never actually been addressed.",
  },
  {
    number: "5",
    title: "You are guessing at nutrition and hormone status instead of testing it.",
    description:
      "Thyroid panels, fasting insulin, A1C, and cortisol are inexpensive tests that answer in a week what months of trial and error cannot.",
  },
];

const approachesComparisonTable = [
  {
    approach: "Calorie counting apps",
    timeline: "Weeks to months",
    treats: "Intake tracking, not hormones",
    highlight: false,
  },
  {
    approach: "Generic gym program",
    timeline: "Months",
    treats: "Brawn and cardiac fitness",
    highlight: false,
  },
  {
    approach: "Fad or crash diets",
    timeline: "Days to weeks",
    treats: "Short-term water weight",
    highlight: false,
  },
  {
    approach: "Physician-supervised program",
    timeline: "Months to sustained",
    treats: "Metabolic, hormonal, and behavioral drivers together",
    highlight: true,
  },
];

const faqs = [
  {
    question: "Will I need to take medical weight loss medication for life?",
    answer:
      "Not exactly. Many people have treatments as a method to get them back to a normal metabolism and get them into habits that they can keep up for the rest of their life. Your doctor will make changes or reduce your plan when you have achieved your durable health targets.",
    alignJustify: true,
  },
  {
    question: "Do I have to follow a special or limited diet?",
    answer:
      "Special/Restrictive diets aren’t really necessary. Importance is placed on the practice of a balanced diet that’s proper for you and your lifestyle.",
    alignJustify: false,
  },
  {
    question: "Can stress and bad sleep prevent weight loss?",
    answer:
      "Yes. High cortisol can cause poor sleep and/or chronic stress, which can both interfere with the ability to be insulin sensitive and regulate appetite hormones, regardless of diet.",
    alignJustify: false,
  },
  {
    question: "Is a medical weight loss evaluation covered by insurance?",
    answer:
      "Some plans will provide the initial consultation and any related labs (typically if a condition is found in the medical record) as well as ongoing treatment and medication, while some plans may not cover it.",
    alignJustify: false,
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
          name: "How to Know When It's Time to Seek Professional Weight Loss Help",
          item:
            "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-know-when-its-time-to-seek-professional-weight-loss-help",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-know-when-its-time-to-seek-professional-weight-loss-help",
      },
      headline:
        "How to Know When It's Time to Seek Professional Weight Loss Help",
      name: "When to Seek Medical Weight Loss Help in Tampa",
      description:
        "Learn how to know when it is time to seek professional weight loss help with Medical Weight Loss Tampa. Understand how plateaued progress, health concerns, emotional impacts, and expert guidance can help you achieve sustainable results.",
      url:
        "https://www.medicalweightlosstampa.com/the-wellness-journal/how-to-know-when-its-time-to-seek-professional-weight-loss-help",
      image:
        "https://www.medicalweightlosstampa.com/images/static-blogs/how-to-know-when-its-time-to-seek-professional-weight-loss-help.webp",
      isPartOf: {
        "@type": "Blog",
        "@id": "https://www.medicalweightlosstampa.com/the-wellness-journal",
      },
      about: {
        "@type": "Thing",
        name: "Professional Medical Weight Loss Evaluation",
        description:
          "Clinical indicators for physician-assisted weight loss, metabolic adaptation research, Florida obesity benchmarks, and diagnostic lab evaluation in Tampa, Florida.",
      },
      keywords: [
        "when to seek medical weight loss help",
        "weight loss clinic Tampa",
        "plateaued weight loss doctor",
        "metabolic testing Tampa",
        "physician assisted weight loss",
        "BMI threshold medical weight loss",
        "Dr. Emily Devol Webster",
        "Medical Weight Loss Tampa evaluation",
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
      datePublished: "2026-10-14",
      dateModified: "2026-10-14",
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

export default function HowToKnowWhenItsTimeToSeekProfessionalWeightLossHelp() {
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
          <Link href="/" className="hover:underline text-[#0E7C7B]">
            medicalweightlosstampa.com
          </Link>{" "}
          | Tampa, FL
        </p>
        <p className="mt-4 text-base font-semibold text-[#1B3A5C]">
          Explained by the Clinical Team at Medical Weight Loss Tampa
        </p>
        <p className="text-sm text-[#5A5A5A]">
          Published: October 14, 2026 | Updated: October 14, 2026
        </p>
      </section>

      {/* Intro paragraph */}
      <div className="mt-8 space-y-6 text-[17px] leading-8">
        <p className="text-left sm:text-justify italic">
          Sometimes it’s frustrating when your proven routine stops giving you
          results. If diet and exercise used to work but suddenly fail to move
          the scale, an internal shift could be holding you back. The only way
          to deal with such a dilemma is to go for a comprehensive blood work
          analysis, hormone level testing and an all-round diagnosis of your
          overall health to determine where exactly the problem might be. Once
          you have that, it becomes possible to take the necessary corrective
          measures.
        </p>
      </div>

      {/* Key points Section */}
      <section className="mt-10 border border-[#CBD5DC] bg-[#F2F8FD] rounded-xl overflow-hidden shadow-sm">
        <h2 className="bg-[#1B3A5C] px-5 py-3 text-base font-bold uppercase tracking-[0.16em] text-white">
          Key points
        </h2>
        <ul className="space-y-4 px-4 sm:px-6 py-6 text-[17px] leading-8">
          {keyPoints.map((point, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0E7C7B]" />
              <span className="text-left sm:text-justify">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Narrative Lead Paragraph */}
      <div className="mt-8 space-y-6 text-[17px] leading-8">
        <p className="text-left sm:text-justify">
          Everybody lies. Not maliciously. Not even on purpose, most of the
          time. A patient sits down and says &ldquo;I eat pretty healthy&rdquo;
          and means it, the same way a patient with a fever says &ldquo;I feel
          fine&rdquo; right before collapsing in the waiting room. The story
          people tell about their own weight loss struggle is almost never the
          whole story and it’s rarely the story their bloodwork tells.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="mt-12 space-y-12">
        {/* Section 1 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            What Actually Counts as &ldquo;Struggling&rdquo; With Weight Loss
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Struggling doesn&apos;t mean you ate a cookie on a Tuesday. It
              means a pattern. If you have been working out and eating healthy
              for six months with little to no progress, you most likely have an
              underlying health issue that prevents you from losing weight.
            </p>
            <p className="text-left sm:text-justify">
              If you have tried, genuinely tried more than once and the result
              keeps landing in the same place, the problem was never your effort.
              Insulin resistance, thyroid dysfunction, PCOS, sleep apnea, certain
              antidepressants, menopause, and simple aging all shift the
              chemistry of hunger and fat storage in ways a gym membership
              can&apos;t touch.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            The Body Has a Memory, and It Is Not on Your Side
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              A{" "}
              <ExternalLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9034110">
                National Institutes of Health follow-up study
              </ExternalLink>{" "}
              tracking contestants from a well known televised weight loss
              competition found their resting metabolic rate was still running
              roughly 500 calories a day slower than expected six years after the
              show ended, even in people who had regained most of the weight.
              The body does not forget a period of restriction. It adapts to it
              and then it defends that adaptation for years.
            </p>
            <p className="text-left sm:text-justify">
              Separate obesity treatment literature puts the failure rate at 95%
              for people trying to stay weight-reduced past four years using diet
              and exercise alone. Read that again. That number has everything to
              do with leptin, ghrelin and a resting metabolism that has been
              quietly reset without anyone&apos;s permission.
            </p>

            {/* Infographic Chart 1 */}
            <figure className="my-8 overflow-hidden rounded-2xl border border-[#CBD5DC] bg-white p-4 sm:p-6 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-50">
                <Image
                  fill
                  src="/images/static-blogs/why-the-same-diet-keeps-failing-the-same-way-chart.webp"
                  alt="Bar chart showing why the same diet keeps failing: 95% failure rate beyond 4 years for diet and exercise alone, 100% resting metabolic rate suppression 6 years post-diet, and 66% adults reporting a past weight loss attempt."
                  className="object-contain object-center"
                  sizes="(min-width: 1024px) 800px, 100vw"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs sm:text-sm text-[#5A5A5A] italic">
                Figure 1: Research data highlights how long-term metabolic
                adaptation and hormonal resistance undermine unsupervised calorie
                restriction over time.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Section 3 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            Florida Makes This Personal, Not Just Statistical
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Tampa is not immune to any of this, and the data says the opposite
              of immune. Florida is now the 8th most obese state in the nation,
              with 29.6% of the state&apos;s adults being obese (BMI 30 or higher)
              in{" "}
              <ExternalLink href="https://www.americashealthrankings.org/explore/measures/Obesity/FL">
                America&apos;s Health Rankings
              </ExternalLink>
              . Take a step back to the national level and the{" "}
              <ExternalLink href="https://www.cdc.gov/obesity/data-and-statistics/adult-obesity-prevalence-maps.html">
                CDC&apos;s own surveillance data
              </ExternalLink>{" "}
              shows that 40.3% of all U.S. adults are obese, placing over 100
              million Americans at a clinical cut-off point today, reading this.
            </p>

            {/* Florida Adult Health Stats Box - Table 0 */}
            <div className="mt-6 border border-[#1B3A5C] bg-[#EAF2F8] p-5 sm:p-7 rounded-2xl shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1B3A5C] text-center sm:text-left">
                FLORIDA ADULT HEALTH &amp; ECONOMIC IMPACT
              </p>
              <div className="mt-5 grid gap-5 sm:grid-cols-3">
                <div className="border-l-4 border-[#D9622B] bg-white p-4 rounded-r-xl shadow-sm">
                  <div className="text-xs font-bold uppercase text-[#5A5A5A]">
                    Metric 1
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#D9622B] mt-1">
                    29.6%
                  </div>
                  <p className="mt-2 text-sm text-[#202020] font-medium leading-snug">
                    Florida adults with a BMI of 30 or higher, 8th highest in the
                    US
                  </p>
                </div>

                <div className="border-l-4 border-[#1B3A5C] bg-white p-4 rounded-r-xl shadow-sm">
                  <div className="text-xs font-bold uppercase text-[#5A5A5A]">
                    Metric 2
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C] mt-1">
                    $33.2B
                  </div>
                  <p className="mt-2 text-sm text-[#202020] font-medium leading-snug">
                    Annual hit to Florida&apos;s economy from obesity-linked lost
                    productivity
                  </p>
                </div>

                <div className="border-l-4 border-[#0E7C7B] bg-white p-4 rounded-r-xl shadow-sm">
                  <div className="text-xs font-bold uppercase text-[#5A5A5A]">
                    Metric 3
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0E7C7B] mt-1">
                    95%
                  </div>
                  <p className="mt-2 text-sm text-[#202020] font-medium leading-snug">
                    Failure rate for unsupervised weight loss lasting past 4
                    years
                  </p>
                </div>
              </div>
            </div>

            <p className="text-left sm:text-justify">
              The economic side stings just as much locally. A{" "}
              <ExternalLink href="https://www.globaldata.com/health-economics/US/Florida/Obesity-Impact-on-Florida-Factsheet-2026.pdf">
                2026 obesity impact analysis from GlobalData
              </ExternalLink>{" "}
              put the annual cost to Florida&apos;s economy at 33.2 billion
              dollars in lost productivity and workforce impact, with
              obesity-related premature mortality claiming an estimated 48,800
              lives a year statewide. Households here are also absorbing roughly
              2 billion dollars a year in out-of-pocket obesity-related medical
              spending.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            5 Signs the DIY Approach Has Run Its Course
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Before the list, a quick gut check. If any of the five signs
              below describe you, a visit to explore{" "}
              <InternalLink href="/medical-weight-loss">
                medical weight loss options in Tampa
              </InternalLink>{" "}
              is worth more than another month of guessing.
            </p>

            <div className="mt-6 space-y-4">
              {fiveSigns.map((sign) => (
                <div
                  key={sign.number}
                  className="flex gap-4 p-4 sm:p-5 rounded-xl border border-[#CBD5DC] bg-[#F8FAFC] shadow-sm hover:border-[#1B3A5C]/40 transition-colors"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B3A5C] font-bold text-white text-sm">
                    {sign.number}
                  </span>
                  <div className="text-left sm:text-justify">
                    <strong className="text-[#1B3A5C]">{sign.title}</strong>{" "}
                    {sign.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            How to Know You Are Getting A Real Evaluation
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              A legitimate medical weight loss consult starts with lab work,
              because you can&apos;t treat what you haven&apos;t measured. Before
              anything like a treatment plan is suggesting, there will be a
              thyroid-stimulating hormone test, a full metabolic panel, blood
              glucose and possibly a resting metabolic rate test. There are a
              variety of other options, from nutritional counseling and
              behavior-based coaching to hormone replacement therapy for
              menopause weight gain, to GLP-1 and dual-agonist medications, like
              semaglutide and tirzepatide, prescribed under a physician&apos;s
              supervision.
            </p>

            {/* Doctor Webster Quote Box - Table 1 */}
            <div className="mt-8 border-l-[8px] border-[#D96C4B] bg-[#FBEDE7] px-5 sm:px-7 py-6 rounded-r-2xl shadow-sm">
              <blockquote className="text-[17px] sm:text-[18px] leading-8 text-[#20262E] italic font-medium">
                &ldquo;Patients come in convinced they&apos;ve failed at every
                diet they&apos;ve tried, when the truth is the diet failed them
                first. Once we run real labs and look at what&apos;s actually
                driving the weight gain, whether that&apos;s insulin resistance,
                a hormone shift, or years of metabolic adaptation from past
                dieting, the plan stops being guesswork and starts being
                medicine.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-[#1B3A5C] font-bold tracking-wide">
                &mdash; Dr. Emily Devol Webster, Medical Director, Medical
                Weight Loss Tampa
              </p>
            </div>

            <p className="text-left sm:text-justify">
              A program built around{" "}
              <InternalLink href="/our-services">
                personalized nutritional counseling
              </InternalLink>{" "}
              paired with medical supervision treats the actual mechanism. A
              program built around calorie counting alone treats the symptom and
              hopes the mechanism cooperates.
            </p>

            {/* CTA Banner 1 - Table 2 */}
            <div className="mt-8 bg-[#1B3A5C] px-6 sm:px-8 py-8 text-center text-white rounded-2xl shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Get Actual Answers
              </h3>
              <p className="mt-3 text-base sm:text-[17px] leading-8 text-[#D9E4EC] max-w-2xl mx-auto">
                A $47 evaluation includes a full consultation, health
                assessment, and personalized treatment plan.
              </p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-block bg-[#D9622B] text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:bg-[#c25320] shadow-md hover:shadow-lg no-underline text-base"
                >
                  Claim Your $47 New Patient Evaluation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            Reading the BMI Chart Honestly
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            {/* Infographic Chart 2 */}
            <figure className="my-8 overflow-hidden rounded-2xl border border-[#CBD5DC] bg-white p-4 sm:p-6 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-50">
                <Image
                  fill
                  src="/images/static-blogs/the-bmi-range-where-a-consult-stops-being-optional-chart.webp"
                  alt="BMI chart showing clinical ranges: Underweight, Healthy Range (18.5-24.9), Overweight Talk to a Doctor (25-29.9), Obesity Seek Medical Evaluation (30-39.9), and Severe Obesity Medical Care Advised (40-50)."
                  className="object-contain object-center"
                  sizes="(min-width: 1024px) 800px, 100vw"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs sm:text-sm text-[#5A5A5A] italic">
                Figure 2: The clinical BMI spectrum defining where lifestyle
                coaching transitions into medically indicated evaluation.
              </figcaption>
            </figure>

            <p className="text-left sm:text-justify">
              Look at where the gold band ends and the orange one begins. That
              line at 30 is the point where the National Institutes of Health and
              most obesity medicine specialists agree that only lifestyle advice
              stops being a sufficient response. Below 25, keep doing what you are
              doing. Between 25 and 30, a conversation with a doctor is
              reasonable. Above 30, or above 27 with a related condition, a
              conversation with a doctor is closer to necessary.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            A Table Worth More Than a Thousand Motivational Quotes
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            {/* Approaches Comparison Table - Table 3 */}
            <div className="mt-6 overflow-x-auto border border-[#CBD5DC] rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-[#1B3A5C] text-white text-sm sm:text-base font-bold">
                    <th className="p-3.5 sm:p-4 border-r border-white/20 w-1/3">
                      Approach
                    </th>
                    <th className="p-3.5 sm:p-4 border-r border-white/20 w-1/3">
                      Typical Timeline
                    </th>
                    <th className="p-3.5 sm:p-4 w-1/3">
                      What It Actually Treats
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {approachesComparisonTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        row.highlight
                          ? "bg-[#E3F3F1] hover:bg-[#D5EFEA] transition-colors font-medium"
                          : idx % 2 === 0
                          ? "bg-white hover:bg-[#F4F6F8] transition-colors"
                          : "bg-[#F4F6F8] hover:bg-[#E9ECEF] transition-colors"
                      }
                    >
                      <td
                        className={`p-3 sm:p-4 border-t border-[#CBD5DC] border-r border-[#CBD5DC] text-sm sm:text-base ${
                          row.highlight
                            ? "font-bold text-[#0E7C7B]"
                            : "font-semibold text-[#202020]"
                        }`}
                      >
                        {row.approach}
                      </td>
                      <td
                        className={`p-3 sm:p-4 border-t border-[#CBD5DC] border-r border-[#CBD5DC] text-sm sm:text-base ${
                          row.highlight
                            ? "text-[#1B3A5C] font-semibold"
                            : "text-[#5A5A5A]"
                        }`}
                      >
                        {row.timeline}
                      </td>
                      <td
                        className={`p-3 sm:p-4 border-t border-[#CBD5DC] text-sm sm:text-base ${
                          row.highlight
                            ? "text-[#1B3A5C] font-semibold"
                            : "text-[#202020]"
                        }`}
                      >
                        {row.treats}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-left">
              Notice which row is the only one built to survive contact with a
              slowed metabolism. The others were never designed to fight biology.
              They were designed to fight boredom, and biology does not get
              bored.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            What Makes Tampa&apos;s Situation Worth Watching Closely
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              Climate has a less prominent part in this than one might think.
              After nine months of heat index alerts, the nation&apos;s residents
              are forced to choose between early morning hours or gym memberships
              to get outside and exercise, whereas warmer states aren&apos;t
              having to make the decision.
            </p>
            <p className="text-left sm:text-justify">
              Throw in convenient drive-through options, long Bay commute times
              and a culture of convenience, and the deck is stacked before
              anyone even opens up the menu. None of that is a moral failing
              either. It’s geography and infrastructure working against biology,
              which is exactly the kind of problem medicine, not motivation, is
              built to solve.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px]">
            The Actual Answer to &ldquo;Am I Ready&rdquo;
          </h2>
          <div className="mt-4 space-y-5 text-[17px] leading-8">
            <p className="text-left sm:text-justify">
              You are ready the moment you can honestly say 2 things. First, that
              you have made a genuine effort more than once. Second, it fell
              apart because the results just stopped lining up with the work you
              were putting in. That mismatch between your effort and the outcome?
              It’s the clearest sign in medicine that something deeper may be
              going on, and it&apos;s worth getting another opinion.
            </p>
            <p className="text-left sm:text-justify">
              During a consultation, there’s no pressure to get on any drugs,
              have surgery or anything dramatic. It offers real data, not
              speculation, lab numbers, not strangers&apos; Instagram feeds. And
              a plan that’s specific to your unique chemistry, not a stranger&apos;s.
              That’s a low bar to clear for a decision this consequential.
              Booking a consultation through{" "}
              <InternalLink href="/">
                Medical Weight Loss Tampa&apos;s new patient scheduling
              </InternalLink>{" "}
              takes less time than the average grocery run, and it starts with
              the $47 evaluation rather than a guessing game.
            </p>

            {/* CTA Banner 2 - Table 4 */}
            <div className="mt-8 bg-[#1B3A5C] px-6 sm:px-8 py-8 text-center text-white rounded-2xl shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ready to Trade hunch for a Plan?
              </h3>
              <p className="mt-3 text-base sm:text-[17px] leading-8 text-[#D9E4EC] max-w-2xl mx-auto">
                Personalized and physician-guided weight loss designed around
                your labs.
              </p>
              <div className="mt-6">
                <ExternalLink
                  href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                  className="inline-block bg-[#D9622B] text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:bg-[#c25320] shadow-md hover:shadow-lg no-underline text-base"
                >
                  Schedule Your Consultation &rarr;
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section className="border-t-2 border-[#1B3A5C] pt-6">
          <h2 className="text-2xl font-bold leading-snug text-[#1B3A5C] md:text-[28px] mb-6">
            FAQ
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
                <p
                  className={`mt-2 text-[17px] leading-8 text-[#202020] ${
                    faq.alignJustify
                      ? "text-left sm:text-justify"
                      : "text-left"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="mt-10 border-l-4 border-gray-400 bg-gray-50 p-4 rounded-r-lg">
          <p className="text-sm text-gray-600 leading-6 italic text-left">
            Disclaimer: This article is for informational and educational
            purposes only. It shouldn’t be a substitute for medical advice.
            Always consult with a qualified healthcare practitioner before
            making any medical treatment decisions.
          </p>
        </section>
      </div>
    </article>
  );
}
