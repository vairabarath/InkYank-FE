import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FileText } from "lucide-react";
import EvolutionAnimation from "../ui/EvolutionAnimation";
import useIsMobile from "../../hooks/use-is-mobile";
import AIResearchTeam from "./AIResearchTeam";

const RewritingCulture = () => {
  const evolutionRef = useRef<HTMLDivElement>(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const handleAnimationComplete = () => setAnimationCompleted(true);
  const isMobile = useIsMobile();

  const googleDriveFileId = "1UfkxW_0ZoQa67XCSr5sU9vvc-JVwrtK-";
  const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <div className="bg-gradient-to-b from-purple-100 to-white pt-12 md:pt-20 md:pb-12">
        <section className="py-20 text-center px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-violet mb-6"
            >
              Evolution Beyond Flesh: A Unified Theory of Externalization,
              Automation, and Inevitable Integration
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href={directDownloadUrl}
                download="Rewriting_Culture_with_AI.pdf"
                className="inline-flex items-center gap-2 bg-violet text-white font-bold py-3 px-6 rounded-lg hover:bg-violet-700 transition-colors"
              >
                <FileText />
                Download PDF
              </a>
              <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
                Download and explore our research. Thank you for your interest!
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Content Sections */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {/* Section 1: Image on the right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-violet">
                AGI Inevitability
              </h2>
              <p>
                First, that AGI is not a possibility but an inevitability—the
                logical endpoint of externalization that began when early humans
                first shaped stone into tools.
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
                Control over autonomous intelligence
              </h2>
              <p>
                Second, that human control over autonomous intelligence is
                structurally impossible. Not difficult, not requiring careful
                engineering—impossible, for the same reason you cannot
                externalize agency and maintain authority over it.
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
                Brain Computer Interface
              </h2>
              <p>
                Third, that integration through brain-computer interface
                represents humanity's only viable evolutionary strategy for
                navigating this transition. Not enhancement, not
                choice—evolutionary adaptation to avoid obsolescence.
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-[1440px] mx-auto px-6"
          >
            <img
              src="/human.png"
              alt="Evolution of Human and AI"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </section>
      ) : !animationCompleted ? (
        <section ref={evolutionRef} className="relative h-[200vh]">
          <div className="sticky top-0 flex items-center justify-center py-40">
            <div className="max-w-[1440px] mx-auto px-6 w-full">
              <EvolutionAnimation
                targetRef={evolutionRef as React.RefObject<HTMLDivElement>}
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
      )}

      <div className="max-w-[1140px] mx-auto mt-12 px-4 md:px-0">
        {/* Team Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-violet mb-4">
            AI Research and Development Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the minds behind our groundbreaking research on human-AI
            integration
          </p>
        </motion.div>

        <AIResearchTeam />
      </div>
    </div>
  );
};

export default RewritingCulture;
