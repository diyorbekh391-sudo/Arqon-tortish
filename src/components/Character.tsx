import { motion } from 'motion/react';

interface CharacterProps {
  gender: 'boy' | 'girl';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Character = ({ gender, size = 'md', className = "" }: CharacterProps) => {
  const sizeClass = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  }[size];

  if (gender === 'boy') {
    return (
      <motion.div 
        whileHover={{ y: -5, scale: 1.05 }}
        className={`relative ${sizeClass} ${className} flex items-center justify-center`}
      >
        {/* Boy Character Simplified 3D Look */}
        <div className="relative w-full h-full bg-blue-400 rounded-full shadow-2xl flex items-center justify-center overflow-visible border-4 border-blue-500/50">
          {/* Doppie (National Cap) */}
          <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[90%] h-[35%] bg-zinc-900 rounded-t-lg z-10 border-b-2 border-zinc-700 shadow-lg flex items-center justify-center">
             {/* Doppie pattern */}
             <div className="w-full h-full opacity-30 flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-4 gap-1 w-full h-full rotate-45 scale-150">
                   {[...Array(16)].map((_, i) => <div key={i} className="w-2 h-2 bg-white" />)}
                </div>
             </div>
          </div>
          
          {/* Face Elements */}
          <div className="flex gap-4 mb-2">
            <div className="w-4 h-4 bg-zinc-800 rounded-full" />
            <div className="w-4 h-4 bg-zinc-800 rounded-full" />
          </div>
          <div className="absolute bottom-6 w-8 h-4 border-b-4 border-zinc-800 rounded-full" />
          
          {/* Body */}
          <div className="absolute -bottom-8 w-[80%] h-[40%] bg-blue-600 rounded-2xl -z-10 shadow-lg" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.05 }}
      className={`relative ${sizeClass} ${className} flex items-center justify-center`}
    >
      {/* Girl Character simplified 3D look with milliy libos */}
      <div className="relative w-full h-full bg-pink-300 rounded-full shadow-2xl flex items-center justify-center overflow-visible border-4 border-pink-400/50">
        {/* Traditional Headband/Decoration */}
        <div className="absolute -top-[5%] left-1/2 -translate-x-1/2 w-[100%] h-[20%] bg-gradient-to-r from-red-500 via-amber-400 to-red-500 rounded-full z-10 shadow-md" />
        
        {/* Face Elements */}
        <div className="flex gap-4 mb-2">
          <div className="w-4 h-4 bg-zinc-800 rounded-full" />
          <div className="w-4 h-4 bg-zinc-800 rounded-full" />
        </div>
        <div className="absolute bottom-6 w-8 h-4 border-b-4 border-zinc-800 rounded-full" />

        {/* Milli Libos Body (Dress) */}
        <div className="absolute -bottom-10 w-[90%] h-[60%] bg-pink-500 rounded-2xl -z-10 shadow-lg border-b-4 border-red-600 overflow-hidden">
           {/* Pattern */}
           <div className="w-full h-full opacity-40 bg-[radial-gradient(circle_at_center,_#fffa_1px,_transparent_1px)] bg-[size:16px_16px]" />
        </div>
      </div>
    </motion.div>
  );
};
