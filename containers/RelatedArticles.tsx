"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import ArticleCard from "@/components/molecules/cards/ArticleCard";
import { chevronLeft, chevronRight } from "@/public/assets";
import Section from "@/components/molecules/Section";
import { articles } from "@/utils/data";

const CARD_WIDTH = 395;
const CARD_GAP = 48;
const CARDS_PER_PAGE_DESKTOP = 3;
const CARDS_PER_PAGE_MOBILE = 1;

const PAGE_SHIFT_DESKTOP = CARDS_PER_PAGE_DESKTOP * CARD_WIDTH + (CARDS_PER_PAGE_DESKTOP - 1) * CARD_GAP; // 1281px
const PAGE_SHIFT_MOBILE = CARDS_PER_PAGE_MOBILE * CARD_WIDTH + (CARDS_PER_PAGE_MOBILE - 1) * CARD_GAP;   // 395px

const TOTAL_PAGES_DESKTOP = Math.ceil(articles.length / CARDS_PER_PAGE_DESKTOP);
const TOTAL_PAGES_MOBILE = Math.ceil(articles.length / CARDS_PER_PAGE_MOBILE);

const RelatedArticles = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const getTotalPages = () =>
        typeof window !== "undefined" && window.innerWidth < 640
            ? TOTAL_PAGES_MOBILE
            : TOTAL_PAGES_DESKTOP;

    const getShift = () =>
        typeof window !== "undefined" && window.innerWidth < 640
            ? PAGE_SHIFT_MOBILE
            : PAGE_SHIFT_DESKTOP;

    const goTo = useCallback((page: number) => {
        const total = getTotalPages();
        setCurrentPage(Math.max(0, Math.min(page, total - 1)));
    }, []);

    const canGoPrev = currentPage > 0;
    const canGoNext = currentPage < getTotalPages() - 1;

    const translateX = -(currentPage * getShift());

    return (
        <Section className="related-articles" heading={["Related Articles"]}>
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

                {/* Track */}
                <div className="w-full overflow-hidden">
                    <div
                        className="flex gap-12 sm:px-10 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(${translateX}px)` }}
                    >
                        {articles.map((article, i) => (
                            <div key={i} className="shrink-0">
                                <ArticleCard article={article} />
                            </div>
                        ))}
                    </div>
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

            {/* Dots — count changes per breakpoint, reset page on resize */}
            <DotsRow currentPage={currentPage} goTo={goTo} />
        </Section>
    );
};

// Separate component so it can re-render on resize for correct dot count
const DotsRow = ({
    currentPage,
    goTo,
}: {
    currentPage: number;
    goTo: (n: number) => void;
}) => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 640 : false
    );

    // Listen to resize to swap dot count and reset to page 0
    useState(() => {
        if (typeof window === "undefined") return;
        const handler = () => {
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);
            goTo(0);
        };
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    });

    const totalPages = isMobile ? TOTAL_PAGES_MOBILE : TOTAL_PAGES_DESKTOP;

    return (
        <div className="flex-center gap-3.5 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
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
    );
};

export default RelatedArticles;