"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaPython, FaAws, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import {SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import Link from "next/link";
// about data
const about = {
    title: "About Me",
    description: "",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Ezer Patlan",
        },
        {
            fieldName: "Email",
            fieldValue: "ezer204@gmail.com",
        },
        {
            fieldName: "Experience",
            fieldValue: "14+ Years",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Spanish",
        },
        {
            fieldName: "Nationality",
            fieldValue: "U.S. Citizen",
        },
    ]
};

// experience data

const experience = {
    icon: '/assests/resume/badge.svg',
    title: 'My experience',
    description: 'I work in academia and IT technology in a variety of jobs related to research, data analytics, and machine learning.',
    items: [
        {
            company: "AI4Business at San Diego State University (SDSU)",
            position: "Research Student",
            duration: "2024 - Present" 
        },
        {
            company: "AI Headstarter",
            position: "Software Developer Fellow",
            duration: "Summer 2024" 
        },
        {
            company: "The Tech Cadets",
            position: "Software Developer Student",
            duration: "Summer 2024" 
        },
        {
            company: "KForce / HP Inc.",
            position: "Software QA Developer",
            duration: "2021 - 2024" 
        },
        {
            company: "US Geological Survey",
            position: "Geophysicst post-doc research fellow",
            duration: "2016 - 2017" 
        },
    ]
};


// education data

const education = {
    icon: "/assests/resume/cap.svg",
    title: "My education",
    description: 'I am currently pursuing a Master of Science in Computer Science at SDSU, and completed three degrees in Geophysics.',
    items: [
        {
            institution: "San Diego State University (SDSU)",
            degree: "Master of Science in Computer Science",
            duration: "2023 - Present" 
        },
        {
            institution: "The University of Texas at El Paso (UTEP)",
            degree: "Doctor of Philosophy in Geological Science",
            duration: "2011 - 2016" 
        },
        {
            institution: "The University of Texas at El Paso (UTEP)",
            degree: "Master of Science in Geophysics",
            duration: "2008 - 2011" 
        },
        {
            institution: "The University of Texas at El Paso (UTEP)",
            degree: "Bachelor of Science in Geophysics",
            duration: "2002 - 2008" 
        },
    ]
};

const certification = {
    icon: "/assests/resume/cap.svg",
    title: "My Certifications",
    description: 'I obtained three certifications in the field of technology, AI, cloud infrastructure, and web development.',
    items: [
        {
            institution: "Oracle",
            degree: "Certified Oracle Cloud Infrastructure 2024 Generative AI Professional",
            linkd: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=342C5CF7D6BCD0DE8452494C00D01BBC1DCE5D1E6716DF513DF18526F7C620B2",
            credential: "View my credential",
            duration: "2024" 
        },
        {
            institution: "AT&T",
            degree: "Certified AT&T 2024 Technology Academy",
            linkd: "https://www.credly.com/badges/80689c4b-174b-4f04-8a3d-462cd28d21c4/linked_in_profile",
            credential: "View my credential",
            duration: "2024" 
        },
        {
            institution: "San Diego State University (SDSU)",
            degree: "Certified Advanced Web and Mobile Development Application",
            linkd: "https://cs.sdsu.edu/about/",
            credential: "View my credential",
            duration: "2019" 
        },
    ]
};

const skills = {
    title: "My skills",
    description: "I have master twelve programming languages and tools to help me build web applications, data analysis, and cloud infrastructure.",
    skillList: [
        {
            icon: <FaPython />,
            name: "python",
        },
        {
            icon: <TbSql />,
            name: "SQL",
        },
        {
            icon: <BiLogoMongodb />,
            name: "mongodb",
        },
        {
            icon: <IoLogoTableau />,
            name: "tableau",
        },
        {
            icon: <FaAws />,
            name: "AWS",
        },
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
    Tooltip,
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger, 
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
             }}
             className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience" 
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto
                     xl:mx-0 gap-6"
                    >
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="certification">Certification</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* Content */}
                    <div className="min-h-[70vh] w-full">

                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Certification */}
                        <TabsContent value="certification" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{certification.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {certification.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {certification.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-5">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[460px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <Link href={item.linkd}>
                                                            
                                                            <p className="text-white/60">{item.credential}</p>
                                                            
                                                        </Link>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index} >
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] round-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid gird-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;