import About from "@/components/Homepage/about";
import Hero from "@/components/Homepage/hero";
import Services from "@/components/Homepage/services";

export default function Home() {
    return (
        <main className="  bg-background min-h-dvh space-y-10 lg:space-y-[70px] pt-10 lg:pt-[70px] ">
            <Hero />
            <About />
            <Services />

            <div className="h-dvh"></div>
        </main>
    );
}
