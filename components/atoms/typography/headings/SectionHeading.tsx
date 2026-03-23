
const SectionHeading = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h2 className={`font-libre font-normal ${className}`}>
            {title}
        </h2>
    )
}

export default SectionHeading