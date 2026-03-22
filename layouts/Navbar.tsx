import Button from "@/components/atoms/Button"
import NavigationBack from "@/components/atoms/NavigationBack"
import { share } from "@/public/assets"
import Image from "next/image"

const Navbar = () => {
    return (
        <header className='sticky top-0 bg-accent/25 backdrop-blur-[10px] px-4.75 md:px-9.5 xl:px-18.75 py-6.25 flex-between'>
            <NavigationBack />
            <Button className="bg-black text-white">
                <Image
                    src={share}
                    width={21}
                    height={0}
                    alt="Share icon"
                />
                <span className="text-[clamp(13px, 1.5vw, 16px)] font-medium">Share Article</span>
            </Button>
        </header>
    )
}

export default Navbar