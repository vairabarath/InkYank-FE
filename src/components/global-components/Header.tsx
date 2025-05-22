import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full h-[88px] shadow-[0_1px_0_#CED0D5] fixed top-0 left-0 bg-white z-[1000] transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4">
        {/* Logo - always on left */}
        <div className="flex-shrink-0">
          <img
            src="/inkyankLogos/INKYANKLITE.png"
            alt="LOGO"
            className="w-[210px] md:w-[270px]"
          />
        </div>

        {/* Navbar - centered on desktop, hidden on mobile */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Navbar />
        </div>

        {/* Mobile menu button - fixed on right */}
        <div className="lg:hidden flex-shrink-0 ml-auto">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <Menu size={30} />
          </button>
        </div>

        {/* CTA button - right side on desktop */}
        <div className="hidden lg:block flex-shrink-0 ml-4">
          <Link to="/about">
            <button className="bg-blue cursor-pointer transition-all duration-300 ease-in-out border border-blue hover:bg-white hover:text-blue text-white font-semibold py-2 px-4 rounded-md">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
