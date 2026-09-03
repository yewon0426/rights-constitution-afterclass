import React, { useState, useEffect } from 'react';
import { Landmark, Vote, Scale, Users, Shield, Sparkles, CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface PillarItem {
  id: number;
  title: string;
  sub: string;
  icon: string;
  article: string;
  coreDesc: string;
  examPoint: string;
  color: string;
}

const PILLARS: PillarItem[] = [
  {
    id: 1,
    title: '국민주권주의',
    sub: '국가의 주인은 국민',
    icon: '👑',
    article: '헌법 제1조 제2항',
    coreDesc: '국가의 모든 권력은 오직 국민으로부터 나오며, 주권자인 국민의 기본권을 침해하는 권력은 정당성을 잃습니다.',
    examPoint: '모든 국가기관(국회, 정부, 법원, 헌재)의 권한은 주권자인 국민의 위임에 기초함.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 2,
    title: '실질적 법치주의',
    sub: '법의 내용까지 정의로워야 함',
    icon: '⚖️',
    article: '헌법 제37조 제2항',
    coreDesc: '단순히 절차에 맞게 만든 ‘형식적 법률’이 아니라, 법률의 목적과 내용까지 기본권을 침해하지 않고 정의로워야 진정한 법치주의입니다.',
    examPoint: '형식적 법치주의(악법도 법이다, 히틀러 수권법)를 극복하고 ‘위헌법률심사’를 도입한 핵심 배경!',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 3,
    title: '민주선거 4대 원칙',
    sub: '보통 · 평등 · 직접 · 비밀',
    icon: '🗳️',
    article: '헌법 제41조 / 제67조',
    coreDesc: '모든 성인(보통), 1인 1표 동일 가치(평등), 대리인 없이 본인이(직접), 누구를 찍었는지 비공개(비밀)로 대표를 선출합니다.',
    examPoint: '선거구 인구 편차 2:1 초과 시 ‘평등선거 원칙 위반’으로 헌재 헌법불합치 결정!',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    id: 4,
    title: '복수정당제 & 권력분립',
    sub: '독재 방지와 견제와 균형',
    icon: '🏛️',
    article: '헌법 제8조 / 삼권분립',
    coreDesc: '여러 정당의 자유로운 설립과 활동을 보장하고, 국가권력을 입법·사법·행정으로 분산하여 서로를 견제하게 합니다.',
    examPoint: '특정 1개 정당의 영구 집권을 막고, 정당 해산은 오직 ‘헌법재판소’의 엄격한 심판으로만 가능.',
    color: 'from-sky-500 to-sky-600',
  },
];

interface ConstitutionalPillarsProps {
  currentPillarIndex?: number;
  onPillarChange?: (idx: number) => void;
}

export const ConstitutionalPillars: React.FC<ConstitutionalPillarsProps> = ({
  currentPillarIndex = 0,
  onPillarChange,
}) => {
  const [activePillar, setActivePillar] = useState<number>(currentPillarIndex + 1);
  const [showFormalVsSubstantive, setShowFormalVsSubstantive] = useState<boolean>(false);

  useEffect(() => {
    if (currentPillarIndex !== undefined) {
      setActivePillar(Math.min(Math.max(currentPillarIndex + 1, 1), 4));
    }
  }, [currentPillarIndex]);

  const handleSelectPillar = (id: number) => {
    setActivePillar(id);
    if (onPillarChange) {
      onPillarChange(id - 1);
    }
  };

  const handleNextPillar = () => {
    if (activePillar < 4) {
      handleSelectPillar(activePillar + 1);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-1 font-mono">
            <Shield className="w-3.5 h-3.5" />
            <span>기본권 보장의 4대 헌법적 기둥</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            “인권을 굳건히 지키는 4대 제도적 장치”
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            헌법이 독재를 막고 국민의 자유를 지키기 위해 마련한 4대 핵심 기둥을 확인해 보세요.
          </p>
        </div>

        <button
          onClick={() => setShowFormalVsSubstantive((prev) => !prev)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-amber-300 transition-all flex items-center gap-1.5 cursor-pointer self-start sm:self-auto border border-slate-700"
        >
          <span>형식적 vs 실질적 법치주의</span>
          {showFormalVsSubstantive ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expandable Comparison: 형식적 vs 실질적 법치주의 */}
      {showFormalVsSubstantive && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 bg-rose-600 text-white font-bold text-xs rounded">
                형식적 법치주의 (과거)
              </span>
              <span className="text-xs text-rose-800 font-bold">합법적 독재의 위험</span>
            </div>
            <p className="text-xs text-slate-800 leading-relaxed">
              “절차만 맞으면 어떤 악법이라도 법이므로 무조건 따라야 한다.”<br />
              👉 <strong>결과:</strong> 나치 히틀러의 수권법처럼 합법을 가장한 국민 학살과 독재 초래
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 bg-emerald-600 text-white font-bold text-xs rounded">
                실질적 법치주의 (현대 헌법)
              </span>
              <span className="text-xs text-emerald-800 font-bold">내용의 정당성 보장</span>
            </div>
            <p className="text-xs text-slate-800 leading-relaxed">
              “절차뿐만 아니라 <strong>법률의 내용과 목적도 인권과 정의에 부합</strong>해야 한다.”<br />
              👉 <strong>제도:</strong> 헌법재판소의 위헌법률심판으로 부당한 법률을 무효화
            </p>
          </div>
        </div>
      )}

      {/* 4 Pillars Architecture View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PILLARS.map((p) => {
          const isSelected = activePillar === p.id;
          return (
            <button
              key={p.id}
              onClick={() => handleSelectPillar(p.id)}
              className={`p-5 rounded-3xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'border-slate-900 bg-slate-900 text-white shadow-xl -translate-y-1'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md text-slate-900'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{p.icon}</span>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-slate-800 text-amber-300'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    기둥 0{p.id}
                  </span>
                </div>

                <div>
                  <h3 className="font-black text-base sm:text-lg">
                    {p.title}
                  </h3>
                  <div
                    className={`text-xs font-semibold ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {p.sub}
                  </div>
                </div>

                <div
                  className={`text-[11px] font-mono font-bold ${
                    isSelected ? 'text-indigo-300' : 'text-indigo-600'
                  }`}
                >
                  {p.article}
                </div>
              </div>

              <div
                className={`pt-3 border-t text-xs leading-relaxed ${
                  isSelected
                    ? 'border-slate-800 text-slate-300'
                    : 'border-slate-100 text-slate-600'
                }`}
              >
                {p.coreDesc}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Deep Dive Card */}
      {(() => {
        const selected = PILLARS.find((p) => p.id === activePillar) || PILLARS[0];
        return (
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{selected.icon}</span>
                <h4 className="text-base sm:text-lg font-black text-slate-900">
                  {selected.title} 심층 분석
                </h4>
              </div>
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                {selected.article}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {selected.coreDesc}
            </p>

            <div className="p-3.5 bg-white rounded-2xl border border-slate-200 text-xs space-y-1">
              <span className="text-[11px] font-black text-amber-700 uppercase">
                💡 수능 및 통합사회 내신 핵심 출제 포인트
              </span>
              <p className="text-slate-900 font-bold">
                {selected.examPoint}
              </p>
            </div>

            <div className="flex justify-end pt-2">
              {activePillar < 4 ? (
                <button
                  onClick={handleNextPillar}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <span>다음 헌법 기둥 확인 (0{activePillar + 1}번)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>4대 기둥 학습 완료! 하단 [다음] 버튼을 눌러 헌법재판소 노선도로 이동하세요.</span>
                </div>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
};
