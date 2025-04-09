import { motion } from "framer-motion";
import { ProductCard } from "../../../components/ui/expandable-cards";
import {
  ShieldCheckIcon,
  CodeIcon,
  AlertTriangleIcon,
  FileSearchIcon,
  UsersIcon,
} from "lucide-react";
import Lottie from "lottie-react";
import cyberAnimation from "../../../animations/cyber.json";

const CyberSecurityCards = [
  {
    description: "Available now",
    title: "Real-time Threat Intelligence Platform",
    src: "/threat-protection.jpg",
    link: "#",
    content: () => (
      <div>
        <p>
          Our real-time threat intelligence platform provides comprehensive
          monitoring and analysis of emerging cyber threats, giving you the
          visibility needed to stay ahead of attackers.
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>Global threat feed with real-time updates</li>
          <li>AI-powered threat correlation and analysis</li>
          <li>Custom alerts for your specific risk profile</li>
          <li>Integration with existing security tools</li>
        </ul>
      </div>
    ),
  },
  {
    description: "New release",
    title: "AI Driven Endpoint Protection Suite",
    src: "/data-encryption.jpg",
    link: "#",
    content: () => (
      <div>
        <p>
          Our AI-driven endpoint protection suite provides advanced security for
          all devices in your network, using behavioral analysis to detect and
          block threats before they execute.
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>Next-gen antivirus with machine learning</li>
          <li>Ransomware protection and rollback</li>
          <li>Device control and application whitelisting</li>
          <li>Centralized management console</li>
        </ul>
      </div>
    ),
  },
];

const services = [
  {
    title: "Penetration Testing",
    icon: CodeIcon,
    types: ["Web", "Mobile", "Network"],
    description:
      "Simulated attacks to discover vulnerabilities before hackers do.",
  },
  {
    title: "Vulnerability Assessments",
    icon: AlertTriangleIcon,
    description: "Identify, prioritize, and patch system weaknesses.",
  },
  {
    title: "Security Audits",
    icon: FileSearchIcon,
    description:
      "Full-stack security evaluations to ensure compliance and defense.",
  },
  {
    title: "Incident Response",
    icon: ShieldCheckIcon,
    description:
      "Real-time help for breaches, ransomware attacks, or suspicious activity.",
  },
  {
    title: "Security Awareness Training",
    icon: UsersIcon,
    description: "Turn your team into your first line of defense.",
  },
];

const CyberSecurity = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-100 to-white py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-32">
            <div className="md:w-1/2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              >
                Cybersecurity{" "}
                <span className="text-emerald-600">Redefined</span>
              </motion.h1>
              <p className="text-lg text-gray-600 mb-8">
                At InkYank, we deliver a comprehensive suite of cybersecurity
                products and services designed to safeguard your digital assets
                at every layer. Our innovative security products and expert
                services ensure you get the protection you need—without the
                complexity.
              </p>
              <div className="flex gap-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Request Security Audit
                </button>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Lottie
                  animationData={cyberAnimation}
                  loop={true}
                  autoPlay={true}
                  style={{ width: "100%", height: "100%" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-emerald-600">Services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Expert cybersecurity services to protect your digital assets
            </p>
          </div>

          {/* First row with 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all h-56"
              >
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                {service.types && (
                  <div className="flex gap-1 mb-2 flex-wrap">
                    {service.types.map((type, i) => (
                      <span
                        key={i}
                        className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Second row with 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 md:mx-auto">
            {services.slice(3).map((service, index) => (
              <motion.div
                key={index + 3}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all h-56"
              >
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                {service.types && (
                  <div className="flex gap-1 mb-2 flex-wrap">
                    {service.types.map((type, i) => (
                      <span
                        key={i}
                        className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-emerald-600">Products</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Innovative security solutions for comprehensive protection
            </p>
          </div>
          <ProductCard cards={CyberSecurityCards} />
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;
