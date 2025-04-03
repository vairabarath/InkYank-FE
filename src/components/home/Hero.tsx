import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import blockchainAnimation from "../../animations/blockchain.json";
import aiAnimation from "../../animations/ai.json";
import cyberAnimation from "../../animations/cyber.json";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<"blockchain" | "ai" | "cyber">(
    "blockchain"
  );

  const tabs = [
    {
      id: "blockchain",
      label: "Blockchain",
      animation: blockchainAnimation,
      title: "Decentralized Future",
      description:
        "Building secure, transparent distributed systems with blockchain technology",
      bgColor: "bg-blue-50/80",
      textColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: "ai",
      label: "AI",
      animation: aiAnimation,
      title: "Intelligent Systems",
      description:
        "Harnessing machine learning and AI to solve complex business challenges",
      bgColor: "bg-purple-50/80",
      textColor: "text-[#6B46C1]",
      buttonColor: "bg-[#6B46C1] hover:bg-purple-700",
    },
    {
      id: "cyber",
      label: "Cybersecurity",
      animation: cyberAnimation,
      title: "Digital Protection",
      description:
        "Advanced security solutions to safeguard your digital assets",
      bgColor: "bg-emerald-50/80",
      textColor: "text-emerald-600",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    },
  ];

  // Auto-switch tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id as "blockchain" | "ai" | "cyber";
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] sm:h-[80vh] w-full overflow-hidden bg-white">
      {/* Grid Layout */}
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Lottie Animation */}
        <div className="relative h-full w-full flex items-center justify-center p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${
                tabs.find((t) => t.id === activeTab)?.bgColor
              } backdrop-blur-sm rounded-xl`}
            />

            <motion.div
              key={`animation-${activeTab}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full max-w-2xl"
            >
              <Lottie
                animationData={tabs.find((t) => t.id === activeTab)?.animation}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-12 lg:px-16 text-gray-800">
          {/* Tab Selector */}
          <div className="flex gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full font-medium transition-all relative overflow-hidden ${
                  activeTab === tab.id
                    ? "text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <span className="relative z-10">{tab.label}</span>
                {activeTab === tab.id && (
                  <>
                    <motion.div
                      className={`absolute inset-0 ${
                        tab.buttonColor.split(" ")[0]
                      } z-0`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: "backOut" }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-full bg-white/20"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg flex flex-col gap-4 items-center text-center"
            >
              <motion.h1
                className={`text-4xl sm:text-4xl lg:text-5xl font-bold ${
                  tabs.find((t) => t.id === activeTab)?.textColor
                }`}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {tabs.find((t) => t.id === activeTab)?.title}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-gray-600"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {tabs.find((t) => t.id === activeTab)?.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <button
                  className={`px-6 py-3 ${
                    tabs.find((t) => t.id === activeTab)?.buttonColor
                  } text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl`}
                >
                  Learn More
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;
