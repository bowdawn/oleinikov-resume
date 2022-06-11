import { ReactNode } from "react";

interface ResumeItemContent {
    type: "header" | "title" | "detail";
    link?: string;
    text: string | ReactNode;
}

interface ResumeItemType {
    description: ResumeItemContent[]
}

export default ResumeItemType;