// 'use client'
import EducationSection from '@/components/education-section/education-section'
import ExperienceSection from '@/components/experience-section/experience-section'
// import { HoverImageLinks } from '@/components/HoverImageLinks'
import Hero from '@/components/hero-section/hero'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import Header from '@/components/header/Header'
import ProjectSection from '@/components/project-section/project-section'
import { HoverImageLinks } from '@/components/HoverImageLinks'
import TechStack from '@/components/tech-section/TechStack'
import Footer from '@/components/footer/Footer'

export default function Home() {

  // useEffect(() => {
  //   if ('scrollRestoration' in window.history) {
  //     window.history.scrollRestoration = 'manual';
  //   }
  // }, []);

  return (
    <section>
      <div className='mx-auto bg-zinc-950'>

        <div className='max-w-6xl p-4 md:p-6 lg:p-10'>
          <Header />
        </div>

        <div className='mx-auto max-w-6xl p-2 sm:p-6 md:p-0'>
          <Hero />
          <EducationSection/>
          <ExperienceSection/>
          <ProjectSection/>
          <TechStack/>
        </div>

        <Footer/>

      </div>
    </section>
  )
}
