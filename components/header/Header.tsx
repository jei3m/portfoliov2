import { TransitionLink } from '@/components/custom-wrapper/TransitionLink';
import { Folder, NotebookPen, Home } from 'lucide-react';

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-4 z-50 bg-background/75 rounded-xl py-2 border-2 backdrop-blur-sm max-w-6xl mx-2 md:mx-4 lg:mx-4 xl:mx-auto'>
      <nav className='flex items-center justify-between px-4 sm:px-6'>
        <TransitionLink href="/">
          <div className='text-md md:text-xl font-extrabold text-yellow-50'>
            JUSTIN.
          </div>
        </TransitionLink>

        <ul className='flex items-center gap-6 text-sm font-light sm:gap-10'>
          {/* Mobile View: Icons */}
          <li className='transition-colors hover:text-foreground sm:hidden'>
            <TransitionLink href='/'>
              <Home className="h-5 w-5 md:w-6 md:h-6 text-yellow-50" />
            </TransitionLink>
          </li>
          <li className='transition-colors hover:text-foreground sm:hidden'>
            <TransitionLink href='/projects'>
              <Folder className="h-5 w-5 md:w-6 md:h-6 text-yellow-50" />
            </TransitionLink>
          </li>
          <li className='transition-colors hover:text-foreground sm:hidden'>
            <TransitionLink href='/blogs'>
              <NotebookPen className="h-5 w-5 md:w-6 md:h-6 text-yellow-50" />
            </TransitionLink>
          </li>

          {/* Desktop View: Text Links */}
          <li className='transition-colors hover:text-foreground text-yellow-50 hidden sm:block'>
            <TransitionLink href='/'>Home</TransitionLink>
          </li>
          <li className='transition-colors hover:text-foreground text-yellow-50 hidden sm:block'>
            <TransitionLink href='/projects'>Projects</TransitionLink>
          </li>
          <li className='transition-colors hover:text-foreground text-yellow-50 hidden sm:block'>
            <TransitionLink href='/blogs'>Blogs</TransitionLink>
          </li>
        </ul>

        {/* <div>
          <ThemeToggle />
        </div> */}
      </nav>
    </header>
  );
}