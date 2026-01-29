import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "51956228829";
  const message = encodeURIComponent(
    "Hola Transportes Pakamuros, me gustaría solicitar una cotización para un servicio de transporte."
  );
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-8 right-8 z-[100]
        w-14 h-14
        bg-[url('/wtp.png')]
        bg-cover bg-center bg-no-repeat
        transition-all transform hover:scale-110 active:scale-95
        animate-pulse-subtle
        group
      "
    >
      {/* Tooltip */}
      <div className="
        absolute -top-12 right-0
        bg-white text-slate-800
        px-4 py-2
        text-[11px] font-bold
        shadow-lg
        opacity-0 group-hover:opacity-100
        transition-opacity
        whitespace-nowrap
        pointer-events-none
      ">
        ¿En qué podemos ayudarte?
        <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-white rotate-45"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
