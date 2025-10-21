"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import parse from "html-react-parser";

export type BlogFeaturedImage = {
  image?: { url?: string };
};

export type BlogItem = {
  title: string;
  slug: string;
  date: string | number | Date;
  image?: string;
  body?: string | React.ReactNode;
  altText?: string;
  featuredImage?: BlogFeaturedImage;
  published?: boolean;
};

export type BlogsProps = {
  blogPost?: { data?: BlogItem[] };
};

// Default static blogs (fallback)
const fallbackBlogs = [
  {
    title: "Top Balance Exercises for Seniors at Home",
    slug: "top-balance-exercises-for-seniors-at-home",
    date: "May 24, 2022",
    image: "/images/blog/image1.png",
    body: "Learn balance exercises to improve mobility and prevent falls at home.",
  },
  {
    title: "Stroke (CVA) Rehab: What to Expect in Physical Therapy",
    slug: "stroke-cva-rehab-what-to-expect-in-physical-therapy",
    date: "May 24, 2022",
    image: "/images/blog/image2.png",
    body: "Understand the rehab process for stroke recovery through physical therapy.",
  },
  {
    title: "How to Relieve Lower Back Pain Without Surgery",
    slug: "how-to-relieve-lower-back-pain-without-surgery",
    date: "May 24, 2022",
    image: "/images/blog/image3.png",
    body: "Discover natural methods and exercises to ease lower back pain.",
  },
];

export default function Blogs({ blogPost }: BlogsProps) {
  const posts: BlogItem[] =
    blogPost?.data?.filter((b: BlogItem) => b.published) || [];

  const postDate = (date: BlogItem["date"]) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

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
        <div className="text-center py-16 text-gray-600">No posts here</div>
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
                <Image
                  src={
                    blog.image ||
                    blog?.featuredImage?.image?.url ||
                    "/placeholder.jpg"
                  }
                  alt={blog.altText || blog.title}
                  width={1000}
                  height={667}
                  className="object-cover rounded-xl"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4 lg:p-6 pt-0 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                    {postDate(blog.date)}
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
