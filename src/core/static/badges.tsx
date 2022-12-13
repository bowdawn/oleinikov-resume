import React from "react";
import { CheckCircleOutlined, LinkOutlined } from "@ant-design/icons";
import Link from "antd/lib/typography/Link";
import badges from "./locales/default/badges";

export default {
    "oracle_professional":
        <Link target="_blank" rel="noopener noreferrer" href={badges.oracle_professional}>
            &nbsp;<CheckCircleOutlined />
        </Link>,
    "oracle_associate":
        <Link target="_blank" rel="noopener noreferrer" href={badges.oracle_associate}>
            &nbsp;<CheckCircleOutlined />
        </Link >,
    "library_website": <Link target="_blank" rel="noopener noreferrer" href={badges.library_website}>
    &nbsp;<LinkOutlined />
</Link >

}