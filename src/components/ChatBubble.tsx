import React from 'react';
import { Landmark, Building2, Gavel, Scale, User } from 'lucide-react';

export type SpeakerType = 'minseo' | 'assembly' | 'government' | 'court' | 'const_court' | 'citizen';

interface ChatBubbleProps {
  speaker: SpeakerType;
  customName?: string;
  message: string | React.ReactNode;
  subtitle?: string;
  isRight?: boolean;
}

const SPEAKER_CONFIGS: Record<
  SpeakerType,
  {
    name: string;
    role: string;
    avatarBg: string;
    badgeBg: string;
    badgeText: string;
    bubbleBg: string;
    bubbleBorder: string;
    textColor: string;
    icon: React.ReactNode;
  }
> = {
  minseo: {
    name: '민서',
    role: '고1 학생',
    avatarBg: 'bg-amber-500 text-white',
    badgeBg: 'bg-amber-100 text-amber-900',
    badgeText: '학생 질문',
    bubbleBg: 'bg-amber-50/80',
    bubbleBorder: 'border-amber-200',
    textColor: 'text-amber-950',
    icon: <User className="w-4 h-4" />,
  },
  assembly: {
    name: '국회',
    role: '입법부 · 법을 만든다',
    avatarBg: 'bg-purple-600 text-white',
    badgeBg: 'bg-purple-100 text-purple-900',
    badgeText: '입법부',
    bubbleBg: 'bg-purple-50/80',
    bubbleBorder: 'border-purple-200',
    textColor: 'text-purple-950',
    icon: <Landmark className="w-4 h-4" />,
  },
  government: {
    name: '정부',
    role: '행정부 · 법을 실행한다',
    avatarBg: 'bg-orange-500 text-white',
    badgeBg: 'bg-orange-100 text-orange-900',
    badgeText: '행정부',
    bubbleBg: 'bg-orange-50/80',
    bubbleBorder: 'border-orange-200',
    textColor: 'text-orange-950',
    icon: <Building2 className="w-4 h-4" />,
  },
  court: {
    name: '법원',
    role: '사법부 · 재판한다',
    avatarBg: 'bg-sky-600 text-white',
    badgeBg: 'bg-sky-100 text-sky-900',
    badgeText: '사법부',
    bubbleBg: 'bg-sky-50/80',
    bubbleBorder: 'border-sky-200',
    textColor: 'text-sky-950',
    icon: <Gavel className="w-4 h-4" />,
  },
  const_court: {
    name: '헌법재판소',
    role: '독립 헌법기관 · 위헌 심판',
    avatarBg: 'bg-rose-700 text-white',
    badgeBg: 'bg-rose-100 text-rose-900',
    badgeText: '헌재',
    bubbleBg: 'bg-rose-50/80',
    bubbleBorder: 'border-rose-200',
    textColor: 'text-rose-950',
    icon: <Scale className="w-4 h-4" />,
  },
  citizen: {
    name: '시민',
    role: '국민',
    avatarBg: 'bg-emerald-600 text-white',
    badgeBg: 'bg-emerald-100 text-emerald-900',
    badgeText: '시민',
    bubbleBg: 'bg-emerald-50/80',
    bubbleBorder: 'border-emerald-200',
    textColor: 'text-emerald-950',
    icon: <User className="w-4 h-4" />,
  },
};

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  speaker,
  customName,
  message,
  subtitle,
  isRight = false,
}) => {
  const config = SPEAKER_CONFIGS[speaker] || SPEAKER_CONFIGS.minseo;
  const displayName = customName || config.name;

  return (
    <div
      className={`flex items-start gap-3 my-3 max-w-2xl ${
        isRight ? 'ml-auto flex-row-reverse' : 'mr-auto'
      }`}
    >
      {/* Avatar */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold shadow-xs ${config.avatarBg}`}
        >
          {config.icon}
        </div>
        <span className="text-[11px] font-bold text-stone-700 mt-1">
          {displayName}
        </span>
      </div>

      {/* Speech Bubble */}
      <div className="flex flex-col min-w-0 max-w-[85%]">
        <div className="flex items-center gap-1.5 mb-1 px-1">
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${config.badgeBg}`}
          >
            {config.badgeText}
          </span>
          {subtitle && (
            <span className="text-[11px] text-stone-700 font-medium">
              {subtitle}
            </span>
          )}
        </div>

        <div
          className={`px-4 py-3 rounded-2xl border text-sm sm:text-base leading-relaxed font-medium shadow-xs ${
            config.bubbleBg
          } ${config.bubbleBorder} ${config.textColor} ${
            isRight ? 'rounded-tr-xs' : 'rounded-tl-xs'
          }`}
        >
          {typeof message === 'string' ? (
            <p className="whitespace-pre-line">{message}</p>
          ) : (
            message
          )}
        </div>
      </div>
    </div>
  );
};
