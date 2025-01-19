"use client";
import { useState, useEffect } from 'react';
import { Reveal } from '@/components/custom-wrapper/Reveal';
import { ProjectCard } from '@/components/project-section/project-card';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { DATA } from '@/lib/data/data';

function Page() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-zinc-950 flex flex-col mx-auto backdrop-blur-sm flex">
            <div className='mx-auto max-w-6xl '>
                <Header />
                <div className="pt-[6rem] relative mx-auto px-2 md:px-4 lg:px-0 flex flex-col items-center justify-center relative pb-20">
                    <section id="projects" className="w-full">
                        <Reveal
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                        >
                            <h2 className='text-2xl md:text-5xl font-semibold text-yellow-50 border-b border-neutral-700 pb-4'>My Projects.</h2>
                            <p className="text-right mt-4 mb-[-1rem] text-xs font-normal md:text-2xl text-yellow-50">
                                {'//'} A <span className='text-cyan-400'>collection</span> of my <span className='text-purple-400'>personal</span> and <span className='text-orange-400'>school</span> projects.
                            </p>
                        </Reveal>

                        <div className="flex items-stretch">
                            {/* Projects Container */}
                            <div className={`
                                grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-10
                                transition-all duration-500 ease-in-out
                                mx-3 lg:mx-0
                            `}>
                                {DATA.projects.map((project, index) => (
                                    <Reveal
                                        key={`${project.title}-${index}`}
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: index / 30 } }}
                                    >
                                        <div className={`
                                            ${isMobile ? 'w-full' : 'w-auto'}
                                            transform transition-all duration-500
                                            flex items-stretch
                                        `}>
                                            <ProjectCard
                                                title={project.title}
                                                type={project.type}
                                                description={project.description}
                                                imageUrl={project.imageUrl}
                                                githubUrl={project.githubUrl}
                                                // demoUrl={project.demoUrl}
                                                skills={project.skills}
                                            />
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;