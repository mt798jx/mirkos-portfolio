import { useState } from 'react';
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
            offset={item.href === '#home' ? 0 : -70}
            spy={true}
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <LinkScroll
              to="home"
              smooth={true}
              duration={500}
              offset={0}
              spy={true}
              activeClass="nav-active"
              className="text-neutral-400 font-bold text-xl hover:text-white transition-colors cursor-pointer"
          >
            Miroslav
          </LinkScroll>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
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
