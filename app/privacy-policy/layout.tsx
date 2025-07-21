import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Guay - Política de Privacidad",
  description: "Política de privacidad y protección de datos de AI Guay",
};

export default function PrivacyPolicyLayout({
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
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/20">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Política de Privacidad
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Cómo protegemos y manejamos tu información personal
              </p>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-8 md:p-12">
              {children}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p className="mt-2">
              ¿Tienes preguntas? Contáctanos en{" "}
              <a 
                href="mailto:privacy@aiguay.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                privacy@aiguay.com
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
} 