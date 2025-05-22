import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.05 },
  }),
};

const AnimatedText = ({ text, color }: { text: string; color?: string }) => {
  const textColor = color === "blue" ? "text-blue" : "text-gray-700";
  return (
    <span className={textColor}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedText;
