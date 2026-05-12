import { Mail, Phone, Share2, Clock, MapPin } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="bg-black min-h-screen text-white relative">
      
      {/* IMAGEN DE FONDO TENUE (Usa la misma o una similar a la de Nosotros) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/atardecer.jpg" 
          alt="Fondo" 
          className="w-full h-full object-cover opacity-8 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 pt-32 pb-40 px-6">
        
        {/* ENCABEZADO */}
        <section className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-3xl md:text-5xl font-serif text-[#c5a059] tracking-[0.4em] uppercase mb-10">
            Contacto
          </h1>
          <p className="text-sm md:text-base font-light tracking-[0.2em] text-gray-400 uppercase">
            Estamos aquí para acompañarte y resolver tus dudas
          </p>
        </section>

        {/* BLOQUES DE INFORMACIÓN */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-32 items-start justify-center">
          
          {/* Columna Izquierda: Comunicación Directa */}
          <div className="space-y-16">
            <div className="group flex items-start space-x-6">
              <Mail className="text-[#c5a059] w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div>
                <h3 className="text-[#e2d1a4] text-xs tracking-[0.3em] uppercase mb-3">Correo Electrónico</h3>
                <p className="text-gray-300 font-light text-lg tracking-wide hover:text-white transition-colors cursor-pointer">
                  ventas@recuerdos.com
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-6">
              <Phone className="text-[#c5a059] w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div>
                <h3 className="text-[#e2d1a4] text-xs tracking-[0.3em] uppercase mb-3">Teléfono / WhatsApp</h3>
                <p className="text-gray-300 font-light text-lg tracking-wide">
                  +52 (412) 110 32 32
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Horarios y Redes */}
          <div className="space-y-16">
            <div className="group flex items-start space-x-6">
              <Clock className="text-[#c5a059] w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div>
                <h3 className="text-[#e2d1a4] text-xs tracking-[0.3em] uppercase mb-3">Horario de Atención</h3>
                <p className="text-gray-300 font-light text-sm tracking-widest leading-relaxed uppercase">
                  Lunes a Viernes: 07:00 — 21:00<br />
                  Sábados: 08:00 — 17:00
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-6">
              <Share2 className="text-[#c5a059] w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div>
                <h3 className="text-[#e2d1a4] text-xs tracking-[0.3em] uppercase mb-3">Nuestra Comunidad</h3>
                <div className="flex space-x-8 mt-2">
                  <span className="text-gray-400 hover:text-white text-xs tracking-widest cursor-pointer transition-colors uppercase">Instagram</span>
                  <span className="text-gray-400 hover:text-white text-xs tracking-widest cursor-pointer transition-colors uppercase">Facebook</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Cierre elegante al final */}
        <div className="mt-40 text-center opacity-30">
          <p className="text-[12px] tracking-[0.5em] font-light uppercase">
            Atención personalizada en cada momento
          </p>
        </div>

      </div>
    </div>
  );
}
