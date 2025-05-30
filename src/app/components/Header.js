'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Bell, 
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const Header = ({ onNavigate, searchTerm, setSearchTerm }) => {
  console.log('Header rendered with onNavigate:', onNavigate); // Debug - verificar que la función llega
  const [currentDate, setCurrentDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [comunicacionesOpen, setComunicacionesOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setComunicacionesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Configuración del menú - Solo elementos que NO son Comunicaciones
  const navigationMenu = [
    {
      name: 'Nosotros',
      action: () => {
        console.log('🔵 Nosotros clicked, onNavigate exists:', !!onNavigate);
        onNavigate && onNavigate('nosotros');
      }
    },
    {
      name: 'Maestros',
      action: () => {
        console.log('🟢 Maestros clicked!');
        console.log('🟢 onNavigate function exists:', !!onNavigate);
        console.log('🟢 onNavigate function type:', typeof onNavigate);
        if (onNavigate) {
          console.log('🟢 Calling onNavigate with "maestros"');
          onNavigate('maestros');
          console.log('🟢 onNavigate called successfully');
        } else {
          console.error('❌ onNavigate function is missing!');
        }
      }
    },
  ];

  // Enlaces del dropdown de Comunicaciones
  const comunicacionesItems = [
    {
      name: 'Suspensiones programadas',
      url: 'https://electrohuila.com/suspensiones-programadas'
    },
    {
      name: 'Comunicados y boletines de prensa',
      url: 'https://electrohuila.com/comunicados-boletines'
    }
  ];

  const handleMenuClick = (menuItem) => {
    console.log('Menu clicked:', menuItem); // Debug
    if (menuItem.action) {
      console.log('Executing action for:', menuItem.name); // Debug
      menuItem.action();
    } else if (menuItem.url) {
      window.open(menuItem.url, '_blank', 'noopener,noreferrer');
    }
    setIsMenuOpen(false);
  };

  const handleComunicacionesClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setComunicacionesOpen(false);
  };

  // Función para regresar al inicio
  const handleLogoClick = () => {
    console.log('Logo clicked - navigating to inicio'); // Debug
    if (onNavigate) {
      onNavigate('inicio'); // o puedes usar 'home' dependiendo de cómo manejes las rutas
    }
    // Cerrar cualquier menú abierto
    setIsMenuOpen(false);
    setComunicacionesOpen(false);
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo de ElectroHuila - Ahora clickeable */}
          <div className="flex items-center flex-shrink-0">
            <button 
              onClick={handleLogoClick}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
              title="Ir al inicio"
            >
              <img 
                src="/images/logo-eh.png.webp" 
                alt="ElectroHuila Logo"
                className="h-10 w-auto object-contain"
              />
            </button>
          </div>

          {/* Menú de navegación desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Botones regulares */}
            {navigationMenu.map((menuItem, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(menuItem)}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                {menuItem.name}
              </button>
            ))}

            {/* Dropdown de Comunicaciones */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setComunicacionesOpen(!comunicacionesOpen)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                Comunicaciones
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    comunicacionesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown menu */}
              {comunicacionesOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[280px] py-1">
                  {comunicacionesItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleComunicacionesClick(item.url)}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
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
              {/* Botones regulares en móvil */}
              {navigationMenu.map((menuItem, index) => (
                <button
                  key={index}
                  onClick={() => handleMenuClick(menuItem)}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium"
                >
                  {menuItem.name}
                </button>
              ))}
              
              {/* Comunicaciones en móvil - con submenú */}
              <div className="px-4">
                <div className="text-gray-700 font-medium py-2 border-b border-gray-100">
                  Comunicaciones
                </div>
                {comunicacionesItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleComunicacionesClick(item.url)}
                    className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
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
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;