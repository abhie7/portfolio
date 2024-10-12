import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AlertProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

const Alert = ({ message, type, onClose }: AlertProps) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3500);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={cn(
                'fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-3xl font-base shadow-lg z-50',
                {
                    'bg-green-500 text-white': type === 'success',
                    'bg-red-500 text-white': type === 'error',
                }
            )}
        >
            {message}
        </div>
    );
};

export default Alert;
