import { ReactNode } from "react";
import ResumeItem from "./ResumeItem";

interface ResumeType {
    type: "En" | "Kr";
    switch: string;
    link: string;
    first: string;
    last: string;
    contact: string;
    contactitem: ResumeItem[];
    education: string;
    educationitem: ResumeItem[];
    experience: string;
    experienceitem: ResumeItem[];
    experienceviewmore: string | ReactNode;
    certifications: string;
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
  }

  export default ResumeType;