import { StaticImageData } from "next/image";

type Article = {
    id: number;
    category: string;
    readTime: string;
    title: string;
    image: StaticImageData;
}

type SectionProps = {
    heading: string[];
    children: React.ReactNode;
    className?: string;
}

export type { Article, SectionProps }