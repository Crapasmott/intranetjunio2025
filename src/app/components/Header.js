'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  Menu,
  X
} from 'lucide-react';

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

  // Configuración del menú simplificado - Solo botones principales
  const navigationMenu = [
    {
      name: 'Nosotros',
      action: () => onNavigate && onNavigate('/Nosotros')
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
              <img 
                src="/images/logo-eh.png.webp" 
                alt="ElectroHuila Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Menú de navegación desktop - SIN DROPDOWNS */}
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

        {/* Menú móvil simplificado */}
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

export default Header;