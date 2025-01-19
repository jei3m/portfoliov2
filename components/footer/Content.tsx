import React from 'react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'; // Adjust the import based on your setup
import { Mail, FileText } from 'lucide-react'; // Assuming you're using Lucide icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaEnvelope, FaRegEnvelope } from 'react-icons/fa6';

export default function Content() {
  return (
    <div className='bg-zinc-900 py-8 px-12 h-full w-full flex flex-col justify-between'>
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className='flex justify-between mt-3 xl:mt-0'>
      <div className='flex flex-col md:flex-row'>
        <h3 className='flex items-center xl:mt-8 text-yellow-50 text-xs md:text-lg lg:text-xl'>&copy; {new Date().getFullYear()}</h3>
        <h3 className='flex items-center xl:mt-8 ml-0 md:ml-2 text-yellow-50 text-xs md:text-lg lg:text-xl'>Justin Miguel.</h3>
      </div>
      <SocialIcons />
    </div>
  );
};

const Nav = () => {
  return (
    <div className='flex flex-col'>
      <div className='border-b border-neutral-700 pb-6'>
        <h1 className='text-3xl md:text-5xl xl:text-7xl font-semibold text-yellow-50 mb-2'>Let's Connect!</h1>
        <h2 className='text-md md:text-lg xl:text-2xl font-normal text-yellow-50 max-w-5xl'>
            Whether it’s a project idea, a tailored solution, or just a tech discussion, feel free to reach out! Together, we'll transform that vision into reality.
        </h2>
      </div>
    </div>
  );
};

const SocialIcons = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center justify-center gap-4 xl:gap-6 xl:mt-8">
        {/* Email Icon with Tooltip */}
        <Tooltip>
          <TooltipTrigger>
            <Mail className="h-6 w-6 md:h-10 md:w-10 xl:h-12 xl:w-12 lg:mt-0 text-yellow-50 hover:text-yellow-200 transition-colors" />
          </TooltipTrigger>
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
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 md:h-8 md:w-8 xl:h-10 xl:w-10 text-yellow-50 hover:text-yellow-200 transition-colors" />
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
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5 md:h-8 md:w-8 xl:h-10 xl:w-10 text-yellow-50 hover:text-yellow-200 transition-colors" />
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
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 md:h-8 md:w-8 xl:h-10 xl:w-10 text-yellow-50 hover:text-yellow-200 transition-colors" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>

        {/* Resume Icon with Tooltip */}
        <Tooltip>
          <TooltipTrigger>
            <a href="#">
              <FileText className="h-5 w-5 md:h-8 md:w-8 xl:h-10 xl:w-10 text-yellow-50 hover:text-yellow-200 transition-colors" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Resume</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};