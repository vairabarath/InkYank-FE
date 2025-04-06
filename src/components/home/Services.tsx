import { motion } from "framer-motion";

const Card = ({
  children,
  className,
  fixedHeight = false,
}: {
  children: React.ReactNode;
  className?: string;
  fixedHeight?: boolean;
}) => (
  <motion.div
    className={`p-6  rounded-lg shadow-lg shadow-blue-200  ${className} ${
      fixedHeight ? "h-full flex flex-col" : ""
    }`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className={`text-gray-700 ${fixedHeight ? "flex-grow" : ""}`}>
      {children}
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <>
      {/* heading div */}
      <div className="w-full bg-white px-6 ">
        <div className="p-8 rounded-2xl sm:shadow-xl mx-auto max-w-3xl mb-4">
          <h2 className="text-xl md:text-3xl font-bold text-center text-blue max-w-3xl mx-auto">
            Shaping the future with more than just technology — we deliver
            impact.
          </h2>
          <p className="text-gray-600 mt-2 sm:mb-4 text-justify text-sm sm:text-base">
            By uniting blockchain, AI, and cybersecurity, we build secure,
            intelligent, and decentralized systems. Not just innovation —
            purposeful solutions that drive real-world transformation.
          </p>
        </div>
      </div>

      {/* cards div */}
      <div className="min-h-[50vh] bg-white flex items-center justify-center px-4 py-2 sm:py-10 overflow-x-hidden">
        <div className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-4  sm:gap-10 max-w-4xl w-full">
          {/* Blockchain */}
          <motion.div
            className="sm:col-span-1 sm:row-span-1 sm:col-start-1 sm:row-start-1 h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card fixedHeight className="border-t-4 border-blue">
              <h2 className="text-xl text-blue font-semibold mb-4">
                Blockchain
              </h2>
              <p className="text-gray-600 mb-2 sm:mb-4  text-sm sm:text-base">
                At the core of Web3, blockchain enables secure, decentralized
                systems. We develop robust smart contracts and trustless
                applications that redefine transparency, ownership, digital
                identity, and seamless collaboration in the modern digital era.
              </p>
            </Card>
          </motion.div>

          {/* Cybersecurity*/}
          <motion.div
            className="sm:col-span-1 sm:row-span-1 sm:col-start-3 sm:row-start-1 h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card fixedHeight className="border-t-4 border-emerald-600">
              <h2 className="text-xl text-emerald-600 font-semibold mb-4">
                Cyber Security
              </h2>
              <p className="text-gray-600 mb-2 sm:mb-4  text-sm sm:text-base">
                At the core of Web3, blockchain enables secure, decentralized
                systems. We develop robust smart contracts and trustless
                applications that redefine transparency, ownership, digital
                identity, and seamless collaboration in the modern digital era.
              </p>
            </Card>
          </motion.div>

          {/* Artificial Intelligence */}
          <motion.div
            className="sm:col-span-1 sm:row-span-1 sm:col-start-2 sm:row-start-2 h-full"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card fixedHeight className="border-t-4 border-[#6B46C1]">
              <h2 className="text-xl text-[#6B46C1] font-semibold mb-4">
                Artificial Intelligence
              </h2>
              <p className="text-gray-600 mb-2 sm:mb-4  text-sm sm:text-base">
                AI represents not a replacement of human capability, but an
                evolution of it. By integrating AI into research, development,
                and decision-making, we aim to create a future where human
                insight and machine intelligence drive innovation together.
              </p>
            </Card>
          </motion.div>

          {/* Strategic Consulting - Not fixed height */}
          <motion.div
            className="sm:col-span-1 sm:row-span-1 sm:col-start-2 sm:row-start-1 h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-blue-100" fixedHeight>
              <h2 className="text-xl text-black font-semibold mb-4">
                Training & Upskilling
              </h2>
              <p className="text-gray-700 mb-2 sm:mb-4  text-sm sm:text-base">
                As part of our commitment to meaningful innovation, we provide
                focused training programs designed to equip individuals with
                practical expertise in blockchain, AI, and cybersecurity —
                enabling confident implementation of emerging technologies.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
