"use client";

import Image from "next/image";

export default function MedicalWeightLoss() {
    const services = [
        {
            title: "Sema",
            desc: "Treatment for joint, bone,  and muscle injuries to restore mobility and strength.",
            img: "/images/medical/img1.png",
        },
        {
            title: "Tirzep",
            desc: "Customized recovery plans to help athletes return to peak performance safely.",
            img: "/images/medical/img2.png",
        },
        {
            title: "Retatrutide",
            desc: "Guided therapy programs for faster, safer recovery after surgery.",
            img: "/images/medical/img3.png",
        },
        {
            title: "Nutritional Counseling",
            desc: "Care for patients with stroke, spinal cord, or nerve-related conditions.",
            img: "/images/medical/img4.png",
        },
        {
            title: "Personalized Support",
            desc: "Hands-on techniques to relieve chronic pain, stiffness, and tension.",
            img: "/images/medical/img5.png",
        },
        {
            title: "Chiropractic Care",
            desc: "Specialized care for children’s development needs and elderly mobility support.",
            img: "/images/medical/img6.png",
        },
    ];

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1640px] md:my-16 my-8 px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Medical Weight Loss
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Transform Your Body with Medical Weight Loss Tampa
                        </p>
                    </div>
                    <button className="mt-4 md:mt-0 border border-black rounded-full px-6 py-2 font-medium flex items-center gap-2 hover:bg-black hover:text-white transition ">
                        Explore More Services
                        <span>→</span>
                    </button>
                </div>

                {/* Services Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100 cursor-pointer"
                        >
                            <div className="w-full h-auto relative mb-4 rounded-xl overflow-hidden">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={1000}
                                    height={800}
                                    className="object-cover object-top rounded-xl group-hover:scale-110 transition-transform duration-300 w-full h-auto"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2 w-[300px] group-hover:text-gray-700 transition-colors duration-300">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
