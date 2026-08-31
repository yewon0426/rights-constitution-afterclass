import React from 'react';
import { Radio, AlertCircle, Sparkles } from 'lucide-react';
import { ChatBubble } from './ChatBubble';

interface BreakingNewsProps {
  headline: string;
  subHeadline?: string;
  location?: string;
  time?: string;
  officialAnnouncement?: string;
  announcer?: string;
  minseoReaction?: string;
}

export const BreakingNews: React.FC<BreakingNewsProps> = ({
  headline,
  subHeadline,
  location = '도심 불꽃축제 현장',
  time = '이번 주말',
  officialAnnouncement,
  announcer = '정부 긴급 발표',
  minseoReaction,
}) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden space-y-0">
      {/* Red Alert Header Strip */}
      <div className="bg-rose-600 px-5 py-2.5 flex items-center justify-between text-white flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span className="font-black tracking-wider text-xs uppercase flex items-center gap-1.5">
            <Radio className="w-4 h-4" /> BREAKING NEWS 긴급 속보
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-rose-100 font-bold">
          <span>📍 {location}</span>
          <span>⏱️ {time}</span>
        </div>
      </div>

      {/* Main News Body */}
      <div className="p-6 sm:p-8 space-y-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold">
            <AlertCircle className="w-3.5 h-3.5" /> 특보 브리핑
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
            {headline}
          </h2>
          {subHeadline && (
            <p className="text-sm sm:text-base text-stone-700 font-medium leading-relaxed">
              {subHeadline}
            </p>
          )}
        </div>

        {/* Government Official Announcement */}
        {officialAnnouncement && (
          <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-1">
            <ChatBubble
              speaker="government"
              customName={announcer}
              message={`“${officialAnnouncement}”`}
              subtitle="정부 긴급 행정명령 발표"
            />
          </div>
        )}

        {/* Minseo Reaction Chat */}
        {minseoReaction && (
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
            <ChatBubble
              speaker="minseo"
              message={`“${minseoReaction}”`}
              subtitle="사건을 접한 민서의 의문"
            />
          </div>
        )}
      </div>

      {/* News Bottom Banner */}
      <div className="bg-stone-100 px-5 py-2.5 border-t border-stone-200 text-xs text-stone-700 flex items-center gap-2">
        <span className="bg-rose-600 text-white px-2 py-0.5 rounded text-[10px] font-black shrink-0">
          핵심 쟁점
        </span>
        <span className="truncate font-semibold">
          안전 확보를 위한 조치 vs 국민의 기본권 과잉 침해 논란 확산
        </span>
      </div>
    </div>
  );
};
