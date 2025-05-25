import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

const servicesData = [
   {
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: "Desenvolvedor Full Stack",
      description:
         "Trabalhei em soluções completas que englobam tanto o front-end quanto o back-end. Consigo criar aplicações robustas e integradas, proporcionando uma experiência completa ao usuário.",
   },
   {
      icon: <Blocks size={72} strokeWidth={0.8} />,
      title: "Desenvolvedor Back End",
      description:
         "Minha paixão pelo desenvolvimento back-end me levou a construir bases sólidas para aplicações, garantindo desempenho, escalabilidade e segurança.",
   },
   {
      icon: <Gem size={72} strokeWidth={0.8} />,
      title: "Identidade Pessoal",
      description:
         "Meu entusiasmo por aprendizado contínuo impulsiona minha busca por novos desafios e soluções inovadoras na programação.",
   },
];

const Services = () => {
   return (
      <section className="mb-12 xl:mb-36">
         <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
               Meus serviços
            </h2>
            {/* Grid Items */}
            <div
               className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24
            xl:gap-x-8"
            >
               {servicesData.map((item: any, index: any) => {
                  return (
                     <Card
                        className="w-full max-w-[424px] h-[300px] flex flex-col
                     pt-16 pb-10 justify-center items-center relative"
                        key={index}
                     >
                        <CardHeader className="text-primary absolute -top-[60px]">
                           <div
                              className="w-[140px] h-[80px] bg-white
                            dark:bg-background flex justify-center items-center"
                           >
                              {item.icon}
                           </div>
                        </CardHeader>
                        <CardContent className="text-center">
                           <CardTitle className="mb-4">{item.title}</CardTitle>
                           <CardDescription className="text-lg">
                              {item.description}
                           </CardDescription>
                        </CardContent>
                     </Card>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Services;
