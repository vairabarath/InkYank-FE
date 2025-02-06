import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/global-components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Web3gaming from "./pages/Products/Web3gaming";
import Defi from "./pages/Products/Defi";
import BlockchainInfra from "./pages/Products/BlockchainInfra";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* products routes */}
        <Route path="/products/web3-gaming" element={<Web3gaming />} />
        <Route path="/products/defi" element={<Defi />} />
        <Route
          path="/products/blockchain-infra"
          element={<BlockchainInfra />}
        />
      </Routes>
    </>
  );
}

export default App;
