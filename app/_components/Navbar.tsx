import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl rounded-full bg-white/30 border border-white/20 backdrop-blur-sm shadow-md dark:bg-black/20 dark:border-white/10">
      
      <div className="flex items-center justify-between px-8 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logotipo Flora"
            width={35}
            height={35}
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            FLORA
          </span>
        </Link>

        {/* Links de Navegação */}
        <ul className="flex space-x-8 text-sm font-medium text-gray-800 dark:text-gray-200">
          <li>
            <Link href="/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/projetos" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Projetos
            </Link>
          </li>
        </ul>

        {/* Botão Call to Action - Ajustado para tom escuro combinando com a Home */}
        <Link 
          href="/contato" 
          className=""
        >
          Contato
        </Link>
      </div>
    </nav>
  );
}