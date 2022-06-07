

interface ResumeItemText {
    type: "header" | "title" | "detail";
    text: string;
}

interface ResumeItemType {
    description: ResumeItemText[]
}

export default ResumeItemType;