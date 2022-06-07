import Resume from "../types/Resume";

const resume_kr: Resume =
{
    type: "Kr",
    switch: "한/영",
    first: "복단",
    last: "오",
    contact: "연락처",
    contactitem: [{
        description:
            [
                { type: "title", text: "☏ +82 010-4478-6630" },

            ]
    },
    {
        description:
            [
                { type: "title", text: "✉ boleinikov@gmail.com" },

            ]
    }],
    education: "학력사항",
    educationitem: [{
        description:
            [
                { type: "header", text: "Master's Degree in Computer Science" },
                { type: "title", text: "Georgia Tech | 2020 - 2022" },
                { type: "detail", text: "↪Expected graduation December 2022" }
            ]
    }
        ,

    {
        description:
            [
                { type: "header", text: "Bachelor's Degree in Computer Science" },
                { type: "title", text: "SUNY Korea University | 2015 - 2017 & 2018 - 2019" },
                { type: "detail", text: "↪Cumulative GPA 3.49/4.00" },
                { type: "title", text: "Stony Brook University | 2017 - 2018" },
            ]
    }],
    experience: "경력사항",
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
                { type: "header", text: "Family Library Project" },
                { type: "title", text: "Personal Project | Spring 2022" },

                {
                    type: "detail", text: `• Deployment of a family library database providing frontend React Typescript 
                    GUI and backend implementation for addition/modification of book records using MongoDB.`
                },
            ]
    }],
    certifications: "자격사항",
    certificationitem: [{
        description:
            [
                { type: "header", text: "Oracle Certified Professional" },
                { type: "title", text: "Java SE 8 Programmer | July 20, 2018" },
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
                { type: "header", text: "Oracle Certified Associate" },
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
    software: "소프트웨어",
    engineer: "엔지니어",
    releventcoursework: "관련 전공수강 내역",
    releventcourseworkitem: [
        {description: 
            [
                {type: "title" , text: "Object Oriented Programming"},
                {type: "title" , text: "& Data Structures"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "System Fundamentals Ⅰ"},
                {type: "detail" , text: "• MIPS Assembly"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "System Fundamentals Ⅱ"},
                {type: "detail" , text: "• C language"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "Software Engineering"},
                {type: "detail" , text: "• Android Studios"},
                {type: "detail" , text: "• Eclipse IDE"},
                {type: "detail" , text: "• NetBeans IDE"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "Discrete Mathematics"},
                {type: "title" , text: " & Theory of Computation"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "Analysis of Algorithms"},
              
            ]
        },
        {description: 
            [
                {type: "title" , text: "Principles of Databases"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "Computer Networks"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "Artificial Intelligence"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "Principles of Programming"},
                {type: "title" , text: "Languages"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "Robotics"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "Visualization"},
                
            ]
        },
    ],
    skills: "보유능력",
    computer: "컴퓨터",
    computeritem: [
        {description: 
            [
                {type: "title" , text: "Proficient in Java, Python, C#"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "Adept in Web Component"},
                {type: "title" , text: "Development & Design"},
                {type: "detail" , text: "•Servlets, JSP, Html, CSS, XML,"},
                {type: "detail" , text: " React, Angular, Vue, Express"},
               
            ]
        },
        {description: 
            [
                {type: "title" , text: "C/C++, SQL,"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "MongoDB, Network Sockets"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "Lisp, SML"},
            ]
        },
        
    ],
    languages: "언어",
    english: "English (Native/ US Citizen)",
    korean: "Korean (Fluent/ 6 years+)",
    russian: "Russian (Fluent/ Heritage Speaker)"
}

export default resume_kr;