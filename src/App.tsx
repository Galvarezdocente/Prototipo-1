/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SceneId } from './types';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { Scene1Orientation } from './components/Scene1Orientation';
import { Scene2Classify } from './components/Scene2Classify';
import { Scene3Citation } from './components/Scene3Citation';
import { Scene4Reference } from './components/Scene4Reference';
import { Scene5Comparison } from './components/Scene5Comparison';
import { Scene6Integrator } from './components/Scene6Integrator';
import { BlackboardGuideModal } from './components/BlackboardGuideModal';
import { INSTITUTIONAL_LINKS } from './data/educationalContent';

export default function App() {
  const [currentScene, setCurrentScene] = useState<SceneId>(1);
  const [completedScenes, setCompletedScenes] = useState<Set<SceneId>>(new Set());
  const [isBlackboardModalOpen, setIsBlackboardModalOpen] = useState<boolean>(false);

  const markSceneCompleted = (sceneId: SceneId) => {
    setCompletedScenes((prev) => new Set([...prev, sceneId]));
  };

  const handleNext = () => {
    if (currentScene < 6) {
      const next = (currentScene + 1) as SceneId;
      setCurrentScene(next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentScene > 1) {
      const prev = (currentScene - 1) as SceneId;
      setCurrentScene(prev);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    if (window.confirm('¿Deseas reiniciar el recorrido desde la Escena 1?')) {
      setCurrentScene(1);
      setCompletedScenes(new Set());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keyboard navigation across scenes (Arrow keys when not typing in inputs)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      if (e.key === 'ArrowRight' && currentScene < 6) {
        handleNext();
      } else if (e.key === 'ArrowLeft' && currentScene > 1) {
        handleBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScene]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Skip to main content link for screen reader and keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#15284f] focus:text-white focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Saltar al contenido didáctico principal
      </a>

      {/* Top Bar Header */}
      <Header
        currentScene={currentScene}
        onSelectScene={(scene) => {
          setCurrentScene(scene);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBlackboardGuide={() => setIsBlackboardModalOpen(true)}
      />

      {/* Institutional Breadcrumb Bar with Iplacex palette */}
      <div className="bg-[#15284f] text-slate-200 text-xs py-2 px-4 border-b border-blue-950">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wide">IPLACEX</span>
            <span aria-hidden="true" className="text-sky-400">·</span>
            <span>Subdirección de Bibliotecas & Formación Transversal</span>
            <span aria-hidden="true" className="text-sky-400">·</span>
            <span className="text-sky-200">Comunicación y Redacción (Blackboard)</span>
          </div>
          <div className="flex items-center gap-3 text-sky-200">
            <span>Manual Bibliotecas (2025)</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>APA 7.ª edición</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 focus:outline-none"
      >
        {/* Progress Tracker */}
        <ProgressBar
          currentScene={currentScene}
          completedScenes={completedScenes}
          onSelectScene={(scene) => {
            setCurrentScene(scene);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Dynamic Scene Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-xs">
          {currentScene === 1 && (
            <Scene1Orientation
              onContinue={() => {
                markSceneCompleted(1);
                handleNext();
              }}
            />
          )}

          {currentScene === 2 && (
            <Scene2Classify
              onComplete={() => markSceneCompleted(2)}
              onContinue={handleNext}
              onBack={handleBack}
            />
          )}

          {currentScene === 3 && (
            <Scene3Citation
              onComplete={() => markSceneCompleted(3)}
              onContinue={handleNext}
              onBack={handleBack}
            />
          )}

          {currentScene === 4 && (
            <Scene4Reference
              onComplete={() => markSceneCompleted(4)}
              onContinue={handleNext}
              onBack={handleBack}
            />
          )}

          {currentScene === 5 && (
            <Scene5Comparison
              onComplete={() => markSceneCompleted(5)}
              onContinue={handleNext}
              onBack={handleBack}
            />
          )}

          {currentScene === 6 && (
            <Scene6Integrator
              onComplete={() => markSceneCompleted(6)}
              onBack={handleBack}
              onRestart={handleRestart}
            />
          )}
        </div>

        {/* Persistent Resources Banner */}
        <section className="mt-8 bg-sky-50/70 border border-sky-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <span className="text-xl">📁</span>
            <div>
              <strong className="text-[#15284f] block font-semibold">
                Fuentes oficiales y archivos para el aula virtual de Blackboard
              </strong>
              <p className="text-slate-600 text-xs">
                Accede al <a href={INSTITUTIONAL_LINKS.iplacexManualPdf} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-semibold">Manual de Bibliotecas IPLACEX (PDF)</a>, al portal de <a href={INSTITUTIONAL_LINKS.ods4Chile} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-semibold">Naciones Unidas ODS 4</a> o descarga los archivos HTML autocontenidos (v1 y v2).
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsBlackboardModalOpen(true)}
            className="px-4 py-2 bg-[#15284f] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg text-xs whitespace-nowrap shrink-0 transition-colors focus-visible:ring-2 focus-visible:ring-[#15284f] focus-visible:outline-none"
          >
            Ver Fuentes & Blackboard →
          </button>
        </section>
      </main>

      {/* Accessible Footer with IPLACEX accreditation note */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 px-4 sm:px-6 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-semibold text-slate-700 flex items-center gap-2 justify-center sm:justify-start">
              <span className="font-bold text-[#15284f]">IPLACEX</span>
              <span>· Instituto Profesional Acreditado Nivel Avanzado (CNA-Chile)</span>
            </p>
            <p className="text-[11px] text-slate-500">
              «De la fuente al argumento: APA 7 y ODS 4» · Subdirección de Bibliotecas & Formación Transversal.
            </p>
          </div>
          <div className="text-slate-600 sm:text-right space-y-0.5">
            <p>Destinatario del caso: <strong>Fundación de Técnicos Iberoamericanos</strong> (Barcelona)</p>
            <p className="text-[11px] text-slate-400">
              Accesibilidad validada WCAG AA · Controles 100% navegables por teclado
            </p>
          </div>
        </div>
      </footer>

      {/* Blackboard Integration Guide Modal */}
      <BlackboardGuideModal
        isOpen={isBlackboardModalOpen}
        onClose={() => setIsBlackboardModalOpen(false)}
      />
    </div>
  );
}
