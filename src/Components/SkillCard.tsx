import React from 'react';
import { Avatar } from "@mantine/core";

// Import images
import Bootstrap from '../../src/Icons/Bootstrap.png';
import C from '../../src/Icons/C.png';
import CSS from '../../src/Icons/CSS.png';
import Express from '../../src/Icons/ExpressJS.png';
import Firebase from '../../src/Icons/Firebase.png';
import Git from '../../src/Icons/Git.png';
import GSAP from '../../src/Icons/GSAP.png';
import HTML from '../../src/Icons/HTML.png';
import Java from '../../src/Icons/Java.png';
import JavaScript from '../../src/Icons/JavaScript.png';
import MaterialUi from '../../src/Icons/MaterialUI.png';
import MongoCompass from '../../src/Icons/MongoDbCompass.png';
import MySql from '../../src/Icons/MySQL.png';
import Node from '../../src/Icons/NodeJS.png';
import PostgressSQL from '../../src/Icons/PostgresSQL.png';
import Postman from '../../src/Icons/Postman.png';
import ReactJS from '../../src/Icons/ReactJS.png';
import Redux from '../../src/Icons/Redux.png';
import SASS from '../../src/Icons/SASS.png';
import TailwindCss from '../../src/Icons/TailwindCSS.png';
import TypeScript from '../../src/Icons/TypeScript.png';
import VSCode from '../../src/Icons/VSCode.png';
import cpp from '../../src/Icons/C++.png'
import python from '../../src/Icons/pyhton.png'

const skillImage: { [key: string]: string } = {
    'HTML': HTML,
    'CSS': CSS,
    'JavaScript': JavaScript,
    'React JS': ReactJS,
    'Redux': Redux,
    'Tailwind CSS': TailwindCss,
    'Material UI': MaterialUi,
    'Bootstrap': Bootstrap,
    'Node JS': Node,
    'Express JS': Express,
    'MySQL': MySql,
    'MongoDB': MongoCompass,
    'Firebase': Firebase,
    'C': C,
    'C++': cpp,
    'Java': Java,
    'Python': python,
    'Git': Git,
    'Github': Git,
    'VS Code': VSCode,
    'Postman': Postman,
    'MongoDB Compass': MongoCompass
};

// Define interface for SkillBadge props
interface SkillBadgeProps {
    skills: string[];
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skills }) => {
    return (
        <>
            {skills.map((skill, index) => (
                <div key={index} className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1">
                    <img className="w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1" src={skillImage[skill]} alt={`${skill} icon`} />
                    <div className="text-textColor text-xl font-medium sm-mx:text-lg xs-mx:text-sm">{skill}</div>
                </div>
            ))}
        </>
    );
};

// Define interface for SkillCard props
interface SkillCardProps {
    title: string;
    skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-[47%] shadow-[0_0_10px_0_#64FFDA50] rounded-3xl mb-3 border border-primaryColor p-5 bs-mx:p-3 sm-mx:w-full">
            <div className="text-3xl mb-4 text-white text-center sm-mx:text-2xl xs-mx:text-xal font-bold">{title}</div>
            <div className="flex gap-3 bs-mx:gap-2 justify-center flex-wrap">
                <SkillBadge skills={skills} />
            </div>
        </div>
    );
};

export default SkillCard;