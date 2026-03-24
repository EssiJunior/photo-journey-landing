import { SectionHeadingProps } from '@/props/components/atoms'

const SectionHeading = ({ title, className }: SectionHeadingProps) => {
    return (
        <h2 className={`font-libre font-normal ${className}`}>
            {title}
        </h2>
    )
}

export default SectionHeading