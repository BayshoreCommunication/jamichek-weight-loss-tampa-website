"use client";

import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";

export default function MedicalWeightLoss() {
  const services = [
    {
      title: "Empower RF",
      desc: "It works by delivering controlled heat energy to boost collagen production, making the skin firmer, smoother, and more youthful.",
      img: "/images/empower/empowerr.jpeg",
      href: "/medical-weight-loss",
    },
    {
      title: "Evolve ",
      desc: "It uses a combination of radio frequency energy and electromagnetic stimulation to reshape and improve overall body appearance without surgery.",
      img: "/images/empower/evolvee.jpeg",
      href: "/medical-weight-loss",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1640px] md:my-16 my-8 px-8">
        <div className="grid gap-6 sm:grid-cols-2 items-stretch">
          {services.map((service, idx) => (
            <Reveal key={idx}>
              <Link
                href={""}
                className="group bg-primary/10 rounded-2xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 flex flex-col md:flex-row  items-center h-full gap-4 border border-gray-100 cursor-pointer"
              >
                {/* Image */}
                <div className="w-full md:w-[240px] h-[240px] relative rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 text-start">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 group-hover:text-gray-700 transition-colors duration-300 line-clamp-3 flex-1">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
