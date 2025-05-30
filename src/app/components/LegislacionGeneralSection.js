'use client';

import React, { useState } from 'react';
import { 
  Scale, 
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

const LegislacionGeneralSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas las categorias');
  const [currentView, setCurrentView] = useState('main'); // 'main' o 'subcategoria'
  const [selectedSubcategoria, setSelectedSubcategoria] = useState('');

  // Etiquetas/carpetas clickeables
  const etiquetas = [
    '001 DERECHO DE PETICION',
    '01. FONDOS MINERO ENERGETICOS', 
    '02. RETIE - REGLAMENTO TECNICO',
    '03. RETILAP - REGLAMENTO TECNICO',
    '04. ALUMBRADO PUBLICO',
    '05. LABORAL Y SEGURIDAD SOCIAL',
    '06. CONCILIACION',
    '07. BOLETIN DE DEUDORES MOROSOS',
    '08. NORMAS ISO',
    '09. SICEL',
    '10. MEDIO AMBIENTE',
    '11. SERVIDUMBRES',
    '12. ESTRATIFICACION',
    '13. GESTION ACTIVOS',
    '14. CONTRATO DE CONDICIONES',
    '15. REGLAMENTO DE DISTRIBUCION',
    '16. REGLAMENTO DE TRANSPORTE',
    '17. NIP - NORMAS UNIFORMES',
    '18. NUEVA ESTRUCTURA TARIFARIA',
    '20. SISTEMA UNICO',
    '21. DESARROLLO LEGISLATIVO'
  ];

  // Datos completos de documentos por subcategoría
  const documentosPorCategoria = {
    '001 DERECHO DE PETICION': [
      {
        id: 1,
        title: 'DR. CAPACITACION DERECHO DE PETICION',
        size: '797.16 KB',
        views: 0,
        uploadDate: '20-10-2024',
        downloads: 0
      },
      {
        id: 2,
        title: 'DR. DERECHO DE PETICION - NORMATIVIDAD',
        size: '629.96 KB',
        views: 0,
        uploadDate: '20-10-2024',
        downloads: 0
      },
      {
        id: 3,
        title: 'DS. TALLER- CASUISTICA',
        size: '227.06 KB',
        views: 0,
        uploadDate: '20-10-2024',
        downloads: 0
      }
    ],
    '01. FONDOS MINERO ENERGETICOS': [
      {
        id: 1,
        title: 'LEY 1530 DE 2012 - SISTEMA GENERAL DE REGALÍAS',
        size: '3.2 MB',
        views: 234,
        uploadDate: '12-11-2024',
        downloads: 567
      },
      {
        id: 2,
        title: 'DECRETO 1075 DE 2015 - SECTOR EDUCACIÓN',
        size: '4.5 MB',
        views: 145,
        uploadDate: '08-11-2024',
        downloads: 356
      }
    ],
    '02. RETIE - REGLAMENTO TECNICO': [
      {
        id: 1,
        title: 'RESOLUCIÓN 90708 DE 2013 - RETIE',
        size: '5.8 MB',
        views: 445,
        uploadDate: '20-11-2024',
        downloads: 1234
      },
      {
        id: 2,
        title: 'RESOLUCIÓN 40492 DE 2015 - MODIFICACIÓN RETIE',
        size: '2.1 MB',
        views: 178,
        uploadDate: '18-11-2024',
        downloads: 445
      }
    ],
    '03. RETILAP - REGLAMENTO TECNICO': [
      {
        id: 1,
        title: 'RESOLUCIÓN 181331 DE 2009 - RETILAP',
        size: '3.7 MB',
        views: 267,
        uploadDate: '16-11-2024',
        downloads: 678
      }
    ],
    '04. ALUMBRADO PUBLICO': [
      {
        id: 1,
        title: 'LEY 1819 DE 2016 - REFORMA TRIBUTARIA ALUMBRADO',
        size: '2.9 MB',
        views: 123,
        uploadDate: '14-11-2024',
        downloads: 289
      },
      {
        id: 2,
        title: 'DECRETO 2424 DE 2006 - ALUMBRADO PÚBLICO',
        size: '1.5 MB',
        views: 89,
        uploadDate: '12-11-2024',
        downloads: 156
      }
    ],
    '05. LABORAL Y SEGURIDAD SOCIAL': [
      {
        id: 1,
        title: 'CÓDIGO SUSTANTIVO DEL TRABAJO',
        size: '4.2 MB',
        views: 789,
        uploadDate: '22-11-2024',
        downloads: 1567
      },
      {
        id: 2,
        title: 'LEY 100 DE 1993 - SISTEMA SEGURIDAD SOCIAL',
        size: '6.1 MB',
        views: 456,
        uploadDate: '19-11-2024',
        downloads: 987
      }
    ],
    '06. CONCILIACION': [
      {
        id: 1,
        title: 'LEY 640 DE 2001 - CONCILIACIÓN',
        size: '1.5 MB',
        views: 98,
        uploadDate: '13-11-2024',
        downloads: 156
      }
    ],
    '07. BOLETIN DE DEUDORES MOROSOS': [
      {
        id: 1,
        title: 'LEY 1266 DE 2008 - HABEAS DATA',
        size: '2.3 MB',
        views: 167,
        uploadDate: '11-11-2024',
        downloads: 234
      }
    ],
    '08. NORMAS ISO': [
      {
        id: 1,
        title: 'ISO 9001:2015 - SISTEMAS DE GESTIÓN DE CALIDAD',
        size: '1.8 MB',
        views: 234,
        uploadDate: '09-11-2024',
        downloads: 445
      },
      {
        id: 2,
        title: 'ISO 14001:2015 - SISTEMAS DE GESTIÓN AMBIENTAL',
        size: '1.6 MB',
        views: 178,
        uploadDate: '07-11-2024',
        downloads: 356
      }
    ],
    '09. SICEL': [
      {
        id: 1,
        title: 'RESOLUCIÓN SSPD 20051300040980 - SICEL',
        size: '1.2 MB',
        views: 89,
        uploadDate: '05-11-2024',
        downloads: 123
      }
    ],
    '10. MEDIO AMBIENTE': [
      {
        id: 1,
        title: 'LEY 99 DE 1993 - SISTEMA NACIONAL AMBIENTAL',
        size: '3.4 MB',
        views: 345,
        uploadDate: '03-11-2024',
        downloads: 678
      },
      {
        id: 2,
        title: 'DECRETO 2041 DE 2014 - LICENCIAS AMBIENTALES',
        size: '2.1 MB',
        views: 234,
        uploadDate: '01-11-2024',
        downloads: 445
      }
    ],
    '11. SERVIDUMBRES': [
      {
        id: 1,
        title: 'LEY 56 DE 1981 - SERVIDUMBRES ELÉCTRICAS',
        size: '1.9 MB',
        views: 156,
        uploadDate: '30-10-2024',
        downloads: 289
      }
    ],
    '12. ESTRATIFICACION': [
      {
        id: 1,
        title: 'LEY 142 DE 1994 - SERVICIOS PÚBLICOS DOMICILIARIOS',
        size: '4.8 MB',
        views: 567,
        uploadDate: '28-10-2024',
        downloads: 1234
      },
      {
        id: 2,
        title: 'DECRETO 1766 DE 2003 - ESTRATIFICACIÓN',
        size: '2.3 MB',
        views: 234,
        uploadDate: '26-10-2024',
        downloads: 456
      }
    ],
    '13. GESTION ACTIVOS': [
      {
        id: 1,
        title: 'RESOLUCIÓN CREG 015 DE 2018 - GESTIÓN ACTIVOS STN',
        size: '3.1 MB',
        views: 178,
        uploadDate: '24-10-2024',
        downloads: 334
      }
    ],
    '14. CONTRATO DE CONDICIONES': [
      {
        id: 1,
        title: 'RESOLUCIÓN CREG 108 DE 1997 - CONTRATO CONDICIONES UNIFORMES',
        size: '2.6 MB',
        views: 123,
        uploadDate: '22-10-2024',
        downloads: 245
      }
    ],
    '15. REGLAMENTO DE DISTRIBUCION': [
      {
        id: 1,
        title: 'RESOLUCIÓN CREG 097 DE 2008 - CÓDIGO DE DISTRIBUCIÓN',
        size: '4.2 MB',
        views: 445,
        uploadDate: '20-10-2024',
        downloads: 789
      }
    ],
    '16. REGLAMENTO DE TRANSPORTE': [
      {
        id: 1,
        title: 'RESOLUCIÓN CREG 025 DE 1995 - CÓDIGO DE REDES',
        size: '3.8 MB',
        views: 356,
        uploadDate: '18-10-2024',
        downloads: 667
      }
    ],
    '17. NIP - NORMAS UNIFORMES': [
      {
        id: 1,
        title: 'RESOLUCIÓN SSPD 20061300029639 - NIP',
        size: '2.1 MB',
        views: 167,
        uploadDate: '16-10-2024',
        downloads: 289
      }
    ],
    '18. NUEVA ESTRUCTURA TARIFARIA': [
      {
        id: 1,
        title: 'RESOLUCIÓN CREG 015 DE 2018 - NUEVA ESTRUCTURA TARIFARIA',
        size: '3.5 MB',
        views: 289,
        uploadDate: '14-10-2024',
        downloads: 534
      }
    ],
    '20. SISTEMA UNICO': [
      {
        id: 1,
        title: 'RESOLUCIÓN SSPD 20041300024390 - SUI',
        size: '1.8 MB',
        views: 145,
        uploadDate: '12-10-2024',
        downloads: 234
      }
    ],
    '21. DESARROLLO LEGISLATIVO': [
      {
        id: 1,
        title: 'LEY 1715 DE 2014 - ENERGÍAS RENOVABLES',
        size: '2.7 MB',
        views: 445,
        uploadDate: '10-10-2024',
        downloads: 889
      },
      {
        id: 2,
        title: 'PROYECTO LEY TRANSICIÓN ENERGÉTICA',
        size: '1.9 MB',
        views: 234,
        uploadDate: '08-10-2024',
        downloads: 456
      }
    ]
  };

  // Documentos principales (cuando no hay subcategoría seleccionada)
  const documentosPrincipales = [
    {
      id: 1,
      title: 'ACUERDO No. 060 DEL 2009 ESTATUTO TRIBUTARIO MUNICIPIO DE NEIVA',
      size: '1.64 MB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 156
    },
    {
      id: 2,
      title: 'CONSTITUCIÓN POLÍTICA DE COLOMBIA',
      size: '283.08 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 834
    },
    {
      id: 3,
      title: 'DECRETO 019 DE 2012 - ANTITRAMITES',
      size: '3.58 MB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 287
    },
    {
      id: 4,
      title: 'DECRETO 019 DE 2012 - ELIMINA Y REFORMA TRAMITES INNECESARIOS',
      size: '4.50 MB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 189
    },
    {
      id: 5,
      title: 'DECRETO 361 DE 2012 - MODIFICA ESTRUCTURA DEL MMME',
      size: '96.54 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 145
    },
    {
      id: 6,
      title: 'DECRETO 387 DE 2007 - POLÍTICAS DE COMERCIALIZACIÓN DE ENERGÍA',
      size: '374.8 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 298
    },
    {
      id: 7,
      title: 'DECRETO 388 DE 2007 - CREA LAS ÁREAS DE DISTRIBUCIÓN',
      size: '64.35 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 167
    },
    {
      id: 8,
      title: 'DECRETO 847 DE 2001 - REGLAMENTA CONTRIBUCIONES Y SUBSIDIOS EN ENERGÍA ELÉCTRICA',
      size: '36.38 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 223
    },
    {
      id: 9,
      title: 'DECRETO 1429 DE 1995 - CONTROL SOCIAL SERVICIOS PÚBLICOS DOMICILIARIOS',
      size: '39.3 KB',
      views: 0,
      uploadDate: '20-10-2024',
      downloads: 134
    },
    {
      id: 10,
      title: 'DECRETO 1766 DEL 23 DE AGOSTO DE 2012- HOGARES CONSIDERADOS ESTRATO 1 Y 2',
      size: '98.36 KB',
      views: 0,
      uploadDate: '23-10-2024',
      downloads: 256
    }
  ];

  const handleEtiquetaClick = (etiqueta) => {
    setSelectedSubcategoria(etiqueta);
    setCurrentView('subcategoria');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
    setSelectedSubcategoria('');
  };

  // Vista de subcategoría específica
  if (currentView === 'subcategoria') {
    const documentosSubcategoria = documentosPorCategoria[selectedSubcategoria] || [];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header de subcategoría */}
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

          {/* Título con etiqueta */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{selectedSubcategoria}</h1>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 flex items-center">
                <Tag className="w-3 h-3 mr-1" />
                {selectedSubcategoria}
              </span>
              <span className="text-gray-500 text-sm">{documentosSubcategoria.length} ARCHIVOS</span>
            </div>
          </div>

          {/* Lista de documentos */}
          {documentosSubcategoria.length > 0 ? (
            <div className="space-y-6">
              {documentosSubcategoria.map((doc) => (
                <div key={doc.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Información del documento */}
                    <div className="lg:col-span-2">
                      <h3 className="font-bold text-gray-900 text-lg mb-3">{doc.title}</h3>
                      
                      {/* Metadatos en grid */}
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                        <div>
                          <span className="text-gray-500">Tamaño:</span>
                          <span className="ml-2 font-medium">{doc.size}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Vistas:</span>
                          <span className="ml-2 font-medium">{doc.views}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-500">Subido el:</span>
                          <span className="ml-2 font-medium">{doc.uploadDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Acciones */}
                    <div className="flex flex-col justify-center space-y-3">
                      <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                        <Download className="w-5 h-5" />
                        <span>Descargar</span>
                      </button>
                      
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                        <Eye className="w-5 h-5" />
                        <span>Vista Previa</span>
                      </button>
                    </div>
                  </div>

                  {/* Estadísticas */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-500">
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
                <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Documentos en proceso
                </h3>
                <p className="text-gray-600">
                  Los documentos de esta categoría se están preparando.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Vista principal de Legislación General
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Legislación General</h1>
            <p className="text-xl text-blue-100 mb-8">
              Inicio / Legislación General
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
        
        {/* Búsqueda */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
              >
                <option value="todas las categorias">todas las categorias</option>
              </select>
            </div>
            <div className="md:col-span-3 flex justify-end">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Buscar
              </button>
            </div>
          </div>
        </div>

        {/* Título */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">04. Legislación General</h2>
        </div>

        {/* Etiquetas/Carpetas clickeables */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {etiquetas.map((etiqueta, index) => (
              <button
                key={index}
                onClick={() => handleEtiquetaClick(etiqueta)}
                className="inline-flex items-center justify-center px-3 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-xs rounded-lg transition-all duration-300 border hover:border-blue-300 min-h-[40px]"
              >
                <Tag className="w-3 h-3 mr-1 flex-shrink-0" />
                <span className="text-center leading-tight">{etiqueta}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Documentos principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {documentosPrincipales.map((doc) => (
            <div key={doc.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
              <h3 className="font-bold text-gray-900 text-sm mb-4 line-clamp-2">{doc.title}</h3>
              
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
                <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>Descargar</span>
                </button>
                
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm transition-all duration-300">
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{doc.downloads} descargas</span>
                  <button className="text-blue-600 hover:text-blue-800">Vista Previa</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium bg-blue-500 text-white">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">3</button>
            <span className="px-3 py-2 text-gray-500">...</span>
            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">5</button>
            <button className="px-3 py-2 text-blue-600 hover:text-blue-800">Siguiente &gt;</button>
          </div>
        </div>

        {/* Info adicional */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Marco Legal Colombiano</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Consulta la legislación general aplicable al sector eléctrico colombiano. 
            Documentos actualizados y organizados por categorías temáticas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">+100 Documentos</h4>
              <p className="text-gray-600 text-sm">Legislación actualizada</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                <Tag className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">21 Categorías</h4>
              <p className="text-gray-600 text-sm">Clasificación temática</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                <Download className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Acceso Libre</h4>
              <p className="text-gray-600 text-sm">Descarga gratuita</p>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LegislacionGeneralSection;