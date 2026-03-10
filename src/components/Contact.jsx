import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';



const Contact = () => {
    const email = import.meta.env.VITE_EMAIL;
    return (
        <section className="relative min-h-[50vh] flex flex-col items-center justify-center bg-black text-white py-32 overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
                >
                    HABLEMOS.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl font-light opacity-80 mb-16"
                >
                    ¿Tienes un proyecto en mente o solo quieres saludar? <br /> Estoy disponible para nuevas oportunidades.
                </motion.p>

                <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    href="mailto:[EMAIL_ADDRESS]"
                    className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform"
                >
                    <Mail size={24} />
                    Enviar Mensaje
                </motion.a>

                <div className="mt-32 flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-10">
                    <p className="text-white/60 text-sm mb-6 md:mb-0">
                        © {new Date().getFullYear()} Cristian Echevarria Mendoza.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
