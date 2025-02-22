import { ProductCard } from "../../components/ui/expandable-cards";
import { motion } from "framer-motion";

const Web3gamingCards = [
  {
    description: "lanching soon",
    title: "Completely Decentralized Web3 Game",
    src: "/web3gaming1.png",
    link: "#",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
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
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "In progress",
    title: "NFT Based Card Game",
    src: "/web3gaming3.jpg",
    link: "#",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "In progress",
    title: "NFT Game",
    src: "/web3gaming4.png",
    link: "#",
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
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
