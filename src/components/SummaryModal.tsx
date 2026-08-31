import React from 'react';
import { X, Sparkles, ShieldAlert, Scale, Landmark, Users, Gavel, CheckCircle2, Bookmark } from 'lucide-react';

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SummaryModal: React.FC<SummaryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-100 text-amber-900 rounded-2xl">
              <Sparkles className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900">
                오늘의 핵심 개념 한눈에 보기
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 font-medium">
                고1 통합사회2 · 헌법과 기본권 보장 핵심 요약
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: 기본권 제한 3대 요건 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-black text-purple-900">
            <ShieldAlert className="w-4 h-4 text-purple-700" />
            <span>1. 기본권 제한의 3대 요건 (헌법 제37조 제2항)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-1">
              <div className="text-xs font-black text-purple-700">① 목적 요건</div>
              <div className="font-extrabold text-stone-900 text-sm">국가안전보장 · 질서유지 · 공공복리</div>
              <p className="text-xs text-stone-700">이 3가지 목적을 위해서만 제한 가능</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-1">
              <div className="text-xs font-black text-purple-700">② 형식 요건</div>
              <div className="font-extrabold text-stone-900 text-sm">국회의 ‘법률’로써만 제한</div>
              <p className="text-xs text-stone-700">행정부 마음대로 제한 불가 (법치주의)</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-1">
              <div className="text-xs font-black text-purple-700">③ 방법 요건</div>
              <div className="font-extrabold text-stone-900 text-sm">자유와 권리의 ‘본질적 내용’ 침해 금지</div>
              <p className="text-xs text-stone-700">제한하더라도 껍데기만 남기면 안 됨</p>
            </div>
          </div>
        </div>

        {/* Section 2: 과잉금지원칙 4단계 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-black text-amber-900">
            <Scale className="w-4 h-4 text-amber-700" />
            <span>2. 과잉금지원칙 4단계 심사 기준</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1">
              <div className="text-xs font-black text-amber-700">1단계: 목적의 정당성</div>
              <div className="font-bold text-stone-900 text-sm">“하려는 일 자체가 정당해?”</div>
              <p className="text-xs text-stone-700">국가안전보장, 질서유지, 공공복리 등 헌법상 목적 부합</p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1">
              <div className="text-xs font-black text-amber-700">2단계: 수단의 적합성</div>
              <div className="font-bold text-stone-900 text-sm">“그 방법이 실제로 도움이 돼?”</div>
              <p className="text-xs text-stone-700">목적을 달성하는 데 효과적이고 적절한 방법인지 심사</p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1">
              <div className="text-xs font-black text-amber-700">3단계: 침해의 최소성 (★핵심)</div>
              <div className="font-bold text-stone-900 text-sm">“꼭 이렇게까지 해야 해?”</div>
              <p className="text-xs text-stone-700">덜 제한적인 대안(시간·장소 조율 등)이 있다면 일률 전면 금지 불가</p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1">
              <div className="text-xs font-black text-amber-700">4단계: 법익의 균형성</div>
              <div className="font-bold text-stone-900 text-sm">“얻는 것보다 잃는 게 너무 크지 않아?”</div>
              <p className="text-xs text-stone-700">달성하려는 공익과 침해되는 사익의 무게 균형</p>
            </div>
          </div>
        </div>

        {/* Section 3: 권력분립 & 6대 상호견제 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-black text-sky-900">
            <Landmark className="w-4 h-4 text-sky-700" />
            <span>3. 권력분립 6대 상호견제 요약</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-black text-purple-700">국회 ↔ 정부</span>
              <p className="text-stone-800">· 국회 ➔ 정부: 국정감사·조사, 탄핵소추</p>
              <p className="text-stone-800">· 정부 ➔ 국회: 법률안 재의요구권(거부권)</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-black text-sky-700">국회 ↔ 법원</span>
              <p className="text-stone-800">· 국회 ➔ 법원: 대법원장 임명동의권</p>
              <p className="text-stone-800">· 법원 ➔ 국회: 위헌법률심판 제청(헌재)</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-black text-orange-700">정부 ↔ 법원</span>
              <p className="text-stone-800">· 정부 ➔ 법원: 대법관 임명권, 사면권</p>
              <p className="text-stone-800">· 법원 ➔ 정부: 명령·규칙 심사권, 행정재판</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 text-xs font-black text-center">
            💡 초단기 암기 공식: “법률은 헌재, 명령·규칙은 법원!”
          </div>
        </div>

        {/* Section 4: 헌법재판소로 가는 3가지 길 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-black text-rose-900">
            <Gavel className="w-4 h-4 text-rose-700" />
            <span>4. 헌법재판소로 가는 세 가지 길</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1">
              <span className="font-black text-rose-700">① 위헌법률심판</span>
              <p className="font-bold text-stone-900">법원(판사)이 제청</p>
              <p className="text-stone-700">재판 중 법률이 위헌일 때 법원이 헌재에 판단 요청 (음반 사전심의)</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1">
              <span className="font-black text-rose-700">② 권리구제형 헌법소원</span>
              <p className="font-bold text-stone-900">국민이 직접 청구</p>
              <p className="text-stone-700">공권력 행사로 기본권 직접 침해 시 국민 직접 청구 (태아 성별 고지)</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1">
              <span className="font-black text-rose-700">③ 위헌심사형 헌법소원</span>
              <p className="font-bold text-stone-900">법원 기각 시 당사자 청구</p>
              <p className="text-stone-700">법원에 제청 신청했으나 기각당했을 때 당사자가 청구 (영화 오! 꿈의 나라)</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end pt-4 border-t border-stone-100">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
