
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "antd/lib/typography/Link";
import Resume from "../types/Resume";
import badges from "./badges";
import contact from "./locales/contact";
import education from "./locales/en/education"


const resume_en: Resume =
{
    type: "En",
    switch: "En/Kr",
    link:"https://docs.google.com/document/d/1strcvdGnFYgnZcr6p-ZkN-jG5LUgcatPFOw1RdPp54o/export?format=pdf",
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
                { type: "header", text: "Jinjoosoft Software Engineer" },
                { type: "title", text: "Web/Mobile Frontend & Backend Developer | Oct 2019 - Oct 2020" },
                { type: "detail", text: "• Use of Angular, React, and Vue libraries for web development." },
                { type: "detail", text: "• Use of React Native for mobile development." },
                { type: "detail", text: "• Use of Netcore, Docker, and Express for backend development." }
            ]
    }
        ,
    {
        description:
            [
                { type: "header", text: "BNR Technology" },
                { type: "title", text: "Android Mobile Development &" },
                { type: "title", text: "Eng-Rus-Kor Translator Position | Jan 2019 - Mar 2019" },
                { type: "detail", text: "• Use of Android Studios and Firebase for mobile app software development." },
                { type: "detail", text: "• Created written translations for English, Russian, and Korean language." },
            ]
    }
        ,
    {
        description:
            [
                { type: "header", text: <div>Family Library Project{badges.library_website}</div>  },
                { type: "title", text: "Personal Project | Spring 2022" },

                {
                    type: "detail", text: `• Deployment of a family library database providing frontend React Typescript 
                    GUI.`
                },
                {
                    type: "detail", text: `• Deployment of backend for addition/modification of book records using MongoDB.`
                },
            ]
    }],
    experienceviewmore: <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1reOvkzQh9aAVc7uFfWqpd9gFGzJa3YJgE4gK3yv_15U/export?format=pdf">View More <ArrowRightOutlined /></Link>,
    certifications: "Certifications",
    certificationitem: [{
        description:
            [
                {
                    type: "header", text: <div>
                        Oracle Certified Professional
                        {badges.oracle_professional}
                    </div>
                },
                { type: "title", text: "Java SE 8 Programmer | July 20, 2018 " },
                {
                    type: "detail", text: `• Verified understanding of Concurrency, Fork - Join Framework, Functional Interfaces, 
                    JDBC, Java Design Patterns, Java NIO.2 API, Localization, Regular Expressions,
                    Parallel Streams and Stream API.`
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
                            Oracle Certified Associate
                            {badges.oracle_associate}
                        </div>
                },
                { type: "title", text: "Java SE 8 Programmer | June 2, 2018" },
                {
                    type: "detail", text: `• Verified understanding of Java, JDK 8, Java SE 8, Lambda Expressions, Java
                    Application Development, and Java 8 Date & Time API.`
                },
            ]
    }
        ,
    {
        description:
            [
                { type: "header", text: "Test of Proficiency in Korean" },
                { type: "title", text: "TOPIK Level 6 | Oct 2021" },
                {
                    type: "detail", text: `• Absolutely fluent in the Korean language for professional research or work, Capacity
                    to understand and express oneself without problem, although without the full fluency of a native speaker.`
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
    languages: "Langauges",
    english: "English (Native/US Citizen)",
    korean: "Korean (Fluent/6 years+)",
    russian: "Russian (Fluent/Heritage Speaker)"
}



export default resume_en;



















