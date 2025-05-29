'use client';

import React from 'react';
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
  Building2,
  Zap,
  Heart
} from 'lucide-react';

const NosotrosSection = ({ onBack }) => {
  const misionVision = [
    {
      title: 'Misión',
      icon: Target,
      content: 'Somos una empresa de servicios públicos domiciliarios de energía eléctrica, comprometida con el desarrollo sostenible del Huila, brindando un servicio confiable, eficiente y de calidad, contribuyendo al bienestar de nuestros usuarios y al progreso de la región.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Visión',
      icon: Eye,
      content: 'Ser la empresa líder en la prestación de servicios de energía eléctrica en el sur de Colombia, reconocida por su excelencia operacional, innovación tecnológica y compromiso social con el desarrollo sostenible de la región.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const valores = [
    {
      title: 'Compromiso',
      description: 'Dedicación total con nuestros usuarios y la región',
      icon: Heart
    },
    {
      title: 'Excelencia',
      description: 'Búsqueda constante de la mejora continua',
      icon: Award
    },
    {
      title: 'Innovación',
      description: 'Adopción de nuevas tecnologías y procesos',
      icon: Zap
    },
    {
      title: 'Responsabilidad',
      description: 'Compromiso con el medio ambiente y la sociedad',
      icon: Building2
    }
  ];

  const historia = [
    {
      año: '1959',
      evento: 'Fundación de ElectroHuila',
      descripcion: 'Inicio de operaciones como empresa de energía eléctrica del Huila'
    },
    {
      año: '1980',
      evento: 'Expansión Regional',
      descripcion: 'Ampliación de cobertura a municipios del departamento'
    },
    {
      año: '2000',
      evento: 'Modernización Tecnológica',
      descripcion: 'Implementación de sistemas digitales y automatización'
    },
    {
      año: '2020',
      evento: 'Transformación Digital',
      descripcion: 'Adopción de tecnologías 4.0 y energías renovables'
    }
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
          <span>Volver al Inicio</span>
          <ChevronRight className="w-4 h-4 rotate-180" />
        </button>
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

      {/* Contacto */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium">Teléfono</p>
              <p className="text-white/90">(608) 875 8500</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-white/90">info@electrohuila.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium">Sitio Web</p>
              <p className="text-white/90">www.electrohuila.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosotrosSection;