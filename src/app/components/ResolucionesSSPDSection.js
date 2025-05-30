'use client';

import React, { useState } from 'react';
import { 
  Building, 
  Search, 
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
  FileText,
  Calendar,
  HardDrive,
  ExternalLink,
  Tag,
  FolderOpen
} from 'lucide-react';

const ResolucionesSSPDSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas las categorias');
  const [currentView, setCurrentView] = useState('main'); // 'main' o 'subseccion'
  const [selectedSubseccion, setSelectedSubseccion] = useState('');

  // Etiquetas/carpetas clickeables
  const etiquetas = [
    'CONCEPTOS DEL MINISTERIO',
    'RESOLUCIONES SSPD'
  ];

  // Datos por subsección
  const documentosPorSubseccion = {
    'CONCEPTOS DEL MINISTERIO': [
      {
        id: 1,
        title: 'CONCEPTO No. 112 DE 2005- DERECHO DE PETICION Y RESERVA DE INFORMACION',
        size: '76.88 KB',
        views: 0,
        uploadDate: '20-10-2024',
        downloads: 0
      },
      {
        id: 2,
        title: 'CONCEPTO No. 187 DE 2006 - RECONOCIMIENTO ACTIVOS DE TERCEROS',
        size: '15.27 KB',
        views: 0,
        uploadDate: '26-10-2024',
        downloads: 0
      },
      {
        id: 3,
        title: 'CONCEPTO No. 238 DE 2010 - DERECHO DE PETICION Y DEBIDO PROCESO',
        size: '180.13 KB',
        views: 0,
        uploadDate: '26-10-2024',
        downloads: 0
      },
      {
        id: 4,
        title: 'CONCEPTO No. 260 DE 2009 - FACULTAD SANCIONATORIA',
        size: '30.18 KB',
        views: 0,
        uploadDate: '26-10-2024',
        downloads: 0
      }
    ],
    'RESOLUCIONES SSPD': [
      {
        id: 1,
        title: 'CONCEPTO No. 414 DE 2003 - CORRECCION, IDENTIFICACION, NO OPEN ART. 140 LEY 142 DE 1994',
        size: '1798.6 KB',
        views: 0,
        uploadDate: '20-10-2024',
        downloads: 0
      },
      {
        id: 2,
        title: 'CONCEPTO No. 646 DE 2009 - REGIMEN LEGAL SERVIDUMBRES',
        size: '54.87 KB',
        views: 0,
        uploadDate: '20-10-2024',
        downloads: 0
      },
      {
        id: 3,
        title: 'CONCEPTO No. 658 DE 2009 - INTERESES EN SERVICIOS PUBLICOS',
        size: '168.5 KB',
        views: 0,
        uploadDate: '20-10-2024',
        downloads: 0
      },
      {
        id: 4,
        title: 'CONCEPTO No. 661 DE 2009 - MEDICION DEL CONSUMO',
        size: '59.05 KB',
        views: 0,
        uploadDate: '20-10-2024',
        downloads: 0
      },
      {
        id: 5,
        title: 'CONCEPTO No. 662 DE 2009 - CADUCIDAD, ROMPIMIENTO',
        size: '154.7 KB',
        views: 0,
        uploadDate: '20-10-2024',
        downloads: 0
      },
      {
        id: 6,
        title: 'CONCEPTO No. 668 DE 2006 - DERECHO DE PETICION Y CONFIDENCIALIDAD DE LA INFORMACION',
        size: '127.58 KB',
        views: 0,
        uploadDate: '20-10-2024',
        downloads: 0
      }
    ]
  };

  // Documentos principales (cuando no hay subsección seleccionada)
  const documentosPrincipales = [
    {
      id: 1,
      title: 'CONCEPTO No. 112 DE 2005- DERECHO DE PETICION Y RESERVA DE INFORMACION',
      size: '76.88 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'conceptos'
    },
    {
      id: 2,
      title: 'CONCEPTO No. 187 DE 2006 - RECONOCIMIENTO ACTIVOS DE TERCEROS',
      size: '15.27 KB',
      views: 0,
      uploadDate: '26-10-2024',
      downloads: 0,
      category: 'conceptos'
    },
    {
      id: 3,
      title: 'CONCEPTO No. 238 DE 2010 - DERECHO DE PETICION Y DEBIDO PROCESO',
      size: '180.13 KB',
      views: 0,
      uploadDate: '26-10-2024',
      downloads: 0,
      category: 'conceptos'
    },
    {
      id: 4,
      title: 'CONCEPTO No. 260 DE 2009 - FACULTAD SANCIONATORIA',
      size: '30.18 KB',
      views: 0,
      uploadDate: '26-10-2024',
      downloads: 0,
      category: 'conceptos'
    },
    {
      id: 5,
      title: 'CONCEPTO No. 414 DE 2003 - CORRECCION, IDENTIFICACION, NO OPEN ART. 140 LEY 142 DE 1994',
      size: '1798.6 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'resoluciones'
    },
    {
      id: 6,
      title: 'CONCEPTO No. 646 DE 2009 - REGIMEN LEGAL SERVIDUMBRES',
      size: '54.87 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'resoluciones'
    },
    {
      id: 7,
      title: 'CONCEPTO No. 658 DE 2009 - INTERESES EN SERVICIOS PUBLICOS',
      size: '168.5 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'resoluciones'
    },
    {
      id: 8,
      title: 'CONCEPTO No. 661 DE 2009 - MEDICION DEL CONSUMO',
      size: '59.05 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 0,
      category: 'resoluciones'
    }
  ];

  const handleEtiquetaClick = (etiqueta) => {
    setSelectedSubseccion(etiqueta);
    setCurrentView('subseccion');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
    setSelectedSubseccion('');
  };

  const handleDownload = (documento) => {
    console.log(`Descargando: ${documento.title}`);
  };

  const handleVistaPrevia = (documento) => {
    console.log(`Vista previa: ${documento.title}`);
  };

  // Vista de subsección específica
  if (currentView === 'subseccion') {
    const documentosSubseccion = documentosPorSubseccion[selectedSubseccion] || [];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header de subsección */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <button
                onClick={handleBackToMain}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mb-8"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Gestión Jurídica</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Búsqueda */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar archivos..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white placeholder-gray-500"
                  />
                </div>
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white">
                  <option>todas las categorias</option>
                </select>
              </div>
              <div className="md:col-span-3 flex justify-end">
                <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Buscar
                </button>
              </div>
            </div>
          </div>

          {/* Título con información */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{selectedSubseccion}</h1>
            <span className="text-gray-500 text-sm">{documentosSubseccion.length} ARCHIVOS</span>
          </div>

          {/* Lista de documentos */}
          {documentosSubseccion.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {documentosSubseccion.map((doc) => (
                <div key={doc.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                  <h3 className="font-bold text-gray-900 text-sm mb-4 line-clamp-3">{doc.title}</h3>
                  
                  <div className="space-y-2 text-xs text-gray-600 mb-6">
                    <div className="flex items-center justify-between">
                      <span>Tamaño:</span>
                      <span className="font-medium">{doc.size}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Vistas:</span>
                      <span className="font-medium">{doc.views}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Subido el:</span>
                      <span className="font-medium">{doc.uploadDate}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3 mb-4">
                    <button 
                      onClick={() => handleDownload(doc)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>Descargar</span>
                    </button>
                    
                    <button 
                      onClick={() => handleVistaPrevia(doc)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl transition-all duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{doc.downloads} descargas</span>
                      <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                        <span>Vista Previa</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-lg p-12">
                <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Documentos en proceso
                </h3>
                <p className="text-gray-600">
                  Los documentos de esta categoría se están preparando.
                </p>
              </div>
            </div>
          )}

          {/* Paginación */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium bg-blue-500 text-white">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">2</button>
              <button className="px-3 py-2 text-blue-600 hover:text-blue-800">Siguiente &gt;</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vista principal de Resoluciones SSPD
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <Building className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Resoluciones SSPD</h1>
            <p className="text-xl text-blue-100 mb-8">
              Inicio / Resoluciones SSPD
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
                <option value="todas las categorias">todas las categorias</option>
                <option value="conceptos">Conceptos</option>
                <option value="resoluciones">Resoluciones</option>
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
          <h2 className="text-3xl font-bold text-gray-900">07. Resoluciones SSPD</h2>
        </div>

        {/* Etiquetas/Carpetas clickeables */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            {etiquetas.map((etiqueta, index) => (
              <button
                key={index}
                onClick={() => handleEtiquetaClick(etiqueta)}
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm rounded-lg transition-all duration-300 border hover:border-blue-300"
              >
                <Tag className="w-3 h-3 mr-2" />
                {etiqueta}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de documentos principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {documentosPrincipales.map((doc, index) => (
            <div 
              key={doc.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-sm mb-4 line-clamp-3">
                  {doc.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <span>Tamaño:</span>
                    <span className="font-medium">{doc.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>Vistas:</span>
                    <span className="font-medium">{doc.views}</span>
                  </div>
                  <div className="flex items-center space-x-1 col-span-2">
                    <span>Subido el:</span>
                    <span className="font-medium">{doc.uploadDate}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDownload(doc)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar</span>
                  </button>
                  
                  <button
                    onClick={() => handleVistaPrevia(doc)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Vista Previa</span>
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{doc.downloads} descargas</span>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                      <span>Vista Previa</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium bg-blue-500 text-white">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">2</button>
            <button className="px-3 py-2 text-blue-600 hover:text-blue-800">Siguiente &gt;</button>
          </div>
        </div>

        {/* Información adicional */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Resoluciones SSPD</h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Consulta las resoluciones y conceptos emitidos por la Superintendencia de Servicios Públicos Domiciliarios (SSPD). 
              Documentos regulatorios organizados por categorías temáticas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <Building className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">SSPD</h4>
                <p className="text-gray-600 text-sm">Superintendencia</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Conceptos</h4>
                <p className="text-gray-600 text-sm">Interpretaciones oficiales</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <Download className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Acceso Libre</h4>
                <p className="text-gray-600 text-sm">Descarga gratuita</p>
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

export default ResolucionesSSPDSection;