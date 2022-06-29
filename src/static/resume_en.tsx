

import Resume from "../types/Resume";
import certification from "./locales/en/certification";
import computer from "./locales/en/computer";
import education from "./locales/en/education"
import experience from "./locales/en/experience";
import language from "./locales/en/language";
import relevantcoursework from "./locales/en/relevantcoursework";
import sectionlabel from "./locales/en/sectionlabel";
import download from "./locales/en/download";
import resume from "./resume";

const resume_en: Resume = resume(
                                'En',
                                "En/Kr",
                                "Bogdan K.",
                                "Oleinikov",
                                sectionlabel, 
                                download,
                                education, 
                                experience,
                                certification,
                                relevantcoursework,
                                computer,
                                language)
export default resume_en;



















