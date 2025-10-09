import { Link } from "react-router-dom";
import { useEffect } from "react";
import FeedbackForm from "../../ui/demoGuess/FeedbackForm";

export default function DecentPage() {
  // Scroll to feedback form if URL contains hash
  useEffect(() => {
    if (window.location.hash === "#feedback-form") {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        const feedbackSection = document.getElementById("feedback-form");
        if (feedbackSection) {
          feedbackSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50 text-center px-6 py-20 md:py-28">
        <h1 className="text-4xl md:text-5xl font-bold text-blue mb-4">
          Decent Guess: Hash Prediction Game
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Predict future block hashes and earn rewards. A gamified approach to
          blockchain transparency and network security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products/blockchain/web3-gaming/decent-coin/roadmap"
            className="bg-blue text-white font-semibold text-lg px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            View Roadmap
          </Link>
          <Link
            to="/products/blockchain/web3-gaming/decent-coin/demo-guess-game"
            className="bg-blue text-white font-semibold text-lg px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Play Demo Game
          </Link>
        </div>
      </section>

      {/* Section 1: What is Decent - Left Text, Right Image */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue mb-6">
              What is Decent GUESS GAME?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A complete decentralized hash prediction game entirely build on
              blockhash based randomness. Complete game logic is written into
              smart contracts
            </p>
          </div>
          <div className="">
            <img
              src="/predict.png"
              alt="Prediction and Blockchain"
              className="rounded-lg shadow-lg w-full h-100 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Game Modes - Right Text, Left Image */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="">
                <img
                  src="/gamemodes.png"
                  alt="Game Modes"
                  className="rounded-lg shadow-lg w-full h-100 object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue mb-6">
                Flexible Game Modes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Free Play:</strong> Participate without any tokens.
                Perfect for beginners to learn the mechanics and earn 100 GES
                per successful match.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Paid Mode:</strong> Burn 25 GES tokens per guess to
                unlock 5× higher rewards (500 GES per match). Every paid guess
                permanently reduces token supply.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Complex Mode:</strong> Enable advanced difficulty with
                additional randomness layers for bonus rewards. Higher risk,
                higher returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works - Left Text, Right Image */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue mb-6">
              How It Works
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Submit Prediction:</strong> Enter a 64-digit hex
                    value predicting a future block hash (513-2048 blocks
                    ahead).
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Secure Masking:</strong> Your prediction is masked
                    with a dummy hash using your secret key to prevent
                    manipulation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Wait for Block:</strong> After the target block is
                    mined, validate your matches off-chain.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Claim Rewards:</strong> Submit results for on-chain
                    verification and receive GES tokens instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <img
                src="/fairness.png"
                alt="Provably Fair System"
                className="rounded-lg shadow-lg w-full h-100 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Tokenomics - Right Text, Left Image */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="">
                <img
                  src="/Tokenomics.png"
                  alt="Tokenomics"
                  className="rounded-lg shadow-lg w-full h-100 object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue mb-6">
                Sustainable Tokenomics
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                A mint only game where coin rewards will be minted for the
                successful predictions Transparent and organic token launch,
                which means make the game attractive and popular And then
                launching the coins to the exchange in an organic manner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Polygon - Left Text, Right Image */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue mb-6">
              Built on Polygon
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Polygon's Ethereum-aligned architecture provides the perfect
              foundation for Decent. With 100+ validators, low gas fees, and
              fast transactions, it delivers the transparency and efficiency
              needed for seamless gameplay.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-gray-800 text-sm">
                  Fast Transactions
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold text-gray-800 text-sm">
                  Low Gas Fees
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="font-semibold text-gray-800 text-sm">
                  Ethereum Security
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">👁️</div>
                <div className="font-semibold text-gray-800 text-sm">
                  Transparent Validators
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <img
                src="/polygon.jpg"
                alt="Polygon Network"
                className="rounded-lg shadow-lg w-full h-100 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form - ADD ID HERE */}
      <section
        id="feedback-form"
        className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 scroll-mt-16"
      >
        <FeedbackForm />
      </section>
    </div>
  );
}
