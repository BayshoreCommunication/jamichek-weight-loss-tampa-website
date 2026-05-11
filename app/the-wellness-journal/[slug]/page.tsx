import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CommonMythsAboutWeightLoss, {
  commonMythsAboutWeightLossMeta,
} from "@/components/static-blogs/blogs/common-myths-about-weight-loss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import GetAllPostData from "../../../lib/GetPostData";
import PainRelief from "@/components/home/PainRelief";

const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1, h2 {
  font-style: blog;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 25px;
}

p {
  font-size: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
}

ul {
  list-style-type: disc;
}

`;

function extractTextFromHtml(htmlString: string): string {
  // Use regex to strip HTML tags and extract plain text
  const plainText = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
  return plainText;
}

function truncateText(text: string, wordLimit: number): string {
  const words = text.split(/\s+/);
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

//Social Blog Share

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.find(
    (blogs: any) => blogs.slug === params.slug,
  );

  if (!blogDetails) {
    if (params.slug === commonMythsAboutWeightLossMeta.slug) {
      return {
        title: commonMythsAboutWeightLossMeta.title,
        description: commonMythsAboutWeightLossMeta.description,
        openGraph: {
          title: commonMythsAboutWeightLossMeta.title,
          description: commonMythsAboutWeightLossMeta.description,
          images: commonMythsAboutWeightLossMeta.image,
          url: `https://www.medicalweightlosstampa.com/the-wellness-journal/${commonMythsAboutWeightLossMeta.slug}`,
          type: "article",
          site_name: "medicalweightlosstampa.com",
        },
      };
    }

    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  const rawDescription = blogDetails?.body || "";
  const plainTextDescription = extractTextFromHtml(rawDescription);
  const shortDescription = truncateText(plainTextDescription, 120);

  return {
    title: blogDetails?.title,
    description: shortDescription,
    openGraph: {
      title: blogDetails?.title,
      description: shortDescription,
      images: blogDetails?.featuredImage?.image?.url,
      url: `https://www.medicalweightlosstampa.com/blog/${blogDetails?.slug}`,
      type: "article",
      site_name: "medicalweightlosstampa.com",
    },
  };
}

// Main Code

const page = async ({ params }: { params: { slug: string } }) => {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.filter(
    (blogs: any) => blogs.slug === params.slug,
  );
  const isStaticBlog = params.slug === commonMythsAboutWeightLossMeta.slug;
  const hasDynamicBlog = blogDetails && blogDetails.length > 0;
  const shouldRenderStatic = isStaticBlog && !hasDynamicBlog;

  const recentBlogs = [
    commonMythsAboutWeightLossMeta,
    ...(blogPostData?.data?.filter((pub: any) => pub.published === true) || []),
  ].filter(
    (item: any, index: number, self: any[]) =>
      item.slug !== params.slug &&
      index === self.findIndex((post) => post.slug === item.slug),
  );

  const postDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  // console.log("check data", blogDetails);

  if (!shouldRenderStatic && (!blogDetails || blogDetails.length === 0)) {
    return (
      <>
        <style>{css}</style>
        <BreadcrumbSection
          title="Transform Your Body with Medical Weight Loss Tampa"
          items={[
            { label: "Home", href: "/" },
            { label: "The Wellness Journal" }, // current page (no href)
          ]}
        />
        <div className="max-w-[1640px] mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            No Blog Found
          </h2>
          <p className="text-lg text-gray-600">
            The requested blog post could not be found.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      {!shouldRenderStatic && <style>{css}</style>}
      <BreadcrumbSection
        title="Transform Your Body with Medical Weight Loss Tampa"
        items={[
          { label: "Home", href: "/" },
          { label: "The Wellness Journal" }, // current page (no href)
        ]}
      />

      <section className="px-8 pt-12 pb-8 md:pt-16 md:pb-16">
        <div className="grid gap-12 mb-10 gird-col-1 sm:grid-cols-3 max-w-[1640px] mx-auto">
          {shouldRenderStatic ? (
            <div className="col-span-2">
              <div className="relative aspect-[1000/510] w-full overflow-hidden rounded-2xl">
                {/* Static blog detail page feature image comes from commonMythsAboutWeightLossMeta.image. */}
                <Image
                  fill
                  src={commonMythsAboutWeightLossMeta.image}
                  alt={commonMythsAboutWeightLossMeta.altText}
                  sizes="(min-width: 640px) 66vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                {postDate(commonMythsAboutWeightLossMeta.publishedAt)}
              </p>
              <h2 className="mb-0 md:mb-4 text-2xl md:text-4xl font-bold !leading-[1.80] tracking-normal text-left text-[#1B2639] my-8">
                {commonMythsAboutWeightLossMeta.title}
              </h2>
              <CommonMythsAboutWeightLoss />
            </div>
          ) : (
            blogDetails?.map((blogs: any, index: number) => (
              <div key={index} className="col-span-2">
                <div className="flex items-center justify-between">
                  <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                    {blogs?.category || "Blog Post"}
                  </p>
                </div>

                {/* Dynamic blog detail page feature image comes from the CMS featuredImage field. */}
                <Image
                  width={1000}
                  height={300}
                  src={blogs?.featuredImage?.image?.url}
                  alt={blogs?.featuredImage?.altText}
                  className="w-full h-auto bg-center bg-cover rounded-2xl"
                />
                <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                  {postDate(blogs?.createdAt)}
                </p>
                <h2 className="mb-0 md:mb-4 text-2xl md:text-4xl font-bold !leading-[1.50] tracking-normal text-left text-[#1B2639] my-8">
                  {blogs?.title}
                </h2>
                <div className="mt-2 text-md">{parse(blogs?.body)}</div>
              </div>
            ))
          )}

          <div className="col-span-2 sm:col-span-1 h-[100%] md:h-[1000px] overflow-y-scroll overflow-x-hidden  p-3 rounded-lg">
            <h2 className="font-medium text-4xl text-black border-b-2 border-gray-500 pb-4 mb-6">
              Recent Blogs
            </h2>
            {recentBlogs?.map((blogs: any, index: number) => (
              <Link
                className="flex items-start gap-2 ps-3 py-3 drop-shadow-lg bg-white my-3"
                key={index}
                href={`/the-wellness-journal/${blogs?.slug}`}
              >
                {/* Recent blog thumbnail uses CMS featuredImage first, then static blog image. */}
                <Image
                  width={180}
                  height={180}
                  src={blogs?.featuredImage?.image?.url || blogs?.image}
                  alt={
                    blogs?.featuredImage?.altText ||
                    blogs?.altText ||
                    blogs?.title
                  }
                  className="h-[67px] w-[100px] object-cover"
                />
                <div>
                  <div className="text-md font-bold text-black text-left line-clamp-2">
                    {blogs?.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PainRelief />
    </>
  );
};

export default page;
