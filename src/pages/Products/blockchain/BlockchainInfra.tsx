import { motion } from "framer-motion";
import { ProductCard } from "../../../components/ui/expandable-cards";

const BlockchainInfrastructureCards = [
  {
    description: "In progress",
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
    description: "In progress",
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
    description: "In progress",
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
  {
    description: "In progress",
    title: "PoW speedaware",
    src: "/SmartContract.jpg",
    link: "#",
    content: () => (
      <p>
        Unlock the full potential of your blockchain network with our
        comprehensive performance monitoring plugin. Compare transaction speeds,
        throughput, latency, and other key metrics across different blockchains
        or network configurations. Visualize data with interactive charts and
        graphs, set custom alerts for performance deviations, and export reports
        for in-depth analysis. Our plugin supports [mention specific blockchains
        or platforms] and integrates seamlessly with your existing tools.
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
    </div>
  );
};

export default BlockchainInfrastructure;
