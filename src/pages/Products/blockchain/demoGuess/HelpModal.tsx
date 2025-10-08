import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, X } from "lucide-react";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-3xl p-6 sm:p-8 mx-4 bg-gray-900 border border-purple-500/30 text-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h1 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
              <HelpCircle className="w-8 h-8" />
              Welcome to GuessCoin!
            </h1>

            <div className="space-y-8 text-gray-300 max-h-[70vh] overflow-y-auto pr-4 font-mono">
              {/* --- NEW SECTION AS REQUESTED --- */}
              <section>
                <p className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                  <strong className="text-white">What is GuessCoin?</strong>{" "}
                  GuessCoin is a simple and fun blockchain-based guessing game.
                  Your goal is to correctly guess a secret number within a set
                  range. It’s a game of chance, secured by cryptography to
                  ensure fairness.
                </p>
              </section>

              {/* --- NEW MAIN TITLE AS REQUESTED --- */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-purple-300 border-b-2 border-purple-500/30 pb-2 inline-block">
                  Advanced Prediction Protocol
                </h2>
              </div>

              <section>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                  How to Play
                </h3>
                <ul className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Set the Target Block:</strong> Use the "Block
                    Increment Count" slider to decide how far into the future
                    you want to aim. A value of '20' means you're targeting a
                    block that will be mined 20 blocks after the current one.
                  </li>
                  <li>
                    <strong>Provide Hashes:</strong> In the "Hash Generation"
                    section, you need an "Actual Hash" (your prediction) and a
                    "Secret Key Hash". You can either paste your own
                    64-character hex values or click "GENERATE" to create random
                    ones.
                  </li>
                  <li>
                    <strong>Configure Tokens:</strong> Use the "Token Size"
                    slider to break your main hash into smaller pieces called
                    "Power Hammers". This is a key part of the strategy!
                  </li>
                  <li>
                    <strong>Submit Your Guess:</strong> Once both hashes are
                    valid (64 characters long), the "SUBMIT GUESS" button will
                    activate. Click it to lock in your prediction.
                  </li>
                  <li>
                    <strong>Fetch the Result:</strong> After your submission, a
                    "Results" area will appear below. Wait for the target block
                    to be mined by the network, then click "FETCH RESULT" to see
                    how your prediction compares to the real block hash.
                  </li>
                </ul>
              </section>

              {/* --- NEW SECTION FOR RESULTS EXPLANATION --- */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-purple-300 border-b-2 border-purple-500/30 pb-2 inline-block">
                  Understanding Your Results
                </h2>
              </div>

              <section>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                  Guess Results Overview
                </h3>
                <p>
                  This is your mission control panel. It shows the{" "}
                  <strong className="text-white">Current Block</strong> number
                  on the network and the{" "}
                  <strong className="text-white">Target Block</strong> you are
                  aiming for. The progress bar tracks the mining progress in
                  real-time, giving you an estimate of when your results will be
                  ready to fetch.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                  Match Analysis
                </h3>
                <p>
                  This is your main scorecard. It tells you exactly how many of
                  your predicted tokens ("Power Hammers") were found in the
                  actual block's hash. The percentage gives you a clear grade on
                  your prediction's accuracy. A higher match count is a better
                  score.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                  Token Comparison
                </h3>
                <p className="mb-3">
                  This section gives you a detailed visual breakdown of your
                  performance:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong className="text-white">
                      Your Predicted Hammers:
                    </strong>{" "}
                    This grid displays all the "Power Hammers" you submitted.
                    They are color-coded after the results are fetched: green
                    for a successful match and red for a miss. This helps you
                    see which parts of your prediction were accurate.
                  </li>
                  <li>
                    <strong className="text-white">
                      Actual Block Treasure Boxes:
                    </strong>{" "}
                    These represent the actual token sequences from the real
                    block hash. If a "Treasure Box" is shown as broken open, it
                    means you successfully predicted that token sequence with
                    one of your hammers!
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                  FAQs & Helpful Tips
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-white">
                      Q: What is a "hash"?
                    </p>
                    <p>
                      A: Think of it as a unique, unpredictable serial number
                      for a blockchain block. It's generated by a complex
                      cryptographic process. Our game is all about trying to
                      predict this serial number before it's created.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Q: What is the "Secret Key Hash" for?
                    </p>
                    <p>
                      A: It's part of the game's security. It's combined with
                      your main prediction to create a "Dummy Hash", which
                      ensures your guess is locked in fairly without being
                      revealed until you check the results.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Tip: Focus on the Tokens!
                    </p>
                    <p>
                      Predicting an entire 64-character hash is nearly
                      impossible. A better strategy is to analyze patterns and
                      try to predict smaller token sequences. Adjusting the
                      "Token Size" slider changes your strategy for what kind of
                      sequences you're trying to match.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelpModal;
