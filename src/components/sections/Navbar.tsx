import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useMenu } from '@/hooks/useMenu';
import { useNavigation } from '@/hooks/useNavigation';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { Z_INDEX } from '@/constants';
import Logo from '../../../public/icons/logo.svg';
import ArrovRight from '../ui/ArrovRight';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const MobileMenuButton: React.FC<{
  isMenuOpen: boolean;
  onToggle: () => void;
}> = ({ isMenuOpen, onToggle }) => (
  <button
    onClick={onToggle}
    className={`lg:hidden z-[${Z_INDEX.modal}] relative w-10 h-10 flex flex-col justify-center items-center hover:scale-110 transition-transform duration-200 group ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    aria-label="Toggle menu"
  >
    <span
      className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out transform origin-center ${isMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-0'
        }`}
    />
    <span
      className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
    />
    <span
      className={`w-6 h-0.5 mt-1.5 bg-white transition-all duration-300 ease-in-out transform origin-center ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-0'
        }`}
    />
  </button>
);

const DesktopNavigation: React.FC<{
  navLinks: Array<{ id: number; title: string; to: string }>;
}> = ({ navLinks }) => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:flex items-center gap-10">
      <ul className="flex space-x-8">
        {navLinks.map(item => (
          <li key={item.id}>
            <a
              href={item.to}
              className="text-white hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 items-center">
        <LanguageSwitcher />
        <Button variant="secondary" className="hover:scale-105 transition-transform duration-200">
          {t('navbar.login')}
        </Button>
        <Button variant="primary" className="flex gap-4 items-center hover:scale-105 transition-transform duration-200">
          {t('navbar.tryFree')}
          <ArrovRight />
        </Button>
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
    <>
      <div
        className={`fixed inset-0 bg-black z-[${Z_INDEX.modalBackdrop}] lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-[${Z_INDEX.modal}] lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <Image
              width={150}
              height={27}
              src={Logo}
              alt="whitespace logo"
            />
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200 group"
              aria-label="Close menu"
            >
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-700 transform -translate-y-1/2 rotate-45 transition-all duration-200 group-hover:bg-gray-900" />
                <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-700 transform -translate-y-1/2 -rotate-45 transition-all duration-200 group-hover:bg-gray-900" />
              </div>
            </button>
          </div>

          <ul className="space-y-6 mb-8 flex-1">
            {navLinks.map(item => (
              <li key={item.id}>
                <a
                  href={item.to}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg block py-2 hover:bg-gray-50 rounded-lg px-3 -mx-3"
                  onClick={onClose}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-4 pt-4 border-t border-gray-200">
            <div className="flex justify-center mb-4">
              <LanguageSwitcher isMobile={true} />
            </div>
            <Button variant="secondary" className="w-full hover:scale-105 transition-transform duration-200">
              {t('navbar.login')}
            </Button>
            <Button variant="primary" className="w-full flex items-center gap-4 hover:scale-105 transition-transform duration-200">
              {t('navbar.tryFree')}
              <ArrovRight />
            </Button>
          </div>
        </div>
      </div>
    </>
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