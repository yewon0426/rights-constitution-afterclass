import React, { useState } from 'react';
import { Radio, MessageCircle, Heart, Share2, AlertCircle, Sparkles, CheckCircle2, Flame, Send, ArrowRight } from 'lucide-react';

interface SocialNewsFeedProps {
  onOptionSelected?: (optionId: string) => void;
  onNext?: () => void;
}

export const SocialNewsFeed: React.FC<SocialNewsFeedProps> = ({ onOptionSelected, onNext }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(1420);

  const handleSelect = (id: string) => {
    if (!isAnswered) {
      setSelectedOption(id);
    }
  };

  const handleConfirm = () => {
    if (!selectedOption) return;
    setIsAnswered(true);
    if (onOptionSelected) onOptionSelected(selectedOption);
  };

  const toggleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
      setLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setLiked(true);
    }
  };

  return (
    <div className="space-y-5 animate-fadeIn">
      {/* SNS Breaking News Card (Social Feed Style) */}
      <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
        {/* SNS Header Bar */}
        <div className="bg-slate-950/80 px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center font-black text-xs text-white shadow-md">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-white">대한민국 뉴스 라이브</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] text-emerald-400 font-bold">실시간 속보</span>
              </div>
              <span className="text-[10px] text-slate-400">@korea_news_official · 방금 전</span>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[11px] font-black tracking-wider flex items-center gap-1">
            <Flame className="w-3 h-3 text-rose-400" /> 실시간 트렌드 1위
          </span>
        </div>

        {/* Post Content */}
        <div className="p-5 sm:p-7 space-y-4">
          <div className="space-y-2">
            <span className="inline-block px-2.5 py-1 rounded-md bg-rose-600 text-white text-xs font-black">
              [긴급 행정명령]
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug tracking-tight">
              “불꽃축제 때문에 전국 야외 집회를 다 막는다고?”
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              이번 주말 100만 명 인파 예상… 정부, 안전사고 예방 명분으로 <strong className="text-amber-300">전국 모든 옥외 집회 및 시위 전면 금지</strong> 긴급 행정명령 발표
            </p>
          </div>

          {/* Official Quote Box */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border-l-4 border-amber-400 text-xs sm:text-sm space-y-1">
            <span className="text-[11px] font-black text-amber-300 uppercase">정부 특별 발표문 요약</span>
            <p className="text-slate-200 font-medium italic">
              “시민 안전을 최우선으로 고려하여 이번 주말 동안 전국 일체의 옥외 집회를 불허합니다.”
            </p>
          </div>

          {/* Social Stats & Buttons */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLike}
                className={`flex items-center gap-1.5 font-bold transition-colors cursor-pointer ${
                  liked ? 'text-rose-400' : 'hover:text-slate-200'
                }`}
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-rose-400 text-rose-400' : ''}`} />
                <span>{likeCount.toLocaleString()}</span>
              </button>
              <div className="flex items-center gap-1.5 font-bold">
                <MessageCircle className="w-4 h-4" />
                <span>839개 댓글</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold">
                <Share2 className="w-4 h-4" />
                <span>3.2k 리포스트</span>
              </div>
            </div>
            <span className="text-[11px] text-slate-400">조회수 12.8만회</span>
          </div>
        </div>
      </div>

      {/* Messenger Dialogue Card (Kakao Style) */}
      <div className="bg-amber-50/70 border-2 border-amber-200/80 rounded-3xl p-5 sm:p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-amber-200/60 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-amber-400 text-slate-900 font-black text-xs flex items-center justify-center">
              💬
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                환경동아리 단톡방
              </h4>
              <span className="text-[10px] text-slate-700">민서, 나, 준호 (3명)</span>
            </div>
          </div>
          <span className="text-[10px] font-bold bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-full">
            LIVE CHAT
          </span>
        </div>

        {/* Chat Messages */}
        <div className="space-y-3">
          {/* Minseo Bubble 1 */}
          <div className="flex items-start gap-2 max-w-md">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
              민서
            </div>
            <div className="space-y-1">
              <span className="text-[11px] text-slate-700 font-bold">민서</span>
              <div className="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200 text-xs sm:text-sm text-slate-800 shadow-2xs font-medium">
                얘들아 속보 봤어? 우리 내일 동네 공원에서 조용히 기후위기 피켓 들기로 했는데…
              </div>
            </div>
          </div>

          {/* Minseo Bubble 2 */}
          <div className="flex items-start gap-2 max-w-md ml-10">
            <div className="space-y-1">
              <div className="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200 text-xs sm:text-sm text-slate-800 shadow-2xs font-medium">
                불꽃축제랑 우리 동네 공원은 <strong className="text-rose-600">10km나 떨어져 있는데</strong> 전국 집회를 다 막는 게 말이 돼? 😡
              </div>
            </div>
          </div>

          {/* My Bubble */}
          <div className="flex items-end justify-end gap-2 max-w-md ml-auto">
            <div className="space-y-1 text-right">
              <span className="text-[11px] text-slate-700 font-bold">나</span>
              <div className="bg-amber-300/90 p-3 rounded-2xl rounded-tr-xs text-xs sm:text-sm text-slate-900 shadow-2xs font-bold text-left">
                그러게… 안전도 중요하지만 평화로운 피켓 활동까지 다 막는 건 너무 과한 거 아니야?
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Big Intuitive Question & Response Buttons */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 space-y-5 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>생각해보기</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            너라면 이 정부 조치에 대해 어떻게 생각하니?
          </h3>
          <p className="text-xs text-slate-700 font-medium">
            한 지역 축제의 안전을 위해 전국의 모든 집회를 전면 금지한 상황입니다.
          </p>
        </div>

        {/* Selection Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <button
            onClick={() => handleSelect('safe_first')}
            className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              selectedOption === 'safe_first'
                ? 'border-indigo-600 bg-indigo-50/90 ring-2 ring-indigo-500/20 -translate-y-0.5 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:-translate-y-0.5'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-black px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                선택 A
              </span>
              {selectedOption === 'safe_first' && (
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              )}
            </div>
            <div className="font-extrabold text-slate-900 text-sm sm:text-base">
              “안전이 제일 중요하니 무조건 따라야 한다.”
            </div>
            <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
              사고가 나면 큰일이니 일단 다 막는 것이 안전하다
            </p>
          </button>

          <button
            onClick={() => handleSelect('too_extreme')}
            className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              selectedOption === 'too_extreme'
                ? 'border-indigo-600 bg-indigo-50/90 ring-2 ring-indigo-500/20 -translate-y-0.5 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:-translate-y-0.5'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-black px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                선택 B
              </span>
              {selectedOption === 'too_extreme' && (
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              )}
            </div>
            <div className="font-extrabold text-slate-900 text-sm sm:text-base">
              “아무리 안전 때문이라도 평화로운 피켓까지 다 막는 건 과하다.”
            </div>
            <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
              문제없는 집회까지 일률적으로 막는 것은 부당하다
            </p>
          </button>
        </div>

        {!isAnswered ? (
          <div className="flex justify-end pt-1">
            <button
              onClick={handleConfirm}
              disabled={!selectedOption}
              className={`px-7 py-3 rounded-2xl font-black text-sm sm:text-base transition-all shadow-sm flex items-center gap-1.5 ${
                selectedOption
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer active:scale-95 shadow-indigo-200'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>생각 확인하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Feedback Box */
          <div className="p-5 rounded-2xl bg-indigo-50/80 border-2 border-indigo-200 space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2 text-indigo-950 font-black text-sm">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              <span>좋아요. 헌법 기준으로 하나씩 따져봅시다!</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              우리의 자유는 매우 소중하지만, 다른 사람의 안전과 충돌할 때 국가가 제한할 수 있습니다. <strong>하지만 아무렇게나 막아서는 안 되며 엄격한 헌법적 기준을 지켜야 합니다.</strong>
            </p>

            <div className="p-4 rounded-xl bg-white border border-indigo-100 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black text-indigo-600 uppercase">
                  헌법 제37조 제2항의 질문
                </span>
                <span className="text-xs font-bold text-slate-700">기본권 제한의 한계</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                국가는 국민의 자유를 <span className="text-indigo-600">‘왜’</span>, <span className="text-amber-600">‘무엇으로’</span>, <span className="text-rose-600">‘어디까지’</span> 제한할 수 있을까요?
              </p>
            </div>

            {onNext && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={onNext}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <span>1단계: 기본권 제한 3대 GATE 통과하기</span>
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
