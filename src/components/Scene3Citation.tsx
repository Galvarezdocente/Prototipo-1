import React, { useState } from 'react';
import { CITATION_OPTIONS } from '../data/educationalContent';

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
      <div className="border-b border-slate-200 pb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
          Escena 3 · Reglas de Citación APA 7 (Manual Bibliotecas IPLACEX 2025)
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
          Citar una Página Web Institucional en el Cuerpo de la Carta
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
          En tu postulación a la Fundación de Técnicos Iberoamericanos debes incorporar evidencia del portal oficial de la ONU para el ODS seleccionado. Aprende a aplicar las reglas exactas para autores corporativos y páginas sin número de página.
        </p>
      </div>

      {/* Normative Rules Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-bold uppercase text-indigo-700 mb-1">Regla 1 · Autor Corporativo con Sigla</div>
          <h3 className="font-bold text-slate-900 text-sm mb-2">Primera mención vs. menciones posteriores</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            En la primera cita en el texto se escribe el nombre oficial completo de la institución seguido de su sigla entre corchetes:
          </p>
          <div className="mt-2 p-2 bg-slate-50 border border-slate-200 rounded font-mono text-xs text-slate-800 space-y-1">
            <div><strong>Narrativa:</strong> Según la Organización de las Naciones Unidas [ONU] (2023)...</div>
            <div><strong>Parentética:</strong> ...(Organización de las Naciones Unidas [ONU], 2023).</div>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            * En citas posteriores dentro de la misma carta, se utiliza únicamente la sigla: <code>(ONU, 2023)</code>.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-bold uppercase text-indigo-700 mb-1">Regla 2 · Localizador en Páginas Web</div>
          <h3 className="font-bold text-slate-900 text-sm mb-2">¿Cómo indicar la ubicación si no hay páginas?</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Las páginas web no tienen números de página impresos. Si realizas una cita textual (reproducción exacta), debes indicar el número de párrafo o encabezado de sección:
          </p>
          <div className="mt-2 p-2 bg-slate-50 border border-slate-200 rounded font-mono text-xs text-slate-800 space-y-1">
            <div>(Organización de las Naciones Unidas [ONU], 2023, <strong>párr. 4</strong>)</div>
            <div>(ONU, 2023, <strong>secc. Metas</strong>)</div>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            * Si la página no tiene fecha visible, se sustituye el año por <code>(s.f.)</code> [sin fecha].
          </p>
        </div>
      </div>

      {/* Interactive Mode Explorer */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900">
              Modos de citación en el discurso de tu carta
            </h3>
            <p className="text-xs text-slate-600">
              Elige entre cita narrativa y cita parentética para ver cómo articular el texto:
            </p>
          </div>
          <div className="flex gap-1 bg-white p-1 rounded-lg border border-slate-200 shrink-0">
            <button
              onClick={() => setCitationMode('narrativa')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
                citationMode === 'narrativa'
                  ? 'bg-indigo-700 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cita Narrativa
            </button>
            <button
              onClick={() => setCitationMode('parentetica')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
                citationMode === 'parentetica'
                  ? 'bg-indigo-700 text-white'
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
              "Tal como subraya la <span className="bg-indigo-100 text-indigo-900 px-1 py-0.5 rounded font-bold">Organización de las Naciones Unidas [ONU] (2023, párr. 3)</span>, el desarrollo industrial sostenible de Iberoamérica demanda una masa crítica de técnicos capacitados en mantenimiento predictivo y eficiencia energética."
            </p>
          ) : (
            <p>
              "El desarrollo industrial sostenible de Iberoamérica demanda una masa crítica de técnicos capacitados en mantenimiento predictivo y eficiencia energética <span className="bg-indigo-100 text-indigo-900 px-1 py-0.5 rounded font-bold">(Organización de las Naciones Unidas [ONU], 2023, párr. 3)</span>."
            </p>
          )}
        </div>
      </div>

      {/* Evaluation Exercise */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
        <div>
          <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
            Ejercicio de Decisión
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
            ¿Cuál de los siguientes fragmentos cumple con las normas APA 7 para tu carta?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Analiza cuidadosamente la puntuación, el tratamiento del autor institucional y la presencia o ausencia de URLs.
          </p>
        </div>

        <div className="space-y-3">
          {CITATION_OPTIONS.map((opt, idx) => {
            const isSelected = selectedOptionId === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
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

        {/* Selected option feedback */}
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
              {selectedOption.isCorrect ? '¡Excelente análisis!' : 'Atención al error normativo:'}
            </p>
            <p>{selectedOption.feedback}</p>
            <div className="pt-2 border-t border-slate-300/40 text-xs">
              <strong>Regla clave de citación IPLACEX:</strong> {selectedOption.keyRule}
            </div>
          </div>
        )}

        {/* Pedagogical Hint */}
        {showHint && (
          <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-xl text-xs sm:text-sm text-yellow-950 space-y-2">
            <strong className="block text-yellow-900 font-bold">💡 Pista de citación:</strong>
            <p>
              Verifica tres reglas doradas: 1) Nunca pongas "https://" dentro del texto; 2) No cites por el título de la página web si la autoría corporativa (Naciones Unidas) es clara; 3) En la primera cita institucional, escribe el nombre completo con la sigla entre corchetes <code>[ONU]</code>.
            </p>
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-2 flex flex-wrap gap-2 justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-3.5 py-1.5 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 border border-yellow-300 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
            >
              {showHint ? 'Ocultar Pista' : 'Solicitar Pista 💡'}
            </button>
            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
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
          className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
        >
          ← Volver a Escena 2
        </button>

        <button
          onClick={onContinue}
          className={`px-5 py-2 font-semibold rounded-lg text-sm transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
            selectedOption?.isCorrect
              ? 'bg-indigo-700 hover:bg-indigo-800 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Continuar a Escena 4 (Construir Referencia) →
        </button>
      </div>
    </div>
  );
};
