import { MessageSquare, BarChart3, Zap, Brain, Shield, Globe } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: MessageSquare,
      title: "Chat Inteligente",
      description: "Conversaciones naturales con nuestra IA avanzada para resolver dudas, generar contenido y obtener asistencia personalizada.",
      features: ["Respuestas contextuales", "Múltiples idiomas", "Memoria de conversación"],
      href: "/chat",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      description: "Procesamiento y análisis inteligente de datos para obtener insights valiosos y tomar decisiones informadas.",
      features: ["Visualizaciones automáticas", "Patrones predictivos", "Informes detallados"],
      href: "/services/analysis",
      color: "green"
    },
    {
      icon: Zap,
      title: "Automatización",
      description: "Automatiza tareas repetitivas y optimiza procesos mediante workflows inteligentes y adaptativos.",
      features: ["Flujos personalizables", "Integración API", "Monitoreo en tiempo real"],
      href: "/services/automation",
      color: "yellow"
    },
    {
      icon: Brain,
      title: "Procesamiento de Lenguaje",
      description: "Análisis avanzado de texto, traducción, resumen y generación de contenido de alta calidad.",
      features: ["Análisis de sentimientos", "Traducción automática", "Generación de texto"],
      href: "/services/nlp",
      color: "purple"
    },
    {
      icon: Shield,
      title: "IA Segura",
      description: "Servicios de IA con los más altos estándares de seguridad y privacidad para datos sensibles.",
      features: ["Encriptación end-to-end", "Cumplimiento GDPR", "Auditorías de seguridad"],
      href: "/services/secure",
      color: "red"
    },
    {
      icon: Globe,
      title: "API Enterprise",
      description: "Integración empresarial completa con APIs escalables y documentación exhaustiva.",
      features: ["99.9% uptime", "Soporte 24/7", "Documentación completa"],
      href: "/services/api",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400",
      green: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400",
      yellow: "from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400",
      purple: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400",
      red: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400",
      indigo: "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div>
      {/* Introducción */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Potencia tu Negocio con IA
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Descubre nuestro ecosistema completo de servicios de inteligencia artificial 
            diseñados para transformar la manera en que trabajas y tomas decisiones.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Precisión</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Disponibilidad</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">1M+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Consultas/día</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Idiomas</div>
          </div>
        </div>
      </div>

      {/* Grid de Servicios */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(service.color)} rounded-xl p-6 border hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm`}>
                  <Icon className={`w-6 h-6 ${service.color === 'blue' ? 'text-blue-600' : 
                    service.color === 'green' ? 'text-green-600' : 
                    service.color === 'yellow' ? 'text-yellow-600' : 
                    service.color === 'purple' ? 'text-purple-600' : 
                    service.color === 'red' ? 'text-red-600' : 'text-indigo-600'}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href={service.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600"
              >
                <span>Explorar Servicio</span>
                <MessageSquare className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            ¿Listo para Transformar tu Negocio?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Comienza tu viaje hacia la automatización inteligente. Nuestro equipo de expertos 
            está listo para ayudarte a implementar la solución perfecta para tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chat"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Comenzar Ahora
            </Link>
            <a
              href="mailto:services@aiguay.com"
              className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Contactar Ventas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 