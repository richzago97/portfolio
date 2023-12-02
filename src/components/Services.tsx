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
    title: "Full Stack Developer",
    description:
      "I've worked on comprehensive solutions that encompass both front-end and back-end. I can create robust and integrated applications, providing a complete user experience",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Back End Developer",
    description:
      "My passion for back-end development has led me to build solid foundations for applications, ensuring performance, scalability, and security.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Personal Identity",
    description:
      "My enthusiasm for continuous learning fuels my pursuit of new challenges and innovative solutions in programming.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
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
