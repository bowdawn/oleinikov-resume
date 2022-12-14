import Resume from "../types/Resume";

import { education_kr } from "./locales/kr/education";
import { experience_kr } from "./locales/kr/experience";
import { language_kr } from "./locales/kr/language";
import resume from "./resume";
import { tooltip_kr } from "./locales/kr/tooltip";
import { certification_kr } from "./locales/kr/certification";
import { section_kr } from "./locales/kr/sectionlabel";
import { relevantcoursework_en } from "./locales/en/relevantcoursework";
import { computer_en } from "./locales/en/computer";

const resume_kr: Resume = resume(
  "Kr",
  "한/영",
  "복단",
  "오",
  section_kr,
  education_kr,
  experience_kr,
  certification_kr,
  relevantcoursework_en,
  computer_en,
  language_kr,
  tooltip_kr
);
export default resume_kr;
