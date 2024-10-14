import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';
import { cn } from '@/lib/utils';
import { BackgroundGradientAnimation } from './GradientBg';
import { GlobeDemo } from './GridGlobe';
import animationData from '@/data/confetti.json';
import MagicButton from './MagicButton';
import { getAllSkills } from '@/data';
import { Modal, ModalBody, ModalContent, ModalTrigger } from './AnimatedModal'; // Make sure this path is correct

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ['Python', 'NLP', 'PyTorch'];
    const rightLists = ['RAG', 'Agents', 'LLMs'];

    const [copied, setCopied] = useState(false);
    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const handleCopy = () => {
        const text = 'abhirajchaudhuri@gmail.com';
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    const allSkills = getAllSkills();

    return (
        <Modal>
            <ModalTrigger
                className={cn(
                    'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
                    className
                )}
                style={{
                    background: 'rgb(4,7,29)',
                    backgroundColor:
                        'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                }}
            >
                <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                    <div className='w-full h-full absolute'>
                        {img && (
                            <img
                                src={img}
                                alt={img}
                                className={cn(
                                    imgClassName,
                                    'object-cover object-center '
                                )}
                            />
                        )}
                    </div>
                    <div
                        className={`absolute right-0 -bottom-5 ${
                            id === 5 && 'w-full opacity-80'
                        } `}
                    >
                        {spareImg && (
                            <img
                                src={spareImg}
                                alt={spareImg}
                                className='object-cover object-center w-full h-full'
                            />
                        )}
                    </div>
                    {id === 6 && (
                        <BackgroundGradientAnimation></BackgroundGradientAnimation>
                    )}

                    <div
                        className={cn(
                            titleClassName,
                            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                        )}
                    >
                        <div className='font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
                            {description}
                        </div>
                        <div
                            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-99`}
                        >
                            {title}
                        </div>

                        {id === 2 && <GlobeDemo />}

                        {id === 3 && (
                            <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
                                <div className='flex flex-col gap-3 md:gap-3 lg:gap-5 xl:gap-8'>
                                    {leftLists.map((item, i) => (
                                        <span
                                            key={i}
                                            className='marker:lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]'
                                        >
                                            {item}
                                        </span>
                                    ))}
                                    <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]'></span>
                                </div>
                                <div className='flex flex-col gap-3 md:gap-3 lg:gap-8'>
                                    <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]'></span>
                                    {rightLists.map((item, i) => (
                                        <span
                                            key={i}
                                            className='marker:lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]'
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {id === 6 && (
                            <div className='mt-5 relative'>
                                <div
                                    className={`absolute -bottom-5 right-0 ${
                                        copied ? 'block' : 'block'
                                    }`}
                                >
                                    <Lottie
                                        options={defaultOptions}
                                        height={200}
                                        width={400}
                                    />
                                </div>

                                <MagicButton
                                    title={
                                        copied
                                            ? 'Email is Copied!'
                                            : 'Copy my Email Address'
                                    }
                                    icon={<IoCopyOutline />}
                                    position='left'
                                    handleClick={handleCopy}
                                    otherClasses='!bg-[#161A31] sm:!bg-[#161A31] md:!bg-[#1A1F41] lg:!bg-[#1E2349] xl:!bg-[#22275F] text-xs sm:text-sm md:text-base lg:text-base xl:text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-4 lg:py-4 xl:py-4'
                                />
                            </div>
                        )}
                    </div>
                </div>
            </ModalTrigger>
            {id === 3 && (
                <ModalBody>
                    <ModalContent>
                        <h2 className='text-xl font-bold mb-4'>
                            My Tech Stack
                        </h2>
                        <div className='md:flex lg:flex xl:flex flex-wrap gap-4 sm:grid'>
                            {allSkills.map((skillCategory, index) => (
                                <div
                                    key={index}
                                    className='bg-[#0d1021] rounded-lg p-4 mt-4 flex-1 min-w-[calc(50%-1rem)] sm:min-w-[calc(50%-1rem)] md:min-w-[calc(33.33%-1rem)] lg:min-w-[calc(25%-1rem)]'
                                >
                                    <h3 className='text-lg font-semibold mb-2'>
                                        {skillCategory.domain}
                                    </h3>
                                    <ul className='list-none text-white-100'>
                                        {skillCategory.skills.map(
                                            (skill, skillIndex) => (
                                                <li
                                                    key={skillIndex}
                                                    className='text-sm mb-1 flex items-center'
                                                >
                                                    <skill.icon className='mr-2' />
                                                    <span className='ml-2'>
                                                        {skill.name}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </ModalContent>
                </ModalBody>
            )}
        </Modal>
    );
};
