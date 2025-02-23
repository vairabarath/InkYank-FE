import { motion } from "framer-motion";
import { ProductCard } from "../../components/ui/expandable-cards";
import { div } from "framer-motion/client";

const BlockchainInfrastructureCards = [
  {
    description: "Secure Nodes",
    title: "Blockchain Infrastructure",
    src: "/BlockchainSecurity.jpg",
    link: "#",

    content: () => (
      <p>
        We are at the forefront of the blockchain revolution, specializing in
        blockchain infrastructure products and services. Our expertise lies in
        building and deploying robust, scalable, and secure solutions that form
        the bedrock of decentralized applications and networks. From core
        protocol development to bespoke infrastructure services, we empower
        businesses and innovators to harness the transformative potential of
        blockchain technology. Explore our offerings to discover how we can help
        you build the future of decentralized systems.
      </p>
    ),
  },
  {
    description: "Decentralized Systems",
    title: "Improving PoW Transaction Speed and Scripting",
    src: "/DecenterlizedSystem.jpg",
    link: "#",
    content: () => (
      <p>
        In the world of blockchain, transaction speed and scripting capabilities
        are critical for scalability and user experience. This infrastructure
        project focuses on enhancing the Proof of Work (PoW) consensus mechanism
        to significantly improve transaction processing speeds. By optimizing
        block propagation times, reducing latency, and implementing advanced
        scripting features, this project aims to make PoW-based networks more
        efficient and versatile. The improvements will not only accelerate
        transaction confirmations but also enable more complex and customizable
        smart contract functionalities, opening doors for innovative use cases.
        This upgrade is designed to ensure that PoW chains remain competitive in
        an era where speed and flexibility are paramount, while maintaining the
        security and decentralization that PoW is known for.
      </p>
    ),
  },
  {
    description: "Smart Contracts",
    title: "Layer 01 Game Chain",
    src: "/SmartContract.jpg",
    link: "#",
    content: () => (
      <p>
        This project introduces a Layer 1 Proof of Work (PoW) blockchain
        specifically designed to function as a gaming chain, integrating unique
        features tailored for the gaming industry. By leveraging the inherent
        security and decentralization of PoW, this chain will provide a robust
        foundation for in-game economies, asset ownership, and transparent
        gameplay mechanics. Key features include low-latency transaction
        processing, native support for non-fungible tokens (NFTs), and
        customizable scripting for game developers to create immersive
        experiences. Additionally, the chain will incorporate mechanisms for
        player rewards, decentralized governance, and interoperability with
        other gaming platforms. This infrastructure aims to revolutionize the
        gaming industry by offering a secure, scalable, and feature-rich
        blockchain solution that empowers developers and gamers alike.
      </p>
    ),
  },
  {
    description: "Scalability Solutions",
    title: "Beyond Proof of Work, lies Proof of Truth.",
    src: "/ScalabilitySolution.jpg",
    link: "#",
    content: () => (
      <div>
        <p>
          XX-Coin is a revolutionary cryptocurrency forging a new path in the
          digital landscape. Built on a robust Proof-of-Work mechanism, XX-Coin
          introduces a groundbreaking concept: Proof of Truth. This innovative
          approach transforms the energy-intensive nature of traditional PoW
          into a powerful engine for real-world utility, specifically designed
          to revolutionize hardware and chip manufacturing.
          <br />
          Proof of Truth isn't just about solving complex algorithms. It's about
          harnessing computational power to perform verifiable and valuable
          benchmark testing for hardware and chip manufacturers. Instead of
          generic hashing, XX-Coin miners contribute their processing power to
          execute standardized, industry-recognized benchmarks on cutting-edge
          hardware. This process generates irrefutable proof of performance – a
          "Proof of Truth" about the capabilities of the tested hardware.
          <br />
        </p>
        <h2 className="text-xl font-semibold">
          For chip manufacturers, XX-Coin offers an unprecedented solution:
          <br />
        </h2>
        <ul className="list-disc ml-6">
          <li>
            Decentralized & Transparent Benchmarking: Access a globally
            distributed network of testers providing unbiased and transparent
            performance data for your latest chips and hardware.
          </li>
          <li>
            Real-World Performance Validation: Benchmark tests are designed to
            simulate real-world use cases, providing accurate insights into
            hardware capabilities under practical conditions.
          </li>
          <li>
            Cost-Effective Testing: Leverage the distributed power of the
            XX-Coin network, potentially reducing the need for expensive,
            in-house testing infrastructure.
          </li>
          <li>
            Enhanced Product Development: Gain access to continuous performance
            feedback throughout the development lifecycle, enabling faster
            iteration and optimization of hardware designs.
          </li>
        </ul>
      </div>
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
