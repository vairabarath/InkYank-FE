import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-blue-900 to-gray-900">
          <div className="absolute inset-0 opacity-20 bg-[url('/blockchain_bg.png')] bg-no-repeat  bg-center"></div>
        </div>

        {/* Content */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Enter the Future of <span className="text-blue-500">Blockchain</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-4 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Powering DeFi, Web3 Games, and Digital Economies through innovation.
        </motion.p>
        <motion.div
          className="flex gap-4 mt-6 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
            Explore Web3
          </button>
          <button className="px-6 py-3 border-2 border-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:text-white">
            Join Us
          </button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-blue blur-3xl opacity-30 z-0"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ repeat: Infinity, duration: 5 }}
        ></motion.div>
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 rounded-full bg-blue blur-3xl opacity-30 z-0"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ repeat: Infinity, duration: 5 }}
        ></motion.div>
      </section>
    </main>
  );
};

export default Home;
