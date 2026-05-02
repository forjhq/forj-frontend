import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Safety Tips | Forj',
    description: 'Safety tips for using Forj Dating App.',
}

const safetyTips = [
    {
        title: 'Your Safety Matters',
        content:
            'Forj is committed to helping create a respectful and secure environment, but no online platform can guarantee the actions, intentions, or honesty of every user. Meeting new people always involves some degree of risk. Always exercise caution.',
    },
    {
        title: 'Protect Your Personal Information',
        content:
            'Avoid sharing sensitive information such as your home address, banking details, workplace information, or government ID details too early. Even small details can be used maliciously.',
    },
    {
        title: 'Keep Conversations on the Platform',
        content:
            'Keep conversations within the app initially. This helps maintain a record and provides a safer environment if issues arise.',
    },
    {
        title: 'Watch for Common Red Flags',
        content:
            'Be cautious if someone asks for money, avoids video calls, provides inconsistent information, or pressures you emotionally or romantically too quickly.',
    },
    {
        title: 'Beware of Romance Scams',
        content:
            'Never be too quick send money, gift cards, or financial information to someone you met online. Scammers often build emotional trust before asking for help.',
    },
    {
        title: 'Verify Before You Trust',
        content:
            'Use audio and video calls or other reasonable methods to confirm the person is who they claim to be.',
    },
    {
        title: 'Respect Your Own Boundaries',
        content:
            'You can stop communication at any time. You do not owe anyone your time, attention, or personal information.',
    },
    {
        title: 'Plan Safe First Meetings',
        content:
            'Meet in public places, inform a trusted person, and arrange your own transportation.',
    },
    {
        title: 'During the Date',
        content:
            'If you feel uncomfortable, unsafe, or pressured, leave immediately.',
    },
    {
        title: 'Transportation Safety',
        content:
            'Avoid relying on the other person for transportation. Always have an independent way to go/leave.',
    },
    {
        title: 'Alcohol and Substance Awareness',
        content:
            'Avoid excessive alcohol consumption, and substances that can impair your mind and never leave your drink unattended.',
    },
    {
        title: 'Protect Intimate Content',
        content:
            'Do not share private or explicit images, especially under pressure or coercion.',
    },
    {
        title: 'Digital Security',
        content:
            'Use strong passwords where available, keep your device secure, and avoid clicking suspicious links.',
    },
    {
        title: 'Location Awareness',
        content:
            'Avoid sharing your real-time location or identifiable home/work details early.',
    },
    {
        title: 'Emotional Safety',
        content:
            'Be cautious of manipulation, guilt tactics, or controlling behavior.',
    },
    {
        title: 'Trust Your Instincts',
        content:
            'If something feels wrong, trust your instincts and disengage.',
    },
    {
        title: 'Report Suspicious Behavior',
        content:
            'Use in-app reporting tools to report scams, harassment, or suspicious users.',
    },
    {
        title: 'Block When Necessary',
        content:
            'Blocking is an important safety feature. Use it when needed.',
    },
    {
        title: 'Emergency Situations',
        content:
            'If you are in danger, contact local law enforcement immediately.',
    },
    {
        title: 'Seek Support',
        content:
            'If you experience distress, reach out to trusted individuals or professionals for support.',
    },
]

const SafetyTipsPage = () => {
    return (
        <div className='relative w-full font-manrope'>
            <Image
                src="/assets/images/app-images/nav-gradient.svg"
                alt=""
                width={1440}
                height={400}
                className='absolute top-0 left-0 w-full h-auto pointer-events-none select-none'
                aria-hidden="true"
                priority
            />

            <div className='relative mx-auto px-4 py-10 sm:py-14 flex justify-center'>
                <div className='flex flex-col justify-between w-full max-w-[1440px] mx-auto'>
                    <h1 className='text-4xl sm:text-5xl font-extrabold uppercase text-[#FF5E44] mb-6'>
                        Safety Tips
                    </h1>

                    <div className='mb-10 text-sm text-black leading-6'>
                        <p>Forj Dating App (Forj Technology Ltd)</p>
                        <p>Effective Date: April 8, 2026</p>
                        <p>Last Updated: April 8, 2026</p>
                    </div>

                    <ol className='flex flex-col gap-6'>
                        {safetyTips.map((tip, index) => (
                            <li key={index}>
                                <p className='font-semibold text-black mb-1'>
                                    {index + 1}. {tip.title}
                                </p>
                                <p className='text-black leading-relaxed'>{tip.content}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default SafetyTipsPage
