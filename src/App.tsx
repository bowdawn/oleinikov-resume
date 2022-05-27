import React, { FC } from 'react';
import { Button, Row, Col, Divider } from 'antd';
import './App.css';


const App: FC = () => (
  <div className="App">
    <Row className="resume">
      <Col span={16} >
        <Row>
          <Col className="name-box" span={12} >
            <div className='first-name'>Bogdan K. </div>
            <div className='last-name'>Oleinikov</div>
          </Col>
          <Col span={12} >
            <div>Contact</div>
            <div>☏ +82 010-4478-6630</div>
            <div>✉ boleinikov@gmail.com</div>
          </Col>
        </Row>
        <div>
          <div>Education</div>
          <Divider />
          <div>
            <div>Online Master of Computer Science <br />
              Georgia Tech | 2020 - 2022 <br />
              ↪Expected graduation December 2022
            </div>
            <div>
              Undergraduate Computer Science Student in College of <br />
              Engineering and Applied Sciences <br />
              SUNY Korea University | 2015 - 2017 & 2018 - 2019 <br />
              ↪Cumulative GPA 3.49/4.00 <br />
              Stony Brook University | 2017 - 2018 <br />
            </div>
          </div>
        </div>
        <div>
          <div>Experience</div>
          <Divider />
          <div>
            <div>
              Jinjoosoft Software Engineer<br />
              Web/Mobile Frontend & Backend Developer | Oct 2019 - Oct 2020<br />
              • Use of Angular, React, and Vue libraries for web development.<br />
              • Use of React Native for mobile development.<br />
              • Use of Netcore, Docker, and Express for backend development.
            </div>
            <div>
              BNR Technology Intern<br />
              Android Mobile Development &<br />
              Eng-Rus-Kor Translator Position | Jan 2019 - Mar 2019<br />
              • Use of Android Studios and Firebase for mobile app software development.<br />
              • Created written translations for English, Russian, and Korean language.
            </div>
            <div>
              Family Library Project<br />
              Personal Project | Spring 2022<br />
              • Deployment of a family library database providing frontend React Typescript<br />
              GUI and backend implementation for addition/modification of book records<br />
              using MongoDB.
            </div>
          </div>
        </div>
        <div>
          <div>Certifications</div>
          <Divider />
          <div>
            <div>
              Oracle Certified Professional<br />
              Java SE 8 Programmer | July 20, 2018<br />
              • Verified understanding of Concurrency, Fork - Join Framework, Functional Interfaces,<br />
              JDBC, Java Design Patterns, Java NIO.2 API, Localization, Regular Expressions,<br />
              Parallel Streams and Stream API.<br />
            </div>
            <div>
              Oracle Certified Associate<br />
              Java SE 8 Programmer | June 2, 2018<br />
              • Verified understanding of Java, JDK 8, Java SE 8, Lambda Expressions, Java<br />
              Application Development, and Java 8 Date & Time API.<br />
            </div>
            <div>
              Test of Proficiency in Korean<br />
              TOPIK Level 6 | Oct 2021<br />
              • Absolutely fluent in the Korean language for professional research or work, Capacity<br />
              to understand and express oneself without problem, although without the full fluency of<br />
              a native speaker.
            </div>
          </div>
        </div>
      </Col>
      <Col className="right-column" span={8}  >
        <div>Software Engineer</div>
        <div>Relevent Coursework</div>

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
        <div>Skills</div>
        <Divider />

        <div>Computer</div>
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
        <div>Languages</div>
        <div>
          English (Native/ US Citizen)<br />
          Korean (Fluent/ 6 years+)<br />
          Russian (Fluent/ Heritage Speaker)<br />
        </div>
      </Col>
    </Row>

  </div>
);

export default App;
