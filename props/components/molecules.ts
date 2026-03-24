import { StaticImageData } from "next/image";

export type ArticleProps = {
    id: number; category: string; readTime: string; title: string; image: StaticImageData;
}

export type SectionGridProps = {
    children: React.ReactNode; className?: string;
}

export type SectionProps = {
    heading?: string[]; children: React.ReactNode; className?: string;
}

export type SocialMediaPostCardProps = {
    image: StaticImageData; title: string; description: string; socialMedia: "instagram" | "youtube"; className?: string;
}

export type FooterNavigationProps = {
    title: string; links: { href: string, label: string }[]; className?: string;
}

