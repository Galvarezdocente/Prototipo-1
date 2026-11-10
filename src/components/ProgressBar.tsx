import React from 'react';
import { SceneId } from '../types';
import { SCENE_METADATA } from '../data/educationalContent';

interface ProgressBarProps {
  currentScene: SceneId;
  completedScenes: Set<SceneId>;
  onSelectScene: (scene: SceneId) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentScene,
  completedScenes,
  onSelectScene,
}) => {
  const percentage = Math.round((currentScene / 6) * 100);
  const currentMeta = SCENE_METADATA.find((s) => s.id === currentScene);

  return (
    <section className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs mb-6" aria-label="Progreso formativo">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00a3e0]">
            Escena {currentScene} de 6 · Trayecto Autoinstructivo
          </span>
          <h2 className="text-base sm:text-lg font-bold text-[#15284f]">
            {currentMeta?.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {currentMeta?.desc}
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <span className="text-xs text-slate-500 font-medium">Avance:</span>
          <span className="text-sm font-bold text-[#15284f] bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded" aria-live="polite">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Accessible progressbar */}
      <div 
        className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progreso del recurso: ${percentage}%`}
      >
        <div
          className="h-full bg-[#15284f] transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Accessible scene switchers */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-4" role="tablist" aria-label="Selector de escenas de aprendizaje">
        {SCENE_METADATA.map((scene) => {
          const isActive = scene.id === currentScene;
          const isCompleted = completedScenes.has(scene.id as SceneId);

          return (
            <button
              key={scene.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectScene(scene.id as SceneId)}
              className={`p-2 rounded-lg text-left text-xs transition-all border flex flex-col justify-between min-h-[58px] focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none ${
                isActive
                  ? 'bg-sky-50 border-[#15284f] text-[#15284f] font-semibold ring-1 ring-[#15284f]'
                  : isCompleted
                  ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 hover:bg-emerald-100/70'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-[10px] uppercase text-slate-500">
                  Paso {scene.id}
                </span>
                {isCompleted && (
                  <span className="text-[10px] font-bold text-emerald-700" title="Actividad completada">
                    ✓ Listo
                  </span>
                )}
                {isActive && !isCompleted && (
                  <span className="text-[10px] font-bold text-[#15284f]">
                    Actual
                  </span>
                )}
              </div>
              <span className="truncate mt-1 text-[11px] leading-tight">
                {scene.shortTitle}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
