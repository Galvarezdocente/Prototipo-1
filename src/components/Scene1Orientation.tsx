import React from 'react';
import { EXAM_CONTEXT, INSTITUTIONAL_LINKS } from '../data/educationalContent';

interface Scene1OrientationProps {
  onContinue: () => void;
}

export const Scene1Orientation: React.FC<Scene1OrientationProps> = ({ onContinue }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00a3e0]">
          Escena 1 · Orientación Formativa, Navegación y Caso del Examen
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15284f] mt-1 tracking-tight">
          De la fuente al argumento: APA 7 y ODS 4
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
          Recurso autoinstructivo para estudiantes de carreras técnicas y profesionales de <strong>IPLACEX</strong> en la asignatura <strong>Comunicación y Redacción</strong> (Blackboard Learn).
        </p>
      </div>

      {/* Guide for Autonomous Learning */}
      <div className="bg-[#f0f7ff] border border-sky-200 rounded-xl p-4 sm:p-5">
        <h3 className="font-bold text-base text-[#15284f] flex items-center gap-2 mb-2">
          <span>🧭</span> Guía de Aprendizaje Autónomo: ¿Cómo navegar y utilizar este recurso?
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
          Este objeto de aprendizaje está diseñado para que trabajes a tu propio ritmo, de manera 100% asincrónica y autónoma:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-white p-3 rounded-lg border border-sky-100 shadow-2xs space-y-1">
            <strong className="block text-[#15284f] font-semibold">1. Qué harás</strong>
            <p className="text-slate-600">
              Recorrerás 6 escenas progresivas: desde distinguir conceptos básicos hasta redactar y autoevaluar tu argumento.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-sky-100 shadow-2xs space-y-1">
            <strong className="block text-[#15284f] font-semibold">2. Cómo responder</strong>
            <p className="text-slate-600">
              Usa el ratón o el teclado (teclas <code>Tab</code> y <code>Enter</code>) para seleccionar opciones y clasificar ítems.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-sky-100 shadow-2xs space-y-1">
            <strong className="block text-[#15284f] font-semibold">3. Cómo consultar pistas</strong>
            <p className="text-slate-600">
              En cada actividad encontrarás el botón <strong>Solicitar Pista 💡</strong> con orientaciones pedagógicas del docente.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-sky-100 shadow-2xs space-y-1">
            <strong className="block text-[#15284f] font-semibold">4. Revisión y reintentos</strong>
            <p className="text-slate-600">
              Recibirás retroalimentación explicativa inmediata. Puedes pulsar <strong>Reintentar actividad ↺</strong> sin límite de intentos.
            </p>
          </div>
        </div>
      </div>

      {/* Official Verified Sources Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
        <h3 className="font-bold text-sm sm:text-base text-[#15284f] flex items-center gap-2 mb-2">
          <span>📚</span> Fuentes Oficiales que Respaldan este Recurso (Sin inventar datos)
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-3">
          Todos los ejemplos de citación, referencias y metas de sostenibilidad se basan en documentos institucionales vigentes:
        </p>
        <div className="grid sm:grid-cols-3 gap-3 text-xs">
          <a
            href={INSTITUTIONAL_LINKS.iplacexManualPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-700 hover:shadow-xs transition-all block group"
          >
            <strong className="text-[#15284f] group-hover:text-blue-700 block mb-1 flex items-center justify-between">
              Manual Bibliotecas IPLACEX <span>↗</span>
            </strong>
            <span className="text-slate-500">
              Normas (APA) 7.ª edición, Subdirección de Bibliotecas (Paula Vega, Febrero 2025).
            </span>
          </a>

          <a
            href={INSTITUTIONAL_LINKS.ods4Chile}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-700 hover:shadow-xs transition-all block group"
          >
            <strong className="text-[#15284f] group-hover:text-blue-700 block mb-1 flex items-center justify-between">
              Naciones Unidas · ODS 4 <span>↗</span>
            </strong>
            <span className="text-slate-500">
              Portal ONU Chile: Educación inclusiva, equitativa y formación técnica (Metas 4.3 y 4.4).
            </span>
          </a>

          <a
            href={INSTITUTIONAL_LINKS.apaStyleExamples}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-700 hover:shadow-xs transition-all block group"
          >
            <strong className="text-[#15284f] group-hover:text-blue-700 block mb-1 flex items-center justify-between">
              APA Style Oficial <span>↗</span>
            </strong>
            <span className="text-slate-500">
              American Psychological Association: Guías oficiales para citas y páginas web institucionales.
            </span>
          </a>
        </div>
      </div>

      {/* The Case Brief for the Final Exam */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Contexto del Examen Final de Comunicación y Redacción
        </div>
        <h3 className="text-lg font-bold text-[#15284f] mt-1 mb-2">
          Caso Real: Carta de Beca en Barcelona ante la «Fundación de Técnicos Iberoamericanos»
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {EXAM_CONTEXT.examPrompt}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-200 grid sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-slate-900 block">Destinatario formal:</span>
            <span className="text-slate-600">Comité de Selección, Fundación de Técnicos Iberoamericanos (Barcelona).</span>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-slate-900 block">Sustento técnico ODS:</span>
            <span className="text-slate-600">ODS 4 de la ONU: Metas 4.3 (Acceso a formación técnica superior) y 4.4 (Competencias técnicas para el empleo).</span>
          </div>
        </div>
      </div>

      {/* Diagnostic: Common Pitfalls to Avoid */}
      <div className="bg-amber-50/70 border border-amber-300 rounded-xl p-4 sm:p-5 text-amber-950">
        <h3 className="font-bold text-sm sm:text-base text-amber-900 flex items-center gap-2 mb-2">
          <span>⚠️</span> Tres errores frecuentes que este recurso te enseñará a erradicar:
        </h3>
        <div className="grid sm:grid-cols-3 gap-3 text-xs mt-3">
          <div className="bg-white p-3 rounded-lg border border-amber-200">
            <strong className="text-amber-900 block mb-1">1. La "URL suelta"</strong>
            <p className="text-slate-700">
              Copiar <code>https://chile.un.org/...</code> dentro del párrafo creyendo que es una cita válida.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-amber-200">
            <strong className="text-amber-900 block mb-1">2. Confusión Cita / Referencia</strong>
            <p className="text-slate-700">
              No distinguir la mención breve en el texto (cita) del asiento completo al final (referencia).
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-amber-200">
            <strong className="text-amber-900 block mb-1">3. La "Cita Isla"</strong>
            <p className="text-slate-700">
              Soltar una frase de la ONU como relleno decorativo, sin articularla con la formación en Barcelona.
            </p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
        <span className="text-xs text-slate-500">
          Puedes avanzar usando el botón Continuar o mediante la flecha derecha <code>→</code> de tu teclado.
        </span>
        <button
          onClick={onContinue}
          className="w-full sm:w-auto px-6 py-2.5 bg-[#15284f] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg shadow-xs transition-colors text-sm focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:outline-none"
        >
          Iniciar Actividad 2: Clasificar Elementos →
        </button>
      </div>
    </div>
  );
};
