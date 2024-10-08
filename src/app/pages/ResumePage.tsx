import React, {
  FC,
  useState,
  useRef,
  MutableRefObject,
  ReactNode,
  useEffect,
} from "react";
import {
  Row,
  Col,
  Divider,
  Typography,
  Timeline,
  Layout,
  Card,
  theme,
  FloatButton,
  RowProps,
  Tooltip,
  Tour,
  TourProps,
  notification,
  Space,
  Button,
  Checkbox,
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

import { ContactContainer } from "../components/ContactContainer";
import { LanguageContainer } from "../components/LanguageContainer";
import { motion, AnimatePresence } from "framer-motion";
import { ResumeBadge } from "../components/ResumeBadge";
import { createContext } from "react";
import { ResumeItemKey } from "src/core/types/ResumeItem";
import { useMediaQuery } from "react-responsive";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import getSeason, { getSeasonMessage } from "src/core/helpers/season";
import LeafEffect from "../components/LeafEffect";
import SnowfallEffect from "../components/SnowfallEffect";

export const ResumeBadgeContext = createContext<{
  [key in ResumeItemKey]: React.MutableRefObject<null> | null;
}>({
  library_website: null,
  oracle: null,
  oracle_associate: null,
  oracle_professional: null,
});

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
      web={getRowLayout(24, 24)}
    />
  );
};

const { Title } = Typography;
const App: FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const { token } = theme.useToken();
  const componentRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [showNotification, _] = useState(!!localStorage.getItem("tour"));
  const [isVisibleSlow, setIsVisibleSlow] = useState(true);
  const [resume, setResume] = useState(
    i18n.language?.includes("ko") ? resume_kr : resume_en
  );
  const [checked, setChecked] = useState(false);
  const isWeb = useMediaQuery({ query: "(min-width: 825px)" });
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref3_1 = useRef(null);
  const ref4 = useRef(null);
  const ref4_1 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);

  const [open, setOpen] = useState<boolean>(false);
  const [floatButtonGroupOpen, setFloatButtonGroupOpen] = useState(false);

  const steps: TourProps["steps"] = [
    {
      title: "Welcome to Bogdan Oleinikov's Resume",
      nextButtonProps: { children: "Next" },
      prevButtonProps: { children: "Previous" },

      description: getSeasonMessage(),
    },
    {
      title: "Section Overview",
      nextButtonProps: { children: "Next" },
      prevButtonProps: { children: "Previous" },
      description:
        "My contact information has been provided in the section below.",
      placement: "bottom",
      target: () => ref1.current,
    },
    {
      title: "Section Overview",
      nextButtonProps: { children: "Next" },
      prevButtonProps: { children: "Previous" },
      description:
        "My education history information has been provided in the section below.",
      placement: "right",
      target: () => ref2.current,
    },
    {
      title: "Section Overview",
      nextButtonProps: { children: "Next" },
      prevButtonProps: { children: "Previous" },
      description:
        "My work experience information has been provided in the section below.",
      placement: "right",

      target: () => ref3.current,
    },

    {
      title: "Section Overview",
      nextButtonProps: { children: "Next" },
      prevButtonProps: { children: "Previous" },
      description:
        "My certification information has been provided in the section below.",

      placement: "right",
      target: () => ref4.current,
    },
    {
      title: "Section Overview",
      nextButtonProps: { children: "Next" },
      prevButtonProps: { children: "Previous" },
      description: (
        <div>
          <ResumeBadge type={"oracle"} />
          *(The check icons can be clicked to view a digital certificate)
        </div>
      ),
      placement: "right",
      target: () => ref4_1.current,
    },
    {
      title: "Section Overview",
      nextButtonProps: { children: "Next" },
      prevButtonProps: { children: "Previous" },
      description:
        "My technical skills has been listed in the section below.",
      placement: "left",
      target: () => ref5.current,
    },
    {
      title: "Section Overview",
      nextButtonProps: { children: "Next" },
      prevButtonProps: { children: "Previous" },
      description:
        "My language skills have been listed in the section below.",
      placement: "left",
      target: () => ref6.current,
    },
    {
      title: "Resume Actions",

      prevButtonProps: { children: "Previous" },
      description:
        "This button can be pressed to open a list of actions for the resume.",
      placement: "left",
      nextButtonProps: {
        onClick: () => setFloatButtonGroupOpen(true),
        children: "Next",
      },
      target: () => ref7.current,
    },
    {
      title: "Resume Actions",
      description: "The list of actions may be opened and closed.",
      placement: "left",
      prevButtonProps: { children: "Previous" },
      nextButtonProps: {
        onClick: () => setFloatButtonGroupOpen(true),
        children: "Next",
      },
      target: () => {
        return ref7.current;
      },
    },
    {
      title: "Resume Actions",
      description:
        "There is an action to print the resume or save the resume as a PDF file.",
      placement: "left",
      nextButtonProps: {
        children: "Next",
      },
      target: () => ref8.current,
    },
    {
      title: "Resume Actions",
      nextButtonProps: {
        children: "Next",
      },
      description:
        "There is an action to translate the resume into Korean/English.",
      placement: "left",
      target: () => ref9.current,
    },
    {
      title: "Thank You",
      nextButtonProps: { children: "Finish:)" },
      prevButtonProps: { children: "Previous" },
      description: "This concludes the tour. Have a wonderful day!",
    },
  ];

  useEffect(() => {
    if (isWeb && !showNotification) {
      api.info({
        key: "welcome",
        duration: 0,
        message: "Welcome",
        description: (
          <Space direction="vertical" size="small">
            Would you like to view a tour?
            <Checkbox
              checked={checked}
              onChange={(e: CheckboxChangeEvent) => {
                setChecked(e.target.checked);
              }}
            >
              Do not ask again.
            </Checkbox>
          </Space>
        ),
        btn: (
          <Space>
            <Button
              type="default"
              onClick={() => {
                api.destroy();
                if (checked) {
                  localStorage.setItem("tour", "hidden");
                }
              }}
            >
              No
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                api.destroy();
                if (checked) {
                  localStorage.setItem("tour", "hidden");
                }
              }}
            >
              Yes
            </Button>
          </Space>
        ),
      });
    }
  }, [checked]);

  return (
    <ResumeBadgeContext.Provider
      value={{
        library_website: ref3_1,
        oracle: ref4_1,
        oracle_associate: null,
        oracle_professional: null,
      }}
    >
      {contextHolder}
      {getSeason() == "winter" ? <SnowfallEffect /> : <LeafEffect />}

      <Layout>
        <Layout.Content>
          <Row align={"middle"}>
            <Card
              className="ant-card-resume bko-print-resume"
              size="small"
              ref={componentRef}
              bordered={false}
            >
              <ResponsiveRow
                leftCol={
                  <>
                    <ResponsiveRow
                      mini
                      leftCol={
                        <AnimatePresence
                          onExitComplete={() => setIsVisible(true)}
                        >
                          {isVisible ? (
                            <NameContainer type={resume?.type} />
                          ) : null}
                        </AnimatePresence>
                      }
                      rightCol={
                        <>
                          <AnimatePresence
                            onExitComplete={() => setIsVisible(true)}
                          >
                            {isVisible ? (
                              <motion.div
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                <Title ref={ref1} level={4} underline={true}>
                                  {resume?.contact}
                                </Title>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>

                          <ContactContainer />
                        </>
                      }
                    />

                    <AnimatePresence onExitComplete={() => setIsVisible(true)}>
                      {isVisible ? (
                        <motion.div
                          transition={{ duration: 0.5 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Title ref={ref2} level={4}>
                            {resume?.education}
                          </Title>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                    <Divider />
                    <Card
                      bordered={false}
                      size="small"
                      className="ant-card-section"
                    >
                      <Timeline>
                        <AnimatePresence
                          onExitComplete={() => setIsVisibleSlow(true)}
                        >
                          {isVisibleSlow ? (
                            <motion.div
                              transition={{ duration: 0.75 }}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                            >
                              {resume?.educationitem.map((x, key) => (
                                <Timeline.Item key={key}>
                                  <ResumeItem
                                    headers={x.headers}
                                    titles={x.titles}
                                    details={x.details}
                                  />
                                </Timeline.Item>
                              ))}
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </Timeline>
                    </Card>

                    <AnimatePresence onExitComplete={() => setIsVisible(true)}>
                      {isVisible ? (
                        <motion.div
                          transition={{ duration: 0.5 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Title
                            ref={ref3}
                            level={4}
                            style={{ marginRight: 0.1 }}
                          >
                            {resume?.experience}
                          </Title>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>

                    <Divider />
                    <Card
                      bordered={false}
                      size="small"
                      className="ant-card-section"
                    >
                      <Timeline>
                        <AnimatePresence
                          onExitComplete={() => setIsVisibleSlow(true)}
                        >
                          {isVisibleSlow ? (
                            <motion.div
                              transition={{ duration: 0.75 }}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                            >
                              {resume?.experienceitem.map((x, key) => (
                                <Timeline.Item key={key}>
                                  <ResumeItem
                                    headers={x.headers}
                                    titles={x.titles}
                                    details={x.details}
                                  />
                                </Timeline.Item>
                              ))}
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </Timeline>
                    </Card>

                    <AnimatePresence onExitComplete={() => setIsVisible(true)}>
                      {isVisible ? (
                        <motion.div
                          transition={{ duration: 0.5 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Title ref={ref4} level={4}>
                            {resume?.certification}
                          </Title>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>

                    <Divider />
                    <Card
                      bordered={false}
                      size="small"
                      className="ant-card-section"
                    >
                      <Timeline>
                        <AnimatePresence
                          onExitComplete={() => setIsVisibleSlow(true)}
                        >
                          {isVisibleSlow ? (
                            <motion.div
                              transition={{ duration: 0.75 }}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                            >
                              {resume?.certificationitem.map((x, key) => (
                                <Timeline.Item key={key}>
                                  <ResumeItem
                                    headers={x.headers}
                                    titles={x.titles}
                                    details={x.details}
                                  />
                                </Timeline.Item>
                              ))}
                            </motion.div>
                          ) : null}{" "}
                        </AnimatePresence>
                      </Timeline>
                    </Card>
                  </>
                }
                rightCol={
                  <Card className="ant-card-resume-right-column" size="small">
                    {/* <AnimatePresence onExitComplete={() => setIsVisible(true)}>
                      {isVisible ? (
                        <motion.div
                          transition={{ duration: 0.5 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Title level={2}>
                            {resume?.software}
                            <br />
                            {resume?.engineer}
                          </Title>
                        </motion.div>
                      ) : null}{" "}
                    </AnimatePresence>
                    <div ref={ref5}>
                      <AnimatePresence
                        onExitComplete={() => setIsVisible(true)}
                      >
                        {isVisible ? (
                          <motion.div
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <Title  level={4}>
                              {resume?.releventcoursework}
                            </Title>
                          </motion.div>
                        ) : null}{" "}
                      </AnimatePresence>
                    </div>  <Divider />
                    <AnimatePresence
                      onExitComplete={() => setIsVisibleSlow(true)}
                    >
                      {isVisibleSlow ? (
                        <motion.div
                          transition={{ duration: 0.75 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                        >
                          {resume?.releventcourseworkitem.map((x, key) => (
                            <ResumeItem
                              key={key}
                              headers={x.headers}
                              titles={x.titles}
                              details={x.details}
                            />
                          ))}
                        </motion.div>
                      ) : null}{" "}
                    </AnimatePresence> 
                    <div ref={ref6}>
                      <AnimatePresence
                        onExitComplete={() => setIsVisible(true)}
                      >
                        {isVisible ? (
                          <motion.div
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <Title ref={ref6} level={4}>
                              {resume?.skills}
                            </Title>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                      <Divider />
                    </div>*/}

                    <AnimatePresence onExitComplete={() => setIsVisible(true)}>
                      {isVisible ? (
                        <motion.div
                          transition={{ duration: 0.5 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Title ref={ref5} level={5}>{resume?.computer}</Title>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                    <AnimatePresence
                      onExitComplete={() => setIsVisibleSlow(true)}
                    >
                      {isVisibleSlow ? (
                        <motion.div
                          transition={{ duration: 0.75 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                        >
                          {resume?.computeritem.map((x, key) => (
                            <ResumeItem
                              key={key}
                              headers={x.headers}
                              titles={x.titles}
                              details={x.details}
                            />
                          ))}
                        </motion.div>
                      ) : null}{" "}
                    </AnimatePresence>
                    <AnimatePresence onExitComplete={() => setIsVisible(true)}>
                      {isVisible ? (
                        <motion.div
                          transition={{ duration: 1 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Title ref={ref6} level={5}>{resume?.language}</Title>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                    <AnimatePresence
                      onExitComplete={() => setIsVisibleSlow(true)}
                    >
                      {isVisibleSlow ? (
                        <LanguageContainer language={resume?.languageitem} />
                      ) : null}
                    </AnimatePresence>
                  </Card>
                }
                rowProps={{ gutter: token.paddingSM }}
              />
            </Card>
          </Row>
        </Layout.Content>
      </Layout>
      <FloatButton.Group
        onOpenChange={() => {
          setFloatButtonGroupOpen(!floatButtonGroupOpen);
        }}
        open={floatButtonGroupOpen}
        icon={<MenuOutlined />}
        type="primary"
        trigger="click"
      >
        <Tooltip title={resume?.tooltip.translate} placement={"left"}>
          <FloatButton
            onClick={() => {
              setIsVisible(false);
              setIsVisibleSlow(false);
              setResume(resume.type === resume_en.type ? resume_kr : resume_en);
            }}
            icon={<GlobalOutlined />}
          />
        </Tooltip>

        <ReactToPrint
          trigger={() => (
            <Tooltip title={resume?.tooltip.print} placement={"left"}>
              <FloatButton icon={<PrinterOutlined />} />
            </Tooltip>
          )}
          documentTitle = {"Bogdan Oleinikov Resume"}
          content={() => componentRef.current}
       
         
        />
      </FloatButton.Group>
      <FloatButton
        ref={ref7}
        style={{ visibility: "hidden" }}
        icon={<MenuOutlined />}
      />
      <FloatButton.Group style={{ visibility: "hidden" }} open={true}>
        <FloatButton ref={ref9} style={{ visibility: "hidden" }} />
        <FloatButton
          ref={ref8}
          style={{ visibility: "hidden", width: 40.1, height: 39.9 }}
        />
        <FloatButton />
      </FloatButton.Group>
      <ResponsiveContainer
        web={
          <Tour
            open={open}
            onClose={() => {
              setOpen(false);
              window.scrollTo(0, 0);
            }}
            onFinish={() => window.scrollTo(0, 0)}
            steps={steps}
          />
        }
      />
    </ResumeBadgeContext.Provider>
  );
};
export default App;
