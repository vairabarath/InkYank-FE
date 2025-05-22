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
          Empowering a smarter, safer, and decentralized world through
          <AnimatedText color="blue" text=" Blockchain" />,
          <AnimatedText color="blue" text=" AI" />, and
          <AnimatedText color="blue" text=" Cybersecurity" />.
        </h2>
      </div>

      <div className="mt-12">
        <Mission />
      </div>
      <div className="mt-12 overflow-x-hidden">
        <Visions />
      </div>
      <div className="max-w-[1140px] mx-auto mt-12 px-4 md:px-0">
        <Profiles />
      </div>
    </div>
  );
};

export default About;
