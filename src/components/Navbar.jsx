'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white text-xl font-bold">Sistema</span>
          </div>

          <div className="hidden md:block">
            <ul className="ml-10 flex items-center space-x-8">
              <NavLink href="/" active={isActive('/')}>
                Inicio
              </NavLink>
              <NavLink href="/productos" active={isActive('/productos')}>
                Medicamentos
              </NavLink>
              <NavLink href="/categorias" active={isActive('/categorias')}>
                Categorías
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, active, children }) {
  return (
    <li>
      <Link href={href} passHref>
        <span className={`${active ? 'bg-blue-400' : 'hover:bg-blue-400'} px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors`}>
          {children}
        </span>
      </Link>
    </li>
  );
}