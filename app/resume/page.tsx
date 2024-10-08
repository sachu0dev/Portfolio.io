"use client"

import { Description } from '@radix-ui/react-dialog'
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'
import { SiSocketdotio } from "react-icons/si";

const about = {
  title: "About me",
  description: "I'm a full-stack web developer skilled in JavaScript, TypeScript, React, Redux, Node.js, and Express, with experience in MongoDB, PostgreSQL, and DevOps tools like AWS and Cloudflare Workers, always striving for success and continuous improvement.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sushil Kumar",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 6283816638",
    },
    {
      fieldName: "Linkedin",
      fieldValue: "sachu0dev",
    },
    {
      fieldName: "Email",
      fieldValue: "sushil.dev.in@gmail.com",
    },
    {
      fieldName: "Natianality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },

  ]
}

const experience = {
  icon: '../assets/resume/badge.svg',
  title: "My experience",
  Description: "I'm a full-stack web developer skilled in JavaScript, TypeScript, React, Redux, Node.js, and Express, with experience in MongoDB, PostgreSQL, and DevOps tools like AWS and Cloudflare Workers, always striving for success and continuous improvement.",
  items: [
    {
      company: "Grovyo Platforms Pvt. Ltd.",
      position: "Full Stack Developer Intern",
      duration: "2024 - Present",
    },
  ]
}

const education = {
  icon: "../assets/resume/cap.svg",
  title: "My education",
  description: "I'm a full-stack web developer skilled in JavaScript, TypeScript, React, Redux, Node.js, and Express, with experience in MongoDB, PostgreSQL, and DevOps tools like AWS and Cloudflare Workers, always striving for success and continuous improvement.",
  items: [
    {
      institution: "100xdevs Online education community",
      degree: "Web3 Developer",
      duration: "2024",
    },
    {
      institution: "100xdevs Online education community",
      degree: "Full Stack Web Developer",
      duration: "2023",
    },
    {
      institution: "Guru Nanak dev University, Pathankot",
      degree: "Bechalor in Computer Application",
      duration: "2021 - 2024",
    },
    {
      institution: "Government Modal School, Pathankot",
      degree: "11th-12th Standard (non-medical)",
      duration: "2018 - 2020",
    },
    
  ]
}

const skills = {
  title: "My skills",
  description: "I'm a full-stack web developer skilled in JavaScript, TypeScript, React, Redux, Node.js, and Express, with experience in MongoDB, PostgreSQL, and DevOps tools like AWS and Cloudflare Workers, always striving for success and continuous improvement.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS", 
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },{
      icon: <SiSocketdotio />,
      name: "Socket.io",
    }
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import { ScrollArea} from '@/components/ui/scroll-area'
import { motion } from "framer-motion"


const Resume = () => {
  return <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.4, duration: 0.4, ease: "easeIn"}}} className='min-h-[80vh] flex justify-center py-12 xl:py-0'>
    <div className='container mx-auto'>
      <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
        <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
        <TabsTrigger value='experience'>Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value='skills'>Skills</TabsTrigger>
        <TabsTrigger value='about'>About me</TabsTrigger>
        </TabsList>
        <div className='min--[70vh] w-full'>
          <TabsContent value="experience" className='w-full h-full'>
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{experience.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.Description}</p>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience.items.map((item, index)=> {
                    return (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>

                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" className='w-full h-full'>
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index)=> {
                    return (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>

                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className='w-full h-full'>
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>{skills.skillList.map((skill, index)=> {
                return <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group'>
                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              })}</ul>
            </div>
          </TabsContent>
          <TabsContent value="about" className='w-full text-center xl:text-left'>
            <div className='flex flex-col gap-[30px]'>
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]'>
                {about.info.map((item,index)=> {
                return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                  <span className='text-white/60'>{item.fieldName}</span>
                  <span className='text-xl'>{item.fieldValue}</span>
                </li>
              })}</ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
};

export default Resume;
