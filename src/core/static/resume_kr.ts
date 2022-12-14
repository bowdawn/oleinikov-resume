import Resume from "../types/Resume";

import { education_kr } from "./locales/kr/education";
import { experience_kr } from "./locales/kr/experience";
import { language_kr } from "./locales/kr/language";

import resume from "./resume";
import { tooltip_kr } from "./locales/kr/tooltip";
import { certification_kr } from "./locales/kr/certification";
import { computer_kr } from "./locales/kr/computer";
import { relevantcoursework_kr } from "./locales/kr/relevantcoursework";
import { section_kr } from "./locales/kr/sectionlabel";

const resume_kr: Resume = resume(
  "Kr",
  "한/영",
  "복단",
  "오",
  section_kr,
  education_kr,
  experience_kr,
  certification_kr,
  relevantcoursework_kr,
  computer_kr,
  language_kr,
  tooltip_kr
);
export default resume_kr;
