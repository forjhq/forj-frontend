import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const WaitlistPage = () => {
    return (
        <main className='flex flex-col items-center justify-center w-full font-manrope'>
            <div className='flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto'>
                <div className='flex flex-col items-center justify-center max-w-[700px] mx-auto gap-6 '>
                    <h1 className='text-6xl font-extrabold text-center'>Where professionals meet with purpose.</h1>
                    <p className='text-lg text-center font-medium max-w-[600px] mx-auto text-[#848484]'>FORJ helps verified professionals build meaningful connections through smart matching, shared values, and real intent.</p>

                    <div className='flex items-center justify-center w-full mx-auto bg-[#F4F4F4] py-3 px-4 rounded-full'>
                        <Input type="email" placeholder='Enter your email' className='w-full p-2 rounded-md border-none shadow-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-none focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none bg-transparent' />
                        <Button className='bg-black text-white py-4 px-7 rounded-full text-base font-medium'>Join the waitlist</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WaitlistPage