import { ArticleProps } from "@/props/components/molecules";
import { instagram, thumb2, thumb8, youtube } from "@/public/assets"

const socialMedias = {
    instagram: {
        image: instagram,
        name: 'Instagram',
    },
    youtube: {
        image: youtube,
        name: 'YouTube',
    },
}


const articles: ArticleProps[] = [
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
    },
    {
        id: 4,
        category: "Experiences",
        readTime: "12 mins",
        title: "Finding Peace in Simple Moments: The Art of Relaxed Family Time.",
        image: thumb2,
    },
    {
        id: 5,
        category: "Experiences",
        readTime: "12 mins",
        title: "Finding Peace in Simple Moments: The Art of Relaxed Family Time.",
        image: thumb2,
    }
];

export { socialMedias, articles }