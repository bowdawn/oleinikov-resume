import React from "react";
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons";
import { Progress, Tooltip } from "antd";
import Link from "antd/lib/typography/Link";
import { CertificationType } from "../types/Certification";
import ComputerType from "../types/Computer";
import DownloadType from "../types/Download";
import EducationType from "../types/Education";
import ExperienceType from "../types/Experience";
import LanguageType from "../types/Language";
import RelevantCourseworkType from "../types/RelevantCoursework";
import Resume from "../types/Resume";
import { SectionLabelType } from "../types/SectionLabel";

import badges from "./badges";
import contact from "./contact";

import progress_props from "./progress_props";
import { TooltipType } from "../types/Tooltip";

export function resume(
  type: Resume["type"],
  switchlabel: Resume["switchlabel"],
  first: string,
  last: string,
  sectionlabel: SectionLabelType,
  download: DownloadType,
  education: EducationType,
  experience: ExperienceType,
  certificate: CertificationType,
  relevantcoursework: RelevantCourseworkType,
  computer: ComputerType,
  language: LanguageType,
  tooltip: TooltipType
): Resume {
  return {
    type: type,
    switchlabel: switchlabel,
    download: (
      <Link href={download.link}>
        <DownloadOutlined className={"download " + download.class} />
      </Link>
    ),
    first: first,
    last: last,
    contact: sectionlabel.contact,
    contactitem: [
      {
        description: [
          { type: "title", text: contact.email },
          { type: "title", text: contact.mobile },
          { type: "title", text: contact.linkedin },
          { type: "title", text: contact.github },
        ],
      },
    ],
    education: sectionlabel.education,
    educationitem: [
      {
        description: [
          { type: "header", text: education.id1_header },
          { type: "title", text: education.id1_title },
          { type: "detail", text: education.id1_detail },
        ],
      },
      {
        description: [
          { type: "header", text: education.id2_header },
          { type: "title", text: education.id2_title },
          { type: "detail", text: education.id2_detail },
          { type: "title", text: education.id2_title_2 },
        ],
      },
    ],
    experience: sectionlabel.experience,
    experienceitem: [
      {
        description: [
          { type: "header", text: experience.id1_header },
          { type: "title", text: experience.id1_title },
          { type: "detail", text: experience.id1_detail_1 },
          { type: "detail", text: experience.id1_detail_2 },
          { type: "detail", text: experience.id1_detail_3 },
        ],
      },
      {
        description: [
          { type: "header", text: experience.id2_header },
          { type: "title", text: experience.id2_title_1 },
          { type: "title", text: experience.id2_title_2 },
          { type: "detail", text: experience.id2_detail_1 },
          { type: "detail", text: experience.id2_detail_2 },
        ],
      },
      {
        description: [
          {
            type: "header",
            text: (
              <div>
                {experience.id3_header}
                <Tooltip title={tooltip.link} placement={"right"}>
                  {badges.library_website}
                </Tooltip>
              </div>
            ),
          },
          { type: "title", text: experience.id3_title },
          { type: "detail", text: experience.id3_detail_1 },
          { type: "detail", text: experience.id3_detail_2 },
        ],
      },
    ],
    experienceviewmore: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={experience.view_more_link}
      >
        {experience.view_more} <ArrowRightOutlined />
      </Link>
    ),
    certification: sectionlabel.certification,
    certificationitem: [
      {
        description: [
          {
            type: "header",
            text: (
              <div>
                {certificate.id1_header}
                <Tooltip title={tooltip.certification} placement={"right"}>
                  {badges.oracle_professional}
                </Tooltip>
              </div>
            ),
          },
          { type: "title", text: certificate.id1_title },
          {
            type: "detail",
            text: certificate.id1_detail,
          },
        ],
      },
      {
        description: [
          {
            type: "header",
            text: (
              <div>
                {certificate.id2_header}
                <Tooltip title={tooltip.certification} placement={"right"}>
                  {badges.oracle_associate}
                </Tooltip>
              </div>
            ),
          },
          { type: "title", text: certificate.id2_title },
          {
            type: "detail",
            text: certificate.id2_detail,
          },
        ],
      },
      {
        description: [
          { type: "header", text: certificate.id3_header },
          { type: "title", text: certificate.id3_title },
          {
            type: "detail",
            text: certificate.id3_detail,
          },
        ],
      },
    ],
    software: sectionlabel.software,
    engineer: sectionlabel.engineer,
    releventcoursework: sectionlabel.releventcoursework,
    releventcourseworkitem: [
      {
        description: [
          { type: "title", text: relevantcoursework.id1_title_1 },
          { type: "title", text: relevantcoursework.id1_title_2 },
        ],
      },
      {
        description: [
          { type: "title", text: relevantcoursework.id2_title },
          { type: "detail", text: relevantcoursework.id2_detail },
        ],
      },
      {
        description: [
          { type: "title", text: relevantcoursework.id3_title },
          { type: "detail", text: relevantcoursework.id3_detail },
        ],
      },
      {
        description: [
          { type: "title", text: relevantcoursework.id4_title },
          { type: "detail", text: relevantcoursework.id4_detail_1 },
          { type: "detail", text: relevantcoursework.id4_detail_2 },
          { type: "detail", text: relevantcoursework.id4_detail_3 },
        ],
      },
      {
        description: [
          { type: "title", text: relevantcoursework.id5_title_1 },
          { type: "title", text: relevantcoursework.id5_title_2 },
        ],
      },
      {
        description: [{ type: "title", text: relevantcoursework.id6_title }],
      },
      {
        description: [{ type: "title", text: relevantcoursework.id7_title }],
      },
      {
        description: [{ type: "title", text: relevantcoursework.id8_title }],
      },
      {
        description: [{ type: "title", text: relevantcoursework.id9_title }],
      },
      {
        description: [
          { type: "title", text: relevantcoursework.id10_title_1 },
          { type: "title", text: relevantcoursework.id10_title_2 },
        ],
      },
      {
        description: [{ type: "title", text: relevantcoursework.id11_title }],
      },
      {
        description: [{ type: "title", text: relevantcoursework.id12_title }],
      },
    ],
    skills: sectionlabel.skills,
    computer: sectionlabel.computer,
    computeritem: [
      {
        description: [{ type: "title", text: computer.id1_title }],
      },
      {
        description: [
          { type: "title", text: computer.id2_title_1 },
          { type: "title", text: computer.id2_title_2 },
          { type: "detail", text: computer.id2_detail },
        ],
      },
      {
        description: [{ type: "title", text: computer.id3_title }],
      },
      {
        description: [{ type: "title", text: computer.id4_title }],
      },
      {
        description: [{ type: "title", text: computer.id5_title }],
      },
    ],
    language: sectionlabel.language,
    languageitem: [
      {
        description: [
          {
            type: "title",
            text: (
              <>
                {language.english}
                <br />
                <Progress percent={100} {...progress_props} />
              </>
            ),
          },
          {
            type: "title",
            text: (
              <>
                {language.korean}
                <br />
                <Progress percent={80} {...progress_props} />
              </>
            ),
          },
          {
            type: "title",
            text: (
              <>
                {language.russian}
                <br />
                <Progress percent={90} {...progress_props} />
              </>
            ),
          },
        ],
      },
    ],
    tooltip,
  };
}

export default resume;
