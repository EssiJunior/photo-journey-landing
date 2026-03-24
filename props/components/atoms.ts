import { StaticImageData } from 'next/image';
import React from 'react';

export type ButtonProps = {
    children: React.ReactNode;
    className?: string
};
export type DownloadAppProps = {
    icon: StaticImageData; store: string; hint: string
};
export type ImageCopyrightedProps = {
    children: React.ReactNode; className?: string; textClassName?: string; copyright: string
};
export type MetaDetailsProps = {
    text: string
};
export type TagProps = {
    children: React.ReactNode; className?: string
};
export type FooterLinkProps = {
    link: { href: string; label: string };
    className?: string
};
export type HighlightSectionTextProps = {
    text: string; className?: string
};
export type InlineLinkProps = {
    text: string; className?: string; href: string; navigation: 'internal' | 'external'
};
export type SectionTextProps = {
    children: React.ReactNode; className?: string
};
export type FooterHeadingProps = {
    title: string; className?: string
};
export type SectionHeadingProps = {
    title: string; className?: string
};
