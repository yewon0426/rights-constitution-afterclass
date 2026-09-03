import React, { useState, useEffect } from 'react';
import { Shield, Lock, Unlock, CheckCircle2, XCircle, ArrowRight, Sparkles, Scale, AlertTriangle } from 'lucide-react';

interface GateSystemProps {
  currentGateIndex?: number;
  onGateChange?: (newIndex: number) => void;
  onAllGatesPassed?: () => void;
}

export const GateSystem: React.FC<GateSystemProps> = ({
  currentGateIndex = 0,
  onGateChange,
  onAllGatesPassed,
}) => {
  const [activeGate, setActiveGate] = useState<number>(currentGateIndex + 1);
  const [gate1Status, setGate1Status] = useState<'locked' | 'unlocked'>('locked');
  const [gate2Status, setGate2Status] = useState<'locked' | 'unlocked'>('locked');
  const [gate3Status, setGate3Status] = useState<'locked' | 'unlocked'>('locked');

  // Selected Answers for each Gate
  const [gate1Answer, setGate1Answer] = useState<string | null>(null);
  const [gate2Answer, setGate2Answer] = useState<string | null>(null);
  const [gate3Answer, setGate3Answer] = useState<string | null>(null);

  const [gate1Checked, setGate1Checked] = useState<boolean>(false);
  const [gate2Checked, setGate2Checked] = useState<boolean>(false);
  const [gate3Checked, setGate3Checked] = useState<boolean>(false);

  useEffect(() => {
    if (currentGateIndex !== undefined) {
      if (currentGateIndex === 0) {
        setActiveGate(1);
      } else if (currentGateIndex === 1) {
        setActiveGate(2);
        setGate1Status('unlocked');
      } else if (currentGateIndex === 2) {
        setActiveGate(3);
        setGate1Status('unlocked');
        setGate2Status('unlocked');
      } else if (currentGateIndex >= 3) {
        setActiveGate(4);
        setGate1Status('unlocked');
        setGate2Status('unlocked');
        setGate3Status('unlocked');
      }
    }
  }, [currentGateIndex]);

  const handleSwitchGate = (gateNum: number) => {
    setActiveGate(gateNum);
    if (onGateChange) {
      onGateChange(Math.min(gateNum - 1, 3));
    }
  };

  const handleGate1Verify = () => {
    if (!gate1Answer) return;
    setGate1Checked(true);
    if (gate1Answer === 'opt-3purposes') {
      setGate1Status('unlocked');
    }
  };

  const handleGate2Verify = () => {
    if (!gate2Answer) return;
    setGate2Checked(true);
    if (gate2Answer === 'opt-law') {
      setGate2Status('unlocked');
    }
  };

  const handleGate3Verify = () => {
    if (!gate3Answer) return;
    setGate3Checked(true);
    if (gate3Answer === 'opt-no-essential') {
      setGate3Status('unlocked');
      if (onAllGatesPassed) onAllGatesPassed();
    }
  };

  const allPassed = gate1Status === 'unlocked' && gate2Status === 'unlocked' && gate3Status === 'unlocked';

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Gate Pipeline Visual Bar */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-xl overflow-hidden relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span>헌법 제37조 제2항 관문 검문소</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              기본권 제한의 3대 GATE 통과 시스템
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              정부의 제한 정책이 국민의 자유를 침해하지 않으려면 3개의 헌법 관문을 통과해야 합니다.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400">통과 현황:</span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-amber-300 font-mono text-xs font-black border border-slate-700">
              {[gate1Status, gate2Status, gate3Status].filter((s) => s === 'unlocked').length} / 3 GATES
            </span>
          </div>
        </div>

        {/* 3 Gates Track & Policy Card Position */}
        <div className="py-6 relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4 relative z-10">
            {/* GATE 1 */}
            <button
              onClick={() => handleSwitchGate(1)}
              className={`p-3 sm:p-4 rounded-2xl border-2 transition-all text-left flex flex-col items-center sm:items-start justify-between gap-2 cursor-pointer ${
                activeGate === 1
                  ? 'border-amber-400 bg-amber-950/40 ring-2 ring-amber-400/20 shadow-lg'
                  : gate1Status === 'unlocked'
                  ? 'border-emerald-500/60 bg-emerald-950/20'
                  : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] font-black uppercase text-amber-400">GATE 01</span>
                {gate1Status === 'unlocked' ? (
                  <Unlock className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Lock className="w-4 h-4 text-slate-500" />
                )}
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-white text-center sm:text-left">
                목적 요건
              </div>
              <div className="text-[10px] text-slate-400 hidden sm:block">
                “왜 제한해?”
              </div>
              <span
                className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded ${
                  gate1Status === 'unlocked'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {gate1Status === 'unlocked' ? 'PASS (통과)' : '검문 대기'}
              </span>
            </button>

            {/* GATE 2 */}
            <button
              onClick={() => handleSwitchGate(2)}
              className={`p-3 sm:p-4 rounded-2xl border-2 transition-all text-left flex flex-col items-center sm:items-start justify-between gap-2 cursor-pointer ${
                activeGate === 2
                  ? 'border-sky-400 bg-sky-950/40 ring-2 ring-sky-400/20 shadow-lg'
                  : gate2Status === 'unlocked'
                  ? 'border-emerald-500/60 bg-emerald-950/20'
                  : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] font-black uppercase text-sky-400">GATE 02</span>
                {gate2Status === 'unlocked' ? (
                  <Unlock className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Lock className="w-4 h-4 text-slate-500" />
                )}
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-white text-center sm:text-left">
                형식 요건
              </div>
              <div className="text-[10px] text-slate-400 hidden sm:block">
                “무엇으로 제한해?”
              </div>
              <span
                className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded ${
                  gate2Status === 'unlocked'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {gate2Status === 'unlocked' ? 'PASS (통과)' : '검문 대기'}
              </span>
            </button>

            {/* GATE 3 */}
            <button
              onClick={() => handleSwitchGate(3)}
              className={`p-3 sm:p-4 rounded-2xl border-2 transition-all text-left flex flex-col items-center sm:items-start justify-between gap-2 cursor-pointer ${
                activeGate === 3
                  ? 'border-rose-400 bg-rose-950/40 ring-2 ring-rose-400/20 shadow-lg'
                  : gate3Status === 'unlocked'
                  ? 'border-emerald-500/60 bg-emerald-950/20'
                  : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] font-black uppercase text-rose-400">GATE 03</span>
                {gate3Status === 'unlocked' ? (
                  <Unlock className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Lock className="w-4 h-4 text-slate-500" />
                )}
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-white text-center sm:text-left">
                한계 요건
              </div>
              <div className="text-[10px] text-slate-400 hidden sm:block">
                “어디까지 제한해?”
              </div>
              <span
                className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded ${
                  gate3Status === 'unlocked'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {gate3Status === 'unlocked' ? 'PASS (통과)' : '검문 대기'}
              </span>
            </button>
          </div>
        </div>

        {/* Traveling Policy Card Indicator */}
        <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-slate-300">현재 검문 대상:</span>
            <strong className="text-white">“축제 안전을 위한 전국 집회 전면 금지안”</strong>
          </div>
          <div className="text-amber-300 font-bold text-[11px]">
            현재 위치 ➔ [GATE 0{activeGate}] 앞 대기 중
          </div>
        </div>
      </div>

      {/* Active Gate Inspection Zone */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        {/* GATE 1 CONTENT */}
        {activeGate === 1 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-black">
                  GATE 1
                </span>
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                  목적 요건 검문: “왜 제한하는가?”
                </span>
              </div>
              <span className="text-xs font-bold text-amber-700">목적의 헌법상 정당성</span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                국가가 국민의 기본권을 제한할 수 있는 헌법상 정당한 목적은 무엇일까요?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
                헌법 제37조 제2항에 명시된 엄격한 목적 기준을 골라 게이트를 통과시키세요.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  id: 'opt-3purposes',
                  title: '국가안전보장, 질서유지, 공공복리 (안·질·공)',
                  sub: '헌법 제37조 제2항에 명시된 3대 정당한 목적',
                  isCorrect: true,
                },
                {
                  id: 'opt-gov-convenience',
                  title: '정부의 행정 편의나 단속의 편리함',
                  sub: '공무원이 단속하기 편하다는 행정적 편의주의',
                  isCorrect: false,
                },
                {
                  id: 'opt-majority',
                  title: '특정 다수 집단의 일방적인 찬성',
                  sub: '여론조사 단순 다수결만으로 소수의 기본권 박탈',
                  isCorrect: false,
                },
              ].map((opt) => {
                const isSelected = gate1Answer === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      if (!gate1Checked) setGate1Answer(opt.id);
                    }}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-400/20 shadow-xs'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base">
                      <span>{opt.title}</span>
                      {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />}
                    </div>
                    <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
                      {opt.sub}
                    </p>
                  </button>
                );
              })}
            </div>

            {!gate1Checked ? (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleGate1Verify}
                  disabled={!gate1Answer}
                  className={`px-7 py-3 rounded-2xl font-black text-sm transition-all shadow-sm flex items-center gap-1.5 ${
                    gate1Answer
                      ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 cursor-pointer active:scale-95 shadow-amber-200'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>GATE 1 검문 승인</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-950 font-black text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>GATE 1 OPEN: 목적 요건 통과! (안·질·공)</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700">헌법 제37조 제2항</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  국가가 국민의 기본권을 제한할 때는 오직 <strong>국가안전보장, 질서유지, 공공복리</strong>라는 정당한 목적이 있을 때만 가능합니다.
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-amber-900 font-bold bg-amber-100/80 px-3 py-1 rounded-lg">
                    💡 기억 공식: “왜 막아? ➔ 안·질·공!”
                  </span>
                  <button
                    onClick={() => handleSwitchGate(2)}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-all shadow-xs cursor-pointer flex items-center gap-1"
                  >
                    <span>다음 GATE 2로 이동</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* GATE 2 CONTENT */}
        {activeGate === 2 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-sky-500 text-white rounded-lg text-xs font-black">
                  GATE 2
                </span>
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                  형식 요건 검문: “무엇으로 제한하는가?”
                </span>
              </div>
              <span className="text-xs font-bold text-sky-700">법률유보의 원칙</span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                대통령이나 장관, 시장이 독단적으로 발표한 규칙만으로 기본권을 막을 수 있을까요?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
                국민의 자유를 제한하려면 어떤 형식적 근거가 필요한지 골라보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  id: 'opt-law',
                  title: '국민의 대표 기관인 국회가 만든 ‘법률’로써 제한해야 한다.',
                  sub: '의회유보의 원칙 · 법률유보의 원칙 (헌법상 의회의 핵심 권한)',
                  isCorrect: true,
                },
                {
                  id: 'opt-decree',
                  title: '정부(대통령·장관·시장)가 독단적으로 만든 훈령·명령만으로도 충분하다.',
                  sub: '행정부 마음대로 국민의 기본권을 제한 가능',
                  isCorrect: false,
                },
              ].map((opt) => {
                const isSelected = gate2Answer === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      if (!gate2Checked) setGate2Answer(opt.id);
                    }}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50/80 ring-2 ring-sky-400/20 shadow-xs'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base">
                      <span>{opt.title}</span>
                      {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />}
                    </div>
                    <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
                      {opt.sub}
                    </p>
                  </button>
                );
              })}
            </div>

            {!gate2Checked ? (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleGate2Verify}
                  disabled={!gate2Answer}
                  className={`px-7 py-3 rounded-2xl font-black text-sm transition-all shadow-sm flex items-center gap-1.5 ${
                    gate2Answer
                      ? 'bg-sky-600 text-white hover:bg-sky-700 cursor-pointer active:scale-95 shadow-sky-200'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>GATE 2 검문 승인</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-950 font-black text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>GATE 2 OPEN: 형식 요건 통과! (국회의 법률)</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700">법률유보원칙</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  기본권을 제한하려면 반드시 국민이 직접 뽑은 대표들이 토론하여 만든 <strong>국회의 ‘법률’</strong>에 근거해야 합니다. 행정부 마음대로 제한할 수 없습니다.
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-sky-900 font-bold bg-sky-100/80 px-3 py-1 rounded-lg">
                    💡 기억 공식: “무엇으로 막아? ➔ 오직 국회의 ‘법률’로!”
                  </span>
                  <button
                    onClick={() => handleSwitchGate(3)}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-all shadow-xs cursor-pointer flex items-center gap-1"
                  >
                    <span>다음 GATE 3으로 이동</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* GATE 3 CONTENT */}
        {activeGate === 3 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-rose-500 text-white rounded-lg text-xs font-black">
                  GATE 3
                </span>
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                  한계 요건 검문: “어디까지 제한할 수 있는가?”
                </span>
              </div>
              <span className="text-xs font-bold text-rose-700">본질적 내용 침해 금지</span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                국회가 법률로 정한다면, 기본권의 알맹이를 완전히 없애버려도 괜찮을까요?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
                국회의 법률이라도 절대 침해할 수 없는 헌법상 최후의 한계선을 골라보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  id: 'opt-no-essential',
                  title: '안 된다. 자유와 권리의 ‘본질적인 내용’은 결코 침해할 수 없다.',
                  sub: '아무리 법률이라도 권리의 알맹이를 없애면 위헌 (헌법 제37조 제2항 후단)',
                  isCorrect: true,
                },
                {
                  id: 'opt-cancel-all',
                  title: '국회가 법률로 정하기만 하면 기본권을 통째로 박탈해도 괜찮다.',
                  sub: '국회의 입법 권한에는 아무런 한계가 없다',
                  isCorrect: false,
                },
              ].map((opt) => {
                const isSelected = gate3Answer === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      if (!gate3Checked) setGate3Answer(opt.id);
                    }}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-rose-500 bg-rose-50/80 ring-2 ring-rose-400/20 shadow-xs'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base">
                      <span>{opt.title}</span>
                      {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />}
                    </div>
                    <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
                      {opt.sub}
                    </p>
                  </button>
                );
              })}
            </div>

            {!gate3Checked ? (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleGate3Verify}
                  disabled={!gate3Answer}
                  className={`px-7 py-3 rounded-2xl font-black text-sm transition-all shadow-sm flex items-center gap-1.5 ${
                    gate3Answer
                      ? 'bg-rose-600 text-white hover:bg-rose-700 cursor-pointer active:scale-95 shadow-rose-200'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>GATE 3 검문 승인</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-950 font-black text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>GATE 3 OPEN: 한계 요건 통과! (본질적 내용 침해 금지)</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700">헌법상 한계</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  국회가 법률을 제정하더라도 그 권리의 본질적인 알맹이(생명, 표현의 본질, 최소한의 인간다운 생활 등)를 없애거나 불가능하게 만들면 헌법에 위반됩니다.
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-amber-900 font-bold bg-amber-100/80 px-3 py-1 rounded-lg">
                    💡 기억 공식: “어디까지 막아? ➔ ‘본질적 내용’은 절대 손댈 수 없다!”
                  </span>
                  <button
                    onClick={() => handleSwitchGate(4)}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-all shadow-xs cursor-pointer flex items-center gap-1"
                  >
                    <span>3대 GATE 종합 조문 확인</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* When all 3 gates are passed: Complete Constitutional Master Article */}
      {allPassed && (
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 space-y-5 border border-indigo-500/50 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-black flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>3대 GATE 통과 완료 ➔ 헌법 제37조 제2항 조문 완성!</span>
            </span>
            <span className="text-xs text-indigo-300 font-mono font-bold">CONSTITUTION ART. 37 (2)</span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
              대한민국 헌법 제37조 제2항
            </h4>
            <p className="text-base sm:text-lg lg:text-xl font-black leading-relaxed">
              “국민의 모든 자유와 권리는{' '}
              <span className="text-amber-300 underline underline-offset-4 decoration-amber-400 decoration-2">
                국가안전보장·질서유지 또는 공공복리
              </span>
              (GATE 1)를 위하여 필요한 경우에 한하여{' '}
              <span className="text-sky-300 underline underline-offset-4 decoration-sky-400 decoration-2">
                법률로써
              </span>
              (GATE 2) 제한할 수 있으며, 제한하는 경우에도 자유와 권리의{' '}
              <span className="text-rose-300 underline underline-offset-4 decoration-rose-400 decoration-2">
                본질적인 내용을 침해할 수 없다
              </span>
              (GATE 3).”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-200 space-y-1">
              <span className="font-black text-amber-400 block">① 목적: 왜?</span>
              <p className="font-medium text-slate-200">안전보장 · 질서유지 · 공공복리</p>
            </div>
            <div className="p-3.5 rounded-xl bg-sky-950/60 border border-sky-500/40 text-sky-200 space-y-1">
              <span className="font-black text-sky-400 block">② 형식: 무엇으로?</span>
              <p className="font-medium text-slate-200">오직 국회의 ‘법률’로써</p>
            </div>
            <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 space-y-1">
              <span className="font-black text-rose-400 block">③ 한계: 어디까지?</span>
              <p className="font-medium text-slate-200">‘본질적 내용’ 침해 금지</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
