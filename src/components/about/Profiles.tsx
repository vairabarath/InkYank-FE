import { AnimatedTestimonials } from "../ui/animated-testimonials";

const Profiles = () => {
  const testimonials = [
    {
      quote:
        "Vinoth sets the overall vision and long-term goals for the company while focusing on innovative ideas and managing operations. He excels in integrating technology and business to drive growth and success.",
      name: "Vinoth",
      designation: "CEO",
      src: "/Profiles/vinoth.jpg",
    },
    {
      quote:
        "Anand develops and leads the company's tech vision and roadmap, ensuring alignment with business goals. He manages technical teams and drives the adoption of new technologies and R&D efforts.",
      name: "Anandh",
      designation: "CTO",
      src: "/Profiles/anandh.jpg",
    },
    {
      quote:
        "Lakshmi leads the development and implementation of AI solutions, optimizing processes and enhancing decision-making with machine learning. She drives innovation by exploring new AI technologies and applying them to real-world business challenges.",
      name: "Lakshmi",
      designation: "AI Expert",
      src: "/Profiles/lakshmi.jpg",
    },
    {
      quote:
        "Vigneshwaran manages project timelines, resources, and team coordination to ensure timely delivery. He oversees project execution from planning to completion, ensuring that all objectives and client expectations are met.",
      name: "Vigneshwaran",
      designation: "Project Lead",
      src: "/Profiles/vigneshwaran.jpg",
    },
    {
      quote:
        "Arun Santhosh specializes in protecting systems and data from cyber threats, implementing robust security measures across the organization. He ensures the integrity, confidentiality, and availability of digital assets through proactive security strategies.",
      name: "Arun Santhosh",
      designation: "CyberSecurity Expert",
      src: "/Profiles/arunSanthosh.jpg",
    },
    {
      quote:
        "Arunprabhu Murugesan dual-leads the firm’s technical operations and scientific research. As Technical Lead, he oversees large-scale engineering and emerging tech deployment while directing internal R&D into AI theory and evolutionary computational models.",
      name: "Arunprabhu Murugesan",
      designation: "Tech Lead, AI R&D Head",
      src: "/Profiles/arun.png",
    },
    {
      quote:
        "Barath is skilled in both frontend and backend development, building seamless and efficient web applications. He handles the entire development lifecycle, ensuring smooth user experiences and robust server-side functionality.",
      name: "Barath",
      designation: "Full Stack Developer ",
      src: "/Profiles/barath.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
};

export default Profiles;
