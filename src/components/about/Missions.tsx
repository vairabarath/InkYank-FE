import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../../../node_modules/swiper/swiper.min.css";

const Mission = () => {
  const missions = [
    {
      title: "Optimized On-Chain Logic",
      icon: "/aboutus/blockchainIcon.png",
      description:
        "We integrate core app and game logic on-chain, balancing cost efficiency, transparency, and performance—so decentralization doesn’t compromise user experience.",
    },
    {
      title: "Democratizing Finance with DeFi",
      icon: "/aboutus/market.png",
      description:
        "We break down financial barriers through decentralized systems — providing open access to global finance, ensuring self-custody of assets, and enabling programmable money that works for everyone.",
    },
    {
      title: "Humans and AI: Partners in Progress",
      icon: "/aboutus/perspective.png",
      description:
        "We envision a future where AI and humans thrive together—enhancing creativity, guiding decisions, and solving real-world challenges across industries through responsible innovation.",
    },
    {
      title: "Unbreakable Digital Defense",
      icon: "/aboutus/security.png",
      description:
        "We protect businesses with proactive cybersecurity—penetration testing, threat intelligence, and real-time incident response—so innovation thrives without compromise.",
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
                <div className="relative bg-white p-6 rounded-lg border min-h-74 max-h-74 border-blue">
                  {mission.icon && (
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <img
                        src={mission.icon}
                        className="w-10 h-10 text-emerald-600"
                      />
                    </div>
                  )}
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
              className="relative bg-white p-8 rounded-lg shadow-lg shadow-blue-200"
            >
              {mission.icon && (
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img
                    src={mission.icon}
                    className="w-10 h-10 text-emerald-600"
                  />
                </div>
              )}

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
