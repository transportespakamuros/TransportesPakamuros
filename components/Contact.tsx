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
                    <p className="text-blue-200">945 014 221 - 994 806 130 - 937 717 422</p>
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
                    <p className="text-blue-200">Jr. Hipolito Unanue N° 644, La Victoria, Lima</p>
                  </div>
                </div>
              </div>

                <div className="mt-12 rounded-2xl overflow-hidden h-64 border border-slate-200 hover:shadow-lg transition-all duration-300">
                {/* Google Maps Embed - Cajamarca */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.9851294739387!2d-77.02579624060242!3d-12.066944448451075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c896e6cda065%3A0x36be1dff41022f71!2sJir%C3%B3n%20Hip%C3%B3lito%20Unanue%20644%2C%20La%20Victoria%2015033!5e0!3m2!1ses!2spe!4v1769384212395!5m2!1ses!2spe"               width="100%"
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
          <div className="lg:w-2/3 p-12" id="cotizacion">
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
                  <option>Jaén</option>
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
                  <option>Jaén</option>
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
              
              <div className="space-y-8 md:col-span-2 bg-blue-900 p-4 rounded-3xl">
                <h3 className="text-3xl font-bold text-white text-center">
                  Nuestras sedes
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* SEDE 1 */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">ICA</h4>
                        <p className="text-blue-300">
                          Av. Viena N° 470, La Tinguiña
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden h-64 border border-slate-200 hover:shadow-lg transition-all duration-300">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.4092492323562!2d-75.70408758952198!3d-14.03855270323218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x911102ad9d1bafa3%3A0x5585bf7fb7e6cc65!2sViena%20470%2C%2011003!5e0!3m2!1ses!2spe!4v1769386562417!5m2!1ses!2spe"                       
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="hover:scale-[1.01] transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* SEDE 2 */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">PISCO - ICA</h4>
                        <p className="text-blue-300">
                          Cal. Perez Figueroa N° 481
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden h-64 border border-slate-200 hover:shadow-lg transition-all duration-300">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.0654551785094!2d-76.20050534595427!3d-13.71052018317544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x911065f510eb8ba7%3A0x397a357d5ed76637!2sPerez%20Figuerola%20481%2C%20Pisco%2011601!5e0!3m2!1ses!2spe!4v1769386840216!5m2!1ses!2spe"                       
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="hover:scale-[1.01] transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* SEDE 3 */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">JAEN - CAJAMARCA</h4>
                        <p className="text-blue-300">
                          Av. Mesones Muro N° 1289
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden h-64 border border-slate-200 hover:shadow-lg transition-all duration-300">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.2438987161003!2d-78.80098781433807!3d-5.72017111980539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b4fb717d4a6e3f%3A0xcb1cb92c679b0738!2sAv.%20Manuel%20Antonio%20Mesones%20Muro%201289%2C%20Ja%C3%A9n%2006801!5e0!3m2!1ses!2spe!4v1769387369129!5m2!1ses!2spe"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="hover:scale-[1.01] transition-all duration-700"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </form>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Contact;