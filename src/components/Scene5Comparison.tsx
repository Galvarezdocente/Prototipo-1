import React, { useState } from 'react';
import { COMPARISON_SCENARIO, INSTITUTIONAL_LINKS } from '../data/educationalContent';

interface Scene5ComparisonProps {
  onComplete: () => void;
  onContinue: () => void;
  onBack: () => void;
}

export const Scene5Comparison: React.FC<Scene5ComparisonProps> = ({
  onComplete,
  onContinue,
  onBack,
}) => {
  const [selectedExcerpt, setSelectedExcerpt] = useState<'A' | 'B' | null>(null);
  const [showAnalysis, setShowAnalysis] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  const handleSelect = (choice: 'A' | 'B') => {
    setSelectedExcerpt(choice);
    setShowAnalysis(true);
    if (choice === 'B') {
      onComplete();
    }
  };

  const handleReset = () => {
    setSelectedExcerpt(null);
    setShowAnalysis(false);
    setShowHint(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00a3e0]">
          Escena 5 · Análisis Retórico y Articulación con ODS 4
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15284f] mt-1 tracking-tight">
          ¿Dónde la Fuente del ODS Fundamenta el Argumento?
        </h2>
      </div>

      {/* Autonomous Learning Guide Box */}
      <div className="bg-[#f0f7ff] border border-sky-200 rounded-xl p-4 text-xs space-y-1.5">
        <strong className="block text-[#15284f] font-bold text-sm">
          📋 Instrucciones de Aprendizaje Autónomo:
        </strong>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-slate-700">
          <div><strong>🎯 Qué hacer:</strong> Compara dos cartas reales dirigidas a la Fundación de Técnicos Iberoamericanos y detecta cuál vincula eficazmente el ODS 4 con la beca en Barcelona.</div>
          <div><strong>📝 Cómo responder:</strong> Pulsa 'Evaluar Fragmento A' o 'Evaluar Fragmento B' para examinar su estructura argumentativa.</div>
          <div><strong>💡 Cómo consultar pistas:</strong> Haz clic en 'Solicitar Pista 💡' para analizar la articulación causa-efecto del argumento.</div>
          <div><strong>🔍 Cómo revisar:</strong> Revisa el desglose analítico del docente bajo cada opción y pulsa 'Reintentar análisis ↺' para probar ambas alternativas.</div>
        </div>
      </div>

      {/* Rhetorical Principle Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 space-y-1.5">
        <strong className="block text-[#15284f] font-bold">
          Principio Retórico de Comunicación y Redacción (IPLACEX):
        </strong>
        <p className="leading-relaxed text-slate-600">
          <strong>Premisa Mayor (Diagnóstico ODS 4):</strong> La ONU alerta sobre la escasez de competencias técnicas aplicadas → <strong>Premisa Menor (Oportunidad formativa):</strong> Barcelona posee centros punteros en tecnología aplicada → <strong>Conclusión (Impacto profesional):</strong> El postulante resolverá una necesidad concreta de su región al regresar. Si la cita no cumple esta función probatoria, se convierte en una "cita isla".
        </p>
        <div className="text-[11px] text-sky-800 pt-1">
          Fuente de contraste: <a href={INSTITUTIONAL_LINKS.ods4Chile} target="_blank" rel="noopener noreferrer" className="underline font-semibold">Meta 4.4 de Naciones Unidas (Competencias técnicas para el empleo) ↗</a>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Fragment A */}
        <div
          className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
            selectedExcerpt === 'A'
              ? 'bg-rose-50/50 border-rose-300 ring-2 ring-rose-300'
              : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-200">
                Opción A · Cita "Isla" o Decorativa
              </span>
              {selectedExcerpt === 'A' && (
                <span className="text-xs font-bold text-rose-700">✗ Selección Débil</span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200 font-serif">
              "{COMPARISON_SCENARIO.excerptA.text}"
            </p>

            {showAnalysis && (
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-xs text-rose-950 space-y-1">
                <strong className="block text-rose-900 font-semibold">Análisis evaluativo docente:</strong>
                <p>{COMPARISON_SCENARIO.excerptA.analysis}</p>
                <div className="text-[11px] text-rose-800 pt-1">
                  <strong>Impacto en la evaluación:</strong> En Blackboard este párrafo obtendría puntaje mínimo en el criterio de argumentación por confundir una meta técnica de la ONU con un beneficio turístico personal.
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleSelect('A')}
            className={`mt-4 w-full py-2 px-3 rounded-lg text-xs font-bold transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
              selectedExcerpt === 'A'
                ? 'bg-rose-600 text-white'
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Evaluar Fragmento A
          </button>
        </div>

        {/* Fragment B */}
        <div
          className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
            selectedExcerpt === 'B'
              ? 'bg-emerald-50/50 border-emerald-300 ring-2 ring-emerald-300'
              : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                Opción B · Cita Integrada y Fundamentadora
              </span>
              {selectedExcerpt === 'B' && (
                <span className="text-xs font-bold text-emerald-700">✓ Modelo Sobresaliente</span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200 font-serif">
              "{COMPARISON_SCENARIO.excerptB.text}"
            </p>

            {showAnalysis && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-950 space-y-1">
                <strong className="block text-emerald-900 font-semibold">Análisis evaluativo docente:</strong>
                <p>{COMPARISON_SCENARIO.excerptB.analysis}</p>
                <div className="text-[11px] text-emerald-800 pt-1">
                  <strong>Puntaje máximo en rúbrica:</strong> La cita de la ONU valida que el problema técnico es una prioridad regional, y el postulante expone con precisión técnica qué metodologías aprenderá en Barcelona para transferirlas a Iberoamérica.
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleSelect('B')}
            className={`mt-4 w-full py-2 px-3 rounded-lg text-xs font-bold transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
              selectedExcerpt === 'B'
                ? 'bg-emerald-600 text-white'
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Evaluar Fragmento B
          </button>
        </div>
      </div>

      {/* Feedback Alert for Decision */}
      {selectedExcerpt && (
        <div
          className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed space-y-1 ${
            selectedExcerpt === 'B'
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-rose-50 border-rose-300 text-rose-950'
          }`}
          aria-live="polite"
        >
          <strong className="block text-sm">
            {selectedExcerpt === 'B'
              ? '✓ ¡Excelente distinción crítica!'
              : '✗ Reflexión formativa sobre el Fragmento A:'}
          </strong>
          <p>{COMPARISON_SCENARIO.keyTakeaway}</p>
        </div>
      )}

      {/* Pedagogical Hint */}
      {showHint && (
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-xs sm:text-sm text-amber-950 space-y-1">
          <strong className="block text-amber-900 font-bold">💡 Pista pedagógica:</strong>
          <p>{COMPARISON_SCENARIO.hint}</p>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="text-xs text-slate-700">
          Estado del análisis: <strong>{selectedExcerpt ? (selectedExcerpt === 'B' ? 'Alineado con nivel Sobresaliente' : 'Revisión formativa requerida') : 'Pendiente de selección'}</strong>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowHint(!showHint)}
            className="px-3.5 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
          >
            {showHint ? 'Ocultar Pista' : 'Pista 💡'}
          </button>
          <button
            onClick={handleReset}
            className="px-3.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
          >
            Reintentar análisis ↺
          </button>
        </div>
      </div>

      {/* Scene Navigation */}
      <div className="pt-2 flex justify-between items-center border-t border-slate-200">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
        >
          ← Volver a Escena 4
        </button>

        <button
          onClick={onContinue}
          className={`px-5 py-2 font-semibold rounded-lg text-sm transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
            selectedExcerpt === 'B'
              ? 'bg-[#15284f] hover:bg-[#1e3a8a] text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Continuar a Escena 6 (Taller y Autoevaluación) →
        </button>
      </div>
    </div>
  );
};
