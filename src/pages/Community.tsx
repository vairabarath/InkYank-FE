import { ProductCard } from "../components/ui/expandable-cards";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

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

const CardData = [
  {
    body: "A community-led approach fosters transparent decision-making through DAOs. It builds trust, as decisions are made collectively rather than by a central authority.",
  },
  {
    body: "Open-source development and community contributions drive continuous improvement Decentralized models align incentives: users, developers, investors benefit directly from network growth.",
  },
  {
    body: "Open-source contributions from a global community accelerate innovation without relying on a single company’s resources",
  },
];

const Community = () => {
  return (
    <div>
      {/* hero section */}
      <section>
        <div className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative text-center mb-12">
              <h1 className="text-4xl font-bold ">Welcome to Our Community</h1>
              <div className="absolute hidden md:block -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-1 bg-white animate-drawSmallLineHorizontal lg:animate-drawSmallLineHorizontal"></div>
            </div>

            {/* line animated cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 px-6">
              {CardData.map((card, index) => (
                <div
                  key={index}
                  className="relative bg-transparent p-6 rounded-lg"
                >
                  <p className="text-white">{card.body}</p>
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-white"
                    initial={{ height: 0 }}
                    animate={{ height: "3rem" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-lg shadow-lg shadow-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  ></motion.div>
                </div>
              ))}
            </div>

            {/* mobile slider */}
            <div className="md:hidden px-4">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination, Navigation]}
              >
                {CardData.map((card, index) => (
                  <SwiperSlide key={index}>
                    <div className=" bg-transparent p-4 rounded-lg border min-h-50 max-h-50 border-white">
                      <p className="text-white">{card.body}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/*  */}
        </div>
      </section>

      {/* community Activities Section-2 */}
      <section>
        <div className="my-12 ">
          <h1 className="text-blue text-4xl text-center font-bold mb-6">
            Community Activities
          </h1>
          <ProductCard cards={communityActivity} />
        </div>
      </section>
    </div>
  );
};

export default Community;
