'use client';
import { supabase } from '@/lib/supabase';
import { useState, useEffect } from 'react';

import { 
  MapPin, Calendar, Users, Heart, Baby, Quote, 
  MessageSquare, Camera, Share2, Church, MapPinned, Flame ,
  Trash2
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
  

export default function DetalleJuanPablo() {

  // 1. Estados para comentarios
  const [comentarios, setComentarios] = useState<any[]>([]);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoTexto, setNuevoTexto] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // 2. NUEVO: Estado para controlar qué pestaña vemos (Libro o Fotos)
  const [pestanaActiva, setPestanaActiva] = useState('libro');

  // 1. Cargar comentarios automáticamente
    useEffect(() => {
      fetchComentarios();
    }, []);

    async function fetchComentarios() {
      const { data, error } = await supabase
        .from('comentarios')
        .select('*')
        .eq('id_perfil', 1) // 👈 Solo trae los del Papa
        .order('created_at', { ascending: false });
      
      if (error) console.error('Error al cargar:', error.message);
      else setComentarios(data || []);
    }

  // Fotos de ejemplo del Papa
  const fotosGaleria = [
    "/memoriales/Juan-Pablo/JP1.jpg",
    "/memoriales/Juan-Pablo/JP2.jpg",
    "/memoriales/Juan-Pablo/JP3.jpg",
    "/memoriales/Juan-Pablo/JP4.jpg",
    "/memoriales/Juan-Pablo/JP5.jpg",
    "/memoriales/Juan-Pablo/JP6.jpg"

  ];

 // 2. Enviar comentario a Supabase
const agregarComentario = async () => {
  if (nuevoNombre.trim() && nuevoTexto.trim()) {
    const { error } = await supabase
      .from('comentarios')
      .insert([
        { 
          nombre: nuevoNombre, 
          mensaje: nuevoTexto, // 👈 Asegúrate de que en Supabase la columna se llame 'mensaje'
          id_perfil: 1 
        }
      ]);
    
    if (error) {
      alert("Error al guardar: " + error.message);
    } else {
      fetchComentarios(); // Recarga la lista para mostrar el nuevo mensaje
      setNuevoNombre('');
      setNuevoTexto('');
      setMostrarFormulario(false);
    }
  }
};


const eliminarHomenaje = async (id: number) => {
  // 1. Pedimos el PIN al usuario
  const pinIngresado = prompt("Introduce el PIN de administrador para eliminar este mensaje:");

  // 2. Definimos tu PIN secreto (puedes cambiar '1234' por el que quieras)
  const PIN_SECRETO = "1313";

  if (pinIngresado === PIN_SECRETO) {
    const { error } = await supabase
      .from('comentarios')
      .delete()
      .eq('id', id);

    if (error) {
      alert("Error al eliminar: " + error.message);
    } else {
      fetchComentarios(); // Recarga la lista automáticamente
    }
  } else if (pinIngresado !== null) {
    alert("PIN incorrecto. No tienes permiso para eliminar.");
  }
};






  
  return (
    <div className="bg-[#ebeced] min-h-screen pb-20">
      
      {/* Contenedor Principal Centrado */}
      <div className="max-w-4xl mx-auto px-6 pt-20 space-y-8">
        
        {/* SECCIÓN PERFIL: Ahora delimitada como una tarjeta */}
        <div className="bg-white p-10 md:p-16 rounded-sm shadow-sm border border-gray-200">
          <div className="flex flex-col items-center">
            
            {/* Fotografía con efecto postal */}
            <div className="mb-10">
              <img 
                src="/JuanPablo.jpg" 
                className="w-48 h-60 object-cover rounded-sm shadow-xl border-[6px] border-white" 
                alt="Juan Pablo II"
              />
            </div>

            {/* Datos del Ser Querido */}
            <div className="text-center w-full max-w-lg">
              <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10 tracking-tight">
                Karol Józef Wojtyła
              </h1>

              <ul className="space-y-5 text-gray-600 font-light text-sm">
                <li className="flex items-center justify-center gap-3">
                  <Calendar size={16} className="text-gray-400"/> 
                  <span>Nació en Wadowice, Polonia, 18 de mayo de 1920</span>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <MapPin size={16} className="text-gray-400"/> 
                  <span>Falleció en Ciudad del Vaticano, 2 de abril de 2005</span>
                </li>
                
                {/* Separador sutil antes de datos familiares */}
                <div className="w-12 h-[1px] bg-gray-100 mx-auto my-6"></div>

                <li className="flex items-center justify-center gap-3">
                  <Users size={16} className="text-gray-400"/> 
                  <span><strong>Padres:</strong> Karol Wojtyła y Emilia Kaczorowska</span>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <Heart size={16} className="text-gray-400"/> 
                  <span><strong>Cónyuge:</strong> Soltero</span>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <Baby size={16} className="text-gray-400"/> 
                  <span><strong>Hijos:</strong> Sin hijos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      {/* Sección Esquela y Obituario */}
       <div className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
  
          {/* SECCIÓN: SERVICIOS FUNERARIOS COMPLETA */}
          <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-200">
            <h2 className="text-xl font-serif text-gray-900 mb-10 border-b pb-4 tracking-wider uppercase">Servicios Funerarios</h2>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {/* 1. Velación */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#c5a059] mb-1">
                      <Flame size={18} />
                      <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Lugar de Velación</span>
                    </div>
                    <p className="text-gray-800 font-medium">Sala Clementina</p>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">
                      Viernes 7 de abril — 08:00 AM<br />
                      Palacio Apostólico, Ciudad del Vaticano
                    </p>
                  </div>

                  {/* 2. Misa (Con línea divisoria lateral en tablets/PC) */}
                  <div className="space-y-3 md:border-l border-gray-100 md:pl-10">
                    <div className="flex items-center gap-2 text-[#c5a059] mb-1">
                      <Church size={18} />
                      <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Misa de Cuerpo Presente</span>
                    </div>
                    <p className="text-gray-800 font-medium">Basílica de San Pedro</p>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">
                      Sábado 8 de abril — 10:00 AM<br />
                      Plaza de San Pedro
                    </p>
                  </div>

                  {/* 3. Sepelio */}
                  <div className="space-y-3 md:border-l border-gray-100 md:pl-10">
                    <div className="flex items-center gap-2 text-[#c5a059] mb-1">
                      <MapPinned size={18} />
                      <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Sepelio</span>
                    </div>
                    <p className="text-gray-800 font-medium">Grutas Vaticanas</p>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">
                      Sábado 8 de abril — 14:00 PM<br />
                      Cripta de la Basílica
                    </p>
                  </div>
                </div>
          </div>

            {/* MAPA INTERACTIVO DE GOOGLE MAPS */}
            <div className="mt-10 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[#c5a059]">
                  <MapPin size={15} />
                  <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Ubicación del Servicio</span>
                </div>
                <a 
                  href="https://google.com" 
                  target="_blank" 
                  className="text-[10px] tracking-widest uppercase text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                >
                  Abrir en Maps <Share2 size={12} />
                </a>
              </div>
              
              {/* Contenedor del Mapa */}             
              <div className="w-full h-80 rounded-sm overflow-hidden shadow-inner border border-gray-100 grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.9592649701854!2d12.45136177656241!3d41.902170663906055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6061b7149b59%3A0x724bf077cd875283!2sBas%C3%ADlica%20de%20San%20Pedro!5e1!3m2!1ses-419!2smx!4v1777650032084!5m2!1ses-419!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <p className="mt-4 text-[10px] text-gray-400 italic font-light text-center">
                Haz zoom o arrastra el mapa para explorar los alrededores del lugar del servicio.
              </p>
            </div>

          {/* NUEVA SECCIÓN: ESQUELA */}
          <div className="bg-white p-5 rounded-sm shadow-sm border border-gray-200 text-center">
            <div className="flex justify-center mb-6 text-gray-300">
              <Quote size={30} strokeWidth={1} />
            </div>
            <p className="text-2xl md:text-2xl font-serif italic text-gray-700 leading-relaxed px-4">
              "¡No tengan miedo! Abran de par en par las puertas a Cristo."
            </p>
            <div className="w-16 h-[1px] bg-gray-200 mx-auto mt-8"></div>
          </div>

  
          <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-200">
            <h2 className="text-xl font-serif text-gray-900 mb-6 border-b pb-4 tracking-wider uppercase">Obituario</h2>
            <p className="text-gray-700 leading-relaxed font-light text-justify">
              Conocido como San Juan Pablo II, el 'Papa peregrino' dedicó su vida a la paz mundial y la defensa de la dignidad humana. Su liderazgo espiritual y carisma unificaron naciones, dejando un legado eterno de fe y esperanza en la historia de la humanidad. Fue un incansable defensor de los derechos humanos y un puente entre diferentes culturas y religiones.
            </p>
          </div>

       </div>
    

      {/* SECCIÓN DE INTERACCIÓN (Pestañas Dinámicas) */}
      <div className="mt-12 max-w-4xl mx-auto px-6">
       <div className="bg-[#ffffff] rounded-sm shadow-sm border border-blue-100/50 overflow-hidden">
          
          {/* Cabecera de Pestañas */}
          <div className="flex border-b border-blue-100/30 text-[10px] md:text-xs tracking-widest uppercase text-gray-500 font-light bg-white/50">
              <button 
                onClick={() => setPestanaActiva('libro')}
                className={`px-8 py-5 transition-all ${pestanaActiva === 'libro' ? 'border-b-2 border-blue-600 text-blue-600 bg-white font-medium' : 'hover:bg-white/80'}`}
              >
              Libro de Memorial
              </button>
              <button 
                onClick={() => setPestanaActiva('fotos')}
                className={`px-8 py-5 transition-all ${pestanaActiva === 'fotos' ? 'border-b-2 border-blue-600 text-blue-600 bg-white font-medium' : 'hover:bg-white/80'}`}
              >
                Fotografías
              </button>

                <button 
                onClick={() => setPestanaActiva('compartirqr')}
                className={`px-8 py-5 transition-all ${pestanaActiva === 'compartirqr' ? 'border-b-2 border-blue-600 text-blue-600 bg-white font-medium' : 'hover:bg-white/80'}`}
              >
                Compartir QR
              </button>

          </div>

          {/* CONTENIDO CAMBIANTE */}
          <div className="p-8 md:p-12">
            
            {/* VISTA: LIBRO DE MEMORIAL */}
            {pestanaActiva === 'libro' && (
              <div className="animate-in fade-in duration-500">
                <div className="flex justify-between items-center mb-12">
                  <h3 className="text-gray-400 italic font-serif text-xl">Homenajes recientes</h3>
                  <button 
                    onClick={() => setMostrarFormulario(!mostrarFormulario)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition-all"
                  >
                    {mostrarFormulario ? 'Cancelar' : 'Añadir un comentario'}
                  </button>
                </div>

                {mostrarFormulario && (
                  <div className="mb-12 p-6 bg-blue-50/30 border border-blue-100 rounded-md space-y-4">
                    <input 
                      type="text" 
                      placeholder="Tu nombre"
                      value={nuevoNombre}
                      onChange={(e) => setNuevoNombre(e.target.value)}
                      className="w-full p-3 border rounded-md text-sm outline-none focus:border-blue-500 text-gray-800"
                    />
                    <textarea 
                      placeholder="Escribe tu mensaje..."
                      value={nuevoTexto}
                      onChange={(e) => setNuevoTexto(e.target.value)}
                      className="w-full p-3 border rounded-md text-sm outline-none focus:border-blue-500 text-gray-800"
                    />
                    <button onClick={agregarComentario} className="w-full bg-blue-600 text-white py-3 rounded-md font-bold">Publicar</button>
                  </div>
                )}

                <div className="space-y-10">
                  {comentarios.map((c, i) => (
                    <div key={i} className="group flex gap-6 items-start border-b border-blue-50 pb-8 last:border-0 relative">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {c.nombre.substring(0, 2).toUpperCase()}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h4 className="text-base font-bold text-gray-900 mb-1">{c.nombre}</h4>
                          
                          {/* BOTÓN ELIMINAR CON PIN */}
                          <button 
                            onClick={() => eliminarHomenaje(c.id)}
                            className="text-gray-300 hover:text-red-500 transition-colors p-1"
                            title="Eliminar comentario"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-4">
                          {new Date(c.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                        <p className="text-gray-600 text-base italic font-light leading-relaxed">
                          "{c.mensaje}"
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            )}

            {/* VISTA: FOTOGRAFÍAS */}
            {pestanaActiva === 'fotos' && (
              <div className="animate-in fade-in duration-500">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {fotosGaleria.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden bg-gray-100 rounded-sm">
                      <img 
                        src={img} 
                        alt="Foto Memorial" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* VISTA: COMPARTIR Y QR */}
            {pestanaActiva === 'compartirqr' && (
              <div className="animate-in fade-in duration-500 max-w-sm mx-auto text-center py-5">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
                  <h3 className="text-gray-900 font-serif text-xl mb-3">Memorial Digital</h3>
                  
                  {/* CÓDIGO QR DINÁMICO */}
                  <div className="p-4 bg-white border-4 border-gray-50 rounded-lg mb-3">
                    <QRCodeSVG 
                      value={typeof window !== 'undefined' ? window.location.href : ''} 
                      size={200}
                      level={"H"}
                      includeMargin={true}
                    />
                  </div>

                  <p className="text-gray-500 text-xs tracking-widest uppercase mb-8 leading-relaxed">
                    Escanea este código para visitar el memorial desde un dispositivo móvil
                  </p>

                  {/* BOTÓN PARA COPIAR ENLACE */}
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Enlace copiado al portapapeles');
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-4 rounded-lg text-sm tracking-widest uppercase hover:bg-[#c5a059] transition-all"
                  >
                    <Share2 size={16} />
                    Copiar Enlace Directo
                  </button>
                </div>
                
                <p className="mt-10 text-gray-400 text-[12px] tracking-[0.3em] uppercase italic">
                  "Su memoria, a un solo escaneo de distancia"
                </p>
              </div>
            )}

          </div>
        </div>
      </div>

    
    
    </div>
    </div>
  );
}


