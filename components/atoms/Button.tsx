import React from 'react'

const Button = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (

        <button className={`flex rounded-[100px] backdrop-blur-[90px] px-4 py-[12.5px] gap-2 cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out ${className}`}>
            {children}
        </button>
    )
}

export default Button