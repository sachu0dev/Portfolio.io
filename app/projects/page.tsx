"use client";
import React, { useState } from "react";
import {motion} from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import Safari from "@/components/magicui/safari";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BorderBeam } from "@/components/magicui/border-beam";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Kabutar: Real-Time Chat Application",
    description: "Kabutar: Real-time chat app with React, Node.js, Express, Socket.IO, Cloudinary, and optimized with Redux Toolkit.",
    stack: ["React", "Node.js", "Express", "Socket.IO", "Cloudinary", "Redux Toolkit"],
    image: "/assets/projects/p1.png",
    live: "https://kabutar-chat-app.vercel.app",
    github: "https://github.com/sachu0dev/Kabutar-Chat-app"
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Typing Panda: Vanila Fullstack Typing app",
    description: "Typing Panda: Interactive game to enhance typing skills with customizable features for all skill levels.",
    stack: ["Html 5", "CSS 3", "JavaScript", "Node.js", "Express", "MongoDB"],
    image: "/assets/projects/p2.png",
    live: "https://typingpanda.netlify.app/",
    github: "https://github.com/sachu0dev/Typing_Panda"
  },
  {
    num: "03",
    category: "Frontend",
    title: "Masalamandi: Swiggy API Integration Project.",
    description: "Masalamandi: Integrated Swiggy API, developed Redux cart, improved data accuracy by 95%, and boosted engagement by 40%.",
    stack: ["React", "Tailwind CSS", "Redux Toolkit"],
    image: "/assets/projects/p3.png",
    live: "https://masalamandi.vercel.app",
    github: "https://github.com/sachu0dev/MasalaMandi"
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Inspiration Blog",
    description: "Developed a full-stack blog platform with React, TypeScript, and Cloudflare Workers, boosting performance, engagement, and database efficiency.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Cloudflare", "Redux Toolkit"],
    image: "/assets/work/thumb1.png",
    live: "",
    github: ""
  },
  {
    num: "05",
    category: "Frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a repellendus, porro quia.",
    stack: ["React", "Node.js", "Express", "Socket.IO", "Cloudinary", "Redux Toolkit"],
    image: "/assets/work/thumb1.png",
    live: "",
    github: ""
  },
]


const Projects = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper)=> {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }



  return <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.4, ease: "easeIn"}}}
  className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline bg-clip-text bg-gradient-to-r from-primary to-accent">{project.num}</div>
          </div>
          <h2 className="text-[28px] font-bold leading-none text-white/60 group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
          <h3 className="text-4xl font-bold text-white group-hover:text-accent transition-all duration-500">{project.title}</h3>
          <p className="text-white/60">{project.description}</p>
          <ul className="flex gap-4 flex-wrap">
            {project.stack.map((item, index)=> {
              return <li key={index} className="text-xl text-accent">{item}{index !== project.stack.length - 1 && ","}</li>
            })}
          </ul>
          <div className="border border-white/20"></div>
          <div className="flex items-center gap-4">
            <Link href={project.live} target="_blank">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link href={project.github} target="_blank">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
          </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className="mb-12" onSlideChange={handleSlideChange}>
            {projects.map((item, index)=> {
              return <SwiperSlide key={index} className="w-full">
                <div className="relative w-full h-full">
                <Safari
                    url="magicui.design"
                    className="size-full relative group flex justify-center items-center"
                    src={item.image}
                  />
                <BorderBeam size={250} duration={12} delay={9} />
                </div>
              </SwiperSlide>
            })}
            <WorkSliderBtns
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center transition-all items-center rounded-sm"
              iconStyles="text-[22px]"
            />
          </Swiper>
        </div>
      </div>
    </div>
    </motion.section>
};

export default Projects;
 