import { cn } from "cn";
import { CiLocationArrow1 } from "react-icons/ci";

import MagicButton from "./ui/magic-button";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 h-screen md:-top-20 md:-left-32"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="dark:bg-grid-white bg-grid-black absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#d4d4d4_[0.3],transparent_1px),linear-gradient(to_bottom,#d4d4d4_[0.3],transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs tracking-widest text-blue-100 uppercase">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="lg:text=6xl text-center text-[40px] md:text-5xl"
            words="Transformando conceitos em experiências de usuário intuitivas e eficientes"
          />
          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Olá, sou Luisa, Desenvolvedora FullStack.
          </p>
          <a>
            <MagicButton
              title="Mostre meu trabalho"
              icon={<CiLocationArrow1 />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
