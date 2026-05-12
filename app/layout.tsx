import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* Añadimos scroll-smooth aquí también por seguridad */}
      <body className="bg-black text-white antialiased min-h-screen flex flex-col scroll-smooth">
        
        <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5 py-10">
          <div className="flex justify-center space-x-14 text-sm tracking-[0.35em] font-light">
            
            {/* 1. CAMBIO: href="#top" para que el scroll funcione al hacer clic */}
            <Link href="/#top" className="group relative transition-colors hover:text-gray-400 uppercase">
              Inicio
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/nosotros" className="group relative transition-colors hover:text-gray-400 uppercase">
              Nosotros
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/memoriales" className="group relative transition-colors hover:text-gray-400 uppercase">
              Explorar Memoriales
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/contacto" className="group relative transition-colors hover:text-gray-400 uppercase">
              Contacto
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-300 group-hover:w-full"></span>
            </Link>

          </div>
        </nav>

        <main className="flex-grow">{children}</main>

        <footer className="bg-[#a67c33] py-4 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[10px] md:text-xs text-white/90 tracking-widest font-light uppercase">
              Copyright © 2024 Recuerdos – Desarrollado por codigo
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}
