'use client'
import { DATA } from "@/lib/data/data";
import { EducationCard } from './EducationCard';
import { Reveal } from '@/components/custom-wrapper/Reveal';


export default function EducationSection() {

  return (
    <section id="education" className='mb-[14rem] mt-[5rem] scroll-mt-28 p-4 md:p-6 lg:p-4 xl:p-0'>
        <div className="flex min-h-0 flex-col gap-y-3">
            <Reveal
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            >
                <div className="flex flex-row justify-between border-b border-neutral-700 pb-4">
                    <h2 className='text-2xl md:text-5xl text-yellow-50 font-semibold'>Education.</h2>
                    <p className="text-right mt-4 mb-[-1rem] font-normal text-[10px] md:text-2xl text-yellow-50">
                        {'//'} My <span className='text-cyan-400'>journey</span> through the <span className='text-orange-400'>academe</span>.
                    </p>
                </div>
            </Reveal>
        {DATA.education.map((education, id) => (

            <Reveal
                key={id}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: id / 30 } }}
            >
                <EducationCard
                    key={education.company}
                    logoUrl={education.logoUrl}
                    altText={education.company}
                    title={education.company}
                    subtitle={education.title}
                    href={education.href}
                    badges={education.badges}
                    period={`${education.start} - ${education.end ?? "Present"}`}
                    description={education.description}
                />
            </Reveal>
        ))}
        </div>
    
  </section>
  )
}
