import { ShieldCheck, Globe, Heart } from 'lucide-react';

export default function Nosotros() {
  return (
    <div className="bg-black min-h-screen text-white relative">
      
      {/* IMAGEN DE FONDO TENUE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cruz.jpg" 
          alt="Fondo" 
          className="w-full h-full object-cover opacity-13 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* CONTENIDO (Aseguramos que esté arriba con z-10) */}
      <div className="relative z-10 pt-32 pb-40 px-6">
        
        {/* SECCIÓN HERO NOSOTROS */}
        <section className="max-w-4xl mx-auto text-center mb-32">
          <h1 className="text-3xl md:text-5xl font-serif text-[#c5a059] tracking-[0.4em] uppercase mb-14">
            Nuestra Misión
          </h1>
          <p className="text-xl md:text-3xl font-serif italic text-gray-300 leading-relaxed max-w-2xl mx-auto">
            "Transformamos el adiós en un homenaje eterno, creando un puente digital entre 
            la memoria y el corazón."
          </p>
        </section>

        {/* SECCIÓN QUIÉNES SOMOS */}
        <section className="max-w-3xl mx-auto mb-40">
          <div className="space-y-10 text-gray-400 font-light leading-[2.2] text-lg text-center">
            <p>
              <strong className="text-[#e2d1a4] font-normal tracking-widest">RECUERDOS</strong> nació de la necesidad de encontrar un espacio 
              sereno y digno en el mundo digital para honrar a quienes ya no están físicamente con nosotros.
            </p>
            <p>
              Entendemos que el duelo es un proceso profundamente personal. 
              Nuestra plataforma permite que las familias puedan reunirse en un mismo lugar 
              para compartir la esencia de sus seres queridos.
            </p>
          </div>
        </section>

        {/* SECCIÓN DE VALORES */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
          <div className="space-y-6">
            <ShieldCheck className="mx-auto text-[#c5a059] w-7 h-7 opacity-50" />
            <h3 className="text-[#e2d1a4] tracking-[0.3em] uppercase text-xs">Respeto Total</h3>
            <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest px-4">
              Un entorno libre de publicidad, enfocado únicamente en el homenaje.
            </p>
          </div>

          <div className="space-y-6">
            <Globe className="mx-auto text-[#c5a059] w-7 h-7 opacity-50" />
            <h3 className="text-[#e2d1a4] tracking-[0.3em] uppercase text-xs">Sin Fronteras</h3>
            <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest px-4">
              Conectamos a familiares en cualquier parte del mundo.
            </p>
          </div>

          <div className="space-y-6">
            <Heart className="mx-auto text-[#c5a059] w-7 h-7 opacity-50" />
            <h3 className="text-[#e2d1a4] tracking-[0.3em] uppercase text-xs">Legado Vivo</h3>
            <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest px-4">
              Aseguramos que las historias perduren para las futuras generaciones.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
