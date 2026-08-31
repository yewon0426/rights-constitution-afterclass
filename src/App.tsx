import React, { useState } from 'react';
import { STAGES, POWER_CHECKS, COURT_PATHWAYS } from './data/curriculum';
import { StageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SocialNewsFeed } from './components/SocialNewsFeed';
import { GateSystem } from './components/GateSystem';
import { ConstitutionalScanner } from './components/ConstitutionalScanner';
import { SplitVsComparison } from './components/SplitVsComparison';
import { InteractiveScales } from './components/InteractiveScales';
import { PolicyEditor } from './components/PolicyEditor';
import { InteractiveTrianglePuzzle } from './components/InteractiveTrianglePuzzle';
import { NationalAgencyChat } from './components/NationalAgencyChat';
import { ConstitutionalPillars } from './components/ConstitutionalPillars';
import { MetroRouteRemedy } from './components/MetroRouteRemedy';
import { CaseDossierFinal } from './components/CaseDossierFinal';
import { QuickDirectionQuiz } from './components/QuickDirectionQuiz';
import { CurriculumOverviewModal } from './components/CurriculumOverviewModal';
import {
  Sparkles,
  Scale,
  ShieldCheck,
  Building2,
  Landmark,
  Gavel,
  CheckCircle2,
  XCircle,
  FileText,
  AlertTriangle,
  Award,
  ChevronRight,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  Users,
  Vote,
  Compass,
  Check,
} from 'lucide-react';

export default function App() {
  const [currentStageId, setCurrentStageId] = useState<StageId>('prologue');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState<boolean>(false);

  const currentStage = STAGES.find((s) => s.id === currentStageId) || STAGES[0];
  const currentStageIdx = STAGES.findIndex((s) => s.id === currentStageId);

  const canPrev = currentStepIndex > 0 || currentStageIdx > 0;
  const canNext =
    currentStepIndex < currentStage.stepCount - 1 || currentStageIdx < STAGES.length - 1;

  const handleNext = () => {
    if (currentStepIndex < currentStage.stepCount - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else if (currentStageIdx < STAGES.length - 1) {
      const nextStage = STAGES[currentStageIdx + 1];
      setCurrentStageId(nextStage.id);
      setCurrentStepIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    } else if (currentStageIdx > 0) {
      const prevStage = STAGES[currentStageIdx - 1];
      setCurrentStageId(prevStage.id);
      setCurrentStepIndex(prevStage.stepCount - 1);
    }
  };

  const handleSelectStage = (stageId: StageId) => {
    setCurrentStageId(stageId);
    setCurrentStepIndex(0);
  };

  const handleReset = () => {
    setCurrentStageId('prologue');
    setCurrentStepIndex(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Header */}
      <Header
        currentStageId={currentStageId}
        currentStepIndex={currentStepIndex}
        totalStepsInStage={currentStage.stepCount}
        onSelectStage={handleSelectStage}
        onOpenSummary={() => setIsSummaryModalOpen(true)}
      />

      {/* Main Interactive Stage Canvas */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 md:p-8 flex flex-col justify-start">
        {/* =========================================================================
            STAGE 1: prologue (시작: 0~3분) - SNS 속보 & 메신저 대화
           ========================================================================= */}
        {currentStageId === 'prologue' && (
          <div className="space-y-6">
            {currentStepIndex === 0 && (
              <SocialNewsFeed />
            )}

            {currentStepIndex === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    <Compass className="w-3.5 h-3.5" />
                    <span>수업 로드맵</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    오늘 50분 동안 해결할 3대 핵심 미션
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                    <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-2">
                      <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                        1
                      </span>
                      <h4 className="font-extrabold text-indigo-950 text-sm">
                        기본권 제한 3대 GATE
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        국가는 <strong>왜(목적)·무엇으로(법률)·어디까지(본질)</strong> 제한할 수 있을까?
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                      <span className="w-8 h-8 rounded-xl bg-amber-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                        2
                      </span>
                      <h4 className="font-extrabold text-amber-950 text-sm">
                        과잉금지원칙 4단계 스캐너
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        헌법 스캐너로 목적 정당성, 수단 적합성, 침해 최소성, 법익 균형성을 순서대로 SCAN
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
                      <span className="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                        3
                      </span>
                      <h4 className="font-extrabold text-sky-950 text-sm">
                        삼권분립 & 헌재 3개 노선
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        삼각형 견제 퍼즐, 국가기관 단톡방, 헌법재판소 전철 노선도를 타고 권리 구제
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            STAGE 2: restriction (기본권 제한 3요건: 3~10분) - 3대 GATE 통과 시스템
           ========================================================================= */}
        {currentStageId === 'restriction' && (
          <div className="space-y-6">
            <GateSystem
              initialGate={
                currentStepIndex === 0
                  ? 1
                  : currentStepIndex === 1
                  ? 2
                  : currentStepIndex === 2
                  ? 3
                  : 1
              }
            />
          </div>
        )}

        {/* =========================================================================
            STAGE 3: excess_ban (과잉금지원칙: 10~22분) - 헌법 스캐너 & VS화면 & 저울
           ========================================================================= */}
        {currentStageId === 'excess_ban' && (
          <div className="space-y-6">
            {/* Step 0 & 1 & 4: Constitutional Scanner */}
            {(currentStepIndex === 0 || currentStepIndex === 1 || currentStepIndex === 4) && (
              <ConstitutionalScanner />
            )}

            {/* Step 2: 좌우 VS 화면 (침해의 최소성) */}
            {currentStepIndex === 2 && (
              <SplitVsComparison />
            )}

            {/* Step 3: 움직이는 물리 저울 UI (법익의 균형성) */}
            {currentStepIndex === 3 && (
              <InteractiveScales />
            )}
          </div>
        )}

        {/* =========================================================================
            STAGE 4: revise_law (규정 수정 & 판례: 22~27분) - 정책 에디터
           ========================================================================= */}
        {currentStageId === 'revise_law' && (
          <div className="space-y-6">
            {currentStepIndex === 0 && (
              <PolicyEditor />
            )}

            {currentStepIndex === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-sm">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span>실제 헌법재판소 판례 연결</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    「국회의사당 100m 이내 옥외집회 전면 금지 사건 (2018 헌바)」
                  </h3>

                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <span className="font-black text-slate-900 text-sm">
                        📜 사건 개요
                      </span>
                      <p className="text-slate-700 leading-relaxed font-medium">
                        과거 집시법 제11조는 국회의사당 경계 100미터 이내의 장소에서는 어떠한 예외도 없이 옥외집회와 시위를 전면 금지했습니다.
                      </p>
                    </div>

                    <div className="space-y-1 pt-1 border-t border-slate-200">
                      <span className="font-black text-slate-900 text-sm">
                        ⚖️ 헌법재판소의 결정 (헌법불합치)
                      </span>
                      <p className="text-slate-800 leading-relaxed font-medium">
                        “국회 기능에 아무런 방해를 주지 않는 평화적·소규모 집회까지 일률적·전면적으로 금지하는 것은 <strong>침해의 최소성 원칙에 반하여 집회의 자유를 과도하게 침해</strong>한다.”
                      </p>
                    </div>

                    <div className="p-4 bg-indigo-50/80 rounded-xl border border-indigo-200 text-indigo-950 font-bold text-xs sm:text-sm flex items-center gap-2">
                      <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
                      <span>
                        💡 <strong>수능·내신 출제 핵심:</strong> 법률이라도 덜 침해하는 대안(장소·시간 예외 허용)을 두지 않고 일률 전면 금지하면 무조건 위헌!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            STAGE 5: separation (권력분립: 27~39분) - 삼각형 퍼즐 & 단톡방
           ========================================================================= */}
        {currentStageId === 'separation' && (
          <div className="space-y-6">
            {currentStepIndex < 6 && (
              <InteractiveTrianglePuzzle />
            )}

            {currentStepIndex === 6 && (
              <NationalAgencyChat />
            )}

            {currentStepIndex === 7 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-sm">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                    <Scale className="w-3.5 h-3.5 text-amber-700" />
                    <span>시험 100% 빈출 핵심 공식</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    “법률은 헌재, 명령·규칙은 법원!”
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-5 rounded-2xl bg-indigo-50 border-2 border-indigo-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded bg-indigo-600 text-white font-black text-xs">
                          국회가 만든 [법률]
                        </span>
                        <span className="text-xs font-bold text-indigo-900">심사 기관</span>
                      </div>
                      <h4 className="text-lg font-black text-indigo-950">헌법재판소</h4>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        국민의 대표가 만든 법률의 위헌 여부는 오직 최고 헌법 수호 기관인 <strong>헌법재판소</strong>가 심사합니다.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-sky-50 border-2 border-sky-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded bg-sky-600 text-white font-black text-xs">
                          정부가 만든 [명령·규칙·처분]
                        </span>
                        <span className="text-xs font-bold text-sky-900">심사 기관</span>
                      </div>
                      <h4 className="text-lg font-black text-sky-950">법원 (최종 대법원)</h4>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        대통령령, 총리령, 부령, 조례, 행정처분의 위법·위헌 여부는 <strong>법원(최종 대법원)</strong>이 심사합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStepIndex === 8 && (
              <QuickDirectionQuiz />
            )}
          </div>
        )}

        {/* =========================================================================
            STAGE 6: human_rights_systems (인권보장 4대 제도: 39~44분) - 4대 헌법 기둥
           ========================================================================= */}
        {currentStageId === 'human_rights_systems' && (
          <div className="space-y-6">
            <ConstitutionalPillars />
          </div>
        )}

        {/* =========================================================================
            STAGE 7: court_remedy (기본권 구제와 헌법재판소: 44~48분) - 3대 노선도
           ========================================================================= */}
        {currentStageId === 'court_remedy' && (
          <div className="space-y-6">
            <MetroRouteRemedy />
          </div>
        )}

        {/* =========================================================================
            STAGE 8: final_case (FINAL CASE 종합 판단: 48~50분) - 수사 파일 & 직인
           ========================================================================= */}
        {currentStageId === 'final_case' && (
          <div className="space-y-6">
            <CaseDossierFinal onRestart={handleReset} />
          </div>
        )}
      </main>

      {/* Bottom Sticky Navigation Footer */}
      <Footer
        canPrev={canPrev}
        canNext={canNext}
        onPrev={handlePrev}
        onNext={handleNext}
        onReset={handleReset}
        currentStepIndex={currentStepIndex}
        totalStepsInStage={currentStage.stepCount}
        stageName={currentStage.title}
        nextButtonLabel={
          currentStepIndex === currentStage.stepCount - 1 &&
          currentStageIdx === STAGES.length - 1
            ? '수업 완료'
            : '다음 사건'
        }
      />

      {/* Comprehensive Full Curriculum Summary Modal */}
      <CurriculumOverviewModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
      />
    </div>
  );
}

