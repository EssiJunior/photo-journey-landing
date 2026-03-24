import { instagram } from '@/public/assets'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

const InstagramPostCard = ({ image, title, description, className }: { image: StaticImageData, title: string, description: string, className?: string }) => {
    return (
        <aside className={`relative p-[0.35px] rounded-[20px] bg-linear-to-r from-primary/35 to-secondary/35 ${className}`}>
            <div className="flex gap-19 rounded-[20px] py-4 px-8 h-full w-full bg-white">
                <div className="grid gap-2 max-w-[434px]">
                    <div className="flex items-center gap-2">
                        <Image src={instagram} alt='instagram' width={52} height={52} className='object-cover !w-[52px] !h-[52px]' />
                        <p className='text-[clamp(11px,2vw,22px)] font-normal'>Instagram</p>
                    </div>
                    <h5 className='text-start font-libre'>{title}</h5>
                    <p className='text-[clamp(8px,2vw,15px)] font-normal text-[#AFAFAF]'>{description}</p>
                </div>
                <Image src={image} alt='Image' width={149} height={186} className='object-cover w-[149px]! h-[186px]! rounded-[200px] image-shadow' />
            </div>
        </aside>
    )
}

export default InstagramPostCard