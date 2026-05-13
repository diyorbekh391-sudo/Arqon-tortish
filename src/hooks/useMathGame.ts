import { useState, useCallback, useEffect } from 'react';

export type MathProblem = {
  question: string;
  answer: number;
  options: number[];
};

export const generateProblem = (difficulty: number = 1): MathProblem => {
  const op = Math.random() > 0.5 ? '+' : '-';
  const range = difficulty * 10;
  const a = Math.floor(Math.random() * range) + 1;
  const b = Math.floor(Math.random() * range) + 1;
  
  let question = "";
  let answer = 0;
  
  if (op === '+') {
    question = `${a} + ${b}`;
    answer = a + b;
  } else {
    // Ensure positive results for subtraction
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    question = `${max} - ${min}`;
    answer = max - min;
  }
  
  // Generate 3 options
  const options = new Set<number>([answer]);
  while (options.size < 3) {
    const offset = Math.floor(Math.random() * 5) + 1;
    const sign = Math.random() > 0.5 ? 1 : -1;
    const fake = Math.max(0, answer + offset * sign);
    if (fake !== answer) {
      options.add(fake);
    }
  }
  
  return {
    question,
    answer,
    options: Array.from(options).sort(() => Math.random() - 0.5),
  };
};

export type PlayerProfile = {
  name: string;
  gender: 'boy' | 'girl';
};

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<'setup' | 'playing'>('setup');
  const [player1, setPlayer1] = useState<PlayerProfile>({ name: "1-O'yinchi", gender: 'boy' });
  const [player2, setPlayer2] = useState<PlayerProfile>({ name: "2-O'yinchi", gender: 'girl' });
  const [score, setScore] = useState(0); // 0 is middle, negative is left pull, positive is right pull
  const [leftProblem, setLeftProblem] = useState<MathProblem>(generateProblem());
  const [rightProblem, setRightProblem] = useState<MathProblem>(generateProblem());
  const [winner, setWinner] = useState<string | null>(null);
  
  const WIN_SCORE = 10;

  const startGame = (p1: PlayerProfile, p2: PlayerProfile) => {
    setPlayer1(p1);
    setPlayer2(p2);
    setGameState('playing');
  };

  const handleAnswer = (side: 'left' | 'right', selected: number) => {
    if (winner) return;

    if (side === 'left') {
      if (selected === leftProblem.answer) {
        setScore(prev => {
          const next = prev - 1;
          if (next <= -WIN_SCORE) setWinner(player1.name);
          return next;
        });
        setLeftProblem(generateProblem());
      }
    } else {
      if (selected === rightProblem.answer) {
        setScore(prev => {
          const next = prev + 1;
          if (next >= WIN_SCORE) setWinner(player2.name);
          return next;
        });
        setRightProblem(generateProblem());
      }
    }
  };

  const resetGame = () => {
    setScore(0);
    setWinner(null);
    setGameState('setup');
    setLeftProblem(generateProblem());
    setRightProblem(generateProblem());
  };

  return {
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
  };
};
