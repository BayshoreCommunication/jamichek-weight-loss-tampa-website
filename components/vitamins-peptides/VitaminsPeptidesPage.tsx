import React from "react";
import Reveal from "../motion/Reveal";
import Image from "next/image";
import Link from "next/link";

const MedicalWeightLossData = [
  {
    id: 1,
    image: "/images/Vitamins-&-Peptides/new-image/Nad-1.png",
    title: "NAD+",
    details:
      "Rejuvenate your body at the cellular level with NAD+ (Nicotinamide Adenine Dinucleotide) therapy, a cutting-edge treatment that targets aging and fatigue from within. This powerful coenzyme plays a crucial role in cellular energy production, DNA repair, and optimizing metabolic function. By restoring NAD+ levels, we help boost mental clarity, increase physical energy, support detoxification, and promote overall vitality. Ideal for those seeking enhanced cognitive function, anti-aging benefits, or recovery support, our NAD+ IV therapy is administered under medical supervision for maximum safety and effectiveness. Renew your energy and revitalize your health with this innovative approach to wellness.",
    bookingLink: "/contact",
  },
  {
    id: 2,
    image: "/images/Vitamins-&-Peptides/new-image/Biotin-1.png",
    title: "Biotin",
    details:
      "Biotin, also known as Vitamin B7, is a vital nutrient that supports your body's natural ability to convert food into energy. As part of our tailored wellness therapies, Biotin helps maintain healthy metabolism, promotes strong hair and nail growth, and supports radiant skin from within. Whether received through IV infusion or as part of a personalized supplement plan, this essential vitamin can address deficiencies and enhance your overall vitality. Ideal for those seeking to improve their appearance and energy levels, Biotin therapy offers a simple yet effective way to complement your weight loss journey and boost your confidence.",
    bookingLink: "/contact",
  },
  {
    id: 3,
    image: "/images/Vitamins-&-Peptides/new-image/Vitamin C-1.png",
    title: "Vitamin C",
    details:
      "Vitamin C is a powerful antioxidant essential for immune support, collagen production, and overall vitality. Our Vitamin C therapy—available through IV infusion or as part of a personalized wellness plan—helps combat fatigue, promote skin health, and enhance your body’s natural recovery processes. Whether you're looking to boost immunity, reduce oxidative stress, or simply revitalize your well-being, this essential nutrient provides a safe and effective way to elevate your health from within. Ideal as a standalone treatment or alongside your weight loss program, Vitamin C can help you feel refreshed, radiant, and resilient every day.",
    bookingLink: "/contact",
  },
  {
    id: 4,
    image: "/images/Vitamins-&-Peptides/new-image/Glutathione.png",
    title: "Glutathione",
    details:
      "Glutathione is your body’s master antioxidant, essential for detoxification, immune support, and cellular repair. Our medical-grade glutathione therapy—administered via IV for maximum absorption—helps combat oxidative stress, promote brighter and more even-toned skin, and boost overall energy levels. By enhancing your body’s natural ability to neutralize toxins and free radicals, this powerful treatment supports liver health, improves mental clarity, and slows the visible signs of aging. Whether you're seeking to rejuvenate your appearance, strengthen your immune system, or complement your weight loss journey, glutathione offers a safe and effective path to renewed vitality and long-term wellness.",
    bookingLink: "/contact",
  },
  {
    id: 5,
    image: "/images/Vitamins-&-Peptides/new-image/MICC B-12.png",
    title: "MICC B-12",
    details:
      "Boost your energy and metabolism with MICC B-12, a powerful blend of Methionine, Inositol, Choline, and Vitamin B-12 designed to support your weight loss journey. This targeted injection therapy helps enhance fat metabolism, support liver function, and increase energy levels—making it easier to stay active and focused on your goals. Whether you're looking to jumpstart your progress or break through a plateau, MICC B-12 provides the nutritional support your body needs to burn fat more efficiently and maintain momentum. Administered under medical supervision, this treatment is a safe and effective way to complement a comprehensive wellness plan.",
    bookingLink: "/contact",
  },
  {
    id: 6,
    image: "/images/Vitamins-&-Peptides/new-image/Lipo mino injection-1.png",
    title: "Lipo-Mino with L-Carnitine",
    details:
      "Accelerate your fat-burning potential with Lipo-Mino with L-Carnitine—a targeted injectable formula designed to support efficient weight loss. This powerful combination of amino acids and L-Carnitine helps transport fatty acids into your cells’ mitochondria, where they are converted into energy. By enhancing your body’s natural ability to burn fat for fuel, this treatment can increase energy, improve exercise performance, and promote lean muscle retention. Ideal for breaking through weight loss plateaus or boosting metabolism, Lipo-Mino with L-Carnitine is a safe, effective, and science-backed addition to your medically supervised wellness plan.",
    bookingLink: "/contact",
  },
];

const VitaminsPeptidesPage = () => {
  return (
    <>
      <section className="max-w-[1640px] mx-auto md:pt-16 py-8 px-8  gap-12 ">
        <div>
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="text-center ">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Vitamins-&-Peptides
              </h2>
              <p className="mt-2 text-base text-gray-600 max-w-4xl mx-auto">
                Specialized nutrient and peptide therapies designed to optimize
                cellular function, enhance recovery, and support your body’s
                natural healing processes.
              </p>
            </div>
          </Reveal>
        </div>
        <div>
          <div className="grid grid-cols-1 py-12">
            {MedicalWeightLossData.map((service, index) => (
              <div
                key={service.id}
                className={`shadow-small rounded-3xl p-8 lg:p-10 bg-white flex flex-col md:flex-row gap-8 mb-12 items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1000}
                  height={800}
                  className="max-w-sm w-full h-auto object-cover rounded-xl"
                />
                <div>
                  <h3 className="text-xl lg:text-3xl font-semibold mt-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base mt-2 mb-6 ">
                    {service.details}
                  </p>

                  {/* <Link
                    href="/https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                    target="_blank"
                    className="inline-flex gap-2 items-center px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-primary transition"
                  >
                    Not a Patient Yet? Schedule Today!
                    <div className="bg-white shrink-0  rounded-full w-5 h-5 flex items-center justify-center text-black">
                      <svg
                        className="w-4 h-4 "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VitaminsPeptidesPage;
