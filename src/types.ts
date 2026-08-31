export type StageId =
  | 'prologue'
  | 'restriction'
  | 'excess_ban'
  | 'revise_law'
  | 'separation'
  | 'human_rights_systems'
  | 'court_remedy'
  | 'final_case';

export interface StageInfo {
  id: StageId;
  title: string;
  shortLabel: string;
  timeRange: string;
  description: string;
  stepCount: number;
}

export interface ChoiceOption {
  id: string;
  label: string;
  subLabel?: string;
  isCorrect?: boolean;
  explanation?: string;
}

export interface QuestionData {
  id: string;
  prompt: string;
  subPrompt?: string;
  options: ChoiceOption[];
  correctOptionId?: string | string[];
  feedbackEasy: string;
  formalTermTitle?: string;
  formalTermContent?: string;
  formalTermSubtitle?: string;
  memoryMnemonic?: string;
}

export interface PowerCheckItem {
  id: string;
  from: 'assembly' | 'government' | 'court';
  to: 'assembly' | 'government' | 'court';
  fromName: string;
  toName: string;
  badge: string;
  formalTerm: string;
  situation: string;
  newsHeadline?: string;
  question: string;
  options: { id: string; label: string; isCorrect: boolean }[];
  easyExplanation: string;
  detailItems?: string[];
  mnemonic: string;
  extraCard?: {
    title: string;
    description: string;
  };
}

export interface CourtPathway {
  id: 'norm_control' | 'rights_appeal' | 'adjudication_appeal';
  number: number;
  title: string;
  whoActs: string;
  routeSummary: string;
  situation: string;
  dialogue?: { speaker: string; text: string }[];
  formalTerm: string;
  studentMnemonic: string;
  realCase: {
    tag: string;
    title: string;
    description: string;
    relevantRights?: string[];
  };
}
