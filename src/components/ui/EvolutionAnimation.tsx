import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { RefObject, useEffect } from "react";

interface Props {
  targetRef: RefObject<HTMLDivElement>;
  onComplete: () => void;
}

const EvolutionAnimation = ({ targetRef, onComplete }: Props) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const maxScroll = useMotionValue(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > maxScroll.get()) {
        maxScroll.set(latest);
      }
      if (latest > 0.9) {
        onComplete();
      }
    });
  }, [scrollYProgress, maxScroll, onComplete]);

  const clipPath = useTransform(
    maxScroll,
    [0.2, 0.8],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );

  return (
    <motion.div style={{ clipPath }} className="w-full">
      <img
        src="/human.png"
        alt="Evolution of Human and AI"
        className="rounded-lg w-full "
      />
    </motion.div>
  );
};

export default EvolutionAnimation;
