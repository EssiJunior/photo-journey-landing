import { HighlightSectionTextProps } from '@/props/components/atoms'
import React from 'react'

const HighlightSectionText = ({ text, className }: HighlightSectionTextProps) => {
    return (
        <span className={`text-white highlight-text py-0.5 px-2 rounded-[6px] ${className}`}>{text}</span>
    )
}

export default HighlightSectionText