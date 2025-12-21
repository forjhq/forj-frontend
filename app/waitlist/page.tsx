'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'sonner'

// ⚠️ CONFIGURATION - Replace these with your Google Form details:
// 1. Create a Google Form with an email field
// 2. Get the form ID from the URL: https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
// 3. Get the entry ID by inspecting the form or viewing page source (look for "entry.")
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdgem8a7F2Drjh58jRZk5ZSmJsYvX_L_oEwM9F1Y3-FyvWdiA/formResponse'
const GOOGLE_FORM_EMAIL_ENTRY = 'entry.1576778805'

const WaitlistPage = () => {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !email.includes('@')) {
            toast.error('Please enter a valid email address')
            return
        }

        setIsSubmitting(true)

        try {
            // Create a hidden iframe for submission (Google Forms blocks fetch requests)
            const iframe = document.createElement('iframe')
            iframe.name = 'hidden_iframe'
            iframe.style.display = 'none'
            document.body.appendChild(iframe)

            // Create a form and submit it
            const form = document.createElement('form')
            form.method = 'POST'
            form.action = GOOGLE_FORM_ACTION_URL
            form.target = 'hidden_iframe'

            const input = document.createElement('input')
            input.type = 'hidden'
            input.name = GOOGLE_FORM_EMAIL_ENTRY
            input.value = email
            form.appendChild(input)

            document.body.appendChild(form)
            form.submit()

            // Clean up after submission
            setTimeout(() => {
                document.body.removeChild(form)
                document.body.removeChild(iframe)
            }, 1000)

            toast.success("You're on the waitlist! We'll be in touch soon.")
            setEmail('')
        } catch {
            toast.error('Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className='relative flex flex-col items-center justify-center w-full font-manrope pt-10 sm:pt-16 md:pt-20 px-4 sm:px-6 lg:px-8'>
            <Image className='absolute top-0 left-0 w-full h-auto object-cover -z-10' src={"/assets/images/app-images/bg-gradient.svg"} alt='background gradient' width={1000} height={1000} />
            <div className='flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto gap-6 sm:gap-8 md:gap-10'>
                <div className='flex flex-col items-center justify-center max-w-[700px] mx-auto gap-4 sm:gap-6'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center bg-linear-to-b from-[#000000] to-[#FF5E44] bg-clip-text text-transparent'>Closer to love. From the first Swipe</h1>
                    <p className='text-sm sm:text-base md:text-lg text-center font-medium max-w-[600px] mx-auto text-[#848484]'>
                        FORJ is a dating app for verified professionals seeking meaningful relationships.
                        We believe real connections build confidence, sparks joy, and starts with clear intent.
                    </p>

                    <form onSubmit={handleSubmit} className='relative flex flex-col items-center justify-center w-full mt-4 sm:mt-6 max-w-[500px] mx-auto'>
                        <Image className='hidden lg:block absolute -left-40 xl:-left-52 top-[70%] -translate-y-1/2 w-20 xl:w-24 h-auto' src={"/assets/images/app-images/carrot.png"} alt='carrot' width={200} height={200} />
                        <Image className='hidden lg:block absolute -right-40 xl:-right-52 top-[20%] -translate-y-1/2 w-20 xl:w-24 h-auto' src={"/assets/images/app-images/3dmessage.png"} alt='message' width={200} height={200} />


                        <div className='flex flex-col sm:flex-row items-center justify-center w-full bg-[#F4F4F4] py-2 sm:py-3 px-3 sm:px-4 rounded-2xl sm:rounded-full gap-2 sm:gap-0'>
                            <Input
                                type="email"
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSubmitting}
                                className='w-full p-2 rounded-md border-none shadow-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-none focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none bg-transparent text-sm sm:text-base'
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className='bg-black text-white py-3 sm:py-4 px-5 sm:px-7 rounded-full text-sm sm:text-base font-medium w-full sm:w-auto whitespace-nowrap disabled:opacity-70'
                            >
                                {isSubmitting ? 'Joining...' : 'Join the waitlist'}
                            </Button>
                        </div>
                    </form>
                </div>
                <div className='flex items-center justify-center w-full gap-2'>
                    <Image className='w-24 sm:w-32 md:w-36 h-auto object-cover' src={"/assets/images/app-images/marquee.svg"} alt='waitlist' width={1000} height={1000} />
                    <p className='text-sm sm:text-base font-medium text-center text-[#848484]'>Join 2000+ others on the waitlist</p>
                </div>
                <div className='relative flex items-center justify-center w-full mt-6 sm:mt-8 md:mt-10'>
                    <Image className='absolute inset-0 w-1/2 h-full object-cover -z-10' src={"/assets/images/app-images/bg-witlist-img.svg"} alt='background gradient' width={1000} height={1000} />
                    <Image className='w-full h-full object-cover' src={"/assets/images/app-images/waitlist-img.png"} alt='waitlist' width={1000} height={1000} />
                </div>
            </div>
        </main>
    )
}

export default WaitlistPage