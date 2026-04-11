import PainRelief from "@/components/home/PainRelief";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import {
  empowerTreatments,
  getEmpowerTreatment,
} from "@/lib/empowerTreatments";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return empowerTreatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const treatment = getEmpowerTreatment(params.slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found",
    };
  }

  return {
    title: `${treatment.title} | Jamichek Wellness`,
    description: treatment.summary,
  };
}

export default function EmpowerDetailPage({ params }: PageProps) {
  const treatment = getEmpowerTreatment(params.slug);

  if (!treatment) {
    notFound();
  }

  const currentIndex = empowerTreatments.findIndex(
    (item) => item.slug === treatment.slug,
  );
  const nextTreatment =
    currentIndex >= 0
      ? empowerTreatments[(currentIndex + 1) % empowerTreatments.length]
      : null;

  return (
    <>
      <BreadcrumbSection
        title={treatment.title}
        items={[{ label: "Home", href: "/" }, { label: treatment.title }]}
      />

      <section className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[1640px] px-8 pb-8 md:pb-16">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] items-center">
            <div>
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {treatment.badge}
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl leading-relaxed">
                {treatment.title}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
                {treatment.intro}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
                {treatment.summary}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-primary hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back Home
                </Link>

                {nextTreatment && nextTreatment.slug !== treatment.slug ? (
                  <Link
                    href={`/empower/${nextTreatment.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
                  >
                    Explore {nextTreatment.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="rounded-[32px] bg-primary/10 p-4 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.45)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white">
                <Image
                  src={treatment.image}
                  alt={treatment.imageAlt}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.02fr_0.98fr] items-start">
            <div className="rounded-[30px] bg-white p-8 shadow-sm ring-1 ring-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Treatment Overview
              </p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-[2rem] leading-relaxed">
                Learn more about {treatment.title}
              </h3>

              <div className="mt-5 space-y-4">
                {treatment.details.map((detail) => (
                  <p
                    key={detail}
                    className="text-sm leading-7 text-gray-600 md:text-base"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[30px] bg-primary/10 p-8 ring-1 ring-primary/10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Key Benefits
                </p>
                <div className="mt-6 space-y-4">
                  {treatment.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-4 text-sm text-gray-700 shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-black/5 bg-[#f8fbf8] p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Good Fit For
                </p>
                <div className="mt-6 space-y-4">
                  {treatment.idealFor.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PainRelief />
    </>
  );
}
