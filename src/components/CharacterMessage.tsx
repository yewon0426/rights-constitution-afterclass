import React from 'react';
import { MessageSquareQuote, HelpCircle, Lightbulb } from 'lucide-react';

interface CharacterMessageProps {
  name?: string;
  role?: string;
  avatarText?: string;
  avatarBg?: string;
  mood?: 'curious' | 'surprised' | 'enlightened' | 'questioning';
  children: React.ReactNode;
  highlight?: string;
}

export const CharacterMessage: React.FC<CharacterMessageProps> = ({
  name = '학생 민서',
  role = '고1 질문왕',
  avatarText = '민서',
  avatarBg = 'bg-amber-500',
  mood = 'curious',
  children,
  highlight,
}) => {
  const getIcon = () => {
    switch (mood) {
      case 'enlightened':
        return <Lightbulb className="w-4 h-4 text-amber-600" />;
      case 'surprised':
        return <HelpCircle className="w-4 h-4 text-rose-600" />;
      default:
        return <MessageSquareQuote className="w-4 h-4 text-indigo-600" />;
    }
  };

  return (
    <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-xs">
      <div className="flex flex-col items-center shrink-0">
        <div
          className={`w-12 h-12 rounded-full ${avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm ring-2 ring-white`}
        >
          {avatarText}
        </div>
        <span className="text-[11px] font-semibold text-slate-700 mt-1">{name}</span>
        <span className="text-[9px] text-slate-700">{role}</span>
      </div>

      <div className="flex-1 min-w-0 pt-0.5">
        <div className="flex items-center gap-1.5 mb-1.5">
          {getIcon()}
          <span className="text-xs font-bold text-amber-900 tracking-wide">
            {mood === 'enlightened' ? '깨달음 포인트' : '함께 고민해 볼 질문'}
          </span>
        </div>

        <div className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
          {children}
        </div>

        {highlight && (
          <div className="mt-2.5 inline-block px-3 py-1 bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold rounded-lg">
            {highlight}
          </div>
        )}
      </div>
    </div>
  );
};
