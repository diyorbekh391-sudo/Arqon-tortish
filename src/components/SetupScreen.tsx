import { useState } from 'react';
import { PlayerProfile } from '../hooks/useMathGame';
import { Character } from './Character';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface SetupScreenProps {
  onStart: (p1: PlayerProfile, p2: PlayerProfile) => void;
}

export const SetupScreen = ({ onStart }: SetupScreenProps) => {
  const [p1, setP1] = useState<PlayerProfile>({ name: '', gender: 'boy' });
  const [p2, setP2] = useState<PlayerProfile>({ name: '', gender: 'girl' });

  const isValid = p1.name.trim().length > 0 && p2.name.trim().length > 0;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-100">
      <div className="max-w-4xl w-full bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border-b-8 border-slate-200">
        <header className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block bg-amber-100 text-amber-700 p-3 rounded-2xl mb-4"
          >
            <Sparkles size={32} />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">O'YINNI SOZLASH</h1>
          <p className="text-slate-500 font-medium">Ismlaringizni kiriting va qahramoningizni tanlang!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Player 1 Setup */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-blue-600 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">1</div>
              1-O'yinchi
            </h2>
            
            <div className="flex flex-col items-center gap-6 p-6 bg-blue-50 rounded-3xl border-2 border-blue-100">
              <Character gender={p1.gender} size="md" />
              
              <div className="flex bg-white p-1 rounded-xl shadow-sm border border-blue-200 w-full">
                <button 
                  onClick={() => setP1(prev => ({ ...prev, gender: 'boy' }))}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${p1.gender === 'boy' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-blue-500'}`}
                >
                  O'g'il bola
                </button>
                <button 
                  onClick={() => setP1(prev => ({ ...prev, gender: 'girl' }))}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${p1.gender === 'girl' ? 'bg-pink-600 text-white shadow-md' : 'text-slate-400 hover:text-pink-500'}`}
                >
                  Qiz bola
                </button>
              </div>

              <input 
                type="text"
                placeholder="Ismingiz..."
                value={p1.name}
                onChange={(e) => setP1(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-4 bg-white rounded-xl border-2 border-blue-200 outline-none focus:border-blue-500 font-bold text-lg text-slate-800 transition-all"
              />
            </div>
          </div>

          {/* Player 2 Setup */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-pink-600 flex items-center gap-2">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">2</div>
              2-O'yinchi
            </h2>
            
            <div className="flex flex-col items-center gap-6 p-6 bg-pink-50 rounded-3xl border-2 border-pink-100">
              <Character gender={p2.gender} size="md" />
              
              <div className="flex bg-white p-1 rounded-xl shadow-sm border border-pink-200 w-full">
                <button 
                  onClick={() => setP2(prev => ({ ...prev, gender: 'boy' }))}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${p2.gender === 'boy' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-blue-500'}`}
                >
                  O'g'il bola
                </button>
                <button 
                  onClick={() => setP2(prev => ({ ...prev, gender: 'girl' }))}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${p2.gender === 'girl' ? 'bg-pink-600 text-white shadow-md' : 'text-slate-400 hover:text-pink-500'}`}
                >
                  Qiz bola
                </button>
              </div>

              <input 
                type="text"
                placeholder="Ismingiz..."
                value={p2.name}
                onChange={(e) => setP2(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-4 bg-white rounded-xl border-2 border-pink-200 outline-none focus:border-pink-500 font-bold text-lg text-slate-800 transition-all"
              />
            </div>
          </div>
        </div>

        <button 
          disabled={!isValid}
          onClick={() => onStart(p1, p2)}
          className={`w-full py-6 rounded-2xl font-black text-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 ${isValid ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-2xl' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
        >
          O'YINNI BOSHLASH
          <ArrowRight size={28} />
        </button>
      </div>
    </div>
  );
};
