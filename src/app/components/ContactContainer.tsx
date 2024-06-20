import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Link from "antd/lib/typography/Link";
import { contact_default } from "src/core/static/locales/default/contact";

export const ContactContainer: React.FC = () => {
  return (
    <>
      <div>
        <i className="mdi-icon mdi-map-marker-outline reverse"></i>
        {contact_default.address}
      </div>
      <div>
        <PhoneOutlined /> {contact_default.mobile}
      </div>
      <div>
        <MailOutlined /> {contact_default.email}
      </div>
      <div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={contact_default.linkedin_link}
        >
          <LinkedinOutlined /> {contact_default.linkedin}
        </Link>
      </div>
      <div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={contact_default.github_link}
        >
          <GithubOutlined /> {contact_default.github}
        </Link>
      </div>
    </>
  );
};
