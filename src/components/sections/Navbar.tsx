import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useMenu } from '@/hooks/useMenu';
import { useNavigation } from '@/hooks/useNavigation';
import Button from '@/components/ui/Button';
import { Z_INDEX } from '@/constants';
import Logo from '../../../public/icons/logo.svg';
import ArrovRight from '../ui/ArrovRight';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import { HoverScale, FadeInUp } from '@/components/ui/Animations';

const MobileMenuButton: React.FC<{
  isMenuOpen: boolean;
  onToggle: () => void;
}> = ({ isMenuOpen, onToggle }) => (
  <motion.button
    onClick={onToggle}
    className={`lg:hidden z-[${Z_INDEX.modal}] relative w-10 h-10 flex flex-col justify-center items-center group ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    aria-label="Toggle menu"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.span
      className="w-6 h-0.5 bg-white"
      animate={{
        rotate: isMenuOpen ? 45 : 0,
        y: isMenuOpen ? 6 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.span
      className="w-6 h-0.5 bg-white mt-1.5"
      animate={{
        opacity: isMenuOpen ? 0 : 1,
        scale: isMenuOpen ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.span
      className="w-6 h-0.5 mt-1.5 bg-white"
      animate={{
        rotate: isMenuOpen ? -45 : 0,
        y: isMenuOpen ? -6 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </motion.button>
);

const DesktopNavigation: React.FC<{
  navLinks: Array<{ id: number; title: string; to: string }>;
}> = ({ navLinks }) => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:flex items-center gap-10">
      <ul className="flex space-x-8">
        {navLinks.map((item, index) => (
          <motion.li 
            key={item.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.a
              href={item.to}
              className="text-white hover:text-blue-600 font-medium relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item.title}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.li>
        ))}
      </ul>

      <div className="flex gap-4 items-center">
        <LanguageSwitcher />
        <HoverScale scale={1.05}>
          <Button variant="secondary">
            {t('navbar.login')}
          </Button>
        </HoverScale>
        <HoverScale scale={1.05}>
          <Button variant="primary" className="flex gap-4 items-center">
            {t('navbar.tryFree')}
            <ArrovRight />
          </Button>
        </HoverScale>
      </div>
    </div>
  );
};

const MobileMenu: React.FC<{
  isMenuOpen: boolean;
  navLinks: Array<{ id: number; title: string; to: string }>;
  onClose: () => void;
}> = ({ isMenuOpen, navLinks, onClose }) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.div
            className={`fixed inset-0 bg-black z-[${Z_INDEX.modalBackdrop}] lg:hidden`}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className={`fixed top-0 right-0 h-full w-80 bg-white z-[${Z_INDEX.modal}] lg:hidden shadow-2xl`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Image
                    width={150}
                    height={27}
                    src={Logo}
                    alt="whitespace logo"
                  />
                </motion.div>
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200 group"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="relative w-6 h-6">
                    <motion.span 
                      className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-700 transform -translate-y-1/2"
                      animate={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.span 
                      className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-700 transform -translate-y-1/2"
                      animate={{ rotate: -45 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.button>
              </div>

              <motion.ul 
                className="space-y-6 mb-8 flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {navLinks.map((item, index) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.a
                      href={item.to}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg block py-2 hover:bg-gray-50 rounded-lg px-3 -mx-3"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                      onClick={onClose}
                    >
                      {item.title}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div 
                className="space-y-4 pt-4 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex justify-center mb-4">
                  <LanguageSwitcher isMobile={true} />
                </div>
                <HoverScale scale={1.02}>
                  <Button variant="secondary" className="w-full">
                    {t('navbar.login')}
                  </Button>
                </HoverScale>
                <HoverScale scale={1.02}>
                  <Button variant="primary" className="w-full flex items-center gap-4">
                    {t('navbar.tryFree')}
                    <ArrovRight />
                  </Button>
                </HoverScale>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Navbar: React.FC = () => {
  const { navLinks } = useNavigation();
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <header className="relative z-50 color">
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
        <a href="#" className={`z-[${Z_INDEX.modal}] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
          <Image
            className="filter invert brightness-0"
            width={190}
            height={34}
            src={Logo}
            alt="whitespace logo"
          />
        </a>

        <DesktopNavigation navLinks={navLinks} />

        <MobileMenuButton isMenuOpen={isMenuOpen} onToggle={toggleMenu} />

        <MobileMenu
          isMenuOpen={isMenuOpen}
          navLinks={navLinks}
          onClose={closeMenu}
        />
      </nav>
    </header>
  );
};

export default Navbar;