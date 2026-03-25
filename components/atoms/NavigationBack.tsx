import { arrowBack } from '@/public/assets'
import Image from 'next/image'

const NavigationBack = () => {
    return (
        <div className="flex gap-1.25">
            <Image
                src={arrowBack}
                width={21}
                height={15}
                alt="Back icon"
            />
            <span className="text-[16px]">Back{" "}
                <span className='text-[16px] hidden md:inline-block'>To All Articles</span>
            </span>
        </div>)
}

export default NavigationBack