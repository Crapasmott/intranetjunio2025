'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Users, 
  Scale, 
  BookOpen, 
  Award, 
  UserCheck, 
  Building, 
  Gavel, 
  FileSearch,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Phone
} from 'lucide-react';

// IMPORTAR TODOS LOS COMPONENTES
import NormatividadInternaSection from './NormatividadInternaSection';
import AcuerdosJuntaDirectivaSection from './AcuerdosJuntaDirectivaSection';
import CodigosSection from './CodigosSection';
import LegislacionGeneralSection from './LegislacionGeneralSection';
import ResolucionesCREGSection from './ResolucionesCREGSection';
import SentenciasConceptosSection from './SentenciasConceptosSection';
import ResolucionesSSPDSection from './ResolucionesSSPDSection';
import BancoSentenciasSection from './BancoSentenciasSection';
import CircularesCADSection from './CircularesCADSection'; // NUEVA IMPORTACIÓN

const GestionJuridicaSection = ({ onBack }) => {
  // ESTADO PARA CONTROLAR QUÉ VISTA MOSTRAR
  const [currentView, setCurrentView] = useState('main');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Datos de las tarjetas principales
  const juridicaItems = [
    {
      id: 'normatividad',
      title: 'Normatividad Interna',
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      description: 'Consulta normatividad interna',
      isInternal: true
    },
    {
      id: 'acuerdos',
      title: 'Acuerdos de Junta Directiva',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      description: 'Acuerdos y decisiones directivas',
      isInternal: true
    },
    {
      id: 'codigos',
      title: 'Códigos',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      description: 'Códigos y reglamentos',
      isInternal: true
    },
    {
      id: 'legislacion',
      title: 'Legislación General',
      icon: Scale,
      color: 'from-green-500 to-teal-500',
      description: 'Marco legal general',
      isInternal: true
    },
    {
      id: 'resoluciones-creg',
      title: 'Resoluciones CREG',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      description: 'Resoluciones regulatorias',
      isInternal: true
    },
    {
      id: 'sentencias',
      title: 'Sentencias y Conceptos',
      icon: UserCheck,
      color: 'from-red-500 to-pink-500',
      description: 'Jurisprudencia aplicable',
      isInternal: true
    },
    {
      id: 'resoluciones-sspd',
      title: 'Resoluciones SSPD',
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      description: 'Superintendencia de servicios',
      isInternal: true
    },
    {
      id: 'banco-sentencias',
      title: 'Banco de Sentencias',
      icon: Gavel,
      color: 'from-pink-500 to-red-500',
      description: 'Base de datos jurisprudencial',
      isInternal: true
    },
    {
      id: 'circulares-cad',
      title: 'Circulares CAD',
      icon: FileSearch,
      color: 'from-cyan-500 to-blue-500',
      description: 'Circulares administrativas',
      isInternal: true // CAMBIADO A NAVEGACIÓN INTERNA
    },
    {
      id: 'documentos-gerencia',
      title: 'Documentos Gerencia',
      icon: FileText,
      color: 'from-teal-500 to-green-500',
      url: 'https://electrohuila.com/documentos-gerencia',
      description: 'Documentos de gerencia',
      isInternal: false
    }
  ];

  // Enlaces de interés para el carrusel
  const enlacesInteres = [
    {
      id: 'creg',
      name: 'CREG',
      description: 'Comisión de Regulación de Energía y Gas',
      logo: '/images/logos/creg-logo.png',
      url: 'https://www.creg.gov.co'
    },
    {
      id: 'republica-colombia',
      name: 'República de Colombia',
      description: 'Portal oficial del Estado',
      logo: '/images/logos/colombia-logo.png',
      url: 'https://www.gov.co'
    },
    {
      id: 'rama-judicial',
      name: 'Rama Judicial',
      description: 'Poder Judicial de Colombia',
      logo: '/images/logos/rama-judicial-logo.png',
      url: 'https://www.ramajudicial.gov.co'
    }
  ];

  // Auto-avanzar carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % enlacesInteres.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [enlacesInteres.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % enlacesInteres.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + enlacesInteres.length) % enlacesInteres.length);
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // FUNCIÓN PARA MANEJAR CLICS EN LAS TARJETAS
  const handleCardClick = (item) => {
    if (item.isInternal) {
      if (item.id === 'normatividad') {
        setCurrentView('normatividad-interna');
      } else if (item.id === 'acuerdos') {
        setCurrentView('acuerdos-junta');
      } else if (item.id === 'codigos') {
        setCurrentView('codigos');
      } else if (item.id === 'legislacion') {
        setCurrentView('legislacion-general');
      } else if (item.id === 'resoluciones-creg') {
        setCurrentView('resoluciones-creg');
      } else if (item.id === 'sentencias') {
        setCurrentView('sentencias-conceptos');
      } else if (item.id === 'resoluciones-sspd') {
        setCurrentView('resoluciones-sspd');
      } else if (item.id === 'banco-sentencias') {
        setCurrentView('banco-sentencias');
      } else if (item.id === 'circulares-cad') {
        setCurrentView('circulares-cad'); // NUEVA NAVEGACIÓN
      }
    } else {
      openLink(item.url);
    }
  };

  // FUNCIÓN PARA VOLVER A LA VISTA PRINCIPAL
  const handleBackToGestionJuridica = () => {
    setCurrentView('main');
  };

  // CONTROLAR LAS DIFERENTES VISTAS
  if (currentView === 'normatividad-interna') {
    return (
      <NormatividadInternaSection 
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'acuerdos-junta') {
    return (
      <AcuerdosJuntaDirectivaSection 
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'codigos') {
    return (
      <CodigosSection 
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'legislacion-general') {
    return (
      <LegislacionGeneralSection 
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'resoluciones-creg') {
    return (
      <ResolucionesCREGSection 
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'sentencias-conceptos') {
    return (
      <SentenciasConceptosSection 
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'resoluciones-sspd') {
    return (
      <ResolucionesSSPDSection 
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'banco-sentencias') {
    return (
      <BancoSentenciasSection 
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  // NUEVA VISTA PARA CIRCULARES CAD
  if (currentView === 'circulares-cad') {
    return (
      <CircularesCADSection 
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  // VISTA PRINCIPAL DE GESTIÓN JURÍDICA
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Gestión Jurídica</h1>
            <p className="text-xl text-blue-100 mb-8">
              Inicio / Gestión Jurídica
            </p>
            <button
              onClick={onBack}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Volver al Inicio</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Grid principal de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {juridicaItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(item)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Fondo gradiente animado */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Contenido */}
              <div className="relative p-8 text-center">
                {/* Ícono con animación */}
                <div className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl mb-6 mx-auto w-fit transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <item.icon className="w-12 h-12 text-white" />
                </div>
                
                {/* Título */}
                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Indicador de hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>

              {/* Ícono de enlace externo o interno */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                  {item.isInternal ? (
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                  ) : (
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </div>

              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Sección Enlaces de Interés y Contador */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Enlaces de Interés */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enlaces de Interés</h2>
            
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Carrusel */}
              <div className="relative h-64">
                {enlacesInteres.map((enlace, index) => (
                  <div
                    key={enlace.id}
                    className={`absolute inset-0 transition-all duration-500 transform ${
                      index === currentSlide 
                        ? 'translate-x-0 opacity-100' 
                        : index < currentSlide 
                          ? '-translate-x-full opacity-0' 
                          : 'translate-x-full opacity-0'
                    }`}
                  >
                    <div 
                      className="h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center cursor-pointer hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                      onClick={() => openLink(enlace.url)}
                    >
                      <div className="text-center text-white p-8">
                        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl mb-6 mx-auto w-fit">
                          <img 
                            src={enlace.logo} 
                            alt={enlace.name}
                            className="w-16 h-16 object-contain filter brightness-0 invert"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <div className="w-16 h-16 bg-white/30 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                            <Building className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{enlace.name}</h3>
                        <p className="text-blue-100">{enlace.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controles del carrusel */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {enlacesInteres.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contador de Visitas */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contador de Visitas</h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
              {/* Fondo decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl mb-6 mx-auto w-fit">
                  <Phone className="w-12 h-12 text-white" />
                </div>
                
                <div className="mb-6">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-2">
                    1177
                  </div>
                  <p className="text-gray-600 font-medium">Visitas registradas</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-xl">
                  <p className="font-medium">¡Gracias por visitarnos!</p>
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GestionJuridicaSection;