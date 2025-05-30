'use client';

import React, { useState } from 'react';
import { 
  Gavel, 
  Search, 
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
  FileText,
  Calendar,
  HardDrive,
  ExternalLink
} from 'lucide-react';

const BancoSentenciasSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas las categorias');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Datos de las sentencias del banco
  const sentenciasData = [
    {
      id: 1,
      title: '1. EDILBERTO VERGARA TELLEZ',
      size: '4.02 MB',
      views: 2,
      uploadDate: '16-10-2024',
      downloads: 0,
      category: 'civil'
    },
    {
      id: 2,
      title: '2. INDRA COLOMBIA LTDA',
      size: '312.09 KB',
      views: 3,
      uploadDate: '16-10-2024',
      downloads: 0,
      category: 'comercial'
    },
    {
      id: 3,
      title: '3. INMOBILIARIA ROSRIOS - CIVIL',
      size: '1.56 MB',
      views: 0,
      uploadDate: '16-10-2024',
      downloads: 0,
      category: 'civil'
    },
    {
      id: 4,
      title: '3.1. INMOBILIARIA ROSRIOS - FALTA DE COMPETENCIA',
      size: '8.51 MB',
      views: 0,
      uploadDate: '16-10-2024',
      downloads: 0,
      category: 'competencia'
    },
    {
      id: 5,
      title: '3.2. INMOBILIARIA ROSRIOS',
      size: '102.43 KB',
      views: 0,
      uploadDate: '16-10-2024',
      downloads: 0,
      category: 'inmobiliaria'
    },
    {
      id: 6,
      title: '4. RAQUEL PARRA - JUZGADO',
      size: '1.58 MB',
      views: 0,
      uploadDate: '16-10-2024',
      downloads: 0,
      category: 'juzgado'
    },
    {
      id: 7,
      title: '4.1 RAQUEL PARRA - TRIBUNAL',
      size: '2.02 MB',
      views: 2,
      uploadDate: '16-10-2024',
      downloads: 0,
      category: 'tribunal'
    },
    {
      id: 8,
      title: '5. ALICIA URRIAGO AVILA',
      size: '1.520 MB',
      views: 0,
      uploadDate: '16-10-2024',
      downloads: 0,
      category: 'civil'
    },
    {
      id: 9,
      title: '6. BETTY MEDINA TORRES',
      size: '2.11 MB',
      views: 2,
      uploadDate: '16-10-2024',
      downloads: 0,
      category: 'civil'
    },
    {
      id: 10,
      title: '7. PABLO EMILIO ARIAS RUJANA - 14100131050013000101_110 01012008_002_001',
      size: '304 KB',
      views: 0,
      uploadDate: '16-10-2024',
      downloads: 0,
      category: 'proceso'
    }
  ];

  // Categorías disponibles
  const categories = [
    'todas las categorias',
    'civil',
    'comercial',
    'competencia',
    'inmobiliaria',
    'juzgado',
    'tribunal',
    'proceso'
  ];

  // Filtrar sentencias
  const filteredSentencias = sentenciasData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todas las categorias' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Paginación
  const totalPages = Math.ceil(filteredSentencias.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSentencias = filteredSentencias.slice(startIndex, startIndex + itemsPerPage);

  const handleDownload = (sentencia) => {
    console.log(`Descargando: ${sentencia.title}`);
    // Aquí iría la lógica real de descarga
  };

  const handleVistaPrevia = (sentencia) => {
    console.log(`Vista previa: ${sentencia.title}`);
    // Aquí iría la lógica para mostrar vista previa
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <Gavel className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Banco de Sentencias</h1>
            <p className="text-xl text-blue-100 mb-8">
              Inicio / Banco de Sentencias
            </p>
            <button
              onClick={onBack}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto"
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
                {categories.map(category => (
                  <option key={category} value={category} className="text-gray-900">
                    {category}
                  </option>
                ))}
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
            <span className="text-sm">08.</span>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Banco de Sentencias</span>
          </nav>
        </div>

        {/* Título de sección */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">08. Banco de Sentencias</h2>
        </div>

        {/* Grid de sentencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {currentSentencias.map((sentencia, index) => (
            <div 
              key={sentencia.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="p-6">
                {/* Header de la tarjeta */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 text-sm mb-4 line-clamp-3">
                    {sentencia.title}
                  </h3>
                  
                  {/* Información del archivo */}
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <span>Tamaño:</span>
                      <span className="font-medium">{sentencia.size}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Vistas:</span>
                      <span className="font-medium">{sentencia.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 col-span-2">
                      <span>Subido el:</span>
                      <span className="font-medium">{sentencia.uploadDate}</span>
                    </div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDownload(sentencia)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar</span>
                  </button>
                  
                  <button
                    onClick={() => handleVistaPrevia(sentencia)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Vista Previa</span>
                  </button>
                </div>

                {/* Estadísticas adicionales */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{sentencia.downloads} descargas</span>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                      <span>Vista Previa</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Indicador de hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              
              {totalPages > 3 && (
                <button 
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  className="px-3 py-2 text-blue-600 hover:text-blue-800"
                >
                  Siguiente &gt;
                </button>
              )}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mensaje si no hay resultados */}
        {filteredSentencias.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <Gavel className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No se encontraron sentencias
              </h3>
              <p className="text-gray-600">
                Intenta ajustar tu búsqueda para encontrar más resultados.
              </p>
            </div>
          </div>
        )}

        {/* Información adicional */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Banco de Sentencias Jurisprudenciales</h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Base de datos completa de sentencias judiciales relacionadas con ElectroHuila. 
              Jurisprudencia organizada y clasificada para facilitar la consulta y análisis legal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-pink-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <Gavel className="w-8 h-8 text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">+100 Sentencias</h4>
                <p className="text-gray-600 text-sm">Base de datos completa</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Organizadas</h4>
                <p className="text-gray-600 text-sm">Por categorías temáticas</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <Download className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Acceso Directo</h4>
                <p className="text-gray-600 text-sm">Descarga inmediata</p>
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BancoSentenciasSection;