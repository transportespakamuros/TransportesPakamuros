import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {

  const [successMessage, setSuccessMessage] = useState(false)

  const form = useRef();
  
  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();

     if (!form.current) return;

    emailjs
      .sendForm('service_v21d86j', 'template_zp460ma', form.current, {
        publicKey: 'JelD4MbJIDdmaXa8U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current?.reset();
          setSuccessMessage(true);

          //  Ocultar mensaje automáticamente
            setTimeout(() => {
              setSuccessMessage(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          
        },
      );
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
                Estamos listos para transportar tu carga. Déjenos sus datos y le haremos una cotización óptima y eficiente.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Llámanos / WhatsApp</h4>
                    <p className="text-blue-200">+51 956 228 829</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Escríbenos</h4>
                    <p className="text-blue-200">transportespakamuros@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Visítanos</h4>
                    <p className="text-blue-200">Lima, Perú</p>
                  </div>
                </div>
              </div>

                <div className="mt-12 rounded-2xl overflow-hidden h-64 border border-slate-200 hover:shadow-lg transition-all duration-300">
                {/* Google Maps Embed - Cajamarca */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298847.3572536229!2d-77.1525885997464!3d-12.026254177274055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e1!3m2!1ses!2spe!4v1767648922398!5m2!1ses!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="hover:scale-[1.01] transition-all duration-700"
                ></iframe>
              </div>

            </div>

            <div className="mt-12 p-6 bg-blue-800/50 rounded-2xl border border-white/10">
              <h5 className="font-bold mb-2">Horario de Atención</h5>
              <p className="text-sm text-blue-200">Lunes - Viernes: 08:00 AM - 06:00 PM</p>
              <p className="text-sm text-blue-200">Sábado: 08:00 AM - 01:00 PM</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Solicitar una Cotización</h3>
            <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Nombre Completo</label>
                <input 
                  name="NombreCompleto"
                  id="NombreCompleto"
                  type="text" 
                  required
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Correo Electrónico</label>
                <input 
                  name="Email"
                  id="Email"
                  type="email" 
                  required
                  placeholder="juan@empresa.com"
                  className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Teléfono / WhatsApp</label>
                <input 
                  name="Telefono"
                  id="Telefono"
                  type="tel" 
                  required
                  placeholder="+51 987 654 321"
                  className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Tipo de Servicio</label>
                <select className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none"
                  name="TipoServicio"
                  id="TipoServicio"
                >
                  <option>Transporte y servicio logístico</option>
                  <option>Carga sobredimencionada</option>
                  <option>Almacenaje</option>
                  <option>Distribución</option>
                  <option>Personal de estiva</option>
                  <option>Delivery express</option>
                  <option>Mudanzas</option>
                  <option>Emablajes</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Origen de Servicio</label>
                <select className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none"
                  name="OrigenServicio"
                  id="OrigenServicio"
                >
                  <option>Lima</option>
                  <option>Ica</option>
                  <option>Pisco</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Destino de Servicio</label>
                <select className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none"
                  name="DestinoServicio"
                  id="DestinoServicio"
                >
                  <option>Lima</option>
                  <option>Ica</option>
                  <option>Pisco</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Incluir Delivery</label>
                <select className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none"
                  name="IncluirDelivery"
                  id="IncluirDelivery"
                >
                  <option>Incluir</option>
                  <option>No Incluir</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Incluir Carga o descarga</label>
                <select className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none"
                  name="IncluirCargaDescarga"
                  id="IncluirCargaDescarga"
                >
                  <option>No incluir</option>
                  <option>Incluir Solo Carga </option>
                  <option>Inlcuir Solo Descarga</option>
                  <option>Inlcuir Ambos</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Mensaje o Requerimientos</label>
                <textarea 
                  name="Mensaje"
                  id="Mensaje"
                  rows={4}
                  placeholder="Cuéntanos más sobre tu carga: requerimientos, medidas, tipo, etc..."
                  className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  name="button"
                  id="button"
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-blue-600/20"
                >
                  Enviar Solicitud
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
              {successMessage && (
                <div className="md:col-span-2 mt-4">
                  <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl text-center font-semibold animate-fade-in">
                    ✅ Solicitud enviado satisfactoriamente
                  </div>
                </div>
              )} 

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;