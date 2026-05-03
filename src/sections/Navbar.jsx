import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <LinkScroll
            to={item.href.replace('#','')}
            smooth={true}
            duration={500}
            offset={item.href === '#home' ? 0 : -120}
            spy={true}
            isDynamic={true}
            spyThrottle={100}
            activeClass="nav-active"
            className="nav-li_a cursor-pointer"
            onClick={onClick}
        >
          {item.name}
        </LinkScroll>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b theme-panel backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <LinkScroll
              to="home"
              smooth={true}
              duration={500}
              offset={0}
              spy={true}
              isDynamic={true}
              spyThrottle={100}
              activeClass="nav-active"
              className="nav-brand font-bold text-xl transition-colors cursor-pointer"
          >
            Miroslav
          </LinkScroll>

          <div className="flex items-center gap-3">
            <nav className="sm:flex hidden">
              <NavItems />
            </nav>

            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <span className="theme-toggle_icon" aria-hidden="true">
                {theme === 'dark' ? (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3v2.25M12 18.75V21M4.64 4.64l1.6 1.6M17.76 17.76l1.6 1.6M3 12h2.25M18.75 12H21M4.64 19.36l1.6-1.6M17.76 6.24l1.6-1.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M20.2 15.05A8 8 0 0 1 8.95 3.8 8.6 8.6 0 1 0 20.2 15.05Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="hidden text-sm font-semibold sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            <button
              onClick={toggleMenu}
              className="nav-menu_button focus:outline-none sm:hidden flex"
              aria-label="Toggle menu">
              <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="theme-icon w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
