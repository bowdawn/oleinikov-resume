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
    certifications: string;
    certificationitem: ResumeItem[];
    software: string;
    engineer: string;
    releventcoursework: string;
    releventcourseworkitem: ResumeItem[];
    skills: string;
    computer: string;
    computeritem: ResumeItem[];
    languages: string;
    english: string;
    korean: string;
    russian: string;
  }

  export default ResumeType;