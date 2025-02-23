import Hero from "../components/home/Hero";
import BlockchainSection from "../components/home/Logos";

const Home = () => {
  return (
    <main className="bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Animated Background */}
        <Hero />
      </section>
      <section>
        <BlockchainSection />
      </section>
      <section></section>
    </main>
  );
};

export default Home;
