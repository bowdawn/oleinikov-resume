import React, { FC, useContext } from "react";
import { Space, Typography } from "antd";
import ResumeItemType from "../../core/types/ResumeItem";
import { ResumeBadge } from "./ResumeBadge";
import { ResumeBadgeContext } from "../pages/ResumePage";
const { Title } = Typography;
const ResumeItem: FC<ResumeItemType> = (props: ResumeItemType) => {
  const resumeBadgeRef = useContext(ResumeBadgeContext);
  return (
    <div>
      {props.headers.map((x, key: number) => {
        return (
          <Title level={5} key={key}>
            <Space>
              {x.content}

              {x?.id ? (
                <div
                  style={{ display: "inline", paddingRight: "4px" }}
                  ref={resumeBadgeRef[x.id]}
                >
                  <ResumeBadge type={x.id} />
                </div>
              ) : null}
            </Space>
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
