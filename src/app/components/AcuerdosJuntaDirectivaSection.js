'use client';

import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  FolderOpen,
  Download,
  Calendar,
  ChevronLeft,
  FileText,
  Eye
} from 'lucide-react';

const AcuerdosJuntaDirectivaSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas las categorias');

  // Datos de los años de acuerdos
  const acuerdosYears = [
    { year: '2008', id: 'acuerdos-2008', documentCount: 12 },
    { year: '2009', id: 'acuerdos-2009', documentCount: 15 },
    { year: '2010', id: 'acuerdos-2010', documentCount: 18 },
    { year: '2011', id: 'acuerdos-2011', documentCount: 14 },
    { year: '2012', id: 'acuerdos-2012', documentCount: 16 },
    { year: '2013', id: 'acuerdos-2013', documentCount: 20 },
    { year: '2014', id: 'acuerdos-2014', documentCount: 17 },
    { year: '2015', id: 'acuerdos-2015', documentCount: 19 },
    { year: '2016', id: 'acuerdos-2016', documentCount: 22 },
    { year: '2017', id: 'acuerdos-2017', documentCount: 25 },
    { year: '2018', id: 'acuerdos-2018', documentCount: 23 },
    { year: '2019', id: 'acuerdos-2019', documentCount: 21 },
    { year: '2020', id: 'acuerdos-2020', documentCount: 18 },
    { year: '2021', id: 'acuerdos-2021', documentCount: 24 },
    { year: '2022', id: 'acuerdos-2022', documentCount: 26 },
    { year: '2023', id: 'acuerdos-2023', documentCount: 28 },
    { year: '2024', id: 'acuerdos-2024', documentCount: 15 }
  ];

  // Filtrar años basado en búsqueda
  const filteredYears = acuerdosYears.filter(item => 
    item.year.includes(searchTerm) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleYearClick = (year) => {
    // Aquí puedes agregar la lógica para abrir los documentos del año específico
    console.log(`Abrir acuerdos del año ${year.year}`);
    // Ejemplo: window.open(`/acuerdos/${year.year}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Acuerdos de Junta Directiva</h1>
            <p className="text-xl text-blue-100 mb-8">
              Inicio / Acuerdos de Junta Directiva
            </p>
            <button
              onClick={onBack}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Gestión Jurídica</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filtros de búsqueda */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Campo de búsqueda */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar archivos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Selector de categorías */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
              >
                <option value="todas las categorias" className="text-gray-900">todas las categorias</option>
                <option value="administrativos" className="text-gray-900">Administrativos</option>
                <option value="financieros" className="text-gray-900">Financieros</option>
                <option value="operativos" className="text-gray-900">Operativos</option>
                <option value="estrategicos" className="text-gray-900">Estratégicos</option>
              </select>
            </div>

            {/* Botón de búsqueda */}
            <div className="md:col-span-3 flex justify-end">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Buscar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="text-gray-600">
            <span className="text-sm">02.</span>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Acuerdos de Junta Directiva</span>
          </nav>
        </div>

        {/* Título de sección */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">02. Acuerdos de Junta Directiva</h2>
        </div>

        {/* Grid de años */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredYears.map((item, index) => (
            <div 
              key={item.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-200"
              onClick={() => handleYearClick(item)}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="p-6 text-center">
                {/* Ícono de carpeta */}
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl mb-4 mx-auto w-fit transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <FolderOpen className="w-8 h-8 text-white" />
                </div>
                
                {/* Título del año */}
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  ACUERDOS {item.year}
                </h3>
                
                {/* Contador de documentos */}
                <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                  <FileText className="w-4 h-4" />
                  <span>{item.documentCount} documentos</span>
                </div>

                {/* Indicador de hover en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Ícono de enlace en la esquina */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                  <Eye className="w-4 h-4 text-blue-600" />
                </div>
              </div>

              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {filteredYears.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No se encontraron acuerdos
              </h3>
              <p className="text-gray-600">
                Intenta ajustar tu búsqueda para encontrar más resultados.
              </p>
            </div>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Información sobre Acuerdos</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Los acuerdos de Junta Directiva contienen las decisiones y resoluciones tomadas 
              por el órgano directivo de ElectroHuila. Estos documentos están organizados por 
              año para facilitar su consulta y seguimiento.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Desde 2008</h4>
                <p className="text-gray-600 text-sm">Archivo histórico disponible</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">+300 Documentos</h4>
                <p className="text-gray-600 text-sm">Acuerdos digitalizados</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <Download className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Descarga Libre</h4>
                <p className="text-gray-600 text-sm">Acceso público disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AcuerdosJuntaDirectivaSection;