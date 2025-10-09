import { ProductCard } from "../../../components/ui/expandable-cards";
import { motion } from "framer-motion";

const Web3gamingCards = [
  {
    description: "launching soon",
    title: "Decent Guess: Hash Prediction Game",
    src: "/web3gaming1.png",
    link: "/products/blockchain/web3-gaming/decent-coin",
    content: () => {
      return (
        <p>
          At first glance, using block hashes for randomness may seem
          ineffective. But when we delve into the core principles of blockchain
          and the challenges of the blockchain trilemma—balancing
          decentralization, scalability, and security—a powerful opportunity
          emerges. Leveraging block hash randomness, we've developed a fully
          decentralized hash prediction game. This game isn't just
          entertainment; it's a practical demonstration of our concept designed
          to reinforce decentralization and enhance security within Proof of
          Stake (PoS) networks.
        </p>
      );
    },
  },
  {
    description: "In progress",
    title: "Sin Coin",
    src: "/web3gaming2.jpg",
    link: "#",
    content: () => {
      return (
        <p>
          Introducing Sin Coin, a revolutionary Web3 game that inherits the
          legendary Proof of Work ideology, offering a unique blend of effort
          and reward. In Sin Coin, players will engage in challenges that
          require genuine effort and skill, mirroring the core principles of
          Proof of Work, where success is earned through hard work rather than
          luck alone. But what truly sets Sin Coin apart is its dynamic reward
          system – players will be rewarded not only based on their commitment
          and efforts but also with an exciting element of randomness, ensuring
          every experience is thrilling and unpredictable. Get ready for a game
          where your actions matter and every decision counts, as you strive for
          rewards that are as much about strategy as they are about chance!
        </p>
      );
    },
  },

  {
    description: "In progress",
    title: "NFT-Based Card Game",
    src: "/web3gaming3.jpg",
    link: "#",
    content: () => {
      return (
        <p>
          Experience a revolution in card gaming with an NFT-based card game
          that fuses the classic, strategic gameplay you love with the power of
          decentralization. This isn't just another card game—it's a paradigm
          shift. By integrating blockchain technology, every card becomes a true
          asset, owned by you and free from interference. Gone are the days of
          centralized control or changes that affect the game’s integrity. With
          our gaming mechanics, players can truly own, trade, and build their
          own card decks, while ensuring that each move is governed by the
          community, not a centralized authority. Get ready to consume card
          games in an entirely new way—one where your collection is yours, and
          your gameplay is as secure as it is thrilling.
        </p>
      );
    },
  },
  {
    description: "In progress",
    title: "Decentralized NFT-Based Game",
    src: "/web3gaming4.png",
    link: "#",
    content: () => {
      return (
        <p>
          Imagine a completely decentralized game experience where every element
          is controlled by the players, not just a marketplace or developer.
          This NFT-based game goes beyond selling digital pets or traits that
          developers/companies/players don’t even truly own or create. Here,
          everything from the characters to the in-game assets is entirely
          on-chain, giving players full control over what they acquire, create,
          and trade. With no centralized system, the game ensures a seamless,
          truly decentralized experience. Whether you’re hunting for rare items
          or forging new experiences, this game will redefine how on-chain
          transactions are used, creating a unique opportunity for blockchain
          ecosystems across all chains—completely agnostic to any specific
          blockchain. Get ready for a new era of gaming where your actions shape
          the entire world, and every transaction brings value to the community.
        </p>
      );
    },
  },
];

const Web3gaming = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-100 to-white">
        <div className="flex flex-col gap-6 px-6 items-center justify-center mx-auto max-w-[1140px] h-auto pt-20 pb-12 ">
          <h1 className="text-4xl text-blue md:text-5xl text-center font-bold mb-4">
            Web3 Gaming and Entertainment
          </h1>
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center max-w-2xl lg:max-w-3xl">
            Explore innovative gaming experiences and entertainment powered by
            Web3 technology, offering decentralized and immersive solutions.
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 items-center justify-center max-w-[1140px] mx-auto px-6 py-12">
        <motion.div
          className="p-6 bg-white rounded-lg hover:shadow-blue-300 shadow-lg max-w-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-blue-600 text-2xl font-semibold">
            Immersive Worlds
          </h2>
          <p className="text-gray-700 mt-4">
            Dive into decentralized gaming worlds that bring players closer to
            the action with cutting-edge Web3 technology.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white rounded-lg hover:shadow-blue-300 shadow-lg max-w-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-blue-600 text-2xl font-semibold">
            Decentralized Access
          </h2>
          <p className="text-gray-700 mt-4">
            Experience the future of entertainment where gaming and creativity
            are powered by blockchain technologies.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white rounded-lg hover:shadow-blue-300 shadow-lg max-w-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-blue-600 text-2xl font-semibold">
            Endless Innovation
          </h2>
          <p className="text-gray-700 mt-4">
            Explore groundbreaking features and entertainment experiences
            shaping the future of Web3 gaming.
          </p>
        </motion.div>
      </div>

      <div className="bg-blue-50 mt-12 py-4">
        <div className=" max-w-[1140px] mx-auto px-6 h-auto ">
          <h1 className="text-2xl text-blue md:text-4xl font-bold text-center mb-10">
            Our Web3 Gaming and Entertainment Products
          </h1>
          <div>
            <ProductCard cards={Web3gamingCards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3gaming;
