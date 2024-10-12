'use client';
import { socialMedia } from '@/data';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Label } from './ui/Label';
import { Input } from './ui/Input';
import { cn } from '@/lib/utils';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import Alert from './ui/Alert';

export function Footer() {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState<{
        message: string;
        type: 'success' | 'error';
    } | null>(null);

    const handleChange = (e: { target: any }) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // Form validation
        if (!form.name || !form.email || !form.message) {
            setAlert({
                message: 'Please fill in all fields.',
                type: 'error',
            });
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(form.email)) {
            setAlert({
                message: 'Please enter a valid email address.',
                type: 'error',
            });
            return;
        }

        setLoading(true);

        emailjs
            .send(
                process.env.NEXT_PRIVATE_EMAILJS_SERVICE_ID ||
                    'service_f1dxywu',
                process.env.NEXT_PRIVATE_EMAILJS_TEMPLATE_ID ||
                    'template_h7t7l58',
                {
                    from_name: form.name,
                    to_name: 'Abhiraj Chaudhuri',
                    from_email: form.email,
                    to_email: 'abhirajchaudhuri@gmail.com',
                    message: form.message,
                },
                'F7_jMMukR6_DY7j4-'
            )

            .then(
                () => {
                    setLoading(false);
                    setAlert({
                        message:
                            'Thank you. I will get back to you as soon as possible.',
                        type: 'success',
                    });

                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    setAlert({
                        message: 'Ahh, something went wrong. Please try again.',
                        type: 'error',
                    });
                }
            );
    };

    return (
        <div className='pb-20 w-full relative' id='contact'>
            {/* White Grid */}
            <div className='h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute top-0 left-0'>
                {/* Radial gradient for the container to give a faded look */}
                <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
            </div>
            <h1 className='heading relative'>
                Contact <span className='text-purple'>Me</span>!
            </h1>
            <div
                className='border border-black/[0.2] group/canvas-card dark:border-white/[0.2]  max-w-screen-md w-[80] mx-auto md:rounded-2xl p-4 md:p-8 shadow-input bg-black-100 rounded-3xl mt-10 relative'
                style={{
                    background: 'rgb(4,7,29)',
                    backgroundColor:
                        'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                }}
            >
                <form className='my-8' onSubmit={handleSubmit} ref={formRef}>
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
                        <LabelInputContainer>
                            <Label htmlFor='name'>Your Name</Label>
                            <Input
                                id='name'
                                name='name'
                                placeholder="What's your name?"
                                type='text'
                                value={form.name}
                                onChange={handleChange}
                            />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className='mb-4'>
                        <Label htmlFor='email'>Email Address</Label>
                        <Input
                            id='email'
                            name='email'
                            placeholder="What's your email?"
                            type='email'
                            value={form.email}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className='mb-4'>
                        <Label htmlFor='message'>Your Message</Label>
                        <Input
                            id='message'
                            name='message'
                            placeholder='What do you want to say?'
                            value={form.message}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>

                    <button
                        className='bg-gradient-to-br relative group/btn bg-[#161a31] block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
                        type='submit'
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send'} &rarr;
                        <BottomGradient />
                    </button>

                    <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
                    <div className='flex space-x-4'>
                        <a
                            href='https://github.com/abhie7'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-md h-10 font-medium shadow-input bg-[#161a31] dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
                        >
                            <IconBrandGithub className='h-4 w-4 text-white' />
                            <span className='text-white text-sm'>GitHub</span>
                            <BottomGradient />
                        </a>
                        <a
                            href='https://linkedin.com/in/abhirajc'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-[#161a31] dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
                        >
                            <IconBrandLinkedin className='h-4 w-4 text-white' />
                            <span className='text-white text-sm'>LinkedIn</span>
                            <BottomGradient />
                        </a>
                    </div>
                </form>
            </div>
            {alert && (
                <Alert
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setAlert(null)}
                />
            )}
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
            <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn('flex flex-col space-y-2 w-full', className)}>
            {children}
        </div>
    );
};

export default Footer;
