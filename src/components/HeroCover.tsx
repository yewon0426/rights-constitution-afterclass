import React from 'react';
import { Sparkles, ArrowRight, ShieldAlert, Users, Scale, Eye } from 'lucide-react';
import { ChatBubble } from './ChatBubble';

interface HeroCoverProps {
  onStart: () => void;
  onOpenSummary: () => void;
}

export const HeroCover: React.FC<HeroCoverProps> = ({ onStart, onOpenSummary }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Top Tag */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>오늘의 인터랙티브 헌법 스토리</span>
        </span>
        <span className="text-xs font-bold text-stone-700">
          고1 통합사회2 · 50분 완성
        </span>
      </div>

      {/* Main Hero Card */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 relative overflow-hidden">
        {/* Subtle decorative background accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-100/50 via-purple-50/30 to-transparent rounded-bl-full pointer-events-none -z-0" />

        <div className="relative z-10 space-y-6">
          {/* Eyebrow Hook */}
          <div className="inline-block px-3 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 font-extrabold text-xs tracking-wider">
            🔥 오늘의 사건 #BREAKING_NEWS
          </div>

          {/* Big Headline */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-[1.2] tracking-tight">
              “불꽃축제 때문에<br />
              전국 집회를 다 막는다고?”
            </h1>
            <p className="text-sm sm:text-base font-bold text-stone-700 pt-1">
              「이 법, 괜찮은가요? - 기본권 제한과 헌법」
            </p>
          </div>

          {/* Quick Chat Preview */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/80 border border-stone-200 space-y-1">
            <ChatBubble
              speaker="minseo"
              message="“축제는 여의도에서만 열리는데, 왜 부산·광주까지 전국 집회를 전부 금지하지? 이게 진짜 법적으로 맞는 건가요?”"
              subtitle="사건을 접한 민서의 의문"
            />
          </div>

          {/* 3 Core Points Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700">
                <ShieldAlert className="w-4 h-4" /> 1단계
              </div>
              <div className="font-extrabold text-stone-900 text-sm">
                기본권 제한 요건
              </div>
              <p className="text-xs text-stone-700">
                왜 · 무엇으로 · 어디까지 제한할 수 있을까?
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                <Scale className="w-4 h-4" /> 2단계
              </div>
              <div className="font-extrabold text-stone-900 text-sm">
                과잉금지원칙 4단계
              </div>
              <p className="text-xs text-stone-700">
                쉬운 질문으로 따져보고 정식 헌법 용어 발견하기
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700">
                <Users className="w-4 h-4" /> 3단계
              </div>
              <div className="font-extrabold text-stone-900 text-sm">
                권력분립 & 헌재 구제
              </div>
              <p className="text-xs text-stone-700">
                6대 상호견제 화살표 완성 및 실제 판례 확인
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
            <button
              id="btn-open-summary-cover"
              onClick={onOpenSummary}
              className="text-xs sm:text-sm font-bold text-stone-700 hover:text-stone-900 flex items-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-stone-700" />
              <span>오늘 배울 전체 요약 먼저 훑어보기</span>
            </button>

            <button
              id="btn-start-hero"
              onClick={onStart}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-black text-base sm:text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>사건 확인하러 가기</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
