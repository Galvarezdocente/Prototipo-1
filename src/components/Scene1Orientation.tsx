import React from 'react';
import { EXAM_CONTEXT } from '../data/educationalContent';

interface Scene1OrientationProps {
  onContinue: () => void;
}

export const Scene1Orientation: React.FC<Scene1OrientationProps> = ({ onContinue }) => {
  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
          Escena 1 · Orientación Formativa y Caso Real
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
          La Carta de Postulación a la Beca en Barcelona y el Respaldo con ODS
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
          Bienvenido(a) a este recurso interactivo. Como estudiante de formación técnica o profesional, en tu examen final de <strong>Comunicación y Redacción</strong> deberás redactar un texto formal de alta exigencia: fundamentar por qué mereces una estancia de especialización internacional ante la <strong>Fundación de Técnicos Iberoamericanos</strong>.
        </p>
      </div>

      {/* Diagnostic callout */}
      <div className="bg-amber-50/70 border border-amber-300 rounded-xl p-4 sm:p-5 text-amber-950">
        <h3 className="font-bold text-base flex items-center gap-2 text-amber-900">
          <span>⚠️</span> ¿Por qué surge este recurso? Errores más recurrentes en Blackboard:
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 mt-3 text-xs sm:text-sm">
          <div className="bg-white/80 p-3 rounded-lg border border-amber-200">
            <strong className="block text-amber-900 mb-1">1. La "URL suelta"</strong>
            <p className="text-slate-700">
              Copiar un enlace como <code>https://www.un.org/...</code> dentro del párrafo creyendo que es una cita formal.
            </p>
          </div>
          <div className="bg-white/80 p-3 rounded-lg border border-amber-200">
            <strong className="block text-amber-900 mb-1">2. Confusión Cita vs. Referencia</strong>
            <p className="text-slate-700">
              No distinguir la mención breve en el párrafo (cita) del asiento bibliográfico completo al final (referencia).
            </p>
          </div>
          <div className="bg-white/80 p-3 rounded-lg border border-amber-200">
            <strong className="block text-amber-900 mb-1">3. La "Cita Isla"</strong>
            <p className="text-slate-700">
              Pegar una cita textual de la ONU como relleno decorativo, sin articularla con el argumento técnico ni con Barcelona.
            </p>
          </div>
        </div>
      </div>

      {/* Case brief details */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h3 className="text-lg font-bold text-slate-900 mb-3">
          El Caso Evaluado: Beca de Especialización Técnica en Barcelona
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {EXAM_CONTEXT.examPrompt}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-200 grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div>
            <span className="font-semibold text-slate-900 block mb-1">Destinatario oficial:</span>
            <span className="text-slate-600">Comité de Selección, Fundación de Técnicos Iberoamericanos.</span>
          </div>
          <div>
            <span className="font-semibold text-slate-900 block mb-1">Marco normativo de citación:</span>
            <span className="text-slate-600">{EXAM_CONTEXT.manualTitle}</span>
          </div>
        </div>
      </div>

      {/* Why ODS */}
      <div className="border border-indigo-100 bg-indigo-50/50 rounded-xl p-5">
        <h3 className="font-bold text-indigo-950 text-base mb-2">
          ¿Por qué fundamentar tu postulación con un Objetivo de Desarrollo Sostenible (ODS)?
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
          Una fundación internacional no financia postulaciones basadas únicamente en deseos personales o frases vagas como <em>"quiero viajar a Barcelona porque es bonita"</em>. Exige demostrar que tu formación técnica resolverá problemas críticos de tu país alineados con la agenda global:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3 rounded-lg border border-indigo-200">
            <strong className="text-indigo-900 block">ODS 11: Ciudades y Comunidades Sostenibles</strong>
            <p className="text-slate-600 mt-1">
              Descarbonización, movilidad limpia, automatización y gestión de residuos urbanos e industriales.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-indigo-200">
            <strong className="text-indigo-900 block">ODS 9: Industria, Innovación e Infraestructuras</strong>
            <p className="text-slate-600 mt-1">
              Tecnificación de PYMES, mantenimiento predictivo, eficiencia energética y transformación digital.
            </p>
          </div>
        </div>
      </div>

      {/* Verification notice for teachers & students */}
      <div className="border border-slate-200 bg-white rounded-xl p-4 text-xs text-slate-600 flex items-start gap-3">
        <span className="text-base">📌</span>
        <div>
          <strong className="text-slate-900 block">Rigor metodológico y marcadores de verificación:</strong>
          En los ejemplos de este recurso encontrarás marcadores como <span className="bg-amber-100 text-amber-800 font-semibold px-1.5 py-0.5 rounded border border-amber-300">[Pendiente de verificar por docente]</span>. Esto asegura que la docente o el docente ratifique los metadatos específicos (año exacto de la página o párrafo) antes de su publicación definitiva en Blackboard.
        </div>
      </div>

      {/* Action button */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onContinue}
          className="px-6 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded-lg shadow-sm transition-colors text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
        >
          Iniciar Práctica Interactiva (Paso 2) →
        </button>
      </div>
    </div>
  );
};
