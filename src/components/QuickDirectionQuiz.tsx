import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, HelpCircle, Bookmark } from 'lucide-react';

interface QuizItem {
  id: number;
  situationText: string;
  fromName: string;
  toName: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
  formalTerm: string;
}

const QUIZ_ITEMS: QuizItem[] = [
  {
    id: 1,
    situationText: '“국회가 정부의 예산 사용 내역을 꼼꼼하게 조사하고 감시한다.”',
    fromName: '국회',
    toName: '정부',
    correctAnswer: '국회 ➔ 정부',
    options: ['국회 ➔ 정부', '정부 ➔ 국회', '법원 ➔ 정부', '정부 ➔ 법원'],
    explanation: '국민의 세금이 올바르게 쓰였는지 국민의 대표인 국회가 정부를 감시합니다.',
    formalTerm: '국정감사 · 국정조사',
  },
  {
    id: 2,
    situationText: '“대통령이 국회가 의결해 보낸 법률안에 문제가 있다며 다시 논의해 달라고 요구한다.”',
    fromName: '정부',
    toName: '국회',
    correctAnswer: '정부 ➔ 국회',
    options: ['정부 ➔ 국회', '국회 ➔ 정부', '법원 ➔ 국회', '국회 ➔ 법원'],
    explanation: '대통령(행정부)이 국회의 무리한 법률안 제정에 대해 재의(다시 논의)를 요구하는 핵심 견제 장치입니다.',
    formalTerm: '법률안 재의요구권 (거부권)',
  },
  {
    id: 3,
    situationText: '“재판 중 적용할 법률이 헌법에 어긋나는 것 같다고 판사가 의심했다. 법원의 행동은?”',
    fromName: '법원',
    toName: '국회 (헌재 경유)',
    correctAnswer: '법원 ➔ 헌법재판소에 제청',
    options: [
      '법원 ➔ 헌법재판소에 제청',
      '법원이 그 자리에서 법률을 직접 폐기',
      '법원이 정부에 시행령 수정을 요청',
    ],
    explanation: '법원은 직접 법률을 없앨 수 없으며, 헌법재판소에 위헌 심판을 청구(제청)합니다.',
    formalTerm: '위헌법률심판 제청권 (★ 법원은 의심하고, 헌재가 판단!)',
  },
  {
    id: 4,
    situationText: '“정부가 만든 시행령(명령·규칙)이 국회 법률보다 국민 권리를 더 크게 침해하고 있다. 어디서 심사할까?”',
    fromName: '법원',
    toName: '정부',
    correctAnswer: '법원 (최종 대법원)',
    options: ['법원 (최종 대법원)', '헌법재판소', '대통령실', '국회 감사처'],
    explanation: '정부의 명령·규칙·처분이 법에 위반되는지는 법원(최종 대법원)이 심사합니다.',
    formalTerm: '명령·규칙 심사권 (★ 법률은 헌재, 명령·규칙은 법원!)',
  },
  {
    id: 5,
    situationText: '“구청이 내린 3개월 영업정지 처분이 억울하다며 식당 주인이 취소를 요구했다. 어디로 가야 할까?”',
    fromName: '법원',
    toName: '정부',
    correctAnswer: '법원 (행정소송)',
    options: ['법원 (행정소송)', '국회 입법조사처', '경찰서', '헌법재판소'],
    explanation: '행정기관(정부)이 국민에게 내린 구체적인 처분이 법에 맞는지 법원이 행정재판으로 심사합니다.',
    formalTerm: '행정소송 / 처분 심사권',
  },
];

export const QuickDirectionQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [checkedStatus, setCheckedStatus] = useState<Record<number, boolean>>({});

  const currentQuiz = QUIZ_ITEMS[currentIndex];
  const selectedOpt = selectedAnswers[currentQuiz.id];
  const isChecked = checkedStatus[currentQuiz.id];

  const handleSelect = (opt: string) => {
    if (isChecked) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentQuiz.id]: opt }));
  };

  const handleCheck = () => {
    if (!selectedOpt) return;
    setCheckedStatus((prev) => ({ ...prev, [currentQuiz.id]: true }));
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_ITEMS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-stone-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-900 text-xs font-bold">
            빠른 견제 방향 맞히기
          </span>
          <span className="text-xs font-bold text-stone-700">
            사건 {currentIndex + 1} / {QUIZ_ITEMS.length}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {QUIZ_ITEMS.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-7 h-7 rounded-xl text-xs font-black transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'bg-stone-900 text-white'
                  : checkedStatus[q.id]
                  ? 'bg-emerald-100 text-emerald-900'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Situation Card */}
      <div className="space-y-4 max-w-3xl mx-auto">
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-1">
          <span className="text-xs font-bold text-stone-700 uppercase">
            사건 상황 제시
          </span>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 leading-snug">
            {currentQuiz.situationText}
          </h3>
        </div>

        {/* Large Option Cards */}
        <div className="grid grid-cols-1 gap-2.5">
          {currentQuiz.options.map((opt, i) => {
            const isSelected = selectedOpt === opt;
            const isCorrect = opt === currentQuiz.correctAnswer;

            let btnStyle = 'border-stone-200 bg-stone-50/70 hover:bg-stone-100 text-stone-800';
            if (isSelected) {
              if (!isChecked) {
                btnStyle = 'border-stone-900 bg-stone-100 text-stone-950 font-black ring-2 ring-stone-900/10';
              } else if (isCorrect) {
                btnStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-black';
              } else {
                btnStyle = 'border-rose-300 bg-rose-50 text-rose-900';
              }
            } else if (isChecked && isCorrect) {
              btnStyle = 'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-black';
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(opt)}
                disabled={isChecked}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-sm sm:text-base cursor-pointer ${btnStyle}`}
              >
                <span>{opt}</span>
                {isChecked && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isChecked && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Check Button */}
        {!isChecked ? (
          <div className="flex justify-center pt-2">
            <button
              onClick={handleCheck}
              disabled={!selectedOpt}
              className={`px-8 py-3 rounded-2xl font-black text-sm sm:text-base transition-all shadow-xs ${
                selectedOpt
                  ? 'bg-stone-900 hover:bg-stone-800 text-white cursor-pointer active:scale-95'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              판정 보기
            </button>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-1.5 text-xs font-black text-indigo-900">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>정식 헌법 수단: {currentQuiz.formalTerm}</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
              {currentQuiz.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-stone-100 max-w-3xl mx-auto">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-100 text-stone-700 hover:bg-stone-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          이전 사건
        </button>

        <span className="text-xs text-stone-700 font-bold">
          {Object.keys(checkedStatus).length} / {QUIZ_ITEMS.length} 확인 완료
        </span>

        <button
          onClick={handleNext}
          disabled={currentIndex === QUIZ_ITEMS.length - 1}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
        >
          <span>다음 사건</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
