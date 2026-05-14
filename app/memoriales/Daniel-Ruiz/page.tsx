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

  // Guarda la ruta de la foto que se va a ampliar (null significa que está cerrado)
  const [fotoAmpliada, setFotoAmpliada] = useState<string | null>(null);

  // 3. NUEVO: Estado para contar velas encendidas (ejemplo de interacción)
  const [totalVelas, setTotalVelas] = useState<number>(0);
  const [listaVelas, setListaVelas] = useState<any[]>([]); // 👈 El nuevo estado para las estrellas
  const [encendiendoVela, setEncendiendoVela] = useState<boolean>(false);





  // 1. Cargar comentarios automáticamente
    useEffect(() => {
      fetchComentarios();
      fetchVelas(); // 👈 Añade esto para que cargue el número de velas al abrir la página

    }, []);

    async function fetchComentarios() {
      const { data, error } = await supabase
        .from('comentarios')
        .select('*')
        .eq('id_perfil', 2) // 👈 Solo trae los del Papa
        .order('created_at', { ascending: false });
      
      if (error) console.error('Error al cargar:', error.message);
      else setComentarios(data || []);
    }

  // Fotos de ejemplo del Papa
  const fotosGaleria = [
    "/Memoriales/Daniel-Ruiz/DR1.jpeg",
    "/Memoriales/Daniel-Ruiz/DR2.jpeg",
    "/Memoriales/Daniel-Ruiz/DR3.jpeg",
    "/Memoriales/Daniel-Ruiz/DR4.jpeg",
 

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
            id_perfil: 2 
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


  // Función para contar cuántas velas hay guardadas en la base de datos
// Creamos un nuevo estado para guardar el arreglo de velas con sus ID reales

async function fetchVelas() {
  const { data, error } = await supabase
    .from('velas')
    .select('id') // Traemos el ID único de cada vela
    .eq('id_perfil', 2);

  if (!error && data) {
    setListaVelas(data);
    setTotalVelas(data.length); // Mantenemos actualizado tu contador numérico habitual
  }
}


  // Función para insertar una nueva vela al hacer clic
  const encenderVelaVirtual = async () => {
    setEncendiendoVela(true);
    const { error } = await supabase
      .from('velas')
      .insert([{ id_perfil: 2 }]);

    if (!error) {
      await fetchVelas(); // Recarga el contador con la nueva vela incluida
    } else {
      alert("Error al encender la vela: " + error.message);
    }
    setEncendiendoVela(false);
  };


    // Función para calcular los días de legado de forma automática
    const calcularDiasLegado = () => {
    const fechaFallecimiento = new Date("2026-03-11"); // Fecha del Papa (Año-Mes-Día)
    const fechaActual = new Date();
    
    const diferenciaTiempo = fechaActual.getTime() - fechaFallecimiento.getTime();
    const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    
    return diferenciaDias.toLocaleString('es-MX'); // Formatea el número con comas (ej: 7,711)
   };


     // Función para generar una posición aleatoria fija para cada estrella
      const generarPosicionEstrella = (id: number) => {
        // Usamos matemáticas simples basadas en el ID para que la estrella 
        // siempre aparezca en el mismo lugar al recargar la página
        const x = (id * 73) % 90 + 5; // Porcentaje desde la izquierda (entre 5% y 95%)
        const y = (id * 37) % 80 + 10; // Porcentaje desde arriba (entre 10% y 90%)
        const size = (id * 13) % 4 + 3; // Tamaños variados entre 3px y 6px
        return { left: `${x}%`, top: `${y}%`, width: `${size}px`, height: `${size}px` };
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
                    src="/DanielRuiz.jpeg" 
                    className="w-48 h-60 object-cover rounded-sm shadow-xl border-[6px] border-white" 
                    alt="Daniel Ruiz"
                  />
                </div>

                {/* Datos del Ser Querido */}
                <div className="text-center w-full max-w-lg">
                  <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10 tracking-tight">
                    Daniel Inocencio Ruiz Rodriguez
                  </h1>

                  <ul className="space-y-5 text-gray-600 font-light text-sm">
                    <li className="flex items-center justify-center gap-3">
                      <Calendar size={16} className="text-gray-400"/> 
                      <span>Nació en Juventino Rosas, Guanajuato, 21 de Julio de 1957</span>
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <MapPin size={16} className="text-gray-400"/> 
                      <span>Falleció en Juventino Rosas, 10 de Marzo del 2026</span>
                    </li>
                    
                    {/* Separador sutil antes de datos familiares */}
                    <div className="w-12 h-[1px] bg-gray-100 mx-auto my-6"></div>

                    <li className="flex items-center justify-center gap-3">
                      <Users size={16} className="text-gray-400"/> 
                      <span><strong>Padres:</strong> J. Guadalupe Ruiz Mendoza / María del Refugio Rodriguez Rangel</span>
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <Heart size={16} className="text-gray-400"/> 
                      <span><strong>Cónyuge:</strong> Soltero</span>
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <Baby size={16} className="text-gray-400"/> 
                      <span><strong>Hijos:</strong> Sin hijos</span>
                    </li>

                        {/* CONTADOR DE DÍAS DE LEGADO AUTOMÁTICO */}
                        <div className="mt-6 pt-4 border-t border-gray-50 text-center">
                          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1 font-light">
                            Días de Legado y Recuerdo
                          </p>
                          <p className="text-2xl font-serif text-gray-800 font-medium tracking-wide">
                            ✨ {calcularDiasLegado()} días
                          </p>
                        </div>




                     



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
                          <p className="text-gray-800 font-medium">Bartolomé de las casas 201</p>
                          <p className="text-gray-500 text-sm font-light leading-relaxed">
                            Martes y Miércoles 10-11 de Marzo — 08:00 AM<br />
                            Bartolomé de las casas 201
                          </p>
                        </div>

                        {/* 2. Misa (Con línea divisoria lateral en tablets/PC) */}
                        <div className="space-y-3 md:border-l border-gray-100 md:pl-10">
                          <div className="flex items-center gap-2 text-[#c5a059] mb-1">
                            <Church size={18} />
                            <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Misa de Cuerpo Presente</span>
                          </div>
                          <p className="text-gray-800 font-medium">Parroquia de la Santa Cruz</p>
                          <p className="text-gray-500 text-sm font-light leading-relaxed">
                            Jueves 12 de Marzo — 13:00 Hrs<br />                            
                          </p>
                        </div>

                        {/* 3. Sepelio */}
                        <div className="space-y-3 md:border-l border-gray-100 md:pl-10">
                          <div className="flex items-center gap-2 text-[#c5a059] mb-1">
                            <MapPinned size={18} />
                            <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Sepelio</span>
                          </div>
                          <p className="text-gray-800 font-medium">Panteón viejo</p>
                          <p className="text-gray-500 text-sm font-light leading-relaxed">
                            Jueves 12 de Marzo — 15:00 Hrs<br />
                            Tumba familiar
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.3855322633025!2d-100.993705230375!3d20.64751185376916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c9f4d6a2bdadb%3A0x72c72ac42fdf0ce0!2sBartolom%C3%A9%20de%20Las%20Casas%20201%2C%20Zona%20Centro%2C%2038240%20Juventino%20Rosas%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1778770252019!5m2!1ses-419!2smx" 
                        
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
                    Daniel Hinocencio, conocido por amigos de la infancia como "Chencho", un gran amigo y compañero. Fué tejedor por años en un telar local. Tambíen fué mesero en el grupo "Servicio de meseros Juventino Rosas". Fué una persona dedicada y amable con la familia.
                  </p>
                </div>


                <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-200">
                  <h2 className="text-xl font-serif text-gray-900 mb-6 border-b pb-4 tracking-wider uppercase">Muro de Luces de Esperanza</h2>
   
                    {/* SECCIÓN COMPLETA DE VELAS VIRTUALES Y MURO DE LUCES */}
                      <div className="mt-4 pt-2 border-t border-gray-100 flex flex-col items-center w-full">
                        
                          <p className="text-gray-700 leading-relaxed font-light text-justify">
                          Cada vez que enciendes una vela, se enciende un destello en el cielo de este homenaje simbolizando luz de esperanza y recuerdo. ¡Únete y deja tu huella de amor eterno!                        

                          </p>
                          
                          {/* Contenedor Oscuro (Simulación de cielo nocturno) */}
                          <div className="w-full h-48 bg-gradient-to-b from-gray-950 to-slate-900 rounded-sm relative overflow-hidden border border-gray-800 shadow-inner mb-6">
                            
                            {/* Dibuja las estrellas reales leyendo los IDs de Supabase */}
                            {listaVelas.map((vela) => {
                              const pos = generarPosicionEstrella(vela.id);
                              return (
                                <div
                                  key={vela.id}
                                  style={pos}
                                  className="absolute bg-amber-300 rounded-full shadow-[0_0_10px_#fcd34d] animate-pulse duration-1000"
                                />
                              );
                            })}

                            {/* Mensaje decorativo de fondo cuando el contador esté en 0 */}
                            {totalVelas === 0 && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-xs text-gray-600 italic font-light">
                                  El cielo está esperando tu luz...
                                </p>
                              </div>
                            )}
                          </div>

                          {/* El botón de interactuar (El mismo de antes con tamaño 28 y 4xl) */}
                          <button
                            onClick={encenderVelaVirtual}
                            disabled={encendiendoVela}
                            className={`flex items-center gap-4 px-8 py-4 rounded-full font-serif text-lg border-2 transition-all duration-300 ${
                              encendiendoVela 
                                ? 'bg-amber-50 text-amber-400 border-amber-300 cursor-not-allowed' 
                                : 'bg-white hover:bg-amber-50/50 text-amber-700 border-amber-400 hover:border-amber-500 shadow-sm hover:shadow-md active:scale-95'
                            }`}
                          >
                            <Flame 
                              size={28} 
                              className={`${encendiendoVela ? 'animate-pulse text-amber-400' : 'text-amber-500 fill-amber-500'}`} 
                            />
                            {encendiendoVela ? 'Encendiendo...' : 'Encender una vela virtual'}
                          </button>
                          
                          {/* El contador numérico inferior */}
                          <p className="text-base text-gray-500 font-light mt-4 tracking-wide flex items-center gap-2">
                            <span className="text-4xl animate-pulse select-none">🕯️</span> 
                            <span className="font-semibold text-amber-800 text-lg">{totalVelas}</span> {totalVelas === 1 ? 'vela encendida' : 'velas encendidas'} en este homenaje
                          </p>

                      </div>

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
                            {mostrarFormulario ? 'Cancelar' : 'Añadir un comentario.'}
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
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-500">
                        {fotosGaleria.map((foto, index) => (
                          <div 
                            key={index} 
                            className="overflow-hidden rounded-sm bg-gray-100 cursor-pointer border border-gray-200/50 hover:opacity-90 transition-opacity"
                            onClick={() => setFotoAmpliada(foto)} // 👈 Al hacer clic, guarda la ruta de esta foto
                            >
                            <img 
                              src={foto} 
                              alt={`Fotografía ${index + 1}`} 
                              className="w-full h-64 object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                            />
                          </div>
                        ))}
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


          {/* MODAL PARA VER FOTO AMPLIADA */}
          {fotoAmpliada && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300 cursor-zoom-out"
              onClick={() => setFotoAmpliada(null)} // 👈 Cierra el modal al hacer clic afuera
            >
              {/* Botón de cerrar (X) */}
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white text-sm tracking-widest uppercase font-light bg-black/40 px-4 py-2 rounded-sm border border-white/10 transition-colors"
                onClick={() => setFotoAmpliada(null)}
              >
                Cerrar
              </button>

              {/* Imagen grande */}
              <img 
                    src={fotoAmpliada} 
                    alt="Visualización ampliada" 
                    className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl animate-in zoom-in-95 duration-300"
                    onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic en la propia foto
              />
            </div>
          )}



      </div>
  );
}


