
import { TooltipType } from "./Tooltip";
import ResumeItem from "./ResumeItem";
import LanguageType from "./Language";
import { ContactType } from "./Contact";



interface ResumeType {
    type: "En" | "Kr";
    switchlabel: "En/Kr" | "한/영";   
    first: string;
    last: string;
    contact: string;
   
    education: string;
    educationitem: ResumeItem[];
    experience: string;
    experienceitem: ResumeItem[];
    certification: string;
    certificationitem: ResumeItem[];
    software: string;
    engineer: string;
    releventcoursework: string;
    releventcourseworkitem: ResumeItem[];
    skills: string;
    computer: string;
    computeritem: ResumeItem[];
    language: string;
    languageitem: LanguageType;
    tooltip: TooltipType;
  }

  export default ResumeType;