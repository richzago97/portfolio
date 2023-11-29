"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import {Pagination} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import ProjectCard from "@/components/ProjectCard"
import "swiper/css"
import "swiper/css/pagination"

const projectData = [
    {
        image: "/work/1.png",
        category: "front end",
        name: "Evolve Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        link: "/",
        github: "/"
    },
    {
        image: "/work/2.png",
        category: "front end",
        name: "Lumina Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        link: "/",
        github: "/"
    },
    {
        image: "/work/3.png",
        category: "front end",
        name: "Ignite Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        link: "/",
        github: "/"
    },
    {
        image: "/work/4.png",
        category: "fullstack",
        name: "Envision Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        link: "/",
        github: "/"
    },
    {
        image: "/work/4.png",
        category: "fullstack",
        name: "Nexa Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        link: "/",
        github: "/"
    },
]
const Work = () => {
  return (
   <section className="relative mb-12 xl:mb-48">
    <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto
    xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px]
    flex flex-col justify-center items-center 
    xl:items-start">
            <h2 className="section-title 
            mb-4">Latest Projects</h2>
            <p className="subtitle mb-8">Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Eum ratione quis, 
                sequi libero vel qui officiis temporibus 
                quidem quod tempore quo adipisci soluta 
                fuga perferendis</p>
            <Link href="/projects">
                <Button>All projects</Button>
            </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0
        top-0">
            <Swiper className="h-[580px]"
            slidesPerView={1} 
            breakpoints={{
                640: {
                    slidesPerView: 2
                }
            }} 
            spaceBetween={30}
            modules={[Pagination]} 
            pagination={{clickable: true}}
            >
                {/* Show Only the first n projects for the slides*/}
                {projectData.slice(0,5).map((project: any, index: number) => {
                    return ( 
                     <SwiperSlide key={index}>
                       <ProjectCard project={project}/>
                     </SwiperSlide>
                    )    
                })}

            </Swiper>
        </div>
    </div>
   </section>
  )
}

export default Work