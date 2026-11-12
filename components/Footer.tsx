/* eslint-disable @next/next/no-img-element */
import { CiLocationArrow1 } from "react-icons/ci";

import { socialMedia } from "@/data";

import MagicButton from "./ui/magic-button";

const Footer = () => {
    return (
        <footer className="w-full pb-10 md:mb-5" id="contact">
        <div className="absolute bottom-1 left-0 min-h-96 w-full">
            <img
            src="/footer-grid.svg"
            alt="grid"
            className="h-full w-full opacity-50"
            />
        </div>
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple-200">your</span> digital
            presence to the next level?
            </h1>
            <p className="text-white-200 my-5 text-center md:mt-10">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
            </p>
            <a href="mailto:luisafzandonade@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<CiLocationArrow1 />}
                position="right"
            />
            </a>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm font-light md:text-base md:font-normal">
            Copyright © 2026 Luisa Falqueto
            </p>
            <div className="flex items-center gap-6 md:gap-3">
            {socialMedia.map((profile) => (
                <div
                key={profile.id}
                className="bg-opacity-75 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg saturate-180 backdrop-blur-lg backdrop-filter"
                >
                <img src={profile.img} alt={profile.id} width={20} height={20} />
                </div>
            ))}
            </div>
        </div>
        </footer>
    );
};

export default Footer;
