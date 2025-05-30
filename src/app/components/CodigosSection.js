'use client';

import React, { useState } from 'react';
import {
    BookOpen,
    Search,
    Download,
    Eye,
    ChevronLeft,
    FileText,
    Calendar,
    HardDrive,
    ExternalLink
} from 'lucide-react';

const CodigosSection = ({ onBack }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('todas las categorias');

    // Datos de los códigos
    const codigosData = [
        {
            id: 'codigo-civil',
            title: 'CÓDIGO CIVIL',
            size: '8.78 MB',
            views: 1,
            uploadDate: '06-10-2024',
            downloads: 245,
            category: 'civil'
        },
        {
            id: 'codigo-comercio',
            title: 'CÓDIGO DE COMERCIO',
            size: '477.16 KB',
            views: 0,
            uploadDate: '06-10-2024',
            downloads: 189,
            category: 'comercial'
        },
        {
            id: 'codigo-procedimiento-civil',
            title: 'CÓDIGO DE PROCEDIMIENTO CIVIL',
            size: '11.40 MB',
            views: 0,
            uploadDate: '06-10-2024',
            downloads: 156,
            category: 'procedimiento'
        },
        {
            id: 'codigo-penal',
            title: 'CÓDIGO PENAL',
            size: '2.09 MB',
            views: 0,
            uploadDate: '06-10-2024',
            downloads: 298,
            category: 'penal'
        },
        {
            id: 'codigo-procesal-trabajo',
            title: 'CÓDIGO PROCESAL DEL TRABAJO',
            size: '2.07 MB',
            views: 1,
            uploadDate: '06-10-2024',
            downloads: 134,
            category: 'laboral'
        },
        {
            id: 'codigo-sustantivo-trabajo',
            title: 'CÓDIGO SUSTANTIVO DEL TRABAJO',
            size: '7.36 MB',
            views: 0,
            uploadDate: '06-10-2024',
            downloads: 267,
            category: 'laboral'
        }
    ];

    // Categorías disponibles
    const categories = [
        'todas las categorias',
        'civil',
        'comercial',
        'procedimiento',
        'penal',
        'laboral'
    ];

    // Filtrar códigos basado en búsqueda y categoría
    const filteredCodigos = codigosData.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'todas las categorias' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleDownload = (codigo) => {
        console.log(`Descargando: ${codigo.title}`);
        // Aquí iría la lógica real de descarga
    };

    const handleVistaPrevia = (codigo) => {
        console.log(`Vista previa: ${codigo.title}`);
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
                                <BookOpen className="w-16 h-16 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold mb-4">Códigos</h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Inicio / Códigos
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
                        <span className="text-sm">03.</span>
                        <span className="text-gray-400 mx-2">/</span>
                        <span className="text-gray-900 font-medium">Códigos</span>
                    </nav>
                </div>

                {/* Título de sección */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">03. Códigos</h2>
                </div>

                {/* Grid de códigos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredCodigos.map((codigo, index) => (
                        <div
                            key={codigo.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: 'fadeInUp 0.6s ease-out forwards'
                            }}
                        >
                            <div className="p-8">
                                {/* Header de la tarjeta */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-900 text-lg mb-4">
                                            {codigo.title}
                                        </h3>

                                        {/* Información del archivo */}
                                        <div className="space-y-2 text-sm text-gray-600">
                                            <div className="flex items-center space-x-2">
                                                <HardDrive className="w-4 h-4" />
                                                <span>Tamaño: {codigo.size}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Eye className="w-4 h-4" />
                                                <span>Vistas: {codigo.views}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>Subido el: {codigo.uploadDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Botones de acción */}
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => handleDownload(codigo)}
                                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <Download className="w-5 h-5" />
                                        <span>Descargar</span>
                                    </button>

                                    <button
                                        onClick={() => handleVistaPrevia(codigo)}
                                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span>Vista Previa</span>
                                    </button>
                                </div>

                                {/* Estadísticas adicionales */}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <span>{codigo.downloads} descargas</span>
                                        <span className="capitalize">{codigo.category}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Indicador de hover */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* Mensaje si no hay resultados */}
                {filteredCodigos.length === 0 && (
                    <div className="text-center py-16">
                        <div className="bg-white rounded-2xl shadow-lg p-12">
                            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No se encontraron códigos
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Biblioteca de Códigos Legales</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                            Accede a los principales códigos legales de Colombia. Todos los documentos están
                            actualizados y disponibles para descarga en formato PDF de alta calidad.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-purple-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                                    <BookOpen className="w-8 h-8 text-purple-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">6 Códigos</h4>
                                <p className="text-gray-600 text-sm">Principales códigos legales</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                                    <Download className="w-8 h-8 text-green-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Descarga Libre</h4>
                                <p className="text-gray-600 text-sm">Acceso gratuito para todos</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                                    <FileText className="w-8 h-8 text-blue-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Actualizados</h4>
                                <p className="text-gray-600 text-sm">Versiones más recientes</p>
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

export default CodigosSection;