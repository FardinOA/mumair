import {
    About,
    Contact,
    Hero,
    Projects,
    Services,
    Testimonials,
} from "@/components/Homepage";

export default function Home() {
    return (
        <main className="  bg-background min-h-dvh space-y-10 lg:space-y-[70px] pt-10 lg:pt-[70px] ">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
        </main>
    );
}
