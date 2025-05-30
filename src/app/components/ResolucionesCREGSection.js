'use client';

import React, { useState } from 'react';
import { 
  Award, 
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

const ResolucionesCREGSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas las categorias');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Datos de las resoluciones CREG
  const resolucionesData = [
    {
      id: 1,
      title: 'CIRCULAR 018 DE 2003 - COBRO GASTOS A PROPIETARIOS DE INFRAESTRUCTURA',
      size: '100.50 KB',
      views: 1,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'circular'
    },
    {
      id: 2,
      title: 'CREG 001 DE 2007 - SUBSIDIOS ESTRATOS 1 y 2',
      size: '54.60 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'subsidios'
    },
    {
      id: 3,
      title: 'CREG 011 DE 2001 - FORMULA TARIFARIA PARA LA VENTA DE ENERGES DE GLP',
      size: '297.16 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'tarifaria'
    },
    {
      id: 4,
      title: 'CREG 004 DE 1995 - REGLAMENTO ASPECTOS COMERCIALES DEL MERCADO MAYORISTA',
      size: '1.02 MB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'comercial'
    },
    {
      id: 5,
      title: 'CREG 025 DE 1995 - CODIGO DE REDES Y MEDIDA DEL S.E.E',
      size: '4.53 MB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'redes'
    },
    {
      id: 6,
      title: 'CREG 007 DE 2011 -INDICES DE REFERENCIA DE LA DISCONTINUIDAD DEL EN',
      size: '93.5 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'indices'
    },
    {
      id: 7,
      title: 'CREG 031 DE 1997 - FORMULAS PARA COBRO A TERCEROS CONECTADOS EN EL SIN',
      size: '487.43 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'formulas'
    },
    {
      id: 8,
      title: 'CREG 043 DE 1996 - NORMAS E ALUMBRADO PUBLICO',
      size: '68.67 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'alumbrado'
    },
    {
      id: 9,
      title: 'CREG 043 DE 1996 - NORMAS SOBRE ALUMBRADO PUBLICO',
      size: '68.67 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'alumbrado'
    },
    {
      id: 10,
      title: 'CREG 061 DE 2000 - DEFINE REGLAS DE LA BOLSA EN EL MME',
      size: '83.760 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'bolsa'
    }
  ];

  // Categorías disponibles
  const categories = [
    'todas las categorias',
    'circular',
    'subsidios',
    'tarifaria',
    'comercial',
    'redes',
    'indices',
    'formulas',
    'alumbrado',
    'bolsa'
  ];

  // Filtrar resoluciones
  const filteredResoluciones = resolucionesData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todas las categorias' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Paginación
  const totalPages = Math.ceil(filteredResoluciones.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentResoluciones = filteredResoluciones.slice(startIndex, startIndex + itemsPerPage);

  const handleDownload = (resolucion) => {
    console.log(`Descargando: ${resolucion.title}`);
    // Aquí iría la lógica real de descarga
  };

  const handleVistaPrevia = (resolucion) => {
    console.log(`Vista previa: ${resolucion.title}`);
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
                <Award className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Resoluciones CREG</h1>
            <p className="text-xl text-blue-100 mb-8">
              Inicio / Resoluciones CREG
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

        {/* Título de sección */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">05. Resoluciones CREG</h2>
        </div>

        {/* Grid de resoluciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {currentResoluciones.map((resolucion, index) => (
            <div 
              key={resolucion.id}
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
                    {resolucion.title}
                  </h3>
                  
                  {/* Información del archivo */}
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <span>Tamaño:</span>
                      <span className="font-medium">{resolucion.size}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Vistas:</span>
                      <span className="font-medium">{resolucion.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 col-span-2">
                      <span>Subido el:</span>
                      <span className="font-medium">{resolucion.uploadDate}</span>
                    </div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDownload(resolucion)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar</span>
                  </button>
                  
                  <button
                    onClick={() => handleVistaPrevia(resolucion)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Vista Previa</span>
                  </button>
                </div>

                {/* Estadísticas adicionales */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{resolucion.downloads} descargas</span>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                      <span>Vista Previa</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Indicador de hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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
              
              {Array.from({ length: Math.min(4, totalPages) }, (_, i) => {
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
              
              {totalPages > 4 && (
                <>
                  <span className="px-3 py-2 text-gray-500">...</span>
                  <button 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className="px-3 py-2 text-blue-600 hover:text-blue-800"
                  >
                    Siguiente &gt;
                  </button>
                </>
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
        {filteredResoluciones.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No se encontraron resoluciones
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Resoluciones CREG</h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Consulta las resoluciones emitidas por la Comisión de Regulación de Energía y Gas (CREG). 
              Documentos regulatorios actualizados y organizados por categorías.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-yellow-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">+100 Resoluciones</h4>
                <p className="text-gray-600 text-sm">Normatividad regulatoria</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Actualizadas</h4>
                <p className="text-gray-600 text-sm">Versiones vigentes</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <Download className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Descarga Libre</h4>
                <p className="text-gray-600 text-sm">Acceso público gratuito</p>
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

export default ResolucionesCREGSection;