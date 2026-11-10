import React, { useState } from 'react';
import { CLASSIFICATION_ITEMS } from '../data/educationalContent';

interface Scene2ClassifyProps {
  onComplete: () => void;
  onContinue: () => void;
  onBack: () => void;
}

export const Scene2Classify: React.FC<Scene2ClassifyProps> = ({
  onComplete,
  onContinue,
  onBack,
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, 'cita' | 'referencia' | 'url'>>({});
  const [showHint, setShowHint] = useState<boolean>(false);

  const handleSelect = (itemId: string, category: 'cita' | 'referencia' | 'url') => {
    const updated = { ...userAnswers, [itemId]: category };
    setUserAnswers(updated);

    const allAnswered = CLASSIFICATION_ITEMS.every((item) => updated[item.id] !== undefined);
    const allCorrect = CLASSIFICATION_ITEMS.every((item) => updated[item.id] === item.correctCategory);
    if (allAnswered && allCorrect) {
      onComplete();
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowHint(false);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = CLASSIFICATION_ITEMS.filter(
    (item) => userAnswers[item.id] === item.correctCategory
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00a3e0]">
          Escena 2 · Actividad Diagnóstica y de Clasificación
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15284f] mt-1 tracking-tight">
          Clasificar: Cita en el texto vs. Referencia bibliográfica vs. URL suelta
        </h2>
      </div>

      {/* Autonomous Learning Guide Box */}
      <div className="bg-[#f0f7ff] border border-sky-200 rounded-xl p-4 text-xs space-y-1.5">
        <strong className="block text-[#15284f] font-bold text-sm">
          📋 Instrucciones de Aprendizaje Autónomo:
        </strong>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-slate-700">
          <div><strong>🎯 Qué hacer:</strong> Distingue cada uno de los 6 elementos del ejercicio según las normas APA 7 de IPLACEX.</div>
          <div><strong>📝 Cómo responder:</strong> Haz clic en uno de los 3 botones ('Cita en el texto', 'Referencia bibliográfica' o 'URL suelta') bajo cada ítem.</div>
          <div><strong>💡 Cómo consultar pistas:</strong> Pulsa el botón 'Solicitar Pista 💡' al final de la actividad si tienes dudas.</div>
          <div><strong>🔍 Cómo revisar:</strong> Tras elegir, leerás inmediatamente la retroalimentación formativa y podrás pulsar 'Reintentar actividad ↺'.</div>
        </div>
      </div>

      {/* Conceptual Summary Banner */}
      <div className="grid sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="p-2.5 rounded bg-white border border-slate-200">
          <strong className="text-[#15284f] block font-semibold mb-1">Cita en el texto</strong>
          <span className="text-slate-600">
            Acredita autor y año dentro del párrafo (parentética o narrativa). Nunca lleva URL.
          </span>
        </div>
        <div className="p-2.5 rounded bg-white border border-slate-200">
          <strong className="text-[#15284f] block font-semibold mb-1">Referencia bibliográfica</strong>
          <span className="text-slate-600">
            Ficha completa al final en 'Referencias': ¿Quién? ¿Cuándo? ¿Qué? ¿Dónde?
          </span>
        </div>
        <div className="p-2.5 rounded bg-white border border-slate-200">
          <strong className="text-[#15284f] block font-semibold mb-1">URL suelta</strong>
          <span className="text-slate-600">
            Dirección electrónica aislada. No es cita ni referencia válida por sí misma.
          </span>
        </div>
      </div>

      {/* Interactive Item Cards */}
      <div className="space-y-4">
        {CLASSIFICATION_ITEMS.map((item, index) => {
          const selected = userAnswers[item.id];
          const isAnswered = selected !== undefined;
          const isCorrect = selected === item.correctCategory;

          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl border transition-all ${
                isAnswered
                  ? isCorrect
                    ? 'bg-emerald-50/40 border-emerald-300'
                    : 'bg-rose-50/40 border-rose-300'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-semibold uppercase text-slate-500">
                    Elemento {index + 1} · {item.sourceContext}
                  </span>
                  <div className="font-mono text-xs sm:text-sm bg-slate-100 p-2.5 rounded border border-slate-200 text-slate-900 break-all select-all">
                    {item.text}
                  </div>
                </div>

                {isAnswered && (
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold shrink-0 self-start ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}
                  >
                    {isCorrect ? '✓ Clasificación Correcta' : '✗ Revisión Requerida'}
                  </span>
                )}
              </div>

              {/* Category Selection Buttons */}
              <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label={`Clasificar elemento ${index + 1}`}>
                <button
                  onClick={() => handleSelect(item.id, 'cita')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
                    selected === 'cita'
                      ? 'bg-[#15284f] text-white border-[#15284f] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  Cita en el texto
                </button>
                <button
                  onClick={() => handleSelect(item.id, 'referencia')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
                    selected === 'referencia'
                      ? 'bg-[#15284f] text-white border-[#15284f] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  Referencia bibliográfica
                </button>
                <button
                  onClick={() => handleSelect(item.id, 'url')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
                    selected === 'url'
                      ? 'bg-[#15284f] text-white border-[#15284f] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  URL suelta
                </button>
              </div>

              {/* Immediate Specific Feedback */}
              {isAnswered && (
                <div
                  className={`mt-3 p-3 rounded-lg text-xs leading-relaxed border ${
                    isCorrect
                      ? 'bg-emerald-50 text-emerald-950 border-emerald-200'
                      : 'bg-rose-50 text-rose-950 border-rose-200'
                  }`}
                  aria-live="polite"
                >
                  <p>
                    <strong>{isCorrect ? '✓ Explicación de acierto: ' : '✗ Orientación de corrección: '}</strong>
                    {item.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Hint & Helper Section */}
      {showHint && (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 text-xs sm:text-sm text-amber-950 space-y-2">
          <strong className="block text-amber-900 font-bold">💡 Pista pedagógica del docente:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Cita en el texto:</strong> Se encuentra dentro del párrafo, casi siempre entre paréntesis o integrada al flujo de la oración con el autor y el año. <em>Jamás contiene una URL</em>.
            </li>
            <li>
              <strong>Referencia bibliográfica:</strong> Ficha técnica completa al final en la sección 'Referencias'. Incluye autor, año, título en cursiva y URL.
            </li>
            <li>
              <strong>URL suelta:</strong> Es únicamente la dirección técnica que inicia con <code>http://</code> o <code>https://</code>.
            </li>
          </ul>
        </div>
      )}

      {/* Progress & Summary Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs sm:text-sm text-slate-700">
          Progreso de clasificación: <strong>{answeredCount} de {CLASSIFICATION_ITEMS.length}</strong> respondidos ·{' '}
          <span className="text-emerald-700 font-semibold">{correctCount} correctos</span>
        </div>
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
            Reintentar actividad ↺
          </button>
        </div>
      </div>

      {/* Scene Navigation Bar */}
      <div className="pt-2 flex justify-between items-center border-t border-slate-200">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
        >
          ← Volver a Escena 1
        </button>

        <button
          onClick={onContinue}
          className={`px-5 py-2 font-semibold rounded-lg text-sm transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
            correctCount === CLASSIFICATION_ITEMS.length
              ? 'bg-[#15284f] hover:bg-[#1e3a8a] text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Continuar a Escena 3 (Citar según APA 7) →
        </button>
      </div>
    </div>
  );
};
