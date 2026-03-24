import React from 'react'

const ImageCopyrighted = ({ children, className, copyright }: { children: React.ReactNode, className?: string, copyright: string }) => {
    return (
        <div className={`relative ${className}`}>
            {children}
            <p className='absolute bottom-7.25 left-1/2 -translate-x-1/2 py-1 px-2 bg-black/50 text-white font-medium leading-[20px] text-[clamp(14px,1vw,16px)]'>{copyright}</p>
        </div>
    )
}

export default ImageCopyrighted