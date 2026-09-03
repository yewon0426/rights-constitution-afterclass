import React, { useState, useEffect } from 'react';
import { Landmark, Train, Sparkles, Scale, CheckCircle2, ChevronRight, BookOpen, AlertCircle, ArrowRight } from 'lucide-react';
import { COURT_PATHWAYS } from '../data/curriculum';

interface MetroStation {
  name: string;
  role: string;
  isTerminal?: boolean;
}

const LINE_STATIONS: Record<number, MetroStation[]> = {
  1: [
    { name: '시민 재판 진행역', role: '일반 법원에서 민사/형사 재판 진행 중' },
    { name: '판사 의심역', role: '담당 판사가 적용 법률의 위헌성 의심' },
    { name: '제청 결정역', role: '법원이 헌재에 위헌법률심판 제청' },
    { name: '헌법재판소역 (종착)', role: '위헌 결정 시 법률 효력 즉시 상실', isTerminal: true },
  ],
  2: [
    { name: '기본권 침해역', role: '국가의 공권력 행사/불행사로 기본권 침해' },
    { name: '타 구제절차역', role: '다른 법적 구제 절차를 모두 거침 (보충성 원칙)' },
    { name: '국민 직접 청구역', role: '국민 개인이 변호사를 통해 직접 헌재 청구' },
    { name: '헌법재판소역 (종착)', role: '위헌 확인 및 기본권 즉시 구제', isTerminal: true },
  ],
  3: [
    { name: '위헌 제청 신청역', role: '재판 당사자가 법원에 위헌제청을 신청' },
    { name: '법원 기각역', role: '법원이 "합헌이다"라며 신청을 거부(기각)' },
    { name: '제68조 2항 직행역', role: '기각 결정 30일 이내에 국민이 헌재로 직행' },
    { name: '헌법재판소역 (종착)', role: '헌재가 직접 법률 위헌 여부 최종 심사', isTerminal: true },
  ],
};

interface MetroRouteRemedyProps {
  currentPathwayIndex?: number;
  onPathwayChange?: (idx: number) => void;
}

export const MetroRouteRemedy: React.FC<MetroRouteRemedyProps> = ({
  currentPathwayIndex = 0,
  onPathwayChange,
}) => {
  const [activeLine, setActiveLine] = useState<number>(currentPathwayIndex + 1);
  const [selectedStation, setSelectedStation] = useState<number | null>(null);

  useEffect(() => {
    const targetLine = Math.min(Math.max(currentPathwayIndex + 1, 1), 3);
    setActiveLine(targetLine);
    setSelectedStation(null);
  }, [currentPathwayIndex]);

  const currentPathway = COURT_PATHWAYS.find((p) => p.number === activeLine) || COURT_PATHWAYS[0];
  const stations = LINE_STATIONS[activeLine] || LINE_STATIONS[1];

  const handleSelectLine = (lineNum: number) => {
    setActiveLine(lineNum);
    setSelectedStation(null);
    if (onPathwayChange) {
      onPathwayChange(lineNum - 1);
    }
  };

  const handleNextLine = () => {
    if (activeLine < 3) {
      handleSelectLine(activeLine + 1);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-1 font-mono">
            <Train className="w-3.5 h-3.5" />
            <span>헌법재판소 종착 3대 노선도</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            “헌법재판소로 가는 3개의 권리구제 노선”
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            국민의 기본권을 지키기 위해 헌법재판소로 향하는 3가지 구제 경로와 실제 판례를 탐색해 보세요.
          </p>
        </div>

        <span className="text-xs font-mono font-bold text-amber-300 bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/30">
          CONSTITUTIONAL METRO MAP
        </span>
      </div>

      {/* Metro Line Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Line 1 */}
        <button
          onClick={() => handleSelectLine(1)}
          className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
            activeLine === 1
              ? 'border-blue-500 bg-blue-950 text-white ring-2 ring-blue-400/30 shadow-lg'
              : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
              1호선
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm">위헌법률심판</div>
              <div className="text-[10px] text-blue-300">법원 ➔ 헌법재판소</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-blue-400" />
        </button>

        {/* Line 2 */}
        <button
          onClick={() => handleSelectLine(2)}
          className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
            activeLine === 2
              ? 'border-emerald-500 bg-emerald-950 text-white ring-2 ring-emerald-400/30 shadow-lg'
              : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
              2호선
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm">권리구제형 헌법소원</div>
              <div className="text-[10px] text-emerald-300">국민 직접 ➔ 헌재 (제68조 1항)</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-emerald-400" />
        </button>

        {/* Line 3 */}
        <button
          onClick={() => handleSelectLine(3)}
          className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
            activeLine === 3
              ? 'border-amber-500 bg-amber-950 text-white ring-2 ring-amber-400/30 shadow-lg'
              : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0">
              3호선
            </div>
            <div>
              <div className="font-extrabold text-xs sm:text-sm">위헌심사형 헌법소원</div>
              <div className="text-[10px] text-amber-300">법원 기각 시 ➔ 헌재 (제68조 2항)</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-amber-400" />
        </button>
      </div>

      {/* Active Metro Line Station Route Visualizer */}
      <div className="bg-slate-950 rounded-3xl border-2 border-slate-800 p-6 sm:p-8 text-white shadow-2xl space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-lg text-xs font-black text-white ${
                activeLine === 1
                  ? 'bg-blue-600'
                  : activeLine === 2
                  ? 'bg-emerald-600'
                  : 'bg-amber-600'
              }`}
            >
              {activeLine}호선
            </span>
            <h3 className="text-base sm:text-lg font-black text-white">
              {currentPathway.formalTerm}
            </h3>
          </div>
          <span className="text-xs text-amber-300 font-mono">
            {currentPathway.studentMnemonic}
          </span>
        </div>

        {/* Metro Track with Stations */}
        <div className="relative py-6">
          {/* Stations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative z-10">
            {stations.map((st, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedStation(idx)}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                  selectedStation === idx
                    ? 'border-white bg-slate-900 ring-2 ring-white/30 shadow-xl'
                    : 'border-slate-800 bg-slate-900/90 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-slate-800 border-2 border-white/40 text-[11px] font-black font-mono flex items-center justify-center text-white">
                    0{idx + 1}
                  </span>
                  {st.isTerminal && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
                      종착역
                    </span>
                  )}
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">
                    {st.name}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {st.role}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Real Landmark Precedent Case Dossier */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-black uppercase text-amber-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              {currentPathway.realCase.tag}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              판례 분석
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-black text-white">
            {currentPathway.realCase.title}
          </h4>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {currentPathway.realCase.description}
          </p>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>기억 공식: {currentPathway.studentMnemonic}</span>
          </div>

          <div className="flex justify-end pt-2">
            {activeLine < 3 ? (
              <button
                onClick={handleNextLine}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>다음 구제 노선 확인 ({activeLine + 1}호선)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>3개 노선 학습 완료! 하단 [다음] 버튼을 눌러 FINAL CASE로 이동하세요.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

