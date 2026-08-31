import React, { useState } from 'react';
import { POWER_CHECKS } from '../data/curriculum';
import { PowerCheckItem } from '../types';
import { Landmark, Building2, Gavel, ShieldCheck, ArrowRight, Eye, Sparkles, Scale, Info, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface SeparationOfPowersProps {
  activeCheckIndex?: number;
  unlockedCheckCount?: number;
  onSelectCheck?: (index: number) => void;
  showAllInitially?: boolean;
}

export const SeparationOfPowers: React.FC<SeparationOfPowersProps> = ({
  activeCheckIndex = 0,
  unlockedCheckCount = 6,
  onSelectCheck,
  showAllInitially = false,
}) => {
  const [selectedArrowId, setSelectedArrowId] = useState<string | null>(
    POWER_CHECKS[activeCheckIndex]?.id || POWER_CHECKS[0].id
  );
  const [showAllOverride, setShowAllOverride] = useState<boolean>(showAllInitially);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const isArrowVisible = (index: number) => {
    if (showAllOverride) return true;
    return index < unlockedCheckCount;
  };

  const allCompleted = showAllOverride || unlockedCheckCount >= 6;

  const selectedItem: PowerCheckItem =
    POWER_CHECKS.find((p) => p.id === selectedArrowId) || POWER_CHECKS[0];

  const handleArrowClick = (check: PowerCheckItem, index: number) => {
    setSelectedArrowId(check.id);
    if (onSelectCheck) {
      onSelectCheck(index);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-6">
      {/* Top Title & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 mb-1 border border-indigo-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>삼권분립 상호 견제 지도</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            “왜 하나의 기관에 힘을 다 주지 않을까?”
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
            국회·정부·법원 3대 국가기관이 서로를 감시하고 견제하는 6대 화살표를 확인하세요.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            id="btn-toggle-all-arrows"
            onClick={() => setShowAllOverride((prev) => !prev)}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer ${
              showAllOverride
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>{showAllOverride ? '단계별 보기' : '전체 견제 관계 보기'}</span>
          </button>
        </div>
      </div>

      {/* Main Layout: Interactive Visual Triangle (Left) & Active Inspector Panel (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Map Canvas */}
        <div className="lg:col-span-7 relative bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-md min-h-[480px] flex flex-col justify-between overflow-hidden select-none">
          {/* Subtle Grid Dots */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* SVG Overlay for curved check arrows */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 600 480"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker id="arrow-amber" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 1 1 L 7 4 L 1 7 Z" fill="#fbbf24" />
              </marker>
              <marker id="arrow-indigo" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 1 1 L 7 4 L 1 7 Z" fill="#818cf8" />
              </marker>
              <marker id="arrow-sky" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 1 1 L 7 4 L 1 7 Z" fill="#38bdf8" />
              </marker>
              <marker id="arrow-emerald" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 1 1 L 7 4 L 1 7 Z" fill="#34d399" />
              </marker>
              <marker id="arrow-rose" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 1 1 L 7 4 L 1 7 Z" fill="#fb7185" />
              </marker>
              <marker id="arrow-violet" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 1 1 L 7 4 L 1 7 Z" fill="#c084fc" />
              </marker>
            </defs>

            {/* ① 국회 → 정부 (Curve Left-Outer) */}
            {isArrowVisible(0) && (
              <path
                d="M 230 95 Q 140 180 130 330"
                fill="none"
                stroke={selectedArrowId === 'check-1' ? '#fbbf24' : '#818cf8'}
                strokeWidth={selectedArrowId === 'check-1' ? '4' : '2.5'}
                markerEnd="url(#arrow-amber)"
                className="transition-all duration-300 pointer-events-auto cursor-pointer hover:stroke-amber-300"
                onClick={() => handleArrowClick(POWER_CHECKS[0], 0)}
              />
            )}

            {/* ② 정부 → 국회 (Curve Left-Inner) */}
            {isArrowVisible(1) && (
              <path
                d="M 175 340 Q 200 210 250 110"
                fill="none"
                stroke={selectedArrowId === 'check-2' ? '#fbbf24' : '#fb923c'}
                strokeWidth={selectedArrowId === 'check-2' ? '4' : '2.5'}
                markerEnd="url(#arrow-amber)"
                className="transition-all duration-300 pointer-events-auto cursor-pointer hover:stroke-amber-300"
                onClick={() => handleArrowClick(POWER_CHECKS[1], 1)}
              />
            )}

            {/* ③ 국회 → 법원 (Curve Right-Outer) */}
            {isArrowVisible(2) && (
              <path
                d="M 370 95 Q 460 180 470 330"
                fill="none"
                stroke={selectedArrowId === 'check-3' ? '#fbbf24' : '#818cf8'}
                strokeWidth={selectedArrowId === 'check-3' ? '4' : '2.5'}
                markerEnd="url(#arrow-amber)"
                className="transition-all duration-300 pointer-events-auto cursor-pointer hover:stroke-amber-300"
                onClick={() => handleArrowClick(POWER_CHECKS[2], 2)}
              />
            )}

            {/* ④ 법원 → 국회 (Curve Right-Inner) */}
            {isArrowVisible(3) && (
              <path
                d="M 425 340 Q 400 210 350 110"
                fill="none"
                stroke={selectedArrowId === 'check-4' ? '#fbbf24' : '#38bdf8'}
                strokeWidth={selectedArrowId === 'check-4' ? '4' : '2.5'}
                markerEnd="url(#arrow-amber)"
                className="transition-all duration-300 pointer-events-auto cursor-pointer hover:stroke-amber-300"
                onClick={() => handleArrowClick(POWER_CHECKS[3], 3)}
              />
            )}

            {/* ⑤ 정부 → 법원 (Bottom Curve Lower) */}
            {isArrowVisible(4) && (
              <path
                d="M 210 430 Q 300 465 390 430"
                fill="none"
                stroke={selectedArrowId === 'check-5' ? '#fbbf24' : '#fb923c'}
                strokeWidth={selectedArrowId === 'check-5' ? '4' : '2.5'}
                markerEnd="url(#arrow-amber)"
                className="transition-all duration-300 pointer-events-auto cursor-pointer hover:stroke-amber-300"
                onClick={() => handleArrowClick(POWER_CHECKS[4], 4)}
              />
            )}

            {/* ⑥ 법원 → 정부 (Bottom Curve Upper) */}
            {isArrowVisible(5) && (
              <path
                d="M 390 395 Q 300 365 210 395"
                fill="none"
                stroke={selectedArrowId === 'check-6' ? '#fbbf24' : '#38bdf8'}
                strokeWidth={selectedArrowId === 'check-6' ? '4' : '2.5'}
                markerEnd="url(#arrow-amber)"
                className="transition-all duration-300 pointer-events-auto cursor-pointer hover:stroke-amber-300"
                onClick={() => handleArrowClick(POWER_CHECKS[5], 5)}
              />
            )}
          </svg>

          {/* Node 1: TOP - 국회 (Purple/Indigo Theme) */}
          <div className="flex justify-center relative z-20">
            <div className="p-4 rounded-2xl bg-indigo-950/90 border-2 border-indigo-500/80 shadow-lg text-center w-52 text-white backdrop-blur-xs">
              <div className="flex items-center justify-center gap-1.5 text-indigo-300 text-xs font-black mb-1">
                <Landmark className="w-4 h-4 text-indigo-400" /> 국회 (입법부)
              </div>
              <div className="text-base sm:text-lg font-black text-white">
                “법을 만든다”
              </div>
              <div className="text-[11px] text-indigo-300/80 mt-1 font-medium">
                국민의 대표 기관 · 법률 제정
              </div>
            </div>
          </div>

          {/* Center Badge: 쉬운 말 "서로 보고 있다" ➔ 정식 개념 [견제와 균형] */}
          <div className="my-auto flex flex-col items-center justify-center relative z-20 py-2">
            <div className="px-4 py-2.5 rounded-2xl bg-slate-800/95 border-2 border-amber-400/90 text-amber-300 shadow-md text-center backdrop-blur-xs max-w-xs">
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <Scale className="w-4 h-4 text-amber-400" />
                <span className="font-extrabold text-xs text-amber-200">
                  “서로를 보고 있다”
                </span>
              </div>
              <div className="text-xs sm:text-sm font-black text-white tracking-wide">
                [견제와 균형 (Checks & Balances)]
              </div>
            </div>
          </div>

          {/* Bottom Nodes: Left = 정부 (Orange) / Right = 법원 (Blue) */}
          <div className="flex justify-between items-end relative z-20 pt-2">
            {/* Left Node: 정부 (행정부) */}
            <div className="p-4 rounded-2xl bg-amber-950/90 border-2 border-amber-500/80 shadow-lg text-center w-48 text-white backdrop-blur-xs">
              <div className="flex items-center justify-center gap-1.5 text-amber-300 text-xs font-black mb-1">
                <Building2 className="w-4 h-4 text-amber-400" /> 정부 (행정부)
              </div>
              <div className="text-base sm:text-lg font-black text-white">
                “법을 실행한다”
              </div>
              <div className="text-[11px] text-amber-300/80 mt-1 font-medium">
                대통령 · 국무총리 · 정책 집행
              </div>
            </div>

            {/* Right Node: 법원 (사법부) */}
            <div className="p-4 rounded-2xl bg-sky-950/90 border-2 border-sky-500/80 shadow-lg text-center w-48 text-white backdrop-blur-xs">
              <div className="flex items-center justify-center gap-1.5 text-sky-300 text-xs font-black mb-1">
                <Gavel className="w-4 h-4 text-sky-400" /> 법원 (사법부)
              </div>
              <div className="text-base sm:text-lg font-black text-white">
                “재판한다”
              </div>
              <div className="text-[11px] text-sky-300/80 mt-1 font-medium">
                대법원 · 각급 법원 · 법 적용
              </div>
            </div>
          </div>

          {/* Constitutional Court Independent Box */}
          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 relative z-20">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>독립 최고 사법기관:</span>
              <strong className="text-rose-300">헌법재판소 (위헌 여부 최종 심판)</strong>
            </div>
            <span className="text-[11px] text-slate-700 hidden sm:inline">
              * 3대 기관 외부에서 헌법 수호
            </span>
          </div>
        </div>

        {/* Right Side: Interactive Arrow Selector & Selected Detail Inspector */}
        <div className="lg:col-span-5 space-y-4">
          {/* Arrow List Buttons */}
          <div className="space-y-1.5">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center justify-between">
              <span>6대 상호 견제 화살표</span>
              <span className="text-indigo-600 font-bold">클릭하여 세부 확인</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {POWER_CHECKS.map((check, idx) => {
                const isSelected = selectedArrowId === check.id;
                const isVisible = isArrowVisible(idx);

                return (
                  <button
                    key={check.id}
                    id={`btn-power-check-${check.id}`}
                    onClick={() => handleArrowClick(check, idx)}
                    className={`text-left p-3 rounded-2xl border transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-500/20 shadow-xs'
                        : isVisible
                        ? 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                        : 'border-slate-200/60 bg-slate-50/40 text-slate-700 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 truncate">
                          <span>{check.fromName.split('(')[0]}</span>
                          <ArrowRight className="w-3 h-3 text-slate-700 shrink-0" />
                          <span>{check.toName.split('(')[0]}</span>
                        </div>
                        <div className="text-[11px] text-indigo-700 font-bold truncate">
                          {check.badge}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Detail Card */}
          <div className="p-5 rounded-3xl bg-white border-2 border-indigo-200 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-indigo-600 text-white rounded-lg text-xs font-black">
                  {selectedItem.fromName.split('(')[0]} ➔ {selectedItem.toName.split('(')[0]}
                </span>
                <span className="text-xs font-extrabold text-indigo-950">
                  {selectedItem.badge}
                </span>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-700">대표 뉴스 & 상황</div>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5 leading-snug">
                “{selectedItem.situation}”
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-100">
              <div className="text-xs font-bold text-indigo-800 flex items-center gap-1 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>쉬운 말 설명</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {selectedItem.easyExplanation}
              </p>
            </div>

            {/* Collapsible 'Learn more' */}
            {selectedItem.detailItems && selectedItem.detailItems.length > 0 && (
              <div>
                <button
                  onClick={() => setShowDetails((prev) => !prev)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                >
                  <span>{showDetails ? '접기' : '왜 그런지 보기 (헌법상 주요 수단)'}</span>
                  {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {showDetails && (
                  <ul className="mt-2 space-y-1 text-xs text-slate-700 pl-4 list-disc font-medium animate-fadeIn">
                    {selectedItem.detailItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs font-bold">
              💡 기억 꿀팁: “{selectedItem.mnemonic}”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
