
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado. Un asesor se pondrá en contacto pronto.');
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-blue-900 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
              <p className="text-blue-200 mb-12">
                Estamos listos para potenciar su logística. Déjenos sus datos y diseñaremos una propuesta a su medida.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Llámanos</h4>
                    <p className="text-blue-200">+51 (01) 456-7890</p>
                    <p className="text-blue-200">+51 987 654 321</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Escríbenos</h4>
                    <p className="text-blue-200">contacto@translogistica.pe</p>
                    <p className="text-blue-200">ventas@translogistica.pe</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Visítanos</h4>
                    <p className="text-blue-200">Av. Logística Industrial 4500, Callao, Lima, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-800/50 rounded-2xl border border-white/10">
              <h5 className="font-bold mb-2">Horario de Atención</h5>
              <p className="text-sm text-blue-200">Lunes - Viernes: 08:00 AM - 06:00 PM</p>
              <p className="text-sm text-blue-200">Sábado: 09:00 AM - 01:00 PM</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Solicitar una Cotización</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Correo Electrónico</label>
                <input 
                  type="email" 
                  required
                  placeholder="juan@empresa.com"
                  className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Teléfono / WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+51 987 654 321"
                  className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Tipo de Servicio</label>
                <select className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none">
                  <option>Transporte de Carga Pesada</option>
                  <option>Logística Especializada</option>
                  <option>Almacenaje</option>
                  <option>Distribución</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Mensaje o Requerimientos</label>
                <textarea 
                  rows={4}
                  placeholder="Cuéntanos sobre tu carga, origen y destino..."
                  className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-blue-600/20"
                >
                  Enviar Solicitud
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>

            <div className="mt-12 rounded-2xl overflow-hidden h-64 grayscale hover:grayscale-0 transition-all duration-700 border border-slate-200">
               {/* Placeholder for Map */}
               <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold flex-col gap-2">
                  <MapPin size={48} />
                  <span>Ubicación Estratégica en Lima</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
