'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { X } from 'lucide-react'

const WaitlistPage = () => {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !email.includes('@')) {
            toast.error('Please enter a valid email address')
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.error || 'Something went wrong. Please try again.')
                return
            }

            if (data.alreadyExists) {
                toast.info("You're already on the waitlist!")
            } else {
                setShowSuccessModal(true)
                setEmail('')
            }

        } catch (error) {
            console.error('Submission error:', error)
            toast.error('Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
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

            {/* Success Modal */}
            <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
                <DialogContent className='max-w-md mx-auto bg-white rounded-3xl p-8 sm:p-10 border-none shadow-2xl'>
                    <div className='flex flex-col items-center justify-center gap-6 relative'>
                        {/* <button
                            onClick={() => setShowSuccessModal(false)}
                            className='absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors'
                        >
                            <X className='w-4 h-4 text-gray-600' />
                        </button> */}

                        {/* Logo/Icon - Replace with your custom image path */}
                        <div className='w-24 h-24 sm:w-28 sm:h-28'>
                            <Image
                                src="/assets/images/app-images/modal.png"
                                alt="FORJ Logo"
                                width={112}
                                height={112}
                                className='w-full h-full object-contain'
                            />
                        </div>

                        <h2 className='text-xl sm:text-2xl font-bold text-center text-black'>
                            Thanks For Joining Our Waitlist
                        </h2>

                        <p className='text-base sm:text-lg text-center text-gray-600 leading-relaxed'>
                            You&apos;ve successfully joined the waitlist.<br />
                            We&apos;re building something intentional —<br />
                            and you&apos;re part of it.
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default WaitlistPage