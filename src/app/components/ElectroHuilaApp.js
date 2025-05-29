'use client';

import React, { useState, useEffect } from 'react';
import {
    Search,
    Bell,
    Menu,
    X,
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

// Componente Header
const Header = ({ onNavigate, searchTerm, setSearchTerm }) => {
    const [currentDate, setCurrentDate] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const today = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        setCurrentDate(today.toLocaleDateString('es-ES', options));
    }, []);

    const navigationMenu = [
        {
            name: 'Nosotros',
            action: () => onNavigate && onNavigate('nosotros')
        },
        {
            name: 'Comunicaciones',
            url: 'https://electrohuila.com/comunicaciones'
        },
        {
            name: 'Servicios',
            url: 'https://mesaservicio.electrohuila.com'
        }
    ];

    const handleMenuClick = (menuItem) => {
        if (menuItem.action) {
            menuItem.action();
        } else if (menuItem.url) {
            window.open(menuItem.url, '_blank', 'noopener,noreferrer');
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
            <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo de ElectroHuila */}
                    <div className="flex items-center flex-shrink-0">
                        <div className="flex items-center space-x-2">
                            <div className="h-10 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">ElectroHuila</span>
                        </div>
                    </div>

                    {/* Menú de navegación desktop */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigationMenu.map((menuItem, index) => (
                            <button
                                key={index}
                                onClick={() => handleMenuClick(menuItem)}
                                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-gray-50"
                            >
                                {menuItem.name}
                            </button>
                        ))}
                    </nav>

                    {/* Buscador y acciones del header */}
                    <div className="flex items-center space-x-4">

                        {/* Buscador */}
                        <div className="hidden md:block">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar aplicaciones..."
                                    value={searchTerm || ''}
                                    onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                />
                            </div>
                        </div>

                        {/* Notificación */}
                        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                        </button>

                        {/* Fecha */}
                        <div className="hidden sm:block text-right">
                            <p className="text-sm text-gray-700 font-medium">
                                {currentDate}
                            </p>
                        </div>

                        {/* Menú móvil */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Menú móvil */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 py-4">
                        <div className="space-y-2">
                            {navigationMenu.map((menuItem, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleMenuClick(menuItem)}
                                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium"
                                >
                                    {menuItem.name}
                                </button>
                            ))}
                        </div>

                        {/* Buscador móvil */}
                        <div className="mt-4 px-4 md:hidden">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar aplicaciones..."
                                    value={searchTerm || ''}
                                    onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

// Componente NosotrosSection
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
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    <span>Volver al Inicio</span>
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
                                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Círculo de la línea de tiempo */}
                                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center z-10">
                                    <div className="w-4 h-4 bg-white rounded-full"></div>
                                </div>

                                {/* Contenido */}
                                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
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

// Componente de página de inicio simple
const HomePage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <div className="mb-8">
                    <div className="h-24 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Zap className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Bienvenido a ElectroHuila
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Tu empresa de energía eléctrica comprometida con el desarrollo sostenible del Huila.
                        Brindamos servicios confiables, eficientes y de calidad para el bienestar de todos nuestros usuarios.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl mb-6 w-fit mx-auto">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">850,000+ Usuarios</h3>
                        <p className="text-gray-600">
                            Atendemos a más de 850,000 usuarios en todo el departamento del Huila con excelencia y compromiso.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-xl mb-6 w-fit mx-auto">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">37 Municipios</h3>
                        <p className="text-gray-600">
                            Presencia en 37 municipios del Huila, llevando energía confiable a cada rincón de nuestra región.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl mb-6 w-fit mx-auto">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">99.5% Confiabilidad</h3>
                        <p className="text-gray-600">
                            Mantenemos los más altos estándares de calidad y confiabilidad en nuestro servicio eléctrico.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Componente principal de la aplicación
const ElectroHuilaApp = () => {
    const [currentView, setCurrentView] = useState('home');
    const [searchTerm, setSearchTerm] = useState('');

    const handleNavigation = (view) => {
        setCurrentView(view);
    };

    const handleBackToHome = () => {
        setCurrentView('home');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                onNavigate={handleNavigation}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <main>
                {currentView === 'home' && <HomePage />}
                {currentView === 'nosotros' && <NosotrosSection onBack={handleBackToHome} />}
            </main>
        </div>
    );
};

export default ElectroHuilaApp;