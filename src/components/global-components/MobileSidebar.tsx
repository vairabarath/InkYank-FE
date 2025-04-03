import { NavLink } from "react-router-dom";
import { navLinks } from "../../helper/Navlink";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

const MobileSidebar = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const [activeMainMenu, setActiveMainMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      {/* Sidebar Overlay - Fixed the opacity issue */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/70 z-[999] backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-[1000] w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        {/* Rest of your sidebar content remains the same */}
        <div className="flex items-center justify-between p-4 border-b">
          <img src="/logo.png" alt="LOGO" className="w-[150px] md:w-[225px]" />
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <X size={25} />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <div key={link.name} className="mb-1">
              {/* Main Menu Items */}
              {link.path ? (
                <NavLink
                  to={link.path}
                  className="block py-3 px-4 text-gray-900 font-medium rounded hover:bg-gray-100"
                  onClick={toggleSidebar}
                >
                  {link.name}
                </NavLink>
              ) : (
                <div
                  className="flex justify-between items-center py-3 px-4 text-gray-900 font-medium rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    if (activeMainMenu === link.name) {
                      setActiveMainMenu(null);
                      setActiveSubmenu(null);
                    } else {
                      setActiveMainMenu(link.name);
                      setActiveSubmenu(null);
                    }
                  }}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeMainMenu === link.name ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}

              {/* First Level Submenu */}
              {link.submenu && activeMainMenu === link.name && (
                <div className="ml-4 mt-1">
                  {link.submenu.map((item) => (
                    <div key={item.title}>
                      {item.path ? (
                        <NavLink
                          to={item.path}
                          className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-50"
                          onClick={toggleSidebar}
                        >
                          {item.title}
                        </NavLink>
                      ) : (
                        <div
                          className="flex justify-between items-center py-2 px-4 text-gray-700 rounded hover:bg-gray-50 cursor-pointer"
                          onClick={() => {
                            if (activeSubmenu === item.title) {
                              setActiveSubmenu(null);
                            } else {
                              setActiveSubmenu(item.title);
                            }
                          }}
                        >
                          {item.title}
                          {item.subsubmenu && (
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                activeSubmenu === item.title ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </div>
                      )}

                      {/* Second Level Submenu */}
                      {item.subsubmenu && activeSubmenu === item.title && (
                        <div className="ml-4">
                          {item.subsubmenu.map((subitem) => (
                            <NavLink
                              key={subitem.title}
                              to={subitem.path}
                              className="block py-2 px-4 text-gray-600 rounded hover:bg-gray-50"
                              onClick={toggleSidebar}
                            >
                              {subitem.title}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
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
