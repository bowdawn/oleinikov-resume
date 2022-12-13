import React, {
  FC,
  useState,
  useRef,
  MutableRefObject,
  Children,
  ReactNode,
} from "react";
import {
  Row,
  Col,
  Divider,
  Typography,
  Space,
  Timeline,
  Layout,
  Card,
  theme,
  FloatButton,
  RowProps,
} from "antd";

import {
  GlobalOutlined,
  PrinterOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import ResumeItem from "../components/ResumeItem";
import resume_kr from "../../core/static/resume_kr";
import { useTranslation } from "react-i18next";
import NameContainer from "../components/NameContainer";
import resume_en from "../../core/static/resume_en";
import ReactToPrint from "react-to-print";
import { ResponsiveContainer } from "../components/ResponsiveContainer";

const ResponsiveRow: FC<{
  mini?: boolean;
  rowProps?: RowProps;
  leftCol: ReactNode;
  rightCol: ReactNode;
}> = ({ rowProps, leftCol, rightCol, mini }) => {
  const getRowLayout: (
    x: number,
    y: number,
    spaceBetween?: boolean
  ) => ReactNode = (x, y, spaceBetween) => {
    if (spaceBetween) {
      return (
        <Row {...rowProps} justify="space-between">
          <Col>{leftCol}</Col>
          <Col>{rightCol}</Col>
        </Row>
      );
    }
    return (
      <Row {...rowProps}>
        <Col span={x}>{leftCol}</Col>
        <Col span={y}>{rightCol}</Col>
      </Row>
    );
  };
  if (mini) {
    return (
      <ResponsiveContainer
        mobile={getRowLayout(12, 12, true)}
        web={getRowLayout(12, 12)}
        mini={getRowLayout(24, 24)}
      />
    );
  }
  return (
    <ResponsiveContainer
      mobile={getRowLayout(24, 24)}
      web={getRowLayout(16, 8)}
    />
  );
};

const { Title } = Typography;
const App: FC = () => {
  const { token } = theme.useToken();
  const componentRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const { i18n } = useTranslation();
  const [resume, setResume] = useState(
    i18n.language?.includes("ko") ? resume_kr : resume_en
  );
  return (
    <>
      <Layout className="resume">
        <Layout.Content>
          <Row align={"middle"}>
            <Card
              className="ant-card-resume"
              size="small"
              ref={componentRef}
              bordered={false}
            >
              <ResponsiveRow
                leftCol={
                  <>
                    <ResponsiveRow
                      mini
                      leftCol={<NameContainer type={resume.type} />}
                      rightCol={
                        <>
                          <Title level={4} underline={true}>
                            {resume.contact}
                          </Title>
                          {resume.contactitem.map((x, key) => (
                            <ResumeItem key={key} description={x.description} />
                          ))}
                        </>
                      }
                    />

                    <Title level={4}>{resume.education}</Title>
                    <Divider />
                    <Card
                      bordered={false}
                      size="small"
                      className="ant-card-section"
                    >
                      <Timeline>
                        {resume.educationitem.map((x, key) => (
                          <Timeline.Item key={key}>
                            <ResumeItem description={x.description} />{" "}
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </Card>
                    <Title level={4}>{resume.experience}</Title>
                    <Divider />
                    <Card
                      bordered={false}
                      size="small"
                      className="ant-card-section"
                    >
                      <Space size="small" direction="vertical">
                        <Timeline>
                          {resume.experienceitem.map((x, key) => (
                            <Timeline.Item key={key}>
                              <ResumeItem description={x.description} />
                            </Timeline.Item>
                          ))}
                        </Timeline>
                      </Space>
                    </Card>
                    <Title level={4}>{resume.certification}</Title>
                    <Divider />
                    <Card
                      bordered={false}
                      size="small"
                      className="ant-card-section"
                    >
                      <Timeline>
                        {resume.certificationitem.map((x, key) => (
                          <Timeline.Item key={key}>
                            <ResumeItem description={x.description} />
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </Card>
                  </>
                }
                rightCol={
                  <Card className="ant-card-resume-right-column" size="small">
                    <Title level={2}>
                      {resume.software}
                      <br />
                      {resume.engineer}
                    </Title>
                    <Title level={4}>{resume.releventcoursework}</Title>
                    <Divider />
                    {resume.releventcourseworkitem.map((x, key) => (
                      <ResumeItem key={key} description={x.description} />
                    ))}
                    <Title level={4}>{resume.skills}</Title>
                    <Divider />
                    <Title level={5}>{resume.computer}</Title>
                    {resume.computeritem.map((x, key) => (
                      <ResumeItem key={key} description={x.description} />
                    ))}
                    <Title level={5}>{resume.language}</Title>
                    {resume.languageitem.map((x, key) => (
                      <ResumeItem key={key} description={x.description} />
                    ))}
                  </Card>
                }
                rowProps={{ gutter: token.paddingSM }}
              />
            </Card>
          </Row>
        </Layout.Content>
      </Layout>
      <FloatButton.Group icon={<MenuOutlined />} type="primary" trigger="click">
        <FloatButton
          onClick={() => {
            setResume(resume.type === resume_en.type ? resume_kr : resume_en);
          }}
          icon={<GlobalOutlined />}
        />
        <ReactToPrint
          trigger={() => <FloatButton icon={<PrinterOutlined />} />}
          content={() => componentRef.current}
        />
      </FloatButton.Group>
    </>
  );
};
export default App;
