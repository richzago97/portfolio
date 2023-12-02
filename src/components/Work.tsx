"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "@/components/ProjectCard";
import "swiper/css";
import "swiper/css/pagination";

const projectData = [
  {
    image: "/work/api.png",
    category: "back end",
    name: "MKS Challenge",
    description:
      "The proposed challenge involves creating a JWT authentication system and a CRUD API for a movie catalog. Tools and technologies used include TypeScript, Nest.js, TypeORM, Swagger, Docker, PostgreSQL and Redis.",
    link: "https://github.com/richzago97/mks-backend-challenge",
    github: "https://github.com/richzago97/mks-backend-challenge",
  },
  {
    image: "/work/api.png",
    category: "back end",
    name: "Zago Bank",
    description:
      "Zago Bank is a Transaction System, a web application developed in Laravel, which allows users to carry out financial transactions, such as deposits and transfers. It provides an API to manage users and transactions.",
    link: "https://github.com/richzago97/zagobank",
    github: "https://github.com/richzago97/zagobank",
  },
  {
    image: "/work/api.png",
    category: "back end",
    name: "Bandkamp",
    description:
      "This project enables users to register albums and songs, implementing varied access permissions for distinguishing between super users and regular users. It was developed using Python, Django framework, and PostgreSQL database.",
    link: "https://github.com/richzago97/bandkamp",
    github: "https://github.com/richzago97/bandkamp",
  },
  {
    image: "/work/motors-shop.png",
    category: "fullstack",
    name: "Motors Shop",
    description:
      "Web application for buying and selling vehicles. Users can register as customers or advertisers, log in, update their profile information and manage their ads, among others. Used React, chakra ui and Node.js",
    link: "https://github.com/orgs/m6-projeto-final-grupo36/repositories/",
    github: "https://github.com/orgs/m6-projeto-final-grupo36/repositories",
  },
  {
    image: "/work/kenzie-hub.png",
    category: "front end",
    name: "Kenzie Hub",
    description:
      "The Kenzie Hub, powered by React technology, acts as a platform for Kenzie's programmers' portfolios. It facilitates user registration, login, portfolio and project management, user interaction, and the sharing of insights within the developer community.",
    link: "https://kenzie-hub-seven-lake.vercel.app/",
    github: "https://github.com/richzago97/kenzie-hub",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div
          className="max-w-[400px] mx-auto
          xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px]
          flex flex-col justify-center items-center 
          xl:items-start"
        >
          <h2
            className="section-title 
            mb-4"
          >
            Latest Projects
          </h2>
          <p className="subtitle mb-8">
            Explore a diverse showcase of recent projects—from back-end to
            front-end and full-stack development. Swipe or click 'All projects'
            below to view more
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div
          className="xl:max-w-[1000px] xl:absolute right-0
        top-0"
        >
          <Swiper
            className="h-[580px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show Only the first n projects for the slides*/}
            {projectData.slice(0, 5).map((project: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
