import { Progress } from "antd";
import React from "react";
import LanguageType from "src/core/types/Language";
import { motion } from "framer-motion";

const progress_props = {
  strokeColor: {
    from: "#6FA8DC",
    to: "#073763",
  },
  showInfo: false,
  trailColor: "transparent",
  strokeWidth: 15,
};

export const LanguageContainer: React.FC<{ language: LanguageType }> = ({
  language,
}) => {
  return (
    <motion.div
      transition={{ duration: 0.75 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <>
        {language.english}
        <br />
        <Progress percent={100} {...progress_props} />
      </>
      <>
        {language.korean}
        <br />
        <Progress percent={80} {...progress_props} />
      </>
      <>
        {language.russian}
        <br />
        <Progress percent={90} {...progress_props} />
      </>
    </motion.div>
  );
};
