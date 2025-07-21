import { Calendar, MapPin, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Introducción */}
      <div className="not-prose mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar className="w-4 h-4" />
          <span>Vigente desde: {new Date().toLocaleDateString('es-ES')}</span>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Resumen Ejecutivo
          </h2>
          <p className="text-blue-800 dark:text-blue-200">
            En AI Guay valoramos y respetamos tu privacidad. Esta política explica cómo recopilamos, 
            usamos y protegemos tu información personal cuando utilizas nuestros servicios de 
            inteligencia artificial.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <h2>1. Información que Recopilamos</h2>
      
      <h3>1.1 Información Proporcionada Directamente</h3>
      <ul>
        <li><strong>Datos de registro:</strong> Nombre, dirección de correo electrónico</li>
        <li><strong>Mensajes del chat:</strong> Conversaciones y consultas realizadas a nuestra IA</li>
        <li><strong>Información de perfil:</strong> Preferencias y configuraciones personales</li>
      </ul>

      <h3>1.2 Información Recopilada Automáticamente</h3>
      <ul>
        <li><strong>Datos técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo</li>
        <li><strong>Datos de uso:</strong> Páginas visitadas, tiempo de sesión, funciones utilizadas</li>
        <li><strong>Cookies:</strong> Pequeños archivos para mejorar la experiencia del usuario</li>
      </ul>

      <h2>2. Cómo Utilizamos tu Información</h2>
      
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
            Servicios Principales
          </h4>
          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
            <li>• Proporcionar respuestas de IA</li>
            <li>• Personalizar tu experiencia</li>
            <li>• Mejorar nuestros algoritmos</li>
          </ul>
        </div>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
            Comunicaciones
          </h4>
          <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
            <li>• Notificaciones de servicio</li>
            <li>• Actualizaciones importantes</li>
            <li>• Soporte al cliente</li>
          </ul>
        </div>
      </div>

      <h2>3. Compartir Información</h2>
      
      <div className="not-prose bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-6">
        <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
          Compromiso de No Venta
        </h3>
        <p className="text-red-800 dark:text-red-200">
          <strong>Nunca vendemos tu información personal.</strong> Solo compartimos datos en 
          circunstancias muy limitadas, como requisitos legales o para proteger la seguridad 
          de nuestros usuarios.
        </p>
      </div>

      <h2>4. Seguridad de Datos</h2>
      
      <h3>4.1 Medidas de Protección</h3>
      <ul>
        <li><strong>Encriptación:</strong> Todos los datos están encriptados en tránsito y en reposo</li>
        <li><strong>Acceso limitado:</strong> Solo personal autorizado puede acceder a la información</li>
        <li><strong>Monitoreo:</strong> Supervisión continua de la seguridad del sistema</li>
        <li><strong>Auditorías:</strong> Revisiones regulares de nuestras prácticas de seguridad</li>
      </ul>

      <h2>5. Tus Derechos</h2>
      
      <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Acceso</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Solicitar una copia de tu información personal
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Corrección</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Actualizar o corregir información incorrecta
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Eliminación</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Solicitar la eliminación de tu cuenta y datos
          </p>
        </div>
      </div>

      <h2>6. Cookies y Tecnologías Similares</h2>
      
      <p>
        Utilizamos cookies para mejorar tu experiencia en nuestra plataforma. Puedes 
        controlar las cookies a través de la configuración de tu navegador.
      </p>

      <h3>6.1 Tipos de Cookies</h3>
      <ul>
        <li><strong>Esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
        <li><strong>Analíticas:</strong> Nos ayudan a entender cómo se usa nuestro servicio</li>
        <li><strong>Preferencias:</strong> Recuerdan tus configuraciones personales</li>
      </ul>

      <h2>7. Retención de Datos</h2>
      
      <p>
        Mantenemos tu información personal solo el tiempo necesario para proporcionarte 
        nuestros servicios y cumplir con nuestras obligaciones legales. Los mensajes del 
        chat se conservan durante un máximo de 2 años para mejorar nuestros servicios.
      </p>

      <h2>8. Transferencias Internacionales</h2>
      
      <p>
        Tus datos pueden ser procesados en servidores ubicados fuera de tu país de residencia. 
        Garantizamos que todas las transferencias cumplen con las regulaciones de protección 
        de datos aplicables.
      </p>

      <h2>9. Menores de Edad</h2>
      
      <div className="not-prose bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 my-6">
        <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
          Protección de Menores
        </h3>
        <p className="text-purple-800 dark:text-purple-200">
          Nuestros servicios están dirigidos a usuarios mayores de 18 años. No recopilamos 
          intencionalmente información personal de menores de 18 años sin el consentimiento 
          parental verificable.
        </p>
      </div>

      <h2>10. Cambios a esta Política</h2>
      
      <p>
        Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
        sobre cambios significativos por correo electrónico o a través de nuestro servicio.
      </p>

      <h2>11. Contacto</h2>
      
      <div className="not-prose bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
        <h3 className="font-semibold mb-4">¿Preguntas sobre esta política?</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">privacy@aiguay.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium">Dirección</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Departamento de Privacidad<br />
                AI Guay Corp.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose text-center pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Esta política de privacidad está diseñada para ser transparente y fácil de entender. 
          Nos comprometemos a proteger tu privacidad y a manejar tu información de manera responsable.
        </p>
      </div>
    </div>
  );
} 