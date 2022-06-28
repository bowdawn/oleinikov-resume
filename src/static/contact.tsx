import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "antd/lib/typography/Link";
import contact from "./locales/default/contact";

export default {
    "mobile": <div><PhoneOutlined /> {contact.mobile}</div>,
    "email": <div><MailOutlined /> {contact.email}</div>,
    "linkedin": <Link target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/boleinikov"><LinkedinOutlined /> {contact.linkedin}</Link>,
    "github":  <Link target="_blank" rel="noopener noreferrer" href="https://github.com/bowdawn"><GithubOutlined /> {contact.github}</Link>
}