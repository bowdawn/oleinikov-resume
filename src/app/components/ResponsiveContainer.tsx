import React, { ReactNode } from "react";
import MediaQuery from "react-responsive";

export const ResponsiveContainer: React.FC<{
  mini?: ReactNode;
  mobile?: ReactNode;
  web?: ReactNode;
}> = ({ mobile, web, mini }) => {
  return (
    <>
      <MediaQuery minWidth={825}>{web}</MediaQuery>
      <MediaQuery maxWidth={824} minWidth={400}>
        {mobile}
      </MediaQuery>

      <MediaQuery maxWidth={399}>{mini ? mini : mobile}</MediaQuery>
    </>
  );
};
