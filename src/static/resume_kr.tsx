import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "antd/lib/typography/Link";
import Resume from "../types/Resume";
import badges from "./badges";
import contact from "./contact";
import education from "./locales/kr/education"
import experience from "./locales/kr/experience";
const resume_kr: Resume =
{
    type: "Kr",
    switch: "한/영",
    link:"https://docs.google.com/document/d/1RP1pIF0FY17Ht_en6M6Qs5ERcD1qj9eUkm4FAixl30A/export?format=pdf",
    first: "복단",
    last: "오",
    contact: "연락처",
    contactitem: [
        {
            description: [
                { type: "title", text: contact.email },
                { type: "title", text: contact.mobile },
                { type: "title", text: contact.linkedin },
                { type: "title", text: contact.github },]
        },
    ],
    education: "학력사항",
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
    experience: "경력사항",
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
                { type: "header", text: <div>{experience.id3_header}{  badges.library_website}</div> },
                { type: "title", text: experience.id3_title },
                { type: "detail", text: experience.id3_detail_1},
                { type: "detail", text: experience.id3_detail_2 },
            ]
    }],
    experienceviewmore: <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1pX7y7ewYfvFU70IfEAZTECGm5HQgG8TATX4fXq8ZgvA/view">다 보기 <ArrowRightOutlined /></Link>,
    certifications: "자격사항",
    certificationitem: [{
        description:
            [
                { type: "header", text: <div>Professional Oracle 자격증{badges.oracle_professional}</div> },
                { type: "title", text: "자바 SE 8 프로그래머 | 2018.07.20" },
                {
                    type: "detail", text: `• Concurrency, Fork - Join Framework, Functional Interfaces, JDBC, 
                    Java Design Patterns, Java NIO.2 API, Localization, Regular Expressions, Parallel Streams & Stream API 사용가능`
                },
            ]
    }
        ,
    {
        description:
            [
                { type: "header", text: <div> Associate Oracle 자격증{badges.oracle_associate}</div>},
                { type: "title", text: "자바 SE 8 프로그래머 | 2018.06.02" },
                {
                    type: "detail", text: `• Java, JDK 8, Java SE 8, Lambda Expressions, Java Application 
                    Development, and Java 8 Date & Time API 사용가능`
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
                    type: "detail", text: `• 전문 분야에서의 연구나 업무 수행에 필요한 언어 기능을 비교적 정확하고 유창하게 
                    수행할 수 있으며 정치, 경제, 사회, 문화 전반에 걸쳐 친숙하지 않은 주제에 관해서도 이해하고 사용할 수 있음. 
                    원어민 화자의 수준에는 이르지 못하나 기능 수행이나 의미 표현에는 어려움을 겪지 않음.`
                },
            ]
    }],
    software: "소프트웨어",
    engineer: "엔지니어",
    releventcoursework: "관련 전공수강 내역",
    releventcourseworkitem: [
        {
            description:
                [
                    { type: "title", text: "객체 지향 프로그래밍 (OOP)" },
                    { type: "title", text: "& 자료 구조" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "컴퓨터 아키텍처 Ⅰ" },
                    { type: "detail", text: "• MIPS " },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "컴퓨터 아키텍처 Ⅱ" },
                    { type: "detail", text: "• C 언어" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "소프트웨어 공학" },
                    { type: "detail", text: "• Android Studios" },
                    { type: "detail", text: "• Eclipse IDE" },
                    { type: "detail", text: "• NetBeans IDE" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "이산수학" },
                    { type: "title", text: " & 계산 이론" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "알고리즘 분석" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "데이터베이스 원리" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "컴퓨터 네트워크" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "인공지능" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "프로그래밍 언어의 원리" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "로봇공학" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "컴퓨처 비전" },

                ]
        },
    ],
    skills: "보유능력",
    computer: "컴퓨터",
    computeritem: [
        {
            description:
                [
                    { type: "title", text: "자바, 파이썬: 능숙함" },

                ]
        },
        {
            description:
                [
                    { type: "title", text: "웹 컴포넌트 개발 & 웹 디자인" },
                    { type: "detail", text: "•Servlets, JSP, Html, CSS, XML, React" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "C/C++" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "SQL" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "몽고DB, " },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "네트워크 소켓" },
                ]
        },
        {
            description:
                [
                    { type: "title", text: "Lisp, SML" },
                ]
        },


    ],
    languages: "언어",
    english: "영어 (원어민/미국출신) ",
    korean: "한국어 (유창함/경험 6년이상)",
    russian: "러시아어 (유창함/계승어)"
}

export default resume_kr;