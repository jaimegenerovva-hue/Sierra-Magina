import { useState, useRef } from 'react';
import { 
  Home, 
  List, 
  Share2, 
  Bed, 
  ShowerHead, 
  Ruler, 
  Maximize, 
  CheckCircle2, 
  Wallet, 
  Calculator, 
  Phone, 
  Mail, 
  MessageCircle, 
  Globe, 
  MapPin, 
  Compass, 
  X,
  Building2,
  HelpCircle,
  Eye,
  Map as MapIcon,
  Rss,
  AtSign,
  Car,
  ShieldCheck,
  ShoppingBag,
  Trees,
  ChevronLeft,
  ChevronRight,
  Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PROPERTY_IMAGES = [
  "https://fotos15.apinmo.com/3503/15632752/29-1.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-2.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-3.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-4s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-5.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-6.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-7.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-8.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-9.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-10.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-11.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-12.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-13s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-14s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-15s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-16s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-17s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-18s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-19s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-20s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-21s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-22s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-23s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-24s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-25s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-26s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-27s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-29s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-30s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-31s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-32s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-33s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-34s.jpg",
  "https://fotos15.apinmo.com/3503/15632752/29-35s.jpg"
];

export default function App() {
  const [showWidget, setShowWidget] = useState(true);
  const [copied, setCopied] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % PROPERTY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + PROPERTY_IMAGES.length) % PROPERTY_IMAGES.length);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar el enlace:', err);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="bg-primary shadow-md relative z-[150]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-12">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="https://www.comprarcasasevilla.com/img/header/logo.png" 
                alt="ComprarCasa Sevilla" 
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-lg md:text-xl font-black tracking-tight text-white uppercase">ComprarCasa Sevilla</span>');
                }}
              />
            </a>
            <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-white uppercase tracking-tight">
              <a className="hover:text-white/80 transition-colors" href="https://suhogar.comprarcasa.com/landing/valorador">Valora tu vivienda</a>
              <a className="hover:text-primary transition-colors bg-white/10 px-3 py-1 rounded-full" href="https://suhogar.comprarcasa.com/landing/calculadora-hipoteca">Calcula tu hipoteca</a>
              <a className="hover:text-white/80 transition-colors" href="https://suhogar.comprarcasa.com/noticias">Noticias</a>
              <a className="hover:text-white/80 transition-colors" href="https://suhogar.comprarcasa.com/contacto">Contacto</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://suhogar.comprarcasa.com/inmuebles"
              className="hidden md:flex bg-white hover:bg-slate-50 text-primary px-5 py-2.5 rounded text-sm font-bold transition-all items-center gap-2 shadow-lg"
            >
              <List className="w-4 h-4" />
              Inmuebles
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary border-t border-white/10 overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-4 text-[14px] font-bold text-white uppercase tracking-tight">
                <a className="py-2 hover:text-white/80 transition-colors border-b border-white/5" href="https://suhogar.comprarcasa.com/landing/valorador">Valora tu vivienda</a>
                <a className="py-2 hover:text-white/80 transition-colors border-b border-white/5" href="https://suhogar.comprarcasa.com/landing/calculadora-hipoteca">Calcula tu hipoteca</a>
                <a className="py-2 hover:text-white/80 transition-colors border-b border-white/5" href="https://suhogar.comprarcasa.com/noticias">Noticias</a>
                <a className="py-2 hover:text-white/80 transition-colors" href="https://suhogar.comprarcasa.com/contacto">Contacto</a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Title and Price Section */}
        <div className="mb-6">
          <h1 className="text-[24px] md:text-[32px] font-bold text-slate-900 mb-6 leading-tight">Casa en venta en Bollullos de la Mitación, Sevilla</h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-[28px] md:text-[42px] font-bold text-primary leading-none whitespace-nowrap">320.000 €</span>
              <div className="relative">
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors border border-slate-200 px-4 py-1.5 rounded text-[13px] font-medium"
                >
                  <Share2 className="w-4 h-4" />
                  Comparte
                </button>
                <AnimatePresence>
                  {copied && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute left-1/2 -translate-x-1/2 -top-10 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded shadow-xl whitespace-nowrap z-10"
                    >
                      Enlace copiado
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-6 overflow-x-auto md:overflow-visible hide-scrollbar pb-2 md:pb-0">
              <div className="flex flex-col items-center min-w-[60px]">
                <Bed className="text-slate-400 w-5 h-5 md:w-6 h-6" />
                <span className="text-[12px] md:text-[13px] font-bold mt-1 leading-none">5</span>
                <span className="text-[8px] md:text-[9px] uppercase font-bold text-slate-400 tracking-wider">Habitaciones</span>
              </div>
              <div className="flex flex-col items-center min-w-[60px]">
                <ShowerHead className="text-slate-400 w-5 h-5 md:w-6 h-6" />
                <span className="text-[12px] md:text-[13px] font-bold mt-1 leading-none">3</span>
                <span className="text-[8px] md:text-[9px] uppercase font-bold text-slate-400 tracking-wider">Baños</span>
              </div>
              <div className="flex flex-col items-center min-w-[60px]">
                <Ruler className="text-slate-400 w-5 h-5 md:w-6 h-6" />
                <span className="text-[12px] md:text-[13px] font-bold mt-1 leading-none">199 m²</span>
                <span className="text-[8px] md:text-[9px] uppercase font-bold text-slate-400 tracking-wider">Construidos</span>
              </div>
              <div className="flex flex-col items-center min-w-[60px]">
                <Maximize className="text-slate-400 w-5 h-5 md:w-6 h-6" />
                <span className="text-[12px] md:text-[13px] font-bold mt-1 leading-none">250 m²</span>
                <span className="text-[8px] md:text-[9px] uppercase font-bold text-slate-400 tracking-wider">Parcela</span>
              </div>
              <div className="flex flex-col items-center min-w-[60px]">
                <CheckCircle2 className="text-slate-400 w-5 h-5 md:w-6 h-6" />
                <span className="text-[12px] md:text-[13px] font-bold mt-1 leading-none">Buen estado</span>
                <span className="text-[8px] md:text-[9px] uppercase font-bold text-slate-400 tracking-wider">Estado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-2 h-auto md:h-[500px] mb-12 overflow-hidden rounded-xl">
          <div className="col-span-2 row-span-1 md:row-span-2 relative h-[250px] md:h-full">
            <img 
              alt="Fachada principal" 
              className="w-full h-full object-cover" 
              src="https://fotos15.apinmo.com/3503/15632752/29-1.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-1 row-span-1 h-[120px] md:h-full">
            <img 
              alt="Salón comedor" 
              className="w-full h-full object-cover" 
              src="https://fotos15.apinmo.com/3503/15632752/29-9.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-1 row-span-1 h-[120px] md:h-full">
            <img 
              alt="Dormitorio principal" 
              className="w-full h-full object-cover" 
              src="https://fotos15.apinmo.com/3503/15632752/29-23s.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-1 row-span-1 h-[120px] md:h-full">
            <img 
              alt="Cocina equipada" 
              className="w-full h-full object-cover" 
              src="https://fotos15.apinmo.com/3503/15632752/29-35s.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-1 row-span-1 h-[120px] md:h-full">
            <img 
              alt="Detalle vivienda" 
              className="w-full h-full object-cover" 
              src="https://fotos15.apinmo.com/3503/15632752/29-19s.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="mb-12 relative group/gallery">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 text-center mb-8 flex items-center justify-center gap-4">
            <span className="h-px bg-slate-200 grow max-w-[200px]"></span>
            Galería de fotos
            <span className="h-px bg-slate-200 grow max-w-[200px]"></span>
          </h3>
          
          <div className="relative px-6 md:px-2">
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-2 text-slate-600 hover:text-primary transition-all opacity-100 md:opacity-0 group-hover/gallery:opacity-100 flex border border-slate-100"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 h-5" />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-2 text-slate-600 hover:text-primary transition-all opacity-100 md:opacity-0 group-hover/gallery:opacity-100 flex border border-slate-100"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4 md:w-5 h-5" />
            </button>

            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x scroll-smooth"
            >
              {PROPERTY_IMAGES.map((src, idx) => (
                <div 
                  key={idx} 
                  className="flex-none w-48 h-32 rounded bg-slate-100 overflow-hidden snap-start cursor-pointer hover:opacity-90 transition-opacity relative group"
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                    src={src}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <Maximize className="text-white opacity-0 group-hover:opacity-100 w-5 h-5 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description and Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-8">
          <div className="lg:col-span-2">
            <div className="space-y-6 text-[15px] leading-relaxed text-slate-600">
              <p>Te presentamos esta fantástica casa situada en Bollullos de la Mitación, en pleno Aljarafe sevillano, una ubicación ideal para quienes buscan tranquilidad, amplitud y calidad de vida sin renunciar a una buena conexión con Sevilla. La vivienda se asienta sobre una parcela de aproximadamente 250 m², ofreciendo privacidad, comodidad y un entorno perfecto para disfrutar en familia.</p>
              <p>Distribuida en varias plantas, la vivienda destaca por su luminosidad, su amplitud interior y la versatilidad de sus espacios. En planta baja cuenta con recibidor, un dormitorio versátil, baño completo, cocina y un salón luminoso con salida directa al jardín trasero. En la primera planta se encuentran tres dormitorios y dos baños, uno de ellos en suite, ofreciendo una distribución cómoda y funcional para el día a día.</p>
              <p>Como valor añadido, la planta ático dispone de un espacio diáfano con terraza privada, ideal como zona de trabajo, ocio o descanso. Además, la vivienda cuenta con placas solares, garaje incluido, trastero y varios espacios de almacenaje. El jardín ofrece incluso posibilidad de incorporar una piscina, convirtiendo esta propiedad en una opción muy completa para quienes buscan luz, privacidad, sostenibilidad y potencial en una misma casa.</p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-[#F8F9FA] rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-primary px-6 py-3.5 text-center">
                <h4 className="text-white font-bold tracking-wider uppercase text-[13px]">Magdalena Gerente de Comprarcasa Suhogar</h4>
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-8">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src="https://i.ibb.co/3yvvt76w/imagen.jpg" 
                      alt="Magdalena - Gerente" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-10 text-center">
                  <a className="flex flex-col items-center gap-3" href="tel:+34635475213">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] text-slate-500 font-medium leading-tight">Realiza una llamada</span>
                  </a>
                  <a className="flex flex-col items-center gap-3" href="mailto:magdalena@suhogarsevilla.com">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] text-slate-500 font-medium leading-tight">Contacta por email</span>
                  </a>
                  <a className="flex flex-col items-center gap-3" href="https://wa.me/34635475213" target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-green-500 hover:text-green-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] text-slate-500 font-medium leading-tight">Contacta por Whatsapp</span>
                  </a>
                  <a className="flex flex-col items-center gap-3" href="https://suhogar.comprarcasa.com/" target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] text-slate-500 font-medium leading-tight">Visita nuestra web</span>
                  </a>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-[13px] text-slate-600">
                    <MapPin className="text-slate-400 w-5 h-5 shrink-0" />
                    <span>C. Chile, 104, 41930 Bormujos, Sevilla</span>
                  </div>
                  <div className="flex items-center gap-3 text-[13px] text-slate-600">
                    <Phone className="text-slate-400 w-5 h-5 shrink-0" />
                    <span className="font-bold">+34 635 47 52 13</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section - Editorial & Functional */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Location Info */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-500 rounded-full mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Ubicación y Entorno</span>
              </div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Vivir en el Aljarafe: <br/>
                Tranquilidad y Conexión
              </h3>
              
              <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
                Bollullos de la Mitación se ha consolidado como uno de los municipios más demandados del Aljarafe sevillano. Su carácter residencial, rodeado de naturaleza pero con todos los servicios necesarios, lo convierte en el lugar ideal para familias que buscan calidad de vida.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-primary">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Conexión Sevilla</h4>
                    <p className="text-xs text-slate-500">Acceso rápido a la A-49, a escasos 15-20 minutos de la capital.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Zona Residencial</h4>
                    <p className="text-xs text-slate-500">Un entorno seguro, tranquilo y con excelente privacidad.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-primary">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Servicios Cercanos</h4>
                    <p className="text-xs text-slate-500">Supermercados, colegios y centros de salud a pocos minutos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-primary">
                    <Trees className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Entorno Natural</h4>
                    <p className="text-xs text-slate-500">Rodeado de zonas verdes y espacios para el deporte al aire libre.</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/1Y2ZJP8VnhFBS7xR8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1 hover:bg-red-600"
              >
                <MapIcon className="w-5 h-5" />
                Abrir en Google Maps
              </a>
            </div>

            {/* Right Column: Real Google Maps Embed */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-xl border border-slate-100 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1941.5680602171026!2d-6.137215861876331!3d37.33403049654471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12123c4d1ccaa3%3A0xf255edca99a05063!2sC.%20Sierra%20M%C3%A1gina%2C%201%2C%2041110%20Bollullos%20de%20la%20Mitaci%C3%B3n%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1776157850275!5m2!1ses!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación real de la vivienda"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary pt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="https://www.comprarcasasevilla.com/img/header/logo.png" 
                  alt="ComprarCasa Sevilla" 
                  className="h-12 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized text if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-xl font-black tracking-tight text-white uppercase">ComprarCasa Sevilla</span>');
                  }}
                />
              </div>
              <p className="text-[13px] text-white/80 leading-relaxed">
                Soluciones inmobiliarias al alcance de todos. Confía en ComprarCasa Sevilla para encontrar tu hogar ideal con la mayor garantía y profesionalidad.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="text-[11px] font-bold uppercase tracking-widest text-white">Contacto</h5>
              <ul className="space-y-3 text-[13px] text-white/70">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white/50" />
                  magdalena@suhogarsevilla.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/50" />
                  +34 635 47 52 13
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white/50 shrink-0" />
                  <span>C. Chile, 104, 41930 Bormujos, Sevilla</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[11px] font-bold uppercase tracking-widest text-white">La empresa</h5>
              <ul className="space-y-2 text-[13px] text-white/70">
                <li><a className="hover:text-white flex items-center gap-2 transition-colors" href="https://suhogar.comprarcasa.com/contacto"><HelpCircle className="w-4 h-4" /> Contacto</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[11px] font-bold uppercase tracking-widest text-white">Simuladores</h5>
              <ul className="text-[13px] text-white/70 space-y-3 font-medium">
                <li>
                  <a className="hover:text-white flex items-center gap-2 transition-colors" href="https://suhogar.comprarcasa.com/landing/calculadora-hipoteca">
                    <Calculator className="w-4 h-4 text-white/50" />
                    Calcula tu hipoteca
                  </a>
                </li>
                <li>
                  <a className="hover:text-white flex items-center gap-2 transition-colors" href="https://suhogar.comprarcasa.com/landing/valorador">
                    <Ruler className="w-4 h-4 text-white/50" />
                    Valora tu vivienda
                  </a>
                </li>
                <li>
                  <a className="hover:text-white flex items-center gap-2 transition-colors" href="https://suhogar.comprarcasa.com/noticias">
                    <Rss className="w-4 h-4 text-white/50" />
                    Noticias
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/60 uppercase font-bold tracking-widest pb-8">
            <div className="text-white/80 text-center md:text-left">© 2024 COMPRARCASA. TODOS LOS DERECHOS RESERVADOS.</div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a className="hover:text-white transition-colors" href="#">Aviso legal</a>
              <a className="hover:text-white transition-colors" href="#">Política de cookies</a>
              <a className="hover:text-white transition-colors" href="#">LOPD</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Widget */}
      {showWidget && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-[100] w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden hidden md:block"
        >
          <div className="p-4 border-b border-primary flex justify-between items-center bg-primary text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-[12px] font-bold">¡Hola! 👋 Bienvenido a ComprarCasa</span>
            </div>
            <button 
              onClick={() => setShowWidget(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-5 space-y-2.5">
            <p className="text-[11px] text-slate-500 leading-normal mb-1">¿Estás interesado en este Casa en venta en Bollullos de la Mitación, Aljarafe, Sevilla?</p>
            <a 
              href="mailto:magdalena@suhogarsevilla.com?subject=Interesado%20en%20la%20vivienda%20de%20Bollullos%20de%20la%20Mitaci%C3%B3n"
              className="block w-full py-2.5 bg-primary text-white rounded-lg text-[11px] font-bold hover:bg-red-600 transition-colors text-center"
            >
              ¡Sí, estoy interesado!
            </a>
            <a 
              href="mailto:magdalena@suhogarsevilla.com?subject=Consulta%20sobre%20la%20vivienda%20de%20Bollullos%20de%20la%20Mitaci%C3%B3n"
              className="block w-full py-2.5 bg-slate-50 text-slate-700 border border-slate-100 rounded-lg text-[11px] font-bold hover:bg-slate-100 transition-colors text-center"
            >
              Tengo una pregunta
            </a>
            <a 
              href="tel:+34635475213"
              className="w-full py-2.5 bg-[#25D366] text-white rounded-lg text-[11px] font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Quiero vender mi vivienda
            </a>
          </div>
        </motion.div>
      )}

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-4 py-3 flex gap-3 z-[60]">
        <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold text-sm shadow-lg">
          CONTACTAR
        </button>
        <button className="w-14 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-lg shadow-lg">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[210]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[210] bg-white/10 p-4 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[210] bg-white/10 p-4 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.img 
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={PROPERTY_IMAGES[selectedImageIndex]} 
                alt={`Property ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                {selectedImageIndex + 1} / {PROPERTY_IMAGES.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
