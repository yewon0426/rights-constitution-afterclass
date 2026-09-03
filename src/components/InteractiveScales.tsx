import React, { useState } from 'react';
import { Scale, Sparkles, AlertTriangle, ArrowRight, HelpCircle, CheckCircle2, Bookmark, ChevronDown, ChevronUp } from 'lucide-react';

interface InteractiveScalesProps {
  onNext?: () => void;
}

export const InteractiveScales: React.FC<InteractiveScalesProps> = ({ onNext }) => {
  const [scalePosition, setScalePosition] = useState<'neutral' | 'tilted'>('neutral');
  const [userChoice, setUserChoice] = useState<'balanced' | 'unbalanced' | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showDetailedWhy, setShowDetailedWhy] = useState<boolean>(false);

  const handleVerify = () => {
    if (!userChoice) return;
    setIsChecked(true);
    setScalePosition('tilted');
  };

  const handleReset = () => {
    setUserChoice(null);
    setIsChecked(false);
    setScalePosition('neutral');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-1 font-mono">
            <Scale className="w-3.5 h-3.5" />
            <span>과잉금지원칙 4단계: 법익의 균형성</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            “얻는 것보다 잃는 것이 너무 크지 않아?”
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            정부가 얻으려는 공익과 국민이 잃는 기본권의 무게를 실제 움직이는 저울로 측정해 봅시다.
          </p>
        </div>

        <span className="text-xs font-mono font-bold text-amber-300 bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/30">
          PHYSICAL BALANCE SIMULATOR
        </span>
      </div>

      {/* Physics Scales Canvas */}
      <div className="bg-slate-950 rounded-3xl border-2 border-slate-800 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden flex flex-col items-center">
        {/* Subtle radial backdrop */}
        <div className="absolute inset-0 bg-radial from-slate-900/50 to-slate-950 pointer-events-none" />

        {/* Central Stand and Pivot Mechanism */}
        <div className="w-full max-w-xl py-6 relative z-10">
          {/* Pivot Fulcrum Stand */}
          <div className="relative w-full flex flex-col items-center">
            {/* Top Golden Pivot */}
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 border-2 border-amber-200 shadow-lg z-20" />

            {/* Rotating Beam */}
            <div
              className={`w-full h-3.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-full shadow-xl transition-transform duration-700 ease-out origin-center -mt-4 z-10 ${
                scalePosition === 'tilted' ? 'rotate-[9deg]' : 'rotate-0'
              }`}
            />

            {/* Vertical Support Column */}
            <div className="w-4 h-36 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-800 rounded-sm shadow-md -mt-1" />
            <div className="w-36 h-5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 rounded-t-xl shadow-lg border-t border-slate-500" />
          </div>

          {/* Left Pan (공익) & Right Pan (사익) */}
          <div className="grid grid-cols-2 gap-6 -mt-36 relative z-10 px-2 sm:px-6">
            {/* Left Pan (얻는 공익 - 가벼움: 올라감) */}
            <div
              className={`flex flex-col items-center transition-transform duration-700 ease-out ${
                scalePosition === 'tilted' ? '-translate-y-6' : 'translate-y-0'
              }`}
            >
              {/* Chains */}
              <div className="w-full max-w-[140px] h-14 flex justify-between px-3">
                <div className="w-0.5 h-full bg-amber-300/70" />
                <div className="w-0.5 h-full bg-amber-300/70" />
              </div>
              {/* Pan Basket */}
              <div className="w-full p-4 rounded-2xl bg-slate-900 border-2 border-amber-400/80 text-left shadow-lg space-y-1.5">
                <div className="text-[11px] font-black text-amber-300 uppercase flex items-center gap-1">
                  ⚖️ 얻는 공익 (가벼움)
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                  한 지역 축제장 안전 확보
                </div>
                <p className="text-[10px] text-slate-400 leading-snug">
                  특정 날짜, 특정 장소에만 한정된 국지적 이익
                </p>
                <div className="pt-1 flex items-center gap-1 text-[10px] font-mono text-amber-300 font-bold">
                  <span>무게 등급:</span>
                  <span className="px-1.5 py-0.5 bg-amber-500/20 rounded">LIGHT (10kg)</span>
                </div>
              </div>
            </div>

            {/* Right Pan (잃는 사익 - 너무 무거움: 내려감) */}
            <div
              className={`flex flex-col items-center transition-transform duration-700 ease-out ${
                scalePosition === 'tilted' ? 'translate-y-6' : 'translate-y-0'
              }`}
            >
              {/* Chains */}
              <div className="w-full max-w-[140px] h-14 flex justify-between px-3">
                <div className="w-0.5 h-full bg-rose-400/80" />
                <div className="w-0.5 h-full bg-rose-400/80" />
              </div>
              {/* Pan Basket */}
              <div className="w-full p-4 rounded-2xl bg-rose-950/90 border-2 border-rose-400 text-left shadow-lg space-y-1.5">
                <div className="text-[11px] font-black text-rose-300 uppercase flex items-center gap-1">
                  💥 잃는 사익 (너무 무거움!)
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                  전 국민의 집회의 자유 박탈
                </div>
                <p className="text-[10px] text-rose-200 leading-snug">
                  축제와 무관한 5,000만 전국민의 헌법상 기본권 침해
                </p>
                <div className="pt-1 flex items-center gap-1 text-[10px] font-mono text-rose-300 font-bold">
                  <span>무게 등급:</span>
                  <span className="px-1.5 py-0.5 bg-rose-500/30 rounded">HEAVY (1,000kg)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-400 font-medium text-center pt-2 relative z-10">
          {isChecked
            ? '⚠️ 판정 결과: 잃는 기본권의 손실이 너무 무거워 저울이 심하게 기울었습니다!'
            : '판정을 선택하고 버튼을 누르면 물리 저울이 양쪽의 법익을 측정합니다.'}
        </div>
      </div>

      {/* Choice Buttons */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-sm">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-black text-slate-900">
            양쪽의 무게를 비교했을 때, 균형이 맞는다고 생각하니?
          </h3>
          <p className="text-xs text-slate-700 font-medium">
            공익과 사익의 비례관계를 헌법적으로 평가해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <button
            onClick={() => {
              if (!isChecked) setUserChoice('balanced');
            }}
            className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              userChoice === 'balanced'
                ? 'border-indigo-600 bg-indigo-50/90 ring-2 ring-indigo-500/20'
                : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
            }`}
          >
            <div className="font-extrabold text-slate-900 text-sm sm:text-base">
              A. 균형이 맞는다
            </div>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
              축제 안전이 최우선이므로 전 국민의 자유를 다 뺏어도 괜찮다
            </p>
          </button>

          <button
            onClick={() => {
              if (!isChecked) setUserChoice('unbalanced');
            }}
            className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              userChoice === 'unbalanced'
                ? 'border-indigo-600 bg-indigo-50/90 ring-2 ring-indigo-500/20'
                : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
            }`}
          >
            <div className="font-extrabold text-slate-900 text-sm sm:text-base">
              B. 균형이 맞지 않는다 (잃는 게 너무 큼)
            </div>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
              한 지역의 안전을 위해 5,000만 국민 전체의 자유를 뺏는 것은 부당하다
            </p>
          </button>
        </div>

        {!isChecked ? (
          <div className="flex justify-end pt-1">
            <button
              onClick={handleVerify}
              disabled={!userChoice}
              className={`px-7 py-3 rounded-2xl font-black text-sm sm:text-base transition-all shadow-sm flex items-center gap-1.5 ${
                userChoice
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer active:scale-95 shadow-indigo-200'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>저울 측정 및 판정</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-4 pt-3 border-t border-slate-200 animate-fadeIn">
            <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 space-y-2">
              <div className="flex items-center gap-2 text-rose-900 font-black text-sm">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>심사 결과: ④ 법익의 균형성 [위반 (FAIL)]</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                달성하려는 <strong>공익(축제장 안전)</strong>보다 그로 인해 침해되는 <strong>사익(전 국민 집회의 자유 박탈)</strong>이 훨씬 커서 심각한 불균형이 발생했습니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-indigo-900">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>정식 헌법 용어: [법익의 균형성 (상당성의 원칙)]</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                기본권 제한 조치를 통해 얻게 되는 <strong>공익</strong>이 그로 인해 침해되는 <strong>사익</strong>보다 커야만 헌법에 합치됩니다.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs font-bold">
              💡 기억 공식: “얻는 것보다 잃는 게 너무 크지 않아? ➔ 법익의 균형성!”
            </div>

            {onNext && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={onNext}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <span>과잉금지원칙 4단계 최종 결론 확인</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
