import Resume from "../types/Resume";
import { SectionLabelType } from "../types/SectionLabel";

import { TooltipType } from "../types/Tooltip";
import ResumeItemType from "../types/ResumeItem";
import LanguageType from "../types/Language";

export function resume(
  type: Resume["type"],
  switchlabel: Resume["switchlabel"],
  first: string,
  last: string,
  sectionlabel: SectionLabelType,
  education: ResumeItemType[],
  experience: ResumeItemType[],
  certification: ResumeItemType[],
  relevantcoursework: ResumeItemType[],
  computer: ResumeItemType[],
  language: LanguageType,
  tooltip: TooltipType
): Resume {
  return {
    type: type,
    switchlabel: switchlabel,
    first: first,
    last: last,
    contact: sectionlabel.contact,
    education: sectionlabel.education,
    educationitem: education,
    experience: sectionlabel.experience,
    experienceitem: experience,
    certification: sectionlabel.certification,
    certificationitem: certification,
    software: sectionlabel.software,
    engineer: sectionlabel.engineer,
    releventcoursework: sectionlabel.releventcoursework,
    releventcourseworkitem: relevantcoursework,
    skills: sectionlabel.skills,
    computer: sectionlabel.computer,
    computeritem: computer,
    language: sectionlabel.language,
    languageitem: language,
    tooltip,
  };
}

export default resume;
