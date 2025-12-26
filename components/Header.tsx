
import React from 'react';
import { Truck, Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Flota', href: '#flota' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center space-x-2">
          <div className={`p-2 rounded-lg ${scrolled ? 'bg-blue-600 text-white' : 'text-blue-600'}`}>
<img
  src="/image.png"
  alt="fondo"
  className="w-[60px] h-[60px]"
/>

          </div>
          <span className={`text-1xl font-extrabold tracking-tight ${
            scrolled ? 'text-blue-900' : 'text-white'
          }`}>
            TRANSPORTE <span className="text-blue-400">PAKAMUROS S.A.C</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-blue-400 ${
                scrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
              scrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
                : 'bg-white text-blue-900 hover:bg-blue-50'
            }`}
          >
            Cotizar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className={scrolled ? 'text-blue-900' : 'text-white'} /> : <Menu size={28} className={scrolled ? 'text-blue-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-fade-in-down">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-slate-800 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
