"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "../logo";
import Button from "../button";
import { links } from "@/constant";
import { gsap } from "gsap";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const linkRefs = useRef<(HTMLLIElement | null)[]>([]);

    const tl = useRef<gsap.core.Timeline | null>(null);
    // GSAP animation setup using useEffect
    useEffect(() => {
        if (tl) {
            // Initialize GSAP timeline
            tl.current = gsap.timeline({ paused: true });

            // Setup menu animation: slide-in from left with opacity change
            tl.current.fromTo(
                menuRef.current,
                {
                    opacity: 0,
                    x: "-100%", // Start off-screen to the left
                    display: "none",
                    z: 10,
                },
                {
                    opacity: 1,
                    x: "0%", // Slide in to its original position
                    display: "block",
                    height: "100dvh",
                    duration: 0.8,
                    ease: "expo.inOut",
                    stagger: 0.1,
                }
            );
        }
    }, []);

    useEffect(() => {
        if (tl.current) {
            if (isMenuOpen) {
                tl.current.play();
            } else {
                tl.current.reverse();
            }
        }
    }, [isMenuOpen]);

    return (
        <header className="bg-background pt-3 lg:pt-[41px] ">
            <div className="container flex justify-between items-center">
                <Logo />

                <nav className="flex items-center gap-3">
                    {/* Desktop navigation */}
                    <ul className="flex items-center gap-3 max-lg:hidden">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.url}
                                    className="text-text hover:text-primary lg:text-[21px] lg:leading-[31.5px] lg:tracking-[3%] px-2 2xl:py-[10px] 2xl:px-[14px]"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button aria-label="Click to download CV">
                        Download CV
                    </Button>

                    {/* Hamburger button for mobile navigation */}
                    <Button
                        className=" lg:hidden "
                        size={"icon"}
                        aria-label="Click to open menu"
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </Button>
                </nav>
            </div>

            {/* Mobile navigation */}
            <div
                ref={menuRef}
                className="fixed z-50 top-0 left-0 w-full  bg-primary opacity-0 transform -translate-x-full lg:hidden overflow-hidden p-4"
                style={{ display: "none" }} // Hide initially, shown by GSAP animation
            >
                <div className="w-full flex justify-end ">
                    <svg
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <ul className="flex flex-col gap-3 justify-center items-center h-full">
                    {" "}
                    {links.map((link, index) => (
                        <li
                            ref={(el) => {
                                linkRefs.current[index] = el;
                            }}
                            key={link.name}
                        >
                            <Link
                                href={link.url}
                                className="text-text text-3xl "
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
