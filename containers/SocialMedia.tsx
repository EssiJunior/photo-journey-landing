import ImageCopyrighted from '@/components/atoms/ImageCopyrighted'
import SocialMediaPostCard from '@/components/molecules/cards/SocialMediaPostCard'
import Section from '@/components/molecules/Section'
import { thumb5, thumb6 } from '@/public/assets'
import Image from 'next/image'

const SocialMedia = () => {
    return (
        <Section>
            <div className='mx-auto flex-center max-md:flex-wrap gap-[50px] w-full max-w-[1122px]'>
                <ImageCopyrighted copyright='©This is a random copyrightedimage source'>
                    <Image src={thumb5} alt='©This is a random copyrightedimage source' width={356} height={579} className='object-cover rounded-[200px] w-[356px]! h-[579px]! image-shadow' />
                </ImageCopyrighted>

                <div className="grid gap-10">
                    <SocialMediaPostCard socialMedia='instagram' image={thumb6} title='Sunrise Over Aegean: A peaceful meditation' description='Experience the tranquil beauty of Santorini sunrise through this calming 20mins video. Perfect for planning your morning routine or simply finding inner peace.' />

                    <SocialMediaPostCard socialMedia='instagram' image={thumb6} title='Sunrise Over Aegean: A peaceful meditation' description='Experience the tranquil beauty of Santorini sunrise through this calming 20mins video. Perfect for planning your morning routine or simply finding inner peace.' />
                </div>
            </div>
        </Section>
    )
}

export default SocialMedia