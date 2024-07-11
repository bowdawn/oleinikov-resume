import React, { FC } from "react";
import { Typography } from "antd";
import Resume from "../../core/types/Resume";
import resume_en from "../../core/static/resume_en";
import resume_kr from "../../core/static/resume_kr";
import { motion } from "framer-motion";

const { Title, Text } = Typography;
const NameContainer: FC<{ type: Resume["type"] }> = (props: {
  type: Resume["type"];
}) => {
  const level = props.type == "En" ? 2 : 2;
  const korean_subheader =
    props.type == "Kr" ? (
      <div>
        <Text type="secondary">(국문: {resume_kr.last + resume_kr.first})</Text>
      </div>
    ) : null;
  {
    return (
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="first-name"
      >
        <Title level={level}>
          {resume_en.first}
          <div className="last-name">{resume_en.last}</div>
        </Title>
        <Text type="secondary" className="occupation">
          Software Engineer
        </Text>
        {korean_subheader}
      </motion.div>
    );
  }
};
export default NameContainer;
