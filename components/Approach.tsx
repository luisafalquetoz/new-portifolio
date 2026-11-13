"use client";

import { AnimatePresence, motion } from "motion/react";
import React from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const Approach = () => {
    return (
        <section className="w-full py-20">
        <h1 className="heading">
            Minha <span className="text-purple-200">abordagem</span>
        </h1>
        <div className="my-20 flex w-full flex-col lg:flex-row items-center justify-center gap-4">
            <Card
            title="Planejamento & Estratégia"
            icon={<AceternityIcon order="Fase 1" />}
            description="Trabalharemos em conjunto para definir os objetivos do seu site, o público-alvo e as funcionalidades principais. Discutiremos aspectos como a estrutura do site, a navegação e os requisitos de conteúdo."
            >
            <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
            />
            </Card>
            <Card
            title="Atualização sobre o desenvolvimento & progresso"
            icon={<AceternityIcon order="Fase 2" />}
            description="Assim que definimos o plano, coloco minha playlist lo-fi para tocar e mergulho na programação. Dos rascunhos iniciais ao código finalizado, mantenho você a par de cada etapa do processo."
            >
            <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                [236, 72, 153],
                [232, 121, 249],
                ]}
                dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 bg-black/50 mask-[radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
            </Card>
            <Card
            title="Desenvolvimento & Lançamento"
            icon={<AceternityIcon order="Fase 3" />}
            description="É aqui que a mágica acontece! Com base no design aprovado, traduzirei tudo em código funcional, construindo seu site do zero."
            >
            <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
            />
            </Card>
        </div>
        </section>
    );
    };

const Card = ({
    title,
    icon,
    description,
    children,
    }: {
    title: string;
    icon: React.ReactNode;
    description: string;
    children?: React.ReactNode;
    }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group/canvas-card relative mx-auto flex lg:h-140 w-full max-w-sm items-center justify-center rounded-3xl border border-black/20 p-4 dark:border-white/20"
        >
        <Icon className="absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white" />
        <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
        <Icon className="absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white" />
        <Icon className="absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white" />

        <AnimatePresence>
            {hovered && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 h-full w-full"
            >
                {children}
            </motion.div>
            )}
        </AnimatePresence>

        <div className="relative z-20">
            <div className="mx-auto absolute flex w-full items-center justify-center text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
            {icon}
            </div>
            <h2 className="relative z-10 mt-4 text-3xl text-center font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
            {title}
            </h2>
            <h2 className="relative z-10 mt-4 text-sm text-center font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white" style={{color: "#E4ECFF"}}>
            {description}
            </h2>
        </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-bold text-white backdrop-blur-3xl">
            {order}
            </span>
        </button>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
