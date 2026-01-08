
import React, { useState } from 'react';
import Modal from './ModalDetalleServicio';
import { motion } from "framer-motion";

import { Truck, Package, Box, Globe, ArrowRight, PersonStanding, PackageCheck, CarFront, TruckElectric, BaggageClaim } from 'lucide-react';

const services = [
  {
    title: 'Transporte y servicio logístico',
    desc: 'Contamos con una flota moderna de vehículos de alta capacidad para todo tipo de carga...',
    icon: <Truck className="w-8 h-8" />,
    color: 'bg-blue-600',
    imagen:'/CargaPesada2.jpg',
    descripcion: 'Realizamos traslado seguro y eficiente de mercancías a nivel local y nacional, adaptándonos a las necesidades específicas de cada cliente. Contamos con una flota moderna de vehículos, con diferentes capacidades y equipados con tecnología de monitoreo en tiempo real. Garantizamos entregas puntuales y la integridad de las cargas bajo nuestra responsabilidad. Además, ofrecemos un seguro de carga y un seguro contra terceros, brindando a nuestros clientes la tranquilidad de un servicio seguro y exitoso.'
  },
  {
    title: 'Carga sobredimencionada',
    desc: 'Manejo y transporte de cargas de gran tamaño o peso, como maquinaria industrial, estructuras...',
    icon: <CarFront className="w-8 h-8" />,
    color: 'bg-blue-700',
    imagen:'/CargaPesada1.jpg',
    descripcion:'Somos expertos en el manejo y transporte de cargas de gran tamaño o peso, como maquinaria industrial, equipos especializados y estructuras voluminosas. Contamos con personal capacitado, equipos adecuados y permisos necesarios para garantizar un transporte seguro y eficiente, cumpliendo con las normativas vigentes.'
  },
  {
    title: 'Almacenaje',
    desc: 'Soluciones de almacenaje, nuestras instalaciones están diseñadas para almacenar diferentes tipos de mercancías... ',
    icon: <Box className="w-8 h-8" />,
    color: 'bg-blue-800',
    imagen:'/Almacen.jpg',
    descripcion:'Ofrecemos soluciones de almacenaje adaptadas a las necesidades de nuestros clientes. Nuestras instalaciones están diseñadas para almacenar diferentes tipos de mercancías, desde productos perecederos hasta cargas voluminosas, con opciones a corto y largo plazo. Contamos con sistemas de monitoreo constante, inventarios digitales y personal especializado para asegurar un manejo eficiente.'
  },
  {
    title: 'Distribución',
    desc: 'Ofrecemos un servicio integral de distribución, diseñado para manejar productos terminados con precisión y puntualidad...',
    icon: <Globe className="w-8 h-8" />,
    color: 'bg-blue-900',
    imagen:'/Distribucion.jpg',
    descripcion:'Ofrecemos un servicio integral de distribución, diseñado para manejar productos terminados con precisión y puntualidad. Desde la planificación de rutas hasta la entrega final, nos aseguramos de que cada envío cumpla con los estándares de calidad, optimizando los tiempos de entrega y reduciendo costos operativos.'
  },
    {
    title: 'Personal de estiva',
    desc: 'Personal capacitado para realizar la carga y descarga de mercancías con máxima seguridad y eficiencia...',
    icon: <PersonStanding  className="w-8 h-8" />,
    color: 'bg-blue-600',
    imagen:'/PersonalDeEstiva.jpg',
    descripcion:'Nuestro equipo de estibadores está capacitado para realizar la carga y descarga de mercancías con máxima seguridad y eficiencia. Aplicamos técnicas de manejo adecuadas para reducir riesgos de daño a los productos, asegurando su integridad en cada etapa del proceso logístico.'
  },
  {
    title: 'Delivery express',
    desc: 'Brindamos un servicio de recojo y entrega a domicilio, rápido y confiable para la entrega de paquetes, documentos...',
    icon: <TruckElectric className="w-8 h-8" />,
    color: 'bg-blue-700',
    imagen:'/DeliveryExpress.jpg',
    descripcion:'Brindamos un servicio de recojo y entrega a domicilio, rápido y confiable para la entrega de paquetes, documentos y productos pequeños en tiempo récord. Este servicio está diseñado para clientes que necesitan soluciones urgentes, garantizando rapidez, seguridad y satisfacción en cada entrega.'
  },
  {
    title: 'Mudanzas',
    desc: 'Ofrecemos servicio personalizado de mudanza para hogares, oficinas y empresas.... ',
    icon: <BaggageClaim className="w-8 h-8" />,
    color: 'bg-blue-800',
    imagen:'/Mudanzas.jpg',
    descripcion:'Ofrecemos un servicio personalizado de mudanza para hogares, oficinas y empresas. Nuestro equipo está capacitado para manejar muebles, electrodomésticos, documentos, bienes frágiles y delicados.'
  },
  {
    title: 'Embalajes',
    desc: 'Ofrecemos todo tipo embalajes especializados y vehículos acondicionados para asegurar que sus pertenencias...',
    icon: <PackageCheck  className="w-8 h-8" />,
    color: 'bg-blue-900',
    imagen:'/Embalajes.jpg',
    descripcion:'Ofrecemos todo tipo embalajes especializados y vehículos acondicionados para asegurar que sus pertenencias lleguen en perfecto estado a su nuevo destino.'
  }
];

const Services: React.FC = () => {

  const [selectServicio, setSelectServicio] = useState(null)

  return (
    <section id="servicios" className="py-24 bg-slate-50 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Lo que hacemos</h2>
          <h3 className="text-4xl font-bold text-blue-900 mb-6">Nuestros Servicios Integrales</h3>
          <p className="text-md text-slate-600">Ofrecemos soluciones en el transporte de carga pesada, garantizando eficiencia y reducción de costos operativos.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-hidden">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:bg-blue-100"
            >
              <div className={`${item.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h4 className="text-md font-bold text-blue-900 mb-4">{item.title}</h4>
              <p className="text-sm text-slate-600 mb-6 line-clamp-3 text-justify">
                {item.desc}
              </p>
              <button
                onClick={() => setSelectServicio(item)}
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors"
              >
                Saber más
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>

            </motion.div>
          ))}
        </div>
      </div>
      
      <Modal
        isOpen={!!selectServicio}
        onClose={() => setSelectServicio(null)}
        title={selectServicio?.title}
        desc={selectServicio?.desc}
        icon={selectServicio?.icon}
        descripcion={selectServicio?.descripcion}
        imagen={selectServicio?.imagen}
      />
    </section>
  );
};

export default Services;
