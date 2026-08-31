import React, { useState } from 'react';
import { Users, ShieldAlert, Sparkles, XCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface CaseComparisonProps {
  onCheck?: (isMinimal: boolean) => void;
}

export const CaseComparison: React.FC<CaseComparisonProps> = ({ onCheck }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showDetailedWhy, setShowDetailedWhy] = useState<boolean>(false);

  const handleVerify = () => {
    if (!selectedOption) return;
    setIsChecked(true);
    if (onCheck) {
      onCheck(selectedOption === 'less_restrictive');
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 space-y-6 shadow-sm">
      {/* Top Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
          <ShieldAlert className="w-3.5 h-3.5 text-indigo-600" />
          <span>사건 비교로 원칙 발견하기</span>
        </div>
        <span className="text-xs font-bold text-slate-700">
          핵심 판단: <strong>CASE A vs CASE B</strong>
        </span>
      </div>

      {/* Main Big Question */}
      <div className="text-center sm:text-left space-y-1">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          “꼭 이렇게까지 다 막아야 할까요?”
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 font-medium">
          성격이 완전히 다른 두 집회를 정부가 어떻게 대해야 하는지 비교해 봅시다.
        </p>
      </div>

      {/* Visual Side-by-Side Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* CASE A Card */}
        <div className="rounded-3xl border-2 border-amber-300 bg-amber-50/50 p-5 space-y-3 relative overflow-hidden shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-lg bg-amber-500 text-white font-black text-xs">
              CASE A
            </span>
            <span className="text-xs text-amber-900 font-extrabold">⚠️ 심각한 혼잡 우려</span>
          </div>

          <div className="h-28 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200/80 border border-amber-300 flex flex-col items-center justify-center p-3 text-center">
            <div className="flex items-center gap-1.5 text-amber-950 font-black text-sm mb-1">
              <Users className="w-5 h-5 text-amber-700" /> 1,000명 대규모 인파
            </div>
            <p className="text-xs text-amber-950 font-semibold">
              불꽃축제장 메인 출입구 앞 차도 전체 점거
            </p>
            <span className="mt-1.5 text-[10px] bg-amber-300/90 text-amber-950 px-2 py-0.5 rounded font-bold">
              압사사고 및 통행 마비 위험 실재
            </span>
          </div>

          <div className="text-xs text-slate-700 font-medium leading-relaxed">
            축제 출입구 정체로 실질적인 위험이 우려되어 시간·장소 조율이 필요한 상황
          </div>
        </div>

        {/* CASE B Card */}
        <div className="rounded-3xl border-2 border-emerald-300 bg-emerald-50/50 p-5 space-y-3 relative overflow-hidden shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-black text-xs">
              CASE B
            </span>
            <span className="text-xs text-emerald-900 font-extrabold">🕊️ 평화적 1인·소규모 피켓</span>
          </div>

          <div className="h-28 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200/80 border border-emerald-300 flex flex-col items-center justify-center p-3 text-center">
            <div className="flex items-center gap-1.5 text-emerald-950 font-black text-sm mb-1">
              <Users className="w-5 h-5 text-emerald-700" /> 10명 소규모 시민
            </div>
            <p className="text-xs text-emerald-950 font-semibold">
              축제장에서 5km 떨어진 한적한 공원 피켓
            </p>
            <span className="mt-1.5 text-[10px] bg-emerald-300/90 text-emerald-950 px-2 py-0.5 rounded font-bold">
              축제장 안전과 직접적 충돌 없음
            </span>
          </div>

          <div className="text-xs text-slate-700 font-medium leading-relaxed">
            축제 안전에 위협이 전혀 없는 평화로운 의사 표현 활동
          </div>
        </div>
      </div>

      {/* Blanket Government Rule Banner */}
      <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-200 text-center space-y-1">
        <span className="text-xs font-black text-rose-700 uppercase tracking-wide">
          정부의 일률적 명령
        </span>
        <p className="text-base sm:text-lg font-black text-rose-950">
          “CASE A도 금지! CASE B도 금지! 전국의 모든 집회 일률 전면 금지!”
        </p>
      </div>

      {/* Interactive Selection */}
      {!isChecked ? (
        <div className="space-y-4 pt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              id="opt-both-ban"
              onClick={() => setSelectedOption('both_ban')}
              className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                selectedOption === 'both_ban'
                  ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-500/20 -translate-y-0.5 shadow-xs'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:-translate-y-0.5'
              }`}
            >
              <div className="font-bold text-slate-900 text-sm sm:text-base">
                A. 둘 다 무조건 똑같이 막아야 한다
              </div>
              <div className="text-xs text-slate-700 mt-1 leading-relaxed">
                하나라도 허용하면 관리가 어려우니 전부 막는 것이 편하다
              </div>
            </button>

            <button
              id="opt-less-restrictive"
              onClick={() => setSelectedOption('less_restrictive')}
              className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                selectedOption === 'less_restrictive'
                  ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-500/20 -translate-y-0.5 shadow-xs'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:-translate-y-0.5'
              }`}
            >
              <div className="font-bold text-slate-900 text-sm sm:text-base">
                B. 덜 제한적인 방법이 가능하다 (구분 처리)
              </div>
              <div className="text-xs text-slate-700 mt-1 leading-relaxed">
                위험한 A만 시간·장소를 조율하고, 평화로운 B는 보장해야 한다
              </div>
            </button>
          </div>

          <div className="flex justify-end pt-1">
            <button
              id="btn-verify-minimal"
              onClick={handleVerify}
              disabled={!selectedOption}
              className={`px-7 py-3 rounded-2xl font-black text-sm sm:text-base transition-all shadow-sm ${
                selectedOption
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 cursor-pointer shadow-indigo-200'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              판정 보기
            </button>
          </div>
        </div>
      ) : (
        /* Explanations & Constitutional Terms */
        <div className="space-y-4 pt-2 border-t border-slate-200 animate-fadeIn">
          <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 border border-rose-200">
            <div className="flex items-center gap-2 text-rose-800 font-extrabold text-sm mb-1">
              <XCircle className="w-5 h-5 text-rose-600" />
              <span>판정 결과: ③ 침해의 최소성 [위반 (FAIL)]</span>
            </div>
            <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
              안전을 위협하지 않는 <strong>평화적인 집회(CASE B)</strong>까지 일률적으로 전부 금지하는 것은 <strong>‘필요 이상으로’</strong> 국민의 기본권을 침해한 것입니다.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50 border-2 border-indigo-200 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-black text-indigo-900">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>정식 헌법 용어: [침해의 최소성 (피해의 최소성)]</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              국가가 기본권을 제한할 때는 <strong>목적을 달성하는 데 필요한 가장 적은 침해 수단</strong>을 선택해야 하며, 덜 제한적인 대안(시간·장소별 제한 등)이 있다면 그것을 먼저 활용해야 합니다.
            </p>

            <div className="pt-2 border-t border-indigo-100">
              <button
                onClick={() => setShowDetailedWhy((prev) => !prev)}
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-900 cursor-pointer"
              >
                <span>{showDetailedWhy ? '접기' : '왜 그런지 보기 (헌재 판례 원칙)'}</span>
                {showDetailedWhy ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showDetailedWhy && (
                <p className="mt-2 text-xs text-slate-700 leading-relaxed font-normal bg-white p-3 rounded-xl border border-indigo-100 animate-fadeIn">
                  헌법재판소는 집회의 자유를 제한할 때, 평화적 집회와 폭력적 집회를 구별하지 않고 일률적으로 전면 금지하는 규정은 최소침해성 원칙에 반하여 위헌이라고 일관되게 판시하고 있습니다.
                </p>
              )}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs font-bold">
            💡 학생용 기억 문구: “꼭 이렇게까지 해야 해?”
          </div>
        </div>
      )}
    </div>
  );
};
