'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileSearch, 
  ChevronLeft, 
  Download, 
  Calendar, 
  Search,
  Filter,
  Eye,
  FileText,
  Star,
  Clock,
  User,
  Building
} from 'lucide-react';

const CircularesCADSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Datos de ejemplo de circulares (reemplaza con datos reales)
  const circulares = [
    {
      id: 1,
      numero: 'CAD-001-2024',
      titulo: 'Circular sobre Procedimientos Administrativos',
      fecha: '2024-03-15',
      categoria: 'Administrativo',
      descripcion: 'Nuevos procedimientos para gestión administrativa interna',
      archivo: 'circular-cad-001-2024.pdf',
      destacada: true,
      views: 245
    },
    {
      id: 2,
      numero: 'CAD-002-2024',
      titulo: 'Directrices de Seguridad Ocupacional',
      fecha: '2024-02-28',
      categoria: 'Seguridad',
      descripcion: 'Actualización de protocolos de seguridad en el trabajo',
      archivo: 'circular-cad-002-2024.pdf',
      destacada: false,
      views: 189
    },
    {
      id: 3,
      numero: 'CAD-003-2024',
      titulo: 'Normativas de Gestión Documental',
      fecha: '2024-01-20',
      categoria: 'Documentación',
      descripcion: 'Procedimientos para manejo y archivo de documentos',
      archivo: 'circular-cad-003-2024.pdf',
      destacada: true,
      views: 312
    },
    {
      id: 4,
      numero: 'CAD-015-2023',
      titulo: 'Protocolo de Atención al Cliente',
      fecha: '2023-12-10',
      categoria: 'Atención',
      descripcion: 'Estándares de calidad en atención al usuario',
      archivo: 'circular-cad-015-2023.pdf',
      destacada: false,
      views: 156
    },
    {
      id: 5,
      numero: 'CAD-014-2023',
      titulo: 'Políticas de Recursos Humanos',
      fecha: '2023-11-25',
      categoria: 'RRHH',
      descripcion: 'Actualización de políticas de personal',
      archivo: 'circular-cad-014-2023.pdf',
      destacada: false,
      views: 203
    },
    {
      id: 6,
      numero: 'CAD-013-2023',
      titulo: 'Directriz de Mantenimiento Preventivo',
      fecha: '2023-10-15',
      categoria: 'Mantenimiento',
      descripcion: 'Programación y ejecución de mantenimiento preventivo',
      archivo: 'circular-cad-013-2023.pdf',
      destacada: true,
      views: 278
    }
  ];

  const categorias = ['Administrativo', 'Seguridad', 'Documentación', 'Atención', 'RRHH', 'Mantenimiento'];
  const years = ['2024', '2023', '2022', '2021'];

  // Filtrar circulares
  const filteredCirculares = circulares.filter(circular => {
    const matchesSearch = (circular.titulo || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (circular.numero || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (circular.descripcion || '').toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = selectedYear === 'all' || (circular.fecha && circular.fecha.startsWith(selectedYear));
    const matchesCategory = selectedCategory === 'all' || circular.categoria === selectedCategory;
    
    return matchesSearch && matchesYear && matchesCategory;
  });

  const handleDownload = (archivo) => {
    // Simular descarga - reemplazar con lógica real
    console.log(`Descargando: ${archivo}`);
    // window.open(`/documents/circulares/${archivo}`, '_blank');
  };

  const handleView = (circular) => {
    // Simular visualización - reemplazar con lógica real
    console.log(`Visualizando: ${circular.titulo}`);
    // window.open(`/documents/circulares/${circular.archivo}`, '_blank');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <FileSearch className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Circulares CAD</h1>
            <p className="text-xl text-cyan-100 mb-8">
              Inicio / Gestión Jurídica / Circulares CAD
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
        
        {/* Sección de búsqueda y filtros */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Buscar Circulares</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Buscador */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por título, número o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              />
            </div>
            
            {/* Filtro por año */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none bg-white text-gray-900"
              >
                <option value="all">Todos los años</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            {/* Filtro por categoría */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none bg-white text-gray-900"
              >
                <option value="all">Todas las categorías</option>
                {categorias.map(categoria => (
                  <option key={categoria} value={categoria}>{categoria}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Contador de resultados */}
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {filteredCirculares.length} de {circulares.length} circulares
          </div>
        </div>

        {/* Grid de circulares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCirculares.map((circular, index) => (
            <div
              key={circular.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden relative"
              onMouseEnter={() => setHoveredCard(circular.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Badge destacada */}
              {circular.destacada && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Destacada</span>
                  </div>
                </div>
              )}

              {/* Contenido */}
              <div className="p-6">
                {/* Header con ícono */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{circular.views}</span>
                    </div>
                  </div>
                </div>

                {/* Número y categoría */}
                <div className="mb-3">
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium">
                    {circular.numero}
                  </span>
                  <span className="ml-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {circular.categoria}
                  </span>
                </div>

                {/* Título */}
                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                  {circular.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {circular.descripcion}
                </p>

                {/* Fecha */}
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{formatDate(circular.fecha)}</span>
                </div>

                {/* Botones de acción */}
                <div className="flex space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleView(circular);
                    }}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(circular.archivo);
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Efecto hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Línea inferior animada */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {filteredCirculares.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <FileSearch className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron circulares</h3>
              <p className="text-gray-600">
                Intenta modificar los filtros de búsqueda para encontrar lo que buscas.
              </p>
            </div>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Building className="w-8 h-8 text-cyan-600 mr-3" />
                Acerca de las Circulares CAD
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Las Circulares del Centro Administrativo y Documental (CAD) son documentos oficiales que establecen 
                directrices, procedimientos y normativas internas para el correcto funcionamiento organizacional.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Estos documentos son de cumplimiento obligatorio y se actualizan periódicamente para mantener 
                la eficiencia y calidad en nuestros procesos.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-8 h-8 text-cyan-600 mr-3" />
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Centro Administrativo y Documental</p>
                  <p className="text-gray-600">Departamento de Gestión Documental</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Para consultas:</p>
                  <p className="text-gray-600">Contacta al área de Gestión Jurídica</p>
                </div>
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

export default CircularesCADSection;