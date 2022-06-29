import { ArrowRightOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import Link from "antd/lib/typography/Link";
import Resume from "../types/Resume";
import badges from "./badges";
import contact from "./contact";
import certificate from "./locales/kr/certificate";
import education from "./locales/kr/education"
import experience from "./locales/kr/experience";
import language from "./locales/kr/language";
import progress_props from "./progress_props";
const resume_kr: Resume =
{
    type: "Kr",
    switch: "한/영",
    link: "https://docs.google.com/document/d/1RP1pIF0FY17Ht_en6M6Qs5ERcD1qj9eUkm4FAixl30A/export?format=pdf",
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
                { type: "header", text: experience.id1_header },
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
                { type: "header", text: <div>{experience.id3_header}{badges.library_website}</div> },
                { type: "title", text: experience.id3_title },
                { type: "detail", text: experience.id3_detail_1 },
                { type: "detail", text: experience.id3_detail_2 },
            ]
    }],
    experienceviewmore: <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1pX7y7ewYfvFU70IfEAZTECGm5HQgG8TATX4fXq8ZgvA/view">다 보기 <ArrowRightOutlined /></Link>,
    certifications: "자격사항",
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
    language: "언어",
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

export default resume_kr;