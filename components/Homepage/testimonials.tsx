"use client";
import React, { useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import SectionHeader from "../section-header";
import { cn } from "../lib";

const Testimonials = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        {
            image: "testimonial-1.png",
            name: "Name",
            designation: "CEO",
            message:
                "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        },
        {
            image: "testimonial-1.png",
            name: "Name",
            designation: "CEO",
            message:
                "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        },
        {
            image: "testimonial-1.png",
            name: "Name",
            designation: "CEO",
            message:
                "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        },
        {
            image: "testimonial-1.png",
            name: "Name",
            designation: "CEO",
            message:
                "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        },
        {
            image: "testimonial-1.png",
            name: "Name",
            designation: "CEO",
            message:
                "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        },
        {
            image: "testimonial-1.png",
            name: "Name",
            designation: "CEO",
            message:
                "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        },
    ];

    const watchDrag = () => {
        return false;
    };
    return (
        <section className=" space-y-10 lg:space-y-[77px] ">
            <SectionHeader
                title="Testimonials"
                subtitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
            />
            <Carousel
                setApi={setApi}
                opts={{
                    align: "center",
                    loop: true,
                    watchDrag: watchDrag,
                }}
            >
                <CarouselContent className="-ml-5">
                    {data?.map((item, ind) => (
                        <CarouselItem
                            className="basis-[90%] md:basis-[80%] lg:basis-[70%] 2xl:basis-[60%] pl-5 lg:pl-[62px]"
                            key={ind}
                        >
                            <div
                                className={cn(
                                    "flex flex-col md:flex-row justify-between items-center gap-4 bg-secondary p-5 lg:px-[48px] lg:py-[55px] rounded-[14px] ",
                                    ind !== activeIndex && "opacity-20"
                                )}
                            >
                                <Image
                                    width={235}
                                    height={235}
                                    src={`/assets/${item.image}`}
                                    alt={item.name}
                                    quality={100}
                                    className="object-contain w-[150px] h-[150px]  max-h-[235px] max-w-[235px] aspect-square"
                                />
                                <div>
                                    <p className="text-[#424242] text-justify lg:text-[21px] lg:leading-[31.5px]">
                                        {item?.message}
                                    </p>
                                    <p className="text-black font-medium text-xl lg:text-2xl text-justify mt-4">
                                        {item?.name}
                                    </p>
                                    <p className="text-lg lg:text-[19px] lg:leading-[28.5px] text-justify">
                                        {item?.designation}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 mt-6">
                {data.map((_, index) => (
                    <button
                        aria-label="slide toggle"
                        key={index}
                        onClick={() => {
                            setActiveIndex(index);
                            api?.scrollTo(index);
                        }}
                        className={`w-6 lg:w-[57px] h-3 lg:h-4 rounded-full ${
                            index === activeIndex
                                ? "bg-primary "
                                : "bg-[#D9D9D9]"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
