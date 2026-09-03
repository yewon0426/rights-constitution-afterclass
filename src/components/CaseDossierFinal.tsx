import React, { useState, useEffect } from 'react';
import { Folder, FileText, Award, ShieldCheck, CheckCircle2, Stamp, Sparkles, Printer, RotateCcw, ArrowRight } from 'lucide-react';

interface CaseDossierFinalProps {
  currentTabStep?: number;
  onTabChange?: (tabStep: number) => void;
  onRestart?: () => void;
}

export const CaseDossierFinal: React.FC<CaseDossierFinalProps> = ({ currentTabStep = 0, onTabChange, onRestart }) => {
  const [activeTab, setActiveTab] = useState<'evidence' | 'verdict' | 'certificate'>('evidence');
  const [verdictSelected, setVerdictSelected] = useState<'unconstitutional' | 'constitutional' | null>(null);
  const [isStamped, setIsStamped] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('통합사회 탐정');

  useEffect(() => {
    if (currentTabStep === 0) setActiveTab('evidence');
    else if (currentTabStep === 1) setActiveTab('verdict');
    else if (currentTabStep === 2) setActiveTab('certificate');
  }, [currentTabStep]);

  const handleTabChange = (tab: 'evidence' | 'verdict' | 'certificate') => {
    setActiveTab(tab);
    if (onTabChange) {
      const idx = tab === 'evidence' ? 0 : tab === 'verdict' ? 1 : 2;
      onTabChange(idx);
    }
  };

  const handleApplyStamp = () => {
    if (!verdictSelected) return;
    setIsStamped(true);
    if (verdictSelected === 'unconstitutional') {
      setTimeout(() => {
        handleTabChange('certificate');
      }, 1200);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Manila Folder Case File Header */}
      <div className="bg-[#e2d5be] text-slate-900 rounded-3xl p-5 sm:p-7 border-2 border-[#c2b296] shadow-xl relative overflow-hidden">
        {/* Top Folder Tab */}
        <div className="flex items-center justify-between flex-wrap gap-2 border-b-2 border-[#c2b296] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-700 text-white font-black text-xs flex items-center justify-center shadow-md">
              TOP SECRET
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase text-rose-800 font-mono tracking-widest">
                  CASE DOSSIER #FINAL-2026
                </span>
                <span className="text-[10px] bg-slate-900 text-amber-300 font-mono px-2 py-0.5 rounded font-bold">
                  최종 수사 종결 파일
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                사건명: 불꽃축제 전국 집회 전면 금지 위헌 심판
              </h2>
            </div>
          </div>

          {/* Dossier Tabs */}
          <div className="flex items-center gap-1 bg-[#d5c5aa] p-1.5 rounded-2xl">
            <button
              onClick={() => handleTabChange('evidence')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'evidence'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              📁 증거 서류
            </button>
            <button
              onClick={() => handleTabChange('verdict')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'verdict'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              ⚖️ 최종 판결 선고
            </button>
            <button
              onClick={() => handleTabChange('certificate')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'certificate'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              🏆 헌법 수호 인증서
            </button>
          </div>
        </div>

        {/* EVIDENCE TAB */}
        {activeTab === 'evidence' && (
          <div className="py-5 space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Evidence Doc 1 */}
              <div className="p-4 rounded-2xl bg-white border border-[#c2b296] shadow-xs space-y-2">
                <span className="text-[11px] font-black text-rose-700 uppercase font-mono">
                  [증거물 A호] 정부 발표문
                </span>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  “안전사고 예방을 위해 축제 기간 동안 <strong>전국의 모든 야외 집회를 전면 불허</strong>한다.”
                </p>
                <div className="text-[10px] text-slate-700">➔ 위헌 혐의: 일률적 과잉 금지</div>
              </div>

              {/* Evidence Doc 2 */}
              <div className="p-4 rounded-2xl bg-white border border-[#c2b296] shadow-xs space-y-2">
                <span className="text-[11px] font-black text-indigo-700 uppercase font-mono">
                  [증거물 B호] 침해된 기본권
                </span>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  헌법 제21조 <strong>집회 및 결사의 자유</strong>, 헌법 제10조 행복추구권, 헌법 제11조 평등권
                </p>
                <div className="text-[10px] text-slate-700">➔ 5,000만 국민의 헌법상 자유 박탈</div>
              </div>

              {/* Evidence Doc 3 */}
              <div className="p-4 rounded-2xl bg-white border border-[#c2b296] shadow-xs space-y-2">
                <span className="text-[11px] font-black text-emerald-700 uppercase font-mono">
                  [증거물 C호] 헌법 위반 조항
                </span>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  헌법 제37조 제2항 <strong>과잉금지원칙 (침해의 최소성 & 법익의 균형성) 위반</strong>
                </p>
                <div className="text-[10px] text-slate-700">➔ 덜 침해하는 대안 존재 무시</div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => handleTabChange('verdict')}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-black text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>최종 판결문 작성하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* VERDICT TAB */}
        {activeTab === 'verdict' && (
          <div className="py-5 space-y-5 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-900 shadow-lg space-y-4 relative">
              {/* Stamp Marker Overlay */}
              {isStamped && verdictSelected === 'unconstitutional' && (
                <div className="absolute right-6 top-6 rotate-[-12deg] z-20 animate-bounce">
                  <div className="px-6 py-3 border-4 border-rose-600 rounded-2xl text-rose-600 font-black text-xl sm:text-2xl font-mono tracking-widest uppercase bg-white/90 shadow-2xl">
                    위헌 (UNCONSTITUTIONAL)
                  </div>
                </div>
              )}

              <div className="text-center border-b border-slate-200 pb-3">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                  CONSTITUTIONAL COURT OF KOREA
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  대한민국 헌법재판소 판결문
                </h3>
              </div>

              <div className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2">
                <p>
                  <strong>[주문]</strong> 정부가 발표한 ‘전국 옥외 집회 전면 금지 조치’는 헌법 제37조 제2항의 과잉금지원칙을 위반하여 헌법에 합치되지 아니한다.
                </p>
                <p className="text-slate-700">
                  <strong>[이유 요지]</strong> 축제 안전이라는 공익 목적은 정당하나, 평화로운 소규모 집회까지 전면 불허한 것은 ‘침해의 최소성’과 ‘법익의 균형성’을 심각하게 훼손하였다.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <span className="text-xs font-extrabold text-slate-900 block">
                  헌법재판관으로서 최종 선고 버튼을 선택하고 직인을 날인하세요:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      if (!isStamped) setVerdictSelected('unconstitutional');
                    }}
                    className={`p-4 rounded-xl border-2 text-left font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      verdictSelected === 'unconstitutional'
                        ? 'border-rose-600 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    ⚖️ 위헌 결정 선고 (과잉금지원칙 위반)
                  </button>

                  <button
                    onClick={() => {
                      if (!isStamped) setVerdictSelected('constitutional');
                    }}
                    className={`p-4 rounded-xl border-2 text-left font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      verdictSelected === 'constitutional'
                        ? 'border-slate-600 bg-slate-100 text-slate-900'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    합헌 결정 선고 (정부 조치 정당)
                  </button>
                </div>

                {!isStamped ? (
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleApplyStamp}
                      disabled={!verdictSelected}
                      className={`px-7 py-3 rounded-2xl font-black text-sm transition-all shadow-md flex items-center gap-2 ${
                        verdictSelected
                          ? 'bg-rose-700 text-white hover:bg-rose-800 cursor-pointer active:scale-95'
                          : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      <Stamp className="w-4 h-4" />
                      <span>판결문 최종 서명 및 날인</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => handleTabChange('certificate')}
                      className="px-7 py-3 rounded-2xl font-black text-sm bg-slate-900 text-amber-300 hover:bg-slate-800 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <Award className="w-4 h-4" />
                      <span>헌법 수호 인증서 발급받기</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CERTIFICATE TAB */}
        {activeTab === 'certificate' && (
          <div className="py-5 space-y-5 animate-fadeIn">
            {/* Elegant Certificate Card */}
            <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50/80 rounded-3xl border-4 border-amber-600/80 p-6 sm:p-10 shadow-2xl text-center space-y-6 relative overflow-hidden">
              <div className="space-y-1">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg">
                  <Award className="w-9 h-9" />
                </div>
                <span className="text-xs font-mono font-black text-amber-800 uppercase tracking-widest mt-2 block">
                  CONSTITUTIONAL DEFENDER CERTIFICATE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  대한민국 헌법 수호관 인증서
                </h3>
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <div className="text-xs text-slate-700">수료자 성명</div>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full text-center font-black text-lg sm:text-xl text-indigo-900 border-b-2 border-indigo-500 bg-transparent focus:outline-none pb-1"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed max-w-lg mx-auto font-medium">
                위 학생은 고등학교 1학년 통합사회2 <strong>‘기본권 제한과 헌법재판’</strong> 50분 인터랙티브 코스를 성실히 이수하고, 헌법 제37조 제2항, 과잉금지원칙 4단계, 삼권분립 6대 견제 구조 및 헌법재판소 권리구제 제도를 완벽히 마스터하였으므로 이 증서를 수여합니다.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono max-w-xl mx-auto pt-2">
                <div className="p-2.5 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-950 font-bold">
                  ✓ 3대 GATE 통과
                </div>
                <div className="p-2.5 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-950 font-bold">
                  ✓ 4단계 스캐너
                </div>
                <div className="p-2.5 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-950 font-bold">
                  ✓ 삼권분립 6화살표
                </div>
                <div className="p-2.5 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-950 font-bold">
                  ✓ 헌재 3개 노선
                </div>
              </div>

              <div className="pt-4 border-t border-amber-200 flex items-center justify-between text-xs text-slate-700">
                <span>발행: 대한민국 고교 통합사회 학습원</span>
                <span className="font-mono">{new Date().toLocaleDateString('ko-KR')}</span>
              </div>
            </div>

            {/* Restart Button */}
            {onRestart && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={onRestart}
                  className="px-7 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-black transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>처음부터 다시 학습하기</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
