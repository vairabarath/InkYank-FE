import { BrainCircuit, EarthLockIcon } from "lucide-react";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Products",
    submenu: [
      {
        icon: "/blockchain.png",
        title: "Block Chain",
        description:
          "Explore innovative gaming experiences and entertainment powered by Web3 technology, offering decentralized and immersive solutions.",
        subsubmenu: [
          {
            title: "Web3 Gaming and Entertainment",
            description:
              "Explore innovative gaming experiences and entertainment powered by Web3 technology, offering decentralized and immersive solutions.",
            path: "/products/blockchain/web3-gaming",
          },
          {
            title: "Blockchain Infrastructure",
            description:
              "Learn about cutting-edge blockchain solutions that enable secure, scalable, and efficient infrastructure for businesses.",
            path: "/products/blockchain/blockchain-infra",
          },
          {
            title: "DeFi",
            description:
              "Dive into decentralized finance platforms that redefine how you manage, trade, and invest in digital assets securely.",
            path: "/products/blockchain/defi",
          },
        ],
      },
      {
        icon: BrainCircuit,
        title: "Artificial Intelligence",
        description:
          "Learn about cutting-edge AI solutions that enable automation, machine learning, and deep learning models.",
        path: "/products/AI",
        iconColor: "text-[#6B46C1]",
      },
      {
        icon: EarthLockIcon,
        title: "CyberSecurity",
        description:
          "Dive into decentralized finance platforms that redefine how you manage, trade, and invest in digital assets securely.",
        path: "/products/cyber-security",
        iconColor: "text-emerald-600",
      },
    ],
  },
  {
    name: "Community",
    path: "/community",
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
