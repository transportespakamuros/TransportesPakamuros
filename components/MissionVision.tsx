
import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestro Propósito</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-2xl -z-10"></div>
            <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Misión</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Optimizar la logística en el país, ofreciendo soluciones integrales y personalizadas para una eficiente cadena de suministros de los clientes, llevando bienestar a millones de familias peruanas, a través de nuestros servicios como almacenaje y logística especializada para diversos sectores económicos, actuando como un socio estratégico.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                <Eye size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Visión</h3>
                <p className="text-slate-600">
                  Ser reconocidos como la empresa líder y referente en soluciones logísticas del país, destacando por nuestra innovación, sostenibilidad y compromiso inquebrantable con la excelencia operativa.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Valores Corporativos</h3>
                <p className="text-slate-600">
                  Transparencia en cada proceso, integridad en nuestras relaciones y un enfoque constante en la seguridad de nuestro personal y la carga de nuestros clientes.
                </p>
              </div>
            </div>

            <div className="p-6 bg-blue-900 rounded-2xl text-white">
              <p className="italic text-lg">
                "No solo transportamos mercancía, transportamos confianza y progreso para el país."
              </p>
              <p className="mt-4 font-bold text-blue-400">— Dirección General</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
