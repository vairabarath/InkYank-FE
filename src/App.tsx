import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/global-components/Header";
import MobileSidebar from "./components/global-components/MobileSidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Web3gaming from "./pages/Products/Web3gaming";
import Defi from "./pages/Products/Defi";
import BlockchainInfra from "./pages/Products/BlockchainInfra";
import Career from "./pages/Career";
import RecruitmentForm from "./components/careers/form";
import Community from "./pages/Community";
import Footer from "./components/global-components/Footer";

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
          <Route path="/form" element={<RecruitmentForm />} />
          <Route path="/community" element={<Community />} />

          {/* products routes */}
          <Route path="/products/web3-gaming" element={<Web3gaming />} />
          <Route path="/products/defi" element={<Defi />} />
          <Route
            path="/products/blockchain-infra"
            element={<BlockchainInfra />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
