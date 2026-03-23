import React from 'react'

const SectionText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <p className={`leading-[27px] font-normal text-[#595959] ${className}`}>
            {children}
        </p>
    )
}

export default SectionText