import { FooterLinkProps } from '@/props/components/atoms'
import Link from 'next/link'
import React from 'react'

const FooterLink = ({ link, className }: FooterLinkProps) => {
    return (
        <Link
            href={link.href}
            className={`text-[16px] text-white/80 tracking-[2%] ${className}`}
        >
            {link.label}
        </Link>
    )
}

export default FooterLink