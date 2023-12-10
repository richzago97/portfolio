import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Richard Zago",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+55 51 996401057",
  },
  {
    icon: <MailIcon size={20} />,
    text: "rich.czago@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 16 Jul, 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Full Stack Developer",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Encruzilhada do Sul, RS, Brasil",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        school: "Kenzie Academy Brasil",
        qualification: "Full Stack Developer",
        years: "01/13/2022 - 03/06/2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Kenzie Academy Brasil",
        role: "Monitor Back End (Peer Coach)",
        years: "11/05/2022 - 04/01/2023",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        icons: [
          "/about/skills/html5.svg",
          "/about/skills/css.svg",
          "/about/skills/styled-components.svg",
          "/about/skills/tailwind.svg",
        ],
      },
      {
        icons: [
          "/about/skills/javascript.svg",
          "/about/skills/typescript.svg",
          "/about/skills/react.png",
          "/about/skills/next.png",
        ],
      },
      {
        icons: [
          "/about/skills/nodejs.svg",
          "/about/skills/express.svg",
          "/about/skills/typeorm.svg",
          "/about/skills/prisma.svg",
        ],
      },
      {
        icons: [
          "/about/skills/python.png",
          "/about/skills/django.svg",
          "/about/skills/java.svg",
          "/about/skills/springboot.png",
        ],
      },
      {
        icons: [
          "/about/skills/nest.png",
          "/about/skills/php.svg",
          "/about/skills/laravel.svg",
          "/about/skills/redis.svg",
        ],
      },
      {
        icons: [
          "/about/skills/postgres.svg",
          "/about/skills/mysql.svg",
          "/about/skills/mongodb.svg",
          "/about/skills/docker.svg",
        ],
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/tools/windows.svg",
      },
      {
        imgPath: "/about/tools/linux.svg",
      },
      {
        imgPath: "/about/tools/vscode.svg",
      },
      {
        imgPath: "/about/tools/insomnia.svg",
      },
      {
        imgPath: "/about/tools/jira.svg",
      },
      {
        imgPath: "/about/tools/notion.svg",
      },
      {
        imgPath: "/about/tools/trello.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: any) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2
          className="section-title mb-8 xl:mb-16 text-center 
        mx-auto"
        >
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light 
            dark:bg-about_shape_dark w-[505px] h-[505px] 
            bg-no-repeat relative"
              imgSrc="/about/developer.jpg"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList
                className="w-full grid xl:grid-cols-3 
                xl:max-w[520px] xl:border dark:border-none"
              >
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Service Quality for Over 2 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Driven by an insatiable curiosity, I dedicate myself to
                      the craft of coding, engaging in new projects and
                      continuous learning.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto 
                                    xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Portuguese(Native), English(Basic) </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Qualifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience*/}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item: any, index: any) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div
                                    className="h-[84px] w-[1px] bg-border 
                                                    relative mb-2"
                                  >
                                    <div
                                      className="w-[11px] h-[11px] rounded-full
                                                        bg-primary absolute -left-[5px] 
                                                        group-hover:translate-y-[84px]
                                                        transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div
                                      className="font-semibold text-xl
                                                        leading-none mb-2"
                                    >
                                      {company}
                                    </div>
                                    <div
                                      className="text-lg leading-none
                                                        text-muted-foreground mb-4"
                                    >
                                      {role}
                                    </div>
                                    <div
                                      className="text-base 
                                                        font-medium"
                                    >
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item: any, index: any) => {
                              const { school, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div
                                    className="h-[84px] w-[1px] bg-border 
                                                    relative mb-2"
                                  >
                                    <div
                                      className="w-[11px] h-[11px] rounded-full
                                                        bg-primary absolute -left-[5px] 
                                                        group-hover:translate-y-[84px]
                                                        transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div
                                      className="font-semibold text-xl
                                                        leading-none mb-2"
                                    >
                                      {school}
                                    </div>
                                    <div
                                      className="text-lg leading-none
                                                        text-muted-foreground mb-4"
                                    >
                                      {qualification}
                                    </div>
                                    <div
                                      className="text-base 
                                                        font-medium"
                                    >
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use</h3>
                    {/* Skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skills List*/}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {getData(skillsData, "skills").data.map(
                          (item: any, index: any) => {
                            const { icons } = item;
                            return (
                              <div
                                className="flex flex-wrap justify-center"
                                key={index}
                              >
                                {icons.map((imgPath: string, idx: number) => (
                                  <div
                                    key={idx}
                                    style={{ width: "48px", height: "48px" }}
                                    className="relative w-20 h-20 cursor-pointer transition duration-300 transform hover:scale-110 mx-2 my-2"
                                  >
                                    <Image
                                      src={imgPath}
                                      alt={`Skill ${idx}`}
                                      width={48}
                                      height={48}
                                      layout="responsive"
                                      priority
                                    />
                                  </div>
                                ))}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <h4 className="text-xl font-semibold mb-2 xl:text-left">
                      Tools
                    </h4>
                    <div className="border-b border-border mb-4"></div>
                    {/* Tools List */}
                    <div className="flex gap-x-8 justify-center xl:justify-start">
                      {getData(skillsData, "tools").data.map(
                        (item: any, index: any) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={28}
                                height={28}
                                alt="Tools Image"
                                priority
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
