import { ReactNode } from "react";
import { TooltipType } from "./Tooltip";
import ResumeItem from "./ResumeItem";



interface ResumeType {
    type: "En" | "Kr";
    switchlabel: "En/Kr" | "한/영";
    download: ReactNode;
    first: string;
    last: string;
    contact: string;
    contactitem: ResumeItem[];
    education: string;
    educationitem: ResumeItem[];
    experience: string;
    experienceitem: ResumeItem[];
    experienceviewmore: string | ReactNode;
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
    languageitem: ResumeItem[];
    tooltip: TooltipType;
  }

  export default ResumeType;