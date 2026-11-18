import type React from "react";
import CommonMythsAboutWeightLoss, {
  commonMythsAboutWeightLossMeta,
} from "@/components/static-blogs/blogs/common-myths-about-weight-loss";
import MusclePainReliefForActiveAdults, {
  musclePainReliefForActiveAdultsMeta,
} from "@/components/static-blogs/blogs/muscle-pain-relief-for-active-adults";
import TheScienceBehindRegenerativeMedicineTherapy, {
  regenerativeMedicineTherapyMeta,
} from "@/components/static-blogs/blogs/the-science-behind-regenerative-medicine-therapy";
import UnderstandingArthritisMedication, {
  understandingArthritisMedicationMeta,
} from "@/components/static-blogs/blogs/understanding-arthritis-medication";
import PRPInjectionJointPain, {
  prpInjectionJointPainMeta,
} from "@/components/static-blogs/blogs/prp-injection-joint-pain-long-term-relief";
import AreAntiAgingTreatmentsRightForYou, {
  areAntiAgingTreatmentsRightForYouMeta,
} from "@/components/static-blogs/blogs/are-anti-aging-treatments-right-for-you";
import ChronicPainManagementInterventionalTherapies, {
  chronicPainManagementInterventionalTherapiesMeta,
} from "@/components/static-blogs/blogs/chronic-pain-management-interventional-therapies";
import WeightLossPlateau12MedicalReasonsYoureStuck, {
  weightLossPlateau12MedicalReasonsYoureStuckMeta,
} from "@/components/static-blogs/blogs/Weight Loss Plateau 12 Medical Reasons You're Stuck";
import WhyDoSomePeopleLoseWeightFasterThanOthers, {
  whyDoSomePeopleLoseWeightFasterThanOthersMeta,
} from "@/components/static-blogs/blogs/why-do-some-people-lose-weight-faster-than-others";
import HowTampaPatientsAreClearingMalarMoundsWithoutSurgery, {
  howTampaPatientsAreClearingMalarMoundsWithoutSurgeryMeta,
} from "@/components/static-blogs/blogs/how-tampa-patients-are-clearing-malar-mounds-without-surgery";
import WhyIsBellyFatHarderToLoseThanOtherFat, {
  whyIsBellyFatHarderToLoseThanOtherFatMeta,
} from "@/components/static-blogs/blogs/why-is-belly-fat-harder-to-lose-than-other-fat";
import NutrientDeficienciesDuringGlp1TreatmentGuide, {
  nutrientDeficienciesDuringGlp1TreatmentGuideMeta,
} from "@/components/static-blogs/blogs/nutrient-deficiencies-during-glp-1-treatment-guide";
import CanMorpheus8TreatFestoonsWhenEyeCreamsFail, {
  canMorpheus8TreatFestoonsWhenEyeCreamsFailMeta,
} from "@/components/static-blogs/blogs/can-morpheus8-treat-festoons-when-eye-creams-fail";
import CanHsaOrFsaFundsBeUsedForMedicalWeightLoss, {
  canHsaOrFsaFundsBeUsedForMedicalWeightLossMeta,
} from "@/components/static-blogs/blogs/can-hsa-or-fsa-funds-be-used-for-medical-weight-loss";
import HowToKnowWhenItsTimeToSeekProfessionalWeightLossHelp, {
  howToKnowWhenItsTimeToSeekProfessionalWeightLossHelpMeta,
} from "@/components/static-blogs/blogs/how-to-know-when-its-time-to-seek-professional-weight-loss-help";
import HowNutritionalCounselingFitsIntoAMedicalWeightLossProgram, {
  howNutritionalCounselingFitsIntoAMedicalWeightLossProgramMeta,
} from "@/components/static-blogs/blogs/how-nutritional-counseling-fits-into-a-medical-weight-loss-program";
import HowToPrepareForYourMedicalWeightLossAppointmentInTampa, {
  howToPrepareForYourMedicalWeightLossAppointmentInTampaMeta,
} from "@/components/static-blogs/blogs/how-to-prepare-for-your-medical-weight-loss-appointment-in-tampa";

export type StaticBlogMeta = {
  title: string;
  metaTitle?: string;
  slug: string;
  description: string;
  image: string;
  altText: string;
  imageTitle?: string;
  imageDescription?: string;
  caption?: string;
  category?: string;
  publishedAt: string;
  updatedAt?: string;
  canonicalUrl?: string;
};

export type StaticBlogEntry = {
  meta: StaticBlogMeta;
  Component: React.ComponentType;
};

/**
 * Central registry for all static Wellness Journal posts.
 * Shared by the blog detail route and the dynamic sitemap generator so new entries
 * automatically appear in /sitemap.xml without maintaining a duplicate slug list.
 */
export const staticBlogs: StaticBlogEntry[] = [
  {
    meta: commonMythsAboutWeightLossMeta,
    Component: CommonMythsAboutWeightLoss,
  },
  {
    meta: musclePainReliefForActiveAdultsMeta,
    Component: MusclePainReliefForActiveAdults,
  },
  {
    meta: regenerativeMedicineTherapyMeta,
    Component: TheScienceBehindRegenerativeMedicineTherapy,
  },
  {
    meta: understandingArthritisMedicationMeta,
    Component: UnderstandingArthritisMedication,
  },
  {
    meta: prpInjectionJointPainMeta,
    Component: PRPInjectionJointPain,
  },
  {
    meta: areAntiAgingTreatmentsRightForYouMeta,
    Component: AreAntiAgingTreatmentsRightForYou,
  },
  {
    meta: chronicPainManagementInterventionalTherapiesMeta,
    Component: ChronicPainManagementInterventionalTherapies,
  },
  {
    meta: weightLossPlateau12MedicalReasonsYoureStuckMeta,
    Component: WeightLossPlateau12MedicalReasonsYoureStuck,
  },
  {
    meta: whyDoSomePeopleLoseWeightFasterThanOthersMeta,
    Component: WhyDoSomePeopleLoseWeightFasterThanOthers,
  },
  {
    meta: howTampaPatientsAreClearingMalarMoundsWithoutSurgeryMeta,
    Component: HowTampaPatientsAreClearingMalarMoundsWithoutSurgery,
  },
  {
    meta: whyIsBellyFatHarderToLoseThanOtherFatMeta,
    Component: WhyIsBellyFatHarderToLoseThanOtherFat,
  },
  {
    meta: nutrientDeficienciesDuringGlp1TreatmentGuideMeta,
    Component: NutrientDeficienciesDuringGlp1TreatmentGuide,
  },
  {
    meta: canMorpheus8TreatFestoonsWhenEyeCreamsFailMeta,
    Component: CanMorpheus8TreatFestoonsWhenEyeCreamsFail,
  },
  {
    meta: canHsaOrFsaFundsBeUsedForMedicalWeightLossMeta,
    Component: CanHsaOrFsaFundsBeUsedForMedicalWeightLoss,
  },
  {
    meta: howToKnowWhenItsTimeToSeekProfessionalWeightLossHelpMeta,
    Component: HowToKnowWhenItsTimeToSeekProfessionalWeightLossHelp,
  },
  {
    meta: howNutritionalCounselingFitsIntoAMedicalWeightLossProgramMeta,
    Component: HowNutritionalCounselingFitsIntoAMedicalWeightLossProgram,
  },
  {
    meta: howToPrepareForYourMedicalWeightLossAppointmentInTampaMeta,
    Component: HowToPrepareForYourMedicalWeightLossAppointmentInTampa,
  },
];
