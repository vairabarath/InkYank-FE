import { motion } from "framer-motion";
import { ProductCard } from "../../../components/ui/expandable-cards";
import {
  ShieldCheckIcon,
  LockIcon,
  NetworkIcon,
  EyeOffIcon,
  FingerprintIcon,
  ServerIcon,
} from "lucide-react";

const CyberSecurityCards = [
  {
    description: "Available now",
    title: "Advanced Threat Protection",
    src: "/threat-protection.jpg",
    link: "#",
    content: () => (
      <div>
        <p>
          Our comprehensive threat protection system combines AI-powered
          detection with human expertise to identify and neutralize cyber
          threats in real-time.
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>Behavioral analysis to detect zero-day exploits</li>
          <li>Automated threat containment and remediation</li>
          <li>Continuous monitoring and threat intelligence updates</li>
          <li>Cross-platform protection for all endpoints</li>
        </ul>
      </div>
    ),
  },
  {
    description: "New release",
    title: "Data Encryption Suite",
    src: "/data-encryption.jpg",
    link: "#",
    content: () => (
      <p>
        End-to-end encryption solutions that protect your data at rest, in
        transit, and during processing. Our quantum-resistant algorithms ensure
        your sensitive information remains secure even against future threats.
        The suite includes centralized key management, automated encryption
        policies, and seamless integration with existing workflows. Perfect for
        healthcare, finance, and government applications where data privacy is
        paramount.
      </p>
    ),
  },
  {
    description: "Coming soon",
    title: "Network Security Platform",
    src: "/network-security.jpg",
    link: "#",
    content: () => (
      <div>
        <p>
          Next-generation network protection that adapts to evolving threats:
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>AI-driven anomaly detection</li>
          <li>Automated vulnerability patching</li>
          <li>Micro-segmentation for internal networks</li>
          <li>Real-time threat visualization</li>
        </ul>
        <p className="mt-4">
          The platform learns your network's normal behavior to detect
          deviations that might indicate compromise, reducing false positives
          while catching sophisticated attacks.
        </p>
      </div>
    ),
  },
];

const CyberSecurity = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-[1140px]  mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-32">
            <div className="md:w-1/2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Cybersecurity <span className="text-blue-400">Redefined</span>
              </motion.h1>
              <p className="text-lg text-gray-300 mb-8">
                Enterprise-grade security solutions that protect your digital
                assets from evolving threats. Our multi-layered approach
                combines cutting-edge technology with strategic defense
                mechanisms.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Request Security Audit
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="/cyber-security-hero.png" alt="Cybersecurity" />
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-blue-600">Security</span> Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Threat Intelligence",
                icon: EyeOffIcon,
                description:
                  "Real-time monitoring and analysis of emerging threats",
              },
              {
                title: "Endpoint Protection",
                icon: ShieldCheckIcon,
                description:
                  "Advanced security for all devices in your network",
              },
              {
                title: "Identity Management",
                icon: FingerprintIcon,
                description: "Secure authentication and access control systems",
              },
              {
                title: "Data Security",
                icon: LockIcon,
                description: "Encryption and data loss prevention solutions",
              },
              {
                title: "Network Defense",
                icon: NetworkIcon,
                description: "Protection against intrusions and DDoS attacks",
              },
              {
                title: "Cloud Security",
                icon: ServerIcon,
                description: "Specialized protection for cloud infrastructure",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cybersecurity <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive protection tailored to your organization's specific
              needs and risk profile.
            </p>
          </div>

          <ProductCard cards={CyberSecurityCards} />
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;
