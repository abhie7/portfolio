'use client';

import { navItems } from '@/data';

import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
// import Clients from '@/components/Clients';
import Approach from '@/components/Approach';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import { FloatingNav } from '@/components/ui/FloatingNav';

const Home = () => {
    return (
        <main className='relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
            <div className='max-w-7xl w-full'>
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <Projects />
                <Experience />
                <Approach />
                <Footer />
                {/* <Clients />*/}
            </div>
        </main>
    );
};

export default Home;
