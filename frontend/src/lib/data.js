import ProfileImage from "../assets/image.jpg";

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
      "I’m an AI Student and Machine Learning enthusiast. I enjoy turning complex datasets into simple, intelligent, and impactful solutions.",
    descriptionP2:
      "My job is to build models that are functional and accurate, but also ethical and transparent. I add a technical edge to your projects by bridging the gap between raw algorithms and real-world needs. My aim is to bring your data to life through the most innovative AI techniques.",
    profileImage: ProfileImage,
    cvLink: "/path-to-your-cv.pdf", // Add CV link here
  },
  about: {
    // Intro Tab
    intro: {
      title: "Passionate AI Learner",
      subtitle: "Bridging theory and real-world impact.",
      paragraphs: [
        "I am currently a Bachelor of Computer Science student specializing in AI at Swinburne University. My journey started with a fascination for how data can predict the future.",
        "I focus on Deep Learning and Computer Vision, always striving to build models that are not just accurate, but also ethical and transparent.",
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
        date: "June 2025",
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI - Coursera",
        link: "https://www.coursera.org/...",
      },
      {
        id: 2,
        date: "June 2025",
        title: "Generative AI with LLMs",
        issuer: "DeepLearning.AI - Coursera",
        link: "https://www.coursera.org/...",
      },
    ],

    // Hobbies Tab
    hobbies: {
      title: "Beyond Coding",
      tags: ["Photography", "Machine Learning", "Traveling", "Chess", "Music"],
      description:
        "When I'm not in front of a screen, I love capturing moments through my lens or exploring new places. I believe a balanced life fuels creativity in technical work.",
      images: [null, null], // You can replace with imported image variables
    },

    // Photos Tab
    photos: [
      {
        id: 1,
        src: "https://images.unsplash.com/...",
        title: "Working on AI Project",
        description:
          "Developing a computer vision model for face recognition...",
        location: "Hanoi, Vietnam",
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
      link: "/project-details/1",
    },
    {
      id: 2,
      title: "Face Recognition & Anti-Spoofing",
      description:
        "A robust security system capable of verifying identities while detecting liveness to prevent photo/video spoofing attacks.",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000",
      tech: ["TensorFlow", "Keras", "Deep Learning", "React"],
      link: "/project-details/2",
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio built to showcase AI projects and skills. Features smooth animations and a dark-mode tech aesthetic.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
      tech: ["React.js", "Tailwind CSS", "Vite", "Lucide Icons"],
      link: "/project-details/3",
    },
    {
      id: 4,
      title: "Indoor Localization System",
      description:
        "Research project using Whisper ASR and Clip-ViT to navigate complex indoor environments using audio-visual cues.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
      tech: ["PyTorch", "Whisper AI", "ChromaDB", "FastAPI"],
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
  blogs: {
    intro:
      "Sharing my journey in Artificial Intelligence and Software Development.",
    posts: [
      {
        id: 1,
        title: "Building an Anti-Spoofing Face ID System",
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
        excerpt:
          "A deep dive into how I implemented liveness detection using OpenCV and PyTorch to prevent photo attacks.",
        date: "Jan 05, 2026",
        readTime: "8 min read",
        tags: ["Computer Vision", "Security", "Deep Learning"],
        slug: "anti-spoofing-face-id",
      },
      {
        id: 2,
        title: "Optimizing YOLOv8 for Edge Devices",
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
        excerpt:
          "Techniques I learned to make object detection models run faster on Raspberry Pi without losing accuracy.",
        date: "Dec 22, 2025",
        readTime: "5 min read",
        tags: ["Edge AI", "Optimization"],
        slug: "optimizing-yolov8",
      },
      {
        id: 3,
        title: "Why I Learned React as an AI Engineer",
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
        excerpt:
          "Frontend skills are underrated for Data Scientists. Here is how building UI helps me showcase my models better.",
        date: "Nov 15, 2025",
        readTime: "4 min read",
        tags: ["Career", "Web Dev"],
        slug: "react-for-ai",
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
