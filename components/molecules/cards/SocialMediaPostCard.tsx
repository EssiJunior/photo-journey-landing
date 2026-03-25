import { SocialMediaPostCardProps } from '@/props/components/molecules'
import { socialMedias } from '@/utils/data'
import Image from 'next/image'

const SocialMediaPostCard = ({ image, title, description, socialMedia, className }: SocialMediaPostCardProps) => {
    return (
        <aside className={`social-media-card relative p-[0.35px] rounded-[20px] bg-linear-to-r from-primary/35 to-secondary/35 ${className}`}>
            <div className="flex gap-2 sm:gap-19 rounded-[20px] py-4 px-3 sm:px-8 h-full w-full bg-white">
                <div className="grid gap-2 max-w-[434px]">
                    <div className="flex items-center gap-2">
                        <Image src={socialMedias[socialMedia].image} alt={socialMedias[socialMedia].name} width={52} height={52} className='object-cover w-[52px]! h-[52px]!' />
                        <p className='text-[clamp(11px,2vw,22px)] font-normal'>{socialMedias[socialMedia].name}</p>
                    </div>
                    <h5 className='text-start font-libre'>{title}</h5>
                    <p className='text-[clamp(8px,2vw,15px)] font-normal text-[#AFAFAF]'>{description}</p>
                </div>
                <Image src={image} alt='Image' width={149} height={186} className='object-cover w-21 h-[131px] sm:w-[149px] sm:h-[186px] rounded-[200px] image-shadow' />
            </div>
        </aside>
    )
}

export default SocialMediaPostCard