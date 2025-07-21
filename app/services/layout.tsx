import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cpu, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Guay - Servicios",
  description: "Descubre todos nuestros servicios de inteligencia artificial",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
              <div className="relative">
                <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <Sparkles className="w-4 h-4 text-purple-500 absolute -top-1 -right-1" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nuestros Servicios
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Soluciones de IA diseñadas para potenciar tu productividad
              </p>
            </div>
          </div>
        </header>

        {/* Navigation Menu */}
        <nav className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/services"
              className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Todos los Servicios
            </Link>
            <Link
              href="/services/chat"
              className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Chat IA
            </Link>
            <Link
              href="/services/analysis"
              className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Análisis
            </Link>
            <Link
              href="/services/automation"
              className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Automatización
            </Link>
          </div>
        </nav>

        {/* Main content area */}
        <main className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-8 md:p-12">
              {children}
            </div>
          </div>
        </main>

        {/* Features Banner */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                IA Avanzada
              </h3>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Tecnología de última generación para resultados precisos y naturales
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-green-900 dark:text-green-100">
                Procesamiento Rápido
              </h3>
            </div>
            <p className="text-sm text-green-800 dark:text-green-200">
              Respuestas instantáneas con la máxima eficiencia computacional
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-white rotate-45" />
              </div>
              <h3 className="font-semibold text-purple-900 dark:text-purple-100">
                Fácil Integración
              </h3>
            </div>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              Implementa nuestros servicios en tu flujo de trabajo sin complicaciones
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>¿Necesitas un servicio personalizado?</p>
            <p className="mt-2">
              Contáctanos en{" "}
              <a 
                href="mailto:services@aiguay.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                services@aiguay.com
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
} 