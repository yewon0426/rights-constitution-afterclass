import React, { useState } from 'react';
import { Landmark, Building2, Gavel, Scale, Sparkles, AlertTriangle, ArrowRight, HelpCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const OrderRuleComic: React.FC = () => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [activeTab, setActiveTab] = useState<'comic' | 'comparison'>('comic');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 mb-1 border border-amber-200">
            <Scale className="w-3.5 h-3.5" />
            <span>핵심 비교: 명령·규칙 심사권</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            “법률은 헌재, 명령·규칙은 법원!”
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
            정부가 만든 시행령이나 규칙이 국회 법률의 뜻을 어겼을 때 누가 바로잡을까요?
          </p>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('comic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'comic'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            4컷 스토리
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'comparison'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            기관별 심사 대상 비교
          </button>
        </div>
      </div>

      {activeTab === 'comic' ? (
        /* 4-Cut Comic Style Grid */
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* CUT 1: 국회 */}
            <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/50 p-4 flex flex-col justify-between space-y-3 relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-black text-xs">
                  CUT 1
                </span>
                <span className="text-[11px] font-bold text-indigo-700 flex items-center gap-1">
                  <Landmark className="w-3.5 h-3.5" /> 국회 (법률 제정)
                </span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-indigo-100 shadow-xs text-center my-auto">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                  국회
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                  “모든 국민은 공원을 자유롭게 이용할 권리가 있습니다.”
                </p>
                <span className="mt-2 inline-block text-[10px] bg-indigo-50 text-indigo-800 font-semibold px-2 py-0.5 rounded">
                  [공원관리법] 통과
                </span>
              </div>

              <div className="text-[11px] text-slate-700 text-center font-medium">
                국민의 대표가 기본 법률을 제정
              </div>
            </div>

            {/* CUT 2: 정부 */}
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-4 flex flex-col justify-between space-y-3 relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md bg-amber-600 text-white font-black text-xs">
                  CUT 2
                </span>
                <span className="text-[11px] font-bold text-amber-700 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" /> 정부 (시행규칙 제정)
                </span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-amber-100 shadow-xs text-center my-auto">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">
                  정부
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-amber-950 leading-snug">
                  “그런데 관리가 어려우니, 20세 미만은 공원 출입 전부 금지!”
                </p>
                <span className="mt-2 inline-block text-[10px] bg-amber-100 text-amber-900 font-semibold px-2 py-0.5 rounded">
                  [공원관리 시행규칙] 공포
                </span>
              </div>

              <div className="text-[11px] text-amber-900 text-center font-bold">
                ⚠️ 법률보다 더 강하게 기본권 박탈!
              </div>
            </div>

            {/* CUT 3: 민서 */}
            <div className="rounded-2xl border-2 border-slate-300 bg-slate-50 p-4 flex flex-col justify-between space-y-3 relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md bg-slate-700 text-white font-black text-xs">
                  CUT 3
                </span>
                <span className="text-[11px] font-bold text-slate-700">시민의 의문</span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs text-center my-auto">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-xs">
                  민서
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                  “어? 국회가 만든 법률에는 그런 제한 내용이 전혀 없는데?”
                </p>
                <span className="mt-2 inline-block text-[10px] bg-rose-50 text-rose-700 font-semibold px-2 py-0.5 rounded border border-rose-100">
                  위법한 규칙에 항의 소송 제기
                </span>
              </div>

              <div className="text-[11px] text-slate-700 text-center font-medium">
                국민 권리가 침해되어 법원에 호소
              </div>
            </div>

            {/* CUT 4: 법원 */}
            <div className="rounded-2xl border-2 border-sky-200 bg-sky-50/50 p-4 flex flex-col justify-between space-y-3 relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md bg-sky-600 text-white font-black text-xs">
                  CUT 4
                </span>
                <span className="text-[11px] font-bold text-sky-700 flex items-center gap-1">
                  <Gavel className="w-3.5 h-3.5" /> 법원 (사법부 심사)
                </span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-sky-100 shadow-xs text-center my-auto">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs">
                  법원
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-sky-950 leading-snug">
                  “정부가 만든 이 규칙이 법률에 어긋나는지 법원이 심사합니다!”
                </p>
                <span className="mt-2 inline-block text-[10px] bg-sky-100 text-sky-900 font-bold px-2 py-0.5 rounded">
                  [명령·규칙 심사권] 발동
                </span>
              </div>

              <div className="text-[11px] text-sky-800 text-center font-semibold">
                법원이 해당 규칙의 적용을 거부
              </div>
            </div>
          </div>

          {/* Golden Rule Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="space-y-0.5">
              <span className="text-xs font-black uppercase tracking-wider text-amber-200">
                시험 & 수능 필수 암기 공식
              </span>
              <div className="text-base sm:text-lg font-black tracking-tight">
                “국회의 법률은 <span className="underline decoration-white decoration-2">헌법재판소</span>가, 정부의 명령·규칙은 <span className="underline decoration-white decoration-2">법원(대법원)</span>이!”
              </div>
            </div>
            <button
              onClick={() => setShowExplanation((prev) => !prev)}
              className="px-3.5 py-1.5 bg-white/20 hover:bg-white/30 rounded-xl text-xs font-bold backdrop-blur-xs flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>{showExplanation ? '접기' : '왜 그런지 보기'}</span>
              {showExplanation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      ) : (
        /* Comparison View */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
          {/* Box 1: 헌법재판소 심사 대상 */}
          <div className="p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md bg-rose-600 text-white font-extrabold text-xs">
                헌법재판소 관할
              </span>
              <span className="text-xs text-rose-700 font-bold">위헌법률심판</span>
            </div>

            <div>
              <h4 className="text-base font-extrabold text-slate-900">
                국회가 만든 ‘법률’이 헌법에 어긋날 때
              </h4>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                법률은 국민의 대표기관인 국회가 제정한 것이므로, 일반 법원이 스스로 없앨 수 없고 독립된 최고 헌법기관인 <strong>헌법재판소</strong>가 위헌 결정을 내려 효력을 상실시킵니다.
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-rose-100 text-xs font-semibold text-rose-950">
              📌 예시: 집회 및 시위에 관한 법률 제11조가 과잉금지원칙을 위반했는지 심판
            </div>
          </div>

          {/* Box 2: 법원(대법원) 심사 대상 */}
          <div className="p-5 rounded-2xl border-2 border-sky-200 bg-sky-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white font-extrabold text-xs">
                법원 (최종: 대법원) 관할
              </span>
              <span className="text-xs text-sky-700 font-bold">명령·규칙 심사권</span>
            </div>

            <div>
              <h4 className="text-base font-extrabold text-slate-900">
                행정부가 만든 ‘대통령령·부령·조례·규칙’이 어긋날 때
              </h4>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                재판 과정에서 전제가 된 정부의 시행령, 시행규칙, 지자체 조례 등이 상위 법률이나 헌법에 위반되는지는 <strong>법원</strong>이 심사하며, 최종적인 심사 권한은 <strong>대법원</strong>에 있습니다.
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-sky-100 text-xs font-semibold text-sky-950">
              📌 예시: 공원관리 시행규칙이 모법인 법률의 위임 범위를 벗어나 국민 출입을 금지했는지 심사
            </div>
          </div>
        </div>
      )}

      {/* Expandable Explanation Details */}
      {showExplanation && (
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2 animate-fadeIn">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>선생님의 꼼꼼 해설 (헌법 제107조 규정)</span>
          </div>
          <p className="leading-relaxed">
            헌법 제107조 제1항은 <strong>“법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다”</strong>고 규정하고, 제2항은 <strong>“명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다”</strong>고 명시합니다.
          </p>
          <div className="pt-1 text-[11px] text-indigo-700 font-bold">
            💡 핵심 정리: 하위 법규(명령·규칙)는 상위 법규(법률·헌법)를 침범할 수 없습니다 (법단계설).
          </div>
        </div>
      )}
    </div>
  );
};
