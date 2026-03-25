import Button from '@/components/atoms/Button'
import HighlightSectionText from '@/components/atoms/typography/bodies/HighlightSectionText'
import SectionText from '@/components/atoms/typography/bodies/SectionText'
import SectionHeading from '@/components/atoms/typography/headings/SectionHeading'
import Section from '@/components/molecules/Section'

const Mindset = () => {
    return (
        <Section>
            <div className='mindset mindset-shadow mx-auto grid place-items-center w-full max-w-[968px] rounded-[600px] bg-linear-to-r from-primary to-secondary text-white py-11 px-7.5 sm:px-22 gap-8'>

                <SectionHeading title='Before You Shoot: A Quick Morocco Photography Mindset' className='max-sm:px-5' />
                <SectionText className='text-center text-white max-w-[679px]'>
                    Chase soft light, not just golden light. Morocco&apos;s sun can be dramatic. That&apos;s a gift, but it can also be unforgiving—especially around midday when shadows get sharp and highlights blow out fast. Your most flattering images usually come from:Early morning, when the medina wakes slowly and you can shoot clean streets before the crowdsLate afternoon to sunset, when warm tones add depth and faces look softe. Blue hour, <HighlightSectionText text='when lanterns start glowing' /> and tiled courtyards look magical. Shaded alleys, where contrast becomes art and light falls in ribbons. If you only remember one thing, remember this: the best Morocco photos often happen in transitions—between day and night, between indoors and outdoors, between shadow and sunlight.
                </SectionText>
                <Button className='bg-white text-black'>Visit Photography Guide</Button>
            </div>
        </Section>
    )
}

export default Mindset