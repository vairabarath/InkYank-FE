import { AnimatedTestimonials } from "../ui/animated-testimonials";

const AIResearchTeam = () => {
  const testimonials = [
    {
      quote:
        "Arunprabhu Murugesan dual-leads the firm’s technical operations and scientific research. As Technical Lead, he oversees large-scale engineering and emerging tech deployment while directing internal R&D into AI theory and evolutionary computational models.",
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
