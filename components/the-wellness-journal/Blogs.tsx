"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "../motion/Reveal";
import parse from "html-react-parser";

export type BlogFeaturedImage = {
  image?: { url?: string };
};

export type BlogItem = {
  title: string;
  slug: string;
  date?: string | number | Date;
  createdAt?: string | number | Date;
  publishedAt?: string | number | Date;
  image?: string;
  imageTitle?: string;
  imageDescription?: string;
  caption?: string;
  body?: string | React.ReactNode;
  altText?: string;
  featuredImage?: BlogFeaturedImage;
  published?: boolean;
};

export type BlogsProps = {
  blogPost?: { data?: BlogItem[] };
};

// ✅ Fallback static data
const fallbackBlogs: BlogItem[] = [
  {
    title: "Chronic Pain Management and the Role of Interventional Therapies",
    slug: "chronic-pain-management-interventional-therapies",
    date: "2026-07-08",
    image: "/images/static-blogs/chronic-pain-management-interventional-therapies.webp",
    altText:
      "Doctor performing an interventional pain management procedure on a patient receiving minimally invasive treatment for chronic back pain in a modern medical clinic.",
    imageTitle: "Chronic Pain Management and the Role of Interventional Therapies",
    imageDescription:
      "Professional medical graphic illustrating chronic pain management through interventional therapies. The image features a physician performing a minimally invasive pain management procedure for chronic back pain, highlighting advanced treatment options such as targeted injections, image-guided techniques, and personalized care plans. It emphasizes effective pain relief, improved mobility, reduced reliance on medication, and enhanced quality of life for patients experiencing chronic pain.",
    caption:
      "Discover how interventional therapies can help manage chronic pain through targeted, minimally invasive treatments that reduce discomfort, improve mobility, and support long-term pain relief.",
    body: "Medical records are important evidence to prove pain and suffering in a personal injury claim. Learn how documented symptoms, daily journals, and expert evaluations make invisible injuries visible to a jury.",
  },
  {
    title: "Are Anti-Aging Treatments Right for You? Signs Your Body Needs Support",
    slug: "are-anti-aging-treatments-right-for-you",
    date: "2026-06-22",
    image: "/images/static-blogs/anti-aging-treatments-signs-your-body-needs-support.webp",
    altText:
      "Confident middle-aged woman with wellness and longevity icons illustrating anti-aging treatments, hormone balance, and healthy aging support.",
    imageTitle: "Are Anti-Aging Treatments Right for You? Signs to Know",
    imageDescription:
      "Educational wellness graphic exploring anti-aging treatments and the signs your body may benefit from additional support. The image highlights hormone balance, mental clarity, cellular energy, regenerative medicine, healthy weight management, and longevity-focused therapies designed to promote vitality, wellness, and healthy aging.",
    caption:
      "Learn the common signs that may indicate a need for anti-aging support, including low energy, hormonal changes, reduced mental clarity, and overall wellness concerns.",
    body: "Brain fog and exhaustion aren't just \"getting older.\" Spot the silent signs your body is crashing and how Tampa’s top clinic reverses it fast.",
  },
  {
    title: "PRP Injection for Joint Pain and Long-Term Relief",
    slug: "prp-injection-joint-pain-long-term-relief",
    date: "2026-06-15",
    image: "/images/static-blogs/prp-injection-joint-pain-long-term-relief.webp",
    altText:
      "PRP injection therapy for joint pain providing non-surgical treatment and long-term relief through regenerative healing.",
    imageTitle: "PRP Injection for Joint Pain and Long-Term Relief",
    imageDescription:
      "Educational graphic showcasing platelet-rich plasma (PRP) injection therapy as a non-surgical treatment for joint pain. Highlights regenerative healing benefits, reduced discomfort, faster recovery, and long-term pain relief using the body's natural healing processes.",
    caption:
      "PRP injection therapy offers a non-surgical solution for joint pain relief and regenerative healing with lasting results.",
    body: "Discover how PRP injections treat joint pain without surgery. Tampa's Medical Weight Loss clinic offers personalized platelet-rich plasma therapy for lasting relief.",
  },
  {
    title: "Common Myths About Weight Loss Shots and What Patients Should Know",
    slug: "common-myths-about-weight-loss-shots-and-what-patients-should-know",
    date: "2026-05-10",
    // Feature image for the static Common Myths blog card on the blog listing page.
    image: "/images/static-blogs/common-myths-about-weight-loss.webp",
    body: "Learn the truth behind common myths about weight loss injections, from safety to long-term results.",
  },
  {
    title:
      "Muscle Pain Relief for Active Adults: Safe Recovery Strategies That Work",
    slug: "muscle-pain-relief-for-active-adults",
    date: "2026-05-14",
    image:
      "/images/static-blogs/Muscle Pain Relief for Active Adults_ Safe Recovery Strategies That Work.webp",
    altText:
      "Active adults using foam rollers and stretching exercises for muscle pain relief and recovery",
    imageTitle: "Muscle Pain Relief and Recovery Strategies for Adults",
    imageDescription:
      "Active adults performing stretching and foam rolling exercises to support muscle pain relief, improve mobility, and promote safe post-workout recovery as part of a healthy fitness and wellness routine.",
    caption:
      "Adults practicing stretching and recovery exercises for muscle pain relief",
    body: "Explore safe recovery strategies for active adults, including sleep, hydration, protein intake, active recovery, and expert care for chronic muscle tightness.",
  },
  {
    title:
      "Understanding Arthritis Medication: Options for Managing Pain and Inflammation Safely",
    slug: "understanding-arthritis-medication",
    date: "2026-05-23",
    image:
      "/images/static-blogs/arthritis-medication-pain-management-consultation.webp",
    altText:
      "Doctor explaining arthritis medication options to patient experiencing hand pain and inflammation",
    imageTitle: "Arthritis Medication Options for Pain and Inflammation Relief",
    imageDescription:
      "Medical consultation focused on arthritis treatment options, pain management, and reducing joint inflammation through safe medication and personalized care plans.",
    caption:
      "Doctor discussing arthritis medication and treatment options to help manage joint pain and inflammation safely.",
    body: "Learn how arthritis medication works, what is safest for pain and inflammation, and how weight management can support better joint health.",
  },
  {
    title:
      "The Science Behind Regenerative Medicine Therapy: How the Body Repairs Itself",
    slug: "the-science-behind-regenerative-medicine-therapy",
    date: "2026-06-07",
    image:
      "/images/static-blogs/regenerative-medicine-therapy-natural-healing.webp",
    altText:
      "Woman representing regenerative medicine therapy with visuals for stem cell therapy, PRP, exosomes, prolotherapy, and natural healing.",
    imageTitle: "The Science Behind Regenerative Medicine Therapy and Healing",
    imageDescription:
      "Educational healthcare graphic explaining regenerative medicine therapies that support the body's natural healing processes. The image highlights stem cell therapy, PRP therapy, exosome therapy, prolotherapy, inflammation reduction, tissue repair, collagen production, metabolic support, and cellular regeneration for improved recovery and wellness.",
    caption:
      "Explore how regenerative medicine therapies such as stem cell therapy, PRP, exosomes, and prolotherapy support natural healing, tissue repair, and overall wellness.",
    body: "Understand how regenerative medicine therapy supports natural healing, tissue repair, inflammation control, cellular regeneration, and metabolic wellness.",
  },
  {
    title: "Top Balance Exercises for Seniors at Home",
    slug: "top-balance-exercises-for-seniors-at-home",
    date: "2022-05-24", // ✅ use ISO date format
    image: "/images/blog/image1.png",
    body: "Learn balance exercises to improve mobility and prevent falls at home.",
  },
  {
    title: "Stroke (CVA) Rehab: What to Expect in Physical Therapy",
    slug: "stroke-cva-rehab-what-to-expect-in-physical-therapy",
    date: "2022-05-24",
    image: "/images/blog/image2.png",
    body: "Understand the rehab process for stroke recovery through physical therapy.",
  },
  {
    title: "How to Relieve Lower Back Pain Without Surgery",
    slug: "how-to-relieve-lower-back-pain-without-surgery",
    date: "2022-05-24",
    image: "/images/blog/image3.png",
    body: "Discover natural methods and exercises to ease lower back pain.",
  },
];

const formatPostDate = (input?: BlogItem["date"]) => {
  if (!input) return "";
  let d: Date | null = null;

  if (input instanceof Date) {
    d = input;
  } else if (typeof input === "number") {
    // Handle seconds vs milliseconds
    d = new Date(input > 1e12 ? input : input * 1000);
  } else if (typeof input === "string") {
    const trimmed = input.trim();
    let parsed = new Date(trimmed);
    if (isNaN(parsed.getTime())) {
      // Try common CMS format "YYYY-MM-DD HH:mm:ss"
      const normalized = trimmed.replace(" ", "T");
      parsed = new Date(normalized);
    }
    if (!isNaN(parsed.getTime())) {
      d = parsed;
    } else {
      return trimmed; // Fallback to original string
    }
  }

  if (!d || isNaN(d.getTime())) return "";

  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getPostTime = (blog: BlogItem) => {
  const value = blog.date ?? blog.createdAt ?? blog.publishedAt;
  if (!value) return 0;

  const parsed =
    value instanceof Date
      ? value
      : typeof value === "number"
        ? new Date(value > 1e12 ? value : value * 1000)
        : new Date(value.trim().replace(" ", "T"));

  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
};

export default function Blogs({ blogPost }: BlogsProps) {
  const publishedPosts =
    blogPost?.data?.filter((b: BlogItem) => b.published) || [];
  const staticPosts = fallbackBlogs.slice(0, 6);
  const staticSlugs = new Set(staticPosts.map((blog) => blog.slug));
  const mergedPosts: BlogItem[] = [
    ...staticPosts,
    ...publishedPosts.filter((blog) => !staticSlugs.has(blog.slug)),
  ].sort((a, b) => getPostTime(b) - getPostTime(a));
  const posts: BlogItem[] = mergedPosts.length ? mergedPosts : fallbackBlogs;

  return (
    <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
      <Reveal tag="div" y={16} opacityFrom={0}>
        <div className="mb-8">
          <h2 className="text-3xl lg:text-[38px] font-bold text-gray-900">
            The Wellness Journal
          </h2>
        </div>
      </Reveal>

      {posts.length === 0 ? (
        <div className="text-center py-16 text-gray-600">
          No posts available
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {posts.map((blog: BlogItem, index: number) => (
            <Link
              key={index}
              href={`/the-wellness-journal/${blog.slug}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              {/* Blog Image */}
              <div className="w-full p-4 lg:p-6">
                <div className="relative h-56 w-full overflow-hidden rounded-xl">
                  {/* Blog listing feature image: static image first, CMS featuredImage second, placeholder last. */}
                  <Image
                    src={
                      blog.image ||
                      blog?.featuredImage?.image?.url ||
                      "/images/placeholder.jpg"
                    }
                    alt={blog.altText || blog.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-4 lg:p-6 pt-0 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                    {formatPostDate(
                      blog.date ?? blog.createdAt ?? blog.publishedAt,
                    )}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {blog.title}
                  </h3>
                  {blog.body && (
                    <div className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {typeof blog.body === "string"
                        ? parse(blog.body)
                        : blog.body}
                    </div>
                  )}
                </div>

                <span className="text-primary text-sm font-medium hover:underline mt-4">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
