import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      {/* hero section  */}
      <section className="max-w-[1640px] mx-auto px-8 py-12 rounded-t-[2rem]  text-center">
        {/* Profile Images */}
        <div className="flex justify-center  mb-6">
          <div className="flex -space-x-4">
            <Image
              src="/images/hero/group1.png" // replace with your image
              alt="Doctor 1"
              width={70}
              height={70}
              className=""
            />
            <Image
              src="/images/hero/group3.png" // replace with your image
              alt="Doctor 1"
              width={70}
              height={70}
              className=" z-10"
            />
            <Image
              src="/images/hero/group2.png" // replace with your image
              alt="Doctor 1"
              width={70}
              height={70}
              className=""
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug md:py-12">
          Lose Weight, <span className="text-primary">Gain Energy</span> and
          Confidence
          <br />
          Guided by Tampa Bay Professionals
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Personalized medically-assisted weight loss solutions designed to help
          you achieve your goals safely and effectively. 
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-block px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            Not a patient yet? Book Now!
          </a>
        </div>
      </section>
    </div>
  );
}
