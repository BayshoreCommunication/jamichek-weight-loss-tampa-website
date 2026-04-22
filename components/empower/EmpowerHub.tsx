"use client";

import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";

const treatments = [
  {
    href: "/images/product-image/tone.jpeg",
    image: "/images/product-image/more8.jpeg",
    name: "Morpheus8",
    subtitle: "RF Microneedling",
    description:
      "Combines microneedling with radiofrequency to promote collagen and elastin growth — leaving skin tighter, firmer, and more youthful. Targets fine lines, acne scars, cellulite, and stretch marks.",
    badge: "Skin Tightening",
    color: "bg-rose-50 border-rose-100",
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    link: "/empower/vtone",
    image: "/images/product-image/vtone.jpeg",
    name: "VTone",
    subtitle: "Pelvic Floor Rehabilitation",
    description:
      "A small, anatomically shaped applicator that delivers intravaginal EMS to rehabilitate weak pelvic floor muscles. Treats stress, urge, and mixed urinary incontinence under doctor supervision.",
    badge: "Women's Wellness",
    color: "bg-purple-50 border-purple-100",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    link: "/empower/evolve-tone",
    image: "/images/product-image/tone.png",
    name: "Evolve Tone",
    subtitle: "Body Toning & Muscle Strengthening",
    description:
      "A non-invasive solution to increase muscle strength and enhance body shape. No incisions, no scarring, no downtime. Treat multiple body areas simultaneously for a more defined physique.",
    badge: "Body Sculpting",
    color: "bg-blue-50 border-blue-100",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    link: "/empower/evolvex",
    image: "/images/empower/evolve.jpeg",
    name: "EvolveX",
    subtitle: "Bipolar RF + EMS Combined",
    description:
      "Combines bipolar radiofrequency (RF) and electrical muscle stimulation (EMS) within one system. Each modality can be used independently or combined, allowing fully tailored care plans.",
    badge: "Multi-Modality",
    color: "bg-amber-50 border-amber-100",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    link: "/empower/evolvex",
    image: "/images/empower/empower.jpeg",
    name: "Empower RF",
    subtitle: "Bipolar RF + EMS Combined",
    description:
      "Empower RF is a non-surgical treatment that uses controlled radiofrequency energy to warm targeted tissue and encourage a stronger collagen response. This results in tighter, smoother skin and improved body contours. It can be used on the face and body to address sagging skin, wrinkles, and cellulite.",
    badge: "Multi-Modality",
    color: "bg-amber-50 border-amber-100",
    badgeColor: "bg-amber-100 text-amber-700",
  },
];

const EmpowerHub = () => {
  return (
    <>
      {/* Founders Launch Banner */}
      <section className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-[1640px] mx-auto text-center">
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-400 text-sm font-semibold px-5 py-2 rounded-full mb-4">
              <Clock size={14} />
              Limited Time — Through June 2026
            </div>
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight">
              Founders Launch
            </h2>
            <p className="mt-4 text-xl lg:text-2xl font-bold text-amber-400">
              Complimentary Consult + Up To $600 Off
            </p>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Introducing our Empower aesthetic services — advanced InMode
              treatments now available at our Tampa clinic. Be among the first
              and save during our exclusive Founders Launch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:8132697546"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full hover:border-white transition"
              >
                Call 813.269.7546
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1640px] mx-auto">
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Empower Treatments
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                InMode&apos;s industry-leading technology, delivered by our
                expert medical team. Each treatment is customized to your goals.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((t, i) => (
              <Reveal key={i} tag="div" y={20} opacityFrom={0}>
                <Link
                  href="/contact"
                  className={`group block rounded-3xl border p-8 h-full hover:shadow-lg transition-all ${t.color}`}
                >
                  <div className="relative rounded-2xl aspect-video overflow-hidden mb-6 bg-white flex items-center justify-center">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${t.badgeColor}`}
                  >
                    {t.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-3">
                    {t.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mt-1">
                    {t.subtitle}
                  </p>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {t.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More & Book <ArrowRight size={16} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Empower Section */}
      <section className="bg-[#f6fff0] py-16 px-8">
        <div className="max-w-[1640px] mx-auto">
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose Empower at Our Clinic?
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🏥",
                title: "Medical Supervision",
                desc: "All treatments are performed under the supervision of Dr. Emily Devol Webster, Tampa's Top Doc in Cosmetic Surgery 4 years running.",
              },
              {
                icon: "🎯",
                title: "Personalized Plans",
                desc: "Your care plan is built around your body and your goals. Modalities can be combined or used independently to maximize results.",
              },
              {
                icon: "✨",
                title: "No Downtime",
                desc: "InMode treatments are non-invasive or minimally invasive — real results with little to no recovery time.",
              },
            ].map((item, i) => (
              <Reveal key={i} tag="div" y={20} opacityFrom={0}>
                <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EmpowerHub;
