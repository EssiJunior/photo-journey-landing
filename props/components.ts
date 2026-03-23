import { StaticImageData } from "next/image";

type Article = {
    id: number;
    category: string;
    readTime: string;
    title: string;
    image: StaticImageData;
}

export type { Article }