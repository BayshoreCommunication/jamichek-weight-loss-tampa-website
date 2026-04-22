"use client";

import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

export default function PainRelief() {
  return (
    <section
      aria-labelledby="pain-relief-heading"
      className="w-full flex justify-center px-8"
    >
      <div className="relative w-full max-w-[1640px] md:my-16 my-8 bg-[url('/images/pain/bg.png')] bg-cover bg-center rounded-3xl">
        <div className="bg-black/50 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full md:w-[50%]">
          <div className="flex-1 text-white">
            <Reveal tag="h2" id="pain-relief-heading" className="text-3xl font-bold leading-snug">
              Get <span className="text-primary">Pain Relief</span> Today With
              Tampa Bays Chiropractor
            </Reveal>
            <Reveal
              tag="p"
              className="mt-4 text-sm md:text-base text-gray-200"
              delay={0.1}
            >
              Take the first step toward a healthier, happier you with our
              personalized, medically guided weight loss programs.
            </Reveal>
            <Reveal tag="div" delay={0.2}>
              <Link
                href="https://www.jachimekchiro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-primary text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-green-600 transition"
              >
                Click Here To Learn More <span aria-hidden="true">-&gt;</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
