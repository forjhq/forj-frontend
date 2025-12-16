import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-4 font-manrope bg-white'>
            <div className='flex items-center justify-between w-full max-w-[1440px] mx-auto'>
                <Link href="/">
                    <Image src="/assets/images/logo/logo-wo.png" alt="Forj" width={100} height={100} />
                </Link>
                <div className='flex gap-4'>
                    <Link href="/waitlist" className='text-black bg-[#F4F4F4] px-4 py-2 rounded-2xl text-base font-normal hover:bg-[#E0E0E0] transition-all duration-300'>Join the waitlist</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar