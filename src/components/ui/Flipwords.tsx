import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string | string[];
  duration?: number;
  className?: string;
}) => {
  // Normalize input to always be an array
  const wordsArray = Array.isArray(words) ? words : [words];
  const shouldAnimate = wordsArray.length > 1;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % wordsArray.length);
        setIsAnimating(false);
      }, 1000); // Matches exit animation duration
    }, duration);

    return () => clearInterval(interval);
  }, [wordsArray.length, duration, shouldAnimate]);

  const renderWord = (word: string) => (
    <>
      {word.split(" ").map((wordSegment, wordIndex) => (
        <motion.span
          key={`${currentWordIndex}-${wordIndex}`}
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: wordIndex * 0.3,
            duration: 0.3,
          }}
          className="inline-block whitespace-nowrap"
        >
          {wordSegment.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${currentWordIndex}-${wordIndex}-${letterIndex}`}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * 0.3 + letterIndex * 0.05,
                duration: 0.2,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
    </>
  );

  return (
    <div className="inline-block relative h-[1em]">
      {shouldAnimate ? (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -40,
              x: 40,
              filter: "blur(8px)",
              scale: 2,
              position: "absolute",
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className={cn("z-10 inline-block", className)}
            key={currentWordIndex}
          >
            {renderWord(wordsArray[currentWordIndex])}
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn("z-10 inline-block", className)}
        >
          {renderWord(wordsArray[0])}
        </motion.div>
      )}
    </div>
  );
};
