
import React from 'react';
import { Truck, Menu, X, ChevronDown  } from 'lucide-react';
import { navLinksMovil, navLinks, navServicios } from './ArrayLinks';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className={`w-[100%] fixed  z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
      <div className="w-[100%]  px-[70px] flex justify-between items-center">
        <a href="#inicio" className="flex items-center space-x-2">
          <div className={`p-2 rounded-lg ${scrolled ? 'bg-blue-600 text-white' : 'text-blue-600'}`}>
            <img
              src="/image.png"
              alt="fondo"
              className="w-[60px] h-[60px]"
            />

          </div>
          <span className={`text-1xl font-extrabold tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'
            }`}>
            TRANSPORTE <span className="text-blue-400">PAKAMUROS S.A.C</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a
              href="#inicio"
              className={`font-medium text-sm transition-colors hover:text-blue-400 ${scrolled ? 'text-slate-700' : 'text-white'
                }`}
            >
              Inicio
            </a>
            <div className="relative group hidden md:block">
            <button
              className={`font-medium text-sm transition-colors hover:text-blue-400 flex ${
                scrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Servicios 
              <ChevronDown  className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-3 w-64 bg-sky-50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-85 group-hover:visible transition-all duration-200">
                <ul className="py-3">
                  {navServicios.map((servicio) => (
                    <li key={servicio}>
                      <a
                        href="#servicios"
                        className="block px-5 py-2 text-sm text-slate-800 hover:bg-blue-100 hover:text-blue-600 transition"
                      >
                        {servicio}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-blue-400 ${scrolled ? 'text-slate-700' : 'text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contacto"
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${scrolled
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
            {navLinksMovil.map((link) => (
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
