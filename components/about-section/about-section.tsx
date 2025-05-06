import React from 'react'
import { Reveal } from '@/components/custom-wrapper/Reveal';
import Image from 'next/image';
import { LuSparkle } from "react-icons/lu";

export default function AboutSection() {
  return (
    <section id="education" className='mb-[14rem] mt-[5rem] scroll-mt-28 p-4 md:p-6 lg:p-4 xl:p-0'>
        <div className="flex min-h-0 flex-col gap-y-3">
            <Reveal
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
            >
                <div className='flex flex-col md:flex-row justify-center gap-x-6'>
                    <Image
                        src="/images/authors/JustinGrad.jpg"
                        alt="Justin Miguel"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="p-[2px] bg-neutral-700 mx-auto mb-4 md:mb-0 rounded-3xl object-cover w-[90%] md:w-[34%] xl:w-[34%] h-auto aspect-[4/4] md:aspect-[5/6]"
                    />
                    <div className='flex flex-col justify-between'>
                        <div>
                        <h2 className='font-semibold inline-flex items-center text-xl md:text-3xl lg:text-5xl 
                            text-yellow-50 text-justify border-b border-neutral-700 pb-4 w-full'
                        >
                            I'm Justin Miguel.
                        </h2>
                        <h3 className='my-4 items-center text-lg md:text-2xl lg:text-3xl xl:text-4xl
                            text-yellow-50 xl:text-justify'
                        >
                            A <strong className='text-orange-400'>Computer Engineering</strong> graduate and a Full Stack <strong className='text-purple-400'>Web Developer</strong>, from the <strong className='text-red-400'>Philippines</strong>.
                            <br/>
                            <br/>
                            I specialize in <strong className='text-yellow-300'>JavaScript</strong> frameworks, focused on delivering web-based <strong className='text-cyan-400'>solutions</strong>.
                        </h3>
                        </div>
                        <a href="/resume/ReyesJustinMiguel_Resume.pdf" target="_blank" rel="noopener noreferrer" className='mx-auto md:mx-0'>
                            <div className="flex flex-row items-center shadow-[inset_0_0_0_2px_#616467] hover:shadow-[inset_0_0_0_2px_#FFFFFF] rounded-full text-sm px-3 py-2 text-yellow-50 md:text-lg md:px-6 md:py-3 font-semibold bg-transparent transition-all inline-flex w-fit cursor-pointer">              
                                <LuSparkle className='text-xl md:text-xl mr-2'/>My Resume <LuSparkle className='text-xl md:text-xl ml-2'/>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </Reveal>
        </div>
    
    </section>
  )
};
