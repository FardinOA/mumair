import Image from "next/image";
import React from "react";

const Services = () => {
    const data = [
        {
            name: "UI/UX",
            description:
                "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
            icon: "ui-ux.png",
        },
        {
            name: "Web Design",
            description:
                "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
            icon: "web-design.png",
        },
        {
            name: "App Design",
            description:
                "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
            icon: "app-design.png",
        },
        {
            name: "Graphic Design",
            description:
                "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
            icon: "graphic-design.png",
        },
    ];
    return (
        <section className="container space-y-5 lg:space-y-10 ">
            <div>
                <h4 className="title text-center">Services</h4>
                <p className="subtitle !text-center lg:max-w-[880px] mx-auto ">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 ">
                {data?.map((item, ind) => (
                    <div
                        key={`service-${ind}`}
                        className=" p-4 lg:p-[18px] bg-secondary rounded-[14px] space-y-4 pt-5 lg:pt-12 "
                    >
                        <Image
                            width={72}
                            height={82}
                            sizes="100"
                            alt={item.name}
                            src={`/assets/${item.icon}`}
                            className="object-contain max-h-[82px] max-w-[72px] "
                        />

                        <p className=" font-semibold text-2xl lg:text-[32px] lg:leading-[48px] pt-2 lg:pt-3 ">
                            {item?.name}
                        </p>
                        <p className="lg:text-lg">{item?.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
