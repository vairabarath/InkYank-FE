import { AnimatedTestimonials } from "../ui/animated-testimonials";

const AIResearchTeam = () => {
  const testimonials = [
    {
      quote:
        "MAP leads technical innovation and AI research, architecting scalable solutions while guiding teams through cutting-edge developments. He shapes strategic roadmaps and ensures excellence in emerging technologies.",
      name: "MAP",
      designation: "Tech Lead, AI R&D Head",
      src: "/Profiles/MAP.jpg",
    },
    {
      quote:
        "In the realm where silicon dreams merge with human consciousness, I weave algorithms that transcend mere code. Every function is a spell, every neural network a gateway to understanding the infinite dance between mind and machine.",
      name: "Aetheron",
      designation: "Architect of Digital Realms",
      src: "/Profiles/aetheron.png",
    },
    {
      quote:
        "A dedicated team of researchers and developers working collaboratively on cutting-edge AI solutions. Our combined expertise spans machine learning, neural networks, consciousness research, and human-computer interaction.",
      name: "Research Team",
      designation: "AI Research & Development",
      src: "/Profiles/team.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
};

export default AIResearchTeam;
