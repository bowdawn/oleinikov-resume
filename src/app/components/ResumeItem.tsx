import React, { FC } from "react";
import { Typography } from "antd";
import ResumeItemType from "../../core/types/ResumeItem";
import { ResumeBadge } from "./ResumeBadge";
const { Title } = Typography;
const ResumeItem: FC<ResumeItemType> = (props: ResumeItemType) => {
  return (
    <div>
      {props.headers.map((x, key: number) => {
        return (
          <Title level={5} key={key}>
            {x.content}
            {x?.id ? <ResumeBadge type={x.id} /> : null}
          </Title>
        );
      })}
      {props.titles.map((x, key: number) => {
        return (
          <div key={key} className="description-title">
            {x.content}
          </div>
        );
      })}
      {props.details.map((x, key: number) => {
        return (
          <div key={key} className="description-detail">
            {x.content}
          </div>
        );
      })}
    </div>
  );
};
export default ResumeItem;
