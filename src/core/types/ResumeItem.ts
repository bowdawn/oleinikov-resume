export type ResumeItemKey =
  | "library_website"
  | "oracle_associate"
  | "oracle_professional"
  | "oracle";

export type ResumeItemType = {
  id?: ResumeItemKey;

  headers: { content: any; id?: ResumeItemKey }[];
  titles: { content: any; id?: ResumeItemKey }[];
  details: { content: any; id?: ResumeItemKey }[];
};

export default ResumeItemType;
