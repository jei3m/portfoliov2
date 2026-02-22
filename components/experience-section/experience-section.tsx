'use client';
import { DATA } from '@/lib/data/data';
import { ExperienceCard } from './ExperienceCard';
import { Reveal } from '@/components/custom-wrapper/Reveal';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-[10rem] scroll-mt-28 p-4 md:p-6 lg:p-4 xl:p-0"
    >
      <div className="flex min-h-0 flex-col gap-y-3">
        <Reveal
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
          }}
        >
          <div className="flex flex-row justify-between border-b border-neutral-700 pb-4">
            <h2 className="text-2xl md:text-5xl text-yellow-50 font-semibold">
              Experience.
            </h2>
            <p className="text-right mt-4 mb-[-1rem] text-[10px] font-normal md:text-2xl text-yellow-50">
              {'//'}{' '}
              <span className="text-cyan-400">
                Striving
              </span>{' '}
              for{' '}
              <span className="text-green-400">growth</span>{' '}
              and{' '}
              <span className="text-purple-400">
                innovation
              </span>
              .
            </p>
          </div>
        </Reveal>
        {DATA.experience.map((experience, id) => (
          <Reveal
            key={id}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: id / 30 },
            }}
          >
            <ExperienceCard
              key={experience.company}
              logoUrl={experience.logoUrl}
              altText={experience.company}
              title={experience.company}
              subtitle={experience.title}
              href={experience.href}
              period={`${experience.start} - ${experience.end ?? 'Present'}`}
              description={experience.description}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
