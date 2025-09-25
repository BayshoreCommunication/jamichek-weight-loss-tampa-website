"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TransformationSection() {
  const slides = [
    {
      before: "/images/transformation/before.png",
      after: "/images/transformation/after.png",
      profile:"/images/transformation/profile.png",
      name: "Jerome Bell",
      role: "Teacher",
      stats: {
        weight: { before: "210 lbs", after: "165 lbs" },
        waist: { before: '50"', after: '42"' },
        bmi: { before: "31.2 (Obese)", after: "24.5 (Normal)" },
        duration: { before: "12 Jun, 2025", after: "4 Months" },
      },
    },
    {
        before: "/images/transformation/before.png",
        after: "/images/transformation/after.png",
        profile:"/images/transformation/profile.png",
        name: "Jerome Bell",
        role: "Teacher",
        stats: {
          weight: { before: "210 lbs", after: "165 lbs" },
          waist: { before: '50"', after: '42"' },
          bmi: { before: "31.2 (Obese)", after: "24.5 (Normal)" },
          duration: { before: "12 Jun, 2025", after: "4 Months" },
        },
      },
  ];

  return (
    <div className="w-full flex justify-center bg-gray-50">
      <div className="w-full max-w-[1640px] md:my-16 my-8 px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Swiper Card (70%) */}
          <div className="w-full lg:w-[70%]">
            {/* Card Wrapper */}
            <div className="bg-white rounded-2xl shadow-xl p-6 relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: ".prev-btn",
                  nextEl: ".next-btn",
                }}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination",
                }}
                loop={true}
                className="relative"
              >
                {slides.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Before/After */}
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <span className="text-primary font-semibold mb-2">
                            Before
                          </span>
                          <div className="w-[150px] h-[200px] relative rounded-lg overflow-hidden">
                            <Image
                              src={slide.before}
                              alt="Before"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-primary font-semibold mb-2">
                            After
                          </span>
                          <div className="w-[150px] h-[200px] relative rounded-lg overflow-hidden">
                            <Image
                              src={slide.after}
                              alt="After"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* User Info & Stats */}
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 relative rounded-full overflow-hidden">
                            <Image
                              src={slide.profile}
                              alt={slide.name}
                              fill
                              className="object-cover w-full h-auto"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {slide.name}
                            </h3>
                            <p className="text-sm text-gray-500">{slide.role}</p>
                          </div>
                        </div>

                        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden table-fixed">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="text-left px-3 py-2 w-1/3">Title</th>
                              <th className="text-left px-3 py-2 w-1/3">Before</th>
                              <th className="text-left px-3 py-2 w-1/3">After</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-3 py-2">Weight</td>
                              <td className="px-3 py-2 text-gray-700">
                                {slide.stats.weight.before}
                              </td>
                              <td className="px-3 py-2 text-primary font-medium">
                                {slide.stats.weight.after}
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="px-3 py-2">Waist</td>
                              <td className="px-3 py-2">{slide.stats.waist.before}</td>
                              <td className="px-3 py-2 text-primary font-medium">
                                {slide.stats.waist.after}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">BMI</td>
                              <td className="px-3 py-2">{slide.stats.bmi.before}</td>
                              <td className="px-3 py-2 text-primary font-medium">
                                {slide.stats.bmi.after}
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="px-3 py-2">Duration</td>
                              <td className="px-3 py-2">{slide.stats.duration.before}</td>
                              <td className="px-3 py-2 text-primary font-medium">
                                {slide.stats.duration.after}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Navigation */}
                <div className="prev-btn absolute top-1/2 left-0 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black text-white rounded-full cursor-pointer z-20">
                  ‹
                </div>
                <div className="next-btn absolute top-1/2 right-0 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black text-white rounded-full cursor-pointer z-20">
                  ›
                </div>

                {/* Pagination */}
                <div className="custom-pagination flex justify-center gap-2 mt-6 relative z-20"></div>
              </Swiper>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[30%]">
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">
              See The Real{" "}
              <span className="text-primary">Transformations</span> <br /> and
              Lasting Results
            </h2>
            <p className="text-gray-600 mt-4">
              Our expert doctor will tailor a treatment program to address your
              unique needs, ensuring you achieve peak wellness.
            </p>
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition hover:border hover:border-black hover:bg-white hover:text-black">
              Schedule Today!
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Styling */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #000 !important;
          opacity: 0.5;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #16a34a !important; /* Tailwind primary */
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
