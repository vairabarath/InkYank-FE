import { motion } from "framer-motion";
import { ProductCard } from "../components/ui/expandable-cards";

const Cards = ({ body }: { body: string }) => {
  return (
    <motion.div className="bg-white rounded-lg shadow-lg text-center overflow-hidden p-6">
      <p className="text-gray-700">{body}</p>
    </motion.div>
  );
};

const communityActivity = [
  {
    title: "Do Fun, Don’t Task",
    src: "/DecentralizationPoS.jpg",
    link: "#",
    content: () => (
      <p>
        We propose building a layer on top of Proof of Stake chains, that
        provides transparency about validator behaviour and a way to stress-test
        validators' reliability in a "Controlled Environment." This can be
        achieved by creating an infinite number of games and applications on top
        of PoS chains using our proposed concept. "Do Fun, Don’t Task." We are
        visualizing an environment where everybody engages in securing
        blockchain fundamentals like decentralization and security just by
        playing games. Is this possible, or is it just another utopian or
        worthless idea? We want you, the readers of this proposal, to decide
        what it can be.
      </p>
    ),
  },
  {
    title: "Only On-Chain Game Mechanics",
    src: "/GameMechanics.jpg",
    link: "#",
    content: () => (
      <p>
        Only On-Chain Game Mechanism" refers to a paradigm in blockchain gaming
        where all core game logic, state, and execution happen directly and
        transparently on a blockchain. Unlike many blockchain games that
        primarily use the blockchain for asset ownership (like NFTs) while
        keeping the actual gameplay off-chain, only on-chain games are fully
        decentralized and auditable at their core. Game mechanics are executed
        by smart contracts without needing active intervention from developers
        after deployment. The game runs according to its programmed rules,
        autonomously.
      </p>
    ),
  },
];

const Community = () => {
  return (
    <div>
      <section>
        <div className="bg-blue-600 text-white py-20">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Our Community
            </h1>
          </div>

          {/* Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <Cards
              body="A community-led approach fosters transparent decision-making through
            DAOs It builds trust, as decisions are made collectively rather than
            by a central authority."
            />

            {/* Card 2 */}
            <Cards
              body="Open-source development and community contributions drive continuous
            improvement Decentralized models align incentives: users,
            developers, investors benefit directly from network growth."
            />
            {/* Card 3 */}
            <Cards
              body=" Open-source contributions from a global community accelerate
            innovation without relying on a single company’s resources"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="my-12 ">
          <h1 className="text-blue text-4xl text-center font-bold mb-6">
            Communities Activities
          </h1>
          <ProductCard cards={communityActivity} />
        </div>
      </section>
    </div>
  );
};

export default Community;
