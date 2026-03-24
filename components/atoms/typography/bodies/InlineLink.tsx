import { InlineLinkProps } from '@/props/components/atoms'
import { externalLink } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InlineLink = ({ text, className, href, navigation }: InlineLinkProps) => {
    const target = navigation === 'external' ? '_blank' : '_self'
    return (
        <Link href={href} target={target} className={`inline-flex items-center underline py-0.5 px-2 text-transparent bg-clip-text bg-linear-to-r from-[#AD54F0] to-[#D24DBC] ${className}`}>
            {text}
            {
                navigation === 'external' && <Image src={externalLink} alt='External Link' width={18} height={18} className='object-cover w-[18px]! h-[18px]! ml-1' />
            }
        </Link>
    )
}

export default InlineLink