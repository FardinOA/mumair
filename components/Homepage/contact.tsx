import React from "react";
import SectionHeader from "../section-header";
import Button from "../button";

const Contact = () => {
    return (
        <section className="container space-y-5 lg:space-y-[48px] ">
            <SectionHeader
                title="Lets Design Together"
                subtitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
            />
            <div className="lg:max-w-[880px] mx-auto flex flex-col md:flex-row  justify-center items-center gap-4 lg:gap-[25px] ">
                <input
                    placeholder="Enter Your Email"
                    type="email"
                    className="border text-[#797979] border-[#AFAFAF] rounded-[14px] bg-secondary text-lg lg:text-xl py-2 lg:py-5 px-3 lg:px-7 w-full "
                />

                <Button className="rounded-[14px] py-2 lg:py-5 px-3 lg:px-7 w-full md:w-fit  text-center">
                    Contact Me
                </Button>
            </div>
        </section>
    );
};

export default Contact;
