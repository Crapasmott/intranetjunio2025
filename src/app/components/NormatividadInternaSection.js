'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Calendar, 
  Tag, 
  Eye, 
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  Building,
  AlertCircle,
  CheckCircle,
  XCircle,
  Star,
  Archive,
  RefreshCw
} from 'lucide-react';

const NormatividadInternaSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' o 'list'
  const [sortBy, setSortBy] = useState('date-desc');
  const [loading, setLoading] = useState(false);

  // Datos de ejemplo de normatividad interna
  const normatividadData = [
    {
      id: 1,
      title: 'Reglamento Interno de Trabajo',
      description: 'Normativas que regulan las relaciones laborales dentro de la empresa',
      category: 'laboral',
      year: '2024',
      date: '2024-01-15',
      author: 'Gerencia de Talento Humano',
      status: 'vigente',
      downloads: 245,
      views: 1420,
      fileSize: '2.3 MB',
      fileType: 'PDF',
      priority: 'alta',
      tags: ['trabajo', 'empleados', 'derechos', 'deberes']
    },
    {
      id: 2,
      title: 'Manual de Seguridad y Salud en el Trabajo',
      description: 'Procedimientos y protocolos de seguridad para el personal operativo',
      category: 'seguridad',
      year: '2024',
      date: '2024-02-10',
      author: 'Departamento de SST',
      status: 'vigente',
      downloads: 189,
      views: 967,
      fileSize: '4.1 MB',
      fileType: 'PDF',
      priority: 'alta',
      tags: ['seguridad', 'salud', 'protocolos', 'prevención']
    },
    {
      id: 3,
      title: 'Código de Ética y Conducta',
      description: 'Principios éticos y normas de conducta para todos los colaboradores',
      category: 'etica',
      year: '2023',
      date: '2023-11-20',
      author: 'Gerencia General',
      status: 'vigente',
      downloads: 567,
      views: 2340,
      fileSize: '1.8 MB',
      fileType: 'PDF',
      priority: 'alta',
      tags: ['ética', 'conducta', 'valores', 'integridad']
    },
    {
      id: 4,
      title: 'Manual de Procedimientos Administrativos',
      description: 'Guía para la ejecución de procesos administrativos internos',
      category: 'administrativo',
      year: '2024',
      date: '2024-03-05',
      author: 'Gerencia Administrativa',
      status: 'vigente',
      downloads: 123,
      views: 789,
      fileSize: '3.2 MB',
      fileType: 'PDF',
      priority: 'media',
      tags: ['procedimientos', 'administración', 'procesos']
    },
    {
      id: 5,
      title: 'Política de Calidad',
      description: 'Directrices para el sistema de gestión de calidad',
      category: 'calidad',
      year: '2023',
      date: '2023-09-12',
      author: 'Coordinación de Calidad',
      status: 'vigente',
      downloads: 298,
      views: 1156,
      fileSize: '1.5 MB',
      fileType: 'PDF',
      priority: 'media',
      tags: ['calidad', 'gestión', 'mejora', 'procesos']
    },
    {
      id: 6,
      title: 'Reglamento de Compras y Contratación',
      description: 'Normativas para procesos de adquisición y contratación',
      category: 'contractual',
      year: '2024',
      date: '2024-01-30',
      author: 'Gerencia de Compras',
      status: 'vigente',
      downloads: 156,
      views: 634,
      fileSize: '2.7 MB',
      fileType: 'PDF',
      priority: 'media',
      tags: ['compras', 'contratación', 'proveedores']
    },
    {
      id: 7,
      title: 'Manual de Manejo de Información Confidencial',
      description: 'Protocolos para el manejo de información sensible y confidencial',
      category: 'seguridad',
      year: '2023',
      date: '2023-12-08',
      author: 'Sistemas de Información',
      status: 'vigente',
      downloads: 234,
      views: 891,
      fileSize: '1.9 MB',
      fileType: 'PDF',
      priority: 'alta',
      tags: ['confidencialidad', 'información', 'seguridad']
    },
    {
      id: 8,
      title: 'Política Ambiental',
      description: 'Compromisos y lineamientos ambientales de la empresa',
      category: 'ambiental',
      year: '2023',
      date: '2023-10-15',
      author: 'Gestión Ambiental',
      status: 'vigente',
      downloads: 178,
      views: 723,
      fileSize: '2.1 MB',
      fileType: 'PDF',
      priority: 'media',
      tags: ['ambiente', 'sostenibilidad', 'política']
    }
  ];

  // Categorías disponibles
  const categories = [
    { value: 'all', label: 'Todas las categorías' },
    { value: 'laboral', label: 'Laboral' },
    { value: 'seguridad', label: 'Seguridad' },
    { value: 'etica', label: 'Ética' },
    { value: 'administrativo', label: 'Administrativo' },
    { value: 'calidad', label: 'Calidad' },
    { value: 'contractual', label: 'Contractual' },
    { value: 'ambiental', label: 'Ambiental' }
  ];

  // Años disponibles
  const years = ['all', '2024', '2023', '2022'];

  // Filtrar datos
  const filteredData = normatividadData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || item.year === selectedYear;
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  // Ordenar datos
  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'date-desc':
        return new Date(b.date) - new Date(a.date);
      case 'date-asc':
        return new Date(a.date) - new Date(b.date);
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      case 'downloads-desc':
        return b.downloads - a.downloads;
      case 'views-desc':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  // Paginación
  const itemsPerPage = 6;
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  // Efecto para resetear página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedYear, sortBy]);

  // Función para obtener color del estado
  const getStatusColor = (status) => {
    switch (status) {
      case 'vigente':
        return 'text-green-600 bg-green-100';
      case 'por-vencer':
        return 'text-yellow-600 bg-yellow-100';
      case 'vencido':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Función para obtener color de prioridad
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'alta':
        return 'text-red-600 bg-red-100';
      case 'media':
        return 'text-yellow-600 bg-yellow-100';
      case 'baja':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Función para obtener ícono de estado
  const getStatusIcon = (status) => {
    switch (status) {
      case 'vigente':
        return CheckCircle;
      case 'por-vencer':
        return AlertCircle;
      case 'vencido':
        return XCircle;
      default:
        return FileText;
    }
  };

  // Función para simular descarga
  const handleDownload = (item) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Aquí iría la lógica real de descarga
      console.log(`Descargando: ${item.title}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <FileText className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Normatividad Interna</h1>
            <p className="text-xl text-blue-100 mb-8">
              Inicio / Gestión Jurídica / Normatividad Interna
            </p>
            <button
              onClick={onBack}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Volver a Gestión Jurídica</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filtros y búsqueda */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            
            {/* Búsqueda */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar documentos
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por título, descripción o etiquetas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value} className="text-gray-900">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Año */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Año
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
              >
                <option value="all" className="text-gray-900">Todos los años</option>
                {years.filter(year => year !== 'all').map(year => (
                  <option key={year} value={year} className="text-gray-900">{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Controles adicionales */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Ordenar por:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                >
                  <option value="date-desc" className="text-gray-900">Fecha (más reciente)</option>
                  <option value="date-asc" className="text-gray-900">Fecha (más antiguo)</option>
                  <option value="title-asc" className="text-gray-900">Título (A-Z)</option>
                  <option value="title-desc" className="text-gray-900">Título (Z-A)</option>
                  <option value="downloads-desc" className="text-gray-900">Más descargados</option>
                  <option value="views-desc" className="text-gray-900">Más vistos</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                {sortedData.length} documento{sortedData.length !== 1 ? 's' : ''} encontrado{sortedData.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Grid de documentos */}
        {currentData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentData.map((item, index) => {
              const StatusIcon = getStatusIcon(item.status);
              return (
                <div 
                  key={item.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Header de la tarjeta */}
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                          {item.priority === 'alta' ? 'Alta' : item.priority === 'media' ? 'Media' : 'Baja'}
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </p>
                    </div>
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Metadatos */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(item.date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          <span className="capitalize">{item.status}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.fileSize} • {item.fileType}
                        </div>
                      </div>
                    </div>

                    {/* Estadísticas */}
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{item.views}</span>
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          <span>{item.downloads}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Botones de acción */}
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleDownload(item)}
                        disabled={loading}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        {loading ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <Download className="w-4 h-4" />
                        )}
                        <span>Descargar</span>
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-xl transition-all duration-300">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Efecto de hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No se encontraron documentos
              </h3>
              <p className="text-gray-600">
                Intenta ajustar tus filtros de búsqueda para encontrar más resultados.
              </p>
            </div>
          </div>
        )}

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Mostrando {startIndex + 1} - {Math.min(startIndex + itemsPerPage, sortedData.length)} de {sortedData.length} documentos
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page => 
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  )
                  .map((page, index, array) => (
                    <React.Fragment key={page}>
                      {index > 0 && array[index - 1] !== page - 1 && (
                        <span className="px-3 py-2 text-gray-500">...</span>
                      )}
                      <button
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-blue-500 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    </React.Fragment>
                  ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default NormatividadInternaSection;