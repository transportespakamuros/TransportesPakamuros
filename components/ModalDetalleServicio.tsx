// Modal.jsx
export default function ModalDetalleServicio({ isOpen, onClose, title, desc, icon, imagen, descripcion }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
        >
          ✕
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-white">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-blue-900">{title}</h3>
        </div>
        <div className="w-50 h-50">
            <img src={imagen} alt={title} /> 
        </div>
        <hr />
        <br />
        <p className="text-slate-600 text-justify">{descripcion}</p>
        <br />
        <div className="flex justify-end">
          <a
          onClick={onclose}
            href="#contacto"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Cotizar servicio
          </a>
        </div>
      </div>
    </div>
  );
}


