import Image from "next/image";
import React from "react";
import { cn } from "../lib";

const About = () => {
    const skills = [
        {
            name: "UX",
            value: "92",
        },
        {
            name: "Website Design",
            value: "85",
        },
        {
            name: "App Design",
            value: "95",
        },
        {
            name: "Graphic Design ",
            value: "89",
        },
    ];
    return (
        <section className="container grid grid-cols-1 gap-5 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5  ">
                <figure className="relative size-fit ">
                    <div className=" h-14 w-[200px] lg:w-[274px] lg:h-[83px] bg-[#FD6F0099]  absolute top-14 lg:top-28 left-1/2 -translate-x-1/2 "></div>
                    <Image
                        src={`/assets/about.png`}
                        width={681}
                        height={675}
                        alt={`about`}
                        sizes="100"
                        className="object-contain aspect-[681/675] lg:w-[681px] lg:h-[675px] "
                    />
                </figure>
            </div>
            <div className="lg:col-span-7 space-y-3 ">
                <h3 className="title">About Me</h3>
                <p className="subtitle max-w-[756px] ">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium. Turpis tempus pharetra
                </p>
                <div className="pt-4 lg:pt-5 space-y-4">
                    {skills?.map((skill, index) => (
                        <div className="space-y-2" key={`skill-${index}`}>
                            <p className="font-semibold text-text lg:text-[24px] lg:leading-[36px] ">
                                {skill?.name}
                            </p>
                            <div className="h-3 w-full bg-[#EDECEC] rounded-md relative   ">
                                <span
                                    style={{ width: `${skill?.value}%` }}
                                    className={cn(
                                        "absolute inset-0 bg-primary rounded-md"
                                    )}
                                ></span>

                                <span
                                    style={{
                                        left: `${skill?.value}%`,
                                    }}
                                    className="absolute top-1/2 -translate-y-1/2 z-[2] rounded-full -translate-x-1/2  size-8 border-primary border-[3px] bg-[#EDECEC] "
                                ></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
