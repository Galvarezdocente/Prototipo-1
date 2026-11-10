import React, { useState } from 'react';
import { INTEGRATOR_CASE, RUBRIC_CRITERIA, INSTITUTIONAL_LINKS } from '../data/educationalContent';

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

    const count = Object.values(updated).filter(Boolean).length;
    if (count === RUBRIC_CRITERIA.length) {
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
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00a3e0]">
          Escena 6 · Taller Integrador y Autoevaluación Docente
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15284f] mt-1 tracking-tight">
          Corrección de Caso, Borrador Libre y Pauta de Cotejo
        </h2>
      </div>

      {/* Autonomous Learning Guide Box */}
      <div className="bg-[#f0f7ff] border border-sky-200 rounded-xl p-4 text-xs space-y-1.5">
        <strong className="block text-[#15284f] font-bold text-sm">
          📋 Instrucciones de Aprendizaje Autónomo:
        </strong>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-slate-700">
          <div><strong>🎯 Qué hacer:</strong> Completa los tres pasos del taller: 1) Diagnosticar fallas; 2) Ensayar tu párrafo; 3) Autoevaluar con la pauta docente.</div>
          <div><strong>📝 Cómo responder:</strong> Navega por las 3 pestañas superiores ('Diagnóstico', 'Redacción' y 'Pauta de Cotejo'). Marca cada casilla según tu texto.</div>
          <div><strong>💡 Cómo consultar pistas:</strong> En la pestaña 1 pulsa 'Ver Modelo Corregido Docente' para contrastar con una redacción modelo.</div>
          <div><strong>🔍 Cómo revisar:</strong> No hay calificación automática engañosa en la redacción libre; tú evalúas tu propio borrador mediante los 5 criterios de la rúbrica oficial.</div>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="flex border-b border-slate-200 gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Secciones del taller integrador">
        <button
          role="tab"
          aria-selected={activeTab === 'diagnostico'}
          onClick={() => setActiveTab('diagnostico')}
          className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
            activeTab === 'diagnostico'
              ? 'border-[#15284f] text-[#15284f]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          1. Diagnóstico de Caso con Errores
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'redactor'}
          onClick={() => setActiveTab('redactor')}
          className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
            activeTab === 'redactor'
              ? 'border-[#15284f] text-[#15284f]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          2. Laboratorio de Redacción Propia
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'rubrica'}
          onClick={() => setActiveTab('rubrica')}
          className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
            activeTab === 'rubrica'
              ? 'border-[#15284f] text-[#15284f]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          3. Pauta de Autoevaluación ({checkedCount}/5)
        </button>
      </div>

      {/* Tab 1: Diagnóstico */}
      {activeTab === 'diagnostico' && (
        <div className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
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
                className="px-4 py-2 bg-sky-50 hover:bg-sky-100 text-[#15284f] border border-sky-200 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
              >
                {showModelSolution ? 'Ocultar Modelo Corregido' : 'Ver Modelo Corregido Docente ✨'}
              </button>
            </div>
          </div>

          {showModelSolution && (
            <div className="bg-emerald-50/70 border border-emerald-300 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Modelo Académico Sobresaliente (Manual IPLACEX 2025 · ODS 4)
                </span>
                <span className="text-xs bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-semibold">
                  Alineado con Blackboard
                </span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-emerald-200 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                {INTEGRATOR_CASE.correctedModel}
              </div>
              <p className="text-xs text-emerald-900">
                Observa cómo el destinatario formal está claro, la cita de la ONU está integrada sin ninguna URL en el párrafo y la referencia contiene los 4 elementos canónicos del Manual IPLACEX (2025).
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Laboratorio de Redacción */}
      {activeTab === 'redactor' && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
            <span className="text-xs font-bold text-[#00a3e0] uppercase tracking-wider">
              Espacio Seguro de Práctica
            </span>
            <h3 className="font-bold text-slate-900 text-base">
              Redacta el borrador de tu párrafo argumentativo para la carta:
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Aviso pedagógico: Para respetar tu autoría y la ética académica, este recurso <strong>no realiza corrección semántica automática</strong> mediante inteligencia artificial. Utiliza este espacio para redactar libremente y contrástalo tú mismo(a) con la pauta de autoevaluación en la siguiente pestaña.
            </p>

            <textarea
              rows={6}
              value={studentText}
              onChange={(e) => setStudentText(e.target.value)}
              placeholder="Ejemplo: Estimado Comité de Selección de la Fundación de Técnicos Iberoamericanos: Presento mi postulación a la beca técnica en Barcelona motivado por... Tal como subraya la Organización de las Naciones Unidas [ONU] (s.f., secc. Metas, párr. 4)..."
              className="w-full p-3.5 border border-slate-300 rounded-xl text-xs sm:text-sm font-sans focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none focus:border-[#15284f]"
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
                  className="px-3.5 py-1 bg-[#15284f] hover:bg-[#1e3a8a] text-white font-semibold rounded transition-colors"
                >
                  Autoevaluar con la pauta (Paso 3) →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Rúbrica y Pauta */}
      {activeTab === 'rubrica' && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-[#00a3e0] uppercase tracking-wider">
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
              {RUBRIC_CRITERIA.map((criterion) => {
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
                        className="w-5 h-5 mt-0.5 rounded border-slate-300 text-[#15284f] focus:ring-[#15284f] shrink-0"
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
                  : 'bg-sky-50 border-sky-200 text-sky-950'
              }`}
            >
              <strong>
                {checkedCount === RUBRIC_CRITERIA.length
                  ? '¡Excelente trabajo! Has comprobado los 5 criterios formativos del examen final.'
                  : `Progreso de autoevaluación: ${checkedCount} de 5 criterios verificados.`}
              </strong>
              <p className="mt-1">
                {checkedCount === RUBRIC_CRITERIA.length
                  ? 'Tu texto cumple con el destinatario formal, la fundamentación con ODS 4, la citación institucional de la ONU en APA 7 y la referencia canónica requerida por las Bibliotecas IPLACEX (2025).'
                  : 'Revisa cuidadosamente los puntos no marcados antes de enviar tu evaluación a la docente en Blackboard.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Global Bottom Navigation */}
      <div className="pt-4 flex flex-wrap gap-3 justify-between items-center border-t border-slate-200">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
        >
          ← Volver a Escena 5
        </button>

        <div className="flex gap-2">
          <button
            onClick={onRestart}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
          >
            Reiniciar Todo ↺
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-sky-50 hover:bg-sky-100 text-[#15284f] font-semibold border border-sky-200 rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
          >
            Imprimir / Guardar Pauta 🖨️
          </button>
        </div>
      </div>
    </div>
  );
};
