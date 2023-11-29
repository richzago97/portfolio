import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
   return (
      <section>
         <div className="container mx-auto">
            {/* Text And Illustration*/}
            <div
               className="grid xl:grid-cols-2 pt-12 xl:h-[480px] 
        xl:mb-24"
            >
               {/* Text */}
               <div className="flex flex-col justify-center">
                  <div
                     className="flex items-center gap-x-4 text-primary 
            text-lg mb-4"
                  >
                     <span className="w-[30px] h-[2px] bg-primary"></span>
                     Say Hello
                  </div>
                  <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
                  <p className="subtitle max-w-[400px]">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Eum, cum! Voluptates perferendis assumenda ipsum at, minus
                     recusandae eos.{" "}
                  </p>
               </div>
               {/* Illustration */}
               <div
                  className="hidden xl:flex w-full
          bg-contact_illustration_light
          dark:bg-contact_illustration_dark
          bg-contain bg-top bg-no-repeat"
               ></div>
            </div>
            {/* Info Text & Form*/}
            <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
               {/* Info Text*/}
               <div
                  className="flex flex-col gap-y-4 xl:gap-y-14
          mb-12 xl:mb-24 text-base xl:text-lg"
               >
                  {/* Email */}
                  <div className="flex items-center gap-x-8">
                     <MailIcon size={18} className="text-primary" />
                     <div>rich.czago@gmail.com</div>
                  </div>
                  {/* Address */}
                  <div className="flex items-center gap-x-8">
                     <HomeIcon size={18} className="text-primary" />
                     <div>Encruzilhada do Sul, RS, Brasil</div>
                  </div>
                  {/* phone */}
                  <div className="flex items-center gap-x-8">
                     <PhoneCall size={18} className="text-primary" />
                     <div>+55 51 996401057</div>
                  </div>
               </div>
               <Form />
            </div>
         </div>
      </section>
   );
};

export default Contact;
