"use client";

import { CheckCircle, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";

export interface Testimonial {
  quote: string;
  author: string;
  stars?: number;
}

export interface TreatmentData {
  name: string;
  tagline: string;
  heroSubline: string;
  description: string;
  benefits: string[];
  howItWorks: {
    title: string;
    intro: string;
    points: string[];
    moreEffective: string[];
  };
  whySection: {
    headline: string;
    points: string[];
  };
  testimonials: Testimonial[];
  imagePlaceholders: {
    hero: string;
    treatment: string;
    beforeAfterCount: number;
  };
}

const BOOKING_URL =
  "https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from=";

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-1 justify-center">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const BookNowBtn = ({ label = "Book Your Appointment Now", small = false }) => (
  <Link
    href={BOOKING_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl ${
      small ? "px-6 py-3 text-sm" : "px-10 py-4 text-base"
    }`}
  >
    {label}
  </Link>
);

interface Props {
  treatment: TreatmentData;
}

const TreatmentLandingPage = ({ treatment }: Props) => {
  const mainTestimonial = treatment.testimonials[0];
  const secondTestimonial = treatment.testimonials[1];
  const thirdTestimonial = treatment.testimonials[2];

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-20 px-8">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gray-800 opacity-80 z-0" />
        <div className="absolute inset-0 z-0 flex items-center justify-end opacity-30">
          <div className="w-1/2 h-full bg-gray-600 flex items-center justify-center text-gray-400 text-sm">
            {/* Replace with hero background image: {treatment.imagePlaceholders.hero} */}
          </div>
        </div>

        <div className="relative z-10 max-w-[1640px] mx-auto">
          <div className="max-w-xl">
            <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-2">
              Founders Launch — Limited Time
            </p>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none">
              {treatment.name}
            </h1>
            <div className="mt-4 space-y-1">
              <p className="text-2xl lg:text-3xl font-bold text-amber-400">
                Free Consultation
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-amber-400">
                + Up To $600 Off
              </p>
            </div>
            <p className="mt-4 text-gray-300 text-base leading-relaxed max-w-md">
              {treatment.heroSubline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <BookNowBtn />
              <Link
                href="tel:8132697546"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:border-white transition-all"
              >
                <Phone size={18} />
                813.269.7546
              </Link>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Offer valid through June 2026. Call to confirm availability.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. TAGLINE BAR ── */}
      <section className="bg-primary py-5 px-8 text-white text-center">
        <p className="text-base lg:text-lg font-medium max-w-3xl mx-auto">
          {treatment.tagline}
        </p>
      </section>

      {/* ── 3. FIRST TESTIMONIAL ── */}
      {mainTestimonial && (
        <section className="bg-white py-14 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal tag="div" y={16} opacityFrom={0}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Satisfied Clients
              </h2>
              <Stars count={mainTestimonial.stars ?? 5} />
              <blockquote className="mt-4 text-gray-700 text-lg italic leading-relaxed">
                &ldquo;{mainTestimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold text-gray-900">
                — {mainTestimonial.author}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── 4. BENEFITS WITH IMAGE ── */}
      <section className="bg-[#f6fff0] py-16 px-8">
        <div className="max-w-[1640px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <Reveal tag="div" y={20} opacityFrom={0}>
              <div className="bg-gray-200 rounded-3xl aspect-[4/3] flex items-center justify-center text-gray-400 text-sm">
                {/* Replace with treatment in-session image: {treatment.imagePlaceholders.treatment} */}
                [Add treatment image here]
              </div>
            </Reveal>

            <Reveal tag="div" y={20} opacityFrom={0}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Get Your Best Results —<br />
                <span className="text-primary">From Within</span>
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {treatment.description}
              </p>
              <ul className="mt-6 space-y-3">
                {treatment.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle
                      size={18}
                      className="shrink-0 mt-0.5 text-primary"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <BookNowBtn />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. BEFORE & AFTER ── */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-[1640px] mx-auto">
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                Real Results From Real People
              </h2>
              <p className="mt-2 text-gray-500 text-sm">
                Treatment results may vary.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({
              length: treatment.imagePlaceholders.beforeAfterCount,
            }).map((_, i) => (
              <Reveal key={i} tag="div" y={16} opacityFrom={0}>
                <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center text-gray-400 text-xs text-center p-4">
                  {/* Replace with before/after image {i + 1} */}
                  [Before & After {i + 1}]
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. MID-PAGE CTA ── */}
      <section className="bg-primary py-12 px-8 text-white text-center">
        <Reveal tag="div" y={16} opacityFrom={0}>
          <p className="text-lg font-medium mb-4">
            Ready to see results? Start with a free consultation.
          </p>
          <BookNowBtn label="Book Your Free Consultation Now" />
        </Reveal>
      </section>

      {/* ── 7. HOW IT WORKS ── */}
      <section className="bg-[#f6fff0] py-16 px-8">
        <div className="max-w-[1640px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Reveal tag="div" y={20} opacityFrom={0}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {treatment.howItWorks.title}
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {treatment.howItWorks.intro}
              </p>
              <ul className="mt-6 space-y-3">
                {treatment.howItWorks.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle
                      size={18}
                      className="shrink-0 mt-0.5 text-primary"
                    />
                    {p}
                  </li>
                ))}
              </ul>

              {treatment.howItWorks.moreEffective.length > 0 && (
                <>
                  <h3 className="mt-8 text-xl font-semibold text-gray-900">
                    More Effective Than Alternatives
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {treatment.howItWorks.moreEffective.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle
                          size={16}
                          className="shrink-0 mt-0.5 text-primary"
                        />
                        <span className="text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Reveal>

            {/* Video placeholder */}
            <Reveal tag="div" y={20} opacityFrom={0}>
              <div className="bg-gray-200 rounded-3xl aspect-video flex items-center justify-center text-gray-400 text-sm">
                {/* Replace with patient testimonial video embed */}
                [Add patient testimonial video here]
              </div>
              <p className="mt-3 text-center text-sm text-gray-500">
                Hear from our patients about their experience
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8. CTA + WRITTEN TESTIMONIAL ── */}
      {secondTestimonial && (
        <section className="bg-white py-14 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal tag="div" y={16} opacityFrom={0}>
              <BookNowBtn />
              <div className="mt-8 pt-8 border-t border-gray-100">
                <Stars count={secondTestimonial.stars ?? 5} />
                <blockquote className="mt-4 text-gray-700 italic leading-relaxed">
                  &ldquo;{secondTestimonial.quote}&rdquo;
                </blockquote>
                <p className="mt-3 font-semibold text-gray-900">
                  — {secondTestimonial.author}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── 9. MEET THE PROVIDER ── */}
      <section className="bg-[#f6fff0] py-16 px-8">
        <div className="max-w-[1640px] mx-auto">
          <Reveal tag="div" y={16} opacityFrom={0}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
              Meet Your Wellness Expert
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <Reveal tag="div" y={20} opacityFrom={0}>
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] w-full">
                <Image
                  src="/images/team/Emily.png"
                  alt="Dr. Emily Devol Webster"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
            <Reveal tag="div" y={20} opacityFrom={0}>
              <p className="text-primary font-semibold text-sm tracking-wide uppercase">
                Over 10 Years of Experience
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
                Dr. Emily Devol Webster
              </h3>
              <p className="text-gray-600 text-sm mt-1">Medical Director</p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Dr. Emily Devol Webster has dedicated her career to helping men
                and women achieve their wellness and aesthetic goals through the
                art and science of modern medicine. She is a National Speaker
                and KOL (Key Opinion Leader) for top aesthetic companies, and
                her office has been named a Center of Excellence training
                facility.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Awarded Tampa Top Doc in Cosmetic Surgery 4 years in a row, she
                continues to train internationally with the world&apos;s leading
                providers in body sculpting and aesthetic medicine — bringing
                the latest innovations directly to our Tampa patients.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "National Speaker & KOL",
                  "Center of Excellence",
                  "Tampa Top Doc ×4",
                ].map((badge, i) => (
                  <span
                    key={i}
                    className="text-xs bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 10. WHY THIS TREATMENT ── */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-[1640px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal tag="div" y={20} opacityFrom={0}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {treatment.whySection.headline}
              </h2>
              <ul className="mt-6 space-y-4">
                {treatment.whySection.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle
                      size={18}
                      className="shrink-0 mt-0.5 text-primary"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <BookNowBtn />
              </div>
            </Reveal>
            <Reveal tag="div" y={20} opacityFrom={0}>
              <div className="bg-gray-200 rounded-3xl aspect-[4/3] flex items-center justify-center text-gray-400 text-sm">
                {/* Replace with lifestyle/results image */}
                [Add lifestyle / results image here]
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 11. FINAL TESTIMONIAL ── */}
      {thirdTestimonial && (
        <section className="bg-[#f6fff0] py-14 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal tag="div" y={16} opacityFrom={0}>
              <Stars count={thirdTestimonial.stars ?? 5} />
              <blockquote className="mt-4 text-gray-700 text-lg italic leading-relaxed">
                &ldquo;{thirdTestimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold text-gray-900">
                — {thirdTestimonial.author}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── 12. CLOSING CTA ── */}
      <section className="bg-gray-900 text-white py-16 px-8 text-center">
        <Reveal tag="div" y={16} opacityFrom={0}>
          <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Founders Launch — Limited Time
          </p>
          <h2 className="text-4xl lg:text-5xl font-black uppercase">
            {treatment.name}
          </h2>
          <p className="text-2xl font-bold text-amber-400 mt-3">
            Free Consultation + Up To $600 Off
          </p>
          <p className="text-gray-400 mt-2 text-sm">Valid through June 2026.</p>
          <div className="mt-8">
            <BookNowBtn label="Book Your Appointment Now" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
            <Phone size={16} />
            <a href="tel:8132697546" className="hover:text-white transition">
              813.269.7546
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default TreatmentLandingPage;
