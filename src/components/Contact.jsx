import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.128.552 4.148 1.6 5.952L.15 24l6.196-1.442c1.748.948 3.69 1.448 5.685 1.448 6.648 0 12.031-5.383 12.031-12.031S18.679 0 12.031 0zm0 21.986c-1.802 0-3.568-.484-5.116-1.402l-.367-.217-3.805.885.898-3.71-.238-.38c-.996-1.583-1.521-3.419-1.521-5.331 0-5.526 4.498-10.024 10.024-10.024 5.526 0 10.024 4.498 10.024 10.024S17.557 21.986 12.031 21.986zm5.503-7.534c-.302-.151-1.785-.882-2.062-.983-.277-.1-.478-.151-.68.151-.202.302-.781.983-.957 1.184-.176.202-.353.227-.655.076-1.874-.955-3.235-2.086-4.27-4.102-.128-.249.123-.23.418-.82.088-.176.044-.327-.031-.478-.076-.151-.68-1.638-.931-2.242-.244-.59-.493-.51-.68-.52-.176-.01-.378-.01-.58-.01s-.529.076-.806.378c-.277.302-1.058 1.033-1.058 2.519s1.083 2.922 1.234 3.123c.151.202 2.128 3.25 5.151 4.551 1.956.841 2.816.942 3.93.791 1.298-.176 2.768-1.134 3.158-2.231.39-1.096.39-2.035.274-2.231-.116-.196-.418-.297-.72-.448z"/>
  </svg>
);

const Contact = () => {
    // Obtenemos el número desde las variables de entorno
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <section className="relative min-h-[50vh] flex flex-col items-center justify-center bg-black text-white py-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#25D366]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                        HABLEMOS.
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl md:text-2xl font-light opacity-80 mb-16"
                >
                    ¿Tienes un proyecto en mente o solo quieres saludar? <br /> Estoy disponible para nuevas oportunidades.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.4 
                    }}
                >
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-12 py-6 rounded-full text-lg font-bold overflow-hidden shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] transition-shadow duration-500"
                    >
                        {/* Hover fill effect */}
                        <div className="absolute inset-0 bg-[#25D366] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        
                        <WhatsAppIcon size={28} className="relative z-10 text-[#25D366] group-hover:text-white transition-colors duration-500" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                            Escríbeme por WhatsApp
                        </span>
                    </a>
                </motion.div>

                <div className="mt-32 flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-10">
                    <p className="text-white/60 text-sm mb-6 md:mb-0">
                        © {new Date().getFullYear()} Cristian Echevarria Mendoza.
                    </p>
                    <div className="flex gap-6">
                        <motion.a 
                            whileHover={{ scale: 1.2, color: "#fff" }}
                            whileTap={{ scale: 0.9 }}
                            href="#" 
                            className="text-white/60 transition-colors"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.2, color: "#fff" }}
                            whileTap={{ scale: 0.9 }}
                            href="#" 
                            className="text-white/60 transition-colors"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.2, color: "#fff" }}
                            whileTap={{ scale: 0.9 }}
                            href={`mailto:${import.meta.env.VITE_EMAIL || ''}`} 
                            className="text-white/60 transition-colors"
                        >
                            <Mail size={24} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
