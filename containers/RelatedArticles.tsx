"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import ArticleCard from "@/components/molecules/cards/ArticleCard";
import { chevronLeft, chevronRight } from "@/public/assets";
import Section from "@/components/molecules/Section";
import { articles } from "@/utils/data";

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(articles.length / CARDS_PER_PAGE);

const RelatedArticles = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollTo({
            left: currentPage * track.clientWidth,
            behavior: "smooth",
        });
    }, [currentPage]);

    const goTo = useCallback((page: number) => {
        setCurrentPage(Math.max(0, Math.min(page, TOTAL_PAGES - 1)));
    }, []);

    const canGoPrev = currentPage > 0;
    const canGoNext = currentPage < TOTAL_PAGES - 1;

    return (
        <Section heading={["Related Articles"]}>
            <div className="overflow-hidden relative flex-center">
                {/* Left Arrow */}
                <button
                    onClick={() => goTo(currentPage - 1)}
                    disabled={!canGoPrev}
                    className="absolute left-0 top-[120px] z-10 flex-center w-15 h-15 rounded-full bg-white border border-gray-100 transition-all duration-150 hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous"
                >
                    <Image src={chevronLeft} width={24} height={24} alt="Chevron Left" />
                </button>

                {/* Track — flex-shrink-0 on each card prevents squishing */}
                <div
                    ref={trackRef}
                    className="flex gap-12 px-10 overflow-x-hidden w-full"
                    style={{ scrollbarWidth: "none" }}
                >
                    {articles.map((article, i) => (
                        <div key={i} className="shrink-0">
                            <ArticleCard article={article} />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => goTo(currentPage + 1)}
                    disabled={!canGoNext}
                    className="absolute right-0 top-[120px] z-10 flex items-center justify-center w-15 h-15 rounded-full bg-white shadow-md border border-gray-100 transition-all duration-150 hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next"
                >
                    <Image src={chevronRight} width={24} height={24} alt="Chevron Right" />
                </button>
            </div>

            {/* Dots */}
            <div className="flex-center gap-3.5 mt-10">
                {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Page ${i + 1}`}
                        aria-current={i === currentPage ? "true" : undefined}
                        className="transition-all duration-200 w-3.75 h-3.75 rounded-full"
                        style={{
                            background: i === currentPage ? "#8F9CD3" : "#8F9CD380",
                        }}
                    />
                ))}
            </div>
        </Section>
    );
};

export default RelatedArticles;