import About from "@/components/Homepage/about";
import Contact from "@/components/Homepage/contact";
import Hero from "@/components/Homepage/hero";
import Projects from "@/components/Homepage/projects";
import Services from "@/components/Homepage/services";

export default function Home() {
    return (
        <main className="  bg-background min-h-dvh space-y-10 lg:space-y-[70px] pt-10 lg:pt-[70px] ">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
        </main>
    );
}
