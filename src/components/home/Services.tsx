import AnimatedText from "../ui/animated-text";
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
    <h2 className="text-xl text-black font-semibold mb-4">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </motion.div>
);
const Services = () => {
  return (
    <section className="bg-gray-50 ">
      {/* heading div */}
      <div className="w-full bg-gradient-to-b from-blue-100 to-white pt-12">
        <h2 className="text-xl md:text-3xl font-bold text-center font-italic  text-gray-500 max-w-3xl mx-auto">
          Beyond our innovative blockchain products, we provide
          <AnimatedText
            color="blue"
            text=" comprehensive
          services tailored to your specific needs"
          />{" "}
          . From consulting and development to implementation and support,
          <AnimatedText
            color="blue"
            text=" we're
          your partners in blockchain solutions"
          />
          .
        </h2>
      </div>
      <div className="min-h-[50vh] bg-white flex items-center justify-center px-4 py-10">
        <div className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-4 max-w-4xl w-full">
          <motion.div
            className="sm:col-span-1 sm:row-span-1 sm:col-start-2 sm:row-start-2 my-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card title="Strategic Consulting">
              <p>
                We help you identify the right blockchain solutions for your
                business, developing a tailored strategy for implementation.
              </p>
            </Card>
          </motion.div>

          <motion.div
            className="sm:col-span-1 sm:row-span-1 sm:col-start-2 sm:row-start-1"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card title="Custom Development">
              <p>
                Our experienced developers build secure and scalable blockchain
                applications, including smart contracts and dApps, tailored to
                your needs.
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
            <Card title="Security Audits">
              <p>
                We conduct rigorous audits of your smart contracts and
                blockchain systems, ensuring the safety of your assets and data.
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
            <Card title="System Integration">
              <p>
                We seamlessly integrate blockchain technology into your
                infrastructure, minimizing disruption and maximizing efficiency.
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
            <Card title="Training & Education">
              <p>
                We offer customized training programs to equip your team with
                the skills needed to manage blockchain solutions effectively.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
