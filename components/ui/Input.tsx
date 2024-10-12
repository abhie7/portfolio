// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id?: string; // Add an id prop
}

const Input = React.forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    InputProps
>(({ className, id, rows = 7, type, ...props }, ref) => {
    const radius = 100; // Change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            style={{
                background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className='p-[2px] rounded-lg transition duration-300 group/input'
        >
            {id === 'message' ? (
                <textarea
                    rows={rows}
                    className={cn(
                        `flex w-full border-none bg-[#161a31] text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
                        file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white-100 dark:placeholder-text-neutral-600
                        focus-visible:outline-none focus-visible:ring-0
                        disabled:cursor-not-allowed disabled:opacity-50
                        dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                        transition duration-400`,
                        className
                    )}
                    ref={ref as React.Ref<HTMLTextAreaElement>}
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    className={cn(
                        `flex h-10 w-full border-none bg-[#161a31] text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
                        file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white-100 dark:placeholder-text-neutral-600
                        focus-visible:outline-none focus-visible:ring-0
                        disabled:cursor-not-allowed disabled:opacity-50
                        dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                        transition duration-400`,
                        className
                    )}
                    ref={ref as React.Ref<HTMLInputElement>}
                    {...props}
                />
            )}
        </motion.div>
    );
});
Input.displayName = 'Input';

export { Input };
