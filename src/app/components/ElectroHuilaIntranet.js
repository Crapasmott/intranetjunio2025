'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import NosotrosSection from './NosotrosSection';
import MaestrosSection from './MaestrosSection';
import GestionJuridicaSection from './GestionJuridicaSection';
import { 
  Bell, Search, Calendar, Heart, Users, ChevronRight, ChevronDown, Download, Shield, Zap, X, ExternalLink, RefreshCw, BookOpen, Star, Grid3X3, Newspaper, Mail, Globe, BarChart3, Headphones, Settings, Database, Activity, FileText, HardDrive, Monitor, Wifi, Server, Smartphone, Laptop, Printer, Camera, MessageSquare, Router, Facebook, Instagram, Youtube, Eye, ThumbsUp, Share2, Clock
} from 'lucide-react';
import ElectroHuilaKidsButton from './ElectroHuilaKidsButton'; // Agregar esta línea

const ElectroHuilaIntranet = () => {
  const [currentView, setCurrentView] = useState('home');
  const [currentDate, setCurrentDate] = useState('');
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotifications, setShowNotifications] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [animationKey, setAnimationKey] = useState(0);
  const [expandedSystemCard, setExpandedSystemCard] = useState(null);
  const [animatingCards, setAnimatingCards] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(today.toLocaleDateString('es-ES', options));
  }, []);

  const handleNavigation = (view) => { setCurrentView(view); };
  const handleBackToHome = () => { setCurrentView('home'); };

  const notifications = [
    { id: 1, type: 'obituario', title: 'CONDOLENCIA', subtitle: 'Justina Celis Silva', description: 'Madre de nuestro compañero Edgar Cuenca Celis', date: '24 de febrero de 2025', icon: Heart, color: 'bg-gray-800', textColor: 'text-white', image: '/images/n-0.jpg', hasImage: true },
    { id: 2, type: 'cumpleanos', title: 'Cumpleaños Familia ElectroHuila', subtitle: 'Celebramos contigo', description: 'Hoy cumple años nuestro compañero Carlos Martínez del área técnica', date: new Date().toLocaleDateString('es-ES'), icon: Calendar, color: 'bg-green-500', textColor: 'text-white', image: '/images/n-1.jpg', hasImage: true },
    { id: 3, type: 'evento', title: 'Próximos Eventos ElectroHuila', subtitle: 'Capacitación Virtual', description: 'Jornada de capacitación en seguridad industrial - 28 de Mayo', date: '28 de mayo de 2025', icon: Users, color: 'bg-blue-600', textColor: 'text-white', image: '/images/n-3.jpg', hasImage: true }
  ];

  useEffect(() => {
    if (showNotifications && notifications.length > 1) {
      const interval = setInterval(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showNotifications, notifications.length]);

  const allApplications = [
    { name: 'Comercial Maps', desc: 'Comercial Maps', iconPng: '/images/iconos/map.png', url: 'https://backapp.electrohuila.com.co:8071/maps/login.php', category: 'Comercial', color: 'from-green-500 to-green-600', featured: false },
    { name: 'Calidad del Servicio', desc: 'Calidad del Servicio', iconPng: '/images/iconos/encendiendo.png', url: 'https://electrohuilaco.sharepoint.com/Cadena_de_Valor/Operacion/CALIDAD%20DEL%20SERVICIO/Forms/AllItems.aspx', category: ' Servicio', color: 'from-blue-500 to-blue-600', featured: false },
    { name: 'Control de Pérdidas', desc: 'Control de Pérdidas', iconPng: '/images/iconos/analitico.png', url: 'http://192.9.200.196/erp/registro2.asp', category: 'Control ', color: 'from-red-500 to-orange-500', featured: false },
    { name: 'Electrohuila Mapas', desc: 'Electrohuila Mapas', iconPng: '/images/iconos/ubicacion.png', url: 'https://backapp.electrohuila.com.co:8071/maps/login.php#no-back-button', category: 'Mapas', color: 'from-green-500 to-teal-500', featured: false },
    { name: 'ERP Electrohuila', desc: 'ERP Electrohuila', iconPng: '/images/iconos/ERPLOGO3.png', url: 'http://intranet.electrohuila.com.co/intranet/sig/', category: 'Facturación Masiva', color: 'from-purple-500 to-pink-500', featured: true },
    { name: 'Facturación Masiva', desc: 'Facturación Masiva', iconPng: '/images/iconos/recibo.png', url: 'http://10.50.35.27:8080/KioscoDesignerRHN-war/?grupo=GrupoEmpresarial1', category: 'Facturación', color: 'from-yellow-500 to-orange-500', featured: false },
    { name: 'Gestión Integral en RH y Nómina', desc: 'Gestión Integral en RH y Nómina', iconPng: '/images/iconos/gestion-del-talento.png', url: 'https://enlinea.electrohuila.com.co/consignas/#/', category: 'Gestión ', color: 'from-blue-500 to-cyan-500', featured: false },
    { name: 'Gestión Jurídica', desc: 'Normatividad, códigos y documentos legales', iconPng: '/images/iconos/libro-de-leyes.png', url: 'gestion-juridica', category: 'Legal', color: 'from-blue-500 to-indigo-600', featured: false },
    { name: 'Gestión Transversal', desc: 'Gestión Transversal', iconPng: '/images/iconos/portapapeles.png', url: '', category: 'Gestión ', color: 'from-indigo-500 to-blue-500', featured: false },
    { name: 'Inventario TIC EH', desc: 'Inventario TIC EH', iconPng: '/images/iconos/gestion-de-materiales.png', url: '', category: 'Inventario', color: 'from-purple-600 to-blue-600', featured: false },
    { name: 'Nómina EH', desc: 'Nómina EH', iconPng: '/images/iconos/nomina-eh.png', url: 'https://backapp.electrohuila.com.co:8071/maps/login.php#no-back-button', category: 'Nómina ', color: 'from-blue-500 to-indigo-500', featured: false },
    { name: 'Notificaciones Web', desc: 'Notificaciones Web', iconPng: '/images/iconos/notificacion.png', url: '', category: 'Notificaciones', color: 'from-purple-500 to-blue-500', featured: false },
    { name: 'Página Web Principal', desc: 'Página Web Principal', iconPng: '/images/iconos/web-eh.png', url: '', category: 'Web Principal', color: 'from-green-500 to-green-600', featured: false },
    { name: 'Plataforma Para Procesos provisionados', desc: 'Plataforma Para Procesos provisionados', iconPng: '/images/iconos/computadora.png', url: '', category: 'Plataforma ', color: 'from-blue-500 to-blue-600', featured: false },
    { name: 'Portal Interacción Corporativa', desc: 'Portal Interacción Corporativa', iconPng: '/images/iconos/reunion.png', url: '', category: 'Portal', color: 'from-red-500 to-orange-500', featured: false },
    { name: 'Reporte Cartera Comercial ', desc: 'Power BI', iconPng: '/images/iconos/analisis-de-datos.png', url: '', category: 'Power BI', color: 'from-green-500 to-teal-500', featured: false },
    { name: 'Seguridad Transversal', desc: 'Seguridad Transversal', iconPng: '/images/iconos/proteger.png', url: '', category: 'Seguridad', color: 'from-purple-500 to-pink-500', featured: false },
    { name: 'SIMAD', desc: 'SIMAD', iconPng: '/images/iconos/SIMAD.png', url: '', category: 'SIMAD', color: 'from-yellow-500 to-orange-500', featured: true },
    { name: 'Sistema Integrado de Gestión', desc: 'Sistema Integrado de Gestión', iconPng: '/images/iconos/SIG.png', url: '', category: 'Sistema', color: 'from-blue-500 to-cyan-500', featured: true },
    { name: 'Sistema Local de Consignas', desc: 'Sistema Local de Consignas', iconPng: '/images/iconos/SLlogo.png', url: '', category: 'Sistema', color: 'from-yellow-500 to-amber-500', featured: true },
    { name: 'Control Permiso Ambiental', desc: 'Control Permiso Ambiental', iconPng: '/images/iconos/ambientalismo.png', url: '', category: 'Control ', color: 'from-indigo-500 to-blue-500', featured: false },
    { name: 'Web SAMI', desc: 'Web SAMI', iconPng: '/images/iconos/sami.png', url: '', category: 'SAMI', color: 'from-purple-600 to-blue-600', featured: true },
    { name: 'Admin Intranet', desc: 'Admin Intranet', iconPng: '/images/iconos/wp-admin-intranet.png', url: '', category: 'Intranet', color: 'from-blue-500 to-indigo-500', featured: false },
    { name: 'Cuentas Nuevas', desc: 'Cuentas Nuevas', iconPng: '/images/iconos/datos.png', url: '', category: 'Cuentas', color: 'from-purple-500 to-blue-500', featured: false },
    { name: 'EH-Redemtor v1.0', desc: 'EH-Redemtor v1.0', iconPng: '/images/iconos/LogoNBG-400x400.png', url: '', category: 'EH-Redemtor', color: 'from-green-500 to-green-600', featured: false },
    { name: 'Informa Colombia', desc: 'Informa Colombia', iconPng: '/images/iconos/Informa_logo_20230831_023112112.png', url: '', category: 'Informa ', color: 'from-blue-500 to-blue-600', featured: false },
    { name: 'Reporte Recaudo SIEC', desc: 'Reporte Recaudo SIEC', iconPng: '/images/iconos/informe-de-venta.png', url: '', category: 'Reporte', color: 'from-red-500 to-orange-500', featured: false },
    { name: 'Consulta Comercial', desc: 'Consulta Comercial', iconPng: '/images/iconos/oficina-del-doctor.png', url: '', category: 'Consulta', color: 'from-green-500 to-teal-500', featured: false },
    { name: 'Facturación Electrónica', desc: 'Facturación Electrónica', iconPng: '/images/iconos/facturacion-en-linea.png', url: '', category: 'Facturación ', color: 'from-purple-500 to-pink-500', featured: false },
    { name: 'Mesa de Servicios', desc: 'Mesa de Servicios', iconPng: '/images/iconos/servicio-al-cliente.png', url: '', category: 'Servicios', color: 'from-yellow-500 to-orange-500', featured: true }
  ];

  const quickLinks = [
    { name: 'Calendario Tributario 2024', icon: Calendar, url: 'https://calendario2024.electrohuila.com', bgColor: 'bg-blue-500' },
    { name: 'Calendario Tributario 2025', icon: Calendar, url: 'https://calendario2025.electrohuila.com', bgColor: 'bg-blue-500' },
    { name: 'Reporte diario de salud', icon: Heart, url: 'https://salud.electrohuila.com', bgColor: 'bg-blue-500' },
    { name: 'Correo Office 365', icon: Mail, url: 'https://outlook.office365.com', bgColor: 'bg-blue-500' },
    { name: 'Sitio web principal', icon: Globe, url: 'https://www.electrohuila.com', bgColor: 'bg-blue-500' },
    { name: 'Protocolos de bioseguridad', icon: Shield, url: 'https://bioseguridad.electrohuila.com', bgColor: 'bg-blue-500' }
  ];

  const news = [
    { title: 'Nueva Infraestructura Eléctrica en Neiva', excerpt: 'ElectroHuila invierte en modernización de la red eléctrica para mejorar el servicio a la comunidad huilense...', date: '25 de Mayo, 2025', image: '/images/1.jpg', category: 'Infraestructura', url: 'https://blog.electrohuila.com/infraestructura-neiva' },
    { title: 'Programa de Sostenibilidad Ambiental', excerpt: 'Nuevas iniciativas verdes para reducir el impacto ambiental de nuestras operaciones corporativas...', date: '23 de Mayo, 2025', image: '/images/2.jpg', category: 'Sostenibilidad', url: 'https://blog.electrohuila.com/sostenibilidad-ambiental' },
    { title: 'Capacitación en Seguridad Industrial', excerpt: 'Jornada de formación para todo el personal técnico en nuevos protocolos de seguridad laboral...', date: '20 de Mayo, 2025', image: '/images/3.jpg', category: 'Capacitación', url: 'https://blog.electrohuila.com/capacitacion-seguridad' }
  ];

  const humanResources = [
    { name: 'Calendario de eventos y cumpleaños', icon: Calendar, url: 'https://eventos.electrohuila.com', description: 'Próximos eventos corporativos y celebraciones', bgColor: 'bg-gradient-to-br from-green-500 to-teal-500' },
    { name: 'Bienestar social', icon: Heart, url: 'https://bienestar.electrohuila.com', description: 'Programas de bienestar para empleados', bgColor: 'bg-gradient-to-br from-pink-500 to-rose-500' },
    { name: 'SST novedades', icon: Shield, url: 'https://sst.electrohuila.com', description: 'Seguridad y Salud en el Trabajo', bgColor: 'bg-gradient-to-br from-orange-500 to-red-500' },
    { name: 'Reporte de comunicaciones', icon: MessageSquare, url: 'https://comunicaciones.electrohuila.com', description: 'Comunicados internos y boletines', bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-500' }
  ];

  const eventGallery = [
    { id: 1, title: 'Inauguración Nueva Subestación', date: '15 de Mayo, 2025', category: 'Infraestructura', image: '/images/g-1.jpg', description: 'Inauguración de la nueva subestación eléctrica en el sector norte de Neiva' },
    { id: 2, title: 'Jornada de Capacitación SST', date: '10 de Mayo, 2025', category: 'Capacitación', image: '/images/g-2.jpg', description: 'Personal técnico participando en jornada de seguridad y salud en el trabajo' },
    { id: 3, title: 'Mantenimiento Red Eléctrica', date: '8 de Mayo, 2025', category: 'Mantenimiento', image: '/images/g-3.jpg', description: 'Trabajos de mantenimiento preventivo en la red de distribución' },
    { id: 4, title: 'Reunión Directiva Mensual', date: '5 de Mayo, 2025', category: 'Corporativo', image: '/images/g-4.jpg', description: 'Junta directiva evaluando resultados del primer trimestre' },
    { id: 5, title: 'Campaña Ahorro Energético', date: '2 de Mayo, 2025', category: 'Sostenibilidad', image: '/images/g-5.jpg', description: 'Lanzamiento de campaña educativa sobre uso eficiente de la energía' },
    { id: 6, title: 'Día del Trabajador', date: '1 de Mayo, 2025', category: 'Celebración', image: '/images/g-2.jpg', description: 'Celebración del Día del Trabajador con todo el equipo ElectroHuila' },
    { id: 7, title: 'Modernización Centro Control', date: '28 de Abril, 2025', category: 'Tecnología', image: '/images/g-5.jpg', description: 'Instalación de nuevos sistemas de monitoreo en tiempo real' },
    { id: 8, title: 'Convenio Universidad', date: '25 de Abril, 2025', category: 'Educación', image: '/images/g-1.jpg', description: 'Firma de convenio con universidad local para prácticas estudiantiles' }
  ];

  const socialPosts = [
    { platform: 'facebook', content: 'ElectroHuila moderniza su infraestructura para brindar mejor servicio a la comunidad huilense.', likes: 234, comments: 12, shares: 45, time: '2 horas', image: '/images/faceeins.jpg', url: 'https://facebook.com/electrohuila/posts/123456789' },
    { platform: 'instagram', content: 'Nuestro equipo técnico trabajando por la energía del Huila. #EnergíaConPropósito', likes: 189, comments: 8, shares: 23, time: '4 horas', image: '/images/faceeins.jpg', url: 'https://instagram.com/p/electrohuila123' },
    { platform: 'youtube', content: 'Cómo ElectroHuila está transformando el sector energético - Video corporativo', likes: 156, comments: 24, shares: 67, time: '1 día', image: '/images/ELECTRO-FOTO.png', url: 'https://youtube.com/watch?v=electrohuila123' }
  ];

  const systemsOfficeCards = [
    { id: 'updates', title: 'Últimas Actualizaciones', icon: RefreshCw, bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600', iconColor: 'text-green-600', description: 'Últimas actualizaciones del sistema', functions: [
      { name: 'Videos Tutoriales de la Mesa de Servicio (Nuevo)', date: '3 de septiembre de 2021', icon: Camera, url: 'https://tutoriales.electrohuila.com/mesa-servicio' },
      { name: 'Nuevo Submenú - Reseña Histórica', date: '3 de febrero de 2021', icon: BookOpen, url: 'https://historia.electrohuila.com' },
      { name: 'Nuevo Submenú - Políticas', date: '3 de febrero de 2021', icon: FileText, url: 'https://politicas.electrohuila.com' },
      { name: 'Actualización Sistema SIMAD', date: '15 de enero de 2021', icon: Database, url: 'https://simad.electrohuila.com/updates' },
      { name: 'Mejoras Mesa de Servicio', date: '10 de enero de 2021', icon: Headphones, url: 'https://mesaservicio.electrohuila.com/updates' }
    ]},
    { id: 'downloads', title: 'Descargas', icon: Download, bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-600', iconColor: 'text-blue-600', description: 'Centro de descargas de software y documentos', functions: [
      { name: 'Complemento Office 365', icon: Download, url: 'https://descargas.electrohuila.com/office365-complemento.exe', type: 'Software' },
      { name: 'Descargar Utilidad SIMAD', icon: Download, url: 'https://descargas.electrohuila.com/simad-utility.msi', type: 'Utilidad' },
      { name: 'Drivers Impresoras', icon: Printer, url: 'https://descargas.electrohuila.com/drivers-impresoras.zip', type: 'Drivers' },
      { name: 'Cliente VPN Corporativo', icon: Shield, url: 'https://descargas.electrohuila.com/vpn-client.exe', type: 'Seguridad' },
      { name: 'Antivirus Corporativo', icon: Shield, url: 'https://descargas.electrohuila.com/antivirus-setup.exe', type: 'Seguridad' },
      { name: 'Manual de Usuario SIMAD', icon: BookOpen, url: 'https://descargas.electrohuila.com/manual-simad.pdf', type: 'Documentación' }
    ]},
    { id: 'manuals', title: 'Manuales', icon: BookOpen, bgColor: 'bg-gradient-to-br from-purple-500 to-indigo-600', iconColor: 'text-purple-600', description: 'Documentación y manuales de usuario', functions: [
      { name: 'Manual y Documentación SIMAD', icon: FileText, url: 'https://manuales.electrohuila.com/simad-manual.pdf', category: 'SIMAD' },
      { name: 'Manual Mesa de Servicio', icon: FileText, url: 'https://manuales.electrohuila.com/mesa-servicio.pdf', category: 'Mesa de Servicio' },
      { name: 'Manual SIG - Sistema de Gestión', icon: FileText, url: 'https://manuales.electrohuila.com/sig-manual.pdf', category: 'SIG' },
      { name: 'Guía de Usuario Office 365', icon: FileText, url: 'https://manuales.electrohuila.com/office365-guia.pdf', category: 'Office 365' },
      { name: 'Manual de Seguridad Informática', icon: Shield, url: 'https://manuales.electrohuila.com/seguridad-informatica.pdf', category: 'Seguridad' },
      { name: 'Procedimientos TIC', icon: Settings, url: 'https://manuales.electrohuila.com/procedimientos-tic.pdf', category: 'Procedimientos' }
    ]},
    { id: 'support', title: 'Soporte Técnico', icon: Headphones, bgColor: 'bg-gradient-to-br from-orange-500 to-red-600', iconColor: 'text-orange-600', description: 'Centro de soporte y asistencia técnica', functions: [
      { name: 'Mesa de Ayuda TIC', icon: Headphones, url: 'https://soporte.electrohuila.com/mesa-ayuda', status: 'Disponible 24/7' },
      { name: 'Diagnóstico Remoto', icon: Monitor, url: 'https://soporte.electrohuila.com/diagnostico', status: 'Disponible' },
      { name: 'Tickets de Soporte', icon: FileText, url: 'https://soporte.electrohuila.com/tickets', status: 'Activo' },
      { name: 'Chat en Vivo', icon: MessageSquare, url: 'https://soporte.electrohuila.com/chat', status: 'En línea' },
      { name: 'Base de Conocimiento', icon: Database, url: 'https://soporte.electrohuila.com/kb', status: 'Actualizada' }
    ]},
    { id: 'inventory', title: 'Inventario TIC', icon: Database, bgColor: 'bg-gradient-to-br from-teal-500 to-cyan-600', iconColor: 'text-teal-600', description: 'Gestión de inventario tecnológico', functions: [
      { name: 'Equipos de Cómputo', icon: Laptop, url: 'https://inventario.electrohuila.com/equipos-computo', count: '245 equipos' },
      { name: 'Servidores', icon: Server, url: 'https://inventario.electrohuila.com/servidores', count: '12 servidores' },
      { name: 'Equipos de Red', icon: Router, url: 'https://inventario.electrohuila.com/equipos-red', count: '48 dispositivos' },
      { name: 'Impresoras', icon: Printer, url: 'https://inventario.electrohuila.com/impresoras', count: '32 impresoras' },
      { name: 'Dispositivos Móviles', icon: Smartphone, url: 'https://inventario.electrohuila.com/moviles', count: '67 dispositivos' },
      { name: 'Licencias Software', icon: Settings, url: 'https://inventario.electrohuila.com/licencias', count: '156 licencias' }
    ]},
    { id: 'monitoring', title: 'Monitoreo y Estadísticas', icon: Activity, bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-600', iconColor: 'text-indigo-600', description: 'Monitoreo de sistemas y estadísticas', functions: [
      { name: 'Estado de Servidores', icon: Server, url: 'https://monitoreo.electrohuila.com/servidores', status: 'Online', uptime: '99.8%' },
      { name: 'Tráfico de Red', icon: Wifi, url: 'https://monitoreo.electrohuila.com/trafico', status: 'Normal', usage: '45%' },
      { name: 'Uso de Aplicaciones', icon: BarChart3, url: 'https://monitoreo.electrohuila.com/aplicaciones', status: 'Monitoreando', users: '234 activos' },
      { name: 'Seguridad de Red', icon: Shield, url: 'https://monitoreo.electrohuila.com/seguridad', status: 'Protegido', threats: '0 amenazas' },
      { name: 'Backup y Respaldos', icon: HardDrive, url: 'https://monitoreo.electrohuila.com/backup', status: 'Actualizado', lastBackup: 'Hace 2 horas' }
    ]}
  ];

  const getFilteredApps = () => {
    let filtered = allApplications;
    if (searchTerm) {
      filtered = filtered.filter(app => 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (viewMode === 'featured') {
      filtered = filtered.filter(app => app.featured);
    }
    return filtered;
  };

  const filteredApps = getFilteredApps();

  const changeView = (newViewMode, category = '') => {
    setViewMode(newViewMode);
    setSelectedCategory(category);
    setAnimationKey(prev => prev + 1);
  };

  const openApp = (url) => {
    if (url === 'gestion-juridica') {
      setCurrentView('gestion-juridica');
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleSystemCard = (cardId) => {
    setExpandedSystemCard(expandedSystemCard === cardId ? null : cardId);
  };

  const renderCurrentView = () => {
    if (currentView === 'nosotros') {
      return <NosotrosSection onBack={handleBackToHome} />;
    }
    if (currentView === 'maestros') {
      return <MaestrosSection onBack={handleBackToHome} />;
    }
    if (currentView === 'gestion-juridica') {
      return <GestionJuridicaSection onBack={handleBackToHome} />;
    }
    
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
    
          {/* AHORA SÍ EL MENÚ DE APLICACIONES */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Aplicaciones</h1>
      
    </div>

       {/* APLICACIONES */}
       <div className="mb-16">
         <div className="flex items-center justify-between mb-6">
           <div className="flex items-center">
             <div className="px-4 py-2 rounded-lg text-white font-semibold mr-4 bg-blue-500">
               Aplicaciones
             </div>
             <span className="text-sm text-gray-500">
               {filteredApps.length} aplicaciones disponibles
             </span>
           </div>
           <div className="flex items-center space-x-2">
             <button
               onClick={() => changeView('featured')}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                 viewMode === 'featured' 
                   ? 'bg-blue-500 text-white shadow-md' 
                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
               }`}
             >
               <Star className="w-4 h-4 inline mr-2" />
               Principales
             </button>
             <button
               onClick={() => changeView('all')}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                 viewMode === 'all' 
                   ? 'bg-blue-500 text-white shadow-md' 
                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
               }`}
             >
               <Grid3X3 className="w-4 h-4 inline mr-2" />
               Todas
             </button>
           </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
           {filteredApps.map((app, index) => (
             <div 
               key={`${app.name}-${index}`}
               onClick={() => openApp(app.url)}
               className="relative group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
             >
               {app.featured && (
                 <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                   ⭐ Principal
                 </div>
               )}
               <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                 <img 
                   src={app.iconPng} 
                   alt={app.name}
                   className="w-12 h-12 object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'block';
                   }}
                 />
                 <span className="text-2xl filter drop-shadow-sm" style={{display: 'none'}}>📊</span>
               </div>
               <div className="text-center">
                 <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                   {app.name}
                 </h3>
                 <p className="text-xs text-gray-600 mb-3 leading-tight">
                   {app.desc}
                 </p>
                 <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 text-xs px-2 py-1 rounded-full font-medium transition-colors">
                   {app.category}
                 </span>
               </div>
               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <ExternalLink className="w-4 h-4 text-blue-500" />
               </div>
             </div>
           ))}
         </div>
       </div>

       {/* ENLACES RÁPIDOS */}
       <div className="mb-16">
         <h2 className="text-2xl font-bold text-gray-900 mb-6">Enlaces Rápidos</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
           {quickLinks.map((link, index) => (
             <button
               key={index}
               onClick={() => openApp(link.url)}
               className={`${link.bgColor} hover:bg-blue-600 text-white p-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center space-y-2 text-center min-h-[100px]`}
             >
               <link.icon className="w-6 h-6 flex-shrink-0" />
               <span className="font-medium text-sm leading-tight">{link.name}</span>
             </button>
           ))}
         </div>
       </div>

       {/* NOVEDADES */}
       <div className="mb-16">
         <div className="flex items-center justify-between mb-6">
           <h2 className="text-2xl font-bold text-gray-900">Novedades</h2>
           <button 
             onClick={() => openApp('https://blog.electrohuila.com')}
             className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
           >
             <Newspaper className="w-4 h-4" />
             <span>Ver Blog</span>
           </button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {news.map((article, index) => (
             <div 
               key={index} 
               onClick={() => openApp(article.url)}
               className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer group"
             >
               <img 
                 src={article.image} 
                 alt={article.title}
                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
               />
               <div className="p-6">
                 <div className="flex items-center justify-between mb-2">
                   <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                     {article.category}
                   </span>
                   <span className="text-xs text-gray-500">{article.date}</span>
                 </div>
                 <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                 <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                 <div className="flex items-center justify-between">
                   <span className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center space-x-1">
                     <span>Leer más</span>
                     <ChevronRight className="w-4 h-4" />
                   </span>
                   <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>

       {/* TALENTO HUMANO */}
       <div className="mb-16">
         <h2 className="text-2xl font-bold text-gray-900 mb-6">Talento Humano</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {humanResources.map((item, index) => (
             <div 
               key={index}
               onClick={() => openApp(item.url)}
               className="relative overflow-hidden bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 group"
             >
               <div className={`${item.bgColor} p-6 relative`}>
                 <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="relative z-10">
                   <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mb-4 w-16 h-16 flex items-center justify-center mx-auto">
                     <item.icon className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="font-bold text-white text-center mb-2">{item.name}</h3>
                   <p className="text-white/90 text-sm text-center">{item.description}</p>
                 </div>
               </div>
               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <ExternalLink className="w-4 h-4 text-white" />
               </div>
             </div>
           ))}
         </div>
       </div>

       {/* OFICINA DE SISTEMAS */}
       <div className="mb-16">
         <h2 className="text-2xl font-bold text-gray-900 mb-6">Oficina de Sistemas</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {systemsOfficeCards.map((card) => (
             <div 
               key={card.id}
               className={`bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                 animatingCards[card.id] ? 'transform scale-[1.02]' : ''
               }`}
             >
               <div 
                 className={`${card.bgColor} p-6 cursor-pointer hover:brightness-110 transition-all duration-200`}
                 onClick={() => toggleSystemCard(card.id)}
               >
                 <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-4">
                     <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl transform transition-transform duration-200 hover:scale-110">
                       <card.icon className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <h3 className="font-bold text-white text-lg">{card.title}</h3>
                       <p className="text-white/90 text-sm">{card.description}</p>
                     </div>
                   </div>
                   <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg transform transition-all duration-300">
                     {expandedSystemCard === card.id ? (
                       <ChevronDown className="w-5 h-5 text-white transform rotate-0 transition-transform duration-300" />
                     ) : (
                       <ChevronRight className="w-5 h-5 text-white transform rotate-0 transition-transform duration-300" />
                     )}
                   </div>
                 </div>
               </div>

               {expandedSystemCard === card.id && (
                 <div className="bg-gray-50 overflow-hidden">
                   <div className="p-6">
                     <div className="space-y-3">
                       {card.functions.map((func, index) => (
                         <div 
                           key={index}
                           onClick={() => openApp(func.url)}
                           className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group transform hover:scale-[1.02] hover:-translate-y-1"
                         >
                           <div className="flex items-center space-x-3">
                             <div className={`p-2 rounded-lg ${card.bgColor} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-200`}>
                               <func.icon className={`w-4 h-4 ${card.iconColor} group-hover:scale-110 transition-transform duration-200`} />
                             </div>
                             <div>
                               <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                 {func.name}
                               </h4>
                               {func.date && (
                                 <p className="text-xs text-gray-500">{func.date}</p>
                               )}
                               {func.type && (
                                 <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1 group-hover:bg-blue-200 transition-colors duration-200">
                                   {func.type}
                                 </span>
                               )}
                               {func.category && (
                                 <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mt-1 group-hover:bg-purple-200 transition-colors duration-200">
                                   {func.category}
                                 </span>
                               )}
                             </div>
                           </div>
                           <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200 group-hover:scale-110" />
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

       {/* GALERÍA DE EVENTOS */}
       <div className="mb-16">
         <div className="flex items-center justify-between mb-6">
           <h2 className="text-2xl font-bold text-gray-900">Galería de Eventos</h2>
           <button 
             onClick={() => openApp('https://eventos.electrohuila.com')}
             className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 transform hover:scale-105"
           >
             <Calendar className="w-4 h-4" />
             <span>Ver Todos los Eventos</span>
           </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {eventGallery.map((event, index) => (
             <div 
               key={event.id}
               onClick={() => {
                 setSelectedImage(event);
                 setShowLightbox(true);
               }}
               className="relative group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
             >
               <div className="relative overflow-hidden">
                 <img 
                   src={event.image}
                   alt={event.title}
                   className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                 />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 
                 <div className="absolute top-4 left-4">
                   <span className={`px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg ${
                     event.category === 'Infraestructura' ? 'bg-blue-500' :
                     event.category === 'Capacitación' ? 'bg-green-500' :
                     event.category === 'Mantenimiento' ? 'bg-orange-500' :
                     event.category === 'Corporativo' ? 'bg-purple-500' :
                     event.category === 'Sostenibilidad' ? 'bg-teal-500' :
                     event.category === 'Celebración' ? 'bg-pink-500' :
                     event.category === 'Tecnología' ? 'bg-indigo-500' :
                     'bg-gray-500'
                   }`}>
                     {event.category}
                   </span>
                 </div>

                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                     <Eye className="w-5 h-5 text-white" />
                   </div>
                 </div>

                 <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                   <h3 className="font-bold text-white text-lg mb-2">
                     {event.title}
                   </h3>
                   <p className="text-white/90 text-sm mb-2">
                     {event.description}
                   </p>
                   <div className="flex items-center space-x-2">
                     <Clock className="w-4 h-4 text-white/80" />
                     <span className="text-white/80 text-xs">{event.date}</span>
                   </div>
                 </div>
               </div>

               <div className="p-4">
                 <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                   {event.title}
                 </h3>
                 <p className="text-gray-600 text-sm flex items-center">
                   <Calendar className="w-3 h-3 mr-1" />
                   {event.date}
                 </p>
               </div>
             </div>
           ))}
         </div>
       </div>

       {/* LIGHTBOX MODAL */}
       {showLightbox && selectedImage && (
         <div 
           className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
           onClick={() => setShowLightbox(false)}
         >
           <div 
             className="relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden shadow-2xl"
             onClick={(e) => e.stopPropagation()}
           >
             <button
               onClick={() => setShowLightbox(false)}
               className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
             >
               <X className="w-6 h-6" />
             </button>

             <img 
               src={selectedImage.image}
               alt={selectedImage.title}
               className="w-full h-96 object-cover"
             />

             <div className="p-6">
               <div className="flex items-center justify-between mb-4">
                 <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                   selectedImage.category === 'Infraestructura' ? 'bg-blue-500' :
                   selectedImage.category === 'Capacitación' ? 'bg-green-500' :
                   selectedImage.category === 'Mantenimiento' ? 'bg-orange-500' :
                   selectedImage.category === 'Corporativo' ? 'bg-purple-500' :
                   selectedImage.category === 'Sostenibilidad' ? 'bg-teal-500' :
                   selectedImage.category === 'Celebración' ? 'bg-pink-500' :
                   selectedImage.category === 'Tecnología' ? 'bg-indigo-500' :
                   'bg-gray-500'
                 }`}>
                   {selectedImage.category}
                 </span>
                 <span className="text-gray-500 text-sm flex items-center">
                   <Calendar className="w-4 h-4 mr-1" />
                   {selectedImage.date}
                 </span>
               </div>
               
               <h2 className="text-2xl font-bold text-gray-900 mb-3">
                 {selectedImage.title}
               </h2>
               
               <p className="text-gray-600 leading-relaxed">
                 {selectedImage.description}
               </p>

               <div className="flex justify-end mt-6">
                 <button 
                   onClick={() => setShowLightbox(false)}
                   className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                 >
                   Cerrar
                 </button>
               </div>
             </div>
           </div>
         </div>
       )}

       {/* REDES SOCIALES */}
       <div className="mb-16">
         <h2 className="text-2xl font-bold text-gray-900 mb-6">Síguenos en Redes Sociales</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {socialPosts.map((post, index) => (
             <div 
               key={index} 
               onClick={() => openApp(post.url)}
               className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 group h-80"
             >
               <div 
                 className="absolute inset-0 bg-cover bg-center"
                 style={{
                   backgroundImage: `url(${post.image})`,
                 }}
               >
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
               </div>

               <div className="absolute top-4 left-4 z-10">
                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                   post.platform === 'facebook' ? 'bg-blue-600' :
                   post.platform === 'instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                   'bg-red-600'
                 }`}>
                   {post.platform === 'facebook' && <Facebook className="w-6 h-6 text-white" />}
                   {post.platform === 'instagram' && <Instagram className="w-6 h-6 text-white" />}
                   {post.platform === 'youtube' && <Youtube className="w-6 h-6 text-white" />}
                 </div>
               </div>

               <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                   <ExternalLink className="w-5 h-5 text-white" />
                 </div>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                 <div className="mb-4">
                   <div className="flex items-center space-x-2 mb-2">
                     <h4 className="font-bold text-white capitalize text-lg">
                       {post.platform}
                     </h4>
                     <span className="text-white/80 text-sm">• Hace {post.time}</span>
                   </div>
                   <p className="text-white text-sm leading-relaxed mb-4">
                     {post.content}
                   </p>
                 </div>

                 <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-4 text-white/90 text-sm">
                     <div className="flex items-center space-x-1">
                       <ThumbsUp className="w-4 h-4" />
                       <span>{post.likes}</span>
                     </div>
                     <div className="flex items-center space-x-1">
                       <MessageSquare className="w-4 h-4" />
                       <span>{post.comments}</span>
                     </div>
                     <div className="flex items-center space-x-1">
                       <Share2 className="w-4 h-4" />
                       <span>{post.shares}</span>
                     </div>
                   </div>
                   
                   <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                     <span className="text-white text-xs font-medium">Ver publicación</span>
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>

     </main>
   );
 };

 return (
   <div className="min-h-screen bg-gray-50">
     {/* TÍTULO AZUL ANTES DEL HEADER */}
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
            <span className="inline-block animate-bounce">I</span>
            <span className="inline-block animate-bounce delay-75">n</span>
            <span className="inline-block animate-bounce delay-100">t</span>
            <span className="inline-block animate-bounce delay-125">r</span>
            <span className="inline-block animate-bounce delay-150">a</span>
            <span className="inline-block animate-bounce delay-175">n</span>
            <span className="inline-block animate-bounce delay-200">e</span>
            <span className="inline-block animate-bounce delay-225">t</span>
            <span className="mx-4">⚡</span>
            <span className="inline-block animate-bounce delay-250">E</span>
            <span className="inline-block animate-bounce delay-275">l</span>
            <span className="inline-block animate-bounce delay-300">e</span>
            <span className="inline-block animate-bounce delay-325">c</span>
            <span className="inline-block animate-bounce delay-350">t</span>
            <span className="inline-block animate-bounce delay-375">r</span>
            <span className="inline-block animate-bounce delay-400">o</span>
            <span className="inline-block animate-bounce delay-425">H</span>
            <span className="inline-block animate-bounce delay-450">u</span>
            <span className="inline-block animate-bounce delay-475">i</span>
            <span className="inline-block animate-bounce delay-500">l</span>
            <span className="inline-block animate-bounce delay-525">a</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
            Accede rápidamente a todas las herramientas que necesitas para tu trabajo diario
          </p>
        </div>
      </div>
      
      {/* Decoración */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-ping delay-300"></div>
      <div className="absolute top-1/2 left-8 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-150"></div>
    </div>
    
    <Header 
      onNavigate={handleNavigation}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
    {renderCurrentView()}

     {/* NOTIFICACIONES FLOTANTES */}
     {showNotifications && notifications.length > 0 && (
       <div 
         className="fixed bottom-6 right-6 z-50 w-80"
         style={{ animation: 'slideIn 0.5s ease-out' }}
       >
         <div className={`${notifications[currentNotification].color} rounded-2xl shadow-2xl overflow-hidden border-2 border-white transform transition-all duration-500 hover:scale-105 relative`}>
           
           {notifications[currentNotification].hasImage && (
             <div className="relative">
               <img 
                 src={notifications[currentNotification].image}
                 alt={notifications[currentNotification].title}
                 className="w-full h-32 object-cover"
               />
               <div className="absolute inset-0 bg-black/40"></div>
               
               <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
                 <div className="flex items-center space-x-3">
                   <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/30">
                     {React.createElement(notifications[currentNotification].icon, {
                       className: "w-5 h-5 text-white"
                     })}
                   </div>
                   <span className={`font-semibold text-sm text-white drop-shadow-md`}>
                     {notifications[currentNotification].type.toUpperCase()}
                   </span>
                 </div>
                 <button 
                   onClick={() => setShowNotifications(false)}
                   className="text-white hover:bg-white/20 p-1 rounded-full transition-colors backdrop-blur-sm"
                 >
                   <X className="w-4 h-4" />
                 </button>
               </div>
             </div>
           )}

           <div className="p-6">
             <h3 className={`font-bold text-lg mb-2 ${notifications[currentNotification].textColor}`}>
               {notifications[currentNotification].title}
             </h3>
             
             {notifications[currentNotification].type === 'obituario' && (
               <div className="text-center mb-4">
                 <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                   <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                     <span className="text-white text-2xl">✝</span>
                   </div>
                 </div>
               </div>
             )}
             
             <h4 className={`font-semibold mb-2 ${notifications[currentNotification].textColor}`}>
               {notifications[currentNotification].subtitle}
             </h4>
             <p className={`text-sm mb-4 ${notifications[currentNotification].textColor} opacity-90`}>
               {notifications[currentNotification].description}
             </p>
             <div className="flex items-center justify-between">
               <span className={`text-xs ${notifications[currentNotification].textColor} opacity-75`}>
                 {notifications[currentNotification].date}
               </span>
               <div className="flex space-x-1">
                 {notifications.map((_, index) => (
                   <button
                     key={index}
                     onClick={() => setCurrentNotification(index)}
                     className={`w-2 h-2 rounded-full transition-all ${
                       index === currentNotification 
                         ? 'bg-white' 
                         : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                     }`}
                   />
                 ))}
               </div>
             </div>
           </div>
         </div>
       </div>
     )}

     {/* BOTÓN NOTIFICACIONES OCULTAS */}
     {!showNotifications && (
       <button
         onClick={() => setShowNotifications(true)}
         className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
       >
         <Bell className="w-6 h-6" />
         <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
           {notifications.length}
         </span>
       </button>
     )}

     {/* FOOTER */}
     <footer className="bg-white border-t border-gray-200 mt-16">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
         <div className="flex flex-col md:flex-row justify-between items-center">
           <div className="flex items-center space-x-3 mb-4 md:mb-0">
             <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
               <Zap className="w-4 h-4 text-white" />
             </div>
             <span className="text-gray-600 text-sm">© 2025 ElectroHuila S.A. E.S.P.</span>
           </div>
           <div className="flex items-center space-x-6 text-sm text-gray-600">
             <button className="hover:text-gray-900 transition-colors">Soporte</button>
             <button className="hover:text-gray-900 transition-colors">Términos</button>
             <button className="hover:text-gray-900 transition-colors">Privacidad</button>
           </div>
         </div>
       </div>
     </footer>
 <ElectroHuilaKidsButton />
     {/* ESTILOS CSS */}
     <style jsx>{`
       @keyframes slideIn {
         from {
           transform: translateX(100%);
           opacity: 0;
         }
         to {
           transform: translateX(0);
           opacity: 1;
         }
       }
       
       @keyframes fadeInUp {
         from {
           opacity: 0;
           transform: translateY(20px);
         }
         to {
           opacity: 1;
           transform: translateY(0);
         }
       }

       @keyframes fadeIn {
         from { opacity: 0; }
         to { opacity: 1; }
       }

       @keyframes scaleIn {
         from {
           opacity: 0;
           transform: scale(0.9);
         }
         to {
           opacity: 1;
           transform: scale(1);
         }
       }

       .line-clamp-2 {
         display: -webkit-box;
         -webkit-line-clamp: 2;
         -webkit-box-orient: vertical;
         overflow: hidden;
       }

       .line-clamp-3 {
         display: -webkit-box;
         -webkit-line-clamp: 3;
         -webkit-box-orient: vertical;
         overflow: hidden;
       }

       .delay-75 { animation-delay: 0.075s; }
       .delay-100 { animation-delay: 0.1s; }
       .delay-125 { animation-delay: 0.125s; }
       .delay-150 { animation-delay: 0.15s; }
       .delay-175 { animation-delay: 0.175s; }
       .delay-200 { animation-delay: 0.2s; }
       .delay-225 { animation-delay: 0.225s; }
       .delay-250 { animation-delay: 0.25s; }
       .delay-275 { animation-delay: 0.275s; }
       .delay-300 { animation-delay: 0.3s; }
       .delay-325 { animation-delay: 0.325s; }
       .delay-350 { animation-delay: 0.35s; }
       .delay-375 { animation-delay: 0.375s; }
       .delay-400 { animation-delay: 0.4s; }
       .delay-425 { animation-delay: 0.425s; }
       .delay-450 { animation-delay: 0.45s; }
       .delay-475 { animation-delay: 0.475s; }
       .delay-500 { animation-delay: 0.5s; }
       .delay-525 { animation-delay: 0.525s; }
     `}</style>
   </div>
 );
};

export default ElectroHuilaIntranet;
