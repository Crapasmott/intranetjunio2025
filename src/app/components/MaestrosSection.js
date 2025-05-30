'use client';

import React, { useState } from 'react';
import { 
  ChevronRight,
  Building2,
  MapPin,
  Eye,
  Download,
  ZoomIn,
  Calendar,
  X
} from 'lucide-react';

const MaestrosSection = ({ onBack }) => {
  const [selectedSede, setSelectedSede] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);

  // Datos de las sedes con sus cronogramas
  const sedes = [
    {
      id: 'el-bote',
      nombre: 'Sede El Bote',
      descripcion: 'Cronograma de Mantenimiento Preventivo - Equipos de Cómputo',
      archivo: '/cronograma mantenimeintos/FT-AGT-03-001-CRONOGRAMA-MANT.-2025-EL-BOTE.pdf',
      ubicacion: 'El Bote, Huila',
      tipoDocumento: 'Cronograma de Mantenimiento',
      codigo: 'FT-AGT-001-005',
      tipo: 'pdf'
    },
    {
      id: 'el-saire',
      nombre: 'Sede El Saire',
      descripcion: 'Cronograma de Mantenimiento Preventivo - Equipos de Cómputo',
      archivo: '/cronograma mantenimeintos/FT-AGT-03-002-CRONOGRAMA-MANT.-2025-EL-SAIRE.pdf',
      ubicacion: 'El Saire, Huila',
      tipoDocumento: 'Cronograma de Mantenimiento',
      codigo: 'FT-AGT-001-006',
      tipo: 'pdf'
    },
    {
      id: 'pitalito',
      nombre: 'Sede Pitalito',
      descripcion: 'Cronograma de Mantenimiento Preventivo - Equipos de Cómputo',
      archivo: '/cronograma mantenimeintos/FT-AGT-03-003-CRONOGRAMA-MANT.-2025-PITALITO.pdf',
      ubicacion: 'Pitalito, Huila',
      tipoDocumento: 'Cronograma de Mantenimiento',
      codigo: 'FT-AGT-001-007',
      tipo: 'pdf'
    },
    {
      id: 'la-plata',
      nombre: 'Sede La Plata',
      descripcion: 'Cronograma de Mantenimiento Preventivo - Equipos de Cómputo',
      archivo: '/cronograma mantenimeintos/FT-AGT-03-004-CRONOGRAMA-MANT.-2025-LA-PLATA.pdf',
      ubicacion: 'La Plata, Huila',
      tipoDocumento: 'Cronograma de Mantenimiento',
      codigo: 'FT-AGT-001-008',
      tipo: 'pdf'
    },
    {
      id: 'garzon',
      nombre: 'Sede Garzón',
      descripcion: 'Cronograma de Mantenimiento Preventivo - Equipos de Cómputo',
      archivo: '/cronograma mantenimeintos/FT-AGT-03-005-CRONOGRAMA-MANT.-2025-ZONA-CENTRO-1.pdf',
      ubicacion: 'Garzón, Huila',
      tipoDocumento: 'Cronograma de Mantenimiento',
      codigo: 'FT-AGT-001-009',
      tipo: 'pdf'
    }
  ];

  const abrirPDF = (sede) => {
    window.open(sede.archivo, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header con botón de regreso */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Cronogramas de Mantenimiento</h1>
          <p className="text-xl text-gray-600 mt-2">Programación de mantenimiento preventivo por sede</p>
        </div>
        <button
          onClick={onBack}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span>Volver al Inicio</span>
        </button>
      </div>

      {/* Introducción */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Cronogramas de Mantenimiento Preventivo</h2>
              <p className="text-white/90">Programación y control de equipos de cómputo por sede</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Cronogramas */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {sedes.map((sede, index) => (
          <div 
            key={sede.id}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
            onClick={() => abrirPDF(sede)}
          >
            {/* Preview del PDF */}
            <div className="relative overflow-hidden h-80 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              {/* Ícono de PDF */}
              <div className="text-center">
                <div className="bg-red-500 rounded-xl p-6 mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium group-hover:text-blue-600 transition-colors">
                  Documento PDF
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Click para abrir
                </p>
              </div>
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Ícono de abrir */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-blue-500/90 backdrop-blur-sm rounded-lg p-2">
                  <Eye className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Etiqueta de documento */}
              <div className="absolute top-4 left-4">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {sede.codigo}
                </div>
              </div>

              {/* Información sobre el PDF */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="font-bold text-white text-lg mb-1">
                    {sede.nombre}
                  </h3>
                  <p className="text-white/90 text-sm flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {sede.ubicacion}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-xs">{sede.tipoDocumento}</span>
                    <div className="bg-white/20 rounded-lg px-2 py-1">
                      <span className="text-white text-xs font-medium">Click para abrir PDF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información del cronograma */}
            <div className="p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {sede.nombre}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{sede.descripcion}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Ubicación:</span>
                  <span className="font-medium text-gray-700">{sede.ubicacion}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Código:</span>
                  <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded text-xs">
                    {sede.codigo}
                  </span>
                </div>
                
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-2 text-blue-600">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">Abrir Cronograma PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal - Optimizado para tablas grandes */}
      {showLightbox && selectedSede && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full max-w-7xl max-h-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">
                  {selectedSede.nombre}
                </h2>
                <p className="text-white/90 text-sm">{selectedSede.codigo}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = selectedSede.imagen;
                    link.download = `Cronograma-${selectedSede.nombre}.jpg`;
                    link.click();
                  }}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
                  title="Descargar cronograma"
                >
                  <Download className="w-5 h-5" />
                </button>
                
                <button
                  onClick={closeLightbox}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
                  title="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Imagen del cronograma en tamaño completo */}
            <div className="relative overflow-auto max-h-[calc(100vh-200px)] bg-gray-50">
              <img 
                src={selectedSede.imagen}
                alt={selectedSede.nombre}
                className="w-full h-auto object-contain p-6"
                style={{ minWidth: '800px' }} // Para asegurar que las tablas sean legibles
              />
            </div>

            {/* Footer del modal */}
            <div className="p-4 bg-gray-50 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-700 font-medium">{selectedSede.descripcion}</p>
                  <p className="text-gray-500 text-sm flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedSede.ubicacion}
                  </p>
                </div>
                
                <button 
                  onClick={closeLightbox}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaestrosSection;