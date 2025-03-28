import Image from 'next/image'
import authorImage from '@/public/images/authors/memoji.png'
import { Reveal } from '@/components/custom-wrapper/Reveal'
import { FiArrowDown } from "react-icons/fi";
import GridPattern from '@/components/ui/grid-pattern'
import { cn } from "@/lib/utils"
import ScrollLink from '@/components/custom-wrapper/ScrollLink';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaRegEnvelope } from 'react-icons/fa6'
import { CgFileDocument } from "react-icons/cg";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Hero() {

  return (
    <section id="intro" className='flex items-center text-center h-screen'>
      <div className='flex-2 mx-auto mt-[-4rem] xl:mt-[-5rem] relative z-30'>
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
          {/* Image with higher z-index to stand out */}
          <div className="flex justify-center relative">
            {/* Centered Image */}
            <Image
              src={authorImage}
              alt="Author"
              width={280}
              height={280}
              quality={100}
              className="mb-2"
            />
            {/* Text aligned to the right of the image */}
            <div className="absolute right-1/2 transform -translate-x-[50px] translate-y-[88px] shadow-[inset_0_0_0_2px_#616467] text-yellow-50 text-sm px-2 py-1 md:px-4 md:py-2 md:text-lg rounded-full">
              I&apos;m Justin!
            </div>
          </div>
          <h1 className='max-w-xl text-purple-400 text-4xl md:text-7xl lg:text-8xl font-medium mx-auto mb-1'>
            COMPUTER 
          </h1>
          <div className='flex flex-row justify-center items-center gap-2 md:gap-4 mb-1'>          
            <h1 className='text-4xl md:text-7xl lg:text-8xl  font-medium text-yellow-50'>
              ENGINEER 
            </h1>
            <ScrollLink id='education'>
              <div className="flex flex-row shadow-[inset_0_0_0_2px_#616467] rounded-full uppercase text-sm px-3 py-2 text-yellow-50 md:text-lg md:px-6 md:py-3 font-semibold bg-transparent transition-all">              
                and also <FiArrowDown className='text-xl md:text-2xl border-2 border-black dark:border-white rounded-full ml-2'/>
              </div>
            </ScrollLink>
          </div>
          <h1 className='text-4xl md:text-7xl lg:text-8xl font-medium mx-auto text-yellow-50'>
            <span className='text-orange-300'></span> WEB <span className='text-cyan-300'>DEVELOPER</span>
          </h1>
        </Reveal>

        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        >
          <p className='mt-3 font-normal text-sm md:text-2xl text-muted-foreground max-w-xs md:max-w-2xl mx-auto'>
            I&apos;m an aspiring Software Engineer with foundations in Web Development, IoT, and IT.
          </p>
        </Reveal>

        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          {/* Use Tailwind classes for flex layout */}
          <TooltipProvider>
            <div className="flex items-center justify-center gap-5 mt-8">
              {/* Email Icon with Tooltip */}
              <Tooltip>
                <a href="mailto:justinmiguel.rys03@gmail.com">
                  <TooltipTrigger>
                    <FaRegEnvelope className="h-8 w-8 md:h-10 md:w-10 text-yellow-50 mt-2" />
                  </TooltipTrigger>
                </a>
                <TooltipContent>
                  <p>Email</p>
                </TooltipContent>
              </Tooltip>

              {/* Facebook Icon with Tooltip */}
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://www.facebook.com/justinmiguel.reyes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare className="h-7 w-7 md:h-9 md:w-9 text-yellow-50" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Facebook</p>
                </TooltipContent>
              </Tooltip>

              {/* GitHub Icon with Tooltip */}
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://github.com/jei3m"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubSquare className="h-7 w-7 md:h-9 md:w-9 text-yellow-50" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

              {/* LinkedIn Icon with Tooltip */}
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://www.linkedin.com/in/justin-miguel-reyes-175323327/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="h-7 w-7 md:h-9 md:w-9 text-yellow-50" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              {/* Resume Icon with Tooltip */}
              <Tooltip>
                <TooltipTrigger>
                  <a href="/resume/ReyesJustinMiguel_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <CgFileDocument className="h-7 w-7 md:h-10 md:w-10 text-yellow-50" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Resume</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </Reveal>
      </div>

      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] -translate-y-[40px] md:-translate-y-[100px] ",
        )}
      />
    </section>
  )
}