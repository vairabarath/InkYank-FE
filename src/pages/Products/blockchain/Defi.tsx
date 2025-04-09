import { motion } from "framer-motion";
import { ProductCard } from "../../../components/ui/expandable-cards";

const DefiProductCards = [
  {
    description: "In progress",
    title: "Project - OSM",
    src: "/yieldFarming.jpg",
    link: "#",
    content: () => (
      <p>
        Prepare to experience a groundbreaking project that's redefining the
        intersection of the stock market and the cryptocurrency world. We're not
        just merging these two realms – we're reinventing them with a fresh,
        innovative DeFi platform designed for a new era of finance. Step into a
        revolutionary DeFi project that reimagines finance by seamlessly merging
        traditional stock markets with the vibrant crypto space. Experience a
        groundbreaking platform offering tokenized equities alongside
        cryptocurrencies in an intuitive, unified interface. This innovative
        approach democratizes market access and introduces novel financial
        instruments, all within a transparent and decentralized ecosystem,
        empowering users to explore wealth creation in a newly designed
        financial landscape.
      </p>
    ),
  },
  {
    description: "In progress",
    title: "Payment gateway ",
    src: "/DEX.jpg",
    link: "#",
    content: () => (
      <p>
        Our cutting-edge payment gateway empowers businesses to seamlessly
        integrate and accept a wide range of cryptocurrencies and
        blockchain-based assets, opening up new revenue streams and expanding
        your customer base. We provide a secure and reliable platform that
        simplifies the complexities of digital asset transactions, handling
        everything from payment processing and currency conversion to fraud
        prevention and regulatory compliance. With our solution, you can
        effortlessly accept Bitcoin, Ethereum, stablecoins, and many other
        digital currencies, all while enjoying competitive transaction fees and
        fast settlement times.
        <br />
        Our platform is designed for both established enterprises and emerging
        startups, offering flexible integration options and customizable
        features to meet your specific business needs. Whether you're an
        e-commerce platform, a brick-and-mortar store, or a SaaS provider, our
        payment gateway allows you to tap into the growing world of digital
        assets without the technical headaches. We prioritize security,
        employing advanced encryption and multi-factor authentication to protect
        your funds and your customers' data. Furthermore, our robust API and
        developer-friendly documentation make integration quick and easy,
        allowing you to focus on what matters most: growing your business.
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
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#F1F5F9] p-6 rounded-xl shadow-blue-300 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue">
                Total Value Expected
              </h2>
              <p className="text-lg text-[#64748B] mt-2">$700 Million</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-blue text-white">
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
                <h3 className="text-xl font-semibold text-blue">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl text-blue md:text-5xl font-bold text-center my-10">
          Decentralized Finance Products
        </h2>
        <ProductCard cards={DefiProductCards} />
      </section>
    </div>
  );
};

export default DefiPage;
