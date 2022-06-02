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
              <Title level={5} >Master's Degree in Computer Science 
              </Title>
              <div className='description-title'>Georgia Tech | 2020 - 2022 </div>
              <div className='description-detail'>↪Expected graduation December 2022</div>
            </div>
            <div>
              <Title level={5}>Bachelor's Degree in Computer Science
                </Title>
              <div className='description-title'>SUNY Korea University | 2015 - 2017 & 2018 - 2019</div>
              <div className='description-detail'>↪Cumulative GPA 3.49/4.00 </div >
              <div className='description-title'>Stony Brook University | 2017 - 2018 </div>
            </div>
          </div>
        </div>
        <div>
          <Title level={4} >Experience</Title>
          <Divider />
          <div>
            <div>
              <Title level={5}> Jinjoosoft Software Engineer</Title>
              <div className='description-title'>Web/Mobile Frontend & Backend Developer | Oct 2019 - Oct 2020</div>
              <div className='description-detail'>• Use of Angular, React, and Vue libraries for web development.<br />
                • Use of React Native for mobile development.<br />
                • Use of Netcore, Docker, and Express for backend development.
              </div>
            </div>
            <div>
              <Title level={5}>BNR Technology Intern</Title>
              <div className='description-title'>Android Mobile Development &<br />
                Eng-Rus-Kor Translator Position | Jan 2019 - Mar 2019</div>
              <div className='description-detail'>• Use of Android Studios and Firebase for mobile app software development.<br />
                • Created written translations for English, Russian, and Korean language.</div>
            </div>
            <div>
              <Title level={5}>Family Library Project</Title>
              <div className='description-title'>Personal Project | Spring 2022</div>
              <div className='description-detail'>• Deployment of a family library database providing frontend React Typescript
                GUI and backend implementation for addition/modification of book records
                using MongoDB.</div>
            </div>
          </div>
        </div>
        <div>
          <Title level={4} >Certifications</Title>
          <Divider />
          <div>
            <div>
              <Title level={5}>Oracle Certified Professional</Title>
              <div className='description-title'>Java SE 8 Programmer | July 20, 2018</div>
              <div className='description-detail'>• Verified understanding of Concurrency, Fork - Join Framework, Functional Interfaces,
                JDBC, Java Design Patterns, Java NIO.2 API, Localization, Regular Expressions,
                Parallel Streams and Stream API.</div>
            </div>
            <div>
              <Title level={5}>Oracle Certified Associate</Title>
              <div className='description-title'>Java SE 8 Programmer | June 2, 2018</div>
              <div className='description-detail'>• Verified understanding of Java, JDK 8, Java SE 8, Lambda Expressions, Java
                Application Development, and Java 8 Date & Time API.</div>
            </div>
            <div>
              <Title level={5}>Test of Proficiency in Korean</Title>
              <div className='description-title'>TOPIK Level 6 | Oct 2021</div>
              <div className='description-detail'>• Absolutely fluent in the Korean language for professional research or work, Capacity
                to understand and express oneself without problem, although without the full fluency of
                a native speaker.</div>
            </div>
          </div>
        </div>
      </Col>
      <Col className="right-column" span={8}  >
        <Title level={2}  ><Text className="job-title" >Software Engineer</Text></Title>
        <Title level={4} >Relevent Coursework</Title>

        <Divider />
        <div className='description-title'>
          Object Oriented Programming <br />
          & Data Structures<br />
          System Fundamentals Ⅰ<br />
          <div className='description-detail'>• MIPS Assembly</div>
          System Fundamentals Ⅱ<br />
          <div className='description-detail'>• C language</div>
          Software Engineering<br />
          <div className='description-detail'>
            • Android Studios<br />
            • Eclipse IDE<br />
            • NetBeans IDE
          </div>
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
          <div className='description-detail'>•Servlets, JSP, Html, CSS, XML,<br />
            React, Angular, Vue, Express</div>
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
