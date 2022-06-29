
import { ArrowRightOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import Link from "antd/lib/typography/Link";
import Resume from "../types/Resume";
import badges from "./badges";
import contact from "./contact";
import certificate from "./locales/en/certificate";
import education from "./locales/en/education"
import experience from "./locales/en/experience";
import language from "./locales/en/language";
import progress_props from "./progress_props";


const resume_en: Resume =
{
    type: "En",
    switch: "En/Kr",
    link: "https://docs.google.com/document/d/1strcvdGnFYgnZcr6p-ZkN-jG5LUgcatPFOw1RdPp54o/export?format=pdf",
    first: "Bogdan K.",
    last: "Oleinikov",
    contact: "Contact",
    contactitem: [
        {
            description: [
                { type: "title", text: contact.email },
                { type: "title", text: contact.mobile },
                { type: "title", text: contact.linkedin },
                { type: "title", text: contact.github },]
        },
    ],
    education: "Education",
    educationitem: [{
        description:
            [
                { type: "header", text: education.id1_header },
                { type: "title", text: education.id1_title },
                { type: "detail", text: education.id1_detail }
            ]
    }
        ,

    {
        description:
            [
                { type: "header", text: education.id2_header },
                { type: "title", text: education.id2_title },
                { type: "detail", text: education.id2_detail },
                { type: "title", text: education.id2_title_2 },
            ]
    }],
    experience: "Experience",
    experienceitem: [{
        description:
            [
                { type: "header", text: experience.id1_header},
                { type: "title", text: experience.id1_title },
                { type: "detail", text: experience.id1_detail_1 },
                { type: "detail", text: experience.id1_detail_2 },
                { type: "detail", text: experience.id1_detail_3 },
            ]
    }
        ,
    {
        description:
            [
                { type: "header", text: experience.id2_header },
                { type: "title", text: experience.id2_title_1 },
                { type: "title", text: experience.id2_title_2 },
                { type: "detail", text: experience.id2_detail_1 },
                { type: "detail", text: experience.id2_detail_2 },
            ]
    }
        ,
    {
        description:
            [
                { type: "header", text: <div>{experience.id3_header }{ badges.library_website}</div> },
                { type: "title", text: experience.id3_title },
                { type: "detail", text: experience.id3_detail_1},
                { type: "detail", text: experience.id3_detail_2 },
            ]
    }],
    experienceviewmore: <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1HGdZjSPC7v3nXF0BpbTTVdj-s-10n8i0Sz6U6I17lXM/view">View More <ArrowRightOutlined /></Link>,
    certifications: "Certifications",
    certificationitem: [{
        description:
            [
                {
                    type: "header", text: <div>
                        {certificate.id1_header}
                        {badges.oracle_professional}
                    </div>
                },
                { type: "title", text: certificate.id1_title },
                {
                    type: "detail", text: certificate.id1_detail
                },
            ]
    }
        ,
    {
        description:
            [
                {
                    type: "header", text:
                        <div>
                            {certificate.id2_header}
                            {badges.oracle_associate}
                        </div>
                },
                { type: "title", text: certificate.id2_title },
                {
                    type: "detail", text: certificate.id2_detail
                },
            ]
    }
        ,
    {
        description:
            [
                { type: "header", text: certificate.id3_header },
                { type: "title", text: certificate.id3_title },
                {
                    type: "detail", text: certificate.id3_detail
                },
            ]
    }],
    software: "Software",
    engineer: "Engineer",
    releventcoursework: "Relevent Coursework",
    releventcourseworkitem: [
        {
            description:
                [
                    { type: "title", text: "Object Oriented Programming" },
                    { type: "title", text: "& Data Structures" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "System Fundamentals Ⅰ" },
                    { type: "detail", text: "• MIPS Assembly" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "System Fundamentals Ⅱ" },
                    { type: "detail", text: "• C language" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "Software Engineering" },
                    { type: "detail", text: "• Android Studios" },
                    { type: "detail", text: "• Eclipse IDE" },
                    { type: "detail", text: "• NetBeans IDE" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "Discrete Mathematics" },
                    { type: "title", text: " & Theory of Computation" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "Analysis of Algorithms" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "Principles of Databases" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "Computer Networks" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "Artificial Intelligence" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "Principles of Programming" },
                    { type: "title", text: "Languages" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "Robotics" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "Visualization" },

                ]
        },
    ],
    skills: "Skills",
    computer: "Computer",
    computeritem: [
        {
            description:
                [
                    { type: "title", text: "Proficient in Java, Python, C#" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "Adept in Web Component" },
                    { type: "title", text: "Development & Design" },
                    { type: "detail", text: "•Servlets, JSP, Html, CSS, XML," },
                    { type: "detail", text: " React, Angular, Vue, Express" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "C/C++, SQL," },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "MongoDB, Network Sockets" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "Lisp, SML" },
                ]
        },

    ],
    language: "Languages",
    languageitem: [
        {
            description:
                [
                    {type: "title", text: <>{language.english}<br />
                    <Progress status="active" percent={100} {...progress_props} /></>},
                    {type: "title", text: <>{language.korean}<br />
                    <Progress status="active" percent={80} {...progress_props} /></>},
                    {type: "title", text: <>{language.russian}<br />
                    <Progress status="active" percent={80} {...progress_props} /></>}
                ]
        }
    ]
}



export default resume_en;



















