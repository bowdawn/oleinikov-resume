import Resume from "../types/Resume";
import certification from "./locales/kr/certification";
import computer from "./locales/kr/computer";
import { education } from "./locales/kr/education";
import experience from "./locales/kr/experience";
import language from "./locales/kr/language";
import relevantcoursework from "./locales/kr/relevantcoursework";
import sectionlabel from "./locales/kr/sectionlabel";
import download from "./locales/kr/download";
import resume from "./resume";
import { tooltip_kr } from "./locales/kr/tooltip";

const resume_kr: Resume = resume(
  "Kr",
  "한/영",
  "복단",
  "오",
  sectionlabel,
  download,
  education,
  experience,
  certification,
  relevantcoursework,
  computer,
  language,
  tooltip_kr
);
export default resume_kr;
