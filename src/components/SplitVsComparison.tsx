import React, { useState } from 'react';
import { Users, ShieldAlert, Sparkles, XCircle, CheckCircle2, AlertOctagon, HelpCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface SplitVsComparisonProps {
  onNext?: () => void;
}

export const SplitVsComparison: React.FC<SplitVsComparisonProps> = ({ onNext }) => {
  const [selectedChoice, setSelectedChoice] = useState<'both_ban' | 'discriminate' | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showCaseDetails, setShowCaseDetails] = useState<boolean>(false);

  const handleConfirm = () => {
    if (!selectedChoice) return;
    setIsAnswered(true);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Title Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-300 border border-rose-500/40 mb-1">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>과잉금지원칙 3단계: 침해의 최소성</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            “꼭 이렇게까지 다 막아야 할까요?”
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            성격이 완전히 다른 두 집회를 비교하여 헌법적 한계를 찾아봅시다.
          </p>
        </div>

        <span className="text-xs font-mono font-bold text-amber-300 bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/30">
          CASE COMPARISON
        </span>
      </div>

      {/* Dramatic Left/Right VS Split Battle Arena */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-800">
          {/* LEFT: 위험한 집회 (CASE A) */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-rose-950/80 via-slate-950 to-slate-950 text-white space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-rose-600 text-white font-black text-xs">
                  CASE A
                </span>
                <span className="text-xs font-black text-rose-400 flex items-center gap-1">
                  <AlertOctagon className="w-3.5 h-3.5" /> 심각한 위험 우려
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-rose-200">
                위험한 대규모 집회
              </h3>
              <div className="p-4 rounded-2xl bg-rose-900/30 border border-rose-500/40 space-y-2">
                <div className="flex items-center gap-2 text-rose-300 font-extrabold text-sm">
                  <Users className="w-4 h-4" /> 1,000명 대규모 인파
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  불꽃축제장 <strong>메인 출입구 앞 차도 전체를 점거</strong>하여 관람객들의 대피로가 막히고 압사사고 위험이 실재하는 상황
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-rose-500/30 text-xs text-rose-300 font-bold">
              👉 조치: 시간·장소 조율 및 안전 요원 배치 필요
            </div>
          </div>

          {/* RIGHT: 평화적인 집회 (CASE B) */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-emerald-950/80 via-slate-950 to-slate-950 text-white space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-black text-xs">
                  CASE B
                </span>
                <span className="text-xs font-black text-emerald-400 flex items-center gap-1">
                  🕊️ 평화적 의사표현
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-emerald-200">
                조용한 소규모 피켓
              </h3>
              <div className="p-4 rounded-2xl bg-emerald-900/30 border border-emerald-500/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-extrabold text-sm">
                  <Users className="w-4 h-4" /> 10명 소규모 환경동아리
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  축제장에서 <strong>10km 떨어진 한적한 동네 공원</strong> 잔디밭에서 통행 방해 없이 조용히 기후위기 피켓을 드는 평화적 활동
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/30 text-xs text-emerald-300 font-bold">
              👉 조치: 축제 안전과 충돌 없으므로 당연히 보장되어야 함
            </div>
          </div>
        </div>

        {/* Center VS Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 font-black text-lg flex items-center justify-center shadow-2xl border-4 border-slate-900 animate-pulse">
            VS
          </div>
        </div>
      </div>

      {/* Blanket Government Ban Warning */}
      <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 text-center space-y-1">
        <span className="text-xs font-black text-rose-700 uppercase tracking-wide">
          정부의 일률적 행정명령
        </span>
        <p className="text-base sm:text-lg font-black text-rose-950">
          “CASE A도 금지! CASE B도 금지! 전국의 모든 집회 일률 전면 금지!”
        </p>
      </div>

      {/* Question & Choice Area */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-sm">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-black text-slate-900">
            너라면 두 집회에 대해 어떤 결정을 내리겠니?
          </h3>
          <p className="text-xs text-slate-700 font-medium">
            정부처럼 둘 다 일률적으로 전면 금지하는 것이 옳을까요?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <button
            onClick={() => {
              if (!isAnswered) setSelectedChoice('both_ban');
            }}
            className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              selectedChoice === 'both_ban'
                ? 'border-indigo-600 bg-indigo-50/90 ring-2 ring-indigo-500/20 -translate-y-0.5'
                : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-black px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                A안
              </span>
              {selectedChoice === 'both_ban' && (
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              )}
            </div>
            <div className="font-extrabold text-slate-900 text-sm sm:text-base">
              둘 다 똑같이 무조건 막아야 한다
            </div>
            <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
              하나라도 허용하면 관리가 힘드니 통째로 막는 게 행정상 편하다
            </p>
          </button>

          <button
            onClick={() => {
              if (!isAnswered) setSelectedChoice('discriminate');
            }}
            className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              selectedChoice === 'discriminate'
                ? 'border-indigo-600 bg-indigo-50/90 ring-2 ring-indigo-500/20 -translate-y-0.5'
                : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                B안 (정답)
              </span>
              {selectedChoice === 'discriminate' && (
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              )}
            </div>
            <div className="font-extrabold text-slate-900 text-sm sm:text-base">
              덜 제한적인 방법이 가능하다 (구분 처리)
            </div>
            <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
              위험한 A만 시간·장소를 조율하고, 평화로운 B는 온전히 보장해야 한다
            </p>
          </button>
        </div>

        {!isAnswered ? (
          <div className="flex justify-end pt-1">
            <button
              onClick={handleConfirm}
              disabled={!selectedChoice}
              className={`px-7 py-3 rounded-2xl font-black text-sm transition-all shadow-sm flex items-center gap-1.5 ${
                selectedChoice
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer active:scale-95 shadow-indigo-200'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>판정 확인하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-4 pt-3 border-t border-slate-200 animate-fadeIn">
            <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 space-y-2">
              <div className="flex items-center gap-2 text-rose-900 font-black text-sm">
                <XCircle className="w-5 h-5 text-rose-600" />
                <span>심사 결과: ③ 침해의 최소성 [위반 (FAIL)]</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                축제 안전을 위협하지 않는 <strong>평화적인 소규모 집회(CASE B)</strong>까지 일률적으로 전부 금지하는 것은 <strong>‘필요 이상으로’</strong> 국민의 기본권을 침해한 것입니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-indigo-900">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>정식 헌법 용어: [침해의 최소성 (피해의 최소성)]</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                국가가 기본권을 제한할 때는 <strong>목적을 달성하는 데 필요한 가장 적은 침해 수단</strong>을 선택해야 하며, 덜 제한적인 대안(시간·장소별 부분 제한 등)이 있다면 그것을 먼저 활용해야 합니다.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs font-bold">
              💡 기억 공식: “꼭 이렇게까지 다 막아야 해? ➔ 침해의 최소성!”
            </div>

            {onNext && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={onNext}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <span>다음: 법익의 균형성 저울 시뮬레이터</span>
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
