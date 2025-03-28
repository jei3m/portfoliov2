"use client";
import { useState, useEffect } from 'react';
import { DATA } from "@/lib/data/data";
import { Reveal } from '@/components/custom-wrapper/Reveal';
import { ProjectCard } from './project-card';
import { TransitionLink } from '../custom-wrapper/TransitionLink';
import { FiArrowRightCircle } from "react-icons/fi";

const ProjectsGrid = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [visibleProjects] = useState(4); 

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Set initial value
        handleResize();
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="bg-gray/10 backdrop-blur-sm flex p-4 md:p-6 lg:p-4 xl:p-0">
            <div className="mx-auto flex flex-col items-center justify-center relative">
                <section id="projects" className="w-full">
                    <Reveal
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                    >
                        <h2 className='text-2xl md:text-5xl font-semibold text-yellow-50 border-b border-neutral-700 pb-4'>Featured Projects.</h2>
                        <p className="text-right mt-4 text-xs font-normal md:text-2xl text-yellow-50">
                            {'//'} My <span className='text-purple-400'>personal</span> and <span className='text-orange-400'>school</span> projects.
                        </p>
                    </Reveal>

                    <div className="flex items-stretch h-full pt-[1rem]">
                        {/* Projects Container */}
                        <Reveal
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                        >
                            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-10 mx-3 lg:mx-0 items-stretch`}>
                                {DATA.projects.slice(0, visibleProjects).map((project, index) => (
                                    <Reveal
                                        key={`${project.title}-${index}`}
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: index / 30 } }}
                                    >
                                        <div className="h-full">
                                            <ProjectCard
                                                title={project.title}
                                                type={project.type}
                                                description={project.description}
                                                imageUrl={project.imageUrl}
                                                githubUrl={project.githubUrl}
                                                skills={project.skills}
                                            />
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    <div className="flex justify-center pt-20 md:pt-[6rem] lg:pt-[8rem] gap-4">
                        <TransitionLink href="/projects">
                            <button
                                className="shadow-[inset_0_0_0_2px_#616467] 
                                rounded-full 
                                py-1.5 px-3.5 md:py-2 md:px-5 
                                flex flex-row 
                                text-md md:text-3xl 
                                font-normal 
                                text-neutral-400 
                                hover:text-yellow-50 
                                transition-colors duration-200"
                            >
                                <span className='mt-[1px]'>View All</span><FiArrowRightCircle className='mt-0.5 ml-1 h-5 w-5 md:h-8 md:w-8'/>
                            </button>
                        </TransitionLink>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectsGrid;