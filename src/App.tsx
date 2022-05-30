import React, { FC } from 'react';
import { Button, Row, Col, Divider, Typography, Progress } from 'antd';
import './App.css';
const { Title, Text } = Typography;

const App: FC = () => (
  <div className="App">
    <Row className="resume">
      <Col span={16} className="left-column" >
        <Row align='middle'>
          <Col span={12} >
            <Title level={1}>
              <div className='first-name'>Bogdan K. </div>
              <div className='last-name'>Oleinikov</div>
            </Title>
          </Col>
          <Col span={12} >
            <Title level={4} underline={true}>Contact</Title>
            <div>☏ +82 010-4478-6630</div>
            <div>✉ boleinikov@gmail.com</div>
          </Col>
        </Row>
        <div>
          <Title level={4} >Education</Title>
          <Divider />
          <div>
            <div>
              <Title level={5} >Online Master of Computer Science </Title>
              Georgia Tech | 2020 - 2022 <br />
              ↪Expected graduation December 2022
            </div>
            <div>
              <Title level={5}> Undergraduate Computer Science Student in College of
                Engineering and Applied Sciences </Title>
              SUNY Korea University | 2015 - 2017 & 2018 - 2019 <br />
              ↪Cumulative GPA 3.49/4.00 <br />
              Stony Brook University | 2017 - 2018 <br />
            </div>
          </div>
        </div>
        <div>
          <Title level={4} >Experience</Title>
          <Divider />
          <div>
            <div>
              <Title level={5}> Jinjoosoft Software Engineer</Title>
              Web/Mobile Frontend & Backend Developer | Oct 2019 - Oct 2020<br />
              • Use of Angular, React, and Vue libraries for web development.<br />
              • Use of React Native for mobile development.<br />
              • Use of Netcore, Docker, and Express for backend development.
            </div>
            <div>
              <Title level={5}>BNR Technology Intern</Title>
              Android Mobile Development &<br />
              Eng-Rus-Kor Translator Position | Jan 2019 - Mar 2019<br />
              • Use of Android Studios and Firebase for mobile app software development.<br />
              • Created written translations for English, Russian, and Korean language.
            </div>
            <div>
              <Title level={5}>Family Library Project</Title>
              Personal Project | Spring 2022<br />
              • Deployment of a family library database providing frontend React Typescript
              GUI and backend implementation for addition/modification of book records
              using MongoDB.
            </div>
          </div>
        </div>
        <div>
          <Title level={4} >Certifications</Title>
          <Divider />
          <div>
            <div>
              <Title level={5}>Oracle Certified Professional</Title>
              Java SE 8 Programmer | July 20, 2018<br />
              • Verified understanding of Concurrency, Fork - Join Framework, Functional Interfaces,
              JDBC, Java Design Patterns, Java NIO.2 API, Localization, Regular Expressions,
              Parallel Streams and Stream API.
            </div>
            <div>
              <Title level={5}>Oracle Certified Associate</Title>
              Java SE 8 Programmer | June 2, 2018<br />
              • Verified understanding of Java, JDK 8, Java SE 8, Lambda Expressions, Java
              Application Development, and Java 8 Date & Time API.
            </div>
            <div>
              <Title level={5}>Test of Proficiency in Korean</Title>
              TOPIK Level 6 | Oct 2021<br />
              • Absolutely fluent in the Korean language for professional research or work, Capacity
              to understand and express oneself without problem, although without the full fluency of
              a native speaker.
            </div>
          </div>
        </div>
      </Col>
      <Col className="right-column" span={8}  >
        <Title level={2}  ><Text className="job-title" >Software Engineer</Text></Title>
        <Title level={4} >Relevent Coursework</Title>

        <Divider />
        <div>
          Object Oriented Programming <br />
          & Data Structures<br />
          System Fundamentals Ⅰ<br />
          • MIPS Assembly<br />
          System Fundamentals Ⅱ<br />
          • C language<br />
          Software Engineering<br />
          • Android Studios<br />
          • Eclipse IDE<br />
          • NetBeans IDE<br />
          Discrete Mathematics<br />
          & Theory of Computation<br />
          Analysis of Algorithms<br />
          Principles of Databases<br />
          Computer Networks<br />
          Artificial Intelligence<br />
          Principles of Programming<br />
          Languages<br />
          Robotics<br />
          Visualization
        </div>
        <Title level={4} >Skills</Title>
        <Divider />

        <Title level={5} >Computer</Title>
        <div>
          Proficient in Java, Python, C#<br />
          Adept in Web Component<br />
          Development & Design<br />
          •Servlets, JSP, Html, CSS, XML,<br />
          React, Angular, Vue, Express<br />
          Intermediate in C/C++, SQL,<br />
          MongoDB, Network Sockets<br />
          Novice in Lisp, SML<br />
        </div>
        <Title level={5} >Languages</Title>
        <div>
          English (Native/ US Citizen)<br />
          <Progress
            strokeColor={{
              from: '#6FA8DC',
              to: '#073763',
            }}
            percent={100}
            showInfo={false}
            status="active"
            trailColor='transparent'
            strokeWidth={15}
          />
          Korean (Fluent/ 6 years+)<br />
          <Progress
            strokeColor={{
              from: '#6FA8DC',
              to: '#073763',
            }}
            percent={80}
            showInfo={false}
            status="active"
            trailColor='transparent'
            strokeWidth={15}
          />
          Russian (Fluent/ Heritage Speaker)<br />
          <Progress
            strokeColor={{
              from: '#6FA8DC',
              to: '#073763',
            }}
            percent={80}
            showInfo={false}
            status="active"
            trailColor='transparent'
            strokeWidth={15}
          />
        </div>
      </Col>
    </Row>

  </div>
);

export default App;
