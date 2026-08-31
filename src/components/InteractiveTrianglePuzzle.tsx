import React, { useState } from 'react';
import { Landmark, Building2, Gavel, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, RotateCcw, AlertCircle } from 'lucide-react';
import { POWER_CHECKS } from '../data/curriculum';

export const InteractiveTrianglePuzzle: React.FC = () => {
  const [solvedChecks, setSolvedChecks] = useState<number[]>([1]); // start with #1 active/discovered or user can click
  const [activeCheckId, setActiveCheckId] = useState<number>(1);
  const [userSelection, setUserSelection] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const activeCheck = POWER_CHECKS.find((c) => c.id === activeCheckId) || POWER_CHECKS[0];

  const handleSelectOption = (optId: string) => {
    if (!isAnswered) {
      setUserSelection(optId);
    }
  };

  const handleVerify = () => {
    if (!userSelection) return;
    setIsAnswered(true);
    if (!solvedChecks.includes(activeCheckId)) {
      setSolvedChecks((prev) => [...prev, activeCheckId]);
    }
  };

  const handleNextCheck = () => {
    const nextId = activeCheckId < 6 ? activeCheckId + 1 : 1;
    setActiveCheckId(nextId);
    setUserSelection(null);
    setIsAnswered(solvedChecks.includes(nextId));
  };

  const handleQuickJump = (id: number) => {
    setActiveCheckId(id);
    setUserSelection(null);
    setIsAnswered(solvedChecks.includes(id));
  };

  const handleSolveAll = () => {
    setSolvedChecks([1, 2, 3, 4, 5, 6]);
    setIsAnswered(true);
  };

  const isComplete = solvedChecks.length === 6;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>삼권분립 6대 견제 화살표 퍼즐</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            “국가권력은 어떻게 서로를 견제할까?”
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            국회·정부·법원이 주고받는 6개의 상호 견제 화살표를 사건을 통해 하나씩 연결해 보세요.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400">화살표 완성도:</span>
          <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-mono text-xs font-black border border-amber-400/40">
            {solvedChecks.length} / 6 연결 완료
          </span>
        </div>
      </div>

      {/* SVG Interactive Triangle Relationship Map */}
      <div className="bg-slate-950 rounded-3xl border-2 border-slate-800 p-5 sm:p-8 text-white shadow-2xl relative overflow-hidden flex flex-col items-center">
        {/* Triangle Relationship Stage */}
        <div className="w-full max-w-2xl relative aspect-[4/3] sm:aspect-[16/11]">
          {/* SVG Canvas for Dynamic Arrows */}
          <svg className="w-full h-full absolute inset-0 z-0 pointer-events-none" viewBox="0 0 800 600">
            <defs>
              <marker
                id="arrow-active"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
              </marker>
              <marker
                id="arrow-solved"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
              </marker>
              <marker
                id="arrow-inactive"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155" />
              </marker>
            </defs>

            {/* Triangle Nodes Coordinates:
                Top (국회): (400, 110)
                Bottom Left (정부): (190, 480)
                Bottom Right (법원): (610, 480)
            */}

            {/* #1: 국회 ➔ 정부 (Top -> Bottom Left, left-curved) */}
            <path
              d="M 360 145 Q 230 270 205 435"
              fill="none"
              stroke={
                activeCheckId === 1
                  ? '#f59e0b'
                  : solvedChecks.includes(1)
                  ? '#10b981'
                  : '#334155'
              }
              strokeWidth={activeCheckId === 1 ? '4' : '2.5'}
              strokeDasharray={solvedChecks.includes(1) ? 'none' : '6 4'}
              markerEnd={
                activeCheckId === 1
                  ? 'url(#arrow-active)'
                  : solvedChecks.includes(1)
                  ? 'url(#arrow-solved)'
                  : 'url(#arrow-inactive)'
              }
              className="transition-all duration-500"
            />

            {/* #2: 정부 ➔ 국회 (Bottom Left -> Top, right-inner) */}
            <path
              d="M 235 440 Q 300 310 380 165"
              fill="none"
              stroke={
                activeCheckId === 2
                  ? '#f59e0b'
                  : solvedChecks.includes(2)
                  ? '#10b981'
                  : '#334155'
              }
              strokeWidth={activeCheckId === 2 ? '4' : '2.5'}
              strokeDasharray={solvedChecks.includes(2) ? 'none' : '6 4'}
              markerEnd={
                activeCheckId === 2
                  ? 'url(#arrow-active)'
                  : solvedChecks.includes(2)
                  ? 'url(#arrow-solved)'
                  : 'url(#arrow-inactive)'
              }
              className="transition-all duration-500"
            />

            {/* #3: 국회 ➔ 법원 (Top -> Bottom Right, inner curve) */}
            <path
              d="M 420 165 Q 500 310 565 440"
              fill="none"
              stroke={
                activeCheckId === 3
                  ? '#f59e0b'
                  : solvedChecks.includes(3)
                  ? '#10b981'
                  : '#334155'
              }
              strokeWidth={activeCheckId === 3 ? '4' : '2.5'}
              strokeDasharray={solvedChecks.includes(3) ? 'none' : '6 4'}
              markerEnd={
                activeCheckId === 3
                  ? 'url(#arrow-active)'
                  : solvedChecks.includes(3)
                  ? 'url(#arrow-solved)'
                  : 'url(#arrow-inactive)'
              }
              className="transition-all duration-500"
            />

            {/* #4: 법원 ➔ 국회 (Bottom Right -> Top, outer curve) */}
            <path
              d="M 595 435 Q 570 270 440 145"
              fill="none"
              stroke={
                activeCheckId === 4
                  ? '#f59e0b'
                  : solvedChecks.includes(4)
                  ? '#10b981'
                  : '#334155'
              }
              strokeWidth={activeCheckId === 4 ? '4' : '2.5'}
              strokeDasharray={solvedChecks.includes(4) ? 'none' : '6 4'}
              markerEnd={
                activeCheckId === 4
                  ? 'url(#arrow-active)'
                  : solvedChecks.includes(4)
                  ? 'url(#arrow-solved)'
                  : 'url(#arrow-inactive)'
              }
              className="transition-all duration-500"
            />

            {/* #5: 정부 ➔ 법원 (Bottom Left -> Bottom Right, lower curve) */}
            <path
              d="M 260 520 Q 400 560 540 520"
              fill="none"
              stroke={
                activeCheckId === 5
                  ? '#f59e0b'
                  : solvedChecks.includes(5)
                  ? '#10b981'
                  : '#334155'
              }
              strokeWidth={activeCheckId === 5 ? '4' : '2.5'}
              strokeDasharray={solvedChecks.includes(5) ? 'none' : '6 4'}
              markerEnd={
                activeCheckId === 5
                  ? 'url(#arrow-active)'
                  : solvedChecks.includes(5)
                  ? 'url(#arrow-solved)'
                  : 'url(#arrow-inactive)'
              }
              className="transition-all duration-500"
            />

            {/* #6: 법원 ➔ 정부 (Bottom Right -> Bottom Left, upper curve) */}
            <path
              d="M 540 470 Q 400 430 260 470"
              fill="none"
              stroke={
                activeCheckId === 6
                  ? '#f59e0b'
                  : solvedChecks.includes(6)
                  ? '#10b981'
                  : '#334155'
              }
              strokeWidth={activeCheckId === 6 ? '4' : '2.5'}
              strokeDasharray={solvedChecks.includes(6) ? 'none' : '6 4'}
              markerEnd={
                activeCheckId === 6
                  ? 'url(#arrow-active)'
                  : solvedChecks.includes(6)
                  ? 'url(#arrow-solved)'
                  : 'url(#arrow-inactive)'
              }
              className="transition-all duration-500"
            />
          </svg>

          {/* Node 1: Top (국회 / 입법부) */}
          <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-indigo-600 border-2 border-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
                <Landmark className="w-7 h-7 sm:w-10 sm:h-10" />
              </div>
              <div className="text-center mt-1.5">
                <div className="text-xs sm:text-base font-black text-white">국회 (입법부)</div>
                <div className="text-[10px] sm:text-xs text-indigo-300 font-medium">법률 제정 권한</div>
              </div>
            </div>
          </div>

          {/* Node 2: Bottom Left (정부 / 행정부) */}
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-6 z-10">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-amber-600 border-2 border-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 text-white">
                <Building2 className="w-7 h-7 sm:w-10 sm:h-10" />
              </div>
              <div className="text-center mt-1.5">
                <div className="text-xs sm:text-base font-black text-white">정부 (행정부)</div>
                <div className="text-[10px] sm:text-xs text-amber-300 font-medium">법률 집행 권한</div>
              </div>
            </div>
          </div>

          {/* Node 3: Bottom Right (법원 / 사법부) */}
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-6 z-10">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-sky-600 border-2 border-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/20 text-white">
                <Gavel className="w-7 h-7 sm:w-10 sm:h-10" />
              </div>
              <div className="text-center mt-1.5">
                <div className="text-xs sm:text-base font-black text-white">법원 (사법부)</div>
                <div className="text-[10px] sm:text-xs text-sky-300 font-medium">법률 적용 및 재판</div>
              </div>
            </div>
          </div>

          {/* Center Core: 견제와 균형 (Checks & Balances) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div
              className={`p-3 sm:p-5 rounded-2xl sm:rounded-3xl border-2 text-center transition-all duration-700 shadow-2xl ${
                isComplete
                  ? 'bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 border-white ring-4 ring-amber-400/40 scale-110'
                  : 'bg-slate-900/90 text-white border-slate-700 backdrop-blur-md'
              }`}
            >
              <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-900">
                삼권분립의 본질
              </div>
              <div className="text-xs sm:text-base font-black tracking-tight mt-0.5">
                {isComplete ? '✨ 견제와 균형 완성!' : '견제와 균형 (Checks & Balances)'}
              </div>
              <div className="text-[9px] sm:text-[11px] font-medium opacity-80 mt-0.5 hidden sm:block">
                어느 한 기관도 독재하지 못하도록 통제
              </div>
            </div>
          </div>
        </div>

        {/* Quick Check Selection Pills */}
        <div className="w-full flex items-center justify-between gap-1.5 pt-4 border-t border-slate-800 flex-wrap">
          {POWER_CHECKS.map((c, idx) => {
            const isSolved = solvedChecks.includes(c.id);
            const isCurrent = activeCheckId === idx + 1;
            return (
              <button
                key={c.id}
                onClick={() => handleQuickJump(idx + 1)}
                className={`px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300/40 shadow-md'
                    : isSolved
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span>#{idx + 1}</span>
                <span className="hidden md:inline">{c.fromName}➔{c.toName}</span>
                {isSolved && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Case Inspector Zone */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-500 text-slate-950 rounded-lg text-xs font-black">
              화살표 #{activeCheckId}
            </span>
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              {activeCheck.fromName} ➔ {activeCheck.toName} 견제 사건
            </span>
          </div>
          <span className="text-xs font-bold text-slate-700">
            {activeCheck.badge}
          </span>
        </div>

        {/* Real Scenario Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <span className="text-[11px] font-black text-indigo-600 uppercase">
            실제 상황 시나리오
          </span>
          <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            {activeCheck.situation}
          </p>
        </div>

        {/* Question & Choices */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-black text-slate-900">
            {activeCheck.question}
          </h3>

          <div className="grid grid-cols-1 gap-2.5">
            {activeCheck.options.map((opt) => {
              const isSelected = userSelection === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/90 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                    <span>{opt.label}</span>
                    {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {!isAnswered ? (
          <div className="flex justify-end pt-1">
            <button
              onClick={handleVerify}
              disabled={!userSelection}
              className={`px-7 py-3 rounded-2xl font-black text-sm transition-all shadow-sm flex items-center gap-1.5 ${
                userSelection
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer active:scale-95 shadow-indigo-200'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>견제 권한 확인 및 화살표 연결</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-emerald-950 font-black text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>견제 화살표 #{activeCheckId} 연결 성공!</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-600 text-white font-black text-xs">
                정식 권한: {activeCheck.formalTerm}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {activeCheck.easyExplanation}
            </p>

            <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-slate-900 font-bold">
              💡 기억 공식: {activeCheck.mnemonic}
            </div>

            <div className="flex justify-end pt-1">
              <button
                onClick={handleNextCheck}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <span>다음 견제 사건 확인 ({activeCheckId < 6 ? `${activeCheckId + 1}/6` : '완료'})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
