import React from 'react';
import { Target, Eye, ShieldCheck, Award } from 'lucide-react';
import { motion } from "framer-motion";

const MissionVision: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-x-hidden">
      <div className="container mx-auto px-6 overflow-x-hidden">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestro Propósito</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprometidos con la excelencia en cada kilómetro recorrido
          </p>
        </div>

        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 mb-16 relative h-full">
          {/* Misión - Destacada */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-10 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white p-8 md:p-10 rounded-3xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Misión</h3>
              </div>
              <p className="text-slate-700 leading-relaxed flex-grow text-justify">
                Optimizar la logística en el país, ofreciendo soluciones integrales y personalizadas para una eficiente cadena de suministros de los clientes, llevando bienestar a millones de familias peruanas, a través de nuestros servicios como almacenaje y logística especializada para diversos sectores económicos, actuando como un socio estratégico.
              </p>
            </div>
          </div>

          {/* Visión - Destacada */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-3xl opacity-10 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white p-8 md:p-10 rounded-3xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Visión</h3>
              </div>
              <p className="text-slate-700 leading-relaxed flex-grow text-justify">
                Ser reconocidos como la empresa líder y referente en soluciones logísticas del país, destacando por nuestra innovación, sostenibilidad y compromiso inquebrantable con la excelencia operativa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Valores y Quote */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Valores Corporativos */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-blue-100 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Valores Corporativos</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 overflow-x-hidden">
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.30 }} 
                className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mb-3">
                  <Award size={20} />
                </div>
                <h4 className="font-bold text-blue-900 mb-2 text-md">Transparencia</h4>
                <p className="text-xs text-slate-600">En cada proceso y operación</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.60 }} 
                className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mb-3">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-bold text-blue-900 mb-2 text-md">Integridad</h4>
                <p className="text-xs text-slate-600">En nuestras relaciones</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.90 }} 
                className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mb-3">
                  <Target size={20} />
                </div>
                <h4 className="font-bold text-blue-900 mb-2 text-md">Seguridad</h4>
                <p className="text-xs text-slate-600">Personal y carga protegidos</p>
              </motion.div>
            </div>
          </div>

          {/* Quote Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 rounded-3xl text-white shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full opacity-10 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600 rounded-full opacity-10 -ml-12 -mb-12"></div>
            
            <div className="relative">
              <div className="text-5xl text-blue-400 opacity-30 mb-4">"</div>
              <p className="leading-relaxed mb-6 italic text-sm">
                No solo transportamos mercancía, transportamos confianza y progreso para el país.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-blue-700">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award size={16} />
                </div>
                <p className="font-bold text-blue-300 text-sm">Dirección General</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;