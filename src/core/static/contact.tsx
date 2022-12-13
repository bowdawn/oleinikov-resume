import React from "react";
import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "antd/lib/typography/Link";
import contact from "./locales/default/contact";

export default {
    "mobile": <div><PhoneOutlined /> {contact.mobile}</div>,
    "email": <div><MailOutlined /> {contact.email}</div>,
    "linkedin": <Link target="_blank" rel="noopener noreferrer" href={contact.linkedin_link}><LinkedinOutlined /> {contact.linkedin}</Link>,
    "github":  <Link target="_blank" rel="noopener noreferrer" href={contact.github_link}><GithubOutlined /> {contact.github}</Link>
}