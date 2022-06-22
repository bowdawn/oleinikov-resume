import React, { FC, useState } from 'react';
import { Row, Col, Divider, Typography, Progress, PageHeader, Switch, Space, Alert } from 'antd';
import './App.css';
import { ArrowRightOutlined, DownloadOutlined, FontSizeOutlined, GlobalOutlined } from '@ant-design/icons';
import ResumeItem from './components/ResumeItem';
import resume_en from './static/resume_en';
import resume_kr from './static/resume_kr';
import progress_props from './static/progress_props';
import { useTranslation } from 'react-i18next';
import Link from 'antd/lib/typography/Link';


const { Title, Text } = Typography;
const App: FC = () => {
  const {  i18n } = useTranslation();
  const [resume, setResume] = useState( i18n.language.includes("ko") ? resume_kr : resume_en);
  
  return (
    <div className="App">
      <Row className="resume">
        <Col span={24}>
          <PageHeader extra={
            <Space align='center' size="middle">
            <Switch checked={resume.type == "Kr"}
              style={{marginBottom: "6px"}}
              onClick={() => { setResume(resume.type == "En" ? resume_kr : resume_en) }
              }
              unCheckedChildren={<div><GlobalOutlined /> {resume.switch}</div>}
              checkedChildren={<div><GlobalOutlined /> {resume.switch}</div>} />
            <Link href={resume.link}><DownloadOutlined  className={"download " + (resume.type == "En" ? "download-en" : "download-kr")} /></Link>
            </Space>
            
            }
          />
         
        </Col>
        <Col span={16} className="left-column" >
          <Row align='top'>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}  >
              {resume.type == "En" ?
                <Title level={1}>
                  <div className='first-name'>{resume_en.first}</div>
                  <div className='last-name'>{resume_en.last}</div>
                </Title>
                :
                <>
                  <Title level={2}>
                    <div className='first-name'>{resume_en.first}</div>
                    <div className='last-name'>{resume_en.last}</div>
                  </Title>
                  <Text strong>(국문: {resume_kr.last + resume_kr.first})</Text>
                </>
              }
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} >
              <Title level={4} underline={true}>{resume.contact}</Title>
              {resume.contactitem.map((x) => <ResumeItem description={x.description} />)}
            </Col>
          </Row>
          <Title level={4} >{resume.education}</Title>
          <Divider />
          {resume.educationitem.map((x) => <ResumeItem description={x.description} />)}
          <Title level={4} >{resume.experience}</Title>
          <Divider />
          {resume.experienceitem.map((x) => <ResumeItem description={x.description} />)}
          <Alert message={resume.experienceviewmore} type="info"  closable />
          <Title level={4} >{resume.certifications}</Title>
          <Divider />
          {resume.certificationitem.map((x) => <ResumeItem description={x.description} />)}
        </Col>
        <Col className="right-column" span={8}  >
          <Title level={2}  >
            <Text className="job-title" >{resume.software}</Text><br />
            <Text className="job-title" >{resume.engineer}</Text>
          </Title>
          <Title level={4} >{resume.releventcoursework}</Title>
          <Divider />
          {resume.releventcourseworkitem.map((x) => <ResumeItem description={x.description} />)}
          <Title level={4} >{resume.skills}</Title>
          <Divider />
          <Title level={5} >{resume.computer}</Title>
          {resume.computeritem.map((x) => <ResumeItem description={x.description} />)}
          <Title level={5} >{resume.languages}</Title>
          {resume.english}<br />
          <Progress status="active" percent={100} {...progress_props} />
          {resume.korean}<br />
          <Progress status="active" percent={80} {...progress_props} />
          {resume.russian}<br />
          <Progress status="active" percent={80} {...progress_props} />
        </Col>
      </Row>
    </div >
  )
}
export default App;
