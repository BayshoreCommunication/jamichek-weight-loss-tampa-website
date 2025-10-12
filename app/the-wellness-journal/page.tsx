import PainRelief from "@/components/home/PainRelief";
import BlogSection from "@/components/shared/Blog";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Latest From the Blog"
        items={[
          { label: "Home", href: "/" },
          { label: "The Wellness Journal" }, // current page (no href)
        ]}
      />
      <BlogSection/>
      <PainRelief/>
    </>
  );
};

export default page;
