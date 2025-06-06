// src/app/components/ClientOnlySparkles.js
'use client';

import { useClientOnly } from '../../hooks/useClientOnly';

const ClientOnlySparkles = ({ count = 8 }) => {
  const isClient = useClientOnly();

  // Valores fijos para evitar diferencias entre servidor y cliente
  const sparkleConfigs = [
    { left: 39.65, top: 40.68, delay: 0, duration: 2.47, color: 'text-yellow-300' },
    { left: 15.39, top: 6.53, delay: 0.2, duration: 1.80, color: 'text-cyan-300' },
    { left: 38.45, top: 91.29, delay: 0.4, duration: 1.77, color: 'text-blue-300' },
    { left: 51.23, top: 14.48, delay: 0.6, duration: 2.22, color: 'text-green-300' },
    { left: 48.54, top: 4.90, delay: 0.8, duration: 1.59, color: 'text-yellow-300' },
    { left: 40.13, top: 30.41, delay: 1.0, duration: 2.44, color: 'text-cyan-300' },
    { left: 81.87, top: 78.21, delay: 1.2, duration: 1.87, color: 'text-blue-300' },
    { left: 96.77, top: 26.60, delay: 1.4, duration: 2.08, color: 'text-green-300' }
  ];

  // No renderizar nada en el servidor
  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute -inset-8 pointer-events-none">
      {sparkleConfigs.slice(0, count).map((config, index) => (
        <div
          key={index}
          className={`absolute text-xs animate-ping ${config.color}`}
          style={{
            left: `${config.left}%`,
            top: `${config.top}%`,
            animationDelay: `${config.delay}s`,
            animationDuration: `${config.duration}s`
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
};

export default ClientOnlySparkles;