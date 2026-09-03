import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Shield } from 'lucide-react';

// Importar logos
import logoDjango from '../assets/logos/django.svg';
import logoDocker from '../assets/logos/docker.svg';
import logoFastapi from '../assets/logos/fastapi.svg';
import logoFlask from '../assets/logos/flask.svg';
import logoGit from '../assets/logos/git.svg';
import logoGithub from '../assets/logos/github.svg';
import logoJss from '../assets/logos/jss.svg';
import logoLinux from '../assets/logos/linux.svg';
import logoNextjs from '../assets/logos/nextdotjs.svg';
import logoNodejs from '../assets/logos/nodedotjs.svg';
import logoPython from '../assets/logos/python.svg';
import logoReact from '../assets/logos/react.svg';
import logoSupabase from '../assets/logos/supabase.svg';
import logoTailwind from '../assets/logos/tailwindcss.svg';
import logoVite from '../assets/logos/vite.svg';

const TECH_LOGOS = [
    { name: 'React', src: logoReact },
    { name: 'Next.js', src: logoNextjs },
    { name: 'Node.js', src: logoNodejs },
    { name: 'Python', src: logoPython },
    { name: 'Django', src: logoDjango },
    { name: 'FastAPI', src: logoFastapi },
    { name: 'Flask', src: logoFlask },
    { name: 'Tailwind CSS', src: logoTailwind },
    { name: 'Vite', src: logoVite },
    { name: 'Supabase', src: logoSupabase },
    { name: 'Docker', src: logoDocker },
    { name: 'Linux', src: logoLinux },
    { name: 'Git', src: logoGit },
    { name: 'GitHub', src: logoGithub },
    { name: 'JavaScript', src: logoJss }
];

const CUSTOM_PROJECTS = [
    {
        id: 'nextfree',
        name: 'Nextfree',
        description: 'Plataforma web moderna y responsiva desarrollada para Nextfree, ofreciendo una experiencia de usuario optimizada y un diseño de vanguardia.',
        techStack: ['React', 'Next.js', 'Tailwind', 'Shadcn UI'],
        html_url: 'https://next-free.vercel.app/',
        icon: Globe
    },
    {
        id: 'crecer-psicologia',
        name: 'Crecer Psicología',
        description: 'Sitio web profesional para Crecer Psicología, enfocado en la accesibilidad, diseño amigable e información clara para los pacientes.',
        techStack: ['React', 'Next.js', 'Tailwind'],
        html_url: 'https://crecer-murex.vercel.app/',
        icon: Globe
    },
    {
        id: 'villa-garven',
        name: 'Villa Garven',
        description: 'Presencia digital para Villa Garven. Landing page y sistema diseñado con tecnologías modernas para un rendimiento óptimo.',
        techStack: ['React', 'Next.js', 'Python', 'FastAPI'],
        html_url: 'https://villagarvenweb.netlify.app/',
        icon: Globe
    }
];

// Animaciones
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => {
    return (
        <section className="bg-white text-black overflow-hidden pb-32">
            {/* Infinite Marquee Banner */}
            <div className="w-full bg-white py-6 border-y border-white/20 overflow-hidden flex whitespace-nowrap">
                <div className="animate-marquee flex items-center">
                    {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((tech, index) => (
                        <div key={index} className="mx-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                            <img
                                src={tech.src}
                                alt={tech.name}
                                title={tech.name}
                                className="h-12 w-12 md:h-16 md:w-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-6 pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">TRABAJOS</h2>
                        <p className="mt-4 text-gray-500 font-light text-lg">Explora mis proyectos recientes en producción.</p>
                    </div>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {CUSTOM_PROJECTS.map((repo) => {
                        const IconComponent = repo.icon;
                        return (
                            <motion.div
                                key={repo.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-[#f5f5f5] border border-black/5 rounded-3xl p-8 hover:bg-black hover:text-white transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-bl-full -z-10 group-hover:bg-white/10 transition-colors duration-500 blur-2xl"></div>
                                
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white group-hover:bg-white/10 rounded-2xl transition-colors">
                                            <IconComponent size={28} className="text-black group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-xs bg-black/10 text-black font-semibold px-4 py-1.5 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors shadow-sm">
                                            En Producción
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{repo.name}</h3>
                                    <p className="text-sm opacity-70 mb-6 font-light leading-relaxed">
                                        {repo.description}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {repo.techStack.map((tech, i) => (
                                            <span key={i} className="text-xs font-medium px-2 py-1 bg-black/5 group-hover:bg-white/10 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between pt-5 border-t border-black/10 group-hover:border-white/20 transition-colors">
                                        <span className="text-xs uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                                            Ver Sitio Web
                                        </span>
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-black text-white group-hover:bg-white group-hover:text-black rounded-full hover:scale-110 transition-transform shadow-md"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Confidentiality Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-16 bg-[#f5f5f5] border border-black/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-gray-600 hover:shadow-md transition-shadow duration-300"
                >
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-black/5">
                        <Shield size={24} className="text-black" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-black mb-2 text-center sm:text-left text-lg">Experiencia Corporativa y Proyectos Confidenciales</h4>
                        <p className="text-sm font-light leading-relaxed text-center sm:text-left text-gray-600">
                            Además de los trabajos mostrados, cuento con experiencia desarrollando diversos <strong>sistemas y proyectos de automatización</strong> en mi entorno laboral. Por acuerdos de confidencialidad, dichos proyectos no pueden ser exhibidos públicamente en este portafolio.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
