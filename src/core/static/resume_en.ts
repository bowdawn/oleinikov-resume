import Resume from "../types/Resume";
import { certification_en } from "./locales/en/certification";
import { computer_en } from "./locales/en/computer";

import { education_en } from "./locales/en/education";
import { experience_en } from "./locales/en/experience";
import { language_en } from "./locales/en/language";

import { relevantcoursework_en } from "./locales/en/relevantcoursework";
import { section_en } from "./locales/en/sectionlabel";

import { tooltip_en } from "./locales/en/tooltip";
import resume from "./resume";

export const resume_en: Resume = resume(
  "En",
  "En/Kr",
  "Bogdan K.",
  "Oleinikov",
  section_en,

  education_en,
  experience_en,
  certification_en,
  relevantcoursework_en,
  computer_en,
  language_en,
  tooltip_en
);
export default resume_en;
