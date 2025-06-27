'use client';
import { useEffect, useState } from 'react';
import { getCategoria, actualizarCategoria } from '@/lib/api';
import { useRouter, useParams } from 'next/navigation';

export default function EditarCategoria() {
  const [categoria, setCategoria] = useState({ 
    nombre: '',
  });
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (id) getCategoria(id).then(c => setCategoria({
      nombre: c.nombre,
    }));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await actualizarCategoria(id, categoria);
    router.push('/categorias');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mt-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">✏️ Editar Categoría</h1>
        <p className="text-gray-600">Modifique los datos que desee actualizar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Nombre de la categoría
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            value={categoria.nombre}
            onChange={e => setCategoria({...categoria, nombre: e.target.value})}
            required
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={() => router.push('/categorias')}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Actualizar Categoría
          </button>
        </div>
      </form>
    </div>
  );
}