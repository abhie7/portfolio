import React from 'react';

import { workExperience } from '@/data';
import { Button } from './ui/MovingBorders';

const Experience = () => {
    return (
        <div className='py-20 w-full' id='experience'>
            <h1 className='heading'>
                My <span className='text-purple'>Work Experience</span>
            </h1>

            <div className='w-full items-center flex justify-center mt-12 lg:flex-cols-4 flex-cols-1 gap-10'>
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius='1.75rem'
                        style={{
                            background: 'rgb(4,7,29)',
                            backgroundColor:
                                'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        className='flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800'
                    >
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className='lg:w-32 md:w-20 w-16'
                            />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold md:mt-2 sm:mt-5'>
                                    {card.title}
                                </h1>

                                <h2 className='text-start text-l text-purple md:text-l font-semibold mt-2'>
                                    {card.companyName}
                                </h2>
                                <ul className='mt-5 list-disc ml-5 space-y-2 text-left'>
                                    {card.points.map((point, index) => (
                                        <li
                                            key={index}
                                            className='text-white font-semibold pl-1'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <p className='text-start text-sm md:text-md text-white font-semibold mt-5'>
                                    {card.duration}
                                </p>
                                <p className='text-start text-sm md:text-md text-white font-semibold mt-1'>
                                    {card.loc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;
