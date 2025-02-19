import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../helper/Navlink";
import { ChevronDown, Menu, X } from "lucide-react";

const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="lg:hidden">
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
          <img src="/logo.png" alt="LOGO" className="w-[150px] md:w-[225px]" />
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
  );
};

export default MobileSidebar;
