import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <header className="relative min-h-screen flex items-center justify-start overflow-hidden">
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="/Floravideo.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        <div className="absolute z-10 w-full h-full bg-black/60"></div>

        <div className="relative z-20 ml-12 w-full max-w-7xl mx-auto px-6 md:px-12 mt-16 flex flex-col items-start text-left">
          
          <div className="max-w-3xl">
            <p className="mb-4 text-xs  font-bold tracking-[0.3em] text-gray-300 uppercase">
              Para um futuro mais verde
            </p>
            
         <h1 className="mb-6 text-5xl font-extrabold text-white sm:text-6xl md:text-7xl drop-shadow-lg leading-tight">
  APOIE <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">FLORA</span>
</h1>
            
            <h2 className="mb-10 text-lg font-light text-gray-200 md:text-xl">
              Soluções sustentáveis e paisagismo inteligente para transformar o seu espaço e o nosso planeta.
            </h2>
            
            <div className="flex flex-col gap-4 sm:flex-row">
             
              <button className="px-8 py-3 text-sm font-semibold text-white transition-all border border-white/30 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105">
                Fale Conosco
              </button>
            </div>

          </div>
        </div>
      </header>

    </main>
  );
}