import Mission from "../components/about/Missions";
import Visions from "../components/about/Visions";
import Profiles from "../components/about/Profiles";
import AnimatedText from "../components/ui/animated-text";

const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 bg-gradient-to-b from-blue-100 to-white items-center justify-center w-full h-auto py-8">
        <h1 className="text-4xl md:text-5xl text-blue font-bold text-center max-w-3xl">
          What we do
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-center max-w-3xl">
          <AnimatedText color="blue" text="Revolutionizing blockchain" /> with
          next-gen <AnimatedText color="blue" text="Web3 solutions" />. Explore
          our cutting-edge products in
          <AnimatedText color="blue" text=" gaming" />,
          <AnimatedText color="blue" text=" DeFi" />, and
          <AnimatedText color="blue" text=" blockchain infrastructure" />.
        </h2>
      </div>
      <div className="mt-12">
        <Mission />
      </div>
      <div className="mt-12">
        <Visions />
      </div>
      <div>
        <Profiles />
      </div>
    </div>
  );
};

export default About;
