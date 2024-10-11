import React from "react";
import Button from "../button";
import { cn } from "../lib";
import Image from "next/image";
import SectionHeader from "../section-header";

const Projects = () => {
    const category = [
        {
            name: "All",
        },
        {
            name: "UI/UX",
            id: 1,
        },
        {
            name: "Web Design",
            id: 2,
        },
        {
            name: "App Design",
            id: 3,
        },
        {
            name: "Graphic Design",
            id: 4,
        },
    ];

    const projects = {
        2: {
            name: "Web Design",
            data: [
                {
                    title: "AirCalling Landing Page Design",
                    image: "web-1.png",
                },
                {
                    title: "Business Landing Page Design",
                    image: "web-2.png",
                },
                {
                    title: "Ecom Web Page Design",
                    image: "web-3.png",
                },
            ],
        },
    };
    return (
        <section className="container   ">
            <SectionHeader
                title="My Projects"
                subtitle="Lorem ipsum dolor sit amet consectetur. Mollis erat duis
                    aliquam mauris est risus lectus. Phasellus consequat urna
                    tellus"
            />
            <div className="flex justify-center items-center gap-4 lg:gap-5 pt-5 lg:pt-[59px] flex-wrap lg:flex-nowrap ">
                {category?.map((item, index) => (
                    <Button
                        className={cn(
                            "border-[0.4px] border-[#545454] rounded-xl   ",
                            {
                                " bg-secondary text-black hover:bg-primary hover:text-white  ":
                                    item?.name !== "Web Design",
                            }
                        )}
                        key={`category-${index}`}
                    >
                        {item?.name}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6  2xl:gap-[44px] pt-4 md:pt-10 lg:pt-16 2xl:pt-[106px] ">
                {projects[2]?.data?.map((item, index) => (
                    <div key={`project-${index}`}>
                        <Image
                            width={445}
                            height={489}
                            src={`/assets/${item?.image}`}
                            alt={`project-${index}`}
                            quality={100}
                            className="object-contain aspect-[445/489] w-full h-full lg:max-h-[489px] lg:max-w-[445px] "
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
