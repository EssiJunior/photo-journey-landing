import Button from '@/components/atoms/Button'
import DotSeperator from '@/components/atoms/DotSeperator'
import ImageCopyrighted from '@/components/atoms/ImageCopyrighted'
import MetaDetails from '@/components/atoms/MetaDetails'
import Profile from '@/components/atoms/Profile'
import Tag from '@/components/atoms/Tag'
import Section from '@/components/molecules/Section'
import { adventure, elephant, solo, thumb1, thumb2 } from '@/public/assets'
import Image from 'next/image'

const Hero = () => {
    return (
        <Section className='hero overflow-hidden px-4.25 sm:px-10 md:px-19'>
            <div className='relative flex w-full '>
                <aside className="grid gap-4 max-sm:mt-20 sm:max-w-[70%]">
                    <Button className='bg-linear-to-r from-primary to-secondary text-white w-fit'>Photo Journey</Button>

                    <div className="grid">
                        <h1 className="font-libre text-start">Through the Lens:</h1>
                        <h1 className="font-libre text-start">Morocco&apos;s Imperial Cities</h1>
                    </div>

                    <p className='text-[#595959] max-w-[718px]'>
                        Morocco doesn&apos;t just look beautiful. It behaves beautifully in a camera. Light slips through cedar lattices like water. Colors sit confidently next to each other—cobalt against chalk-white, saffron against shadow, without ever feeling too loud.
                    </p>

                    <div className="grid mt-[54px] gap-4">
                        <div className="flex gap-4">
                            <Tag>
                                <Image src={adventure} alt='adventure' width={20} height={20} />
                                Adventures
                            </Tag>
                            <Tag>
                                <Image src={solo} alt='solo' width={20} height={20} />
                                Solo
                            </Tag>
                            <Tag className='bg-[#AD54F0]! text-white!'>
                                <Image src={elephant} alt='elephant' width={20} height={20} />
                                Africa
                            </Tag>
                        </div>
                        <div className="flex-start gap-5">
                            <Profile />
                            <DotSeperator />
                            <MetaDetails text='12 min read' />
                            <DotSeperator />
                            <MetaDetails text='August 20, 2025' />
                        </div>
                    </div>
                </aside>
                <div className='-z-1 absolute top-[-40%] xl:top-[-70%] right-0 sm:right-[-20%] xl:right-[-10%] flex-center flex-col gap-5 bg-[#EEF3FE] px-7 sm:px-15 py-14.5 sm:py-30 xl:px-20 xl:py-60 rounded-[500px] -rotate-[62.98deg] sm:-rotate-[24.75deg] xl:-rotate-[18.21deg]'>
                    <ImageCopyrighted copyright='©This is a random copyrightedimage source' className='rotate-[62.98deg] sm:rotate-[24.75deg] xl:rotate-[18.21deg]' textClassName='max-xl:hidden'>
                        <Image src={thumb1} alt='©This is a random copyrightedimage source' width={158} height={158} className='object-cover rounded-[200px] w-[158px] h-[158px] sm:w-[180px] sm:h-[180px] xl:w-[324px] xl:h-[324px] image-shadow' />
                    </ImageCopyrighted>
                    <ImageCopyrighted copyright='©This is a random copyrightedimage source' textClassName='text-[12.6px]! leading-[15.75px]! max-xl:hidden' className='rotate-[62.98deg] sm:rotate-[24.75deg] xl:rotate-[18.21deg]'>
                        <Image src={thumb2} alt='©This is a random copyrightedimage source' width={96} height={96} className='object-cover rounded-[200px] w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] xl:w-[198.86px]  xl:h-[198.86px] image-shadow' />
                    </ImageCopyrighted>
                </div>
            </div>
        </Section>
    )
}

export default Hero