import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const ComunicacionesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (url) => {
    // Aquí cambias por las URLs reales
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Dropdown de Comunicaciones */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-sm transition-colors duration-200 font-medium text-sm"
          style={{ backgroundColor: '#FF7A00' }}
        >
          Comunicaciones
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown menu con estilo similar a la imagen */}
        {isOpen && (
          <div 
            className="absolute top-full left-0 mt-0 shadow-lg z-50 min-w-[300px] rounded-sm overflow-hidden"
            style={{ backgroundColor: '#FF7A00' }}
          >
            <button
              onClick={() => handleMenuClick('https://ejemplo.com/suspensiones')}
              className="w-full text-left px-4 py-3 text-white hover:bg-orange-600 transition-colors duration-150 border-b border-orange-400 text-sm"
            >
              Suspensiones programadas
            </button>
            <button
              onClick={() => handleMenuClick('https://ejemplo.com/comunicados')}
              className="w-full text-left px-4 py-3 text-white hover:bg-orange-600 transition-colors duration-150 text-sm"
            >
              Comunicados y boletines de prensa
            </button>
          </div>
        )}
      </div>

      {/* Botón SIG */}
      <button
        onClick={() => handleMenuClick('https://ejemplo.com/sig')}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-sm transition-colors duration-200 font-medium text-sm"
        style={{ backgroundColor: '#FF7A00' }}
      >
        SIG
      </button>

      {/* Botón de búsqueda */}
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-sm transition-colors duration-200"
        style={{ backgroundColor: '#FF7A00' }}
      >
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ComunicacionesSection;