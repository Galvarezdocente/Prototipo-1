import React, { useState } from 'react';
import { REFERENCE_ELEMENTS } from '../data/educationalContent';

interface Scene4ReferenceProps {
  onComplete: () => void;
  onContinue: () => void;
  onBack: () => void;
}

export const Scene4Reference: React.FC<Scene4ReferenceProps> = ({
  onComplete,
  onContinue,
  onBack,
}) => {
  const [revealedParts, setRevealedParts] = useState<Set<string>>(new Set(['ref-who']));
  const [selectedErrorQuiz, setSelectedErrorQuiz] = useState<string | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);

  const togglePart = (id: string) => {
    const updated = new Set(revealedParts);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setRevealedParts(updated);

    if (updated.size === REFERENCE_ELEMENTS.length) {
      onComplete();
    }
  };

  const revealAll = () => {
    const all = new Set(REFERENCE_ELEMENTS.map((el) => el.id));
    setRevealedParts(all);
    onComplete();
  };

  const handleReset = () => {
    setRevealedParts(new Set(['ref-who']));
    setSelectedErrorQuiz(null);
    setShowHint(false);
  };

  const isComplete = revealedParts.size === REFERENCE_ELEMENTS.length;

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
          Escena 4 · Construcción de la Referencia Bibliográfica
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
          Las 4 Preguntas Clave de APA 7 (Manual IPLACEX 2025)
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
          Al final de tu carta de postulación debes incluir la sección <strong>Referencias</strong>. En el estándar APA 7 para páginas web institucionales, cada entrada responde a cuatro preguntas indispensables:
        </p>
      </div>

      {/* 4 Pillars Interactive Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {REFERENCE_ELEMENTS.map((element, idx) => {
          const isRevealed = revealedParts.has(element.id);

          return (
            <div
              key={element.id}
              className={`p-4 rounded-xl border transition-all ${
                isRevealed
                  ? 'bg-white border-indigo-300 shadow-sm ring-1 ring-indigo-200'
                  : 'bg-slate-50 border-slate-200 opacity-90'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase text-indigo-700">
                  Elemento {idx + 1} · {element.questionLabel}
                </span>
                <button
                  onClick={() => togglePart(element.id)}
                  className={`text-xs px-2 py-0.5 rounded font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
                    isRevealed
                      ? 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {isRevealed ? '✓ Activado' : '+ Explorar'}
                </button>
              </div>

              <h3 className="font-bold text-slate-900 text-sm mb-1">
                {element.label}
              </h3>

              {isRevealed ? (
                <div className="mt-2 space-y-2">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded font-mono text-xs text-slate-900">
                    {element.question === 'que' ? (
                      <em>{element.value}</em>
                    ) : (
                      element.value
                    )}
                    {element.question === 'cuando' && (
                      <span className="ml-2 inline-block bg-amber-100 text-amber-800 text-[10px] font-semibold px-1 rounded border border-amber-300">
                        [Pendiente de verificar por docente]
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {element.formatNote}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic mt-1">
                  Haz clic en 'Explorar' para revisar su formato normativo y puntuación.
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Consolidated Reference Preview */}
      <div className="bg-slate-900 text-slate-100 rounded-xl p-5 shadow-inner space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-2">
          <span className="text-xs uppercase font-mono tracking-wider text-indigo-300">
            Vista Previa de la Sección 'Referencias' en tu Carta
          </span>
          <span className="text-xs text-slate-400">
            {revealedParts.size} de 4 datos ensamblados
          </span>
        </div>

        <div className="font-mono text-xs sm:text-sm leading-relaxed p-3 bg-slate-950/80 rounded border border-slate-800 break-words">
          <span className="text-emerald-400">
            {revealedParts.has('ref-who') ? 'Organización de las Naciones Unidas. ' : '[Autor institucional] '}
          </span>
          <span className="text-sky-300">
            {revealedParts.has('ref-when') ? '(2023). ' : '(Año). '}
          </span>
          <span className="text-amber-300 italic">
            {revealedParts.has('ref-what')
              ? 'Objetivo 11: Lograr que las ciudades sean más inclusivas, seguras, resilientes y sostenibles. '
              : '[Título de la página en cursiva]. '}
          </span>
          <span className="text-slate-200">
            {revealedParts.has('ref-where')
              ? 'Naciones Unidas. https://www.un.org/sustainabledevelopment/es/cities/'
              : '[Sitio web. URL]'}
          </span>
        </div>

        <p className="text-[11px] text-slate-400">
          * Observa que la URL no lleva punto final para preservar la funcionalidad del hipervínculo en documentos digitales.
        </p>
      </div>

      {/* Common Mistake Quiz */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
        <span className="text-xs font-bold uppercase text-indigo-700">
          Alerta de Errores Frecuentes en Blackboard
        </span>
        <h3 className="font-bold text-slate-900 text-sm sm:text-base">
          ¿Cuál de los siguientes es un error típico en la referencia que debes evitar?
        </h3>

        <div className="space-y-2">
          <button
            onClick={() => setSelectedErrorQuiz('recuperado')}
            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
              selectedErrorQuiz === 'recuperado'
                ? 'bg-indigo-50 border-indigo-400 font-semibold text-indigo-950'
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
            }`}
          >
            A) Escribir <em>"Recuperado el 15 de marzo de 2024 de https://..."</em> en una página institucional estable.
          </button>
          <button
            onClick={() => setSelectedErrorQuiz('sin-cursiva')}
            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
              selectedErrorQuiz === 'sin-cursiva'
                ? 'bg-indigo-50 border-indigo-400 font-semibold text-indigo-950'
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
            }`}
          >
            B) No aplicar cursiva al título de la página web del ODS.
          </button>
          <button
            onClick={() => setSelectedErrorQuiz('ambos')}
            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
              selectedErrorQuiz === 'ambos'
                ? 'bg-emerald-50 border-emerald-400 font-semibold text-emerald-950'
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
            }`}
          >
            C) Ambas opciones (A y B) son errores comunes sancionados en APA 7 (Manual IPLACEX).
          </button>
        </div>

        {selectedErrorQuiz && (
          <div
            className={`p-3 rounded-lg text-xs leading-relaxed border ${
              selectedErrorQuiz === 'ambos'
                ? 'bg-emerald-50 text-emerald-950 border-emerald-200'
                : 'bg-amber-50 text-amber-950 border-amber-200'
            }`}
            aria-live="polite"
          >
            <strong>{selectedErrorQuiz === 'ambos' ? '¡Exacto! ' : 'Ten en cuenta: '}</strong>
            En APA 7 séptima edición se eliminó la fórmula "Recuperado de" para páginas estables con enlace directo, y el título de la página web o documento siempre debe ir en <em>cursiva</em>.
          </div>
        )}
      </div>

      {/* Hints & Actions */}
      {showHint && (
        <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-xl text-xs sm:text-sm text-yellow-950 space-y-1">
          <strong className="block text-yellow-900 font-bold">💡 Pista metodológica:</strong>
          <p>
            Recuerda el orden invariable: <strong>¿Quién?</strong> (Autor corporativo) + <strong>¿Cuándo?</strong> (Año o s.f.) + <strong>¿Qué?</strong> (Título en cursiva) + <strong>¿Dónde?</strong> (Sitio web y URL).
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="text-xs text-slate-700">
          Componentes activos: <strong>{revealedParts.size} de 4</strong>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowHint(!showHint)}
            className="px-3.5 py-1.5 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 border border-yellow-300 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
          >
            {showHint ? 'Ocultar Pista' : 'Pista 💡'}
          </button>
          <button
            onClick={revealAll}
            className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
          >
            Mostrar todos los elementos
          </button>
          <button
            onClick={handleReset}
            className="px-3.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
          >
            Reiniciar ↺
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-2 flex justify-between items-center border-t border-slate-200">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
        >
          ← Volver a Escena 3
        </button>

        <button
          onClick={onContinue}
          className={`px-5 py-2 font-semibold rounded-lg text-sm transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
            isComplete
              ? 'bg-indigo-700 hover:bg-indigo-800 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Continuar a Escena 5 (Fuente y Argumento) →
        </button>
      </div>
    </div>
  );
};
