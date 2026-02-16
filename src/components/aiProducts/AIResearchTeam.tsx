import { AnimatedTestimonials } from "../ui/animated-testimonials";

const AIResearchTeam = () => {
  const testimonials = [
    {
      quote:
        "Arunprabhu Murugesan leads technical innovation and AI research, architecting scalable solutions while guiding teams through cutting-edge developments. He shapes strategic roadmaps and ensures excellence in emerging technologies.",
      name: "Arunprabhu Murugesan",
      designation: "Tech Lead, AI R&D Head",
      src: "/Profiles/arun.png",
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
