import React from 'react'
import FooterHeading from '../atoms/typography/headings/FooterHeading'
import FooterLink from '../atoms/links/FooterLink'
import { FooterNavigationProps } from '@/props/components/molecules'

const FooterNavigation = ({ title, links, className }: FooterNavigationProps) => {
    return (
        <div className={`flex flex-col gap-5 ${className}`}>
            <FooterHeading title={title} />

            <ul className="flex flex-col gap-8 mt-1">
                {links.map((link) => (
                    <li key={link.label}>
                        <FooterLink link={link} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterNavigation