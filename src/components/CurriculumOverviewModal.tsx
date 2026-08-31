import React, { useState } from 'react';
import { X, BookOpen, Scale, Landmark, Building2, Gavel, ShieldCheck, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface CurriculumOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumOverviewModal: React.FC<CurriculumOverviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeSection, setActiveSection] = useState<number>(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-indigo-600 text-white rounded-xl">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                고1 통합사회2 핵심 완벽 정리
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                기본권 제한과 헌법 개념 한눈에 보기
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200/80 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section Tabs */}
        <div className="flex border-b border-slate-200 bg-white px-6 overflow-x-auto gap-2 py-2.5 shrink-0 scrollbar-none">
          {[
            { id: 1, label: '1. 기본권 제한 3대 요건' },
            { id: 2, label: '2. 과잉금지원칙 4단계' },
            { id: 3, label: '3. 삼권분립 6대 견제' },
            { id: 4, label: '4. 인권보장 4대 제도' },
            { id: 5, label: '5. 헌재 기본권 구제 3길' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeSection === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-900">
          {/* Section 1: 3대 요건 */}
          {activeSection === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 font-medium text-xs sm:text-sm">
                헌법 제37조 제2항: “국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다.”
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl border-2 border-indigo-200 bg-white space-y-2">
                  <span className="px-2.5 py-0.5 rounded bg-indigo-600 text-white font-black text-xs">
                    ① 왜? (목적)
                  </span>
                  <h4 className="font-extrabold text-sm text-slate-900">3가지 목적에 한함</h4>
                  <ul className="text-xs text-slate-700 space-y-1 pl-4 list-disc font-medium">
                    <li>국가안전보장</li>
                    <li>질서유지</li>
                    <li>공공복리</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl border-2 border-amber-200 bg-white space-y-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-600 text-white font-black text-xs">
                    ② 무엇으로? (형식)
                  </span>
                  <h4 className="font-extrabold text-sm text-slate-900">국회의 ‘법률’로써</h4>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    국민의 대표 기관인 국회가 제정한 법률에 의해서만 제한 가능 (행정부 단독 마음대로 불가)
                  </p>
                </div>

                <div className="p-4 rounded-2xl border-2 border-rose-200 bg-white space-y-2">
                  <span className="px-2.5 py-0.5 rounded bg-rose-600 text-white font-black text-xs">
                    ③ 어디까지? (한계)
                  </span>
                  <h4 className="font-extrabold text-sm text-slate-900">본질적 내용 침해 금지</h4>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    제한하더라도 그 권리의 본질적 핵심을 없애거나 불가능하게 만들면 위헌
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: 과잉금지원칙 */}
          {activeSection === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-xs sm:text-sm font-bold text-slate-700">
                헌법재판소가 법률의 위헌 여부를 검사하는 4단계 황금 기준 (단 하나라도 어기면 위헌!)
              </div>

              <div className="space-y-3">
                {[
                  {
                    step: '1단계',
                    term: '목적의 정당성',
                    easy: '하려는 일 자체가 정당해?',
                    desc: '기본권을 제한하려는 입법 목적이 헌법적으로 정당해야 함',
                    status: 'PASS',
                  },
                  {
                    step: '2단계',
                    term: '수단의 적합성',
                    easy: '그 방법이 실제로 도움이 돼?',
                    desc: '선택한 수단이 입법 목적을 달성하는 데 유효하고 적절해야 함',
                    status: 'PASS',
                  },
                  {
                    step: '3단계',
                    term: '침해의 최소성',
                    easy: '꼭 이렇게까지 해야 해?',
                    desc: '목적을 달성하는 데 가장 적게 기본권을 침해하는 수단을 선택해야 함 (덜 제한적인 대안 우선)',
                    status: 'FAIL (불꽃축제 사건)',
                  },
                  {
                    step: '4단계',
                    term: '법익의 균형성',
                    easy: '얻는 것보다 잃는 것이 너무 크지 않아?',
                    desc: '달성하려는 공익(얻는 것)이 침해되는 사익(잃는 기본권)보다 커야 함',
                    status: 'FAIL (불꽃축제 사건)',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black bg-slate-900 text-white px-2 py-0.5 rounded">
                          {item.step}
                        </span>
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                          {item.term}
                        </h4>
                        <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                          “{item.easy}”
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">{item.desc}</p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-xl text-xs font-black shrink-0 self-start sm:self-center ${
                        item.status.startsWith('PASS')
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: 삼권분립 6대 견제 */}
          {activeSection === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-3.5 rounded-2xl bg-amber-500 text-white font-extrabold text-xs sm:text-sm text-center">
                “법률은 헌법재판소, 명령·규칙은 법원(대법원)!”
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl border border-indigo-200 bg-indigo-50/40 space-y-2">
                  <div className="font-bold text-indigo-950 flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>국회의 상호 견제 수단</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-slate-700">
                    <li><strong>대(對) 정부:</strong> 국정감사·조사, 예산안 심의확정, 탄핵소추, 해임건의</li>
                    <li><strong>대(對) 법원:</strong> 대법원장·대법관 임명 동의권, 법관 탄핵소추</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/40 space-y-2">
                  <div className="font-bold text-amber-950 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>정부의 상호 견제 수단</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-slate-700">
                    <li><strong>대(對) 국회:</strong> 법률안 재의요구권 (거부권), 임시회 집회 요구</li>
                    <li><strong>대(對) 법원:</strong> 대법원장·대법관 임명권, 대통령의 사면권</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl border border-sky-200 bg-sky-50/40 space-y-2 md:col-span-2">
                  <div className="font-bold text-sky-950 flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-sky-600" />
                    <span>법원의 상호 견제 수단</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-slate-700">
                    <li><strong>대(對) 국회:</strong> 위헌법률심판 제청권 (재판 중 법률이 의심스러울 때 헌재에 제청)</li>
                    <li><strong>대(對) 정부:</strong> 명령·규칙 심사권 (시행령 등이 위법할 때 법원이 심사, 최종 대법원), 행정재판</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: 인권보장 4대 제도 */}
          {activeSection === 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fadeIn text-xs">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px]">제도 1</span>
                <h4 className="font-extrabold text-sm text-slate-900">국민 주권주의</h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                  국가의 주권이 국민에게 있고 모든 권력은 국민으로부터 나온다는 기본 원리
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="px-2 py-0.5 rounded bg-amber-600 text-white font-bold text-[10px]">제도 2</span>
                <h4 className="font-extrabold text-sm text-slate-900">법치주의 (실질적 법치주의)</h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                  모든 국가 권력 행사는 법률에 근거해야 하며, 그 법률의 내용 또한 인간 존엄과 헌법적 가치에 부합해야 함
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">제도 3</span>
                <h4 className="font-extrabold text-sm text-slate-900">민주적 선거 제도</h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                  보통·평등·직접·비밀·자유 선거의 5대 원칙을 통해 정기적으로 국가 권력을 신임하고 평가
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px]">제도 4</span>
                <h4 className="font-extrabold text-sm text-slate-900">복수정당제 & 권력분립</h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                  두 개 이상의 정당 활동을 자유롭게 보장하여 독재를 방지하고 다양한 국민 의사를 반영
                </p>
              </div>
            </div>
          )}

          {/* Section 5: 헌재 기본권 구제 3길 */}
          {activeSection === 5 && (
            <div className="space-y-3 animate-fadeIn text-xs sm:text-sm">
              <div className="p-4 rounded-2xl border-2 border-indigo-200 bg-white space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-black text-indigo-900 text-sm">길 1: 위헌법률심판</span>
                  <span className="text-[11px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-bold">법원(판사) 제청</span>
                </div>
                <p className="text-slate-700 font-medium">
                  재판 중인 판사가 적용할 법률에 위헌 의심이 들어 헌재에 판단 요청 (예: 음반 사전심의 사건)
                </p>
              </div>

              <div className="p-4 rounded-2xl border-2 border-rose-200 bg-white space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-black text-rose-950 text-sm">길 2: 권리구제형 헌법소원 (제68조 제1항)</span>
                  <span className="text-[11px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-bold">국민 직접 청구</span>
                </div>
                <p className="text-slate-700 font-medium">
                  국가의 공권력 행사나 불행사로 기본권을 직접 침해당한 국민이 직접 헌재에 청구 (예: 태아 성별 고지 금지 사건)
                </p>
              </div>

              <div className="p-4 rounded-2xl border-2 border-amber-200 bg-white space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-black text-amber-950 text-sm">길 3: 위헌심사형 헌법소원 (제68조 제2항)</span>
                  <span className="text-[11px] bg-amber-50 text-amber-900 px-2 py-0.5 rounded font-bold">법원 기각 후 당사자 청구</span>
                </div>
                <p className="text-slate-700 font-medium">
                  당사자가 법원에 제청 신청했으나 법원이 기각한 경우 당사자가 직접 헌재로 직행 (예: 영화 사전심의 사건)
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-all cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
