export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">
            Sistema de Gestión Farmacéutica
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Administra productos y categorías de manera eficiente
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <a href="/productos">
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                Ver Medicamentos
              </button>
            </a>
            <a href="/categorias">
              <button className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
                Ver Categorías
              </button>
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon="📦" 
              title="Gestión de Inventario" 
              description="Control completo de stock y existencias" 
            />
            <FeatureCard 
              icon="🏷️" 
              title="Categorización" 
              description="Organiza productos por categorías y subcategorías" 
            />
            <FeatureCard 
              icon="📊" 
              title="Reportes" 
              description="Genera reportes de ventas y existencias" 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}