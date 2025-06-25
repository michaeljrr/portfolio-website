'use client';

import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export const TypingEffect = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  cursorClassName = '',
  showCursor = true,
  onComplete
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {showCursor && (
        <motion.span
          className={`inline-block ml-1 ${cursorClassName}`}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

// Multi-text typing effect with rotation
interface MultiTypingEffectProps {
  texts: string[];
  speed?: number;
  delayBetween?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
  loop?: boolean;
}

export const MultiTypingEffect = ({
  texts,
  speed = 50,
  delayBetween = 1000,
  pauseTime = 2000,
  className = '',
  cursorClassName = '',
  loop = true
}: MultiTypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && currentCharIndex < currentText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Pause before deleting
      setIsPaused(true);
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      const nextIndex = loop 
        ? (currentTextIndex + 1) % texts.length 
        : Math.min(currentTextIndex + 1, texts.length - 1);
      
      const timeout = setTimeout(() => {
        setCurrentTextIndex(nextIndex);
      }, delayBetween);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentTextIndex, isDeleting, isPaused, texts, speed, delayBetween, pauseTime, loop]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      <motion.span
        className={`inline-block ml-1 ${cursorClassName}`}
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        |
      </motion.span>
    </span>
  );
};

// Framer Motion letter-by-letter animation
interface AnimatedTypingProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const AnimatedTyping = ({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 0.05 
}: AnimatedTypingProps) => {
  const letters = text.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Example usage component
const TypingEffectDemo = () => {
  const [showSecondText, setShowSecondText] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Simple Typing Effect */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Simple Typing Effect</h2>
          <TypingEffect
            text="Hello, I'm a Frontend Developer!"
            speed={100}
            className="text-4xl font-bold text-blue-400"
            cursorClassName="text-blue-400"
            onComplete={() => setShowSecondText(true)}
          />
        </div>

        {/* Second text appears after first completes */}
        {showSecondText && (
          <div className="mb-8">
            <TypingEffect
              text="Welcome to my portfolio"
              speed={80}
              delay={500}
              className="text-2xl text-gray-300"
              cursorClassName="text-gray-300"
            />
          </div>
        )}

        {/* Multi-text Rotating Effect */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Rotating Text Effect</h2>
          <div className="text-3xl font-bold text-green-400">
            I'm a{' '}
            <MultiTypingEffect
              texts={['Developer', 'Designer', 'Creator', 'Problem Solver']}
              speed={100}
              pauseTime={2000}
              className="text-green-400"
              cursorClassName="text-green-400"
            />
          </div>
        </div>

        {/* Animated Letter-by-Letter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Animated Letters</h2>
          <AnimatedTyping
            text="Beautiful Animations"
            className="text-4xl font-bold text-purple-400"
            delay={0.5}
            duration={0.1}
          />
        </div>

      </div>
    </div>
  );
};

