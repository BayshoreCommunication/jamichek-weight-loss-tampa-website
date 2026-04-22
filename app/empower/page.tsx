import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import EmpowerHub from "@/components/empower/EmpowerHub";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Empower Aesthetic"
        highlight="Services"
        items={[
          { label: "Home", href: "/" },
          { label: "Empower Services" },
        ]}
      />
      <EmpowerHub />
    </>
  );
};

export default page;
