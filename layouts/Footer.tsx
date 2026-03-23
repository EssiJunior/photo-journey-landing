"use client";

import Image from "next/image";
import Link from "next/link";
import { appstore, chevronLeft, english, facebookIcon, instagramIcon, linkedInIcon, logo, playstore, tiktokIcon } from "@/public/assets";
import DownloadApp from "@/components/atoms/DownloadApp";
import FooterHeading from "@/components/atoms/typography/headings/FooterHeading";
import FooterNavigation from "@/components/molecules/FooterNavigation";
import Button from "@/components/atoms/Button";
import FooterLink from "@/components/atoms/links/FooterLink";

const quickLinks = [
    { label: "My Moodboards", href: "#" },
    { label: "Search Discovery", href: "#" },
    { label: "Magazine", href: "#" },
    { label: "About Us", href: "#" },
];

const contactLinks = [
    { label: "Contact Us", href: "#" },
    { label: "Security", href: "#" },
    { label: "Data Deletion", href: "#" },
    { label: "Privacy Policy", href: "#" },
];

const socialLinks = [
    { icon: instagramIcon, href: "#", label: "Instagram" },
    { icon: facebookIcon, href: "#", label: "Facebook" },
    { icon: linkedInIcon, href: "#", label: "LinkedIn" },
    { icon: tiktokIcon, href: "#", label: "TikTok" },
];

const Footer = () => {

    return (
        <footer
            className="relative w-full text-white overflow-hidden px-7 md:px-14.5 xl:px-17 pt-16 pb-18.5 md:pt-26.5 md:pb-23.5 xl:pt-36.5 xl:pb-55"
            style={{
                background: "linear-gradient(310.6deg, #000000 28.25%, #8E97B4 87.82%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
            }}
        >
            <div className="flex-between flex-wrap items-start! gap-25">
                {/* Brand */}
                <div className="w-full sm:w-[320px] grid gap-6">
                    {/* Logo */}
                    <Image
                        src={logo}
                        alt="Logo"
                        width={220}
                        height={48}
                    />

                    <p className="text-sm leading-[100%] text-white/80 font-light tracking-[2%]">
                        Your trusted companion for personalized travel suggestions. You can also get the mobile application
                    </p>

                    {/* App Store Buttons */}
                    <div className="flex gap-4 mt-4">
                        <DownloadApp hint="Download On" store="App Store" icon={appstore} />
                        <DownloadApp hint="Get It On" store="Google Play" icon={playstore} />
                    </div>
                </div>

                <FooterNavigation title="Quick Links" links={quickLinks} />

                <FooterNavigation title="Contact & Legal" links={contactLinks} />

                {/* Newsletter */}
                <div className="flex flex-col gap-5 w-full sm:w-[365px]">
                    <FooterHeading title="Subscribe To Our Newsletter" />

                    <p className="text-[16px] text-white/80 font-light tracking-[2%]">
                        Get travel tips and exclusive offers delivered to your inbox.
                    </p>

                    <div
                        className="flex items-center rounded-full overflow-hidden p-1.5 border border-white/50"
                    >
                        <input
                            type="email"
                            className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-white/25 text-white/80 min-w-0"
                            style={{ fontFamily: "system-ui, sans-serif" }}
                        />
                        <Button className="bg-linear-to-r from-primary to-secondary text-[12px] tracking-[2%]">Subscribe</Button>
                    </div>

                    <p className="hidden max-sm:block xl:block text-[16px] text-white/80 font-light tracking-[2%]">
                        By subscribing, you agree to receive marketing emails from TransitStay. You can unsubscribe at any time. Read our{" "}
                        <Link href="#" className="underline font-medium">Privacy Policy</Link>{" "}
                        to learn how we handle your data.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 mb-21.25 xl:my-21.25 xl:ml-auto">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:bg-white/10"
                                style={{
                                    color: "rgba(255,255,255,0.55)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                }}
                            >
                                <Image src={social.icon} alt={social.label} width={24} height={24} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div
                className="h-px w-full bg-white/50 mb-21.25"
            />

            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                <div className="flex-between max-sm:flex-col max-sm:mb-7 gap-y-7 gap-13.75">
                    <p className="text-[16px] text-white/60 tracking-[2%]">
                        © 2025 TransitStay. All rights reserved.
                    </p>
                    <FooterLink link={{ href: "#", label: "Terms of Service" }} className="text-white/60!" />
                </div>


                {/* Language Selector */}
                <Button
                    className="items-center transition-all duration-150 hover:scale-none border border-white/50"
                >
                    <Image src={english} alt="flag" width={24} height={24} className="rounded-full" />
                    <span>English</span>
                    <Image src={chevronLeft} alt="flag" width={20} height={20} className="rounded-full -rotate-90" />
                </Button>
            </div>
        </footer>
    );
}

export default Footer;