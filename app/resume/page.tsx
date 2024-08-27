"use client"

import { Description } from '@radix-ui/react-dialog'
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'

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
      fieldValue: "India",
    },
    {
      fieldName: "Freelance and Work",
      fieldValue: "Available",
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
      degree: "Web3 Developer Intern",
      duration: "2024",
    },
    {
      institution: "Guru Nanak dev University, Pathankot",
      degree: "Bechalor in Computer Application",
      duration: "2021 - 2024",
    },
    {
      institution: "100xdevs Online education community",
      degree: "Full Stack Web Developer",
      duration: "2023",
    },
    {
      institution: "Government Modal School, Pathankot",
      degree: "Full Stack Web Developer",
      duration: "2023",
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
    }
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import { ScrollArea} from '@/components/ui/scroll-area'
import { motion } from "framer-motion"


const Resume = () => {
  return <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.4, duration: 0.4, ease: "easeIn"}}} className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
    <div className='container mx-auto'>
      <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
        <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
        <TabsTrigger value='experience'>Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value='skills'>Skills</TabsTrigger>
        <TabsTrigger value='about'>About me</TabsTrigger>
        </TabsList>

        <div className='min--[70vh] w-full'>
          <TabsContent value="experience" className='w-full'>
            experience
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
};

export default Resume;
