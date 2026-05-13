import { motion } from 'motion/react';
import { Character } from './Character';
import { PlayerProfile } from '../hooks/useMathGame';

interface TugOfWarProps {
  score: number;
  winScore: number;
  player1: PlayerProfile;
  player2: PlayerProfile;
}

export const TugOfWar = ({ score, winScore, player1, player2 }: TugOfWarProps) => {
  // Normalize score to percentage (-winScore to +winScore -> 0 to 100)
  const percentage = ((score + winScore) / (winScore * 2)) * 100;

  return (
    <div className="relative w-full h-64 flex items-center justify-center bg-emerald-50 rounded-3xl overflow-hidden border-4 border-emerald-200 shadow-inner">
      {/* Grass/Field markings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="w-2 h-full bg-emerald-300 opacity-50" />
         <div className="absolute w-full h-1 bg-emerald-300 top-1/2 -translate-y-1/2 opacity-20" />
      </div>

      {/* Rope */}
      <div className="absolute w-full h-4 bg-amber-800 top-1/2 -translate-y-1/2 flex items-center shadow-lg border-y border-amber-900/20">
        {/* Knot/Marker */}
        <motion.div 
          className="absolute w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-xl z-30"
          animate={{ left: `${percentage}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          style={{ transform: 'translateX(-50%)' }}
        />
      </div>

      {/* Characters */}
      <div className="flex justify-between w-full px-4 md:px-12 z-20 relative h-full items-center">
        {/* Player Left */}
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ 
            x: score * 10,
            rotate: score < 0 ? -2 : 0
          }}
        >
          <Character gender={player1.gender} size="md" />
          <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md border-2 border-blue-100 mt-4">
            <p className="font-black text-blue-700 text-sm md:text-base uppercase tracking-wider">{player1.name}</p>
          </div>
        </motion.div>

        {/* Player Right */}
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ 
            x: score * 10,
            rotate: score > 0 ? 2 : 0
          }}
        >
          <Character gender={player2.gender} size="md" />
          <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md border-2 border-pink-100 mt-4">
            <p className="font-black text-pink-700 text-sm md:text-base uppercase tracking-wider">{player2.name}</p>
          </div>
        </motion.div>
      </div>

      {/* Center Marker Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-red-400 opacity-30 z-10" />
    </div>
  );
};
