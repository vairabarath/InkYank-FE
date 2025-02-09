import { motion } from "framer-motion";
import { ProductCard } from "../../components/ui/expandable-cards";

const DefiProductCards = [
  {
    description: "Earn Rewards",
    title: "Yield Farming",
    src: "/yieldFarming.jpg",
    link: "#",
    content: () => (
      <p>
        Yield farming allows users to earn rewards by staking or lending their
        crypto assets. Maximize your returns in decentralized finance
        ecosystems.
      </p>
    ),
  },
  {
    description: "Trade Seamlessly",
    title: "Decentralized Exchange (DEX)",
    src: "/DEX.jpg",
    link: "#",
    content: () => (
      <p>
        Trade your favorite cryptocurrencies on a secure, peer-to-peer platform.
        DEX offers liquidity, low fees, and complete control over your assets.
      </p>
    ),
  },
  {
    description: "Unlock Liquidity",
    title: "Lending & Borrowing",
    src: "/lendingBorrowing.jpg",
    link: "#",
    content: () => (
      <p>
        Access decentralized loans or lend your digital assets for passive
        income. Experience borderless finance with no intermediaries.
      </p>
    ),
  },
  {
    description: "Digital Ownership",
    title: "NFT Marketplace",
    src: "/Nft.jpg",
    link: "#",
    content: () => (
      <p>
        Explore, buy, sell, and trade unique digital assets on our secure NFT
        marketplace. Revolutionize ownership and creativity in the digital
        space.
      </p>
    ),
  },
];

const DefiPage = () => {
  return (
    <div className="bg-white min-h-screen text-[#1E293B]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-100 to-white   px-10 py-20">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 ">
            <h1 className="text-4xl md:text-6xl font-bold text-blue leading-snug">
              Empower Your Finance with DeFi
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Discover the limitless potential of decentralized finance. Manage
              your assets with security, transparency, and control.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-6 px-6 py-3 bg-blue text-white font-semibold rounded-full shadow-lg hover:bg-[#2563EB]"
            >
              Get Started
            </motion.button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#F1F5F9] p-6 rounded-xl shadow-blue-300 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue">
                Total Value Locked
              </h2>
              <p className="text-lg text-[#64748B] mt-2">$125 Billion</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-[#3B82F6] text-white">
        <div className="md:py-20 px-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Why Choose DeFi?
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Decentralized Security",
                description:
                  "Your funds are safeguarded by a secure, decentralized network.",
              },
              {
                title: "Transparency",
                description:
                  "Every transaction is verifiable on the blockchain.",
              },
              {
                title: "Global Access",
                description:
                  "Banking and financial services available anywhere, anytime.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-[#1E293B] p-6 rounded-lg shadow-2xl"
              >
                <h3 className="text-xl font-semibold text-[#3B82F6]">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl text-blue md:text-5xl font-bold text-center my-10">
          Decentralized Finance Products
        </h2>
        <ProductCard cards={DefiProductCards} />
      </section>
    </div>
  );
};

export default DefiPage;
