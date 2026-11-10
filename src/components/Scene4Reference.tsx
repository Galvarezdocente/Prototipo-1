import React, { useState } from 'react';
import { REFERENCE_ELEMENTS, INSTITUTIONAL_LINKS } from '../data/educationalContent';

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
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00a3e0]">
          Escena 4 · Construcción de la Referencia Bibliográfica
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15284f] mt-1 tracking-tight">
          Las 4 Preguntas Clave de APA 7 (Manual IPLACEX 2025, p. 6)
        </h2>
      </div>

      {/* Autonomous Learning Guide Box */}
      <div className="bg-[#f0f7ff] border border-sky-200 rounded-xl p-4 text-xs space-y-1.5">
        <strong className="block text-[#15284f] font-bold text-sm">
          📋 Instrucciones de Aprendizaje Autónomo:
        </strong>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-slate-700">
          <div><strong>🎯 Qué hacer:</strong> Ensambla la referencia bibliográfica completa para la página del ODS 4 de la ONU siguiendo la estructura de 4 preguntas canónicas.</div>
          <div><strong>📝 Cómo responder:</strong> Haz clic en '+ Explorar' en cada uno de los 4 bloques para activar sus reglas de puntuación y tipografía.</div>
          <div><strong>💡 Cómo consultar pistas:</strong> Pulsa 'Solicitar Pista 💡' para recordar los elementos eliminados en la 7.ª edición de APA.</div>
          <div><strong>🔍 Cómo revisar:</strong> Observa la vista previa consolidada que se actualiza en tiempo real en la tarjeta oscura inferior.</div>
        </div>
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
                  ? 'bg-white border-blue-400 shadow-xs ring-1 ring-blue-300'
                  : 'bg-slate-50 border-slate-200 opacity-90'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase text-[#15284f]">
                  Elemento {idx + 1} · {element.questionLabel}
                </span>
                <button
                  onClick={() => togglePart(element.id)}
                  className={`text-xs px-2.5 py-1 rounded font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
                    isRevealed
                      ? 'bg-sky-100 text-[#15284f] hover:bg-sky-200'
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
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {element.formatNote}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic mt-1">
                  Haz clic en 'Explorar' para revisar el valor exacto y su norma de puntuación.
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Consolidated Reference Preview */}
      <div className="bg-[#15284f] text-slate-100 rounded-xl p-5 shadow-inner space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-900 pb-2">
          <span className="text-xs uppercase font-mono tracking-wider text-sky-300">
            Vista Previa de la Sección 'Referencias' en tu Carta de Examen
          </span>
          <span className="text-xs text-sky-200">
            {revealedParts.size} de 4 datos ensamblados
          </span>
        </div>

        <div className="font-mono text-xs sm:text-sm leading-relaxed p-3.5 bg-[#0f1d3a] rounded border border-blue-950 break-words">
          <span className="text-emerald-300 font-semibold">
            {revealedParts.has('ref-who') ? 'Organización de las Naciones Unidas. ' : '[¿Quién? Autor corporativo] '}
          </span>
          <span className="text-sky-300">
            {revealedParts.has('ref-when') ? '(s.f.). ' : '[¿Cuándo? (s.f.)] '}
          </span>
          <span className="text-amber-300 italic">
            {revealedParts.has('ref-what')
              ? 'Objetivo 4: Educación de calidad. '
              : '[¿Qué? Título en cursiva]. '}
          </span>
          <span className="text-slate-200">
            {revealedParts.has('ref-where')
              ? 'Naciones Unidas. https://chile.un.org/es/sdgs/4'
              : '[¿Dónde? Sitio web y URL]'}
          </span>
        </div>

        <p className="text-[11px] text-sky-200/80">
          * Fíjate en los detalles: el punto va después del autor, después del año y después del título. La URL queda limpia sin punto final para no romper el hipervínculo en el documento digital.
        </p>
      </div>

      {/* Official APA 7 & IPLACEX rules quiz */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
        <span className="text-xs font-bold uppercase text-[#00a3e0]">
          Verificación de Normas APA 7 (Manual IPLACEX, p. 6)
        </span>
        <h3 className="font-bold text-slate-900 text-sm sm:text-base">
          ¿Cuál de las siguientes afirmaciones sobre la referencia bibliográfica es verdadera?
        </h3>

        <div className="space-y-2">
          <button
            onClick={() => setSelectedErrorQuiz('recuperado')}
            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
              selectedErrorQuiz === 'recuperado'
                ? 'bg-rose-50 border-rose-300 text-rose-950 font-semibold'
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
            }`}
          >
            A) Se debe anteponer la frase "Recuperado de" antes de cualquier enlace web.
          </button>
          <button
            onClick={() => setSelectedErrorQuiz('correct-rule')}
            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
              selectedErrorQuiz === 'correct-rule'
                ? 'bg-emerald-50 border-emerald-400 font-semibold text-emerald-950'
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
            }`}
          >
            B) El título de la página web del ODS debe ir en <em>cursiva (itálica)</em> y la URL se coloca directamente activa sin "Recuperado de".
          </button>
          <button
            onClick={() => setSelectedErrorQuiz('solo-url')}
            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
              selectedErrorQuiz === 'solo-url'
                ? 'bg-rose-50 border-rose-300 text-rose-950 font-semibold'
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
            }`}
          >
            C) Basta con poner la URL en la bibliografía sin autor ni título.
          </button>
        </div>

        {selectedErrorQuiz && (
          <div
            className={`p-3 rounded-lg text-xs leading-relaxed border ${
              selectedErrorQuiz === 'correct-rule'
                ? 'bg-emerald-50 text-emerald-950 border-emerald-200'
                : 'bg-rose-50 text-rose-950 border-rose-200'
            }`}
            aria-live="polite"
          >
            <strong>{selectedErrorQuiz === 'correct-rule' ? '✓ ¡Exacto! ' : '✗ Error normativo: '}</strong>
            {selectedErrorQuiz === 'correct-rule'
              ? 'El Manual de Bibliotecas IPLACEX (2025, p. 6) y la 7.ª edición de APA eliminaron definitivamente la expresión "Recuperado de" para páginas con enlace directo, y exigen el título de la fuente en cursiva.'
              : 'En APA 7 séptima edición se suprimió la frase "Recuperado de" en páginas electrónicas estables, y una referencia jamás puede limitarse únicamente a una URL.'}
          </div>
        )}
      </div>

      {/* Hints & Actions */}
      {showHint && (
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-xs sm:text-sm text-amber-950 space-y-1">
          <strong className="block text-amber-900 font-bold">💡 Pista metodológica del docente:</strong>
          <p>
            Verifica el orden invariable: <strong>¿Quién?</strong> (Organización de las Naciones Unidas.) + <strong>¿Cuándo?</strong> ((s.f.).) + <strong>¿Qué?</strong> (<em>Objetivo 4: Educación de calidad.</em>) + <strong>¿Dónde?</strong> (Naciones Unidas. https://chile.un.org/es/sdgs/4).
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
            className="px-3.5 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
          >
            {showHint ? 'Ocultar Pista' : 'Pista 💡'}
          </button>
          <button
            onClick={revealAll}
            className="px-3.5 py-1.5 bg-sky-50 hover:bg-sky-100 text-[#15284f] border border-sky-200 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
          >
            Mostrar los 4 elementos
          </button>
          <button
            onClick={handleReset}
            className="px-3.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
          >
            Reiniciar ↺
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-2 flex justify-between items-center border-t border-slate-200">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
        >
          ← Volver a Escena 3
        </button>

        <button
          onClick={onContinue}
          className={`px-5 py-2 font-semibold rounded-lg text-sm transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
            isComplete
              ? 'bg-[#15284f] hover:bg-[#1e3a8a] text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Continuar a Escena 5 (ODS 4 y Argumento) →
        </button>
      </div>
    </div>
  );
};
