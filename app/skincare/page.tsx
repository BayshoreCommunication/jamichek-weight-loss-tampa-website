import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import NeovaPage from "@/components/skincare/NeovaPage";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Medical-Grade Skincare"
        highlight="That Actually Works"
        items={[
          { label: "Home", href: "/" },
          { label: "Skincare / Shop" },
        ]}
      />
      <NeovaPage />
    </>
  );
};

export default page;
