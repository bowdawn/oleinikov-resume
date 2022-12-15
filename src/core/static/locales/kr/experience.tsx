import ResumeItemType from "src/core/types/ResumeItem";

export const experience_kr: ResumeItemType[] = [
  {
    headers: [{ content: "(주)리우" }],
    titles: [
      {
        content: "웹/모바일 프론트엔드 & 백엔드 개발자  | 2022.08 재직중",
      },
    ],
    details: [
      {
        content: "• 쇼핑몰과 관리페이지 웹앱 개발 위한 React 쓴 경력.",
      },
      {
        content: "• 모바일앱 개발 위한 React Native 및 Webview 쓴 경력.",
      },
      {
        content:
          "• 백엔드 개발 위한 Python, Apollo, Django, GraphQL 및 Saleor API 쓴 경력.",
      },
    ],
  },
  {
    headers: [{ content: "(주)진주소프트" }],
    titles: [
      {
        content: "웹/모바일 프론트엔드 & 백엔드 개발자 | 2019.10 - 2020.10",
      },
    ],
    details: [
      {
        content: "• 웹앱 개발 위한 Angular, React 및 Vue를 쓴 경력.",
      },
      { content: "• 모바일앱 개발 위한 React Native를 쓴 경력." },
      {
        content: "• 백엔드 개발 위한 Netcore, Docker 및 Express 쓴 경력.",
      },
    ],
  },
  {
    headers: [{ content: "(주)비앤알테크널러지" }],
    titles: [
      { content: "안드로이드 모바일 어플리케이션 개발 &" },
      { content: "영어-러시아어-한국어 번역 | 2019.1 - 2019.3" },
    ],
    details: [
      {
        content:
          "• 안드로이드 스튜디오, Firebase를 사용하여 모바일 소프트웨어 개발.",
      },
      {
        content: "• 영어, 러시아어, 한국어 번역.",
      },
    ],
  },
  {
    headers: [{ id: "library_website", content: "가족 도서관 프로젝트" }],
    titles: [{ content: "개인 프로젝트 | 2022 봄" }],
    details: [
      {
        content:
          "• 타입스크립트하고 리액트로 구현된 가족 책 기록 하는 웹앱 배포.",
      },
      {
        content: "• 몽고DB를 통해서 백앤드 책기록 추가 및 수정 기능 구현.",
      },
    ],
  },
];
