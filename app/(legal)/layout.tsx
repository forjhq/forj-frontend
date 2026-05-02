import Footer from '@/components/shared/footer'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col bg-white'>
            {children}
            <Footer />
        </div>
    )
}
