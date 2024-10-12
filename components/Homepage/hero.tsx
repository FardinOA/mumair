import Image from "next/image";
import Button from "../button";
import SocialIcons from "../social-icons";

const Hero = () => {
    return (
        <section className=" container grid grid-cols-1 lg:grid-cols-12 items-center ">
            <div className="lg:col-span-7  space-y-[28px]">
                <div className="  ">
                    <p className=" md:text-xl lg:text-2xl font-semibold text-text  ">
                        Hi I am
                    </p>
                    <h1 className="text-primary text-lg md:text-2xl font-semibold lg:text-[32px] lg:leading-[48px] ">
                        Muhammad Umair
                    </h1>
                    <h2 className="font-bold text-5xl md:text-7xl lg:text-[100px] lg:leading-[100px] text-text ">
                        UI & UX <br className="max-lg:hidden" />{" "}
                        <span className=" pl-[110px] md:pl-0 lg:pl-[220px] ">
                            Designer
                        </span>
                    </h2>
                </div>
                <div className="max-w-[698px] space-y-5">
                    <p className="subtitle ">
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                    </p>
                    <Button className="lg:px-16">Hire Me</Button>
                </div>
            </div>
            <div className="lg:col-span-5    ">
                <div className="lg:size-fit space-y-5 ">
                    <figure className="relative">
                        <div className=" h-14 w-[200px] lg:w-[274px] lg:h-[83px] bg-[#FD6F0099]  absolute top-14 lg:top-20 left-1/2 -translate-x-1/2 "></div>
                        <Image
                            src={`/assets/hero.png`}
                            width={538}
                            height={617}
                            alt={`hero`}
                            sizes="100"
                            quality={100}
                            priority
                            className="object-contain aspect-[538/617] lg:w-[538px] lg:h-[617px] mx-auto "
                        />
                    </figure>
                    <SocialIcons />
                </div>
            </div>
        </section>
    );
};

export default Hero;
