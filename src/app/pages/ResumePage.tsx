import React, { FC, useState } from "react";
import {
  Row,
  Col,
  Divider,
  Typography,
  Switch,
  Space,
  Alert,
  Timeline,
  Layout,
  Card,
} from "antd";

import { GlobalOutlined } from "@ant-design/icons";
import ResumeItem from "../components/ResumeItem";
import resume_kr from "../../core/static/resume_kr";
import { useTranslation } from "react-i18next";
import NameContainer from "../components/NameContainer";
import resume_en from "../../core/static/resume_en";

const { Title, Text } = Typography;
const App: FC = () => {
  const { i18n } = useTranslation();
  const [resume, setResume] = useState(
    i18n.language?.includes("ko") ? resume_kr : resume_en
  );
  return (
    <Layout className="resume">
      <Layout.Content>
        <Card
          bordered={false}
          title={
            <Row justify="end">
              <Col>
                <Space align="center" size="middle">
                  <Switch
                    checked={resume.type === resume_kr.type}
                    onClick={() => {
                      setResume(
                        resume.type === resume_en.type ? resume_kr : resume_en
                      );
                    }}
                    unCheckedChildren={
                      <div>
                        <GlobalOutlined /> {resume.switchlabel}
                      </div>
                    }
                    checkedChildren={
                      <div>
                        <GlobalOutlined /> {resume.switchlabel}
                      </div>
                    }
                  />
                  {resume.download}
                </Space>
              </Col>
            </Row>
          }
        >
          <Row>
            <Col span={16} className="left-column">
              <Row align="top">
                <Col xs={24} sm={12}>
                  <NameContainer type={resume.type} />
                </Col>
                <Col xs={24} sm={12}>
                  <Title level={4} underline={true}>
                    {resume.contact}
                  </Title>
                  {resume.contactitem.map((x, key) => (
                    <ResumeItem key={key} description={x.description} />
                  ))}
                </Col>
              </Row>
              <Title level={4}>{resume.education}</Title>
              <Divider />
              <Timeline>
                {resume.educationitem.map((x, key) => (
                  <Timeline.Item key={key}>
                    <ResumeItem description={x.description} />{" "}
                  </Timeline.Item>
                ))}
              </Timeline>
              <Title level={4}>{resume.experience}</Title>
              <Divider />
              <Timeline>
                {resume.experienceitem.map((x, key) => (
                  <Timeline.Item key={key}>
                    <ResumeItem description={x.description} />
                  </Timeline.Item>
                ))}
              </Timeline>
              <Alert message={resume.experienceviewmore} type="info" closable />
              <Title level={4}>{resume.certification}</Title>
              <Divider />
              <Timeline>
                {resume.certificationitem.map((x, key) => (
                  <Timeline.Item key={key}>
                    <ResumeItem description={x.description} />
                  </Timeline.Item>
                ))}
              </Timeline>
            </Col>
            <Col span={8}>
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
            </Col>
          </Row>
        </Card>
      </Layout.Content>
    </Layout>
  );
};
export default App;
