// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "BEREKET",
    LastName: "Daniel",
    btnText: "Get My Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Years of Experinse in Full stack development",
      },
      {
        count: "8+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Java",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Spring Boot",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Node JS",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "AWS Cloud",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "SQL & NoSQL",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Experience",
    subtitle: "WHAT I DID",
    service_content: [
      {
        title: "Software Developer",
        para: "EADOM NETWORKING AND COMMUNICATIONS, Addis Ababa, Ethiopia •  July 2020 – April 2022 A top-tier IT services provider specializing in software development, network infrastructure, unified communications, and IIoT technologies.",
        logo: services_logo1,
      },
      {
        title: "FullStack Developer",
        para: "DAGEM TELECOM SERVICES, Addis Ababa, Ethiopia • Mar 2020- DEC 2020 ICT service company vending an entire range of telecom services to retailers.",
        logo: services_logo2,
      },
      {
        title: "Software Engineer",
        para: "INFORMATION NETWORK SECURITY AGENCY, Addis Ababa, Ethiopia • Sep 2019 - Aug2020 Government agency managing network security. ",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Education and Certificates",
    subtitle: "EDUCATION",
    testimonials_content: [
      {
        review:
          "(In progress via distance education; expected completion December 2024)Maharishi International University, Fairfield, Iowa",

        name: "MSc OF COMPUTER SCIENCE",
      },
      {
        review:
          "Completed Bachelors of Science in Electrical and Computer Engineering, Arbaminch University - Arbaminch, Ethiopia.",

        name: "BSc ELECTRICAL AND COMPUTER ENGINEERING ",
      },
      {
        review: "Certified CISCO Network Associate,   ",

        name: "CCNA",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "AVAILABLE FOR FULL TIME W2 EMPLOYMENT",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Full Stack Java developer, with demonstrated experience in developing Enterprise web Applications using cutting edge technologies and tools. ",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "bereketdanny@gmail.com",
        icon: GrMail,
        link: "mailto:bereket@gmail.com",
      },
      {
        text: "+1 202 590 3963",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Bereket Dentamo",
        icon: BsLinkedin,
        link: "https://www.https://www.linkedin.com/in/bereket-daniel/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
