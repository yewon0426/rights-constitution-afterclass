import React from 'react';
import { STAGES } from '../data/curriculum';
import { StageId } from '../types';
import { BookOpen, Scale, Clock, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentStageId: StageId;
  currentStepIndex: number;
  totalStepsInStage: number;
  onSelectStage: (stageId: StageId) => void;
  onOpenSummary: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentStageId,
  currentStepIndex,
  totalStepsInStage,
  onSelectStage,
  onOpenSummary,
}) => {
  const currentStageIndex = STAGES.findIndex((s) => s.id === currentStageId);
  const currentStage = STAGES[currentStageIndex] || STAGES[0];

  return (
    <header className="sticky top-0 z-30 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/80 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5">
        {/* Top line: Title & Action buttons */}
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 bg-stone-900 text-white rounded-2xl flex items-center justify-center font-black shrink-0 shadow-2xs">
              <Scale className="w-4 h-4 text-amber-400" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100/80 text-amber-900 border border-amber-300">
                  <Sparkles className="w-3 h-3 text-amber-700" />
                  고1 통합사회2
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-stone-700 font-semibold">
                  <Clock className="w-3 h-3 text-stone-700" />
                  {currentStage.timeRange}
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-black text-stone-900 truncate leading-tight mt-0.5">
                이 법, 괜찮은가요?
                <span className="hidden md:inline font-bold text-stone-700 text-xs ml-2">
                  - 쉬운 사건으로 이해하는 기본권 제한과 헌법
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              id="open-summary-modal-btn"
              onClick={onOpenSummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black bg-white text-stone-800 border border-stone-200 hover:bg-stone-100 transition-colors shadow-2xs cursor-pointer"
              title="오늘 배운 헌법 핵심 개념 한눈에 보기"
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>전체 개념 보기</span>
            </button>
          </div>
        </div>

        {/* Stage progress timeline navigation */}
        <nav aria-label="수업 단계 진행표" className="overflow-x-auto pb-1 -mx-2 px-2 scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-max">
            {STAGES.map((stage, idx) => {
              const isActive = stage.id === currentStageId;
              const isPast = idx < currentStageIndex;

              return (
                <button
                  key={stage.id}
                  id={`nav-stage-${stage.id}`}
                  onClick={() => onSelectStage(stage.id)}
                  className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-2xs'
                      : isPast
                      ? 'bg-stone-200/80 text-stone-700 hover:bg-stone-300/80'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
                      isActive
                        ? 'bg-amber-400 text-stone-950'
                        : isPast
                        ? 'bg-stone-300 text-stone-700'
                        : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span>{stage.shortLabel}</span>
                  {isActive && (
                    <span className="text-[10px] bg-stone-700 text-stone-200 px-1.5 py-0.2 rounded-md ml-0.5 font-bold">
                      {currentStepIndex + 1}/{totalStepsInStage}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};
