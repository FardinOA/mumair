import Link from "next/link";
import Logo from "../logo";
import Button from "../button";
import { links } from "@/constant";

const Header = () => {
    return (
        <header className="bg-background pt-3 lg:pt-[61px] ">
            <div className="container flex justify-between items-center    ">
                <Logo />

                <nav className="flex items-center gap-3">
                    <ul className="flex items-center gap-3 max-lg:hidden ">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.url}
                                    className="text-text hover:text-primary lg:text-[21px] lg:leading-[31.5px] lg:tracking-[3%] px-2 2xl:py-[10px] 2xl:px-[14px] "
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button aria-label="Click to download cv">
                        Download CV
                    </Button>

                    <Button
                        className="lg:hidden"
                        size={"icon"}
                        aria-label="Click to open menu"
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
        </header>
    );
};

export default Header;
