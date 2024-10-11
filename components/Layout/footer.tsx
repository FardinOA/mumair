import { links } from "@/constant";

import Link from "next/link";
import React from "react";
import SocialIcons from "../social-icons";
import Logo from "../logo";

const Footer = () => {
    return (
        <footer className="pt-5 md:pt-20 lg:pt-[140px]   ">
            <div className=" bg-footer text-text py-5 lg:pt-[109px] lg:pb-[62px]   ">
                <div className="container  ">
                    <Logo className="mx-auto  justify-center  r" />
                    <div className="flex flex-col md:flex-row md:justify-center items-center gap-5 pt-5 pb-6 lg:pt-[65px] lg:pb-[80.50px] ">
                        {links?.map((link, ind) => (
                            <Link
                                className="lg:text-[21px] lg:leading-[31.5px] hover:text-primary "
                                href={link?.url}
                                key={ind}
                            >
                                {link?.name}
                            </Link>
                        ))}
                    </div>
                    <SocialIcons />
                </div>
            </div>
            <div className="bg-footer-bottom">
                <p className="p-[26px] text-white text-center  ">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-primary">Mumair</span> All Rights
                    Reserved , Inc.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
