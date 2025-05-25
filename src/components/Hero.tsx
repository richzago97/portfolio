import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
   RiBriefcase4Fill,
   RiTeamFill,
   RiTodoFill,
   RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
   return (
      <section
         className="py-12 xl:py-24 h-[84vh] xl:pt-28 
    bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none"
      >
         <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
               <div
                  className="flex max-w-[600px] flex-col justify-center
           mx-auto xl:mx-0 text-center xl:text-left"
               >
                  <div
                     className="text-sm uppercase font-semibold
            mb-4 text-primary tracking-[4px]"
                  >
                     Desenvolvedor Web
                  </div>
                  <h1 className="h1 mb-4">Olá, me chamo Richard Zago</h1>
                  <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                     Especializado em desenvolvimento full stack, com forte foco
                     e entusiasmo em criar soluções robustas para o back-end.
                  </p>
                  <div
                     className="flex flex-col gap-y-3 md:flex-row gap-x-3
             mx-auto xl:mx-0 mb-12"
                  >
                     <Link href="/contact">
                        <Button className="gap-x-2">
                           Entre em contato <Send size={18} />
                        </Button>
                     </Link>
                     <Link
                        target="_blank"
                        href="https://docs.google.com/document/d/1drBPeGxNUrsnauVXTSBvEjeEe3djiXjb1osyXHs5hts/edit?usp=sharing"
                     >
                        <Button variant="secondary" className="gap-x-2">
                           Download CV
                           <Download size={18} />
                        </Button>
                     </Link>
                  </div>
                  <Socials
                     containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                     iconsStyles="text-foreground text-[22px] 
            hover:text-primary transition-all"
                  />
               </div>
               <div className="hidden xl:flex relative">
                  <Badge
                     containerStyles="absolute top-[24%] -left-[5rem]"
                     icon={<RiBriefcase4Fill />}
                     endCountNum={2}
                     badgeText="Anos de Experiência"
                  />

                  <Badge
                     containerStyles="absolute top-[80%] -left-[1rem]"
                     icon={<RiTodoFill />}
                     endCountNum={24}
                     badgeText="Projetos finalizados"
                  />

                  {/* <Badge containerStyles="absolute top-[55%] -right-8"
                  icon={<RiTeamFill />} endCountNum={6}
                  badgeText="Happy Clients"/> */}

                  <div
                     className="bg-hero_shape2_light dark:bg-hero_shape2_dark 
            w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"
                  ></div>
                  <DevImg
                     containerStyles="bg-hero_shape w-[510px] 
            h-[462px] bg-no-repeat relative bg-bottom"
                     imgSrc="/hero/developer.png"
                  />
               </div>
            </div>
            <div
               className="hidden md:flex absolute left-2/4 bottom-44
        xl:bottom-12 animate-bounce"
            >
               <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
         </div>
      </section>
   );
};

export default Hero;
