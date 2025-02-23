import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Menu } from "lucide-react"; // Import the Menu icon

const Header = ({ toggleSidebar }: any) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full h-[88px] shadow-[0_1px_0_#CED0D5] fixed top-0 left-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4">
        <div>
          <img src="/logo.png" alt="LOGO" className="w-[150px] md:w-[225px]" />
        </div>

        <div className="flex-1 flex justify-center">
          <Navbar />
        </div>

        <div className="lg:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <Menu size={30} />
          </button>
        </div>

        <div className="hidden lg:block">
          <button className="bg-blue cursor-pointer transition-all duration-300 ease-in-out border border-blue hover:bg-white hover:text-blue text-white font-semibold py-2 px-4 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
