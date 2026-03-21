import { arrowBack } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const NavigationBack = () => {
    return (
        <div className="flex gap-1.25">
            <Image
                src={arrowBack}
                width={21}
                height={0}
                alt="Back icon"
            />
            <span className="text-[16px]">Back{" "}
                <span className='text-[16px] hidden md:inline-block'>To All Articles</span>
            </span>
        </div>)
}

export default NavigationBack