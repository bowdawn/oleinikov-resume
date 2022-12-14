import React from "react";
import { CheckCircleOutlined, LinkOutlined } from "@ant-design/icons";
import Link from "antd/lib/typography/Link";
import badges from "src/core/static/locales/default/badges";
import { ResumeItemKey } from "src/core/types/ResumeItem";

export const ResumeBadge: React.FC<{ type: ResumeItemKey }> = ({ type }) => {
  switch (type) {
    case "oracle_professional":
      return (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={badges.oracle_professional}
        >
          &nbsp;
          <CheckCircleOutlined />
        </Link>
      );
    case "oracle_associate":
      return (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={badges.oracle_associate}
        >
          &nbsp;
          <CheckCircleOutlined />
        </Link>
      );
    case "library_website":
      return (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={badges.library_website}
        >
          &nbsp;
          <LinkOutlined />
        </Link>
      );
  }
};
