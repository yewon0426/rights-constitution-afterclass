import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronDown, ChevronUp, Bookmark, ArrowRight, HelpCircle } from 'lucide-react';

export interface DecisionOption {
  id: string;
  title: string;
  subText?: string;
  isConstitutional?: boolean;
}

interface PrincipleDiscoveryProps {
  stepBadge?: string;
  intuitiveQuestion: string;
  contextSentence?: string;
  options: DecisionOption[];
  constitutionalTerm: string;
  termEnglish?: string;
  termDefinition: string;
  studentMnemonic: string;
  caseVerdict: string;
  whyExplanation: string;
  moreDetails?: string[];
  onDecisionMade?: (optionId: string) => void;
}

export const PrincipleDiscovery: React.FC<PrincipleDiscoveryProps> = ({
  stepBadge = '과잉금지원칙 심사',
  intuitiveQuestion,
  contextSentence,
  options,
  constitutionalTerm,
  termEnglish,
  termDefinition,
  studentMnemonic,
  caseVerdict,
  whyExplanation,
  moreDetails,
  onDecisionMade,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showWhy, setShowWhy] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleSelect = (id: string) => {
    if (isChecked) return;
    setSelectedOptionId(id);
  };

  const handleVerify = () => {
    if (!selectedOptionId) return;
    setIsChecked(true);
    if (onDecisionMade) {
      onDecisionMade(selectedOptionId);
    }
  };

  const handleReset = () => {
    setIsChecked(false);
    setSelectedOptionId(null);
    setShowWhy(false);
    setShowMore(false);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Top Badge */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>{stepBadge}</span>
        </span>
        <span className="text-xs font-bold text-stone-700">
          직접 판단하고 헌법 원칙 발견하기
        </span>
      </div>

      {/* Main Display Intuitive Question (Largest Text) */}
      <div className="text-center max-w-2xl mx-auto space-y-2 py-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 leading-tight">
          “{intuitiveQuestion}”
        </h2>
        {contextSentence && (
          <p className="text-sm sm:text-base text-stone-700 font-medium leading-relaxed">
            {contextSentence}
          </p>
        )}
      </div>

      {/* Large Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto">
        {options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          let cardStyle = 'border-stone-200 bg-stone-50/70 hover:border-stone-400 hover:bg-stone-50';

          if (isSelected) {
            cardStyle = isChecked
              ? 'border-indigo-600 bg-indigo-50/90 ring-2 ring-indigo-500/20'
              : 'border-stone-900 bg-stone-100 ring-2 ring-stone-900/10 shadow-xs';
          }

          return (
            <button
              key={opt.id}
              id={`decision-card-${opt.id}`}
              onClick={() => handleSelect(opt.id)}
              disabled={isChecked}
              className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between gap-3 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 ${cardStyle}`}
            >
              <div>
                <div className="font-extrabold text-stone-900 text-base sm:text-lg leading-snug">
                  {opt.title}
                </div>
                {opt.subText && (
                  <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-relaxed font-medium">
                    {opt.subText}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-stone-700 pt-1">
                <span>선택하기</span>
                {isSelected && (
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs">
                    ✓
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Button to Trigger Verification */}
      {!isChecked ? (
        <div className="flex justify-center pt-2">
          <button
            id="btn-verify-decision"
            onClick={handleVerify}
            disabled={!selectedOptionId}
            className={`px-8 py-3.5 rounded-2xl font-black text-base transition-all duration-200 flex items-center gap-2 shadow-xs ${
              selectedOptionId
                ? 'bg-stone-900 hover:bg-stone-800 text-white cursor-pointer active:scale-95'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
          >
            <span>판정 보기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* Smooth Step-by-Step Transition & Discovery */
        <div className="space-y-4 pt-4 border-t border-stone-200 animate-fadeIn max-w-3xl mx-auto">
          {/* Step 1: Transition text */}
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              ✦ 헌법 개념 발견
            </span>
            <p className="text-sm sm:text-base font-bold text-stone-700">
              방금 한 판단을 헌법에서는 이렇게 부릅니다.
            </p>
          </div>

          {/* Step 2: Big Official Constitutional Term Card */}
          <div className="p-5 sm:p-6 rounded-3xl bg-indigo-50 border-2 border-indigo-200 text-center space-y-3">
            <div className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-extrabold rounded-full">
              헌법재판소 심사 기준
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-indigo-950">
                [{constitutionalTerm}]
              </h3>
              {termEnglish && (
                <span className="text-xs text-indigo-700 font-semibold">
                  {termEnglish}
                </span>
              )}
            </div>

            <p className="text-sm sm:text-base font-semibold text-indigo-950 max-w-xl mx-auto leading-relaxed">
              {termDefinition}
            </p>

            {/* Verdict Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-white border border-indigo-300 text-xs sm:text-sm font-bold text-indigo-900 shadow-2xs">
              <span>사건 판정:</span>
              <strong className="text-rose-600">{caseVerdict}</strong>
            </div>
          </div>

          {/* Step 3: Student Memory Mnemonic Banner */}
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 text-amber-950 text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-700 shrink-0" />
              <span>학생용 기억 문구: <strong>“{studentMnemonic}”</strong></span>
            </div>
          </div>

          {/* Expandable 1: [왜 그런지 보기] */}
          <div className="rounded-2xl border border-stone-200 overflow-hidden bg-stone-50/60">
            <button
              onClick={() => setShowWhy((prev) => !prev)}
              className="w-full p-4 flex items-center justify-between text-left text-sm font-bold text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                <span>왜 그런지 보기 (상세 해설)</span>
              </div>
              {showWhy ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showWhy && (
              <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium border-t border-stone-200/60 mt-1">
                <p className="whitespace-pre-line">{whyExplanation}</p>
              </div>
            )}
          </div>

          {/* Expandable 2: [조금 더 알아보기] */}
          {moreDetails && moreDetails.length > 0 && (
            <div className="rounded-2xl border border-stone-200 overflow-hidden bg-stone-50/60">
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className="w-full p-4 flex items-center justify-between text-left text-sm font-bold text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>조금 더 알아보기 (심화 지식)</span>
                </div>
                {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showMore && (
                <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium border-t border-stone-200/60 mt-1 space-y-1.5">
                  <ul className="list-disc pl-5 space-y-1">
                    {moreDetails.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Reset Option */}
          <div className="flex justify-end pt-1">
            <button
              onClick={handleReset}
              className="text-xs text-stone-700 hover:text-stone-900 underline cursor-pointer"
            >
              다시 선택해보기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
