"use client";

import { CheckCircle, MapPin, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";

const products = [
  {
    name: "DNA Total Repair Serum",
    category: "Correction",
    description:
      "A concentrated correcting serum powered by pure DNA Repair Enzymes. Targets sun damage at the cellular level to visibly reduce fine lines, dark spots, and uneven tone.",
    highlights: ["DNA Repair Enzymes", "Anti-aging", "Brightening"],
    color: "bg-blue-50 border-blue-100",
    badge: "bg-blue-100 text-blue-800",
    image:
      "/images/product-image/neova-dna-total-repair-serums-front_V2_600x.jpg", // Replace with actual image path
  },
  {
    name: "SILC SHEER 2.0 SPF 40",
    category: "Protection",
    description:
      "A photo-finish tinted sunscreen with DNA Repair Enzymes and antioxidants. Broad Spectrum SPF 40, water resistant (80 min). Repairs and protects simultaneously.",
    highlights: [
      "SPF 40 Broad Spectrum",
      "DNA Repair Enzymes",
      "Tinted Finish",
    ],
    color: "bg-orange-50 border-orange-100",
    badge: "bg-orange-100 text-orange-800",
    image:
      "/images/product-image/neova-silc-sheer-2.0-sunscreens-front_V2_600x.jpg",
  },
  {
    name: "Copper Peptide Moisturizer",
    category: "Rejuvenation",
    description:
      "Medical-grade copper peptides stimulate collagen production and accelerate skin repair. Deeply hydrating formula leaves skin firmer and more resilient.",
    highlights: ["Copper Peptides", "Collagen Boost", "Deep Hydration"],
    color: "bg-amber-50 border-amber-100",
    badge: "bg-amber-100 text-amber-800",
    image:
      "/images/product-image/neova-night-therapy-moisturizers-front_V2_600x.jpg",
  },
];

const benefits = [
  "Clinically proven DNA Repair Technology",
  "Patented Copper Peptide formula",
  "Medical-grade, dermatologist-tested",
  "Fights photoaging at the cellular level",
  "Available online or at our clinic",
  "Recommended by our medical team",
];

const NeovaPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f6fff0] py-16 px-8">
        <div className="max-w-[1640px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal tag="div" y={20} opacityFrom={0}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium text-sm px-4 py-2 rounded-full mb-4 leading-normal">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Now Available At Our Clinic
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 !leading-normal">
                We Now Carry <span className="text-primary">NEOVA</span>{" "}
                SmartSkincare
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                <em>Identify, Remove, Repair:</em> NEOVA provides ingenious
                skincare solutions to combat the damage causing photoaging.
                Patented DNA Repair Enzymes and Copper Peptide technology,
                clinically proven to repair, protect, and transform your skin.
              </p>
              <p className="mt-3 text-base text-gray-500 italic">
                Ask us about it!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="https://www.neova.com/?ref=MedicalWeightLossTampa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                >
                  <ShoppingBag size={20} />
                  Shop NEOVA Online
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-semibold rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <MapPin size={18} />
                  Available At Our Clinic
                </Link>
              </div>
            </Reveal>

            <Reveal tag="div" y={20} opacityFrom={0}>
              <div className="relative">
                {/* Box with background image + overlay content */}
                <div className="relative rounded-3xl overflow-hidden aspect-square flex flex-col items-center justify-center p-10">
                  {/* Background image */}
                  <Image
                    src="/images/product-image/banner.png"
                    alt="NEOVA SmartSkincare"
                    fill
                    className="object-cover object-center"
                  />
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content on top */}
                  <div className="relative z-10 text-center">
                    <div className="text-5xl font-black text-white tracking-widest drop-shadow">
                      NEOVA<span className="text-primary">+</span>
                    </div>
                    <div className="text-sm font-semibold tracking-[0.3em] text-white/80 mt-1 uppercase">
                      SmartSkincare
                    </div>
                    <div className="mt-8 space-y-3 text-left">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm flex items-center gap-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-xs font-bold text-orange-700 shrink-0">
                          SPF 40
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 text-sm">
                            SILC SHEER 2.0
                          </div>
                          <div className="text-xs text-gray-500">
                            Protection
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xs font-bold text-blue-700 shrink-0">
                          DNA
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 text-sm">
                            DNA TOTAL REPAIR
                          </div>
                          <div className="text-xs text-gray-500">
                            Correction Serum
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Medical Grade badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
                  Medical Grade
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-primary py-10 px-8">
        <div className="max-w-[1640px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-white text-sm"
              >
                <CheckCircle
                  size={16}
                  className="shrink-0 mt-0.5 text-white/80"
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1640px] mx-auto">
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Featured NEOVA Products
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Each product is formulated with patented DNA Repair Enzymes to
                address the root cause of skin aging — not just the symptoms.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Reveal key={index} tag="div" y={20} opacityFrom={0}>
                <div
                  className={`rounded-3xl border p-8 h-full flex flex-col ${product.color}`}
                >
                  {/* Image placeholder */}
                  <div className="bg-white/70 rounded-2xl aspect-square flex items-center justify-center mb-6 text-gray-400 text-sm">
                    {/* Replace with actual product image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                      width={500}
                      height={500}
                    />
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full self-start mb-3 ${product.badge}`}
                  >
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm flex-1">
                    {product.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/80 text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="text-center mt-12">
              <Link
                href="https://www.neova.com/?ref=MedicalWeightLossTampa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg text-lg"
              >
                <ShoppingBag size={22} />
                Shop All NEOVA Products
              </Link>
              <p className="mt-4 text-gray-500 text-sm">
                Also available in-clinic — ask our team for a personalized
                recommendation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-16 px-8 bg-[#f6fff0]">
        <div className="max-w-[1640px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal tag="div" y={20} opacityFrom={0}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                The Science Behind NEOVA
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                NEOVA&apos;s patented DNA Repair Enzymes work at the cellular
                level to identify and remove DNA damage caused by UV exposure —
                the root cause of photoaging. Combined with Copper Peptides that
                stimulate collagen production, NEOVA delivers results that go
                far beyond surface-level skincare.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Repairs UV-induced DNA damage before it becomes visible aging",
                  "Copper Peptides accelerate natural skin renewal",
                  "Clinically proven in multiple independent studies",
                  "Medical-grade formulas recommended by dermatologists",
                  "Safe for all skin types, including sensitive skin",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle
                      size={18}
                      className="shrink-0 mt-0.5 text-primary"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal tag="div" y={20} opacityFrom={0}>
              <div className="bg-white rounded-3xl p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Available Online & In-Clinic
                </h3>
                <p className="text-gray-600 mb-6">
                  Order from the comfort of home through our dedicated NEOVA
                  portal, or visit us in Tampa to receive a personalized
                  skincare consultation from our medical team.
                </p>
                <div className="space-y-4">
                  <Link
                    href="https://www.neova.com/?ref=MedicalWeightLossTampa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-primary/10 rounded-2xl hover:bg-primary/20 transition group"
                  >
                    <ShoppingBag className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Shop Online
                      </div>
                      <div className="text-sm text-gray-500">
                        Order directly through our NEOVA portal
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition"
                  >
                    <MapPin className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Visit Our Clinic
                      </div>
                      <div className="text-sm text-gray-500">
                        5111 Ehrlich Rd. Ste 128, Tampa, FL
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default NeovaPage;
