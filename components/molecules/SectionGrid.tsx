import { SectionGridProps } from '@/props/components/molecules'

const SectionGrid = ({ children, className }: SectionGridProps) => {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 ${className}`}>
            {children}
        </div>
    )
}

export default SectionGrid