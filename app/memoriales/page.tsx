import { Heart, Quote } from 'lucide-react';
import Link from 'next/link';

export default function Memoriales() {
  const memoriales = [

    {
      nombre: "Karol Józef Wojtyła",
      fechas: "1920 - 2005",
      foto: "/JuanPablo.jpg", 
      esquela: "¡No tengan miedo! Abran de par en par las puertas a Cristo.",
      obituario: "Conocido como San Juan Pablo II, el 'Papa peregrino' dedicó su vida a la paz mundial y la defensa de la dignidad humana. Su liderazgo espiritual y carisma unificaron naciones, dejando un legado eterno de fe y esperanza en la historia de la humanidad."
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-40 px-6 relative">
      <div className="absolute inset-0 z-0 opacity-90 bg-gradient-to-b from-black via-[#050505] to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        <header className="max-w-3xl mx-auto text-center mb-32">
          <h1 className="text-4xl md:text-5xl font-serif text-[#c5a059] tracking-[0.4em] uppercase">
            Memoriales
          </h1>
          <div className="w-24 h-[1px] bg-[#c5a059]/30 mx-auto mt-8"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 justify-items-center justify-center">
          {memoriales.map((m, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 group hover:border-[#c5a059]/30 transition-all duration-700 shadow-2xl max-w-2xl mx-auto w-full">
              
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                {/* FOTOGRAFÍA */}
                <div className="relative w-48 h-64 flex-shrink-0">
                  <div className="absolute -inset-2 border border-[#c5a059]/20 translate-x-2 translate-y-2"></div>
                  <img 
                    src={m.foto} 
                    alt={m.nombre} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>

                {/* DATOS, ESQUELA Y OBITUARIO */}
                <div className="flex-grow space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-light tracking-[0.1em] text-[#e2d1a4] uppercase">{m.nombre}</h2>
                  <p className="text-[#c5a059] text-sm tracking-[0.3em] font-light">{m.fechas}</p>
                  
                  <div className="pt-4 pb-2 italic text-gray-400 font-serif border-b border-white/5">
                    <Quote size={14} className="mb-2 opacity-30 mx-auto md:mx-0" />
                    "{m.esquela}"
                  </div>

                  <div className="pt-4">
                    <h3 className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-3">Obituario</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {m.obituario}
                    </p>
                  </div>

                 {/* Cambiamos el <button> por un <Link> */}
                    <Link 
                    href={m.nombre === "Karol Józef Wojtyła" ? "/memoriales/Juan-Pablo-II" : "/memoriales/Madre-Teresa"}
                    className="pt-8 text-[10px] tracking-[0.4em] text-[#c5a059] flex items-center justify-center md:justify-start hover:text-white transition-colors cursor-pointer"
                    >
                    <Heart size={12} className="mr-2" /> VER HOMENAJE COMPLETO
                    </Link>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

