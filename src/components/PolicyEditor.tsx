import React, { useState } from 'react';
import { FileCode2, Check, AlertTriangle, Sparkles, CheckCircle2, RotateCcw, Award, ArrowRight } from 'lucide-react';

interface PolicyEditorProps {
  onNext?: () => void;
}

export const PolicyEditor: React.FC<PolicyEditorProps> = ({ onNext }) => {
  const [selectedRevision, setSelectedRevision] = useState<'a' | 'b' | null>(null);
  const [isApplied, setIsApplied] = useState<boolean>(false);

  const handleApply = () => {
    if (!selectedRevision) return;
    setIsApplied(true);
  };

  const handleReset = () => {
    setSelectedRevision(null);
    setIsApplied(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Policy Editor IDE Window Frame */}
      <div className="bg-slate-950 rounded-3xl border-2 border-slate-800 shadow-2xl overflow-hidden text-slate-100 font-sans">
        {/* Editor Title Bar */}
        <div className="bg-slate-900 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            {/* Mac style window dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
              <FileCode2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>AssemblyLaw_Article11.law</span>
            </div>
          </div>

          {/* Status Badge in Titlebar */}
          <div>
            {!isApplied || selectedRevision === 'b' ? (
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[11px] font-mono font-black flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-rose-400 animate-pulse" />
                STATUS: UNCONSTITUTIONAL (위헌 규정 검출)
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono font-black flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                STATUS: APPROVED (합헌 규정 완성)
              </span>
            )}
          </div>
        </div>

        {/* Code / Document Canvas with Line Numbers */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
          <div className="grid grid-cols-[30px_1fr] sm:grid-cols-[40px_1fr] gap-3 text-slate-400">
            {/* Line 1 */}
            <div className="text-right select-none text-slate-600">01</div>
            <div>
              <span className="text-indigo-400 font-bold"># [개정안 검토]</span>{' '}
              <span className="text-slate-500">// 집회 및 시위에 관한 법률 개정안</span>
            </div>

            {/* Line 2 */}
            <div className="text-right select-none text-slate-600">02</div>
            <div>
              <span className="text-amber-400 font-bold">SECTION</span> 11 (옥외집회 및 시위의 제한)
            </div>

            {/* Line 3 */}
            <div className="text-right select-none text-slate-600">03</div>
            <div className="text-slate-600">{'{'}</div>

            {/* Line 4 (The Problematic Text) */}
            <div className="text-right select-none text-slate-600">04</div>
            <div className="pl-4">
              <span className="text-sky-400">RULE</span>:{' '}
              {!isApplied ? (
                <span className="bg-rose-950/80 text-rose-200 px-2 py-0.5 rounded border border-rose-500/60 underline decoration-rose-500 decoration-wavy decoration-2 font-bold">
                  “공공 안전을 이유로 전국의 모든 야외 집회 및 시위를 전면 불허한다.”
                </span>
              ) : selectedRevision === 'a' ? (
                <span className="bg-emerald-950/90 text-emerald-200 px-2 py-0.5 rounded border border-emerald-400 font-bold animate-fadeIn">
                  “대규모 인파 밀집 우려 시, <strong className="text-white underline">위험 구역과 시간대를 구체적으로 특정하여 제한</strong>하고, 그 외 평화적 집회는 안전요원 배치 하에 보장한다.”
                </span>
              ) : (
                <span className="bg-rose-950/80 text-rose-200 px-2 py-0.5 rounded border border-rose-500 underline font-bold">
                  “전국의 모든 야외 집회를 계속 전면 불허하되, 위반 시 과태료를 2배로 인상한다.”
                </span>
              )}
            </div>

            {/* Line 5 */}
            <div className="text-right select-none text-slate-600">05</div>
            <div className="text-slate-600">{'}'}</div>
          </div>
        </div>

        {/* Real-time Stamp Overlay upon constitutional approval */}
        {isApplied && selectedRevision === 'a' && (
          <div className="p-4 bg-emerald-950/60 border-t border-emerald-500/30 flex items-center justify-between flex-wrap gap-2 animate-fadeIn">
            <div className="flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-bold">
              <Award className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                헌법재판소 합헌성 심사 통과: <strong>‘침해의 최소성’과 ‘법익의 균형성’ 충족 완료!</strong>
              </span>
            </div>
            <span className="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full font-mono">
              CONSTITUTIONAL STAMP: APPROVED
            </span>
          </div>
        )}
      </div>

      {/* Interactive Revision Choices */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700 border border-indigo-200">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>법률 개정 에디터: 위헌 요소 수정하기</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900">
            문제가 되는 빨간 밑줄 문구를 헌법에 맞게 어떻게 수정해야 할까요?
          </h3>
          <p className="text-xs text-slate-700 font-medium">
            아래 수정안 중 ‘과잉금지원칙’을 완벽히 지키는 조항을 선택하여 코드에 적용해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Option A (Correct) */}
          <button
            onClick={() => setSelectedRevision('a')}
            className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              selectedRevision === 'a'
                ? 'border-emerald-600 bg-emerald-50/90 ring-2 ring-emerald-500/20'
                : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                수정안 A (헌법 부합)
              </span>
              {selectedRevision === 'a' && (
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              )}
            </div>
            <div className="font-extrabold text-slate-900 text-sm sm:text-base">
              구체적 시간·장소 조율 및 평화적 집회 보장
            </div>
            <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
              위험 구역과 시간만 한정하여 조율하고, 무해한 평화적 집회는 안전요원을 배치하여 최대한 보장한다.
            </p>
          </button>

          {/* Option B (Incorrect) */}
          <button
            onClick={() => setSelectedRevision('b')}
            className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              selectedRevision === 'b'
                ? 'border-rose-600 bg-rose-50/90 ring-2 ring-rose-500/20'
                : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-black px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                수정안 B (여전히 위헌)
              </span>
              {selectedRevision === 'b' && (
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
              )}
            </div>
            <div className="font-extrabold text-slate-900 text-sm sm:text-base">
              전면 금지를 유지하고 처벌 수위만 강화
            </div>
            <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
              전국 전면 금지 틀은 그대로 두고, 어기는 사람에게 벌금과 과태료만 2배로 올린다.
            </p>
          </button>
        </div>

        <div className="flex items-center justify-between pt-1">
          {isApplied ? (
            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>원문으로 되돌리기</span>
            </button>
          ) : <div />}

          <div className="flex items-center gap-2">
            <button
              onClick={handleApply}
              disabled={!selectedRevision}
              className={`px-7 py-3 rounded-2xl font-black text-sm sm:text-base transition-all shadow-sm flex items-center gap-1.5 ${
                selectedRevision
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer active:scale-95 shadow-indigo-200'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>에디터에 수정안 적용</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {isApplied && selectedRevision === 'a' && onNext && (
              <button
                onClick={onNext}
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base transition-all shadow-md flex items-center gap-1.5 cursor-pointer animate-fadeIn"
              >
                <span>실제 헌재 판례 비교 확인</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
