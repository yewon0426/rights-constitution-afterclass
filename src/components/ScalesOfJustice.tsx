import React, { useState } from 'react';
import { Scale, ChevronDown, ChevronUp, Bookmark, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

interface ScalesOfJusticeProps {
  onEvaluated?: (isBalanced: boolean) => void;
}

export const ScalesOfJustice: React.FC<ScalesOfJusticeProps> = ({ onEvaluated }) => {
  const [userChoice, setUserChoice] = useState<'balanced' | 'unbalanced' | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [showWhy, setShowWhy] = useState(false);

  const handleCheck = () => {
    if (!userChoice) return;
    setIsChecked(true);
    if (onEvaluated) {
      onEvaluated(userChoice === 'unbalanced');
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Top Badge */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
          <Scale className="w-3.5 h-3.5 text-amber-700" />
          <span>과잉금지원칙 4단계 심사</span>
        </span>
        <span className="text-xs font-bold text-stone-700">
          공익과 기본권의 무게 저울질하기
        </span>
      </div>

      {/* Main Intuitive Question */}
      <div className="text-center max-w-2xl mx-auto space-y-1">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 leading-tight">
          “얻는 것보다 잃는 것이 너무 크지 않아?”
        </h2>
        <p className="text-sm text-stone-700 font-medium">
          정부가 얻으려는 공익과 국민이 잃게 되는 기본권의 무게를 저울로 비교해 봅시다.
        </p>
      </div>

      {/* Visual Balance Scales Graphic */}
      <div className="py-6 px-4 sm:px-8 bg-stone-950 text-white rounded-3xl border border-stone-800 flex flex-col items-center justify-center relative overflow-hidden max-w-3xl mx-auto">
        <div className="w-full max-w-lg py-4 relative z-10">
          {/* Fulcrum and Beam */}
          <div className="relative w-full flex flex-col items-center">
            {/* Top Pivot Cap */}
            <div className="w-6 h-6 rounded-full bg-amber-400 border-2 border-amber-200 shadow-md z-20" />

            {/* Tilting Beam */}
            <div
              className={`w-full h-3 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-full shadow-lg transition-transform duration-700 ease-out origin-center -mt-3.5 z-10 ${
                isChecked ? 'rotate-[7deg]' : 'rotate-0'
              }`}
            />

            {/* Central Pillar Stand */}
            <div className="w-4 h-24 bg-gradient-to-b from-stone-400 via-stone-500 to-stone-700 rounded-sm shadow-md -mt-1" />
            <div className="w-28 h-4 bg-gradient-to-r from-stone-600 to-stone-800 rounded-t-lg shadow-lg" />
          </div>

          {/* Left Pan (얻는 공익) & Right Pan (잃는 기본권) */}
          <div className="grid grid-cols-2 gap-4 -mt-24 relative z-10 px-2">
            {/* Left Pan: Light 공익 */}
            <div
              className={`flex flex-col items-center transition-transform duration-700 ease-out ${
                isChecked ? '-translate-y-4' : 'translate-y-0'
              }`}
            >
              <div className="w-full max-w-[130px] h-10 flex justify-between px-2">
                <div className="w-0.5 h-full bg-amber-300/80" />
                <div className="w-0.5 h-full bg-amber-300/80" />
              </div>
              <div className="w-full p-4 rounded-2xl bg-stone-900 border-2 border-amber-400 text-left shadow-md space-y-1">
                <div className="text-[11px] font-black text-amber-300">
                  ⚖️ 얻는 공익 (가벼움)
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                  한 지역 축제장 안전 확보
                </div>
                <div className="text-[10px] text-stone-400 pt-0.5">
                  특정 장소와 시간대에 한정된 이익
                </div>
              </div>
            </div>

            {/* Right Pan: Heavy 기본권 침해 */}
            <div
              className={`flex flex-col items-center transition-transform duration-700 ease-out ${
                isChecked ? 'translate-y-4' : 'translate-y-0'
              }`}
            >
              <div className="w-full max-w-[130px] h-10 flex justify-between px-2">
                <div className="w-0.5 h-full bg-rose-400/80" />
                <div className="w-0.5 h-full bg-rose-400/80" />
              </div>
              <div className="w-full p-4 rounded-2xl bg-rose-950/90 border-2 border-rose-400 text-left shadow-md space-y-1">
                <div className="text-[11px] font-black text-rose-300">
                  💥 잃는 사익 (너무 무거움!)
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                  전 국민의 집회의 자유 박탈
                </div>
                <div className="text-[10px] text-rose-200 pt-0.5">
                  축제와 상관없는 5,000만 국민 전체 피해
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-stone-400 font-medium text-center pt-2">
          {isChecked
            ? '⚠️ 잃는 자유의 무게가 훨씬 무거워 저울이 심하게 기울었습니다!'
            : '판정을 확인하면 양쪽의 무게 균형이 저울에 반영됩니다.'}
        </div>
      </div>

      {/* Big Choice Cards */}
      {!isChecked ? (
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <button
              id="btn-scale-balanced"
              onClick={() => setUserChoice('balanced')}
              className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
                userChoice === 'balanced'
                  ? 'border-stone-900 bg-stone-100 ring-2 ring-stone-900/10'
                  : 'border-stone-200 bg-stone-50/70 hover:bg-stone-100'
              }`}
            >
              <div className="font-extrabold text-stone-900 text-base">
                A. 균형이 맞는다
              </div>
              <div className="text-xs text-stone-700 mt-1 font-medium">
                축제 안전을 위해 전 국민이 참아야 한다
              </div>
            </button>

            <button
              id="btn-scale-unbalanced"
              onClick={() => setUserChoice('unbalanced')}
              className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
                userChoice === 'unbalanced'
                  ? 'border-stone-900 bg-stone-100 ring-2 ring-stone-900/10'
                  : 'border-stone-200 bg-stone-50/70 hover:bg-stone-100'
              }`}
            >
              <div className="font-extrabold text-stone-900 text-base">
                B. 균형이 맞지 않는다 (잃는 게 너무 큼)
              </div>
              <div className="text-xs text-stone-700 mt-1 font-medium">
                작은 안전을 위해 너무 많은 국민의 자유를 뺏는다
              </div>
            </button>
          </div>

          <div className="flex justify-center pt-2">
            <button
              id="btn-verify-balance"
              onClick={handleCheck}
              disabled={!userChoice}
              className={`px-8 py-3.5 rounded-2xl font-black text-base transition-all duration-200 flex items-center gap-2 shadow-xs ${
                userChoice
                  ? 'bg-stone-900 hover:bg-stone-800 text-white cursor-pointer active:scale-95'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              <span>판정 보기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Explanations & Constitutional Terms */
        <div className="space-y-4 pt-4 border-t border-stone-200 animate-fadeIn max-w-3xl mx-auto">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              ✦ 헌법 개념 발견
            </span>
            <p className="text-sm sm:text-base font-bold text-stone-700">
              방금 한 판단을 헌법에서는 이렇게 부릅니다.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl bg-indigo-50 border-2 border-indigo-200 text-center space-y-3">
            <div className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-extrabold rounded-full">
              헌법재판소 심사 4단계
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-indigo-950">
              [법익의 균형성]
            </h3>

            <p className="text-sm sm:text-base font-semibold text-indigo-950 max-w-xl mx-auto leading-relaxed">
              기본권 제한으로 달성하려는 <strong>공익(얻는 이익)</strong>이 그로 인해 침해되는 <strong>사익(기본권 피해)</strong>보다 커야 합니다.
            </p>

            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-white border border-indigo-300 text-xs sm:text-sm font-bold text-indigo-900">
              <span>사건 판정:</span>
              <strong className="text-rose-600">위반 (FAIL - 지나치게 불균형)</strong>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 text-amber-950 text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-700 shrink-0" />
              <span>학생용 기억 문구: <strong>“얻는 것보다 잃는 게 너무 크지 않아?”</strong></span>
            </div>
          </div>

          {/* Expandable [왜 그런지 보기] */}
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
                한 지역의 축제 안전이라는 공익에 비해, 전국 5,000만 국민 전체의 집회의 자유를 전면 박탈함으로써 발생하는 기본권 침해의 손실이 지나치게 큽니다. 따라서 헌법상 법익의 균형성을 충족하지 못해 위헌입니다.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
