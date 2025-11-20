"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselSlide {
    id: string;
    image: string;
    title: string;
    description: string;
    cta?: string;
    ctaLink?: string;
}

interface CarouselProps {
    slides: CarouselSlide[];
    autoPlayInterval?: number;
}

export default function Carousel({ slides, autoPlayInterval = 5000 }: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide, autoPlayInterval]);

    return (
        <div
            className="relative w-full h-[600px] md:h-[700px] overflow-hidden group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Image Background */}
                    <div className="absolute inset-0">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center text-white">
                        <div className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
                                {slide.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-100 max-w-xl drop-shadow-md">
                                {slide.description}
                            </p>
                            {slide.cta && (
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 text-white border-none text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300"
                                >
                                    <a href={slide.ctaLink || "#"}>{slide.cta}</a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Next slide"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
