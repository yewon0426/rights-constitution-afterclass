import React from 'react';
import { Landmark, Building2, Gavel, Sparkles, AlertCircle } from 'lucide-react';

export type CharacterType = 'minseo' | 'assembly' | 'government' | 'court' | 'constcourt' | 'narrator';

interface ChatMessage {
  id: string;
  sender: CharacterType;
  name: string;
  role: string;
  avatarText: string;
  colorScheme: 'indigo' | 'amber' | 'blue' | 'rose' | 'slate';
  message: string;
  subText?: string;
  highlight?: boolean;
}

interface MessengerChatProps {
  messages: ChatMessage[];
  title?: string;
  activeSpeaker?: CharacterType;
}

const COLOR_MAP = {
  indigo: {
    badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    bubble: 'bg-indigo-50 border-indigo-200 text-slate-800',
    avatar: 'bg-indigo-600 text-white',
    iconColor: 'text-indigo-600',
  },
  amber: {
    badge: 'bg-amber-100 text-amber-900 border-amber-200',
    bubble: 'bg-amber-50 border-amber-200 text-slate-800',
    avatar: 'bg-amber-600 text-white',
    iconColor: 'text-amber-600',
  },
  blue: {
    badge: 'bg-sky-100 text-sky-800 border-sky-200',
    bubble: 'bg-sky-50 border-sky-200 text-slate-800',
    avatar: 'bg-sky-600 text-white',
    iconColor: 'text-sky-600',
  },
  rose: {
    badge: 'bg-rose-100 text-rose-800 border-rose-200',
    bubble: 'bg-rose-50 border-rose-200 text-slate-800',
    avatar: 'bg-rose-600 text-white',
    iconColor: 'text-rose-600',
  },
  slate: {
    badge: 'bg-slate-100 text-slate-700 border-slate-200',
    bubble: 'bg-white border-slate-200 text-slate-800',
    avatar: 'bg-slate-700 text-white',
    iconColor: 'text-slate-600',
  },
};

export const MessengerChat: React.FC<MessengerChatProps> = ({
  messages,
  title = '생생한 대화로 보는 현장',
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-5 space-y-3.5">
      {title && (
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            {title}
          </span>
          <span className="text-[11px] text-slate-700 font-medium">메신저 토크</span>
        </div>
      )}

      <div className="space-y-3">
        {messages.map((msg) => {
          const colors = COLOR_MAP[msg.colorScheme] || COLOR_MAP.slate;
          const isMinseo = msg.sender === 'minseo';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isMinseo ? 'flex-row' : 'flex-row'}`}
            >
              {/* Avatar Icon */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 shadow-xs ${colors.avatar}`}
              >
                {msg.avatarText}
              </div>

              {/* Message Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs font-bold text-slate-900">{msg.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-semibold border ${colors.badge}`}
                  >
                    {msg.role}
                  </span>
                </div>

                <div
                  className={`p-3 rounded-2xl border text-xs sm:text-sm font-medium leading-relaxed inline-block max-w-full shadow-xs ${colors.bubble}`}
                >
                  <p className="whitespace-pre-line text-slate-800">{msg.message}</p>
                  {msg.subText && (
                    <div className="mt-1.5 pt-1.5 border-t border-slate-200/60 text-[11px] text-slate-700 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-slate-700 shrink-0" />
                      <span>{msg.subText}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
