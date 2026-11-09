import React, { useState } from 'react';

interface BlackboardGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlackboardGuideModal: React.FC<BlackboardGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  if (!isOpen) return null;

  const iframeSnippet = `<iframe 
  src="de_la_fuente_al_argumento_v2.html" 
  title="Recurso Educativo: De la fuente al argumento (APA 7 y ODS)" 
  width="100%" 
  height="780" 
  style="border: 1px solid #cbd5e1; border-radius: 8px; max-width: 100%;" 
  allow="fullscreen"
></iframe>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iframeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blackboard-guide-title"
    >
      <div className="bg-white border border-slate-300 rounded-2xl max-w-3xl w-full p-6 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase text-indigo-700 tracking-wider">
              Guía Docente y Archivos Autocontenidos
            </span>
            <h2 id="blackboard-guide-title" className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Integración y Prueba Real en Blackboard Learn
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Formación Transversal Comunicación y Redacción · Sistema de Bibliotecas IPLACEX (2025)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg text-lg font-bold leading-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
            aria-label="Cerrar ventana"
          >
            ✕
          </button>
        </div>

        {/* Standalone files download / view zone */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
          <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
            <span>📦</span> Archivos HTML Autocontenidos (Sin dependencias externas)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Estos archivos son 100% autónomos (contienen todo el HTML, CSS y JavaScript internamente). Funcionan de inmediato sin requerir conexión a internet ni bibliotecas externas:
          </p>

          <div className="grid sm:grid-cols-2 gap-3 pt-1">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between space-y-2">
              <div>
                <strong className="block text-slate-900 text-xs sm:text-sm font-semibold">
                  Versión 1: «de_la_fuente_al_argumento_v1.html»
                </strong>
                <p className="text-xs text-slate-500 mt-1">
                  Estructura lineal, peso ultraligero (~25 KB). Ideal para incrustar directamente o subir como archivo descargable en Blackboard.
                </p>
              </div>
              <div className="flex gap-2 pt-2">
                <a
                  href="/de_la_fuente_al_argumento_v1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
                >
                  Abrir en pestaña ↗
                </a>
                <a
                  href="/de_la_fuente_al_argumento_v1.html"
                  download="de_la_fuente_al_argumento_v1.html"
                  className="px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Descargar v1 ⬇
                </a>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between space-y-2">
              <div>
                <strong className="block text-slate-900 text-xs sm:text-sm font-semibold">
                  Versión 2: «de_la_fuente_al_argumento_v2.html» (Avanzada)
                </strong>
                <p className="text-xs text-slate-500 mt-1">
                  Incluye barra de herramientas de accesibilidad (zoom de letra, alto contraste WCAG AA, glosario emergente y modo impresión).
                </p>
              </div>
              <div className="flex gap-2 pt-2">
                <a
                  href="/de_la_fuente_al_argumento_v2.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
                >
                  Abrir en pestaña ↗
                </a>
                <a
                  href="/de_la_fuente_al_argumento_v2.html"
                  download="de_la_fuente_al_argumento_v2.html"
                  className="px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Descargar v2 ⬇
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Instructions */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm sm:text-base text-slate-900">
            Procedimiento de Montaje en Blackboard Learn (Ultra y Original)
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2">
              <strong className="block text-indigo-950 font-bold">Opción A: Blackboard Ultra (Recomendada)</strong>
              <ol className="list-decimal pl-4 space-y-1 text-slate-600">
                <li>Ingresa a la sección de contenidos del curso (Semana correspondiente al Examen).</li>
                <li>Haz clic en el signo <code>+</code> y selecciona <strong>Cargar desde dispositivo</strong> o <strong>Crear Documento</strong>.</li>
                <li>Sube el archivo <code>de_la_fuente_al_argumento_v2.html</code>.</li>
                <li>En la configuración de visualización, selecciona <strong>Ver e ingresar</strong> (o <em>Abrir en ventana nueva</em>).</li>
              </ol>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2">
              <strong className="block text-indigo-950 font-bold">Opción B: Incrustar mediante iframe (HTML)</strong>
              <ol className="list-decimal pl-4 space-y-1 text-slate-600">
                <li>Al crear un Documento en Blackboard Ultra, añade un bloque de tipo <strong>HTML</strong>.</li>
                <li>Pega el código iframe proporcionado a continuación.</li>
                <li>Asegúrate de que el archivo HTML esté alojado en los archivos del curso de Blackboard.</li>
              </ol>
            </div>
          </div>

          {/* Iframe code block */}
          <div className="p-3.5 bg-slate-900 rounded-xl text-slate-200 text-xs font-mono space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Código HTML para incrustar en Blackboard:</span>
              <button
                onClick={copyToClipboard}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] transition-colors"
              >
                {copiedCode ? '✓ Copiado' : 'Copiar código'}
              </button>
            </div>
            <pre className="overflow-x-auto p-2 bg-slate-950 rounded border border-slate-800 text-[11px] text-emerald-400">
              {iframeSnippet}
            </pre>
          </div>
        </div>

        {/* Real testing protocol */}
        <div className="bg-amber-50/80 border border-amber-300 rounded-xl p-4 sm:p-5 space-y-3 text-amber-950">
          <h3 className="font-bold text-sm sm:text-base text-amber-900 flex items-center gap-2">
            <span>🔍</span> Protocolo Obligatorio de Prueba Real en Blackboard
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Para garantizar que ningún estudiante experimente barreras de acceso, no declares la compatibilidad como 'verificada' hasta completar esta lista de comprobación:
          </p>

          <ul className="text-xs sm:text-sm space-y-1.5 list-disc pl-5 text-slate-800">
            <li>
              <strong>Paso 1 (Vista de Estudiante):</strong> Activa el icono de <em>Vista previa del alumno</em> en la esquina superior derecha de Blackboard.
            </li>
            <li>
              <strong>Paso 2 (Navegación con teclado):</strong> Presiona la tecla <code>Tab</code> para verificar que el foco visual sea nítido y que todos los botones de Anterior/Continuar/Pistas sean accionables con <code>Enter</code> o <code>Espacio</code>.
            </li>
            <li>
              <strong>Paso 3 (Dispositivos móviles):</strong> Abre el curso desde un teléfono móvil o redimensiona la ventana a 360px de ancho para comprobar que no exista desbordamiento horizontal.
            </li>
            <li>
              <strong>Paso 4 (Verificación de Metadatos ONU):</strong> Corrobora los marcadores rotulados <span className="bg-amber-200 text-amber-900 px-1 py-0.2 rounded font-semibold text-xs">[Pendiente de verificar por docente]</span> con la página institucional de la ONU que hayas indicado en las instrucciones de la asignatura.
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded-lg text-sm transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:outline-none"
          >
            Entendido y Cerrar Guía
          </button>
        </div>
      </div>
    </div>
  );
};
