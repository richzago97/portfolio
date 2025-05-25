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
         "O desafio proposto envolve a criação de um sistema de autenticação JWT e uma API CRUD para um catálogo de filmes. As ferramentas e tecnologias utilizadas incluem TypeScript, Nest.js, TypeORM, Swagger, Docker, PostgreSQL e Redis.",
      link: "https://github.com/richzago97/mks-backend-challenge",
      github: "https://github.com/richzago97/mks-backend-challenge",
   },
   {
      image: "/work/api.png",
      category: "back end",
      name: "Zago Bank",
      description:
         "Zago Bank é um Sistema de Transações, uma aplicação web desenvolvida em Laravel, que permite aos usuários realizar transações financeiras, como depósitos e transferências. Ele oferece uma API para gerenciar usuários e transações.",
      link: "https://github.com/richzago97/zagobank",
      github: "https://github.com/richzago97/zagobank",
   },
   {
      image: "/work/api.png",
      category: "back end",
      name: "Bandkamp",
      description:
         "Este projeto permite que os usuários cadastrem álbuns e músicas, implementando permissões de acesso variadas para diferenciar superusuários de usuários comuns. Foi desenvolvido utilizando Python, framework Django e banco de dados PostgreSQL.",
      link: "https://github.com/richzago97/bandkamp",
      github: "https://github.com/richzago97/bandkamp",
   },
   {
      image: "/work/motors-shop.png",
      category: "fullstack",
      name: "Motors Shop",
      description:
         "Aplicação web para compra e venda de veículos. Os usuários podem se registrar como clientes ou anunciantes, fazer login, atualizar suas informações de perfil e gerenciar seus anúncios, entre outras funcionalidades. Foram utilizados React, Chakra UI e Node.js.",
      link: "https://github.com/orgs/m6-projeto-final-grupo36/repositories/",
      github: "https://github.com/orgs/m6-projeto-final-grupo36/repositories",
   },
   {
      image: "/work/kenzie-hub.png",
      category: "front end",
      name: "Kenzie Hub",
      description:
         "O Kenzie Hub, desenvolvido com a tecnologia React, funciona como uma plataforma para os portfólios dos programadores da Kenzie. Ele facilita o cadastro de usuários, login, gerenciamento de portfólios e projetos, interação entre usuários e o compartilhamento de conhecimentos dentro da comunidade de desenvolvedores.",
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
                  Últimos projetos
               </h2>
               <p className="subtitle mb-8">
                  Explore uma vitrine diversificada de projetos recentes — desde
                  back-end até front-end e desenvolvimento full-stack. Deslize
                  ou clique em Todos os projetos abaixo para ver mais.
               </p>
               <Link href="/projects">
                  <Button>Todos os projetos</Button>
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
                  {projectData
                     .slice(0, 5)
                     .map((project: any, index: number) => {
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
