'use client';
import { useEffect, useState } from 'react';
import { getCategorias, eliminarCategoria } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const router = useRouter();

  useEffect(() => {
    cargar();
  }, []);

  const cargar = async () => {
    const data = await getCategorias();
    setCategorias(data);
  };

  const eliminar = async (id) => {
    if (confirm('¿Está seguro que desea eliminar esta categoría?')) {
      await eliminarCategoria(id);
      cargar();
    }
  };

  const categoriasFiltradas = categorias.filter(categoria =>
    categoria.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">📂 Categorías de Productos</h1>
        <button 
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-md flex items-center gap-1 transition-colors text-sm"
          onClick={() => router.push('/categorias/new')}
        >
          ➕ Nueva Categoría
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-6">
        <div className="p-3 bg-gray-50 border-b">
          <div className="relative max-w-xs mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              🔍
            </div>
            <input
              type="text"
              placeholder="Buscar categorías..."
              className="pl-10 pr-3 py-2 w-full border rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-16">ID</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nombre</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-24">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {categoriasFiltradas.map((categoria) => (
                <tr key={categoria.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-2 text-center text-sm font-medium text-gray-900">
                    #{categoria.id}
                  </td>
                  <td className="px-3 py-2">
                    <div className="text-sm font-medium text-gray-900">
                      {categoria.nombre}
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => router.push(`/categorias/${categoria.id}/edit`)}
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-1 rounded transition-colors"
                        title="Editar categoría"
                      >
                        <span className="text-sm">✏️</span>
                      </button>
                      <button
                        onClick={() => eliminar(categoria.id)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition-colors"
                        title="Eliminar categoría"
                      >
                        <span className="text-sm">🗑️</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {categoriasFiltradas.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            <div className="text-3xl mb-2">
              {busqueda ? '🔍' : '📁'}
            </div>
            <p className="text-sm">
              {busqueda ? 'No se encontraron categorías' : 'No hay categorías registradas'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}