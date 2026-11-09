import React from 'react';
import { SceneId } from '../types';

interface HeaderProps {
  currentScene: SceneId;
  onSelectScene: (scene: SceneId) => void;
  onOpenBlackboardGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScene,
  onSelectScene,
  onOpenBlackboardGuide,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#main-content"
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-indigo-900 transition-colors"
        >
          De la fuente al argumento
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 shrink-0" aria-label="Navegación de escenas">
          <button
            onClick={() => onSelectScene(1)}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${currentScene === 1 ? 'text-indigo-700 font-semibold underline decoration-2 underline-offset-8' : ''}`}
          >
            1. Caso Beca
          </button>
          <button
            onClick={() => onSelectScene(2)}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${currentScene === 2 ? 'text-indigo-700 font-semibold underline decoration-2 underline-offset-8' : ''}`}
          >
            2. Clasificar
          </button>
          <button
            onClick={() => onSelectScene(3)}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${currentScene === 3 ? 'text-indigo-700 font-semibold underline decoration-2 underline-offset-8' : ''}`}
          >
            3. Citar APA 7
          </button>
          <button
            onClick={() => onSelectScene(4)}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${currentScene === 4 ? 'text-indigo-700 font-semibold underline decoration-2 underline-offset-8' : ''}`}
          >
            4. Referencias
          </button>
          <button
            onClick={() => onSelectScene(5)}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${currentScene === 5 ? 'text-indigo-700 font-semibold underline decoration-2 underline-offset-8' : ''}`}
          >
            5. ODS y Argumento
          </button>
          <button
            onClick={() => onSelectScene(6)}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${currentScene === 6 ? 'text-indigo-700 font-semibold underline decoration-2 underline-offset-8' : ''}`}
          >
            6. Taller Final
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBlackboardGuide}
            className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
            aria-label="Abrir guía de integración y descarga de archivos HTML para Blackboard"
          >
            Descargar HTML / Blackboard
          </button>
        </div>
      </div>
    </header>
  );
};
