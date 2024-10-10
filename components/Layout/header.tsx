import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-background  lg:pt-[61px] ">
            <header className="container flex justify-between items-center    ">
                <Link href={`/`}>
                    <Image
                        width={297}
                        height={67}
                        src={`/assets/logo.png`}
                        alt={`logo`}
                        sizes="100"
                        className="object-contain"
                    />
                </Link>
            </header>
        </header>
    );
};

export default Header;
