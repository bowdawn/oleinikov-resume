

export type ResumeItemKey = "library_website" |  "oracle_associate" | "oracle_professional" | "oracle";


export type ResumeItemType = {
    id?: ResumeItemKey;
 
    headers: {content: string, id?: ResumeItemKey}[];
    titles: {content: string, id?: ResumeItemKey}[];
    details: {content: string, id?: ResumeItemKey}[];
};


export default ResumeItemType;