import React, { useState } from 'react';
import { CITATION_OPTIONS, INSTITUTIONAL_LINKS } from '../data/educationalContent';

interface Scene3CitationProps {
  onComplete: () => void;
  onContinue: () => void;
  onBack: () => void;
}

export const Scene3Citation: React.FC<Scene3CitationProps> = ({
  onComplete,
  onContinue,
  onBack,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [citationMode, setCitationMode] = useState<'narrativa' | 'parentetica'>('narrativa');
  const [showHint, setShowHint] = useState<boolean>(false);

  const selectedOption = CITATION_OPTIONS.find((opt) => opt.id === selectedOptionId);

  const handleSelect = (id: string) => {
    setSelectedOptionId(id);
    const chosen = CITATION_OPTIONS.find((opt) => opt.id === id);
    if (chosen?.isCorrect) {
      onComplete();
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setShowHint(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00a3e0]">
          Escena 3 · Reglas de Citación APA 7 (Manual Bibliotecas IPLACEX 2025)
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15284f] mt-1 tracking-tight">
          Citar una Página Web Institucional en el Cuerpo de la Carta
        </h2>
      </div>

      {/* Autonomous Learning Guide Box */}
      <div className="bg-[#f0f7ff] border border-sky-200 rounded-xl p-4 text-xs space-y-1.5">
        <strong className="block text-[#15284f] font-bold text-sm">
          📋 Instrucciones de Aprendizaje Autónomo:
        </strong>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-slate-700">
          <div><strong>🎯 Qué hacer:</strong> Aprende las reglas de autor corporativo y localizador de párrafo en fuentes web institucionales sin paginación física.</div>
          <div><strong>📝 Cómo responder:</strong> Explora primero los modos de citación y luego selecciona la opción correcta entre las 4 alternativas.</div>
          <div><strong>💡 Cómo consultar pistas:</strong> Pulsa 'Solicitar Pista 💡' para recordar los 3 errores fatales de citación.</div>
          <div><strong>🔍 Cómo revisar:</strong> Al hacer clic en una opción verás su retroalimentación con la regla del Manual IPLACEX (2025, p. 5) y podrás reintentar.</div>
        </div>
      </div>

      {/* Normative Rules from IPLACEX Manual */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
          <div className="text-xs font-bold uppercase text-[#00a3e0] mb-1">
            Regla 1 · Autor Institucional con Sigla (Manual IPLACEX, p. 5)
          </div>
          <h3 className="font-bold text-slate-900 text-sm mb-2">Primera mención vs. menciones posteriores</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            En la primera cita en el texto se escribe el nombre oficial completo de la entidad seguido de su sigla entre corchetes:
          </p>
          <div className="mt-2 p-2.5 bg-slate-50 border border-slate-200 rounded font-mono text-xs text-slate-800 space-y-1">
            <div><strong>Narrativa:</strong> Según la Organización de las Naciones Unidas [ONU] (s.f.)...</div>
            <div><strong>Parentética:</strong> ...(Organización de las Naciones Unidas [ONU], s.f.).</div>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            * En citas posteriores en el mismo texto se utiliza directamente la sigla: <code>(ONU, s.f.)</code>.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
          <div className="text-xs font-bold uppercase text-[#00a3e0] mb-1">
            Regla 2 · Citas de Fuentes Electrónicas (Manual IPLACEX, p. 5)
          </div>
          <h3 className="font-bold text-slate-900 text-sm mb-2">Páginas web sin número de página impreso</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Tal como indica textualmente el Manual de Bibliotecas IPLACEX: <em>"En caso de citar artículos sin número de página, se utilizarán otros elementos de localización, como el número de párrafo"</em>:
          </p>
          <div className="mt-2 p-2.5 bg-slate-50 border border-slate-200 rounded font-mono text-xs text-slate-800 space-y-1">
            <div>(Organización de las Naciones Unidas [ONU], s.f., <strong>secc. Metas, párr. 4</strong>)</div>
            <div>(ONU, s.f., <strong>párr. 3</strong>)</div>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            * Si la página no consigna fecha explícita, se usa <code>(s.f.)</code> [sin fecha].
          </p>
        </div>
      </div>

      {/* Interactive Mode Explorer */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h3 className="font-bold text-sm sm:text-base text-[#15284f]">
              Explorador: Cita Narrativa vs. Cita Parentética en tu Carta
            </h3>
            <p className="text-xs text-slate-600">
              Alterna entre ambos modos para observar cómo fluyen dentro del párrafo argumentativo:
            </p>
          </div>
          <div className="flex gap-1 bg-white p-1 rounded-lg border border-slate-200 shrink-0">
            <button
              onClick={() => setCitationMode('narrativa')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
                citationMode === 'narrativa'
                  ? 'bg-[#15284f] text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cita Narrativa
            </button>
            <button
              onClick={() => setCitationMode('parentetica')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
                citationMode === 'parentetica'
                  ? 'bg-[#15284f] text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cita Parentética
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-mono">
          {citationMode === 'narrativa' ? (
            <p>
              "Tal como subraya la <span className="bg-sky-100 text-[#15284f] px-1 py-0.5 rounded font-bold">Organización de las Naciones Unidas [ONU] (s.f., secc. Metas, párr. 4)</span>, garantizar el acceso a una formación técnica y profesional de calidad es decisivo para promover el empleo juvenil y la innovación en Iberoamérica."
            </p>
          ) : (
            <p>
              "Garantizar el acceso a una formación técnica y profesional de calidad es decisivo para promover el empleo juvenil y la innovación en Iberoamérica <span className="bg-sky-100 text-[#15284f] px-1 py-0.5 rounded font-bold">(Organización de las Naciones Unidas [ONU], s.f., secc. Metas, párr. 4)</span>."
            </p>
          )}
        </div>
      </div>

      {/* Decision Exercise */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
        <div>
          <span className="text-xs font-bold text-[#00a3e0] uppercase tracking-wider">
            Ejercicio de Aplicación
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
            ¿Cuál de las siguientes citas de la página web de la ONU cumple estrictamente las normas del Manual IPLACEX (2025)?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Fuente real utilizada: <a href={INSTITUTIONAL_LINKS.ods4Chile} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Naciones Unidas Chile · ODS 4 ↗</a>.
          </p>
        </div>

        <div className="space-y-3">
          {CITATION_OPTIONS.map((opt, idx) => {
            const isSelected = selectedOptionId === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
                  isSelected
                    ? opt.isCorrect
                      ? 'bg-emerald-50/70 border-emerald-400 ring-1 ring-emerald-400'
                      : 'bg-rose-50/70 border-rose-400 ring-1 ring-rose-400'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                    Opción {idx + 1}
                  </span>
                  {isSelected && (
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        opt.isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {opt.isCorrect ? '✓ Respuesta Válida' : '✗ Opción Incorrecta'}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-800 font-mono leading-relaxed">
                  {opt.citationText}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Option Feedback */}
        {selectedOption && (
          <div
            className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed space-y-2 ${
              selectedOption.isCorrect
                ? 'bg-emerald-50 text-emerald-950 border-emerald-300'
                : 'bg-rose-50 text-rose-950 border-rose-300'
            }`}
            aria-live="polite"
          >
            <p className="font-semibold">
              {selectedOption.isCorrect ? '✓ ¡Excelente análisis!' : '✗ Atención al error de citación:'}
            </p>
            <p>{selectedOption.feedback}</p>
            <div className="pt-2 border-t border-slate-300/40 text-xs">
              <strong>Regla del Manual IPLACEX (2025):</strong> {selectedOption.keyRule}
            </div>
          </div>
        )}

        {/* Pedagogical Hint */}
        {showHint && (
          <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-xs sm:text-sm text-amber-950 space-y-2">
            <strong className="block text-amber-900 font-bold">💡 Pista de citación institucional:</strong>
            <p>
              1) Jamás insertes una URL dentro del texto. 2) Cita siempre por el autor corporativo institucional (Organización de las Naciones Unidas [ONU]). 3) En fuentes web sin número de página, especifica la sección y el número de párrafo.
            </p>
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-2 flex flex-wrap gap-2 justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-3.5 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
            >
              {showHint ? 'Ocultar Pista' : 'Solicitar Pista 💡'}
            </button>
            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
            >
              Reintentar decisión ↺
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-2 flex justify-between items-center border-t border-slate-200">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
        >
          ← Volver a Escena 2
        </button>

        <button
          onClick={onContinue}
          className={`px-5 py-2 font-semibold rounded-lg text-sm transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
            selectedOption?.isCorrect
              ? 'bg-[#15284f] hover:bg-[#1e3a8a] text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Continuar a Escena 4 (Construir Referencia) →
        </button>
      </div>
    </div>
  );
};
