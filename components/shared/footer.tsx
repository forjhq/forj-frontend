import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-[#FF5E44] px-6 sm:px-10 py-6 font-manrope'>
            <div className='flex items-center justify-between w-full max-w-[1440px] mx-auto'>
                <Link href="/">
                    <Image
                        src="/assets/images/logo/logo.png"
                        alt="Forj"
                        width={80}
                        height={80}
                        // className='brightness-0 invert'
                    />
                </Link>
                <p className='text-white text-sm font-medium'>© FORJ. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
