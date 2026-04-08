"use client";

import Reveal from "@/components/motion/Reveal";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { sendForm } from "emailjs-com";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const quickPoints = [
  "Clinician-guided peptide and wellness therapies",
  "Plans shaped around your goals, symptoms, and progress",
  "Support for recovery, energy, and metabolic wellness",
];

const benefits = [
  "Support recovery after workouts or everyday physical strain",
  "Help protect lean muscle while working toward body-composition goals",
  "Promote steadier energy, focus, and overall vitality",
  "Fit into a broader wellness plan with medical oversight",
];

const focusAreas = [
  {
    icon: Activity,
    title: "Recovery Support",
    desc: "Peptide-based therapies may help your body recover more efficiently, support tissue repair, and help you stay resilient.",
  },
  {
    icon: Sparkles,
    title: "Energy And Vitality",
    desc: "Select therapies can be used to support cellular energy, sharper focus, and a more consistent sense of well-being.",
  },
  {
    icon: BadgeCheck,
    title: "Tailored Protocols",
    desc: "We do not force a one-size-fits-all injection plan. Your care is adjusted to your goals, response, and health history.",
  },
];

export default function PeptideConsultation() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const nameInput = form.elements.namedItem(
      "name",
    ) as HTMLInputElement | null;
    const emailInput = form.elements.namedItem(
      "email",
    ) as HTMLInputElement | null;
    const phoneInput = form.elements.namedItem(
      "phone",
    ) as HTMLInputElement | null;
    const subjectInput = form.elements.namedItem(
      "subject",
    ) as HTMLSelectElement | null;
    const messageInput = form.elements.namedItem(
      "message",
    ) as HTMLTextAreaElement | null;

    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const phone = phoneInput?.value.trim() || "";
    const subject = subjectInput?.value.trim() || "";
    const message = messageInput?.value.trim() || "";

    if (!name) errors.name = "Name is required.";
    if (!email) errors.email = "Email is required.";
    else if (!emailRegex.test(email)) errors.email = "Enter a valid email.";
    if (!phone) errors.phone = "Phone number is required.";
    if (!subject) errors.subject = "Select a goal.";
    if (!message) errors.message = "Tell us what you want help with.";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errors = validate(form);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      Swal.fire({
        icon: "error",
        title: "Please review your form",
        text: "A few required fields still need attention.",
      });
      return;
    }

    setLoading(true);

    sendForm(
      "service_cq3xwte",
      "template_6eqbsh9",
      formRef.current!,
      "Fn7XwDMaDOh3pLUkz",
    )
      .then(() => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Request sent",
          text: "Our team will reach out to you soon.",
          customClass: {
            confirmButton: "contact-swal-confirm-button",
          },
          buttonsStyling: false,
        });
        form.reset();
        setFormErrors({});
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "We could not send your request right now. Please try again.",
        });
      });
  };

  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1640px] px-8 pb-8 md:pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] items-start">
          <div className="space-y-6">
            <Reveal className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2f8b73] via-[#4E741E] to-[#1f4d43] p-[1px] shadow-[0_24px_60px_-30px_rgba(31,77,67,0.45)]">
              <div className="relative grid overflow-hidden rounded-[31px] bg-[#f8fbf8] lg:grid-cols-[1.02fr_0.98fr]">
                <div className="absolute -left-24 top-10 h-52 w-52 rounded-full bg-white/25 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative p-6 sm:p-8 md:p-10">
                  <Reveal
                    tag="span"
                    className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
                    y={12}
                    opacityFrom={0}
                  >
                    Peptides
                  </Reveal>

                  <Reveal
                    tag="h2"
                    className="mt-5 max-w-2xl text-3xl font-bold text-gray-900 md:text-4xl"
                    delay={0.05}
                  >
                    Start your wellness journey with peptide support built
                    around you.
                  </Reveal>

                  <Reveal
                    tag="p"
                    className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base"
                    delay={0.1}
                  >
                    Our Tampa team uses carefully selected peptide and cellular
                    wellness therapies to complement recovery, body-composition
                    goals, and long-term energy with medical oversight at every
                    step.
                  </Reveal>

                  <div className="mt-6 space-y-3">
                    {quickPoints.map((point, index) => (
                      <Reveal
                        key={point}
                        className="flex items-start gap-3 text-sm text-gray-700 md:text-base"
                        delay={0.12 + index * 0.05}
                      >
                        <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{point}</span>
                      </Reveal>
                    ))}
                  </div>

                  <Reveal
                    className="mt-8 flex flex-col gap-3 sm:flex-row"
                    delay={0.28}
                  >
                    <Link
                      href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
                    >
                      Book an Appointment
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      href="/vitamins-peptides"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-primary hover:text-primary"
                    >
                      Explore Peptide Services
                    </Link>
                  </Reveal>
                </div>

                <div className="relative flex items-center justify-center px-6 pb-6 sm:px-8 sm:pb-8 lg:px-10 lg:py-10">
                  <div className="relative h-[320px] w-full max-w-[520px]">
                    <Reveal
                      className="absolute left-0 top-10 w-[44%] rotate-[-10deg] rounded-[28px] border border-white/80 bg-white p-3 shadow-2xl sm:w-[38%]"
                      delay={0.08}
                    >
                      <Image
                        src="/images/Vitamins-&-Peptides/new-image/glp-s.png"
                        alt="Peptide therapy vial"
                        width={500}
                        height={500}
                        className="h-auto w-full rounded-[20px] object-cover"
                      />
                    </Reveal>

                    <Reveal
                      className="absolute right-0 top-0 w-[70%] rounded-[32px] border border-white/80 bg-white p-4 shadow-2xl"
                      delay={0.14}
                    >
                      <Image
                        src="/images/Vitamins-&-Peptides/new-image/nad.png"
                        alt="NAD+ wellness support"
                        width={760}
                        height={760}
                        className="h-auto w-full rounded-[26px] object-cover"
                      />
                    </Reveal>

                    <Reveal
                      className="absolute bottom-0 right-4 max-w-[250px] rounded-[24px] border border-primary/10 bg-white/95 p-4 shadow-xl backdrop-blur"
                      delay={0.2}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Provider-led care
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        Your protocol is reviewed and adjusted based on your
                        goals, response, and overall wellness plan.
                      </p>
                    </Reveal>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
              <Reveal className="rounded-[30px] bg-white p-8 shadow-sm ring-1 ring-black/5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  How peptide therapy fits
                </p>
                <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-[2rem] leading-relaxed">
                  A smarter way to support recovery, metabolism, and long-term
                  wellness.
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  Peptide therapy uses short amino-acid chains that act like
                  messengers in the body. When chosen carefully, they can
                  support recovery, lean-muscle preservation, energy production,
                  and overall wellness in a way that complements medically
                  supervised care.
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  At Jamichek, the process starts with your goals, symptoms, and
                  health history. From there, we may recommend peptide support
                  alongside weight-loss treatment, nutrition guidance, hormone
                  care, or other therapies when it makes clinical sense.
                </p>
              </Reveal>

              <Reveal className="rounded-[30px] bg-primary/10 p-8 ring-1 ring-primary/10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Common goals
                </p>
                <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-[2rem] leading-relaxed">
                  What patients usually want from peptide support
                </h3>

                <div className="mt-6 space-y-4">
                  {benefits.map((item, index) => (
                    <Reveal
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-4 text-sm text-gray-700 shadow-sm"
                      delay={0.05 + index * 0.05}
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {focusAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.title}
                    className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    delay={0.05 + index * 0.07}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
                      {item.desc}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal className="lg:sticky lg:top-24">
            <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.4)] sm:p-8">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Quick Consultation Form
              </span>

              <h3 className="mt-5 text-2xl font-bold text-gray-900 md:text-3xl">
                Tell us what you want to improve.
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
                Share your goals and our team can help you understand which
                peptide or wellness options may make sense for your next step.
              </p>

              <div className="mt-6 rounded-[24px] bg-primary/10 p-4">
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    Response-focused planning for weight, recovery, and energy
                    goals.
                  </span>
                </div>
                <div className="mt-3 flex items-start gap-3 text-sm text-gray-700">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    Prefer to book directly? You can also schedule online any
                    time.
                  </span>
                </div>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-[#E8ECE8] bg-[#F8FBF8] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {formErrors.name && (
                    <span className="mt-1 block text-sm text-red-500">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      className="w-full rounded-2xl border border-[#E8ECE8] bg-[#F8FBF8] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    {formErrors.phone && (
                      <span className="mt-1 block text-sm text-red-500">
                        {formErrors.phone}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-2xl border border-[#E8ECE8] bg-[#F8FBF8] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    {formErrors.email && (
                      <span className="mt-1 block text-sm text-red-500">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Main Goal
                  </label>
                  <select
                    name="subject"
                    defaultValue=""
                    className="w-full rounded-2xl border border-[#E8ECE8] bg-[#F8FBF8] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>
                      Select your primary goal
                    </option>
                    <option value="Weight management support">Weight management support</option>
                    <option value="Recovery and performance">Recovery and performance</option>
                    <option value="Energy and vitality">Energy and vitality</option>
                    <option value="General peptide consultation">General peptide consultation</option>
                  </select>
                  {formErrors.subject && (
                    <span className="mt-1 block text-sm text-red-500">{formErrors.subject}</span>
                  )}
                </div> */}

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your goals, current challenges, or questions."
                    className="w-full rounded-2xl border border-[#E8ECE8] bg-[#F8FBF8] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {formErrors.message && (
                    <span className="mt-1 block text-sm text-red-500">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition ${
                    loading
                      ? "cursor-not-allowed bg-primary/60"
                      : "bg-primary hover:bg-green-700"
                  }`}
                >
                  {loading ? "Sending..." : "Request A Consultation"}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>

              <div className="mt-6 border-t border-black/5 pt-5 text-sm text-gray-600">
                Prefer to speak with someone now?{" "}
                <a
                  href="tel:8132697546"
                  className="font-semibold text-primary hover:underline"
                >
                  Call 813.269.7546
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
