import { ClassificationItem, CitationOption, ReferenceElement, ComparisonScenario, RubricCriterion } from '../types';

export const INSTITUTIONAL_LINKS = {
  ods4Chile: "https://chile.un.org/es/sdgs/4",
  odsGlobal: "https://www.un.org/sustainabledevelopment/es/education/",
  apaStyleExamples: "https://apastyle.apa.org/style-grammar-guidelines/references/examples",
  iplacexManualPdf: "/assets/aistudio/Fuente_3_6c6d0450.pdf",
};

export const EXAM_CONTEXT = {
  institution: "IPLACEX · Instituto Profesional Acreditado Nivel Avanzado",
  department: "Subdirección de Bibliotecas · Formación Transversal",
  course: "Comunicación y Redacción",
  platform: "Blackboard Learn",
  manualTitle: "Manual Citas y Referencias: Normas (APA) 7.ª edición — Bibliotecas Iplacex (Elaborado por Subdirección de Bibliotecas, Paula Vega, Febrero 2025)",
  examPrompt: "Redactar una carta formal de postulación a una beca técnica internacional en Barcelona, dirigida al Comité de Selección de la «Fundación de Técnicos Iberoamericanos», sustentada en dos argumentos técnicos vinculados al Objetivo de Desarrollo Sostenible 4 (ODS 4: Educación de Calidad y Formación Técnico-Profesional, metas 4.3 y 4.4 de la ONU), respaldada con al menos una cita institucional en formato APA 7 y su respectiva referencia bibliográfica final.",
  teacherNote: "Aviso pedagógico y ético: Este recurso es una guía autoinstructiva y formativa. No genera la carta de examen de forma automática ni califica semánticamente las respuestas abiertas; entrega una pauta de autoevaluación con descriptores docentes para que el estudiante revise su producción escrita de manera autónoma."
};

export const SCENE_METADATA = [
  { id: 1, title: "1. Orientación y Caso", shortTitle: "Caso Beca Barcelona", desc: "Propósito, instrucciones de navegación, caso del examen y fuentes oficiales" },
  { id: 2, title: "2. Clasificar: Cita vs. Referencia vs. URL", shortTitle: "Cita, Referencia y URL", desc: "Distinción conceptual para superar el error de la URL suelta" },
  { id: 3, title: "3. Citar la Fuente Institucional", shortTitle: "Citar según APA 7", desc: "Autor corporativo ONU, año o s.f., formato narrativo, parentético y párrafo" },
  { id: 4, title: "4. Construir la Referencia", shortTitle: "Referencia Bibliográfica", desc: "Las 4 preguntas clave de APA 7 aplicadas a la página oficial de la ONU" },
  { id: 5, title: "5. Fuente y Argumento", shortTitle: "ODS 4 y Argumento", desc: "Análisis comparativo: cuándo la fuente fundamenta y cuándo solo decora" },
  { id: 6, title: "6. Taller y Autoevaluación", shortTitle: "Taller Integrador", desc: "Corrección guiada de carta, borrador libre y pauta de cotejo oficial" },
];

export const CLASSIFICATION_ITEMS: ClassificationItem[] = [
  {
    id: "item-1",
    text: "https://chile.un.org/es/sdgs/4",
    correctCategory: "url",
    explanation: "Es únicamente una URL suelta (localizador web). En el Manual de Bibliotecas IPLACEX (2025, p. 5 y 6) se estipula que una URL nunca reemplaza a una cita dentro del párrafo. Solo se incluye al final de la referencia bibliográfica.",
    hint: "Observa que comienza por el protocolo web (https://) y carece de autoría, año o título del documento.",
    sourceContext: "Dirección web copiada del portal de Naciones Unidas Chile (ODS 4)."
  },
  {
    id: "item-2",
    text: "(Organización de las Naciones Unidas [ONU], s.f., secc. Metas, párr. 3)",
    correctCategory: "cita",
    explanation: "Es una CITA PARENTÉTICA en el texto. Se ubica entre paréntesis al final de la aseveración. El Manual IPLACEX (2025, p. 5) establece que en páginas web sin numeración de página se utiliza el número de párrafo ('párr. 3') o la sección ('secc. Metas').",
    hint: "Está encerrada en paréntesis y contiene el autor institucional, la sigla en corchetes, el año/s.f. y el localizador de párrafo.",
    sourceContext: "Ubicada al cierre de un argumento técnico en el segundo párrafo de la carta."
  },
  {
    id: "item-3",
    text: "Organización de las Naciones Unidas. (s.f.). Objetivo 4: Educación de calidad. Naciones Unidas. https://chile.un.org/es/sdgs/4",
    correctCategory: "referencia",
    explanation: "Es una REFERENCIA BIBLIOGRÁFICA completa según APA 7 (Manual IPLACEX, 2025, p. 6-7). Se ubica al final del trabajo en la sección 'Referencias'. Responde a las cuatro preguntas canónicas: ¿Quién? (ONU), ¿Cuándo? (s.f.), ¿Qué? (Título en cursiva) y ¿Dónde? (Sitio web y URL activa).",
    hint: "Posee autor con punto, fecha entre paréntesis, título en cursiva, nombre del portal y la URL limpia.",
    sourceContext: "Entrada registrada en la lista de Referencias al cierre de la carta de postulación."
  },
  {
    id: "item-4",
    text: "Tal como subraya la Organización de las Naciones Unidas [ONU] (s.f., secc. Metas, párr. 4), la formación técnica es crucial para el empleo...",
    correctCategory: "cita",
    explanation: "Es una CITA NARRATIVA en el texto. El autor corporativo forma parte de la redacción de la oración ('Tal como subraya...'), seguido de los datos cronológicos y de localización entre paréntesis.",
    hint: "El nombre de la institución está incorporado de manera natural y fluida en la redacción de la frase.",
    sourceContext: "Integrada directamente en el desarrollo de la argumentación sobre competencias técnicas."
  },
  {
    id: "item-5",
    text: "www.un.org/sustainabledevelopment/es/education/",
    correctCategory: "url",
    explanation: "Es una dirección electrónica aislada. Insertar una URL en el cuerpo de un texto formal en lugar de una cita debidamente acreditada es una de las faltas más recurrentes en el examen final.",
    hint: "No tiene paréntesis de citación ni formato de asiento bibliográfico.",
    sourceContext: "Enlace suelto pegado en el borrador de un postulante."
  },
  {
    id: "item-6",
    text: "Pérez, A. (2020). Estrategias de aprendizaje en línea. Educación Digital. https://www.educaciondigital.com/articulo",
    correctCategory: "referencia",
    explanation: "Es una REFERENCIA BIBLIOGRÁFICA de fuente electrónica con autor personal, tomada como modelo en el Manual de Bibliotecas IPLACEX (2025, p. 6). Incluye Apellido, Inicial. (Año). Título. Nombre del sitio web en cursiva. URL.",
    hint: "Observa la estructura de entrada bibliográfica con autor personal y fecha entre paréntesis.",
    sourceContext: "Ejemplo canónico del Manual de Citas y Referencias de Bibliotecas IPLACEX."
  }
];

export const CITATION_OPTIONS: CitationOption[] = [
  {
    id: "opt-correct-narrative",
    citationText: "Tal como subraya la Organización de las Naciones Unidas [ONU] (s.f., secc. Metas, párr. 4), asegurar el acceso igualitario a una formación técnica y profesional de calidad es decisivo para el desarrollo productivo.",
    type: "narrativa",
    isCorrect: true,
    feedback: "¡Respuesta correcta! Es una Cita Narrativa impecable: el autor institucional se integra gramaticalmente en la oración, la sigla ONU se presenta entre corchetes en su primera mención [ONU], se usa '(s.f.)' al tratarse de una página web sin fecha explícita y se indica el localizador ('secc. Metas, párr. 4') tal como exige el Manual IPLACEX (2025, p. 5) para fuentes digitales sin número de página.",
    keyRule: "Manual IPLACEX (2025, p. 5) y APA 7: Primera mención de autor institucional con sigla: Organización de las Naciones Unidas [ONU] (s.f., párr. X). En menciones posteriores dentro del mismo texto se simplifica a: ONU (s.f., párr. X)."
  },
  {
    id: "opt-correct-parenthetical",
    citationText: "El acceso a competencias técnicas avanzadas resulta indispensable para responder a las demandas del mercado laboral iberoamericano (Organización de las Naciones Unidas [ONU], s.f., secc. Metas, párr. 4).",
    type: "parentetica",
    isCorrect: true,
    feedback: "¡Respuesta correcta! Es una Cita Parentética ejemplar: todos los elementos de crédito quedan agrupados al final de la oración entre paréntesis: autor corporativo con sigla en corchetes, fecha '(s.f.)' y localizador de párrafo.",
    keyRule: "Manual IPLACEX (2025, p. 5): Cita parentética de fuente digital: (Organización de las Naciones Unidas [ONU], s.f., párr. X). En citas posteriores en la misma carta: (ONU, s.f., párr. X)."
  },
  {
    id: "opt-error-url",
    citationText: "El acceso a competencias técnicas resulta indispensable para el mercado laboral (ver https://chile.un.org/es/sdgs/4).",
    type: "incorrecta",
    isCorrect: false,
    feedback: "Respuesta incorrecta: En normas APA 7 y en las directrices de IPLACEX, una URL jamás debe situarse dentro del párrafo ni entre paréntesis en lugar de la cita. Las direcciones web pertenecen exclusivamente a la sección final de Referencias.",
    keyRule: "Regla de oro de citación académica: En el cuerpo del texto se citan autores y fechas; las URLs se reservan para la lista final de Referencias."
  },
  {
    id: "opt-error-title",
    citationText: "Según la página web 'Objetivo 4: Educación de calidad' (ONU, 2023, s.p.), se requiere mayor formación técnica...",
    type: "incorrecta",
    isCorrect: false,
    feedback: "Respuesta incorrecta: En APA 7 solo se cita por el título de la página cuando la obra carece totalmente de autor. Dado que la Organización de las Naciones Unidas es la institución responsable, debe citarse por su nombre institucional. Además, no debe usarse la sigla aislada en la primera mención sin haber definido previamente el nombre completo.",
    keyRule: "Manual IPLACEX (2025, p. 5): Se cita siempre por el autor personal o institucional claramente atribuible. Solo se cita por título en obras estrictamente anónimas."
  }
];

export const REFERENCE_ELEMENTS: ReferenceElement[] = [
  {
    id: "ref-who",
    question: "quien",
    questionLabel: "¿Quién es el autor institucional?",
    label: "1. Autor Institucional o Corporativo",
    value: "Organización de las Naciones Unidas.",
    formatNote: "Nombre completo oficial de la entidad responsable, finalizado con un punto. En la lista de referencias no se utiliza la sigla como punto de partida.",
    isVerified: true
  },
  {
    id: "ref-when",
    question: "cuando",
    questionLabel: "¿Cuándo se publicó o actualizó?",
    label: "2. Fecha de publicación",
    value: "(s.f.).",
    formatNote: "Cuando una página web institucional de la ONU no consigna una fecha clara de publicación o última actualización, se emplea la abreviatura latina en minúscula '(s.f.)' [sin fecha] entre paréntesis, seguida de punto.",
    isVerified: true
  },
  {
    id: "ref-what",
    question: "que",
    questionLabel: "¿Qué título tiene el recurso?",
    label: "3. Título de la página web específica",
    value: "Objetivo 4: Educación de calidad.",
    formatNote: "¡En cursiva (itálica)! Se escribe en mayúscula solo la letra inicial del título y de los nombres propios. Se cierra con un punto.",
    isVerified: true
  },
  {
    id: "ref-where",
    question: "donde",
    questionLabel: "¿Dónde se encuentra alojado?",
    label: "4. Nombre del sitio web y URL activa",
    value: "Naciones Unidas. https://chile.un.org/es/sdgs/4",
    formatNote: "Nombre del portal institucional si difiere del autor, seguido de la URL directa activa, sin punto final para no alterar el hipervínculo.",
    isVerified: true
  }
];

export const COMPARISON_SCENARIO: ComparisonScenario = {
  id: "scenario-barcelona-ods4",
  title: "Carta de Postulación a Beca en Barcelona: Vinculación con el ODS 4 (Educación Técnico-Profesional)",
  odsFocus: "ODS 4: Educación de Calidad · Metas 4.3 y 4.4 de las Naciones Unidas",
  excerptA: {
    label: "Opción A: Cita 'isla' o decorativa (Sin fundamentación técnica)",
    text: "Estimados miembros de la Fundación de Técnicos Iberoamericanos: Me dirijo a ustedes para solicitar la beca de especialización en Barcelona, pues siempre me ha llamado la atención viajar a España y conocer sus centros de estudio. De acuerdo con la Organización de las Naciones Unidas [ONU] (s.f., secc. Metas, párr. 4), 'de aquí a 2030 se debe aumentar considerablemente el número de personas con competencias técnicas y profesionales'. Por este motivo, considero que merezco la beca, ya que tengo gran motivación de vivir en Barcelona y ampliar mis horizontes personales.",
    isEffective: false,
    analysis: "La cita es una 'isla flotante': el postulante inserta un fragmento textual de la ONU pero no lo vincula con una necesidad técnica específica de su área laboral ni demuestra cómo el programa formativo en Barcelona resolverá esa brecha. La motivación expresada es puramente personal y de viaje, lo que debilita el rigor de la postulación.",
    citationType: "Cita decorativa sin articulación retórica"
  },
  excerptB: {
    label: "Opción B: Cita integrada como respaldo de un argumento técnico sólido",
    text: "Estimado Comité de Selección de la Fundación de Técnicos Iberoamericanos: Presento mi postulación a la beca técnica en Barcelona motivado por la necesidad urgente de fortalecer las competencias en automatización y mantenimiento industrial en nuestro sector productivo. Tal como establece la Organización de las Naciones Unidas [ONU] (s.f., secc. Metas, párr. 4), alcanzar un desarrollo sostenible (ODS 4) exige incrementar las competencias técnicas avanzadas para garantizar el empleo calificado y la innovación local. En este marco, cursar esta especialización en Barcelona —referente europeo en formación dual y tecnologías aplicadas de la Industria 4.0— me capacitará para transferir metodologías prácticas a las pequeñas y medianas empresas de mi región, contribuyendo directamente a cerrar la brecha de especialización técnica en nuestra comunidad iberoamericana.",
    isEffective: true,
    analysis: "La cita actúa como fundamentación sólida: la meta del ODS 4 de la ONU funciona como premisa diagnóstica que justifica la necesidad de formación técnica avanzada. Inmediatamente el postulante conecta las fortalezas específicas de Barcelona (formación dual, industria 4.0) con un proyecto de transferencia profesional en su región de origen.",
    citationType: "Cita argumentativa integrada y pertinente"
  },
  keyTakeaway: "Una cita académica institucional nunca debe ser un adorno. En una carta formal a una fundación internacional, la fuente de la ONU valida que el desafío técnico que abordarás con tu formación en Barcelona constituye una prioridad estratégica reconocida a nivel global.",
  hint: "Compara ambos textos observando cuál de ellos conecta la meta de la ONU con la formación concreta que el técnico adquirirá en Barcelona y con su impacto laboral posterior."
};

export const INTEGRATOR_CASE = {
  initialTextWithErrors: `Estimada Fundación de Técnicos Iberoamericanos:
Deseo ganar la beca en Barcelona porque en mi país hace falta más educación para los trabajadores. En https://chile.un.org/es/sdgs/4 dice que para el 2030 hay que capacitar a más gente en cosas técnicas. Yo opino que los técnicos somos el futuro y por eso quiero ir a Barcelona a estudiar porque allá tienen mejor tecnología. Si me dan la beca me esforzaré mucho en aprender.
Referencia: www.un.org/educacion`,
  identifiedErrors: [
    {
      type: "URL en lugar de cita formal",
      description: "La expresión 'En https://chile.un.org/... dice que' vulnera la norma académica. Las URLs no son autores y no deben insertarse en el cuerpo del texto.",
      fix: "Sustituir por cita formal: (Organización de las Naciones Unidas [ONU], s.f., secc. Metas, párr. 4) o cita narrativa."
    },
    {
      type: "Argumentación vaga e informal",
      description: "Frases como 'hace falta más educación' o 'allá tienen mejor tecnología' carecen de precisión técnica, no explicitan el ODS ni demuestran alineación con la misión de la Fundación.",
      fix: "Articular la evidencia del ODS 4 con las áreas técnicas de Barcelona (formación dual, automatización) y su transferencia profesional concreta."
    },
    {
      type: "Referencia rota y sin formato APA",
      description: "Escribir únicamente 'Referencia: www.un.org/educacion' omite autor institucional, fecha '(s.f.)', título en cursiva del ODS y protocolo web activo.",
      fix: "Elaborar la referencia canónica en 4 elementos: Autor. (Fecha). Título en cursiva. Sitio web. URL."
    }
  ],
  correctedModel: `Estimado Comité de Selección, Fundación de Técnicos Iberoamericanos:
Presento formalmente mi postulación a la beca técnica en Barcelona con la convicción de que la formación técnico-profesional de vanguardia es la clave para la productividad y el empleo de calidad en Iberoamérica. Tal como fundamenta la Organización de las Naciones Unidas [ONU] (s.f., secc. Metas, párr. 4) en el marco del ODS 4, garantizar competencias técnicas especializadas resulta indispensable para impulsar la innovación y el trabajo decente en las economías emergentes. Realizar este perfeccionamiento en los centros tecnológicos de Barcelona me permitirá asimilar metodologías avanzadas de gestión técnica y digitalización, facultándome para transferir estos estándares a los talleres y empresas de nuestra región y potenciar así el desarrollo técnico de nuestra comunidad.

Referencia:
Organización de las Naciones Unidas. (s.f.). Objetivo 4: Educación de calidad. Naciones Unidas. https://chile.un.org/es/sdgs/4`
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
    title: "2. Vinculación Argumentativa con el ODS 4",
    description: "Se plantean argumentos técnicos sólidos fundamentados en metas concretas del ODS 4 (ONU) sobre competencias y formación técnica.",
    exemplary: "Articula con claridad los desafíos de formación técnica del ODS 4 con la especialidad del postulante y el impacto laboral en su comunidad.",
    acceptable: "Menciona el ODS pero el argumento queda en el plano meramente descriptivo o de deseo personal.",
    needsImprovement: "No se identifica el ODS de la ONU o se nombra de forma accesoria sin constituir un argumento de postulación."
  },
  {
    id: "crit-citation",
    title: "3. Cita Institucional en el Texto (Manual IPLACEX 2025)",
    description: "Incorpora una cita de página web de la ONU aplicando autor corporativo, año o (s.f.) y localizador (párrafo/sección), sin URLs en el texto.",
    exemplary: "Aplica cita narrativa o parentética impecable: nombre completo en primera mención con sigla [ONU], (s.f.) o año, y localizador de párrafo o sección. Cero URLs en el texto.",
    acceptable: "Cita a la ONU pero omite corchetes de sigla, confunde la fecha o no indica párrafo tratándose de cita textual.",
    needsImprovement: "Inserta una URL suelta en el texto, cita por el título o no acredita la fuente en el párrafo."
  },
  {
    id: "crit-articulation",
    title: "4. Articulación Fuente-Argumento (Anti-cita flotante)",
    description: "La cita de la fuente sustenta y potencia el razonamiento del postulante; no es un adorno decorativo.",
    exemplary: "La evidencia de la ONU sirve de premisa para fundamentar por qué la especialización en Barcelona es indispensable para resolver un problema técnico concreto.",
    acceptable: "La cita tiene relación temática pero el párrafo no elabora suficientemente el vínculo con la beca solicitada.",
    needsImprovement: "Cita flotante: la cita está copiada y pegada sin introducción, análisis ni nexo con el párrafo del estudiante."
  },
  {
    id: "crit-reference",
    title: "5. Referencia Bibliográfica Final (APA 7 - IPLACEX)",
    description: "Presenta la referencia completa con los 4 elementos canónicos: ¿Quién? ¿Cuándo? ¿Qué? ¿Dónde?",
    exemplary: "Estructura perfecta: Autor institucional con punto. (s.f. o año). Título de la página en cursiva. Nombre del portal si difiere. URL activa y limpia.",
    acceptable: "Presenta los 4 datos pero omite la cursiva en el título, añade frases en desuso como 'Recuperado de' o coloca punto tras la URL.",
    needsImprovement: "Solo pega una URL al final o confunde la referencia con una nota al pie incompleta."
  }
];

export const GLOSSARY_TERMS = [
  {
    term: "Cita en el texto",
    def: "Mención breve dentro del párrafo que indica a quién pertenece una idea o dato. En APA 7 para fuentes institucionales web incluye autor corporativo, año y localizador (párrafo o sección). Puede ser narrativa o parentética. Nunca contiene una URL."
  },
  {
    term: "Referencia bibliográfica",
    def: "Registro completo ubicado al final del documento en la sección 'Referencias'. Permite al lector localizar la fuente original. En páginas web reúne: Autor. (Fecha). Título en cursiva. Sitio web. URL."
  },
  {
    term: "URL (Localizador Uniforme de Recursos)",
    def: "Dirección técnica de acceso a una página web (ej. https://chile.un.org/es/sdgs/4). Nunca reemplaza a una cita en el texto y solo debe figurar al final de la referencia bibliográfica."
  },
  {
    term: "Autor Corporativo o Institucional",
    def: "Entidad, organización o ministerio que actúa como autor de una publicación (ej. Organización de las Naciones Unidas [ONU]). En la primera cita se coloca el nombre completo y la sigla entre corchetes."
  },
  {
    term: "(s.f.) - Sin fecha",
    def: "Abreviatura exigida por APA 7 (Manual IPLACEX 2025) cuando una página web no indica expresamente la fecha de publicación o actualización del contenido."
  },
  {
    term: "ODS 4: Educación de Calidad",
    def: "Objetivo de Desarrollo Sostenible de la ONU que promueve oportunidades de aprendizaje durante toda la vida, garantizando el acceso igualitario a formación técnica y profesional de calidad (metas 4.3 y 4.4)."
  }
];
