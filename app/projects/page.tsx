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
      "The proposed challenge involves creating a JWT authentication system and a CRUD API for a movie catalog. Tools and technologies used include TypeScript, Nest.js, TypeORM, Swagger, Docker, PostgreSQL and Redis.",
    link: "https://github.com/richzago97/mks-backend-challenge",
    github: "https://github.com/richzago97/mks-backend-challenge",
  },
  {
    image: "/work/api.png",
    category: "back end",
    name: "Zago Bank",
    description:
      "Zago Bank is a Transaction System, a web application developed in Laravel and Docker, which allows users to carry out financial transactions, such as deposits and transfers. It provides an API to manage users and transactions.",
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
  {
    image: "/projects/burguer-kenzie.png",
    category: "front end",
    name: "Burguer Kenzie",
    description:
      "This project was created to simulate a burger restaurant website, with the aim of implementing functionalities and styling using React.JS and Styled Components. The project used an API to access the list of products and allowed the simulation of a shopping cart.",
    link: "https://hamburguer-kenzie.vercel.app/",
    github: "https://github.com/richzago97/reactjs-hamburgueria",
  },
  {
    image: "/work/api.png",
    category: "back end",
    name: "Kenzie Buster",
    description:
      "This project aimed to create a user, film and purchase management application, incorporating authentication and control of access permissions to different application routes. The application was developed in Python, using the Django framework, which offers a solid structure for web development.",
    link: "https://github.com/richzago97/kenzie-Buster",
    github: "https://github.com/richzago97/kenzie-Buster",
  },
  {
    image: "/work/api.png",
    category: "back end",
    name: "CRUD Users + Admin",
    description:
      "Is an application developed in Node.js, using JavaScript as the main language. The goal of the project is to provide a CRUD service to manage users, with the addition of administrator permission functionalities.",
    link: "https://github.com/richzago97/crud-usuarios-s1-13",
    github: "https://github.com/richzago97/crud-usuarios-s1-13",
  },
  {
    image: "/work/api.png",
    category: "back end",
    name: "Kimoveis",
    description:
      "Built a TypeScript backend using Node.js and Docker for a real estate agency, featuring categorized routes for managing properties, schedules, and user sessions. Introduced middleware for user authentication, error handling, and administrative tasks.",
    link: "https://github.com/richzago97/kimoveis-typeorm-s5-11",
    github: "https://github.com/richzago97/kimoveis-typeorm-s5-11",
  },
  {
    image: "/work/api.png",
    category: "back end",
    name: "CRUD Users + TypeORM",
    description:
      "Developed a backend service utilizing TypeORM to manage user operations, implementing CRUD functionalities. Included middleware such as user authentication, administrative checks, and session validation within the routes.",
    link: "https://github.com/richzago97/crud-typeorm-s4-14",
    github: "https://github.com/richzago97/crud-typeorm-s4-14",
  },

  {
    image: "/work/api.png",
    category: "back end",
    name: "Product and Category Management",
    description:
      "Developed a backend Product and Category Management service, providing an API for product and category-related operations. Built with Node.js, Express.js and Docker to create API endpoints, leveraging PostgreSQL as the database for storing product and category data.",
    link: "https://github.com/richzago97/produtos-categorias-s3-17",
    github: "https://github.com/richzago97/produtos-categorias-s3-17",
  },
  {
    image: "/work/api.png",
    category: "back end",
    name: "Trivela API",
    description:
      "Trivela API: Node.js project for a futsal management system. Created routes for admin teams, user login, owners, participants, and teams. Implemented entities like addresses, admins, fields, owners, and users. Introduced fixes and additional fields.",
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
