import { Article } from "@/props/components";
import Image from "next/image";


const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <div className="group flex flex-col items-center gap-8.75 w-[395px]">
            <div
                className="relative overflow-hidden transition-transform duration-500"
            >
                <Image
                    src={article.image}
                    alt={article.title}
                    width={395}
                    height={276}
                    className="w-[395px] h-[276px]! rounded-[200px] object-cover"
                />
            </div>

            <div className="grid place-items-center gap-3.75">
                <div>
                    <span className="flex-center gap-2 text-[18px] font-medium text-[#AFAFAF]">
                        {article.category}{" "}
                        <span className="w-1 h-1 rounded-full bg-current inline-block" />
                        {" "}{article.readTime}
                    </span>
                </div>

                {/* Title */}
                <h4 className="text-center font-libre">
                    {article.title}
                </h4>
            </div>
        </div>
    );
}

export default ArticleCard