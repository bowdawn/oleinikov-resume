import React, { ReactNode } from "react";
import MediaQuery from "react-responsive";

export const ResponsiveContainer: React.FC<{
  mobile?: ReactNode;
  web?: ReactNode;
}> = ({ mobile, web }) => {
  return (
    <>
      <MediaQuery minWidth={825}>{web}</MediaQuery>
      <MediaQuery maxWidth={824}>{mobile}</MediaQuery>
    </>
  );
};
