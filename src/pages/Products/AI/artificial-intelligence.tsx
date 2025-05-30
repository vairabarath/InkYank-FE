import { motion } from "framer-motion";
import { ProductCard } from "../../../components/ui/expandable-cards";
import Lottie from "lottie-react";
import cyborg from "../../../animations/cyborg.json";

const AICards = [
  {
    description: "In progress",
    title: "Rewriting Culture: Living and Working with AI",
    src: "/rewriting-culture.jpg",
    link: "#",
    content: () => (
      <div>
        <p className="mb-4">
          A look into how AI is transforming culture — not by replacing us, but
          by working with us. This project explores the human side of AI and how
          we can adapt, evolve, and thrive together.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Promoting AI literacy and human-AI collaboration</li>
          <li>
            Exploring cultural shifts in work, education, and communication
          </li>
          <li>Encouraging ethical and inclusive AI adoption</li>
        </ul>
      </div>
    ),
  },
  {
    description: "In progress",
    title: "Beyond Words: Understanding Human Emotions",
    src: "/beyond-words.jpg",
    link: "#",
    content: () => (
      <div>
        <p className="mb-4">
          This project focuses on building an AI system that not only processes
          language but also understands the emotions behind it. By leveraging
          large language models (LLMs), the AI can interpret tone, sentiment,
          and context to respond with empathy — bridging the gap between
          machines and human emotion.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Emotion detection through text and tone analysis</li>
          <li>Context-aware responses for better human-AI interaction</li>
          <li>
            Applications in mental health, education, and customer support
          </li>
          <li>Ongoing training to adapt to diverse human expression</li>
        </ul>
      </div>
    ),
  },
];

const ArtificialIntelligence = () => {
  return (
    <div className="min-h-screen">
      <section>
        <div className="bg-gradient-to-b from-purple-100 to-white pt-12 md:pt-20 md:pb-12">
          <div className="relative flex flex-col md:flex-row max-w-[1140px] mx-auto items-center justify-between px-6 gap-8">
            {/* Left  */}
            <div className=" text-center md:text-left md:w-1/2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-violet"
              >
                Artificial Intelligence
              </motion.h1>
              <p className="text-lg text-gray-700">
                <p className="text-lg text-gray-700">
                  People often fear that AI will replace human work and
                  knowledge. But instead of resisting, we should learn and grow
                  with it. The future is about collaboration — where humans and
                  AI evolve together, not apart. It’s more than just tech; it’s
                  cultural transformation.
                </p>
              </p>
            </div>

            {/* Right  */}
            <div className="">
              <Lottie
                animationData={cyborg}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1140px] mx-auto gap-8 px-6 py-20">
          {[
            {
              title: "Domain-Specific LLMs",
              icon: "/LLM.gif",
              description:
                "We build and fine-tune large language models for specific industries, ensuring accurate, relevant, and efficient AI responses tailored to your unique domain needs and workflows.",
            },
            {
              title: "Human-AI Collaboration",
              icon: "/brain.gif",
              description:
                "Humans and AI are beginning to work side by side, transforming creativity, decision-making, and productivity. We’re not just witnessing this cultural evolution — we’re actively researching and building frameworks to accelerate its integration across industries.",
            },
            {
              title: "AI in Action",
              icon: "/neural-net.gif",
              description:
                "We create intelligent products and services that bring artificial intelligence into everyday workflows — enabling smarter automation, real-time decision-making, and seamless integration across industries.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary rounded-lg p-6 hover:shadow-violet-300 shadow-lg"
            >
              <img src={feature.icon} alt="" className="w-20 h-20" />
              <h3 className="text-2xl text-violet font-semibold mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-purple-50">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-3xl text-violet md:text-5xl font-bold text-center mb-10">
            AI Products and Solutions
          </h2>
          <ProductCard cards={AICards} />
        </div>
      </section>
    </div>
  );
};

export default ArtificialIntelligence;
