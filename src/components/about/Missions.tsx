import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../../../node_modules/swiper/swiper.min.css";

const Mission = () => {
  const missions = [
    {
      title: "Optimized On-Chain Logic",
      description:
        "We strive to integrate most of the app and game logic on-chain while ensuring cost efficiency, maximizing transparency, and maintaining seamless performance.",
    },
    {
      title: "Democratizing Finance with DeFi",
      description:
        "Our goal is to make financial systems more accessible and inclusive through decentralized finance, eliminating barriers and promoting financial freedom for all.",
    },
    {
      title: "Unlocking Blockchain’s Potential in Gaming",
      description:
        "We harness the full power of blockchain to revolutionize gaming, enabling true asset ownership, transparent mechanics, and innovative play-to-earn models.",
    },
    {
      title: "Building Robust Blockchain Infrastructure",
      description:
        "We are dedicated to developing powerful infrastructure tools that strengthen blockchain networks, enhance user experience, and drive widespread adoption.",
    },
  ];

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-5 md:mb-12">
            Our Mission
          </h2>
          <div className="absolute hidden md:block bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-500 animate-drawLineHorizontal lg:animate-drawLineHorizontalLg"></div>
        </div>

        <div className="md:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {missions.map((mission, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white p-6 rounded-lg border min-h-70 max-h-70 border-blue">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600">{mission.description}</p>

                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-blue-500 animate"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg shadow-blue-200 "
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {mission.title}
              </h3>
              <p className="text-gray-600">{mission.description}</p>

              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-blue-500 animate-drawLineVertical"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
