'use client'

import { useState } from 'react'
import { toast } from 'sonner'

type FormState = {
    name: string
    email: string
    phone: string
    message: string
}

export default function ContactForm() {
    const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const res = await fetch(`https://api.forj.online/api/v1/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                const nested = data?.message
                const msgs: string[] = Array.isArray(nested?.message)
                    ? nested.message
                    : Array.isArray(nested)
                        ? nested
                        : typeof nested === 'string'
                            ? [nested]
                            : ['Something went wrong. Please try again.']
                msgs.forEach(m => toast.error(m))
                return
            }

            toast.success('Message sent! We\'ll get back to you shortly.')
            setForm({ name: '', email: '', phone: '', message: '' })
        } catch {
            toast.error('Something went wrong. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const inputClass = 'border border-[#808080df] rounded-xl px-4 py-4 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-[#FF5E44] disabled:opacity-50'

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-black'>Name</label>
                    <input
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Name'
                        required
                        disabled={isLoading}
                        className={inputClass}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium text-black'>Email Address</label>
                    <input
                        name='email'
                        type='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder='Email Address'
                        required
                        disabled={isLoading}
                        className={inputClass}
                    />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-sm font-medium text-black'>Phone Number</label>
                <input
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    placeholder='Enter Phone Number'
                    disabled={isLoading}
                    className={inputClass}
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-sm font-medium text-black'>Message</label>
                <textarea
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Type your message'
                    rows={5}
                    required
                    minLength={10}
                    disabled={isLoading}
                    className={`${inputClass} resize-none`}
                />
            </div>

            <button
                type='submit'
                disabled={isLoading}
                className='w-fit bg-black text-white px-10 py-4 rounded-xl font-medium hover:bg-black/80 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
            >
                {isLoading ? 'Sending...' : 'Send message'}
            </button>
        </form>
    )
}
