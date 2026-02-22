import { TransitionLink } from '@/components/custom-wrapper/TransitionLink';
import { Folder, NotebookPen, Home } from 'lucide-react'; // Import icons from lucide-react

export default function Header() {
  // Array of navigation links
  const navLinks = [
    { href: '/', icon: Home, text: 'Home' },
    { href: '/projects', icon: Folder, text: 'Projects' },
    { href: '/blogs', icon: NotebookPen, text: 'Blogs' },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 bg-black/75 rounded-xl py-2 border md:border-2 border-neutral-700 backdrop-blur-sm max-w-6xl mx-2 md:mx-4 lg:mx-4 xl:mx-auto">
      <nav className="flex items-center justify-between px-4 sm:px-6">
        <TransitionLink href="/">
          <div className="text-md md:text-xl font-extrabold text-yellow-50">
            JUSTIN.
          </div>
        </TransitionLink>

        <ul className="flex items-center gap-6 text-sm font-light sm:gap-10">
          {/* Mobile View: Icons */}
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="transition-colors hover:text-foreground sm:hidden"
            >
              <TransitionLink href={link.href}>
                <link.icon className="h-5 w-5 md:w-6 md:h-6 text-yellow-50" />
              </TransitionLink>
            </li>
          ))}

          {/* Desktop View: Text Links */}
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="transition-colors hover:text-foreground text-yellow-50 hidden sm:block"
            >
              <TransitionLink href={link.href}>
                {link.text}
              </TransitionLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
