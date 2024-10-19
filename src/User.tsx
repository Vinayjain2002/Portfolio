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
        link: "https://code-mars.github.io/Ekart/",
        github: "https://github.com/Code-Mars/Ekart/"
    },
    {
        title: "Amazon Clone",
        desc: "Welcome to our Amazon clone, a feature-rich e-commerce platform designed to provide an exceptional online shopping experience. Browse through a vast selection of products with intuitive search and filtering options, all while enjoying a sleek, user-friendly interface. With secure payment processing and real-time order tracking, your shopping journey is both safe and convenient. Create personalized accounts to manage your orders, wishlists, and reviews. Plus, enjoy seamless mobile access with our fully responsive design. Discover unbeatable deals and a marketplace tailored to your needs in this dynamic online shopping destination!",
        image: "Facebook.png",
        live: false,
        technologies: ["React", "Redux","MongoDB", "Tailwind", "TypeScript"],
        link: "https://github.com/Code-Mars/Facebook-Clone",
        github: "https://github.com/Code-Mars/Facebook-Clone"
    },
    {
        title: "Social Media Website",
        desc: "Welcome to our social media platform, a vibrant space where connections flourish and creativity thrives. Share your thoughts, photos, and videos with friends and followers while exploring a diverse community of like-minded individuals. Enjoy real-time interactions through comments and likes, and stay updated with personalized feeds tailored to your interests. Our user-friendly interface makes it easy to navigate, while robust privacy settings ensure your content is secure. Connect through private messaging or join groups to engage in discussions. With seamless mobile access and exciting features on the horizon, dive into a social experience designed for everyone!        ",
        image: "Spotify.png",
        live: false,
        technologies: ["React",  "Tailwind",  "MongoDB", "Node.Js"],
        link: "https://github.com/Code-Mars/Spotify-Clone",
        github: "https://github.com/Code-Mars/Spotify-Clone"
    },
    {
        title: "Travel Tracker",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Travel.png",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://github.com/Code-Mars/Travel-Tracker",
        github: "https://github.com/Code-Mars/Travel-Tracker"
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
    { link: "https://github.com/Code-Mars", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/chandrabhan-maurya", icon: IconBrandLinkedin },
    { link: "https://www.linkedin.com/in/chandrabhan-maurya", icon: IconBrandLinkedin },
    { link: "https://www.linkedin.com/in/chandrabhan-maurya", icon: IconBrandLinkedin },

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