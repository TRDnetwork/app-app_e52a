import { useState } from 'react';
import { motion } from 'framer-motion';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className="md:hidden bg-[#faf8f5] border-b border-[#e9e5dd] sticky top-0 z-40">
      <div className="container flex justify-between items-center py-3">
        <h2 className="text-lg font-semibold text-[#1a2e1a]">Dev Portfolio</h2>
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center w-8 h-8 focus:outline-none group"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`bg-[#1a2e1a] h-0.5 w-full transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}
          />
          <span
            className={`bg-[#1a2e1a] h-0.5 w-3/4 mt-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`bg-[#1a2e1a] h-0.5 w-1/2 mt-1 transition-transform duration-300 ${isOpen ? '-rotate-45' : ''}`}
          />
        </button>
      </div>
      {isOpen && (
        <motion.div
          className="bg-[#faf8f5] py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="container flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-[#1a2e1a] hover:text-[#e66000] transition-colors duration-200 px-4 py-2 block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default MobileNav;