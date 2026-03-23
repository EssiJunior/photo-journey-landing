import React from 'react'

const ImageCopyrighted = ({ children, className, copyright }: { children: React.ReactNode, className?: string, copyright: string }) => {
    return (
        <div className={`bg-red-400 relative ${className}`}>
            {children}
            <p className='absolute bottom-7.25 left-1/2 -translate-x-1/2 py-1 px-2 bg-black text-white'>{copyright}</p>
        </div>
    )
}

export default ImageCopyrighted