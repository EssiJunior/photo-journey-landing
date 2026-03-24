import { FooterHeadingProps } from '@/props/components/atoms'
import React from 'react'

const FooterHeading = ({ title, className }: FooterHeadingProps) => {
    return (
        <h3 className={`text-start font-libre text-[22px] font-normal ${className}`}>
            {title}
        </h3>
    )
}

export default FooterHeading