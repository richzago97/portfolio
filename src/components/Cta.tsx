import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
   return (
      <section className="py-24 bg-tertiary dark:bg-secondary/40">
         <div className="container mx-auto">
            <div className="flex flex-col items-center">
               <h2 className="h2 max-w-xl text-center mb-8">
                  {/* Prepared to turn your ideas into reality? I&apos;m here to help */}
                  Preparado para transformar suas ideias em realidade? Estou
                  aqui para ajudar.
               </h2>
               <Link href="/contact">
                  <Button>Entre em contato</Button>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Cta;
