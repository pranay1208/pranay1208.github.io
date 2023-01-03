import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import TopBar from "../Components/AppBar";
import useResponsive from "../hooks/useResponsive";

const pageColor = "#47329A";
const pageColorSecondary = "rgba(70, 51, 154, 0.8)";

function TabPanel(props) {
  const { value, index, data } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ flex: 1 }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant='h4' fontFamily={"RobotoCondensed"}>
            {data.position} @{" "}
            <a href={data.href} className='work-exp-link'>
              <span
                style={{
                  color: pageColorSecondary,
                  fontFamily: "RobotoCondensedBold",
                }}
              >
                {data.name}
              </span>
            </a>
          </Typography>
          <Typography
            variant='subtitle1'
            fontFamily={"RobotoCondensedBold"}
            color={pageColor}
            marginTop={0.5}
            marginLeft={1}
          >
            {data.duration}
          </Typography>
          <ul className='work-exp-bullet'>
            {data.bullets?.map((txt, i) => (
              <Typography
                key={i}
                variant='h6'
                component='li'
                fontFamily='RobotoCondensed'
              >
                {txt}
              </Typography>
            ))}
          </ul>
          <Typography
            variant='h5'
            fontFamily={"RobotoCondensedBold"}
            color={pageColorSecondary}
            marginTop={5}
          >
            Technologies Used:
          </Typography>
          <Typography
            fontFamily={"RobotoCondensed"}
            paddingLeft={2}
            variant='h6'
          >
            {data.technologies}
          </Typography>
        </Box>
      )}
    </div>
  );
}

const WorkExpPage = () => {
  const { isDesktop, isMobile } = useResponsive();
  const [value, setValue] = useState(0);

  return (
    <>
      <TopBar backgroundColor={pageColor} />
      <Box paddingTop={15} paddingBottom={5} paddingX={isDesktop ? 15 : 3}>
        <Typography
          variant='h2'
          component='div'
          marginBottom={4}
          color={pageColor}
          fontFamily='RobotoCondensedBold'
        >
          Work Experience
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: isMobile ? "auto" : "flex",
          }}
        >
          <Tabs
            orientation={isMobile ? "horizontal" : "vertical"}
            value={value}
            onChange={(_, newVal) => {
              setValue(newVal);
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: pageColor,
                [isMobile ? "top" : "left"]: 0,
              },
            }}
            variant='scrollable'
            sx={{
              borderRight: isMobile ? 0 : 1,
              borderColor: pageColor,
              marginRight: isMobile ? 0 : 2,
              borderBottom: isMobile ? 1 : 0,
              marginBottom: isMobile ? 2 : 0,
            }}
          >
            {workExperience.map((exp) => (
              <Tab
                key={"Tab" + exp.name}
                label={exp.name}
                style={{
                  fontFamily: "RobotoCondensedBold",
                  color: pageColor,
                  fontSize: isMobile ? "20px" : "2vw",
                  textAlign: "right",
                  alignItems: isMobile ? "center" : "flex-end",
                  textTransform: "none",
                }}
              />
            ))}
          </Tabs>
          {workExperience.map((exp, index) => (
            <TabPanel
              key={"Panel" + exp.name}
              value={value}
              index={index}
              data={exp}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default WorkExpPage;

const workExperience = [
  {
    name: "Finverse",
    href: "https://www.finverse.com/",
    duration: "June 2021 - Present",
    position: "Software Engineer",
    bullets: [
      "Reverse engineered commercial banks to collect financial data and build an OpenBanking API",
      "Built infrastructure for new financial product retrieval on a micro-service architecture",
      "Built tokenization service to securely store sensitive informatin",
      "Refactored API linking flow to increase ease-of-use for customers",
      "Designed, planned and implemented IAM features for Finverse Developer Dashboard",
      "Collaborated with team working in Agile and Scrum-based weekly sprints, squashing production bugs, writing documentation & optimizing legacy code to reduce technical debt",
    ],
    technologies:
      "NodeJS, React, TypeScript, Python, Golang, GCP, PostgreSQL, Docker, Kubernetes, Teraform",
  },
  {
    name: "Tree3",
    href: "https://www.tree3.health/",
    position: "Software Engineer Intern",
    duration: "February 2021 - April 2021",
    bullets: [
      "Designed and created various components of company MVP, from web dashboards to servers and mobile apps",
      "Performed functionality analysis of data collection from user fitness devices like Fitbit, Apple, Google, Nike.",
    ],
    technologies: "React, Redux",
  },
  {
    name: "Atom8",
    href: "https://www.atom8.ai/",
    position: "Software Engineer Intern",
    duration: "June 2020 - August 2020",
    bullets: [
      "Re-engineered backend servers to integrate IoT service with IFTTT to boost customer flexibility with creating automations",
      "Created Oauth2-based login feature to allow customers to link their devices with third-party applications",
      "Performed database feasability analysis based on cost factors as well as read-write latency",
      "Assisted in migration of AWS stack from Ohio to Mumbai for decreased client-server latency",
    ],
    technologies: "NodeJS, React, AWS, ExpressJS",
  },
  {
    name: "Open Fintech",
    href: "",
    position: "Application Developer Intern",
    duration: "November 2019 - April 2020",
    bullets: [
      "Developed miscellaneous feature in a financial dashboard app aimed at SMEs in South-East Asia",
      "Spearheaded CRM feature to allow business owners to manage transactions with customers and suppliers, allowing for automated receipt generation, payment due date notifications and more",
      "Contributed to UX design of various application components",
    ],
    technologies: "AngularJS, TypeScript, Google Firebase",
  },
  {
    name: "ProEd",
    href: "https://www.linkedin.com/company/proedltd/about/",
    position: "Frontend Developer Intern",
    duration: "October 2019 - January 2020",
    bullets: [
      "Implemented frontend designs for mobile application",
      "Implemented frontend functionality by linking components to API endpoints",
    ],
    technologies: "Flutter, Dart",
  },
  {
    name: "HKU",
    href: "https://www.cs.hku.hk/",
    position: "Student Teaching Assistant",
    duration: "September 2019 - December 2020",
    bullets: [
      "Served as a teaching assistant for 3 semesters for the CompSci 102 course",
      "Assisted students in weekly FAQ and QnA sessions with graded material",
    ],
    technologies: "C++, Bash Scripting, Linux OS, Command-Line",
  },
  {
    name: "iDTech",
    href: "https://www.idtech.com/",
    duration: "June 2019 - August 2020",
    position: "Instructor",
    bullets: [
      "Created engaging activities to teach children aged 7-12 coding",
      "Worked with Sphero and Cozmo robot SDKs to complement coding assignments",
      "Helped students build their individual projects ranging from face recognition to autonomous driving using built-in SDK functionalities",
      "Developed interactive teaching methods to simplify complex coding concepts and cultivate an interest and passion in technology",
    ],
    technologies: "Python, Visual Coding, Robot SDKs",
  },
];
