import React from "react";
import { motion } from "framer-motion";

const Card = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={`p-6 bg-white rounded-lg shadow-lg shadow-blue-200 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </motion.div>
);

const Visions = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-10">
      <div className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-4 max-w-4xl w-full">
        <motion.div
          className="sm:col-span-1 sm:row-span-1 sm:col-start-2 sm:row-start-2 my-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-6 w-full bg-blue shadow-md rounded-xl">
            <h2 className="text-2xl mt-2 text-white font-semibold mb-4 text-center">
              Our Visions
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="sm:col-span-1 sm:row-span-1 sm:col-start-2 sm:row-start-1"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card title="Seamless On-Chain Integration">
            <p>
              "We envision a future where most app and game logic operates
              efficiently on-chain, ensuring transparency, security, and
              cost-effective execution."
            </p>
          </Card>
        </motion.div>

        <motion.div
          className="sm:col-span-1 sm:row-span-1 sm:col-start-3 sm:row-start-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card title="A Truly Decentralized Financial Ecosystem">
            <p>
              "We aim to create a financial landscape where DeFi empowers
              individuals globally, eliminating intermediaries and enabling
              open, permissionless access."
            </p>
          </Card>
        </motion.div>

        <motion.div
          className="sm:col-span-1 sm:row-span-1 sm:col-start-2 sm:row-start-3"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card title="Revolutionizing Gaming with Blockchain">
            <p>
              "We see blockchain redefining gaming by enabling true digital
              ownership, fair play, and immersive decentralized experiences for
              players worldwide."
            </p>
          </Card>
        </motion.div>

        <motion.div
          className="sm:col-span-1 sm:row-span-1 sm:col-start-1 sm:row-start-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card title="Empowering Innovation with Scalable Infrastructure">
            <p>
              "Our vision is to build cutting-edge blockchain infrastructure
              that supports developers and users, driving the mass adoption of
              decentralized technologies."
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Visions;
