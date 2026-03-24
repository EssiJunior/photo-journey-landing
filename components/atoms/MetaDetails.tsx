import React from 'react'

const MetaDetails = ({ text }: { text: string }) => {
    return (
        <span className='text-black/80 text-[clamp(11.55px,1vw,16px)]'>{text}</span>
    )
}

export default MetaDetails