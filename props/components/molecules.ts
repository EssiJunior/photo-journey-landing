import { StaticImageData } from "next/image";

type ArticleProps = {
    id: number;
    category: string;
    readTime: string;
    title: string;
    image: StaticImageData;
}

type SectionProps = {
    heading?: string[];
    children: React.ReactNode;
    className?: string;
}

type SocialMediaPostCardProps = {
    image: StaticImageData;
    title: string;
    description: string;
    socialMedia: "instagram" | "youtube";
    className?: string;
}

type FooterNavigationProps = {
    title: string;
    links: { href: string, label: string }[];
    className?: string;
}

export type { ArticleProps, SectionProps, SocialMediaPostCardProps, FooterNavigationProps }