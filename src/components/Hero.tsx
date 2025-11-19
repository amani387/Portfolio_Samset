import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-background pt-16 md:pt-20 lg:pt-24">
            {/* Gradient Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center px-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-xl mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    Leading Engineering Solutions
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 mb-6">
                    Building the Future with <br className="hidden sm:inline" />
                    <span className="text-primary">Samset Engineering</span>
                </h1>

                <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl mb-10 leading-relaxed">
                    Excellence in construction, engineering, and project management.
                    We deliver high-quality solutions for complex infrastructure challenges with precision and innovation.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
                    <Button asChild size="lg" className="text-lg h-12 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                        <Link href="/projects">
                            View Our Projects <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg h-12 px-8 rounded-full border-primary/20 hover:bg-primary/5">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
