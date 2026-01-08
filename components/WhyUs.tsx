
import React from 'react';
import { CheckCircle2, Award, Users, MapPin, Activity } from 'lucide-react';
import { motion } from 'framer-motion'

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden overflow-x-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">¿Por Qué Elegirnos?</h2>
            <p className="text-blue-100 text-md mb-12">
              Contamos con años de experiencia liderando el sector de transporte pesado, brindando soluciones que permiten a nuestros clientes centrarse en su negocio principal mientras nosotros cuidamos de su logística.
            </p>

            <div className="space-y-6 overflow-hidden">
              {[
                { title: 'Seguridad en cada traslado', desc: 'Protocolos estrictos y rastreo GPS 24/7.' },
                { title: 'Flota moderna de tráilers', desc: 'Unidades con menos de 3 años de antigüedad.' },
                { title: 'Profesionalismo garantizado', desc: 'Conductores certificados y capacitados constantemente.' },
                { title: 'Cobertura nacional', desc: 'Llegamos a cualquier punto estratégico del país.' }
              ].map((feature, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i*0.5 }}
                  key={i} 
                  className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 "
                >
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-md mb-1">{feature.title}</h4>
                    <p className="text-blue-200">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.30 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6 pt-0">
              <div className="bg-white text-blue-900 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center">
                <Award size={40} className="mb-4 text-blue-600" />
                <div className="text-2xl font-black mb-2">99.9%</div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Efectividad</p>
              </div>
              <div className="bg-blue-700/50 backdrop-blur-md p-8 rounded-2xl border border-white/20 flex flex-col items-center text-center">
                <MapPin size={40} className="mb-4 text-blue-300" />
                <div className="text-2xl font-black mb-2">100%</div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-200">Cobertura Nacional</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-600 p-8 rounded-2xl border border-white/20 flex flex-col items-center text-center shadow-xl">
                <Users size={40} className="mb-4 text-white" />
                <div className="text-2xl font-black mb-2">+250</div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Clientes VIP</p>
              </div>
              <div className="bg-white text-blue-900 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center">
                <Activity size={40} className="mb-4 text-blue-600" />
                <div className="text-2xl font-black mb-2">24/7</div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Monitoreo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
