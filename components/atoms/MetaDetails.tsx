import { MetaDetailsProps } from '@/props/components/atoms'
import React from 'react'

const MetaDetails = ({ text }: MetaDetailsProps) => {
    return (
        <span className='line-clamp-1 text-black/80 text-[clamp(11.55px,1vw,16px)]'>{text}</span>
    )
}

export default MetaDetails