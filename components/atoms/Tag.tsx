import React from 'react'

const Tag = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`bg-[#F2F2F2] rounded-[100px] px-[22.65px] py-[12.13px] text-black/60 ${className}`}>
            <p className='flex-center gap-[5px] font-normal text-[clamp(15px, 2vw, 20px)] leading-[clamp(32.11px,1.5vw,44.48px)] '>
                {children}
            </p>
        </div>
    )
}

export default Tag