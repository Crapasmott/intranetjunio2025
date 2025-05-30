'use client';

import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Globe,
  ChevronRight,
  ChevronDown,
  Building2,
  Zap,
  Heart,
  Shield,
  Settings,
  BarChart3,
  FileText,
  ExternalLink
} from 'lucide-react';

const NosotrosSection = ({ onBack }) => {
  // NUEVO: Estado para acordeones de políticas
  const [expandedPoliticaCard, setExpandedPoliticaCard] = useState(null);

  // NUEVO: Función para toggle de acordeones
  const togglePoliticaCard = (cardId) => {
    setExpandedPoliticaCard(expandedPoliticaCard === cardId ? null : cardId);
  };

  // NUEVO: Datos de políticas organizadas
  const politicasData = [
    {
      id: 'control-cartera',
      titulo: 'Control de Cartera',
      descripcion: 'Políticas de gestión y control de cartera',
      icon: Award,
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      politicas: [
        {
          nombre: 'Política de financiación',
          url: '/politicas/control-cartera/politica-financiacion.pdf'
        }
      ]
    },
    {
      id: 'talento-humano',
      titulo: 'Talento Humano',
      descripcion: 'Políticas relacionadas con gestión humana',
      icon: Users,
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      politicas: [
        {
          nombre: 'Política de Prevención del Acoso Laboral y Acoso Sexual',
          descripcion: 'Promoción de la Desconexión Laboral',
          url: '/politicas/talento-humano/prevencion-acoso.pdf'
        },
        {
          nombre: 'Documento de Gerencia 070 de 2025',
          descripcion: 'Política de Prevención del Acoso Laboral',
          url: '/politicas/talento-humano/gerencia-070-2025.pdf'
        }
      ]
    },
    {
      id: 'planeacion-estrategica',
      titulo: 'Planeación Estratégica',
      descripcion: 'Políticas estratégicas y de planificación',
      icon: Target,
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      politicas: [
        {
          nombre: 'Política de calidad',
          url: '/politicas/planeacion/politica-calidad.pdf'
        },
        {
          nombre: 'Política de Prevención de Consumo de Alcohol, Tabaco y Sustancias Psicoactivas',
          url: '/politicas/planeacion/prevencion-consumo.pdf'
        },
        {
          nombre: 'Política de seguridad vial',
          url: '/politicas/planeacion/seguridad-vial.pdf'
        },
        {
          nombre: 'Política de seguridad y salud en el trabajo',
          url: '/politicas/planeacion/seguridad-salud-trabajo.pdf'
        },
        {
          nombre: 'Reglamento de Higiene y Seguridad Industrial',
          url: '/politicas/planeacion/reglamento-higiene.pdf'
        }
      ]
    },
    {
      id: 'etica-cumplimiento',
      titulo: 'Ética y Cumplimiento',
      descripcion: 'Políticas de ética y cumplimiento normativo',
      icon: Shield,
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      politicas: [
        {
          nombre: 'Política, lineamientos y documentos vinculantes a la oficina de Ética y Cumplimiento',
          url: '/politicas/etica/lineamientos-etica.pdf'
        },
        {
          nombre: 'Política de código de Ética',
          url: '/politicas/etica/codigo-etica.pdf'
        },
        {
          nombre: 'Política de Control y Gestión del Riesgo LA_FT_FPADM_S_C',
          url: '/politicas/etica/control-riesgo.pdf'
        },
        {
          nombre: 'Política de Hospitalidades, Obsequios y Beneficios',
          url: '/politicas/etica/hospitalidades.pdf'
        },
        {
          nombre: 'Política de la línea de Transparencia y Comité de Ética',
          url: '/politicas/etica/linea-transparencia.pdf'
        },
        {
          nombre: 'Política de programa de Transparencia y Ética Pública – PTEP',
          url: '/politicas/etica/programa-transparencia.pdf'
        },
        {
          nombre: 'Política de Privacidad, Tratamiento y Protección de Datos Personales de ElectroHuila S.A.-E.S.P.',
          url: '/politicas/etica/privacidad-datos.pdf'
        },
        {
          nombre: 'Código de Buen Gobierno',
          url: '/politicas/etica/codigo-buen-gobierno.pdf'
        },
        {
          nombre: 'Política de Prohibición a las represalias y protección al denunciante',
          url: '/politicas/etica/prohibicion-represalias.pdf'
        }
      ]
    },
    {
      id: 'gestion-financiera',
      titulo: 'Gestión Financiera',
      descripcion: 'Políticas financieras y contables',
      icon: BarChart3,
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      politicas: [
        {
          nombre: 'Política divulgación información Financiera',
          url: '/politicas/financiera/divulgacion-financiera.pdf'
        },
        {
          nombre: 'Manual de de Políticas Contables',
          url: '/politicas/financiera/manual-contables.pdf'
        }
      ]
    },
    {
      id: 'gestion-tecnologica',
      titulo: 'Gestión Tecnológica',
      descripcion: 'Políticas de tecnología y sistemas',
      icon: Settings,
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      politicas: [
        {
          nombre: 'Políticas de seguridad de la información',
          url: '/politicas/tecnologica/seguridad-informacion.pdf'
        }
      ]
    },
    {
      id: 'responsabilidad-social',
      titulo: 'Responsabilidad Social y Ambiental',
      descripcion: 'Políticas ambientales y de responsabilidad social',
      icon: Heart,
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      politicas: [
        {
          nombre: 'Política de Derechos Humanos',
          url: '/politicas/social/derechos-humanos.pdf'
        },
        {
          nombre: 'Política de Gestión Ambiental',
          url: '/politicas/social/gestion-ambiental.pdf'
        },
        {
          nombre: 'Política de Responsabilidad Social',
          url: '/politicas/social/responsabilidad-social.pdf'
        }
      ]
    },
    {
      id: 'servicio-cliente',
      titulo: 'Servicio al Cliente',
      descripcion: 'Políticas de atención y servicio al cliente',
      icon: Users,
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      politicas: [
        {
          nombre: 'Política de Transparencia y acceso a información pública',
          url: '/politicas/servicio/transparencia-informacion.pdf'
        }
      ]
    },
    {
      id: 'sigac',
      titulo: 'SIGAC',
      descripcion: 'Sistema Integrado de Gestión y Control',
      icon: Award,
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      politicas: [
        {
          nombre: 'Política SIGAC',
          url: '/politicas/sigac/politica-sigac.pdf'
        }
      ]
    }
  ];

  const misionVision = [
    {
      title: 'Misión',
      icon: Target,
      content: '“Transmitimos buena energía, generamos confianza y distribuimos bienestar”',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Visión',
      icon: Eye,
      content: '“La Electrificadora del Huila S.A.–E.S.P. será reconocida por su excelencia en la prestación de servicios públicos contribuyendo con el desarrollo del país”',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const valores = [
    {
      title: 'Compromiso',
      descripcion: 'Dedicación total con nuestros usuarios y la región',
      icon: Heart
    },
    {
      title: 'Excelencia',
      descripcion: 'Búsqueda constante de la mejora continua',
      icon: Award
    },
    {
      title: 'Innovación',
      descripcion: 'Adopción de nuevas tecnologías y procesos',
      icon: Zap
    },
    {
      title: 'Responsabilidad',
      descripcion: 'Compromiso con el medio ambiente y la sociedad',
      icon: Building2
    }
  ];

  const historia = [
    {
      año: '1947',
      evento: 'Creación de Centrales Eléctricas del Huila S.A',
      descripcion: 'Inicio de operaciones como empresa de energía eléctrica del Huila'
    },
    {
      año: '1951',
      evento: 'Entra en Operación la Plata Iquira I (3.900 KV)',
      descripcion: 'Ampliación de cobertura a municipios del departamento'
    },
    {
      año: '1955',
      evento: 'Se Adquiere Planta La Pita',
      descripcion: ''
    },
    {
      año: '1958',
      evento: 'Inicia la generación térmica para reforzar Planta Diesel',
      descripcion: ''
    },
    {
      año: '1965',
      evento: 'Se Inaugura Plata Iquira II',
      descripcion: 'Inicio de operaciones como empresa de energía eléctrica del Huila'
    },
    {
      año: '1968',
      evento: 'Se construye subestación Campoalegre (1.500 KVA)',
      descripcion: ''
    },
    {
      año: '1971',
      evento: 'Cambio de razón social a ELECTRIFICADORA DEL HUILA S.A',
      descripcion: ''
    },
    {
      año: '1972',
      evento: 'Inicia Plan de Electrificación Rural',
      descripcion: ''
    },
    {
      año: '1975',
      evento: 'Se construye línea Altamira – Florencia 115 KV',
      descripcion: ''
    },
    {
      año: '1976',
      evento: 'Se amplia El Bote a 115 KV',
      descripcion: ''
    },
    {
      año: '1978',
      evento: 'Entra en servicio línea Altamira – Florencia',
      descripcion: 'Implementación de sistemas digitales y automatización'
    },
    {
      año: '1980',
      evento: 'Inicio segundo circuito de línea Prado – Neiva',
      descripcion: ''
    },
    {
      año: '1984',
      evento: 'Se termina Línea Altamira – Pitalito',
      descripcion: ''
    },
    {
      año: '1994',
      evento: 'Entra en operación línea Betania – Hobo a y Aipe – Praga',
      descripcion: ''
    },
    {
      año: '1998',
      evento: 'Apertura oficinas en Neiva para atención al cliente',
      descripcion: ''
    },
    {
      año: '2001',
      evento: 'Firma con BETANIA S.A contrato de conexión al sistema de transmisión nacional',
      descripcion: ''
    },
    {
      año: '2004',
      evento: 'Se crea el proyecto SENDERO DE LA LUZ',
      descripcion: ''
    },
    {
      año: '2010',
      evento: 'Se implemento sistema analizador de la calidad de la potencia',
      descripcion: ''
    },
    {
      año: '2011',
      evento: 'Inicio el proyecto confiabilidad Neiva a 115 KV',
      descripcion: ''
    },
    {
      año: '2012',
      evento: 'Inicio proyecto de facturación Rural',
      descripcion: ''
    },
    {
      año: '2014',
      evento: 'Se Inaugura la Subestación Hobo',
      descripcion: ''
    },
    {
      año: '2017',
      evento: 'Se inicia la firma de convenios con el Ministerio de Minas para la Administración de proyectos de los fondos FAER Y FAZNI a nivel Nacional',
      descripcion: 'Inauguración de la nueva sede administrativa el bote Edificio con certificación LEED y sistema de generación fotovoltaica Recibió premio COCIER- ASOCODIS  por Mayor evolución en el área de suministro de Energía'
    },
    {
      año: '2018',
      evento: 'Inicio la recuperación funcional de las PCH',
      descripcion: 'Recibió el premio COCIER-ASOCODIS por Mayor Evolución en el ISCAL 2019 Recibió el premio COCIER-ASOCODIS por Mayor Evolución en el ISCAL Recibió el premio Internacional CIER – Mención Especial – Mayor Evolución en ISCAL'
    },
    {
      año: '2020',
      evento: 'Nuevo Gerente de la compañía LUIS ERNESTO LUNA RAMIREZ',
      descripcion: ''
    },
  ];

  const estadisticas = [
    {
      numero: '850,000+',
      descripcion: 'Usuarios atendidos',
      icon: Users
    },
    {
      numero: '37',
      descripcion: 'Municipios con cobertura',
      icon: MapPin
    },
    {
      numero: '65+',
      descripcion: 'Años de experiencia',
      icon: Clock
    },
    {
      numero: '99.5%',
      descripcion: 'Confiabilidad del servicio',
      icon: Award
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header con botón de regreso */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Nosotros</h1>
          <p className="text-xl text-gray-600 mt-2">Conoce más sobre ElectroHuila</p>
        </div>
        <button
          onClick={onBack}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span>Volver al Inicio</span>
        </button>
      </div>
 {/* Estadísticas */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">ElectroHuila en Números</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {estadisticas.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl mb-4 mx-auto w-fit">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.numero}</h3>
              <p className="text-gray-600">{stat.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Misión y Visión */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Misión y Visión</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {misionVision.map((item, index) => (
            <div 
              key={index}
              className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${item.color} p-6`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
 {/* Valores Corporativos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((valor, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-xl mb-4 w-fit">
                <valor.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{valor.title}</h3>
              <p className="text-gray-600 text-sm">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Historia */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Nuestra Historia</h2>
        <div className="relative">
          {/* Línea de tiempo */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>
          
          <div className="space-y-8">
            {historia.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Círculo de la línea de tiempo */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                
                {/* Contenido */}
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.año}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.evento}</h3>
                    <p className="text-gray-600">{item.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NUEVO: Organigrama con Imagen */}
<div className="mb-16">
  <h2 className="text-2xl font-bold text-gray-900 mb-8">Organigrama ElectroHuila</h2>
  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <Building2 className="w-8 h-8 mr-3" />
        Estructura Organizacional
      </h3>
      <p className="text-white/90 mt-2">Conoce la estructura directiva y operativa de ElectroHuila</p>
    </div>
    
    {/* Imagen del Organigrama */}
    <div className="p-6">
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <img 
          src="/images/ESTRUCTURA-ORGANIZACIONAL-2024-2048x1259.png.webp" 
          alt="Organigrama ElectroHuila"
          className="w-full h-auto object-contain rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-zoom-in"
          onClick={() => window.open('/images/ESTRUCTURA-ORGANIZACIONAL-2024-2048x1259.png.webp', '_blank')}
        />
      </div>
      
      {/* Botones de descarga/ver */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => window.open('/images/ESTRUCTURA-ORGANIZACIONAL-2024-2048x1259.png.webp', '_blank')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 justify-center"
        >
          <Eye className="w-5 h-5" />
          <span>Ver en Tamaño Completo</span>
        </button>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-gray-600 text-sm">
          Estructura jerárquica que define las relaciones de autoridad, responsabilidad y coordinación dentro de ElectroHuila S.A. E.S.P.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* NUEVO: Políticas y Documentos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Políticas y Documentos</h2>
        
        {/* Acordeones de Políticas */}
        <div className="space-y-4">
          {politicasData.map((categoria, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div 
                className={`${categoria.bgColor} p-6 cursor-pointer hover:brightness-110 transition-all duration-200`}
                onClick={() => togglePoliticaCard(categoria.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <categoria.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{categoria.titulo}</h3>
                      <p className="text-white/90 text-sm">{categoria.descripcion}</p>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    {expandedPoliticaCard === categoria.id ? (
                      <ChevronDown className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
              </div>

              {expandedPoliticaCard === categoria.id && (
                <div className="bg-gray-50 overflow-hidden">
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {categoria.politicas.map((politica, pIndex) => (
                        <div 
                          key={pIndex}
                          onClick={() => window.open(politica.url, '_blank')}
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group transform hover:scale-[1.02]"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${categoria.bgColor} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-200`}>
                              <FileText className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-200" />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {politica.nombre}
                              </h4>
                              {politica.descripcion && (
                                <p className="text-xs text-gray-500 mt-1">{politica.descripcion}</p>
                              )}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NosotrosSection;