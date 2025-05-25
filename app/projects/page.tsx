"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";

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
   {
      image: "/projects/burguer-kenzie.png",
      category: "front end",
      name: "Burguer Kenzie",
      description:
         "Este projeto foi criado para simular o site de um restaurante de hambúrgueres, com o objetivo de implementar funcionalidades e estilos utilizando React.JS e Styled Components. O projeto utilizou uma API para acessar a lista de produtos e permitiu a simulação de um carrinho de compras.",
      link: "https://hamburguer-kenzie.vercel.app/",
      github: "https://github.com/richzago97/reactjs-hamburgueria",
   },
   {
      image: "/work/api.png",
      category: "back end",
      name: "Kenzie Buster",
      description:
         "Este projeto teve como objetivo criar uma aplicação de gerenciamento de usuários, filmes e compras, incorporando autenticação e controle de permissões de acesso a diferentes rotas da aplicação. A aplicação foi desenvolvida em Python, utilizando o framework Django, que oferece uma estrutura sólida para o desenvolvimento web.",
      link: "https://github.com/richzago97/kenzie-Buster",
      github: "https://github.com/richzago97/kenzie-Buster",
   },
   {
      image: "/work/api.png",
      category: "back end",
      name: "CRUD Users + Admin",
      description:
         "É uma aplicação desenvolvida em Node.js, utilizando JavaScript como linguagem principal. O objetivo do projeto é oferecer um serviço CRUD para gerenciamento de usuários, com a adição de funcionalidades de permissões de administrador.",
      link: "https://github.com/richzago97/crud-usuarios-s1-13",
      github: "https://github.com/richzago97/crud-usuarios-s1-13",
   },
   {
      image: "/work/api.png",
      category: "back end",
      name: "Kimoveis",
      description:
         "Desenvolvi um back-end em TypeScript utilizando Node.js e Docker para uma imobiliária, com rotas categorizadas para gerenciamento de propriedades, agendamentos e sessões de usuários. Implementei middlewares para autenticação de usuários, tratamento de erros e tarefas administrativas.",
      link: "https://github.com/richzago97/kimoveis-typeorm-s5-11",
      github: "https://github.com/richzago97/kimoveis-typeorm-s5-11",
   },
   {
      image: "/work/api.png",
      category: "back end",
      name: "CRUD Users + TypeORM",
      description:
         "Desenvolvi um serviço back-end utilizando TypeORM para gerenciar operações de usuários, implementando funcionalidades CRUD. Incluí middlewares como autenticação de usuários, verificações administrativas e validação de sessões nas rotas.",
      link: "https://github.com/richzago97/crud-typeorm-s4-14",
      github: "https://github.com/richzago97/crud-typeorm-s4-14",
   },

   {
      image: "/work/api.png",
      category: "back end",
      name: "Product and Category Management",
      description:
         "Desenvolvi um serviço back-end de Gerenciamento de Produtos e Categorias, fornecendo uma API para operações relacionadas a produtos e categorias. Foi construído com Node.js, Express.js e Docker para criar os endpoints da API, utilizando PostgreSQL como banco de dados para armazenar os dados de produtos e categorias.",
      link: "https://github.com/richzago97/produtos-categorias-s3-17",
      github: "https://github.com/richzago97/produtos-categorias-s3-17",
   },
   {
      image: "/work/api.png",
      category: "back end",
      name: "Trivela API",
      description:
         "Projeto em Node.js para um sistema de gerenciamento de futsal. Foram criadas rotas para times administradores, login de usuários, proprietários, participantes e equipes. Foram implementadas entidades como endereços, administradores, quadras, proprietários e usuários. Também foram introduzidas correções e campos adicionais.",
      link: "https://github.com/richzago97/Trivela-Api-M4T12",
      github: "https://github.com/richzago97/Trivela-Api-M4T12",
   },
];
//Remove Category duplicates
const uniqueCategories = [
   "all projects",
   ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
   const [categories, setCategories] = useState(uniqueCategories);
   const [category, setCategory] = useState("all projects");

   const filteredProjects = projectData.filter((project) => {
      return category === "all projects"
         ? project
         : project.category === category;
   });

   return (
      <section className="min-h-screen pt-12">
         <div className="container mx-auto">
            <h2
               className="section-title mb-8 xl:mb-16 text-center
        mx-auto"
            >
               My Projects
            </h2>
            {/* Tabs */}
            <Tabs defaultValue={category} className="mb-24 xl:mb-48">
               <TabsList
                  className="w-full grid h-full md:grid-cols-4
          lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none"
               >
                  {categories.map((category: any, index: number) => {
                     return (
                        <TabsTrigger
                           onClick={() => setCategory(category)}
                           value={category}
                           key={index}
                           className="capitalize w-[162px]
              md:w-auto"
                        >
                           {category}
                        </TabsTrigger>
                     );
                  })}
               </TabsList>
               {/* Tabs Content*/}
               <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {filteredProjects.map((project, index) => {
                     return (
                        <TabsContent value={category} key={index}>
                           <ProjectCard project={project} specialStyle={true} />
                        </TabsContent>
                     );
                  })}
               </div>
            </Tabs>
         </div>
      </section>
   );
};

export default Projects;
