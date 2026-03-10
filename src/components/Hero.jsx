import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Split: Left side black, Right side white */}
            <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 h-full bg-white"></div>
            </div>

            {/* Content Layer with mix-blend-difference to invert text based on background */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mix-blend-difference pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-tighter"
                >
                    <span className="italic -translate-x-6 md:-translate-x-12 lg:-translate-x-24">CRISTIAN</span>
                    <span className="italic font-light translate-x-6 md:translate-x-12 lg:translate-x-24">ECHEVARRIA</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-8 text-xl md:text-2xl text-white font-light max-w-2xl"
                >
                    Creando experiencias digitales modernas, minimalistas y eficientes.
                </motion.p>
            </div>

            {/* Down indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 mix-blend-difference text-white flex flex-col items-center gap-2"
            >
                <span className="text-sm uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                        className="absolute inset-0 bg-white"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
