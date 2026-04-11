"use client";

import Reveal from "@/components/motion/Reveal";
import {
  evolveTreatments,
  featuredEmpowerTreatments,
} from "@/lib/empowerTreatments";
import Image from "next/image";
import Link from "next/link";

function TreatmentCard({
  title,
  image,
  imageAlt,
  slug,
  summary,
}: {
  title: string;
  image: string;
  imageAlt: string;
  slug: string;
  summary: string;
}) {
  return (
    <Link
      href={`/empower/${slug}`}
      className="group bg-primary/10 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-6 flex flex-col md:flex-row items-center h-full gap-4 border border-gray-100 cursor-pointer"
    >
      <div className="w-full md:w-[240px] h-[240px] relative rounded-xl overflow-hidden flex-shrink-0 bg-white">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col flex-1 text-start">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 group-hover:text-gray-700 transition-colors duration-300 line-clamp-3 flex-1">
          {summary}
        </p>

        <span className="mt-4 inline-flex text-sm font-semibold text-primary">
          View Details
        </span>
      </div>
    </Link>
  );
}

export default function Empower() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1640px] md:my-16 my-8 px-8">
        <div className="grid gap-6 sm:grid-cols-2 items-stretch">
          {featuredEmpowerTreatments.map((service) => (
            <Reveal key={service.slug}>
              <TreatmentCard
                title={service.title}
                image={service.image}
                imageAlt={service.imageAlt}
                slug={service.slug}
                summary={service.summary}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-[32px] bg-[#f8fbf8] p-6 md:p-8 shadow-sm ring-1 ring-black/5">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Evolve Treatments
              </p>
              <h2 className="mt-3 text-2xl md:text-4xl font-bold text-gray-900 leading-relaxed">
                Explore the three Evolve treatment options.
              </h2>
              <p className="mt-3 text-sm md:text-base leading-7 text-gray-600">
                Each option targets a different goal, from tightening to muscle
                tone to more complete body contouring. Click any card to view
                the full details page.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
            {evolveTreatments.map((service) => (
              <Reveal key={service.slug}>
                <TreatmentCard
                  title={service.title}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  slug={service.slug}
                  summary={service.summary}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
