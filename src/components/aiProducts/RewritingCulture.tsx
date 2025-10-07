import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FileText } from "lucide-react";
import EvolutionAnimation from "../ui/EvolutionAnimation";
import useIsMobile from "../../hooks/use-is-mobile";

const RewritingCulture = () => {
  const evolutionRef = useRef<HTMLDivElement>(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const handleAnimationComplete = () => setAnimationCompleted(true);
  const isMobile = useIsMobile();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <div className="bg-gradient-to-b from-purple-100 to-white pt-12 md:pt-20 md:pb-12">
        <section className="py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-violet"
          >
            Rewriting Culture: Living and Working with AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto"
          >
            AI is transforming the way we work and live. It's time to rewrite
            our culture to embrace this new reality, fostering collaboration
            between humans and machines.
          </motion.p>
        </section>
      </div>

      {/* Content Sections */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {/* Section 1: Image on the right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-violet">
                Adapting to the New World of Work
              </h2>
              <p>
                The integration of AI into the workplace is not about replacing
                humans, but augmenting their capabilities. We explore how to
                create a symbiotic relationship where AI handles repetitive
                tasks, freeing up humans to focus on creativity, critical
                thinking, and strategic initiatives. This shift requires a new
                mindset and a culture of continuous learning.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/rewriting-culture.jpg"
                alt="AI and Human Collaboration"
                className="rounded-lg shadow-lg w-full h-100 object-cover"
              />
            </div>
          </div>

          {/* Section 2: Image on the left */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-violet">
                Ethical Considerations and Inclusive Growth
              </h2>
              <p>
                As we embrace AI, it's crucial to address the ethical
                implications and ensure that the benefits are shared by all.
                This includes developing fair and transparent AI systems,
                protecting privacy, and providing opportunities for everyone to
                participate in the AI-driven economy. Our goal is to build a
                future where AI serves humanity as a whole.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/AIbrain.png"
                alt="Ethical AI"
                className="rounded-lg shadow-lg w-full h-100 object-cover"
              />
            </div>
          </div>

          {/* Section 3: Image on the right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-violet">
                The Future of Human-AI Collaboration
              </h2>
              <p>
                The journey of rewriting our culture is ongoing. It involves
                rethinking education, communication, and creativity. By
                fostering a culture that values both human ingenuity and machine
                intelligence, we can unlock unprecedented levels of innovation
                and solve some of the world's most pressing challenges.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/AI-Powered Predictive Analytics.jpg"
                alt="Future of AI"
                className="rounded-lg shadow-lg w-full h-100 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Image Section */}
      {isMobile ? (
        <section className="py-16">
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-[1440px] mx-auto px-6"
          >
            <img src="/human.png" alt="Evolution of Human and AI" className="rounded-lg w-full h-auto" />
          </motion.div>
        </section>
      ) : (
        !animationCompleted ? (
          <section ref={evolutionRef} className="relative h-[200vh]">
            <div className="sticky top-0 flex items-center justify-center py-40">
              <div className="max-w-[1440px] mx-auto px-6 w-full">
                <EvolutionAnimation
                  targetRef={evolutionRef}
                  onComplete={handleAnimationComplete}
                />
              </div>
            </div>
          </section>
        ) : (
          <section className="flex items-center justify-center py-40">
            <div className="max-w-[1440px] mx-auto px-6 w-full">
              <img
                src="/human.png"
                alt="Evolution of Human and AI"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </section>
        )
      )}

      {/* PDF Download Section */}
      <section className="pb-20 pt-10  text-center">
        <h2 className="text-3xl font-bold mb-4 text-violet">
          Read Our Whitepaper
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Dive deeper into our vision for a future where humans and AI work
          together. Download our whitepaper on "Rewriting Culture."
        </p>
        <a
          href="/Rewriting_Culture_with_AI.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-violet text-white font-bold py-3 px-6 rounded-lg hover:bg-violet-700 transition-colors"
        >
          <FileText />
          Download PDF
        </a>
      </section>
    </div>
  );
};

export default RewritingCulture;
