// 1. Todos los IMPORTS unidos en un solo bloque
import { 
  Sprout, Heart, Calendar, FileText, BookOpen, 
  Camera, Share2, Flame, GitGraph, QrCode, Check, Lock 
} from 'lucide-react';

export default function Inicio() {
  return (
    // Agregamos id="top" para que el botón Inicio del menú funcione
    <div id="top" className="bg-black min-h-screen text-white">
      
      {/* SECCIÓN HERO */}
      <section className="flex flex-col items-center justify-start pt-20 pb-16 px-4">
        <div className="flex items-center justify-center space-x-8 mb-6 text-[#c5a059]">
          <div className="opacity-55 transform -scale-x-100">
            <Sprout size={60} strokeWidth={1} />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif tracking-widest uppercase">
            Recuerdos
          </h1>
          <div className="opacity-55">
            <Sprout size={60} strokeWidth={1} />
          </div>
        </div>
        <p className="text-sm md:text-lg font-light tracking-[0.14em] text-gray-400 text-center max-w-3xl border-t border-white/10 pt-6 leading-relaxed">
          Un Espacio para Honrar, Recordar y Compartir las Vidas de Nuestros Seres Queridos
        </p>
      </section>

      {/* SECCIÓN INFORMATIVA */}
      <section className="max-w-6xl mx-auto px-4 py-27 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 border border-[#c5a059]/30 rounded-sm -z-10 translate-x-4 translate-y-4"></div>
            <img 
              src="/velas.jpg" 
              alt="Velas Memorial" 
              className="w-full h-[400px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="italic text-3xl font-serif text-[#c5a059] opacity-80">Eterna Presencia Digital</h3>
            <h2 className="text-xl md:text-2xl font-light tracking-widest text-[#e2d1a4] uppercase leading-tight">¿QUÉ ES RECUERDOS?</h2>
            <div className="space-y-4 text-gray-300 font-light text-sm md:text-base leading-relaxed">
              <p><strong>Recuerdos</strong> es un espacio para recordar, <strong>honrar</strong> y homenajear la memoria de tu ser amado.</p>
              <p>Cuando ocurre una defunción, las familias deben organizar servicios funerarios, gestionar la cremación o el ataúd, y comunicar la noticia.</p>
              <p>Ofrece un espacio fácil y accesible para acompañar en este proceso.</p>
              <p>Funciona como esquela digital, obituario y mensajes de condolencia de forma moderna.</p>
              <div className="pt-4">
                <h2 className="text-xl md:text-2xl font-light tracking-widest text-[#c5a059] leading-tight italic">
                  Mantén viva siempre su memoria
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CARACTERÍSTICAS */}
      <section className="max-w-2xl mx-auto px-6 py-27 border-t border-white/5">
        <div className="space-y-8">
          <div className="flex items-center space-x-6 group">
            <Heart className="text-[#c5a059] w-5 h-5 flex-shrink-0 opacity-80" />
            <p className="text-gray-300 font-light tracking-wide text-base leading-relaxed">Un Memorial para un recuerdo permanente</p>
          </div>
          <div className="flex items-center space-x-6 group">
            <Calendar className="text-[#c5a059] w-5 h-5 flex-shrink-0 opacity-80" />
            <p className="text-gray-300 font-light tracking-wide text-base leading-relaxed">Esquela digital para informar y convocar</p>
          </div>
          <div className="flex items-center space-x-6 group">
            <FileText className="text-[#c5a059] w-5 h-5 flex-shrink-0 opacity-80" />
            <p className="text-gray-300 font-light tracking-wide text-base leading-relaxed">Obituario para expresar quién fue el ser querido</p>
          </div>
          <div className="flex items-center space-x-6 group">
            <BookOpen className="text-[#c5a059] w-5 h-5 flex-shrink-0 opacity-80" />
            <p className="text-gray-300 font-light tracking-wide text-base leading-relaxed">Libro de comentarios de familiares y amigos</p>
          </div>
          <div className="flex items-center space-x-6 group">
            <Camera className="text-[#c5a059] w-5 h-5 flex-shrink-0 opacity-80" />
            <p className="text-gray-300 font-light tracking-wide text-base leading-relaxed">Fotografías para recordar momentos de felicidad</p>
          </div>
          <div className="flex items-center space-x-6 group">
            <Share2 className="text-[#c5a059] w-5 h-5 flex-shrink-0 opacity-80" />
            <p className="text-gray-300 font-light tracking-wide text-base leading-relaxed">Comparte con un enlace</p>
          </div>
          <div className="flex items-center space-x-6 group">
            <QrCode className="text-[#c5a059] w-5 h-5 flex-shrink-0 opacity-80" />
            <p className="text-gray-300 font-light tracking-wide text-base leading-relaxed">Descarga un código QR</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PLANES */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PLAN 1 AÑO */}
          <div className="bg-[#f9f9f9] overflow-hidden rounded-sm shadow-xl flex flex-col h-full text-black">
            <div className="bg-[#5a5a54] py-5 text-center text-white">
              <h3 className="text-xl tracking-[0.2em] font-light uppercase">Memorial 1 año</h3>
              <p className="text-[10px] opacity-70 uppercase">Memorial personalizado por 1 año</p>
            </div>
            <div className="p-10 text-center flex-grow">
              <h4 className="text-[#4a4a4a] text-5xl font-bold mb-8">$ 499.00</h4>
              <ul className="space-y-4 text-left max-w-[250px] mx-auto">
                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> Obituario</li>
                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> Comentarios</li>
                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> Esquela digital</li>
                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> Imagen QR</li>
                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> Fotografías</li>
                <li className="flex items-center italic text-gray-400"><Lock className="w-4 h-4 mr-3" /> Animación de imagen</li>
              </ul> 
            </div>
          </div>
          {/* PLAN 3 AÑOS */}
          <div className="bg-[#f9f9f9] overflow-hidden rounded-sm shadow-xl flex flex-col h-full text-black">
            <div className="bg-[#5a5a54] py-5 text-center text-white">
              <h3 className="text-xl tracking-[0.2em] font-light uppercase">Memorial 3 años</h3>
              <p className="text-[10px] opacity-70 uppercase">Memorial personalizado 3 años</p>
            </div>
            <div className="p-10 text-center flex-grow">
              <div className="mb-8">
                <div className="flex justify-center items-center space-x-4">
                  <span className="text-gray-400 line-through text-2xl">1299</span>
                  <span className="text-[#4a4a4a] text-5xl font-bold">$ 999</span>
                </div>
                <p className="text-[#c5a059] font-bold text-sm mt-2 tracking-widest uppercase">Mejor opción</p>
              </div>
              <ul className="space-y-4 text-left max-w-[250px] mx-auto">
                                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> Obituario</li>
                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> Comentarios</li>
                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> Esquela digital</li>                
                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> QR grabado</li>
                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> Fotografías</li>
                <li className="flex items-center text-gray-600 text-sm"><Check className="text-[#c5a059] w-4 h-4 mr-3" /> Animación de imagen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL "IN MEMORIAM" */}
      <section className="relative py-40 mt-25 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="/noche.jpg" alt="Fondo" className="w-full h-full object-cover opacity-32 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-24 text-[#c5a059] opacity-40">
            <div className="h-[1px] w-48 bg-gradient-to-r from-transparent to-[#c5a059]"></div>
            <div className="mx-12 text-[10px] tracking-[0.8em] uppercase font-light">In Memoriam</div>
            <div className="h-[1px] w-48 bg-gradient-to-l from-transparent to-[#c5a059]"></div>
          </div>
          <p className="text-2xl md:text-2xl font-serif italic text-gray-300 leading-relaxed max-w-3xl mx-auto">
            "El lugar virtual donde mantener la memoria de los seres queridos que partieron pero se quedaron en nuestros corazones."
          </p>
        </div>
      </section>

    </div>
  );
}
