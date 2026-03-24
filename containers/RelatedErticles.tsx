"use client";

import Image from "next/image";
import { Article } from "@/props/components/molecules";
import ArticleCard from "@/components/molecules/cards/ArticleCard";
import { chevronLeft, chevronRight, thumb2, thumb8 } from "@/public/assets";
import Section from "@/components/molecules/Section";

const articles: Article[] = [
    {
        id: 1,
        category: "Experiences",
        readTime: "12 mins",
        title: "Finding Peace in Simple Moments: The Art of Relaxed Family Time.",
        image: thumb2,
    },
    {
        id: 2,
        category: "Experiences",
        readTime: "12 mins",
        title: "Finding Peace in Simple Moments: The Art of Relaxed Family Time.",
        image: thumb8,
    },
    {
        id: 3,
        category: "Experiences",
        readTime: "12 mins",
        title: "Finding Peace in Simple Moments: The Art of Relaxed Family Time.",
        image: thumb2,
    }
];

const RelatedArticles = () => {

    return (
        <Section heading={["Related Articles"]}>
            <div className="overflow-hidden relative flex-center">
                <div
                    className="absolute left-0 top-[120px] z-10 flex-center w-15 h-15 rounded-full bg-white border border-gray-100 transition-all duration-150 hover:shadow-lg"
                    aria-label="Previous"
                >
                    <Image src={chevronLeft} width={24} height={24} alt="Chevron Left" />
                </div>

                <div className="flex gap-12 px-10">
                    {articles.map((article, i) => (
                        <ArticleCard
                            key={`${i}`}
                            article={article}
                        />
                    ))}
                </div>

                {/* Right Arrow */}
                <div
                    className="absolute right-0 top-[120px] z-10 flex items-center justify-center w-15 h-15 rounded-full bg-white shadow-md border border-gray-100 transition-all duration-150 hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next"
                >
                    <Image src={chevronRight} width={24} height={24} alt="Chevron Left" />
                </div>
            </div>

            {/* Dots */}
            <div className="flex-center gap-3.5 mt-10">
                {Array.from({ length: 2 }).map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Page ${i + 1}`}
                        className="transition-all duration-200 w-3.75 h-3.75 rounded-full"
                        style={{
                            background: i === 0 ? "#8F9CD3" : "#8F9CD380",
                        }}
                    />
                ))}
            </div>
        </Section>
    );
}

export default RelatedArticles;