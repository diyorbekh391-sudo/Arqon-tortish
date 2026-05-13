/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useGameLogic } from './hooks/useMathGame';
import { TugOfWar } from './components/TugOfWar';
import { ProblemCard } from './components/ProblemCard';
import { SetupScreen } from './components/SetupScreen';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, RefreshCw } from 'lucide-react';

export default function App() {
  const { 
    gameState, 
    player1, 
    player2, 
    score, 
    leftProblem, 
    rightProblem, 
    winner, 
    handleAnswer, 
    resetGame, 
    startGame, 
    WIN_SCORE 
  } = useGameLogic();

  if (gameState === 'setup') {
    return <SetupScreen onStart={startGame} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans selection:bg-amber-200">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight drop-shadow-sm">
            MATEMATIK <span className="text-emerald-600">ARQON TORTISH</span>
          </h1>
          <p className="text-slate-500 font-medium md:text-lg">
            To'g'ri javobni toping va arqonni o'z tomoningizga torting!
          </p>
        </header>

        {/* Game Stage */}
        <TugOfWar score={score} winScore={WIN_SCORE} player1={player1} player2={player2} />

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <ProblemCard 
            title={player1.name} 
            color="blue" 
            problem={leftProblem} 
            onAnswer={(selected) => handleAnswer('left', selected)} 
          />
          
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full items-center justify-center font-black text-slate-300 border-2 border-slate-100 z-10 shadow-sm">
            VS
          </div>

          <ProblemCard 
            title={player2.name} 
            color="pink" 
            problem={rightProblem} 
            onAnswer={(selected) => handleAnswer('right', selected)} 
          />
        </div>

        {/* Instructions */}
        <footer className="text-center text-slate-400 text-sm">
          <p>Ikkala tomondan ham javoblarni belgilashingiz mumkin.</p>
          <p>Har bir to'g'ri javob markerni 1 qadam suradi.</p>
        </footer>
      </div>

      {/* Winner Modal */}
      <AnimatePresence>
        {winner && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border-b-8 border-emerald-100"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-amber-100 p-6 rounded-full">
                  <Trophy size={64} className="text-amber-500" />
                </div>
              </div>
              
              <h2 className="text-3xl font-black text-slate-900 mb-2">G'ALABA!</h2>
              <p className="text-slate-600 mb-8 font-medium">
                <span className="font-bold text-emerald-600">
                  {winner}
                </span> g'olib bo'ldi!
              </p>

              <button 
                onClick={resetGame}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg"
              >
                <RefreshCw size={20} />
                Yana o'ynash
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

