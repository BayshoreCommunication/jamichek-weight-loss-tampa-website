"use client";

import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function OurTeam() {
  return (
    <section className="max-w-[1640px] mx-auto px-8 md:my-16 my-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <div>
          <Reveal tag="h2" className="text-3xl font-bold text-gray-900">
            Our Team
          </Reveal>
          <Reveal tag="p" className="text-gray-600 mt-2 max-w-2xl" delay={0.1}>
            Our dedicated team of healthcare professionals is committed to
            guiding you every step of the way with personalized care, expertise,
            and support.
          </Reveal>
        </div>
        <Reveal tag="div" delay={0.2}>
          <button className="mt-4 md:mt-0 border border-gray-300 rounded-full px-5 py-2 font-medium flex items-center gap-2 transition hover:bg-black hover:text-white">
            Explore Team Members →
          </button>
        </Reveal>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <Reveal className="h-full">
          <div className="flex flex-col md:flex-row rounded-2xl border border-gray-200 overflow-hidden shadow-sm h-full">
            <Image
              src="/images/team/Image Placeholder.png"
              alt="Dr. Emily Devol Webster"
              width={930}
              height={690}
              className="w-full md:w-1/2 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1 h-full">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Dr. Emily Devol Webster
                </h3>
                <p className="text text-gray-500 mb-3">Medical Director</p>
                <p className="text-sm text-gray-600 mb-4">
                  My team and I provide a safe, whole-body approach to...
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-primary text-base">
                  <Link href="#">
                    <FaFacebookF />
                  </Link>
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                  <Link href="#">
                    <FaYoutube />
                  </Link>
                  <Link href="#">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <Link
                  href="#"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Card 2 */}
        <Reveal delay={0.1} className="h-full">
          <div className="flex flex-col md:flex-row rounded-2xl border border-gray-200 overflow-hidden shadow-sm h-full">
            <Image
              src="/images/team/team4.png"
              alt="Dana"
              width={930}
              height={690}
              className="w-full md:w-1/2 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1 h-full">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Dana</h3>
                <p className="text-sm text-gray-500 mb-3">Executive Director</p>
                <p className="text-sm text-gray-600 mb-4">
                  My team and I provide a safe, whole-body approach to...
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-green-700 text-base">
                  <Link href="#">
                    <FaFacebookF />
                  </Link>
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                  <Link href="#">
                    <FaYoutube />
                  </Link>
                  <Link href="#">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <Link
                  href="#"
                  className="text-green-700 text-sm font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
