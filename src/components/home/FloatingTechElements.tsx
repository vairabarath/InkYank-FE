import { motion } from "framer-motion";

const techIcons = [
  { icon: "🔗", name: "blockchain", color: "text-blue-400" },
  { icon: "🧠", name: "ai", color: "text-purple-400" },
  { icon: "🛡️", name: "security", color: "text-emerald-400" },
  { icon: "📊", name: "data", color: "text-blue-400" },
  { icon: "🤖", name: "bot", color: "text-purple-400" },
  { icon: "🔒", name: "lock", color: "text-emerald-400" },
];

export const FloatingTechElements = () => {
  return (
    <>
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute text-4xl ${item.color} opacity-60`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0.8,
          }}
          animate={{
            y: [null, (Math.random() - 0.5) * 100],
            x: [null, (Math.random() - 0.5) * 50],
            rotate: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
};
