export type SceneId = 1 | 2 | 3 | 4 | 5 | 6;

export interface ClassificationItem {
  id: string;
  text: string;
  correctCategory: 'cita' | 'referencia' | 'url';
  explanation: string;
  hint: string;
  sourceContext: string;
}

export interface CitationOption {
  id: string;
  citationText: string;
  type: 'narrativa' | 'parentetica' | 'incorrecta';
  isCorrect: boolean;
  feedback: string;
  keyRule: string;
}

export interface ReferenceElement {
  id: string;
  question: 'quien' | 'cuando' | 'que' | 'donde';
  questionLabel: string;
  label: string;
  value: string;
  formatNote: string;
  isVerified: boolean;
}

export interface ComparisonScenario {
  id: string;
  title: string;
  odsFocus: string;
  excerptA: {
    text: string;
    label: string;
    isEffective: boolean;
    analysis: string;
    citationType: string;
  };
  excerptB: {
    text: string;
    label: string;
    isEffective: boolean;
    analysis: string;
    citationType: string;
  };
  keyTakeaway: string;
  hint: string;
}

export interface RubricCriterion {
  id: string;
  title: string;
  description: string;
  exemplary: string;
  acceptable: string;
  needsImprovement: string;
}
