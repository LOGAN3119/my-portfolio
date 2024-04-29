import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Pranay Bunari",
  title: "Hi all, I'm Pranay",
  description:
    "I'm an experienced Software Engineer specializing in full-stack development, cloud solutions, and agile methodologies. Holds a Master of Science in Computer Science from the University at Buffalo. Proven track record in designing and deploying scalable, high-availability systems using a wide range of technologies including Java, C#, JavaScript, Kubernetes, and Docker.",
  resumeLink: "https://drive.google.com/file/d/1tHRH-0O4WZ_69adUd2n2q6yXEbskShKR/view?usp=sharing",
};

export const openSource = {
  githubUserName: "LOGAN3119",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:pranaybunari@gmail.com",
  linkedin: "https://www.linkedin.com/in/pbunari/",
  github: "https://github.com/LOGAN3119",
  leetcode: "https://leetcode.com/u/pranaybunari/",
  // twitter: "https://twitter.com/pranayBunari",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing microservices using Java & Spring Boot framework."),
        emoji("⚡ Building responsive Single-Page-Apps (SPA) in React.js"),
        emoji("⚡ Hands-on experience with Docker and Kubernetes."),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Spring Boot",
          iconifyTag: "logos:spring",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql-icon",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Azure",
          iconifyTag: "logos:azure",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "logos:kubernetes",
        },
        {
          skillName: "Redis",
          iconifyTag: "logos:redis",
        },
      ],
    },
  ],
};

export const experience: ExperienceType[] = [
  {
    role: "Engineer Co-Op",
    company: "Youro",
    companyLogo: "/img/icons/common/youroLogo.png",
    date: "Jan 2024 - Present",
    desc: "Youro redefines urological healthcare, facilitating virtual consultations and streamlined patient-doctor interactions. With intuitive booking, detailed care plans, and real-time chats, it empowers patients and optimizes consultations for doctors. Tailored questionnaires ensure personalized care, revolutionizing the landscape of urological healthcare interactions.",
  },
  {
    role: "Software Engineer II",
    company: "Philips Innovation",
    companyLogo: "/img/icons/common/Philips.jpg",
    date: "Aug 2020 - Dec 2022",
    desc: "I've crafted diverse projects ranging from hybrid cloud solutions to microservice migrations, consistently delivering impactful results. Leveraging technologies like Kubernetes, Cloud Foundry, C#, and Java, I've optimized healthcare operations with real-time patient monitoring applications, streamlined screen configuration tools, enhanced authentication systems, and boosted data accessibility through innovative dashboard solutions, ensuring robust software solutions for complex healthcare challenges.",
  },
  {
    role: "Software Development Intern",
    company: "Simbo.ai",
    companyLogo: "/img/icons/common/simbo.jpeg",
    date: "May 2019 - Dec 2019",
    desc: "During my tenure at Simbo.Ai, I developed a robust CNN model utilizing Keras and TensorFlow, achieving superior accuracy in transcribing speech into phonetics for diverse Indian languages and accents. Additionally, I architected a scalable Django web application tailored for structuring biomedical vocabulary, elevating user engagement through intuitive data visualization and customizable widgets. Collaborated with cross-functional teams, fostering a culture of innovation and driving collective project success.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Counterfeit Product Detection",
    desc: "Implemented a blockchain solution utilizing Solidity, Node.js, Truffle, and Ganache to combat counterfeit products, integrating ERC-20, ERC-721, and ERC-1155 token standards. Ensured secure token transfer through MetaMask and hosted the system on Infura.",
    github: "https://github.com/LOGAN3119/Blockchain",
    link: "https://blockchain-topaz-theta.vercel.app/",
  },
  {
    name: "Medchat Connect",
    desc: "Designed a scalable chat application with centralized communication, optimizing data transmission latency and enhancing client information management for seamless data handling. Improved system stability through control message handling and message buffering mechanisms.",
    github: "https://github.com/sainath0523/youro_backend/tree/PranayWebSock",
  },
  {
    name: "Environment Monitoring",
    desc: "This project involves simulating and monitoring healthcare equipment's environmental conditions. It comprises a sender for data simulation and a receiver for analysis, issuing alerts for temperature and humidity variations. Data is transmitted every 5 minutes, with the receiver programmed to trigger alerts after 30 minutes of no data reception.",
    github: "https://github.com/PranayBunari/EnvironmentalMonitor",
  },
  {
    name: "Music Player",
    desc: "Developed a music player using linked lists, offering users seamless functionalities to add songs, curate playlists, and navigate tracks efficiently. Implemented features enable smooth transition between tracks, including skipping to next or previous songs, while optimizing playlist management.",
    github: "https://github.com/LOGAN3119/Music-Player-",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Prasad Thakar",
    role: "Application Software Leader at Philips",
    feedback:
      "Pranay is an accomplished software developer known for delivering high-quality solutions, I have seen him driving innovation and collaboration for continuous professional advancement.",
    linkedin_Id: "https://www.linkedin.com/in/thakarprasad/",
    linkedin_Photo: "/img/icons/common/prasad.jpeg",
  },
  {
    name: "Baljit Singh",
    role: "Founder & CEO at Simbo.ai",
    feedback:
      "Pranay's proactive leadership, remarkable teamwork, and innovative contributions make him a standout professional poised for success.",
    linkedin_Id: "https://www.linkedin.com/in/blusingh/",
    linkedin_Photo: "/img/icons/common/baljit.jpg",
  },
  {
    name: "Deepti Shrimankar",
    role: "Professor at NIT Nagpur",
    feedback:
      "Mr. Bunari Pranay's exceptional technical prowess in Computer Vision, coupled with articulate communication skills and industry experience, underscores his readiness for his future professional success.",
    linkedin_Id: "https://www.linkedin.com/in/deepti-shrimankar-4829352b/",
    linkedin_Photo: "/img/icons/common/deepti.png",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University at Buffalo",
    subHeader: "Master of Science in Computer Science",
    duration: "Jan 2023 - May 2024",
    desc: "",
    grade: "GPA - 3.83",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Visvesvaraya National Institute of Tech.",
    subHeader: "Bachelor of Technology in Computer Science",
    duration: "Jul 2016 - May 2020",
    desc: "",
    grade: "GPA - 7.80",
    descBullets: [], // Array of Strings
  },
];

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Pranay Bunari",
  description: greetings.description,
  author: "Pranay Bunari",
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-pranay.vercel.app",
  keywords: [
    "Pranay",
    "Pranay Bunari",
    "@LOGAN3119",
    "LOGAN3119",
    "Portfolio",
    "Pranay Portfolio ",
    "Pranay Bunari Portfolio",
  ],
};
