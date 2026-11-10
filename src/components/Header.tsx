import React from 'react';
import { SceneId } from '../types';
import { INSTITUTIONAL_LINKS } from '../data/educationalContent';

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
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Top micro-bar for institutional branding */}
      <div className="bg-[#15284f] text-white text-[11px] py-1.5 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wide">IPLACEX</span>
            <span aria-hidden="true" className="text-sky-400">·</span>
            <span>Subdirección de Bibliotecas & Formación Transversal</span>
            <span aria-hidden="true" className="text-sky-400">·</span>
            <span className="text-sky-200">Comunicación y Redacción</span>
          </div>
          <div className="flex items-center gap-3 text-sky-200">
            <a
              href={INSTITUTIONAL_LINKS.iplacexManualPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline decoration-sky-400 underline-offset-2 flex items-center gap-1 font-medium"
              title="Abrir Manual de Citas y Referencias IPLACEX (Febrero 2025)"
            >
              <span>📄</span> Manual APA 7 IPLACEX (PDF)
            </a>
            <span aria-hidden="true" className="text-slate-400">|</span>
            <a
              href={INSTITUTIONAL_LINKS.ods4Chile}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline decoration-sky-400 underline-offset-2"
              title="Portal oficial de las Naciones Unidas Chile para el ODS 4"
            >
              ONU ODS 4 ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (Primary Action) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-6">
        {/* Zone 1: Single brand lockup */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Iplacex Logo Emblem (4 squares: 3 grey, 1 cyan) */}
          <div className="grid grid-cols-2 gap-0.5 w-6 h-6 shrink-0" aria-hidden="true">
            <span className="bg-slate-400 rounded-xs"></span>
            <span className="bg-[#00a3e0] rounded-xs"></span>
            <span className="bg-slate-400 rounded-xs"></span>
            <span className="bg-slate-400 rounded-xs"></span>
          </div>
          <a
            href="#main-content"
            className="text-base sm:text-lg font-bold tracking-tight text-[#15284f] whitespace-nowrap hover:text-blue-900 transition-colors"
          >
            De la fuente al argumento
          </a>
        </div>

        {/* Zone 2: Concise navigation links for scenes */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-600 shrink-0" aria-label="Navegación de escenas didácticas">
          <button
            onClick={() => onSelectScene(1)}
            className={`whitespace-nowrap transition-colors hover:text-[#15284f] ${
              currentScene === 1 ? 'text-[#15284f] font-bold border-b-2 border-[#15284f] pb-1' : ''
            }`}
          >
            1. Caso Beca
          </button>
          <button
            onClick={() => onSelectScene(2)}
            className={`whitespace-nowrap transition-colors hover:text-[#15284f] ${
              currentScene === 2 ? 'text-[#15284f] font-bold border-b-2 border-[#15284f] pb-1' : ''
            }`}
          >
            2. Clasificar
          </button>
          <button
            onClick={() => onSelectScene(3)}
            className={`whitespace-nowrap transition-colors hover:text-[#15284f] ${
              currentScene === 3 ? 'text-[#15284f] font-bold border-b-2 border-[#15284f] pb-1' : ''
            }`}
          >
            3. Cita APA 7
          </button>
          <button
            onClick={() => onSelectScene(4)}
            className={`whitespace-nowrap transition-colors hover:text-[#15284f] ${
              currentScene === 4 ? 'text-[#15284f] font-bold border-b-2 border-[#15284f] pb-1' : ''
            }`}
          >
            4. Referencias
          </button>
          <button
            onClick={() => onSelectScene(5)}
            className={`whitespace-nowrap transition-colors hover:text-[#15284f] ${
              currentScene === 5 ? 'text-[#15284f] font-bold border-b-2 border-[#15284f] pb-1' : ''
            }`}
          >
            5. ODS 4 y Argumento
          </button>
          <button
            onClick={() => onSelectScene(6)}
            className={`whitespace-nowrap transition-colors hover:text-[#15284f] ${
              currentScene === 6 ? 'text-[#15284f] font-bold border-b-2 border-[#15284f] pb-1' : ''
            }`}
          >
            6. Taller y Rúbrica
          </button>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenBlackboardGuide}
            className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-[#15284f] hover:bg-[#1e3a8a] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:outline-none"
            aria-label="Abrir panel de fuentes oficiales, manual IPLACEX y descarga para Blackboard"
          >
            Fuentes & Blackboard
          </button>
        </div>
      </div>
    </header>
  );
};
