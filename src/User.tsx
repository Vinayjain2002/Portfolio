import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Info = {
    name: "Vinay Jain",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Python Developer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}

const ProjectInfo = [
    {
        title: "Chatting App",
        desc: "Introducing our chat app, built on the powerful MERN stack and powered by Socket.io for real-time messaging. Enjoy instant communication with friends through secure private chats or lively group discussions, all within a user-friendly interface. Customize your profile, access your message history, and receive real-time notifications, ensuring you stay connected anytime, anywhere. Our fully responsive design means you can chat seamlessly across all devices. Join us for a secure, enjoyable, and future-ready chatting experience!",
        image: "Ekart.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Socet.IO", "MongoDB"],
        link: "https://let-talk-web.vercel.app",
        github: "https://github.com/Vinayjain2002/let-Talk-Web"
    },
    {
        title: "Amazon Clone",
        desc: "Welcome to our Amazon clone, a feature-rich e-commerce platform designed to provide an exceptional online shopping experience. Browse through a vast selection of products with intuitive search and filtering options, all while enjoying a sleek, user-friendly interface. With secure payment processing and real-time order tracking, your shopping journey is both safe and convenient. Create personalized accounts to manage your orders, wishlists, and reviews. Plus, enjoy seamless mobile access with our fully responsive design. Discover unbeatable deals and a marketplace tailored to your needs in this dynamic online shopping destination!",
        image: "Facebook.png",
        live: false,
        technologies: ["React", "Redux","MongoDB", "Tailwind", "TypeScript"],
        link: "",
        github: ""
    },
    {
        title: "Social Media Website",
        desc: "Welcome to our social media platform, a vibrant space where connections flourish and creativity thrives. Share your thoughts, photos, and videos with friends and followers while exploring a diverse community of like-minded individuals. Enjoy real-time interactions through comments and likes, and stay updated with personalized feeds tailored to your interests. Our user-friendly interface makes it easy to navigate, while robust privacy settings ensure your content is secure. Connect through private messaging or join groups to engage in discussions. With seamless mobile access and exciting features on the horizon, dive into a social experience designed for everyone!        ",
        image: "Spotify.png",
        live: false,
        technologies: ["React",  "Tailwind",  "MongoDB", "Node.Js"],
        link: "",
        github: ""
    },
    {
        title: "Let Travel",
        desc: "The Hotel Booking Web Application, built using the MERN stack (MongoDB, Express.js, React, Node.js) and GraphQL, provides an efficient platform for users to search, book, and manage hotel reservations. With GraphQL, users can quickly find hotels based on various criteria like location and price. They can view available rooms, make bookings, and check their reservation history. Administrators can add new hotels, manage room inventories, and view all hotel bookings. The system allows seamless integration for hotel management, from adding new hotels to managing room availability, creating a dynamic and user-friendly experience for both guests and administrators.",
        image: "Travel.png",
        live: false,
        technologies: ["React", "Node.js", "GraphQL", "Express"],
        link: "https://hotel-booking-ashy-mu.vercel.app",
        github: "https://github.com/Vinayjain2002/Hotel-Booking"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "Material UI", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "Python"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]
const socialLinks = [
    { link: "https://github.com/Vinayjain2002", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/er-vinayjain", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/vinay_jain_61787/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Network & Routing Intern",
        company: "Ciena, India",
        date: "May 2024 - September 2024",
        desc: "Learned Metro routing and created Python scripts for automating system health checks, which run on CLIand log data for future reference.",
        skills: ["Python", "Computer Network", "MetroRouting", "Automation Testing", "JIRA"]
    },
    {
        role: "Software Intern",
        company: "Ciena, India",
        date: "August 2023 - October 2023",
        desc: "Enhanced software testing by implementing Unit test and Mockito in Python, increasing overall Functional test coverage from 58% to 92%.",
        skills: ["Python", "Software Applications", "Unit Tesing"]
    },
    {
        role: "Web  Intern",
        company: "Suntek It solutions, Noida",
        date:"May 2023 - July 2023",
        desc: "Developed two dynamic websites using the MERN stack, gaining expertise in backend functionality and seamless data management.",
        skills: ["MERN Stack", "Tailwind Css", "Redux"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "html5",
    "css3",
    "mongodb",
    "express",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "testinglibrary",
    "jest",
    "docker",
    "git",
    "jira",
    "github",
    "visualstudiocode",
    "androidstudio",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };