import React from 'react'
import SectionHeading from '@/components/atoms/typography/headings/SectionHeading'
import { SectionProps } from '@/props/components'

const Section = ({ heading, children, className }: SectionProps) => {
    return (
        <section className={`w-full py-16 px-4.25 sm:px-5.75 ${className}`}>
            {heading && <div className="grid mb-7.5">
                {heading.map((title, i) => (
                    <SectionHeading key={i} title={title} />
                ))}
            </div>}
            {children}
        </section>
    )
}

export default Section