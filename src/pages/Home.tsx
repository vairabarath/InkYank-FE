import Hero from "../components/home/Hero";
import BlockchainSection from "../components/home/Logos";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <main className="">
      {/* Hero Section */}
      <section className=" overflow-hidden border-b border-gray-300">
        <Hero />
      </section>
      <section className="my-12">
        <Services />
      </section>
      <section className="mt-12">
        <BlockchainSection />
      </section>
    </main>
  );
};

export default Home;
