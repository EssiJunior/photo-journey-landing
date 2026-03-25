import { TagProps } from '@/props/components/atoms'
import React from 'react'

const Tag = ({ children, className }: TagProps) => {
    return (
        <div className={`bg-[#F2F2F2] rounded-[100px] px-2 py-1 sm:px-4 sm:py-2 text-black/60 ${className}`}>
            <p className='flex-center gap-[5px] font-normal text-[clamp(15px, 2vw, 20px)] leading-[clamp(32.11px,1.5vw,44.48px)] '>
                {children}
            </p>
        </div>
    )
}

export default Tag