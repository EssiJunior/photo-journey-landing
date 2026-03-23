import ImageCopyrighted from '@/components/atoms/ImageCopyrighted'
import HighlightSectionText from '@/components/atoms/typography/bodies/HighlightSectionText'
import SectionText from '@/components/atoms/typography/bodies/SectionText'
import Section from '@/components/molecules/Section'
import { thumb7 } from '@/public/assets'
import Image from 'next/image'

const Closing = () => {
    return (
        <Section heading={['Closing: Morocco as a', 'Photographic Teacher']}>
            <div className='mx-auto grid place-items-center gap-12.5 w-full max-w-[811px]'>
                <SectionText>1)Marrakech is bold: terracotta walls, palm shadows, buzzing souks, and the famous energy of Jemaa el-Fnaa. It&apos;s the city where photography becomes choreography—your timing matters as much as your framing..  What to photograph in Marrakech. Jemaa el-Fnaa: the heartbeat. This square changes constantly. In daylight, it&apos;s open and bright. At sunset, it turns cinematic: smoke from grills rises, lanterns glow, crowds thicken, and the sky shifts into purple-blue. Shoot wide to show scaleShoot tight to isolate gestures: hands serving tea, steam, faces lit by warm bulbs. Try motion blur to show movement (even a slight blur can add energy) If you can, find a rooftop café view. From above, the square becomes a living pattern—circles of crowds, lines of movement, pulses of light.</SectionText>

                <ImageCopyrighted copyright='©MoroccoShots.com'>
                    <Image src={thumb7} alt='©MoroccoShots.com' width={568} height={430} className='object-cover rounded-[400px] w-[568px] h-[450px]' />
                </ImageCopyrighted>

                <div className="grid gap-2">
                    <div className='grid'>
                        <SectionText className='font-bold!'>2)Souks: color with control</SectionText>

                        <SectionText>Markets are packed with texture: spices, slippers, textiles, lanterns. Your job is to bring order to the visual overload. Choose one “anchor” subject (like a stack of saffron or a wall of lanterns. Use hanging rugs as a backgroundWait for one person to step into the frame—<HighlightSectionText text='human + texture = story' />.  Riads: calm after the storm Riads are interior gardens with fountains, tiled walls, and symmetry. Perfect for clean, elegant photos.Stand centered for symmetry. Capture reflections in water. Shoot details: carved wood, brass handles, mosaic edges. Gardens and graphic lines (if you visit them)</SectionText>
                    </div>
                    <SectionText>Places like Jardin Majorelle (or other gardens) are a playground for composition. Focus on color-blocking: blue wall + green plants. Use negative space for minimalist images. Shoot leaves and shadows like abstract art Marrakech photo challenge. Make a 12-shot sequence called “From Noise to Silence.” Start in the busiest place you can find, and end in the quietest courtyard you can access. That sequence alone can become your article’s visual spine.</SectionText>
                </div>
            </div>
        </Section>
    )
}

export default Closing