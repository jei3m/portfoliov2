import React from 'react';
import { Brain } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from "./3d-card";
import Image from 'next/image';
import techStackData from '@/lib/data/techData.json';
import { Reveal } from '@/components/custom-wrapper/Reveal';

interface TechStackItem {
  title: string;
  description: string;
  icon?: string;
  icons?: string[];
  isLucideIcon?: boolean;
  LucideIcon?: typeof Brain;
}

const techStack: TechStackItem[] = techStackData.map(item => ({
  ...item,
  LucideIcon: item.LucideIcon === 'Brain' ? Brain : undefined,
}));

const TechStack: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center md:pb-0 p-4 md:p-6 lg:p-4 xl:p-0">
      <div className="mx-auto">
        
        {/* Header Section */}
        <Reveal
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        >
            <div className="pt-[3rem] xl:pt-0">
                <h2 className='text-2xl md:text-5xl font-semibold text-yellow-50 border-b border-neutral-700 pb-4'>Tech Stack.</h2>


                <p className="mt-4 mb-[-0.5rem] text-right text-xs font-normal md:text-2xl text-yellow-50">
                  {'//'} Always <span className='text-green-400'>learning</span> and <span className='text-cyan-400'>adapting</span>.
                </p>
            </div>
        </Reveal>

        {/* Tech Cards Grid */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5 pb-[3rem] xl:pb-0">
          {techStack.map((tech, index) => (
              <Reveal
               key={index}
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: index / 30 } }}
              >
                <CardContainer key={index} className="mt-[-10px] mb-[1rem] w-full h-auto">
                    <CardBody className="mb-[-76px] relative w-full h-full border border-white/[0.4] rounded-xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-500/[0.1] transition-all duration-300 flex flex-col">
                      <CardItem
                        translateZ="64"
                        className="flex flex-row items-center gap-4 p-4 pb-2"
                      >
                        <div className="flex-shrink-0 flex gap-2 bg-neutral-800 p-2 rounded-lg">
                          {tech.isLucideIcon && tech.LucideIcon ? (
                            <tech.LucideIcon className="w-7 h-7 text-white" />
                          ) : tech.icons ? (
                            tech.icons.map((icon, i) => (
                              <Image
                                key={i}
                                src={icon}
                                alt={`${tech.title} icon ${i + 1}`}
                                className="w-7 h-7"
                                width={30}
                                height={30}
                              />
                            ))
                          ) : (
                            <Image
                              src={tech.icon!}
                              alt={`${tech.title} icon`}
                              className="w-7 h-7"
                              width={30}
                              height={30}
                            />
                          )}
                        </div>
                        <CardItem
                          translateZ="0"
                          as="h3"
                          className="text-xl font-semibold text-yellow-50 truncate"
                        >
                          {tech.title}
                        </CardItem>
                      </CardItem>
                      <CardItem
                        translateZ="60"
                        className="flex-1 p-5 pt-0 overflow-hidden"
                      >
                        <p className="text-white/80 line-clamp-3">
                          {tech.description}
                        </p>
                      </CardItem>
                    </CardBody>
                </CardContainer>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;