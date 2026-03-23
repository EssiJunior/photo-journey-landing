import HighlightSectionText from '@/components/atoms/typography/bodies/HighlightSectionText'
import SectionText from '@/components/atoms/typography/bodies/SectionText'
import Section from '@/components/molecules/Section'
import React from 'react'

const Marrakech = () => {
    return (
        <Section heading={['Marrakech: Heat, Motion, and Magic!']}>
            <div className='mx-auto grid place-items-center gap-6 w-full max-w-[811px]'>
                <div className='grid'>
                    <SectionText className='font-semibold!'>1)Marrakech is bold: </SectionText>

                    <SectionText>terracotta walls, palm shadows, buzzing souks, and the famous energy of Jemaa el-Fnaa. It&apos;s the city where photography becomes choreography—your timing matters as much as your framing..  What to photograph in Marrakech. Jemaa el-Fnaa: the heartbeat. This square changes constantly. In daylight, it&apos;s open and bright. At sunset, it turns cinematic: smoke from grills rises, lanterns glow, crowds thicken, and the sky shifts into purple-blue. Shoot wide to show scaleShoot tight to isolate gestures: hands serving tea, steam, faces lit by warm bulbs. Try motion blur to show movement (even a slight blur can add energy)</SectionText>

                    <SectionText>If you can, find a rooftop café view. From above, the square becomes a living pattern—circles of crowds, lines of movement, pulses of light.</SectionText>
                </div>

                <div className='grid'>
                    <SectionText className='font-semibold!'>2)Souks: color with control</SectionText>

                    <SectionText>Markets are packed with texture: spices, slippers, textiles, lanterns. Your job is to bring order to the visual overload. Choose one “anchor” subject (like a stack of saffron or a wall of lanterns. Use hanging rugs<HighlightSectionText text='calm after the storm' />for one person to step into the frame—human + texture = story.  Riads: calm after the storm</SectionText>

                    <SectionText>Riads are interior gardens with fountains, tiled walls, and symmetry. Perfect for clean, elegant photos. Stand centered for symmetry. Capture reflections in water. Shoot details: carved wood, brass handles, mosaic edges. Gardens and graphic lines (if you visit them).</SectionText>
                </div>
            </div>
        </Section>
    )
}

export default Marrakech