import { ClassificationItem, CitationOption, ReferenceElement, ComparisonScenario, RubricCriterion } from '../types';

export const EXAM_CONTEXT = {
  institution: "IPLACEX - Instituto Profesional Latinoamericano de Comercio Exterior",
  course: "Formación Transversal: Comunicación y Redacción",
  platform: "Blackboard Learn",
  manualTitle: "Manual de Citación y Referencias APA (7.ª edición) - Sistema de Bibliotecas IPLACEX (2025)",
  examPrompt: "Carta formal de postulación a una beca técnica internacional en Barcelona, dirigida a la «Fundación de Técnicos Iberoamericanos», sustentada en dos argumentos vinculados a un Objetivo de Desarrollo Sostenible (ODS de la Organización de las Naciones Unidas) y respaldada con al menos una cita institucional en formato APA 7 y su respectiva referencia bibliográfica.",
  teacherNote: "Importante: Este recurso pedagógico complementa la preparación del examen final; no genera la carta terminada ni sustituye la retroalimentación ni evaluación del cuerpo docente."
};

export const SCENE_METADATA = [
  { id: 1, title: "1. Orientación y Caso", shortTitle: "Caso Beca Barcelona", desc: "El reto del examen final y la fundamentación con ODS" },
  { id: 2, title: "2. Clasificar: Cita vs. Referencia vs. URL", shortTitle: "Cita, Referencia y URL", desc: "Distinción conceptual y superación del error de la URL suelta" },
  { id: 3, title: "3. Citar la Fuente Institucional", shortTitle: "Citar según APA 7", desc: "Autor corporativo, año o s.f., formato narrativo y parentético" },
  { id: 4, title: "4. Construir la Referencia", shortTitle: "Referencia Bibliográfica", desc: "Las 4 preguntas clave de APA 7 (¿Quién? ¿Cuándo? ¿Qué? ¿Dónde?)" },
  { id: 5, title: "5. Fuente y Argumento", shortTitle: "Comparar Fragmentos", desc: "¿Dónde la cita sustenta el argumento y dónde solo es decorativa?" },
  { id: 6, title: "6. Taller y Autoevaluación", shortTitle: "Taller Integrador", desc: "Corrección guiada de carta, borrador propio y pauta de cotejo" },
];

export const CLASSIFICATION_ITEMS: ClassificationItem[] = [
  {
    id: "item-1",
    text: "https://www.un.org/sustainabledevelopment/es/cities/",
    correctCategory: "url",
    explanation: "Es únicamente un localizador web (URL suelta). Una dirección electrónica no acredita autoría, año ni título del documento. En un texto académico o profesional no reemplaza ni a la cita en el párrafo ni a la referencia bibliográfica.",
    hint: "Observa que solo contiene el protocolo y la ruta de dominio en internet, sin datos de autoría ni año.",
    sourceContext: "Enlace copiado de la barra de direcciones del navegador."
  },
  {
    id: "item-2",
    text: "(Organización de las Naciones Unidas [ONU], 2023, párr. 4)",
    correctCategory: "cita",
    explanation: "Es una CITA PARENTÉTICA en el texto. Se ubica dentro del cuerpo de la carta entre paréntesis, indicando el autor corporativo institucional (con corchetes para la sigla en la primera mención), el año y el localizador de párrafo en una página web.",
    hint: "Va entre paréntesis, dentro del texto que estás redactando, señalando a quién pertenece la idea mientras argumentas.",
    sourceContext: "Ubicada al final de una afirmación en el segundo párrafo de la carta de postulación."
  },
  {
    id: "item-3",
    text: "Organización de las Naciones Unidas. (2023). Objetivo 11: Lograr que las ciudades sean más inclusivas, seguras, resilientes y sostenibles. Naciones Unidas. https://www.un.org/sustainabledevelopment/es/cities/",
    correctCategory: "referencia",
    explanation: "Es una REFERENCIA BIBLIOGRÁFICA completa según APA 7 (Manual IPLACEX, 2025). Se ubica al final de la carta en la sección 'Referencias' y entrega todos los datos necesarios para que el evaluador identifique y recupere la fuente: autor, fecha, título en cursiva, sitio web y URL.",
    hint: "Contiene los cuatro elementos canónicos de APA 7: autor institucional con punto, año entre paréntesis, título en cursiva y enlace web final.",
    sourceContext: "Ubicada en la lista de Referencias al cierre del documento de postulación."
  },
  {
    id: "item-4",
    text: "Según la Organización de las Naciones Unidas [ONU] (2023), la rápida urbanización en Iberoamérica exige tecnificar la gestión de residuos...",
    correctCategory: "cita",
    explanation: "Es una CITA NARRATIVA en el texto. El nombre del autor corporativo se incorpora de manera fluida en la redacción de la oración, y el año queda entre paréntesis inmediatamente después del autor.",
    hint: "El autor forma parte gramatical de la frase ('Según...', 'Tal como afirma...').",
    sourceContext: "Integrada directamente en la redacción de un argumento técnico."
  },
  {
    id: "item-5",
    text: "www.un.org/es/sustainable-development-goals",
    correctCategory: "url",
    explanation: "Es una URL aislada. Pegar una dirección web en medio de un argumento es una de las faltas más sancionadas en la evaluación de Comunicación y Redacción de IPLACEX.",
    hint: "No tiene paréntesis de citación ni estructura de ficha bibliográfica.",
    sourceContext: "Dirección web suelta pegada en un borrador."
  },
  {
    id: "item-6",
    text: "Organización de las Naciones Unidas. (s.f.). Objetivo 9: Industria, innovación e infraestructuras [Pendiente de verificar por docente]. Naciones Unidas. https://www.un.org/sustainabledevelopment/es/infrastructure-industrialization/",
    correctCategory: "referencia",
    explanation: "Es una REFERENCIA BIBLIOGRÁFICA con '(s.f.)' (sin fecha). En APA 7 (Manual IPLACEX 2025), cuando una página web institucional no exhibe fecha clara de publicación o actualización, se utiliza la abreviatura latina en minúscula con puntos '(s.f.)'.",
    hint: "Observa la indicación '(s.f.)' y el título del ODS en letra cursiva.",
    sourceContext: "Entrada bibliográfica de página institucional estática sin fecha visible."
  }
];

export const CITATION_OPTIONS: CitationOption[] = [
  {
    id: "opt-correct-narrative",
    citationText: "Tal como subraya la Organización de las Naciones Unidas [ONU] (2023, párr. 3), el desarrollo industrial sostenible requiere técnicos capacitados en eficiencia energética.",
    type: "narrativa",
    isCorrect: true,
    feedback: "¡Excelente elección! Es una Cita Narrativa correcta: el autor corporativo se integra gramaticalmente en la oración, la sigla ONU se presenta entre corchetes la primera vez, el año va entre paréntesis y se señala el número de párrafo porque las páginas web no tienen numeración de página fija.",
    keyRule: "APA 7 / Manual IPLACEX 2025: En la primera mención de un autor institucional con sigla reconocida, se escribe el nombre completo seguido de la sigla entre corchetes: Organización de las Naciones Unidas [ONU] (año)."
  },
  {
    id: "opt-correct-parenthetical",
    citationText: "La tecnificación de las redes logísticas resulta indispensable para mitigar la huella de carbono en centros urbanos (Organización de las Naciones Unidas [ONU], 2023, párr. 5).",
    type: "parentetica",
    isCorrect: true,
    feedback: "¡Muy bien! Es una Cita Parentética correcta: todo el bloque de crédito se ubica al final de la aseveración entre paréntesis, separando el autor corporativo, el año y el localizador de párrafo mediante comas.",
    keyRule: "APA 7 / Manual IPLACEX 2025: Cita parentética con autor institucional: (Organización de las Naciones Unidas [ONU], año, párr. X). En citas posteriores en el mismo texto, se utilizará simplemente: (ONU, año, párr. X)."
  },
  {
    id: "opt-error-url",
    citationText: "La tecnificación de las redes logísticas resulta indispensable (ver https://www.un.org/sustainabledevelopment/es/cities/).",
    type: "incorrecta",
    isCorrect: false,
    feedback: "Incorrecto. En normas APA 7 nunca se coloca la URL dentro del cuerpo del texto ni dentro de los paréntesis de una cita. La URL pertenece exclusivamente a la lista de Referencias al final de la carta.",
    keyRule: "Regla de oro IPLACEX: En el texto solo van autor, fecha y localizador (página o párrafo). La URL jamás va en la cita."
  },
  {
    id: "opt-error-title",
    citationText: "Según el texto 'Objetivo 11: Ciudades Sostenibles' (ONU, 2023, s.p.), se necesita más innovación...",
    type: "incorrecta",
    isCorrect: false,
    feedback: "Inadecuado. Cuando una fuente tiene autor claramente identificable (en este caso el autor institucional es la Organización de las Naciones Unidas), se cita por el autor, no por el título del documento o de la página web. Además, en la primera mención institucional debe señalarse el nombre completo antes de usar únicamente la sigla.",
    keyRule: "Manual IPLACEX: Solo se cita por título cuando la obra es anónima o no tiene autor personal ni corporativo atribuible."
  }
];

export const REFERENCE_ELEMENTS: ReferenceElement[] = [
  {
    id: "ref-who",
    question: "quien",
    questionLabel: "¿Quién es el autor?",
    label: "Autor Institucional / Corporativo",
    value: "Organización de las Naciones Unidas.",
    formatNote: "Se escribe el nombre oficial completo de la institución, finalizando con un punto. No se inicia con la sigla aislada.",
    isVerified: true
  },
  {
    id: "ref-when",
    question: "cuando",
    questionLabel: "¿Cuándo se publicó o actualizó?",
    label: "Fecha de publicación",
    value: "(2023).",
    formatNote: "Entre paréntesis, seguido de punto. Si la página no exhibe fecha de publicación ni copyright específico del contenido, se coloca (s.f.) [Pendiente de verificar por docente en la página exacta consultada].",
    isVerified: true
  },
  {
    id: "ref-what",
    question: "que",
    questionLabel: "¿Qué título tiene el recurso?",
    label: "Título de la página web específica",
    value: "Objetivo 11: Lograr que las ciudades sean más inclusivas, seguras, resilientes y sostenibles.",
    formatNote: "¡En cursiva (itálica)! Se escribe en mayúscula solo la primera letra del título y nombres propios. Finaliza con punto.",
    isVerified: true
  },
  {
    id: "ref-where",
    question: "donde",
    questionLabel: "¿Dónde se encuentra alojado?",
    label: "Sitio web y enlace URL directo",
    value: "Naciones Unidas. https://www.un.org/sustainabledevelopment/es/cities/",
    formatNote: "Se indica el nombre del portal si difiere del autor, y la URL activa completa (sin punto al final de la URL para no romper el hipervínculo).",
    isVerified: true
  }
];

export const COMPARISON_SCENARIO: ComparisonScenario = {
  id: "scenario-barcelona-ods11",
  title: "Carta de Beca en Barcelona: Vinculación de argumento técnico con el ODS 11",
  odsFocus: "ODS 11: Ciudades y comunidades sostenibles (ONU)",
  excerptA: {
    label: "Opción A: Cita 'isla' o decorativa (Sin fundamentación real)",
    text: "Estimados miembros de la Fundación de Técnicos Iberoamericanos: Me dirijo a ustedes porque siempre he querido perfeccionarme en Barcelona, una ciudad hermosa y cosmopolita. Como señala la Organización de las Naciones Unidas [ONU] (2023), 'las ciudades representan el 70 % de las emisiones de carbono globales y más del 60 % del uso de recursos'. Por esta razón, la beca sería una oportunidad maravillosa para mi crecimiento personal y profesional, ya que tengo muchas ganas de viajar y aprender de sus prestigiosos profesores.",
    isEffective: false,
    analysis: "La cita es una 'isla flotante': el estudiante arroja un dato estadístico de la ONU pero no lo conecta con su formación técnica, ni con una problemática concreta de su territorio, ni explica qué competencias técnicas adquirirá en Barcelona para incidir en esa problemática.",
    citationType: "Cita decorativa desconectada de la tesis"
  },
  excerptB: {
    label: "Opción B: Cita integrada como respaldo de un argumento técnico sólido",
    text: "Estimado Comité de Selección de la Fundación de Técnicos Iberoamericanos: Postulo a la beca de especialización en Barcelona motivado por la urgencia de modernizar los sistemas de movilidad y gestión técnica en mi región. De acuerdo con la Organización de las Naciones Unidas [ONU] (2023), alcanzar urbes sostenibles exige transformar la infraestructura crítica, dado que las ciudades concentran 'más del 60 % del uso de recursos' (párr. 4). Frente a este desafío, cursar este programa en Barcelona —referente internacional en modelos de 'Superilles' y redes logísticas descarbonizadas— me dotará de metodologías aplicadas para liderar la reconversión tecnológica de nuestros talleres y municipios, impactando directamente en las metas del ODS 11 en nuestra comunidad iberoamericana.",
    isEffective: true,
    analysis: "La cita funciona como fundamento: respalda la premisa de que la infraestructura urbana exige tecnificación. Inmediatamente el postulante vincula la realidad de Barcelona con soluciones técnicas aplicables a su entorno laboral, justificando por qué la beca de la Fundación es el instrumento formativo idóneo.",
    citationType: "Cita argumentativa integrada y pertinente"
  },
  keyTakeaway: "Una cita académica nunca debe insertarse como adorno o relleno. En una carta formal a una fundación internacional, la fuente institucional valida que el problema técnico que pretendes resolver es una prioridad global reconocida por la ONU.",
  hint: "Fíjate en cuál de los dos textos la cita sirve de puente entre el diagnóstico de la ONU y la especialización práctica que el técnico irá a cursar a Barcelona."
};

export const INTEGRATOR_CASE = {
  initialTextWithErrors: `Estimada Fundación de Técnicos Iberoamericanos:
Deseo ganar la beca en Barcelona porque mi país tiene problemas graves de infraestructura. En https://www.un.org/sustainabledevelopment/es/cities/ dice que las ciudades gastan muchos recursos y contaminan. Yo opino que los técnicos debemos estudiar más para cambiar esto, y por eso Barcelona es el mejor lugar porque allá todo es moderno. Si me dan la beca prometo ponerle mucho empeño a las clases.
Referencia: www.un.org`,
  identifiedErrors: [
    {
      type: "URL en lugar de cita",
      description: "Colocar 'En https://www.un.org/... dice que' arruina la formalidad académica. Las URLs no son autores y no deben ir en el cuerpo del texto.",
      fix: "Sustituir por cita formal: (Organización de las Naciones Unidas [ONU], 2023, párr. 4) o cita narrativa."
    },
    {
      type: "Argumento puramente testimonial/vago",
      description: "Frases como 'Barcelona es el mejor lugar porque allá todo es moderno' no demuestran competencia técnica ni alineamiento con la misión de la Fundación.",
      fix: "Articular la evidencia de la ONU con las fortalezas técnicas de Barcelona (eco-diseño, logística, automatización) y su transferencia profesional a Iberoamérica."
    },
    {
      type: "Referencia incompleta y sin formato APA",
      description: "Escribir solo 'Referencia: www.un.org' omite autor institucional, año, título del ODS en cursiva y protocolo web.",
      fix: "Elaborar la referencia canónica en 4 elementos: Autor. (Año). *Título*. Sitio web. URL"
    }
  ],
  correctedModel: `Estimado Comité de Selección, Fundación de Técnicos Iberoamericanos:
Presento mi postulación a la beca técnica en Barcelona con la convicción de que la formación técnico-profesional es el motor decisivo para la sostenibilidad regional. Tal como establece la Organización de las Naciones Unidas [ONU] (2023, párr. 4), la transición hacia comunidades sostenibles (ODS 11) demanda una reestructuración profunda en el uso de recursos e infraestructuras locales. La estancia formativa en Barcelona me permitirá asimilar directamente las técnicas de gestión energética y mantenimiento inteligente que la ciudad ha implementado con éxito, facultándome para transferir estos estándares a las pequeñas y medianas empresas de nuestro sector técnico en Iberoamérica.

Referencia:
Organización de las Naciones Unidas. (2023). Objetivo 11: Lograr que las ciudades sean más inclusivas, seguras, resilientes y sostenibles. Naciones Unidas. https://www.un.org/sustainabledevelopment/es/cities/`
};

export const RUBRIC_CRITERIA: RubricCriterion[] = [
  {
    id: "crit-recipient",
    title: "1. Destinatario y Adecuación Formal",
    description: "La carta se dirige explícitamente a la «Fundación de Técnicos Iberoamericanos» con registro formal y propósito claro de postulación a la beca en Barcelona.",
    exemplary: "Encabezado y cuerpo adaptados rigurosamente al destinatario institucional con tono profesional, objetivo claro y justificación técnica.",
    acceptable: "Menciona a la Fundación pero el tono oscila ocasionalmente entre lo formal y lo informal.",
    needsImprovement: "No menciona a la institución receptora o emplea fórmulas genéricas e informales incompatibles con una postulación formal."
  },
  {
    id: "crit-ods",
    title: "2. Vinculación Argumentativa con un ODS",
    description: "Se plantean dos argumentos técnicos sólidos fundamentados en un Objetivo de Desarrollo Sostenible (ONU).",
    exemplary: "Los dos argumentos articulan con claridad los desafíos del ODS elegido con la formación técnica del postulante y el impacto en su comunidad.",
    acceptable: "Menciona el ODS pero uno de los argumentos queda en el plano meramente descriptivo o de deseo personal.",
    needsImprovement: "No se identifica el ODS de la ONU o se nombra de forma accesoria sin constituir un argumento de postulación."
  },
  {
    id: "crit-citation",
    title: "3. Cita Institucional en el Texto (APA 7 - IPLACEX)",
    description: "Incorpora una cita de página web de la ONU aplicando autor corporativo, año o (s.f.) y localizador (párrafo/sección).",
    exemplary: "Aplica cita narrativa o parentética impecable: nombre completo en primera mención con sigla [ONU], año exacto o (s.f.) y número de párrafo. Sin URLs en el texto.",
    acceptable: "Cita a la ONU pero omite corchetes de sigla, confunde el año o no indica párrafo tratándose de cita textual.",
    needsImprovement: "Inserta una URL suelta en el texto, cita por el título o no acredita la fuente en el párrafo."
  },
  {
    id: "crit-articulation",
    title: "4. Articulación Fuente-Argumento (Anti-cita flotante)",
    description: "La cita de la fuente sustenta y potencia el razonamiento del postulante; no es un adorno.",
    exemplary: "La evidencia de la ONU sirve de premisa para fundamentar por qué la especialización en Barcelona es indispensable para resolver un problema técnico concreto.",
    acceptable: "La cita tiene relación temática pero el párrafo no elabora suficientemente el vínculo con la beca solicitada.",
    needsImprovement: "Cita flotante: la cita está copiada y pegada sin introducción, análisis ni nexo con el párrafo del estudiante."
  },
  {
    id: "crit-reference",
    title: "5. Referencia Bibliográfica Final (APA 7 - IPLACEX)",
    description: "Presenta la referencia completa con los 4 elementos canónicos: ¿Quién? ¿Cuándo? ¿Qué? ¿Dónde?",
    exemplary: "Estructura perfecta: Autor institucional con punto. (Año o s.f.). Título de la página en cursiva. Nombre del portal si difiere. URL activa y limpia.",
    acceptable: "Presenta los 4 datos pero omite la cursiva en el título, añade frases en desuso como 'Recuperado de' o coloca punto tras la URL.",
    needsImprovement: "Solo pega una URL al final o confunde la referencia con una nota al pie incompleta."
  }
];

export const GLOSSARY_TERMS = [
  {
    term: "Cita en el texto",
    def: "Mención breve dentro del párrafo que indica a quién pertenece una idea o dato. En APA 7 para fuentes institucionales web incluye autor corporativo, año y localizador (párrafo o sección). Puede ser narrativa o parentética."
  },
  {
    term: "Referencia bibliográfica",
    def: "Registro completo ubicado al final del documento en la sección 'Referencias'. Permite al lector localizar la fuente original. En páginas web reúne: Autor. (Fecha). Título en cursiva. Sitio web. URL."
  },
  {
    term: "URL (Localizador Uniforme de Recursos)",
    def: "Dirección técnica de acceso a una página web (ej. https://...). Nunca reemplaza a una cita en el texto y solo debe figurar al final de la referencia bibliográfica."
  },
  {
    term: "Autor Corporativo o Institucional",
    def: "Entidad, organización o ministerio que actúa como autor de una publicación (ej. Organización de las Naciones Unidas [ONU]). En la primera cita se coloca el nombre completo y la sigla entre corchetes."
  },
  {
    term: "(s.f.) - Sin fecha",
    def: "Abreviatura exigida por APA 7 cuando una página web o recurso no indica expresamente la fecha de publicación o última actualización del contenido."
  },
  {
    term: "Marcador [Pendiente de verificar por docente]",
    def: "Etiqueta pedagógica preventiva para recordar que antes de la publicación definitiva, el docente debe corroborar la fecha exacta y título vigente en el portal de la ONU consultado."
  }
];
