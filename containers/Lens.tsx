import ImageCopyrighted from '@/components/atoms/ImageCopyrighted'
import InlineLink from '@/components/atoms/typography/bodies/InlineLink'
import SectionText from '@/components/atoms/typography/bodies/SectionText'
import SectionHeading from '@/components/atoms/typography/headings/SectionHeading'
import SocialMediaPostCard from '@/components/molecules/cards/SocialMediaPostCard'
import Section from '@/components/molecules/Section'
import SectionGrid from '@/components/molecules/SectionGrid'
import { thumb2, thumb3, thumb4 } from '@/public/assets'
import Image from 'next/image'

const Lens = () => {
    return (
        <Section heading={['Behind The Lens']} className='lens px-4.25 sm:px-10 md:px-19'>
            <div className='mx-auto grid place-items-center gap-[50px] w-full'>
                <SectionGrid className='lg:place-items-start'>
                    <SocialMediaPostCard socialMedia='youtube' image={thumb2} title='Essential Viewing: Capturing magic moments' description='Experience the tranquil beauty of Santorini sunrise through this calming 20mins video. Perfect for planning your morning routine or simply finding inner peace.' />

                    <div>
                        <SectionText>
                            Imperial cities are like living museums. Ancient walls and modern sneakers.Donkey carts beside scooters. Centuries-old craft tools next to QR-code payments. Don&apos;t try to remove those contrasts. Use them to tell the truth of the place. The most powerful <InlineLink href='#' text='This is an internal link.' navigation='internal' /> travel images show time stacked on time.
                        </SectionText>

                        <SectionText className='font-bold! mt-5'>
                            Respect comes before the shot
                        </SectionText>

                        <SectionText>
                            If you want portraits, ask politely. A smile, a greeting, and a short gesture are often enough. In Morocco, some people enjoy being photographed, others don&apos;t—and that&apos;s completely fair. If someone says no (or looks uncomfortable), step away. You&apos;ll still find incredible photos everywhere, and the images you do capture will feel lighter because they were taken with respect.
                        </SectionText>
                    </div>
                </SectionGrid>
                <SectionHeading title='Fez: The City of Detail' className='mr-auto! w-full text-center md:text-start mt-8 md:-mt-8' />
                <SectionGrid>
                    <div className="grid">
                        <SectionText className='max-sm:px-3.75'>
                            If Marrakech is a drumbeat, Fez is a whisper—an intricate, intelligent city built for slow looking. It has one of the world&apos;s most complex medinas, where narrow alleys twist into tiny squares, workshops spill into streets, and carved doors appear like secret portals.
                        </SectionText>
                        <SectionText className='max-sm:px-3.75'>What to photograph in Fez.  Medina geometry. Fez&apos;s lanes are a dream for <InlineLink href='#' text='This is an external link' navigation='external' /> this composition</SectionText>
                        <SectionText className='max-sm:px-3.75'>A simple trick: place your camera at chest height, keep your frame level, and let the city&apos;s architecture do the work. Fez is naturally cinematic.Zellige (tilework) and artisan surfaces. Tiles here aren&apos;t decoration—they&apos;re language. Look for mosaic fountains, courtyard walls, and doorframes. Get close for texture shots and pull back for structure.</SectionText>

                        <SectionText className='mt-5 max-sm:px-3.75'>
                            <b>Tip:</b> the smell can be strong—many visitors use mint sprigs offered nearby. Workshop portraits in dramatic light. Craft workshops often have beautiful lighting: beams through small windows, dust floating in the air, warm tones bouncing off wood and metal. If you&apos;re invited in (or given permission), shoot gently. Expose for highlights to keep the “light beam” mood. Capture hands, tools, and faces in partial shadow. Focus on gestures: measuring, cutting, threading, polishing.
                        </SectionText>
                    </div>
                    <div className="flex-center gap-5">
                        <ImageCopyrighted copyright='©MountainViews-Shot-Images'>
                            <Image src={thumb3} alt='©MountainViews-Shot-Images' width={356} height={535} className='object-cover rounded-[200px] w-[194px] h-[292px] sm:w-[356px] sm:h-[535px] image-shadow' />
                        </ImageCopyrighted>

                        <ImageCopyrighted copyright='©MountainViews-Shot-Images'>
                            <Image src={thumb4} alt='©MountainViews-Shot-Images' width={261} height={261} className='object-cover rounded-[300px] w-[142px] h-[142px] sm:w-[261px] sm:h-[261px] image-shadow' />
                        </ImageCopyrighted>
                    </div>
                </SectionGrid>

            </div>
        </Section>
    )
}

export default Lens