import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "antd/lib/typography/Link";

export default {
    "email": <div><PhoneOutlined /> +82 010-4478-6630</div>,
    "mobile": <div><MailOutlined /> boleinikov@gmail.com</div>,
    "linkedin": <Link target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/boleinikov"><LinkedinOutlined /> linkedin.com/in/boleinikov</Link>,
    "github":  <Link target="_blank" rel="noopener noreferrer" href="https://github.com/bowdawn"><GithubOutlined /> github.com/bowdawn</Link>
}