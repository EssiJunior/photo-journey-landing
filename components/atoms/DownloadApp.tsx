import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

const DownloadApp = ({ icon, store, hint }: { icon: StaticImageData, store: string, hint: string }) => {
    return (
        <Link href="#" className="flex-center gap-1.5 p-4 rounded-[10px] bg-white/20 hover:bg-white/30 transition-all duration-200 ease-in-out">
            <Image src={icon} alt={store} width={24} height={24} />
            <div className="flex  flex-col gap-1.5">
                <span className="text-[10px] text-white/80 font-libre tracking-[2%]">{hint}</span>
                <span className="text-[14px] font-libre tracking-[2%]">{store}</span>
            </div>
        </Link>
    )
}

export default DownloadApp