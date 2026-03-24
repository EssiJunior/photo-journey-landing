import React from 'react'

const SectionGrid = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`grid grid-cols-1 xl:grid-cols-2 gap-14 ${className}`}>
            {children}
        </div>
    )
}

export default SectionGrid