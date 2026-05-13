import { MathProblem } from '../hooks/useMathGame';

interface ProblemCardProps {
  problem: MathProblem;
  onAnswer: (selected: number) => void;
  color: 'blue' | 'pink';
  title: string;
}

export const ProblemCard = ({ problem, onAnswer, color, title }: ProblemCardProps) => {
  const bgColor = color === 'blue' ? 'bg-blue-50 border-blue-200' : 'bg-pink-50 border-pink-200';
  const textColor = color === 'blue' ? 'text-blue-800' : 'text-pink-800';
  const btnColor = color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700';

  return (
    <div className={`flex-1 p-6 rounded-2xl border-4 ${bgColor} flex flex-col items-center shadow-lg transition-transform hover:scale-[1.02]`}>
      <h3 className={`text-xl font-black mb-4 uppercase tracking-tighter ${textColor}`}>{title}</h3>
      
      <div className={`text-5xl font-black mb-8 p-6 bg-white rounded-xl shadow-inner ${textColor} border-2 border-black/5`}>
        {problem.question} = ?
      </div>

      <div className="grid grid-cols-1 gap-3 w-full">
        {problem.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onAnswer(opt)}
            className={`w-full py-4 text-2xl font-bold text-white rounded-xl shadow-md transform active:scale-95 transition-all ${btnColor}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};
