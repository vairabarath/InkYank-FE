import { NavLink } from "react-router-dom";
import { navLinks } from "../../helper/Navlink";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

const MobileSidebar = ({ isSidebarOpen, toggleSidebar }: any) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <div className="lg:hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-[1000] w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-6 right-4 text-gray-800 focus:outline-none"
          onClick={toggleSidebar} // Close the sidebar
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
                  onClick={toggleSidebar} // Close the sidebar on link click
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
                      onClick={toggleSidebar} // Close the sidebar on link click
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
