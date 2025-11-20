"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/projects" },
        { name: "Services", href: "/#services" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/20"
                    : "bg-transparent"
            )}
        >
            <div className="container flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-primary p-1 transition-transform group-hover:scale-105 shadow-lg">
                        {/* Placeholder for logo if not present, or use the image */}
                        <Image
                            src="/logo.png"
                            alt="Samset Engineering Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className={cn(
                        "font-bold text-xl tracking-tight transition-colors drop-shadow-md",
                        isScrolled ? "text-foreground" : "text-white"
                    )}>
                        Samset<span className={isScrolled ? "text-primary" : "text-white"}>Engineering</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                isScrolled ? "text-muted-foreground" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        asChild
                        variant={isScrolled ? "default" : "secondary"}
                        className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
                    >
                        <Link href="/#contact">Get a Quote</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-foreground" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-foreground" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border/20 shadow-xl animate-in slide-in-from-top-5">
                    <div className="container flex flex-col py-6 px-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/10"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full mt-4 rounded-full">
                            <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                Get a Quote
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
