import React, { useState } from 'react';
import { INTEGRATOR_CASE, RUBRIC_CRITERIA } from '../data/educationalContent';

interface Scene6IntegratorProps {
  onComplete: () => void;
  onBack: () => void;
  onRestart: () => void;
}

export const Scene6Integrator: React.FC<Scene6IntegratorProps> = ({
  onComplete,
  onBack,
  onRestart,
}) => {
  const [activeTab, setActiveTab] = useState<'diagnostico' | 'redactor' | 'rubrica'>('diagnostico');
  const [showModelSolution, setShowModelSolution] = useState<boolean>(false);
  const [studentText, setStudentText] = useState<string>('');
  const [checkedCriteria, setCheckedCriteria] = useState<Record<string, boolean>>({});

  const toggleCriterion = (id: string) => {
    const updated = { ...checkedCriteria, [id]: !checkedCriteria[id] };
    setCheckedCriteria(updated);

    const checkedCount = Object.values(updated).filter(Boolean).length;
    if (checkedCount === RUBRIC_CRITERIA.length) {
      onComplete();
    }
  };

  const checkAllCriteria = () => {
    const all: Record<string, boolean> = {};
    RUBRIC_CRITERIA.forEach((crit) => {
      all[crit.id] = true;
    });
    setCheckedCriteria(all);
    onComplete();
  };

  const checkedCount = Object.values(checkedCriteria).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
          Escena 6 · Taller Integrador y Autoevaluación Docente
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
          Corrección de Caso, Borrador Libre y Pauta de Cotejo
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
          En este espacio pondrás a prueba todo lo aprendido: diagnosticarás errores típicos de redacción, ensayarás tu propio argumento técnico y verificarás el cumplimiento de tu carta con la rúbrica oficial de Blackboard.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex border-b border-slate-200 gap-2" role="tablist" aria-label="Secciones del taller integrador">
        <button
          role="tab"
          aria-selected={activeTab === 'diagnostico'}
          onClick={() => setActiveTab('diagnostico')}
          className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
            activeTab === 'diagnostico'
              ? 'border-indigo-600 text-indigo-900'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          1. Diagnóstico de Caso con Errores
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'redactor'}
          onClick={() => setActiveTab('redactor')}
          className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
            activeTab === 'redactor'
              ? 'border-indigo-600 text-indigo-900'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          2. Laboratorio de Redacción Propia
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'rubrica'}
          onClick={() => setActiveTab('rubrica')}
          className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none ${
            activeTab === 'rubrica'
              ? 'border-indigo-600 text-indigo-900'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          3. Pauta de Autoevaluación ({checkedCount}/5)
        </button>
      </div>

      {/* Tab 1: Diagnóstico */}
      {activeTab === 'diagnostico' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase text-rose-700 tracking-wider">
              Borrador con Errores Típicos
            </span>
            <h3 className="font-bold text-slate-900 text-base">
              Identifica los 3 problemas críticos de este fragmento de examen:
            </h3>

            <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line select-all">
              {INTEGRATOR_CASE.initialTextWithErrors}
            </div>

            <div className="pt-2 grid sm:grid-cols-3 gap-3">
              {INTEGRATOR_CASE.identifiedErrors.map((err, i) => (
                <div key={i} className="p-3 bg-rose-50/70 border border-rose-200 rounded-lg text-xs space-y-1">
                  <span className="font-bold text-rose-900 block">
                    Falla {i + 1}: {err.type}
                  </span>
                  <p className="text-slate-700 leading-snug">{err.description}</p>
                  <div className="pt-1 text-[11px] text-emerald-900 font-semibold">
                    ✓ Corrección: {err.fix}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-between items-center">
              <button
                onClick={() => setShowModelSolution(!showModelSolution)}
                className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
              >
                {showModelSolution ? 'Ocultar Modelo Corregido' : 'Ver Modelo Corregido Docente ✨'}
              </button>
            </div>
          </div>

          {showModelSolution && (
            <div className="bg-emerald-50/70 border border-emerald-300 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Modelo Académico Sobresaliente (APA 7 - IPLACEX 2025)
                </span>
                <span className="text-xs bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-semibold">
                  Alineado con Blackboard
                </span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-emerald-200 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                {INTEGRATOR_CASE.correctedModel}
              </div>
              <p className="text-xs text-emerald-900">
                Observa cómo el destinatario es formal, la cita de la ONU está integrada para respaldar la formación técnica en Barcelona, no hay ninguna URL en el párrafo y la referencia contiene los 4 elementos obligatorios.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Laboratorio de Redacción */}
      {activeTab === 'redactor' && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
              Espacio Seguro de Práctica
            </span>
            <h3 className="font-bold text-slate-900 text-base">
              Redacta el borrador de tu párrafo argumentativo para la carta:
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              No recolectamos tus datos personales. Este borrador se mantiene en tu navegador para que puedas verificar tu redacción contra la pauta de autoevaluación.
            </p>

            <textarea
              rows={6}
              value={studentText}
              onChange={(e) => setStudentText(e.target.value)}
              placeholder="Ejemplo: Estimado Comité de Selección de la Fundación de Técnicos Iberoamericanos: Postulo a la beca técnica en Barcelona porque de acuerdo con la Organización de las Naciones Unidas [ONU] (2023)..."
              className="w-full p-3.5 border border-slate-300 rounded-xl text-xs sm:text-sm font-sans focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none focus:border-indigo-600"
              aria-label="Área de redacción del argumento de postulación"
            />

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1">
              <span>Caracteres redactados: {studentText.length}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setStudentText('')}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
                >
                  Limpiar borrador
                </button>
                <button
                  onClick={() => setActiveTab('rubrica')}
                  className="px-3 py-1 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded transition-colors"
                >
                  Evaluar con la pauta →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Rúbrica y Pauta */}
      {activeTab === 'rubrica' && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                  Pauta de Cotejo y Autoevaluación
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Criterios de Evaluación para Blackboard (Comunicación y Redacción)
                </h3>
              </div>
              <button
                onClick={checkAllCriteria}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg self-start sm:self-auto transition-colors"
              >
                Marcar todos como verificados
              </button>
            </div>

            <div className="space-y-3 mt-4">
              {RUBRIC_CRITERIA.map((criterion, idx) => {
                const isChecked = !!checkedCriteria[criterion.id];

                return (
                  <div
                    key={criterion.id}
                    className={`p-4 rounded-xl border transition-all ${
                      isChecked
                        ? 'bg-emerald-50/50 border-emerald-300'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCriterion(criterion.id)}
                        className="w-5 h-5 mt-0.5 rounded border-slate-300 text-indigo-700 focus:ring-indigo-600 shrink-0"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-xs sm:text-sm">
                            {criterion.title}
                          </span>
                          {isChecked && (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-300">
                              ✓ Cumplido
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          {criterion.description}
                        </p>

                        <div className="mt-2 pt-2 border-t border-slate-200/80 grid sm:grid-cols-2 gap-2 text-[11px]">
                          <div className="p-2 rounded bg-emerald-50/80 border border-emerald-200 text-emerald-950">
                            <strong>Nivel Sobresaliente:</strong> {criterion.exemplary}
                          </div>
                          <div className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700">
                            <strong>Nivel por Mejorar:</strong> {criterion.needsImprovement}
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>

            {/* Rubric tally alert */}
            <div
              className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                checkedCount === RUBRIC_CRITERIA.length
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-indigo-50 border-indigo-200 text-indigo-950'
              }`}
            >
              <strong>
                {checkedCount === RUBRIC_CRITERIA.length
                  ? '¡Felicitaciones! Has verificado los 5 criterios formativos del examen final.'
                  : `Progreso de autoevaluación: ${checkedCount} de 5 criterios verificados.`}
              </strong>
              <p className="mt-1">
                {checkedCount === RUBRIC_CRITERIA.length
                  ? 'Tu fundamentación con los ODS, la cita institucional en APA 7 y la referencia bibliográfica están listas para ser transferidas a tu entrega final en Blackboard.'
                  : 'Revisa cuidadosamente los puntos no marcados antes de enviar tu evaluación a la docente.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Global Bottom Navigation */}
      <div className="pt-4 flex flex-wrap gap-3 justify-between items-center border-t border-slate-200">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
        >
          ← Volver a Escena 5
        </button>

        <div className="flex gap-2">
          <button
            onClick={onRestart}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
          >
            Reiniciar Todo ↺
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-semibold border border-indigo-200 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
          >
            Imprimir / Guardar Pauta 🖨️
          </button>
        </div>
      </div>
    </div>
  );
};
