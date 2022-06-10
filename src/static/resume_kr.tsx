import Resume from "../types/Resume";
import education from "./locales/kr/education"
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
                { type: "header", text: education.id1_header },
                { type: "title", text: education.id1_title },
                { type: "detail", text: education.id1_detail }
            ]
    }
        ,

    {
        description:
            [
                { type: "header", text: "검퓨터공학 학사" },
                { type: "title", text: "한국 뉴욕주립대학교 | 2015 - 2017 & 2018 - 2019" },
                { type: "detail", text: "↪전체 학점 평균 3.49/4.00" },
                { type: "title", text: "스토니브룩 대학교 | 2017 - 2018" },
            ]
    }],
    experience: "경력사항",
    experienceitem: [{
        description:
            [
                { type: "header", text: "Jinjoosoft 소프트웨어 엔지니어" },
                { type: "title", text: "웹/모바일 프론트앤드 & 백앤드 개발자 | 2019.10 - 2020.20" },
                { type: "detail", text: "• 웹앱 개발 위한 Angular, React 및 Vue를 쓴 경력." },
                { type: "detail", text: "• 모바일앱 개발 위한 React Native를 쓴 경력." },
                { type: "detail", text: "• 모바일앱 개발 위한 Netcore, Docker 및 Express 쓴 경력." },
            ]
    }
        ,
    {
        description:
            [
                { type: "header", text: "BNR Technology" },
                { type: "title", text: "안드로이드 모바일 어플리케이션 개발 &" },
                { type: "title", text: "영어-러시아어-한국어 번역 | 2019.1 - 2019.3" },
                { type: "detail", text: "• 안드로이드 스튜디오, Firebase를 사용하여 모바일 소프트웨어 개발." },
                { type: "detail", text: "• 영어, 러시아어, 한국어 번역." },
            ]
    }
        ,
    {
        description:
            [
                { type: "header", text: "가족 도서관 프로젝트" },
                { type: "title", text: "개인 프로잭트 | 2022 봄" },

                {
                    type: "detail", text: `• 타입스크립트하고 리액트로 구현된 가족 책 기록 하는 웹앱 배포.`,
                },
                {
                    type: "detail", text: `• 몽고DB를 통해서 백앤드 책기록 추가 및 수정 기능 구현.`,  
                },
            ]
    }],
    certifications: "자격사항",
    certificationitem: [{
        description:
            [
                { type: "header", text: "Professional Oracle 자격증 " },
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
                { type: "header", text: "Associate Oracle 자격증" },
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
        {description: 
            [
                {type: "title" , text: "객체 지향 프로그래밍 (OOP)"},
                {type: "title" , text: "& 자료 구조"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "컴퓨터 아키텍처 Ⅰ"},
                {type: "detail" , text: "• MIPS "},
            ]
        },
        {description: 
            [
                {type: "title" , text: "컴퓨터 아키텍처 Ⅱ"},
                {type: "detail" , text: "• C 언어"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "소프트웨어 공학"},
                {type: "detail" , text: "• Android Studios"},
                {type: "detail" , text: "• Eclipse IDE"},
                {type: "detail" , text: "• NetBeans IDE"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "이산수학"},
                {type: "title" , text: " & 계산 이론"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "알고리즘 분석"},
              
            ]
        },
        {description: 
            [
                {type: "title" , text: "데이터베이스 원리"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "컴퓨터 네트워크"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "인공지능"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "프로그래밍 언어의 원리"},  
            ]
        },
        {description: 
            [
                {type: "title" , text: "로봇공학"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "컴퓨처 비전"},
                
            ]
        },
    ],
    skills: "보유능력",
    computer: "컴퓨터",
    computeritem: [
        {description: 
            [
                {type: "title" , text: "자바, 파이썬: 능숙함"},
                
            ]
        },
        {description: 
            [
                {type: "title" , text: "웹 컴포넌트 개발 & 웹 디자인"},
                {type: "detail" , text: "•Servlets, JSP, Html, CSS, XML, React"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "C/C++"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "SQL"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "몽고DB, "},
            ]
        },
        {description: 
            [
                {type: "title" , text: "네트워크 소켓"},
            ]
        },
        {description: 
            [
                {type: "title" , text: "Lisp, SML"},
            ]
        },
       
        
    ],
    languages: "언어",
    english: "영어 (원어민/미국출신) ",
    korean: "러시아어 (유창함/경험 6년이상)",
    russian: "러시아어 (유창함/계승어)"
}

export default resume_kr;