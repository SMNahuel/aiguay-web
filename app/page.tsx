"use client";

import { About3 } from "@/components/ui/about-3";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Link from "next/link";
import { Shield, Cpu } from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <BackgroundPaths title="AiGuay">
          <About3 />
        </BackgroundPaths>
      </div>
      
      {/* Footer con enlaces */}
      <footer className="mt-auto py-6 px-4 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>© 2024 AI Guay. Todos los derechos reservados.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Cpu className="w-4 h-4" />
              <span>Servicios</span>
            </Link>
            
            <Link 
              href="/privacy-policy"
              className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Shield className="w-4 h-4" />
              <span>Política de Privacidad</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
