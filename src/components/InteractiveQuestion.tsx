import React, { useState } from 'react';
import { CheckCircle2, XCircle, Sparkles, Check, Bookmark, ChevronDown, ChevronUp, ArrowRight, HelpCircle } from 'lucide-react';
import { ChoiceOption } from '../types';

interface InteractiveQuestionProps {
  id: string;
  prompt: string;
  subPrompt?: string;
  options: ChoiceOption[];
  feedbackEasy: string;
  formalTermTitle?: string;
  formalTermContent?: string;
  formalTermSubtitle?: string;
  memoryMnemonic?: string;
  allowNoCorrect?: boolean;
  onAnswerChecked?: (selectedId: string) => void;
  selectedOptionId?: string;
  isAnswerChecked?: boolean;
  checkButtonText?: string;
}

export const InteractiveQuestion: React.FC<InteractiveQuestionProps> = ({
  id,
  prompt,
  subPrompt,
  options,
  feedbackEasy,
  formalTermTitle,
  formalTermContent,
  formalTermSubtitle,
  memoryMnemonic,
  allowNoCorrect = false,
  onAnswerChecked,
  selectedOptionId: controlledSelectedId,
  isAnswerChecked: controlledIsChecked,
  checkButtonText = '판정 보기',
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState<string>('');
  const [internalIsChecked, setInternalIsChecked] = useState<boolean>(false);
  const [showDetailedWhy, setShowDetailedWhy] = useState<boolean>(false);

  const selectedId = controlledSelectedId !== undefined ? controlledSelectedId : internalSelectedId;
  const isChecked = controlledIsChecked !== undefined ? controlledIsChecked : internalIsChecked;

  const handleSelect = (optId: string) => {
    if (isChecked) return;
    setInternalSelectedId(optId);
  };

  const handleCheck = () => {
    if (!selectedId) return;
    setInternalIsChecked(true);
    if (onAnswerChecked) {
      onAnswerChecked(selectedId);
    }
  };

  const handleResetChoice = () => {
    setInternalIsChecked(false);
    setInternalSelectedId('');
    setShowDetailedWhy(false);
  };

  const selectedOption = options.find((opt) => opt.id === selectedId);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-6">
      {/* Question Prompt Section */}
      <div className="space-y-2 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
          <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
          <span>여러분의 판단은?</span>
        </div>

        {/* Big Central Question Text */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
          “{prompt}”
        </h3>

        {subPrompt && (
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-0.5">
            {subPrompt}
          </p>
        )}
      </div>

      {/* Large Selection Cards */}
      <div className="grid grid-cols-1 gap-3">
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          let styleClass =
            'border-slate-200 bg-slate-50/60 hover:bg-slate-100 hover:border-slate-300 text-slate-900';

          if (isSelected) {
            if (!isChecked) {
              styleClass =
                'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-500/20 text-indigo-950 font-bold -translate-y-0.5 shadow-xs';
            } else {
              if (allowNoCorrect) {
                styleClass =
                  'border-indigo-600 bg-indigo-50 text-indigo-950 font-bold shadow-xs';
              } else if (option.isCorrect) {
                styleClass =
                  'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/20 shadow-xs';
              } else {
                styleClass = 'border-rose-300 bg-rose-50 text-rose-900';
              }
            }
          } else if (isChecked && option.isCorrect && !allowNoCorrect) {
            styleClass =
              'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-bold';
          }

          return (
            <button
              key={option.id}
              id={`option-${id}-${option.id}`}
              type="button"
              onClick={() => handleSelect(option.id)}
              disabled={isChecked}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between gap-4 text-sm sm:text-base ${styleClass} ${
                isChecked ? 'cursor-default' : 'cursor-pointer hover:-translate-y-0.5'
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-black flex items-center justify-center shrink-0 shadow-2xs">
                    {option.id.toUpperCase().slice(0, 2)}
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {option.label}
                  </span>
                </div>
                {option.subLabel && (
                  <p className="text-xs text-slate-700 mt-1.5 pl-9 leading-relaxed font-medium">
                    {option.subLabel}
                  </p>
                )}
              </div>

              {isChecked && (
                <div className="shrink-0">
                  {allowNoCorrect ? (
                    isSelected && <Check className="w-5 h-5 text-indigo-600" />
                  ) : option.isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  ) : isSelected ? (
                    <XCircle className="w-6 h-6 text-rose-500" />
                  ) : null}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Action Button: '판정 보기' */}
      {!isChecked ? (
        <div className="flex items-center justify-end pt-1">
          <button
            id={`btn-check-${id}`}
            type="button"
            onClick={handleCheck}
            disabled={!selectedId}
            className={`px-7 py-3 rounded-2xl font-black text-sm sm:text-base transition-all shadow-sm ${
              selectedId
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 shadow-indigo-200 cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {checkButtonText}
          </button>
        </div>
      ) : (
        /* Smooth Reveal of Concept & Feedback */
        <div className="space-y-4 pt-3 border-t border-slate-200 animate-fadeIn">
          {/* Transition text */}
          <div className="text-center sm:text-left py-1">
            <span className="text-xs font-bold text-slate-700 block">
              방금 한 판단을 헌법에서는 이렇게 부릅니다
            </span>
          </div>

          {/* Formal Concept Banner */}
          {formalTermTitle && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-indigo-600 text-white rounded-lg text-xs font-black">
                    헌법 개념 발견
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-indigo-950">
                    [{formalTermTitle}]
                  </h4>
                </div>
                {formalTermSubtitle && (
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-100/80 px-2 py-0.5 rounded">
                    {formalTermSubtitle}
                  </span>
                )}
              </div>

              {/* Easy explanation text */}
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed pt-1">
                {feedbackEasy}
              </p>

              {/* Collapsible 'Why so' button */}
              {formalTermContent && (
                <div className="pt-2 border-t border-indigo-100/80">
                  <button
                    onClick={() => setShowDetailedWhy((prev) => !prev)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-900 cursor-pointer"
                  >
                    <span>{showDetailedWhy ? '접기' : '왜 그런지 보기 (헌법 조문 및 세부 기준)'}</span>
                    {showDetailedWhy ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {showDetailedWhy && (
                    <div className="mt-2 p-3 bg-white rounded-xl border border-indigo-100 text-xs text-slate-700 leading-relaxed font-normal animate-fadeIn whitespace-pre-line">
                      {formalTermContent}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Student Mnemonic Pill */}
          {memoryMnemonic && (
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm font-bold">
              <Bookmark className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                💡 학생용 기억 공식: <strong>“{memoryMnemonic}”</strong>
              </span>
            </div>
          )}

          <div className="flex justify-end pt-1">
            <button
              onClick={handleResetChoice}
              className="text-xs text-slate-700 hover:text-slate-900 underline cursor-pointer"
            >
              다시 선택해보기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
