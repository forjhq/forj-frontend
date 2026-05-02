import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
import ContactForm from './contact-form'

export const metadata: Metadata = {
    title: 'Contact | Forj',
    description: 'Get in touch with the Forj support team.',
}

const contactCards = [
    {
        icon: '/assets/images/app-images/mdi_email.svg',
        label: 'Send us a mail',
        value: 'support@forj.online',
        href: 'mailto:support@forj.online',
    },
    {
        icon: '/assets/images/app-images/material-symbols_call-sharp.svg',
        label: 'Call Us at',
        value: '+1 7824 789592',
        href: 'tel:+17824789592',
    },
    {
        icon: '/assets/images/app-images/prime_twitter.svg',
        label: 'Follow us on X',
        value: 'X.com/forjonline',
        href: 'https://x.com/forjonline',
    },
]

export default function ContactPage() {
    return (
        <div className='flex flex-col min-h-screen font-manrope'>

            {/* Form section with gradient background */}
            <section className='relative px-4 sm:px-10 py-12 sm:py-16 overflow-hidden'>
                <Image
                    src='/assets/images/app-images/nav-gradient.svg'
                    alt=''
                    fill
                    className='object-cover object-top pointer-events-none select-none'
                    aria-hidden='true'
                    priority
                />
                <div className='relative mx-auto w-full max-w-[1440px]'>
                    <h2 className='text-[#FF5E44] text-4xl font-bold mb-8'>Support</h2>
                    <h1 className='text-3xl sm:text-4xl font-semibold text-black mb-8'>
                        Hello How can We help you?
                    </h1>
                    <ContactForm />
                </div>
            </section>

            {/* Contact Us section */}
            <section className='bg-white px-4 sm:px-10 py-14 sm:py-20'>
                <div className='mx-auto w-full max-w-[1440px]'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-black text-center mb-10'>
                        Contact Us
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                        {contactCards.map(({ icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='border border-gray-200 rounded-2xl p-6 flex flex-col gap-15 hover:border-[#FF5E44]/40 transition-colors'
                            >
                                <Image src={icon} alt={label} width={30} height={30} />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-black font-medium'>{label}</p>
                                    <p className='text-[#FF5E44] text-sm font-medium'>{value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
