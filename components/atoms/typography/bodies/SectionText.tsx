import { SectionTextProps } from '@/props/components/atoms'
import React from 'react'

const SectionText = ({ children, className }: SectionTextProps) => {
    return (
        <p className={`leading-[27px] font-normal text-[#595959] ${className}`}>
            {children}
        </p>
    )
}

export default SectionText