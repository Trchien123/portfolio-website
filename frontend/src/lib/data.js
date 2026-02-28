import ProfileImage from "../assets/profile_image.jpg";
import liverpoolImg from '../assets/liverpool.jpg';
import bookImg from '../assets/book.jpg';
import musicImg from '../assets/music.jpg';
import hackathonImg from '../assets/hackathon.jpg';
import catImg from '../assets/cat.jpg';

import { 
  Cpu, 
  Globe, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaKaggle 
} from "react-icons/fa6";

import { IoMdMail } from "react-icons/io";

export const portfolioData = {
  hero: {
    intro: "Hiiii, my name is",
    name: "Huynh Trung Chien.",
    descriptionP1:
      "I’m an AI Student and Machine Learning enthusiast. I'm interested in working with data, machine learning, and NLP as an AI Engineer.",
    descriptionP2:
      "My job is to build models that are accurate and functional, and follow ethical standards. I translate complex algorithms into ethical practical solutions that meet real business and seamlessly integrate them to live software systems.",
    profileImage: ProfileImage,
    cvLink: "/path-to-your-cv.pdf", // Add CV link here
  },
  about: {
    // Intro Tab
    intro: {
      title: "Passionate AI Learner",
      subtitle: " - Turning complex theory into working software.",
      paragraphs: [
        "I am currently a Bachelor of Computer Science student specializing in AI at Swinburne University. While I explored majors like Data Science and Cybersecurity, I chose this path because I realized that AI has the unique potential to change how we solve the world's toughest challenges. Moreover, I love to challenge myself, and with the difficulty of studying AI, it provides the perfect playground to test my limits and sharpen my problem-solving skills.",
        "My main focus is on Machine Learning, Computer Vision, and LLM. Besides that, currently, I am actively expanding my skills in software architecture and system desig. I believe this engineering foundation is key to transforming experimental AI models into robust, real-world solutions.",
        "Outside of coding, I am deeply involved in tech communities and hackathons to sharpen my problem-solving skills.",
      ],
    },

    // Education Tab
    education: [
      {
        year: "2024 - Present",
        degree: "Bachelor of Computer Science - AI",
        institution: "Swinburne University of Technology",
        gpa: "3.4/4.0",
        awardsTitle: "🏆 Best Performance Awards:",
        awards: [
          { name: "Introduction to Programming", code: "COS10009" },
          { name: "Networks and Switching", code: "TNE10006" },
          { name: "Accounting Info for Decision Making", code: "ACC10007" },
        ],
      },
      {
        year: "2021 - 2024",
        degree: "High School Diploma",
        institution: "Tran Phu High School",
        gpa: "9.0/10 (Excellent Ranking)",
        awards: [],
      },
    ],

    // Achievements Tab
    achievements: [
      {
        title: "Top 3 VNPT AI HACKATHON",
        year: "2025",
        description: "Top 3 VNPT AI HACKATHON track the dreamer.",
        icon: "🏆",
      },
      {
        title: "Greenovation Conference",
        year: "2025",
        description:
          "Greenovation Conference held at Swinburne University of Technology.",
        icon: "📜",
      },
    ],

    // Certificates Tab
    certificates: [
      {
        id: 1,
        date: "Nov 2025",
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI - Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WTT0IQ5AJ5Y2",
      },
      {
        id: 2,
        date: "May 2025",
        title: "Advanced Learning Algorithm",
        issuer: "DeepLearning.AI - Coursera",
        link: "https://www.coursera.org/account/accomplishments/records/USYFDBD4D2US.",
      },
      {
        id: 3,
        date: "August 2025",
        title: "Play It Safe: Manage Security Risks",
        issuer: "Google - Coursera",
        link: "https://www.coursera.org/account/accomplishments/records/7O5UEO30IWV8",
      },
      {
        id: 4,
        date: "June 2025",
        title: "Generative AI with Large Language Models",
        issuer: "DeepLearning.AI, Amazon Web Services - Coursera",
        link: "https://www.coursera.org/account/accomplishments/records/F2IYR4LMQJJC",
      },
      {
        id: 5,
        date: "July 2025",
        title: "Foundations of Cybersecurity",
        issuer: "Google - Coursera",
        link: "https://www.coursera.org/account/accomplishments/records/T1GO910DL339",
      },
      {
        id: 6,
        date: "June 2025",
        title: "Mathematics for Machine Learning Specialization",
        issuer: "Imperial College London - Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/BAQ0O05GLNMY",
      },
      {
        id: 7,
        date: "April 2025",
        title: "Supervised Machine Learning: Regression and Classification ",
        issuer: "DeepLearning.AI - Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/ZN8PM9RGCCIZ",
      },
      {
        id: 8,
        date: "December 2024",
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco Networking Academy",
        link: "https://www.linkedin.com/in/trung-chien-huynh-73a196360/details/certifications/",
      },
    ],

    // Hobbies Tab
    hobbies: {
      title: "Beyond Coding",
      tags: ["Games", "Football", "Music", "Reading"],
      description:
        "When I'm not in front of a screen, I love watching Liverpool, which is my favorite club, playing in the weekend. Besides that, I am also interested in playing games with my younger brother as well as listening to music and reading books.",
      images: [liverpoolImg, musicImg],
    },

    // Photos Tab
    photos: [
      {
        id: 1,
        src: hackathonImg,
        title: "VNPT AI Hackathon - Hanoi",
        description:
          "We got the third prize in the VNPT AI Hackathon held in Hanoi.",
        location: "Hanoi, Vietnam",
      },
      {
        id: 2,
        src: catImg,
        title: "My Cutiee Cat",
        description:
          "",
        location: "Ho Chi Minh, Vietnam",
      },
    ],

    // Sidebar/Connect Section
    socials: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/huynh.trung.chien.2025",
        icon: FaFacebook,
        color: "hover:text-blue-500 hover:border-blue-500",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/tchiennn_0708/",
        icon: FaInstagram,
        color: "hover:text-pink-500 hover:border-pink-500",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/trung-chien-huynh-73a196360/",
        icon: FaLinkedin,
        color: "hover:text-blue-400 hover:border-blue-400",
      },
      {
        name: "Github",
        url: "https://github.com/Trchien123",
        icon: FaGithub,
        color: "hover:text-white hover:border-white",
      },
      {
        name: "Kaggle",
        url: "https://www.kaggle.com/hunhtrungchin",
        icon: FaKaggle,
        color: "hover:text-[#20BEFF] hover:border-[#20BEFF]",
      },
      {
        name: "Email",
        url: "mailto:huynhtrungchienltt@gmail.com",
        icon: IoMdMail,
        color: "hover:text-[#EA4335] hover:border-[#EA4335]",
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: "Accessible Living Support System",
      description:
        "An intelligent assistance system designed for blind individuals. It uses computer vision to detect obstacles and recognizes faces to assist in daily navigation.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      tech: ["Python", "OpenCV", "YOLOv8", "IoT"],
      link: "https://github.com/mtoanchoicode/ALISS-Accessible-Living-Support-System-with-Intelligent-Assistance",
    },
    {
      id: 2,
      title: "Face Recognition & Anti-Spoofing",
      description:
        "This project is being uploaded soon.",
      image:
        "https://plus.unsplash.com/premium_photo-1700830452915-434970100217?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["TensorFlow", "Keras", "Deep Learning", "React"],
      link: "#",
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio built to showcase AI projects and skills. Features smooth animations and a dark-mode tech aesthetic.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
      tech: ["React.js", "Tailwind CSS", "Vite", "Lucide Icons"],
      link: "https://github.com/Trchien123/portfolio-website",
    },
    {
      id: 4,
      title: "Maze Searching Algorithm",
      description:
        "A web-based visualization tool and command-line engine for solving complex mazes using classic Artificial Intelligence search algorithms like BFS, DFS, A*, and more.",
      image:
        "https://images.unsplash.com/photo-1752154344437-44bd7480e8ee?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React.js", "Vite", "Python", "FastAPI"],
      link: "https://github.com/Trchien123/cos30019-introtoai",
    },
    {
      id: 5,
      title: "Traffic Flow Prediction System",
      description:
        "This project is being uploaded soon.",
      image:
        "hhttps://images.unsplash.com/photo-1680969295989-43b229a4fce3?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["TensorFlow", "Keras", "Deep Learning", "React"],
      link: "#",
    },
  ],
  skills: {
    intro:
      "My core strength lies in Machine Learning, while I am actively expanding my skillset in Web Development.",
    skillSets: [
      {
        id: "ai",
        title: "Artificial Intelligence & Data",
        icon: Cpu,
        description:
          "Focusing on Computer Vision and Deep Learning algorithms.",
        proficient: [
          "Python",
          "TensorFlow / Keras",
          "OpenCV",
          "Pandas & NumPy",
          "Scikit-learn",
          "Machine Learning",
          "Deep Learning",
          "Transformers (LLMs)",
        ],
        learning: [
          "C++ (Basics)",
          "PyTorch",
          "Model Deployment",
          "System Design",
          "Reinforcement Learning",
          "MLOps",
        ],
      },
      {
        id: "web",
        title: "Web Development",
        icon: Globe,
        description:
          "Exploring frontend & backend to build user interfaces for AI apps.",
        proficient: [],
        learning: [
          "HTML5 & CSS3",
          "React.js",
          "Tailwind CSS",
          "JavaScript (ES6+)",
          "Git & GitHub",
          "Streamlit",
        ],
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    subtitle:
      "Want to discuss about any project or just want to say hi? Feel free to contact me!",
    details: [
      {
        label: "Email",
        value: "huynhtrungchienltt@gmail.com",
        href: "mailto:huynhtrungchienltt@gmail.com",
        icon: Mail,
      },
      {
        label: "Phone",
        value: "+84 394 394 694",
        href: "tel:+84394394694",
        icon: Phone,
      },
      {
        label: "Location",
        value: "Ho Chi Minh City, Vietnam",
        href: "https://maps.google.com/?q=Ho+Chi+Minh+City",
        icon: MapPin,
      },
    ],
  },
};
