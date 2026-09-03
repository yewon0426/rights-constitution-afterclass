import React, { useState } from 'react';
import { Scan, ShieldAlert, CheckCircle2, XCircle, AlertTriangle, Play, Sparkles, Scale, RefreshCw, ArrowRight } from 'lucide-react';

interface ScanItem {
  id: number;
  name: string;
  question: string;
  result: 'pass' | 'fail';
  resultText: string;
  detail: string;
  mnemonic: string;
}

interface ConstitutionalScannerProps {
  initialScannedStep?: number;
  onNext?: () => void;
}

const SCAN_STEPS: ScanItem[] = [
  {
    id: 1,
    name: '목적의 정당성',
    question: '하려는 일 자체가 정당해? (축제 안전사고 예방)',
    result: 'pass',
    resultText: 'PASS (정당성 인정)',
    detail: '100만 명이 모이는 대규모 축제에서 압사사고를 예방하겠다는 국가의 입법 목적 자체는 충분히 정당합니다.',
    mnemonic: '1단계: 하려는 일 자체가 정당해? ➔ 목적의 정당성',
  },
  {
    id: 2,
    name: '수단의 적합성',
    question: '그 방법이 실제로 도움이 돼? (인파 밀집 방지 효과)',
    result: 'pass',
    resultText: 'PASS (유효성 인정)',
    detail: '집회를 금지하면 축제장 출입구의 혼잡을 줄여 안전사고를 예방하는 데 어느 정도 도움이 되므로 수단의 적합성은 인정됩니다.',
    mnemonic: '2단계: 그 방법이 실제로 도움이 돼? ➔ 수단의 적합성',
  },
  {
    id: 3,
    name: '침해의 최소성',
    question: '꼭 이렇게까지 다 막아야 해? (덜 해로운 대안이 없는가?)',
    result: 'fail',
    resultText: 'FAIL (위반: 과도한 전면 금지)',
    detail: '위험 지역만 시간·장소를 조율하지 않고, 축제와 10km 떨어진 평화적 소규모 피켓까지 일률 전면 금지한 것은 필요 이상으로 국민의 자유를 침해했습니다.',
    mnemonic: '3단계: 꼭 이렇게까지 다 막아야 해? ➔ 침해의 최소성',
  },
  {
    id: 4,
    name: '법익의 균형성',
    question: '얻는 것보다 잃는 게 너무 크지 않아? (공익 vs 사익 비교)',
    result: 'fail',
    resultText: 'FAIL (위반: 지나친 불균형)',
    detail: '한 지역 축제장의 안전이라는 공익에 비해, 전국 5,000만 국민 전체의 집회의 자유를 완전히 박탈하여 잃는 기본권의 손실이 너무 큽니다.',
    mnemonic: '4단계: 얻는 것보다 잃는 게 너무 크지 않아? ➔ 법익의 균형성',
  },
];

export const ConstitutionalScanner: React.FC<ConstitutionalScannerProps> = ({
  initialScannedStep = 0,
  onNext,
}) => {
  const [scannedStep, setScannedStep] = useState<number>(initialScannedStep);
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const handleScanNext = () => {
    if (scannedStep >= 4 || isScanning) return;
    setIsScanning(true);
    setTimeout(() => {
      setScannedStep((prev) => prev + 1);
      setIsScanning(false);
    }, 700);
  };

  const handleScanAll = () => {
    if (isScanning) return;
    setIsScanning(true);
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setScannedStep(current);
      if (current >= 4) {
        clearInterval(interval);
        setIsScanning(false);
      }
    }, 600);
  };

  const handleReset = () => {
    setScannedStep(0);
    setIsScanning(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HUD Constitutional Scanner Terminal */}
      <div className="bg-slate-950 text-white rounded-3xl border-2 border-indigo-500/50 shadow-2xl p-5 sm:p-7 space-y-6 relative overflow-hidden">
        {/* Subtle Cyber Grid Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#818cf8 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Top Header of Scanner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-1 font-mono">
              <Scan className="w-3.5 h-3.5" />
              <span>CONSTITUTIONAL SCANNER V4.0</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              과잉금지원칙 4단계 헌법 스캐너
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              헌법재판소가 법률이나 행정명령의 위헌 여부를 검사하는 4대 황금 기준을 직접 스캔해 보세요.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {scannedStep < 4 ? (
              <button
                onClick={handleScanNext}
                disabled={isScanning}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
              >
                <Play className="w-4 h-4" />
                <span>{isScanning ? '스캔 중...' : `SCAN 0${scannedStep + 1} 실행`}</span>
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>다시 스캔하기</span>
              </button>
            )}
          </div>
        </div>

        {/* Scanner Target Display */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
              TARGET SUBJECT
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white mt-1">
              “정부 긴급 행정명령: 전국 모든 야외 집회 및 시위 전면 금지 처분”
            </div>
          </div>
          <div className="font-mono text-xs text-slate-400 shrink-0">
            진행 상태: <strong className="text-amber-400">{scannedStep} / 4 검사 완료</strong>
          </div>
        </div>

        {/* Laser Scanner Active Animation Strip */}
        {isScanning && (
          <div className="relative h-2 w-full bg-slate-900 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-1/2 animate-[shimmer_1s_infinite]" />
          </div>
        )}

        {/* 4 Scan Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
          {SCAN_STEPS.map((step) => {
            const isScanned = scannedStep >= step.id;
            const isCurrentlyScanning = isScanning && scannedStep === step.id - 1;

            return (
              <div
                key={step.id}
                className={`p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden ${
                  isCurrentlyScanning
                    ? 'border-cyan-400 bg-cyan-950/40 ring-2 ring-cyan-400/30'
                    : isScanned
                    ? step.result === 'pass'
                      ? 'border-emerald-500/60 bg-emerald-950/20'
                      : 'border-rose-500/70 bg-rose-950/30'
                    : 'border-slate-800/80 bg-slate-900/40 opacity-60'
                }`}
              >
                {/* Header inside Scan Module */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-indigo-400">
                      STEP 0{step.id}
                    </span>
                    <span className="font-extrabold text-white text-sm">
                      {step.name}
                    </span>
                  </div>

                  {isScanned ? (
                    step.result === 'pass' ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-black font-mono flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> PASS
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[11px] font-black font-mono flex items-center gap-1 animate-pulse">
                        <XCircle className="w-3 h-3 text-rose-400" /> FAIL
                      </span>
                    )
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500">
                      {isCurrentlyScanning ? 'SCANNING...' : 'WAITING'}
                    </span>
                  )}
                </div>

                <div className="text-xs text-slate-300 font-medium">
                  {step.question}
                </div>

                {isScanned && (
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-xs space-y-1.5 animate-fadeIn">
                    <p className="text-slate-300 font-normal leading-relaxed">
                      {step.detail}
                    </p>
                    <div className="text-[11px] font-bold text-amber-300">
                      💡 {step.mnemonic}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Scan All at Once quick button if not scanned */}
        {scannedStep === 0 && (
          <div className="flex justify-center pt-2 relative z-10">
            <button
              onClick={handleScanAll}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer"
            >
              4단계 전체 연속 스캔하기
            </button>
          </div>
        )}

        {/* Final Conclusion Box upon scanning all 4 steps */}
        {scannedStep === 4 && (
          <div className="p-5 sm:p-6 rounded-2xl bg-rose-950/80 border-2 border-rose-500 text-white space-y-3 relative z-10 animate-fadeIn shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-400" />
                <span className="font-black text-rose-300 text-xs sm:text-sm uppercase font-mono">
                  헌법재판소 전원재판부 최종 심사 결과
                </span>
              </div>
              <span className="px-3 py-1 bg-rose-600 text-white font-black text-xs rounded-full font-mono">
                FINAL VERDICT: UNCONSTITUTIONAL
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-rose-100 leading-tight">
              “전국 집회 일률 전면 금지 처분은 【위헌】입니다!”
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              과잉금지원칙 4단계 중 <strong className="text-rose-300">침해의 최소성</strong>과 <strong className="text-rose-300">법익의 균형성</strong>을 위반했습니다.
            </p>

            <div className="p-3.5 bg-slate-950/90 rounded-xl border border-rose-500/40 text-xs text-amber-300 font-bold flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                🌟 <strong>헌법 수능·내신 절대 원칙:</strong> 과잉금지원칙 4단계 중 <strong>단 하나라도 위반하면 전체가 위헌</strong>이 됩니다!
              </span>
            </div>

            {onNext && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={onNext}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs sm:text-sm transition-all shadow-lg flex items-center gap-1.5 cursor-pointer"
                >
                  <span>다음 심층 분석으로 이동</span>
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
