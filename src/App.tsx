import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/global-components/Header";
import MobileSidebar from "./components/global-components/MobileSidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Web3gaming from "./pages/Products/blockchain/Web3gaming";
import Defi from "./pages/Products/blockchain/Defi";
import BlockchainInfra from "./pages/Products/blockchain/BlockchainInfra";
import Career from "./pages/Career";
import RecruitmentForm from "./components/careers/form";
import Community from "./pages/Community";
import Footer from "./components/global-components/Footer";
import ArtificialIntelligence from "./pages/Products/AI/artificial-intelligence";
import CyberSecurity from "./pages/Products/CyberSecurity/cyber-security";
import Enrollment from "./pages/Enrollment";
import RewritingCulture from "./components/aiProducts/RewritingCulture";
import MeekaanAIPage from "./components/aiProducts/MeekaanAI";
import DecentPage from "./components/blockchain/infra/DecentPage";
import DemoGuessGameHome from "./pages/Products/blockchain/demoGuess/DemoGuessGameHome";
import GuessPage from "./pages/Products/blockchain/demoGuess";
import Roadmap from "./pages/Products/blockchain/demoGuess/Roadmap";
import FeedbackPage from "./pages/FeedbackPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="pt-[88px]">
        <Header toggleSidebar={toggleSidebar} />{" "}
        {/* Pass toggleSidebar to Header */}
        <MobileSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />{" "}
        {/* Pass state and toggle function to MobileSidebar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/form" element={<RecruitmentForm />} />
          <Route path="/community" element={<Community />} />
          <Route path="/feedback" element={<FeedbackPage />} />

          {/* products routes */}
          <Route
            path="/products/blockchain/web3-gaming"
            element={<Web3gaming />}
          />
          <Route path="/products/blockchain/defi" element={<Defi />} />
          <Route
            path="/products/blockchain/blockchain-infra"
            element={<BlockchainInfra />}
          />
          <Route path="/products/AI" element={<ArtificialIntelligence />} />
          <Route path="/products/cyber-security" element={<CyberSecurity />} />
          <Route
            path="/products/AI/ai-and-the-future"
            element={<RewritingCulture />}
          />
          <Route path="/products/AI/meekaan-ai" element={<MeekaanAIPage />} />
          <Route
            path="/products/blockchain/web3-gaming/decent-coin"
            element={<DecentPage />}
          />
          <Route
            path="/products/blockchain/web3-gaming/decent-coin/roadmap"
            element={<Roadmap />}
          />
          <Route
            path="/products/blockchain/web3-gaming/decent-coin/demo-guess-game"
            element={<DemoGuessGameHome />}
          />
          <Route
            path="/products/blockchain/web3-gaming/decent-coin/demo-guess-game/guess/1"
            element={<GuessPage />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
