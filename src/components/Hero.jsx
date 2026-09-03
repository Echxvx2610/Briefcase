import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Hero = () => {
    const cursorX = useMotionValue(-1000);
    const cursorY = useMotionValue(-1000);
    
    // Smooth spring configuration for the cursor follower
    const springConfig = { damping: 30, stiffness: 150 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            // Offset by half the width/height (500px / 2 = 250px) to center the spotlight
            cursorX.set(e.clientX - 250);
            cursorY.set(e.clientY - 250);
        };
        
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
            {/* Subtle Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>

            {/* Mouse Spotlight (Desktop) */}
            <motion.div
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] pointer-events-none opacity-80"
            />

            {/* Mobile Animated Spotlight (No mouse on mobile) */}
            <motion.div 
                animate={{ 
                    x: ['-20%', '80%', '-20%'],
                    y: ['-10%', '80%', '-10%']
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="md:hidden absolute top-[10%] left-0 w-[300px] h-[300px] bg-white rounded-full blur-[80px] pointer-events-none opacity-60"
            />

            {/* Content Layer (mix-blend-difference makes text invert perfectly over the spotlight) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 h-full flex flex-col justify-center mix-blend-difference pointer-events-none">
                
                {/* Main Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col justify-center mt-10 md:mt-0"
                >
                    <h1 className="flex flex-col text-white tracking-tighter uppercase font-black w-full" style={{ fontSize: 'clamp(3.5rem, 13vw, 12rem)', lineHeight: '0.85' }}>
                        <span className="text-left block italic pr-4 md:pr-8">CRISTIAN</span>
                        <span className="text-right block italic pl-4 md:pl-8">ECHEVARRIA</span>
                    </h1>
                </motion.div>

                {/* Subtitle and Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="mt-12 sm:mt-20 lg:mt-24 w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-12"
                >
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-xl text-center md:text-left leading-relaxed">
                        Desarrollador <span className="text-white font-medium">Full Stack</span> creando 
                        experiencias digitales modernas, sistemas eficientes y automatizaciones.
                    </p>

                    {/* Floating tags */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-md">
                        {['Desarrollo Web', 'Sistemas', 'Automatización'].map((tag, index) => (
                            <span key={index} className="px-4 py-1.5 sm:py-2 rounded-full border border-white/20 text-white text-xs sm:text-sm tracking-widest uppercase bg-white/5 backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 mix-blend-difference text-white flex flex-col items-center gap-3 pointer-events-none"
            >
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium opacity-70">Scroll</span>
                <div className="w-[1px] h-10 sm:h-12 bg-white/30 relative overflow-hidden">
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
