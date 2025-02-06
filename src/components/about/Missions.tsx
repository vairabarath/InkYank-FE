import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../../../node_modules/swiper/swiper.min.css";

const Mission = () => {
  const missions = [
    {
      title: "Empowering the Decentralized Future",
      description:
        "Our mission is to democratize access to decentralized technologies by developing scalable and secure blockchain solutions. We aim to provide individuals, developers, and businesses with the tools needed to unlock the full potential of blockchain, Web3, and decentralized finance.",
    },
    {
      title: "Building Trust in the Digital Economy",
      description:
        "We strive to create a more transparent, secure, and accessible digital world by providing innovative blockchain infrastructure. Our solutions enable businesses to build decentralized applications that redefine industries such as finance, gaming, and entertainment.",
    },
    {
      title: "Revolutionizing Financial Systems",
      description:
        "Our mission is to transform traditional financial systems through decentralized technologies, offering individuals and organizations new ways to manage, invest, and transact securely and autonomously.",
    },
    {
      title: "Enhancing Digital Experiences with Blockchain",
      description:
        "We are committed to revolutionizing gaming, entertainment, and financial ecosystems with blockchain-based solutions that prioritize user sovereignty, fairness, and transparency.",
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
