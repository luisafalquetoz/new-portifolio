import { workExperience } from "@/data";

import { Button } from "./ui/moving-border";

const Experiences = () => {
    return (
        <div className="py-20">
        <h1 className="heading">
            My work <span className="text-purple-200">experience</span>
        </h1>
        <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
            {workExperience.map((card) => (
            <Button
                key={card.id}
                // eslint-disable-next-line react-hooks/purity
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="w-16 md:w-20 lg:w-32"
                />
                <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                        {card.title}
                    </h1>
                    <p className="text-start text-white-100 mt-3 font-semibold">
                        {card.desc}
                    </p>
                </div>
                </div>
            </Button>
            ))}
        </div>
        </div>
    );
};

export default Experiences;
