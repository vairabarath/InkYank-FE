import { motion } from "framer-motion";
import { Calendar, Users, Coins, Code, Shield, Star } from "lucide-react";

const Roadmap = () => {
  const timelineData = [
    {
      date: "November 2025",
      title: "Initial Product Launch",
      description: "Official launch of the core platform and product rollout",
      icon: Calendar,
      color: "bg-blue",
    },
    {
      date: "December 2025",
      title: "Community Building",
      description:
        "Building Community based on the concept we proposed in the community whitepaper",
      icon: Users,
      color: "bg-blue",
    },
    {
      date: "April 2026",
      title: "GES Coin Launch",
      description: "GES Coin Launch in the Exchanges",
      icon: Coins,
      color: "bg-blue",
    },
    {
      date: "June 2026",
      title: "Developer Fund Allocation",
      description:
        "Allocating funds for community developers to encourage development",
      icon: Code,
      color: "bg-blue",
    },
    {
      date: "October 2026",
      title: "Rewards Explorer Launch",
      description:
        "Rewards Explorer Launch for ensuring security and decentralization in PoS Chains",
      icon: Shield,
      color: "bg-blue",
    },
    {
      date: "December 2026",
      title: "Rating Mechanism Launch",
      description:
        "Rating Mechanism Launch based on the Rewards Explorer Chain Data and other relevant data",
      icon: Star,
      color: "bg-blue",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue mb-4">
            Our Roadmap
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our journey as we build the future of decentralized
            technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 md:transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 ${
                      isEven ? "md:pr-12 pl-16" : "md:pl-12 pl-16"
                    } md:pl-0 md:pr-0`}
                  >
                    <div className="bg-white rounded-lg shadow-lg shadow-blue-200 p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`${item.color} p-3 rounded-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-500 mb-1">
                            {item.date}
                          </p>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-[30px] md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`${item.color} w-4 h-4 rounded-full border-4 border-white shadow-lg`}
                    />
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
