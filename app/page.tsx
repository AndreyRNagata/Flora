import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* O Vídeo - Camada Base */}
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

        {/* Overlay - Camada Intermediária (Dá contraste para a logo) */}
        <div className="absolute z-10 w-full h-full bg-black/50"></div>

        {/* Conteúdo do Header - Camada de Topo */}
        <div className="relative z-20">
          <Image
            src="/logo.png"
            alt="Logotipo Flora"
            width={150} 
            height={150}
            priority 
          />
        </div>
      </header>
    </div>
  );
}