import { profile } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <div className='flex-start gap-3'>
            <div className="rounded-full bg-[#EEF3FE] w-[50px] h-[50px] p-1.5">
                <div className="rounded-full bg-linear-to-r from-primary to-secondary p-[1.1px] flex-center">
                    <Image src={profile} className='rounded-full w-full h-full' alt='profile' width={38} height={38} />
                </div>
            </div>

            <span className='text-[clamp(11.55px,1vw,16px)]'>TransitStay</span>

        </div>
    )
}

export default Profile