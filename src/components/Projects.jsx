import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Globe } from 'lucide-react';

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

// Reemplaza "Echxvx2610" con tu usuario de GitHub
const GITHUB_USERNAME = 'Echxvx2610';

// Proyectos personalizados que no necesariamente son repositorios de GitHub (e.g., sitios en producción)
const CUSTOM_PROJECTS = [
    {
        id: 'external-1',
        isExternal: true,
        name: 'Sitio Web Corporativo',
        description: 'Desarrollo de landing page y sistema de gestión para empresa local.',
        language: 'Next.js',
        html_url: 'https://ejemplo.com',
        icon: Globe
    }
];

const PINNED_REPOS = [
    'appBudget',
    'sistema_tickets',
    'RegistroReparaciones',
    'django_mantto_feeder',
    'Sistema_inventario',
    'figuras_geometricas'
];

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Obtenemos repositorios recientes
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();

                let fetchedRepos = [];

                if (PINNED_REPOS.length > 0) {
                    // Si el usuario definió 'pinned repos', los filtramos
                    // Convertimos a minúsculas para evitar problemas de mayúsculas
                    const pinnedLower = PINNED_REPOS.map(name => name.toLowerCase());
                    fetchedRepos = data.filter(repo => pinnedLower.includes(repo.name.toLowerCase()));
                } else {
                    // Fallback: mostrar solo los 6 repositorios más recientes que no sean forks
                    fetchedRepos = data.filter(repo => !repo.fork).slice(0, 6);
                }

                // Homogeneizar los datos de GitHub para que coincidan con la estructura de CUSTOM_PROJECTS
                const formattedGithubRepos = fetchedRepos.map(repo => ({
                    id: repo.id,
                    isExternal: false,
                    name: repo.name,
                    description: repo.description,
                    language: repo.language,
                    html_url: repo.html_url,
                    stargazers_count: repo.stargazers_count,
                    forks_count: repo.forks_count,
                    icon: Github
                }));

                // Combinamos los custom con los extraídos de github
                setRepos([...CUSTOM_PROJECTS, ...formattedGithubRepos]);
            } catch (error) {
                console.error("Error fetching repos:", error);
                // Si falla GitHub, mostramos al menos los proyectos personalizados
                setRepos(CUSTOM_PROJECTS);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

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
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">TRABAJOS</h2>
                        <p className="mt-4 text-gray-500 font-light text-lg">Explora mis desarrollos y repositorios recientes.</p>
                    </div>
                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 md:mt-0 flex items-center gap-2 pb-1 border-b border-black hover:pr-4 transition-all"
                    >
                        Ver Github <Github size={18} />
                    </a>
                </motion.div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-2xl"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pointer-events-auto">
                        {repos.map((repo, idx) => {
                            const IconComponent = repo.icon;
                            return (
                                <motion.div
                                    key={repo.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative bg-[#f5f5f5] rounded-2xl p-8 hover:bg-black hover:text-white transition-colors duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <IconComponent size={32} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                                            {!repo.isExternal && (
                                                <div className="flex gap-4 text-sm font-medium">
                                                    <span className="flex items-center gap-1"><Star size={16} /> {repo.stargazers_count}</span>
                                                    <span className="flex items-center gap-1"><GitFork size={16} /> {repo.forks_count}</span>
                                                </div>
                                            )}
                                            {repo.isExternal && (
                                                <span className="text-xs bg-black/10 text-black px-3 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors">
                                                    En Producción
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3 line-clamp-1">{repo.name}</h3>
                                        <p className="text-sm opacity-60 line-clamp-3 mb-6 font-light">
                                            {repo.description || 'Sin descripción disponible.'}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/10 group-hover:border-white/10 transition-colors">
                                        <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                                            {repo.language || 'Code'}
                                        </span>
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
