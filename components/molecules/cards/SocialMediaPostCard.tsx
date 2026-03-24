import { instagram, youtube } from '@/public/assets'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

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

const SocialMediaPostCard = ({ image, title, description, socialMedia, className }: { image: StaticImageData, title: string, description: string, socialMedia: keyof typeof socialMedias, className?: string }) => {
    return (
        <aside className={`social-media-card relative p-[0.35px] rounded-[20px] bg-linear-to-r from-primary/35 to-secondary/35 ${className}`}>
            <div className="flex gap-19 rounded-[20px] py-4 px-8 h-full w-full bg-white">
                <div className="grid gap-2 max-w-[434px]">
                    <div className="flex items-center gap-2">
                        <Image src={socialMedias[socialMedia].image} alt={socialMedias[socialMedia].name} width={52} height={52} className='object-cover w-[52px]! h-[52px]!' />
                        <p className='text-[clamp(11px,2vw,22px)] font-normal'>{socialMedias[socialMedia].name}</p>
                    </div>
                    <h5 className='text-start font-libre'>{title}</h5>
                    <p className='text-[clamp(8px,2vw,15px)] font-normal text-[#AFAFAF]'>{description}</p>
                </div>
                <Image src={image} alt='Image' width={149} height={186} className='object-cover w-[149px]! h-[186px]! rounded-[200px] image-shadow' />
            </div>
        </aside>
    )
}

export default SocialMediaPostCard