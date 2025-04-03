import { motion } from "framer-motion";
import { ProductCard } from "../../../components/ui/expandable-cards";
import { BrainCircuitIcon, LanguagesIcon, NetworkIcon } from "lucide-react";

const AICards = [
  {
    description: "In progress",
    title: "AI-Powered Predictive Analytics",
    src: "/AI-Powered Predictive Analytics.jpg",
    link: "#",
    content: () => (
      <p>
        Our advanced AI predictive analytics platform transforms raw data into
        actionable insights. Using deep learning algorithms, it identifies
        patterns and trends that human analysts might miss, enabling businesses
        to forecast market movements, customer behavior, and operational needs
        with unprecedented accuracy. The system continuously learns from new
        data, improving its predictions over time. Key applications include
        demand forecasting, risk assessment, and personalized recommendations.
        By leveraging this technology, organizations can make data-driven
        decisions that drive growth and efficiency while minimizing uncertainty.
      </p>
    ),
  },
  {
    description: "In development",
    title: "Computer Vision for Industrial Automation",
    src: "/Computer Vision for Industrial Automation.jpg",
    link: "#",
    content: () => (
      <p>
        Revolutionizing quality control and process optimization with our
        cutting-edge computer vision solutions. These AI systems can detect
        microscopic defects in manufacturing lines, monitor equipment health in
        real-time, and guide robotic arms with millimeter precision. The
        technology combines convolutional neural networks with high-resolution
        imaging to achieve superhuman accuracy in visual inspection tasks.
        Applications span across automotive, electronics, pharmaceuticals, and
        food production industries. By implementing this solution, manufacturers
        can reduce waste, improve product quality, and automate previously
        manual inspection processes.
      </p>
    ),
  },
  {
    description: "Coming soon",
    title: "Natural Language Processing Platform",
    src: "/Natural Language Processing Platform.jpg",
    link: "#",
    content: () => (
      <div>
        <p>
          Our next-generation NLP platform understands and generates human
          language with near-human fluency. Built on transformer architectures,
          it enables:
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>Real-time multilingual translation with context awareness</li>
          <li>Sentiment analysis for customer feedback and market research</li>
          <li>Automated document summarization and knowledge extraction</li>
          <li>Intelligent chatbots with industry-specific expertise</li>
        </ul>
        <p className="mt-4">
          The system continuously learns from interactions, adapting to industry
          jargon and evolving language patterns. It's particularly valuable for
          legal, healthcare, and customer service applications where
          understanding nuance is critical.
        </p>
      </div>
    ),
  },
  {
    description: "In research",
    title: "Autonomous Decision-Making Systems",
    src: "/Autonomous Decision-Making Systems.jpg",
    link: "#",
    content: () => (
      <p>
        Developing AI systems that can make complex decisions in dynamic
        environments with minimal human intervention. These systems combine
        reinforcement learning with multi-objective optimization to balance
        competing priorities in real-time. Applications include autonomous
        supply chain management, dynamic pricing systems, and emergency response
        coordination. The technology is designed to operate within predefined
        ethical boundaries while adapting to changing circumstances. By
        implementing these systems, organizations can achieve unprecedented
        levels of operational efficiency and responsiveness.
      </p>
    ),
  },
];

const ArtificialIntelligence = () => {
  return (
    <div className="min-h-screen">
      <section>
        <div className="bg-gradient-to-b from-blue-100 to-white pt-20 pb-12">
          <div className="relative flex flex-col max-w-[1140px] mx-auto items-center justify-center text-center px-6">
            <h1 className="text-4xl text-blue md:text-5xl font-bold mb-4">
              Artificial Intelligence
            </h1>
            <p className="text-lg text-gray-700">
              Transform your business with our cutting-edge AI technologies
              designed to enhance decision-making, automate complex processes,
              and unlock new opportunities. Leverage machine learning, computer
              vision, and natural language processing to gain competitive
              advantages and drive innovation across your organization.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1140px] mx-auto gap-8 px-6 py-20">
          {[
            {
              title: "Machine Learning",
              icon: BrainCircuitIcon,
              description:
                "Extract insights and patterns from complex datasets.",
            },
            {
              title: "Deep Learning",
              icon: NetworkIcon,
              description:
                "Advanced neural networks for complex pattern recognition.",
            },
            {
              title: "NLP",
              icon: LanguagesIcon,
              description:
                "Understand and generate human language effectively.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary rounded-lg p-6 hover:shadow-blue-300 shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-blue" />
              <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-secondary-light mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-3xl text-blue md:text-5xl font-bold text-center mb-10">
            AI Products and Solutions
          </h2>
          <ProductCard cards={AICards} />
        </div>
      </section>
    </div>
  );
};

export default ArtificialIntelligence;
