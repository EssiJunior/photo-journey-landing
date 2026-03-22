import React from 'react'

const FooterHeading = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h3 className={`text-start font-libre text-[22px] font-normal ${className}`}>
            {title}
        </h3>
    )
}

export default FooterHeading