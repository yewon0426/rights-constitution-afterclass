import React from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface FooterProps {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
  currentStepIndex: number;
  totalStepsInStage: number;
  stageName: string;
  nextButtonLabel?: string;
}

export const Footer: React.FC<FooterProps> = ({
  canPrev,
  canNext,
  onPrev,
  onNext,
  onReset,
  currentStepIndex,
  totalStepsInStage,
  stageName,
  nextButtonLabel = '다음 사건',
}) => {
  return (
    <footer className="sticky bottom-0 z-30 bg-[#FAF9F5]/95 backdrop-blur-md border-t border-stone-200/80 py-3 px-4 sm:px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Previous step */}
        <button
          id="btn-prev-step"
          onClick={onPrev}
          disabled={!canPrev}
          className={`flex items-center gap-1 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            canPrev
              ? 'bg-white border border-stone-200 text-stone-800 hover:bg-stone-100 active:scale-95'
              : 'bg-stone-100 text-stone-300 border border-stone-200/40 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>이전</span>
        </button>

        {/* Center: Step indicators & Stage status */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1.5 mb-1">
            {Array.from({ length: totalStepsInStage }).map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentStepIndex
                    ? 'w-6 bg-stone-900'
                    : idx < currentStepIndex
                    ? 'w-2 bg-stone-400'
                    : 'w-2 bg-stone-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-stone-700 font-bold">
            <strong className="text-stone-900">{stageName}</strong> ({currentStepIndex + 1} / {totalStepsInStage})
          </span>
        </div>

        {/* Right: Next step and Reset */}
        <div className="flex items-center gap-2">
          <button
            id="btn-reset-stage"
            onClick={onReset}
            className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            title="처음으로 돌아가기"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>처음으로</span>
          </button>

          <button
            id="btn-next-step"
            onClick={onNext}
            disabled={!canNext}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-xs cursor-pointer ${
              canNext
                ? 'bg-stone-900 text-white hover:bg-stone-800 active:scale-95 shadow-stone-300'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
          >
            <span>{nextButtonLabel}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
