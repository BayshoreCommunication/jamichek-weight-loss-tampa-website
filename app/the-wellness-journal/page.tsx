import PainRelief from "@/components/home/PainRelief";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import Blogs from "@/components/the-wellness-journal/Blogs";
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
      <Blogs />
      <PainRelief />
    </>
  );
};

export default page;
