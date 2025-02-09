import { motion } from "framer-motion";
import { ProductCard } from "../../components/ui/expandable-cards";

const BlockchainInfrastructureCards = [
  {
    description: "Secure Nodes",
    title: "Blockchain Security",
    src: "/BlockchainSecurity.jpg",
    link: "#",
    content: () => (
      <p>
        Secure nodes are the backbone of blockchain infrastructure, ensuring
        decentralization and protecting against potential cyber threats. These
        nodes validate and verify transactions to maintain a secure network.
      </p>
    ),
  },
  {
    description: "Decentralized Systems",
    title: "Infrastructure Solutions",
    src: "/DecenterlizedSystem.jpg",
    link: "#",
    content: () => (
      <p>
        Decentralized systems form the foundation of blockchain technology,
        eliminating single points of failure and empowering peer-to-peer
        interactions securely.
      </p>
    ),
  },
  {
    description: "Smart Contracts",
    title: "Future of Agreements",
    src: "/SmartContract.jpg",
    link: "#",
    content: () => (
      <p>
        Smart contracts revolutionize digital agreements by enabling automated,
        trustless, and immutable transactions within blockchain ecosystems.
      </p>
    ),
  },
  {
    description: "Scalability Solutions",
    title: "Scaling Blockchain",
    src: "/ScalabilitySolution.jpg",
    link: "#",
    content: () => (
      <p>
        Scalability solutions address the growing demand for blockchain
        networks, enhancing transaction speed and capacity without compromising
        decentralization or security.
      </p>
    ),
  },
];

const BlockchainInfrastructure = () => {
  return (
    <div className="min-h-screen">
      <section>
        <div className="bg-gradient-to-b from-blue-100 to-white pt-20 pb-12">
          <div className="relative  flex flex-col max-w-[1140px] mx-auto items-center justify-center text-center px-6">
            <h1 className="text-4xl text-blue md:text-5xl font-bold mb-4">
              Blockchain Infrastructure
            </h1>
            <p className="text-lg text-gray-700">
              Revolutionize your business with cutting-edge blockchain
              infrastructure solutions designed to enhance security,
              scalability, and efficiency. Leverage the power of decentralized
              systems, smart contracts, and secure nodes to drive innovation,
              eliminate intermediaries, and build trust within your network.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1140px] mx-auto gap-8 px-6 py-20">
          {[
            {
              title: "Decentralization",
              icon: "🌐",
              description:
                "Removing intermediaries to empower trustless networks.",
            },
            {
              title: "Scalability",
              icon: "⚡",
              description:
                "Handling massive demand without compromising performance.",
            },
            {
              title: "Security",
              icon: "🔒",
              description:
                "Ensuring data integrity and protection against attacks.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary rounded-lg p-6 hover:shadow-blue-300 shadow-lg"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-secondary-light mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-[1140px]  mx-auto">
          <h2 className="text-3xl text-blue md:text-5xl font-bold text-center mb-10">
            Blockchain Infrastructure Products
          </h2>
          <ProductCard cards={BlockchainInfrastructureCards} />
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Blockchain by the Numbers
        </h2>
        <div className="flex flex-wrap justify-center gap-10 px-6">
          {[
            { number: "500K+", label: "Active Nodes" },
            { number: "1B+", label: "Transactions Processed" },
            { number: "99.99%", label: "Uptime" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center bg-secondary rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-5xl font-bold text-accent">{stat.number}</h3>
              <p className="text-secondary-light mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 bg-blue-50">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Blockchain Evolution
        </h2>
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="border-l-4 border-accent">
            {[
              {
                year: "2009",
                event: "Bitcoin Launches",
                description: "The first decentralized cryptocurrency is born.",
              },
              {
                year: "2015",
                event: "Ethereum Introduced",
                description: "Smart contracts revolutionize blockchain.",
                image: "/Ethereum-icon-purple.png",
              },
              {
                year: "2021",
                event: "NFT Boom",
                description: "Digital assets reshape ownership.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10 pl-8"
              >
                <div>
                  <div className="text-lg font-semibold text-accent">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold mt-2">{item.event}</h3>
                  <p className="text-secondary-light mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainInfrastructure;
