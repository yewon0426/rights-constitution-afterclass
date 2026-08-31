import React, { useState } from 'react';
import { MessageSquare, Landmark, Building2, Gavel, Scale, Sparkles, CheckCircle2, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: '국회' | '정부' | '민서' | '법원' | '헌법재판소';
  avatarBg: string;
  avatarIcon: string;
  text: string;
  subText?: string;
  isProblem?: boolean;
}

const CHAT_LOGS: ChatMessage[] = [
  {
    id: 1,
    sender: '국회',
    avatarBg: 'bg-indigo-600',
    avatarIcon: '🏛️',
    text: '“국민 여러분, 공원을 자유롭게 이용할 수 있도록 [공원관리법]을 통과시켰습니다!”',
    subText: '국회: 국민의 대표 기관이 기본 법률 제정',
  },
  {
    id: 2,
    sender: '정부',
    avatarBg: 'bg-amber-600',
    avatarIcon: '🏢',
    text: '“그런데 공원 관리가 힘드니, [시행규칙]을 만들어서 ‘20세 미만 청소년은 공원 출입 전면 금지’로 하겠습니다!”',
    subText: '정부(행정부): 법률의 범위를 넘어선 과도한 시행규칙 제정',
    isProblem: true,
  },
  {
    id: 3,
    sender: '민서',
    avatarBg: 'bg-emerald-600',
    avatarIcon: '👩',
    text: '“어? 국회가 만든 법률에는 나이 제한이 전혀 없었는데, 정부 마음대로 청소년 출입을 다 막는다고요? 이건 법률 위반이에요!”',
    subText: '시민(민서): 위법한 하위 규칙에 대해 법원에 재판 청구',
  },
  {
    id: 4,
    sender: '법원',
    avatarBg: 'bg-sky-600',
    avatarIcon: '⚖️',
    text: '“잠깐만요! 정부가 만든 시행규칙이 상위 법률을 위반했는지 [법원]이 최종 심사하여 그 효력을 인정하지 않겠습니다!”',
    subText: '법원(최종: 대법원): 헌법 제107조 제2항 [명령·규칙 심사권] 발동!',
  },
];

export const NationalAgencyChat: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(4);
  const [activeTab, setActiveTab] = useState<'chat' | 'compare' | 'formula'>('chat');

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-1 font-mono">
            <Scale className="w-3.5 h-3.5" />
            <span>헌법 제107조: 명령·규칙 심사권</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            “대한민국 국가기관 단톡방”
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            정부가 만든 하위 명령·규칙이 법률을 어겼을 때 누가 심사하는지 대화로 확인해 보세요.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-800 p-1.5 rounded-2xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'chat'
                ? 'bg-amber-400 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            💬 단톡방 대화
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'compare'
                ? 'bg-amber-400 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ⚖️ 기관별 관할 비교
          </button>
          <button
            onClick={() => setActiveTab('formula')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'formula'
                ? 'bg-amber-400 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            💡 수능 핵심 공식
          </button>
        </div>
      </div>

      {/* TAB 1: Kakao Style Group Chat Screen */}
      {activeTab === 'chat' && (
        <div className="bg-[#bacee0] rounded-3xl border-2 border-slate-300 p-4 sm:p-6 shadow-xl space-y-4 max-w-2xl mx-auto">
          {/* Chat Room Top Bar */}
          <div className="bg-[#a9c0d4] -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 px-5 py-3.5 border-b border-slate-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">🏛️</span>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                  [대한민국 국가기관 단톡방]
                </h4>
                <span className="text-[10px] text-slate-700">국회, 정부, 법원, 민서 (4명)</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white/50 text-slate-800 text-[10px] font-bold">
              헌법 실시간 모의재판
            </span>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4 pt-2">
            {CHAT_LOGS.slice(0, visibleMessages).map((msg) => (
              <div key={msg.id} className="flex items-start gap-2.5 animate-fadeIn">
                {/* Avatar */}
                <div
                  className={`w-9 h-9 rounded-2xl ${msg.avatarBg} text-white font-black text-sm flex items-center justify-center shadow-xs shrink-0`}
                >
                  {msg.avatarIcon}
                </div>

                <div className="space-y-1 max-w-[85%]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">{msg.sender}</span>
                    <span className="text-[10px] text-slate-700">{msg.subText}</span>
                  </div>

                  <div
                    className={`p-3.5 rounded-2xl rounded-tl-xs text-xs sm:text-sm leading-relaxed shadow-xs font-medium ${
                      msg.isProblem
                        ? 'bg-amber-100 border border-amber-300 text-amber-950 font-bold'
                        : msg.sender === '법원'
                        ? 'bg-sky-500 text-white font-bold'
                        : 'bg-white text-slate-900'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Chat Prompt */}
          <div className="p-4 rounded-2xl bg-white/90 border border-slate-200 text-xs text-slate-800 space-y-2 mt-4">
            <div className="flex items-center gap-1.5 font-bold text-indigo-700">
              <Sparkles className="w-4 h-4" />
              <span>핵심 결론: 법원의 명령·규칙 심사권</span>
            </div>
            <p className="leading-relaxed">
              정부가 만든 시행령·시행규칙이 국회의 법률을 침범했을 때는, <strong>법원(최종적으로 대법원)</strong>이 심사하여 해당 규칙을 무효로 하거나 적용을 거부합니다.
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: Institutional Jurisdiction Comparison */}
      {activeTab === 'compare' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fadeIn">
          {/* Box 1: 헌법재판소 관할 (법률) */}
          <div className="p-6 rounded-3xl border-2 border-rose-200 bg-rose-50/60 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg bg-rose-600 text-white font-black text-xs">
                헌법재판소 관할
              </span>
              <span className="text-xs font-bold text-rose-700">위헌법률심판</span>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                국회가 만든 ‘법률’이 헌법을 위반했을 때
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                법률은 국민의 대표기관인 국회가 제정한 최고 규범이므로, 일반 법원이 스스로 없앨 수 없고 독립된 <strong>헌법재판소</strong>가 위헌 결정을 내려 효력을 완전히 상실시킵니다.
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-rose-200 text-xs font-semibold text-rose-950">
              📌 예시: 집회및시위에관한법률 제11조가 헌법상 집회의 자유를 침해하는지 심판
            </div>
          </div>

          {/* Box 2: 법원 관할 (명령·규칙) */}
          <div className="p-6 rounded-3xl border-2 border-sky-200 bg-sky-50/60 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg bg-sky-600 text-white font-black text-xs">
                법원 (최종: 대법원) 관할
              </span>
              <span className="text-xs font-bold text-sky-700">명령·규칙 심사권</span>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                정부가 만든 ‘대통령령·부령·규칙·조례’가 어긋날 때
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                행정부가 만든 시행령·시행규칙이나 지자체 조례가 상위 법률이나 헌법에 위반되는지는 <strong>법원</strong>이 구체적 재판에서 심사하며, 최종 심사 권한은 <strong>대법원</strong>에 있습니다.
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-sky-200 text-xs font-semibold text-sky-950">
              📌 예시: 공원관리 시행규칙이 모법의 위임 없이 청소년 출입을 금지했는지 심사
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Golden Exam Formula */}
      {activeTab === 'formula' && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl animate-fadeIn">
          <span className="text-xs font-black uppercase tracking-widest text-amber-200">
            시험 & 수능 필수 암기 공식
          </span>
          <div className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight tracking-tight">
            “국회의 <span className="underline decoration-white decoration-4">‘법률’</span>은 헌법재판소가,<br className="hidden sm:inline" />
            정부의 <span className="underline decoration-white decoration-4">‘명령·규칙’</span>은 법원(대법원)이 심사한다!”
          </div>

          <div className="p-4 rounded-2xl bg-black/20 border border-white/20 text-xs sm:text-sm space-y-1.5">
            <span className="text-amber-200 font-bold uppercase">헌법 제107조 제1항 vs 제2항</span>
            <p className="leading-relaxed">
              ① 법률의 위헌 여부 ➔ 법원의 제청에 의해 <strong>헌법재판소</strong>가 심판<br />
              ② 명령·규칙·처분의 위헌·위법 여부 ➔ <strong>대법원</strong>이 최종 심사
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
