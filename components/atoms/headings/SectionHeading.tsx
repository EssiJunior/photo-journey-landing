
const SectionHeading = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h2 className={`font-libre text-[45px] font-normal ${className}`}>
            {title}
        </h2>
    )
}

export default SectionHeading