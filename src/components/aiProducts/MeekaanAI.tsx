import { motion } from "framer-motion";
import { Download } from "lucide-react";

const MeekaanAI = () => {
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
            MeeKaan AI: AI tailored for everyone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto mb-8"
          >
            AI for anyone and everyone. AI the way any individual wants it to
            be.
          </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <button
        onClick={async () => {
          // Track (fire-and-forget)
          fetch("https://sheetdb.io/api/v1/bhb2gu0t2aj73", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              TimeStamp: new Date().toISOString(),
              Count: 1,
            }),
          }).catch(() => {});

          // Open download
          window.open(
            "https://drive.google.com/uc?export=download&id=1-nPL1zKZ8-pYBYeGW0xAT_xFngfqhR3L",
            "_blank"
          );
        }}
        className="inline-flex items-center gap-2 bg-violet text-white font-bold py-3 px-6 rounded-lg hover:bg-violet-700 transition-colors"
      >
        <Download />
        Download APK
      </button>
    </motion.div>
        </section>
      </div>

      {/* Content Sections */}
      <section className="pt-8 pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {/* Section 1: Image on the right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-violet">
                Your AI, Your Way
              </h2>
              <p>
                AI for anyone and everyone. AI the way any individual wants it
                to be. The individual could be a regular inference user,
                developer, an AI SaaS provider, privacy wary users, or a
                creator. This product enables users to configure their AI
                framework at any level, any combination/configuration, any form
                (mobile/desktop), and any price - no price to suit their needs.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/Natural Language Processing Platform.jpg"
                alt="Configurable AI"
                className="rounded-lg shadow-lg w-full h-100 object-cover"
              />
            </div>
          </div>

          {/* Section 2: Image on the left */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-violet">
                Bridging the AI Gap
              </h2>
              <p>
                While ever-evolving AI keeps pushing new standards, features,
                and models, the need for ease of access, safety, and privacy for
                everyone is still a nascent space. One size fits all is still
                the norm of the industry. Inference usage and free-tier hopping
                are the main usage among price-deprived markets. On the other
                hand, lack of knowledge and exposure prevents mass adoption and
                AI from becoming a real people's technology.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/data-encryption.jpg"
                alt="AI Safety and Privacy"
                className="rounded-lg shadow-lg w-full h-100 object-cover"
              />
            </div>
          </div>

          {/* Section 3: Image on the right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-violet">
                MeeKaan: The AI Explorer
              </h2>
              <p>
                'MeeKaan AI', as the name suggests an Explorer, addresses these
                gaps. With this tool, anyone can intuitively make AI work for
                them, the way they want it to be. The tool is designed to stack
                up as the industry evolves with new features, give more and
                absolute control to the users, allow users to enhance the tool,
                and be inclusive - no technology barred, no user barred. With
                MeeKaan, experience the full expanse of your AI exposure, and
                cherish the AI that works for you.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/Autonomous Decision-Making Systems.jpg"
                alt="AI Empowerment"
                className="rounded-lg shadow-lg w-full h-100 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeekaanAI;
