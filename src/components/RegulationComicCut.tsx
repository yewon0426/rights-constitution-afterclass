import React, { useState } from 'react';
import { Landmark, Building2, Gavel, Scale, Sparkles, HelpCircle, Bookmark, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChatBubble } from './ChatBubble';

export const RegulationComicCut: React.FC = () => {
  const [activeCut, setActiveCut] = useState<number>(4); // default show all or interactive
  const [showExplanation, setShowExplanation] = useState<boolean>(true);

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-900 border border-sky-200">
          <Gavel className="w-3.5 h-3.5 text-sky-700" />
          <span>사법부의 핵심 견제 수단</span>
        </span>
        <span className="text-xs font-bold text-stone-700">
          명령·규칙 심사권 이해하기
        </span>
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-1">
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
          “법에는 없는데, 정부가 마음대로 규칙을 만들었다면?”
        </h2>
        <p className="text-sm text-stone-700 font-medium">
          만화 컷 순서대로 4개의 장면을 확인해 보세요.
        </p>
      </div>

      {/* 4 Comic Cuts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {/* CUT 1: 국회 */}
        <div className="p-5 rounded-2xl border-2 border-purple-200 bg-purple-50/40 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-purple-600 text-white font-extrabold text-xs">
              CUT 1. 국회 (법률 제정)
            </span>
            <span className="text-xs text-purple-800 font-bold">🏛️ 입법부의 법</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-purple-200 shadow-2xs">
            <ChatBubble
              speaker="assembly"
              message="“모든 국민은 도심 공원을 자유롭게 이용할 수 있습니다.”"
              subtitle="공원 이용에 관한 기본 법률 제정"
            />
          </div>
          <div className="text-xs text-purple-900 font-medium pl-1">
            국민의 대표 기관 국회가 국민을 위한 기본 법률을 만들었습니다.
          </div>
        </div>

        {/* CUT 2: 정부 */}
        <div className="p-5 rounded-2xl border-2 border-orange-200 bg-orange-50/40 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-orange-600 text-white font-extrabold text-xs">
              CUT 2. 정부 (세부 규칙 제정)
            </span>
            <span className="text-xs text-orange-800 font-bold">🏢 행정부의 시행령</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-orange-200 shadow-2xs">
            <ChatBubble
              speaker="government"
              message="“공원 관리가 힘드니, 20세 미만 청소년은 공원 출입 전부 금지!”"
              subtitle="세부 시행령(명령·규칙) 발표"
            />
          </div>
          <div className="text-xs text-orange-900 font-medium pl-1">
            정부가 법률의 취지를 벗어나 청소년의 권리를 크게 제한했습니다.
          </div>
        </div>

        {/* CUT 3: 민서 */}
        <div className="p-5 rounded-2xl border-2 border-amber-200 bg-amber-50/40 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-amber-600 text-white font-extrabold text-xs">
              CUT 3. 민서 (시민의 문제 제기)
            </span>
            <span className="text-xs text-amber-800 font-bold">🙋 시민의 의문</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-amber-200 shadow-2xs">
            <ChatBubble
              speaker="minseo"
              message="“어? 국회가 만든 법률에는 그런 나이 제한 내용이 전혀 없는데? 정부 마음대로 막아도 되나요?”"
              subtitle="소송 제기 및 구제 요청"
            />
          </div>
          <div className="text-xs text-amber-900 font-medium pl-1">
            국민이 정부 규칙의 위법성에 대해 법원에 재판을 청구했습니다.
          </div>
        </div>

        {/* CUT 4: 법원 */}
        <div className="p-5 rounded-2xl border-2 border-sky-300 bg-sky-50/50 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white font-extrabold text-xs">
              CUT 4. 법원 (심사 및 판결)
            </span>
            <span className="text-xs text-sky-800 font-bold">⚖️ 사법부의 심사</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-sky-200 shadow-2xs">
            <ChatBubble
              speaker="court"
              message="“정부가 만든 이 시행령(명령·규칙)이 상위 법률에 위배되는지 확인하여 효력을 인정하지 않겠습니다.”"
              subtitle="대법원의 최종 심사"
            />
          </div>
          <div className="text-xs text-sky-900 font-bold pl-1">
            ➔ <strong>[명령·규칙 심사권]</strong> 발동!
          </div>
        </div>
      </div>

      {/* Discovery Outcome & Key Comparison Card */}
      <div className="p-5 sm:p-6 rounded-3xl bg-stone-900 text-white space-y-4 max-w-4xl mx-auto shadow-md">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              핵심 비교: 무엇이 문제일 때 어디로 갈까?
            </h3>
          </div>
          <span className="text-xs text-amber-300 font-bold">
            ★ 고교 시험 단골 출제 포인트
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: 법률 문제 -> 헌법재판소 */}
          <div className="p-4 rounded-2xl bg-stone-800 border border-stone-700 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="text-xs font-bold text-rose-300 uppercase">
                국회가 만든 ‘법률’이 문제일 때
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-rose-400">
              ➔ 헌법재판소
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-medium">
              위헌법률심판을 통해 법률 자체의 효력을 없앨 수 있는 권한은 오직 독립 헌법기관인 <strong>헌법재판소</strong>에 있습니다.
            </p>
          </div>

          {/* Card 2: 명령·규칙 문제 -> 법원 */}
          <div className="p-4 rounded-2xl bg-stone-800 border border-stone-700 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-sky-400" />
              <span className="text-xs font-bold text-sky-300 uppercase">
                정부가 만든 ‘명령·규칙’이 문제일 때
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-sky-400">
              ➔ 법원 (최종 대법원)
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-medium">
              대통령령, 총리령, 부령 등 행정부 규칙이나 행정처분이 법에 어긋나는지는 <strong>법원(대법원)</strong>이 심사합니다.
            </p>
          </div>
        </div>

        {/* Student Mnemonic Banner */}
        <div className="p-3.5 rounded-xl bg-amber-400 text-stone-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 text-center">
          <Bookmark className="w-4 h-4 text-stone-950 shrink-0" />
          <span>학생용 암기 공식: “법률은 헌재, 명령·규칙은 법원!”</span>
        </div>
      </div>
    </div>
  );
};
