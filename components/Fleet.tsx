
import React from 'react';

const fleetImages = [
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1591768793355-74d7c836038c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1594776208131-aa1036505bb8?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1501700489910-fb24f80f688a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800',
];

const Fleet: React.FC = () => {
  return (
    <section id="flota" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestra Flota</h2>
            <p className="text-slate-600">
              Invertimos constantemente en tecnología de punta. Todas nuestras unidades están equipadas con sistemas de rastreo satelital y telemetría avanzada para asegurar el óptimo rendimiento de cada viaje.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-blue-700 font-bold bg-blue-50 px-4 py-2 rounded-lg">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Euro 5 & 6 Compliant
             </div>
             <div className="flex items-center gap-2 text-blue-700 font-bold bg-blue-50 px-4 py-2 rounded-lg">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Certificación ISO
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fleetImages.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-sm">
              <img 
                src={src} 
                alt={`Trailer fleet ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-lg">Ver Unidad</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
