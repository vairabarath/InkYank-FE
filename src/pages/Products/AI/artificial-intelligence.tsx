import { motion } from "framer-motion";
import { ProductCard } from "../../../components/ui/expandable-cards";
import Lottie from "lottie-react";
import cyborg from "../../../animations/cyborg.json";

const AICards = [
  {
    description: "published",
    title:
      "Evolution Beyond Flesh: A Unified Theory of Externalization, Automation, and Inevitable Integration",
    src: "/rewriting-culture.jpg",
    link: "/products/AI/ai-and-the-future",
    content: () => (
      <div>
        <p className="mb-4">
          Is the rise of artificial intelligence the final and most
          transformative wave of technology for humanity? This isn't another
          doomsday prediction. Instead, it offers a logical and grounded
          exploration of how the human race can adapt, survive, and flourish in
          the age of AI. The approach is rooted in a fresh evolutionary
          framework—steering away from idealistic visions of utopia often
          imagined by futurists, and focusing instead on practical, realistic
          pathways forward.
        </p>
      </div>
    ),
  },
  {
    description: "alpha",
    title: "MeeKaan AI: AI tailored for everyone",
    src: "/beyond-words.jpg",
    link: "/products/AI/meekaan-ai",
    content: () => (
      <div>
        <p className="mb-4">
          AI for anyone and everyone. AI the way any individual wants it to be.
          The individual could be a regular inference user, developer, an AI
          SaaS provider, privacy wary users, creator etc. This product enables
          users to configure their AI framework at any level, any
          combination/configuration, any form—mobile/desktop, any price—no price
          to suit their needs.
        </p>
        <p className="mb-4">
          While ever evolving AI keeps pushing new standards, features and
          models, the need for ease of access, safety and privacy for everyone
          is still a nascent space. One size fits all is still the norm of the
          industry. And inference usage and free tier hopping are the main usage
          among price deprived markets. On the other hand, lack of knowledge and
          exposure prevents the mass adoption and AI to become a real people's
          technology. 'MeeKaan AI,' as the name suggests—an Explorer—addresses
          these gaps. With this tool, anyone can intuitively make AI work for
          them, the way they want it to be.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Designed to stack up as the industry evolves with new features.
          </li>
          <li>Empowers users with absolute control at every level.</li>
          <li>Extensible—users can enhance and customize the tool.</li>
          <li>Inclusive—no technology or user barred.</li>
          <li>
            Experience the full expanse of your AI exposure, and cherish how AI
            works for you.
          </li>
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
