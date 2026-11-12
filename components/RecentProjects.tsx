import { GoArrowUpRight } from "react-icons/go";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
        <h1 className="heading">
            A small selection of{" "}
            <span className="text-purple-200">recent projects</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
                key={id}
                className="flex h-128 w-[80vw] items-center justify-center sm:h-164 sm:w-142.5 lg:min-h-130"
            >
                <PinContainer title={link} href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:w-142.5 sm:h-[40vh]">
                    <div className="relative h-full w-full overflow-hidden bg-[#13162D] lg:rounded-3xl">
                    <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img src={img} alt={title} className="absolute bottom-0 z-10" />
                </div>
                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                    {title}
                </h1>
                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                    {des}
                </p>
                <div className="mt-7 mb-3 flex items-center justify-between">
                    <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                        <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black lg:h-10 lg:w-10"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                        >
                        <img src={icon} alt={icon} className="p-2" />
                        </div>
                    ))}
                    </div>
                    <div className="flex items-center justify-center">
                    <p className="flex text-sm text-purple-200 md:text-xs lg:text-xl">
                        Check Live Site
                    </p>
                    <GoArrowUpRight className="ms-3" color="#CBACF9" />
                    </div>
                </div>
                </PinContainer>
            </div>
            ))}
        </div>
        </div>
    );
};

export default RecentProjects;
