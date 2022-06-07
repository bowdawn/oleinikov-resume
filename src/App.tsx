import React, { FC, useState } from 'react';
import { Row, Col, Divider, Typography, Progress, PageHeader, Switch } from 'antd';
import './App.css';
import { GlobalOutlined } from '@ant-design/icons';
import ResumeItem from './components/ResumeItem';
import resume_en from './static/resume_en';
import resume_kr from './static/resume_kr';
const { Title, Text } = Typography;



const progressprops = {
  strokeColor: {
    from: '#6FA8DC',
    to: '#073763',
  },
  showInfo: false,
  trailColor: 'transparent',
  strokeWidth: 15
}


const App: FC = () => {
  const [resume, setResume] = useState(resume_en);
  return (<div className="App">
    <Row className="resume">
      <Col span={24}>
        <PageHeader extra={
          <Switch checked={resume.type == "Kr"}
            onClick={() => { setResume(resume.type == "En" ? resume_kr : resume_en) }
            }
            unCheckedChildren={<div><GlobalOutlined /> {resume.switch}</div>}
            checkedChildren={<div><GlobalOutlined /> {resume.switch}</div>} />}
        />
      </Col>
      <Col span={16} className="left-column" >
        <Row align='middle' className="basic-info-container">
          <Col span={12}  >
            {resume.type == "En" ?
              
              <Title  level={1}>
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
          <Col span={12} >
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
        <Title level={4} >{resume.certifications}</Title>
        <Divider />
        {resume.certificationitem.map((x) => <ResumeItem description={x.description} />)}
      </Col>
      <Col className="right-column" span={8}  >
        <Title level={2}  >
          <Text className="job-title" >{resume.software}</Text><br />
          <Text className="job-title" >{resume_en.engineer}</Text>
        </Title>
        <Title level={4} >{resume_en.releventcoursework}</Title>
        <Divider />
        {resume.releventcourseworkitem.map((x) => <ResumeItem description={x.description} />)}
        <Title level={4} >{resume_en.skills}</Title>
        <Divider />
        <Title level={5} >{resume_en.computer}</Title>
        {resume.computeritem.map((x) => <ResumeItem description={x.description} />)}
        <Title level={5} >{resume_en.languages}</Title>
        {resume.english}<br />
        <Progress status="active" percent={100} {...progressprops} />
        {resume.korean}<br />
        <Progress status="active" percent={80} {...progressprops} />
        {resume.russian}<br />
        <Progress status="active" percent={80} {...progressprops} />
      </Col>
    </Row>
  </div >
  )
}
export default App;
