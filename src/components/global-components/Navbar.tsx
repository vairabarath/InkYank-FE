import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Products",
      submenu: [
        {
          title: "Web3 Gaming and Entertainment",
          description:
            "Explore innovative gaming experiences and entertainment powered by Web3 technology, offering decentralized and immersive solutions.",
          path: "/products/web3-gaming",
        },
        {
          title: "Blockchain Infrastructure",
          description:
            "Learn about cutting-edge blockchain solutions that enable secure, scalable, and efficient infrastructure for businesses.",
          path: "/products/blockchain-infra",
        },
        {
          title: "DeFi",
          description:
            "Dive into decentralized finance platforms that redefine how you manage, trade, and invest in digital assets securely.",
          path: "/products/defi",
        },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Community",
      path: "/community",
    },
    {
      name: "Careers",
      path: "/careers",
    },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-around gap-20 h-[88px] items-center w-full">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group">
            {link.path ? (
              <NavLink
                to={link.path}
                className="inline-flex h-10 w-max items-center justify-center relative py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-blue before:duration-200 hover:before:scale-x-100"
              >
                {link.name}
              </NavLink>
            ) : (
              <span className="inline-flex h-10 w-max items-center justify-center relative py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-blue before:duration-200 group-hover:before:scale-x-100 cursor-pointer">
                {link.name}
                <ChevronDown className="w-5 h-5 ml-2 font-semibold transition-transform group-hover:rotate-180" />
              </span>
            )}

            {link.submenu && (
              <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col min-w-[400px] bg-white shadow-lg  rounded-md overflow-hidden">
                {link.submenu.map((item) => (
                  <NavLink
                    to={item.path}
                    key={item.title}
                    className="p-4 hover:bg-gray-100 flex flex-col text-left submenu-items"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">
                        {item.title}
                      </span>
                      <ArrowRight className="text-blue opacity-0 transform translate-x-[-8px] transition-all duration-[300ms] ease-in-out w-4 h-4 arrow ml-2" />
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {item.description}
                    </p>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={toggleSidebar}
        >
          <Menu size={30} />
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 w-64 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            className="absolute top-6 right-4 text-gray-800 focus:outline-none "
            onClick={toggleSidebar}
          >
            <X size={25} />
          </button>
          <div className="flex items-center justify-start p-4">
            <img
              src="/logo.png"
              alt="LOGO"
              className="w-[150px] md:w-[225px]"
            />
          </div>

          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <div key={link.name} className="mb-2">
                {link.path ? (
                  <NavLink
                    to={link.path}
                    className="block py-2 px-4 text-gray-900 font-semibold"
                    onClick={toggleSidebar}
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <div
                    className="flex justify-between items-center py-2 px-4 text-gray-900 font-semibold cursor-pointer"
                    onClick={() =>
                      setActiveSubmenu(
                        activeSubmenu === link.name ? null : (link.name as any)
                      )
                    }
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeSubmenu === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                )}

                {link.submenu && activeSubmenu === link.name && (
                  <div className="ml-4 mt-2">
                    {link.submenu.map((item) => (
                      <NavLink
                        to={item.path}
                        key={item.title}
                        className="block py-2 px-4 text-gray-700"
                        onClick={toggleSidebar}
                      >
                        {item.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
