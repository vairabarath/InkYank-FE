"use client";

import { motion } from "framer-motion";

const blockchains = [
  { name: "Bitcoin", logo: "/Logos/BitcoinLogo.png" },
  { name: "Ethereum", logo: "/Logos/ethereumLogo.png" },
  { name: "Polygon", logo: "/Logos/PolygonLogo.png" },
  { name: "Avalanche", logo: "/Logos/Avalanche.png" },
  { name: "BNB Chain", logo: "/Logos/BNBLogo.png" },
  { name: "Solana", logo: "/Logos/SolanaLogo.png" },
  { name: "Cosmos", logo: "/Logos/CosmosLogo.png" },
  { name: "Polkadot", logo: "/Logos/PolkadotLogo.png" },
  { name: "Hyperledger", logo: "/Logos/HyperledgerLogo.png" },
  { name: "Corda", logo: "/Logos/CordaLogo.png" },
  { name: "Tezos", logo: "/Logos/TezosLogo.png" },
  { name: "Cardano", logo: "/Logos/CardanoLogo.png" },
  { name: "Tron", logo: "/Logos/TronLogo.png" },
  { name: "Litecoin", logo: "/Logos/LitecoinLogo.png" },
];

// Duplicate logos for seamless looping
const duplicatedBlockchains = [...blockchains, ...blockchains];

const BlockchainSection = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">
          Major Chains We Worked With
        </h2>

        {/* Scrolling Container */}
        <div className="relative w-full overflow-hidden max-w-6xl mx-auto">
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>

          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

          <motion.div
            className="flex flex-nowrap space-x-12"
            initial={{ x: "0%" }}
            animate={{ x: "-500%" }} // Move left infinitely
            transition={{
              ease: "linear",
              duration: 36, // Adjust speed for smooth scrolling
              repeat: Infinity,
            }}
          >
            {/* Render Blockchain Logos */}
            {duplicatedBlockchains.map((chain, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[150px] md:min-w-[200px] px-4"
              >
                <img
                  src={chain.logo}
                  alt={chain.name}
                  className="w-24 h-24 object-contain"
                />
                <p className="mt-3 text-lg text-black font-medium">
                  {chain.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;
