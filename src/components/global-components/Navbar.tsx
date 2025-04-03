import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../helper/Navlink";

// Define proper types for your nav items
interface SubSubmenuItem {
  title: string;
  path: string;
  description?: string;
}

interface SubmenuItem {
  title: string;
  path?: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }> | string;
  subsubmenu?: SubSubmenuItem[];
  iconColor?: string;
}

interface NavLinkItem {
  name: string;
  path?: string;
  submenu?: SubmenuItem[];
}

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubmenu(null);
  };

  const handleSubmenuToggle = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const getItemColor = (item: SubmenuItem) => {
    return item.iconColor || "text-blue";
  };

  return (
    <div className="hidden md:flex items-center h-[88px] mx-auto w-full max-w-[900px] min-w-[590px]">
      <div className="flex w-full justify-around">
        {(navLinks as NavLinkItem[]).map((link, index) => (
          <div
            key={link.name}
            className="relative group"
            // Desktop hover behavior
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => {
              setOpenDropdown(null);
              setOpenSubmenu(null);
            }}
          >
            {link.path ? (
              <NavLink
                to={link.path}
                className="inline-flex h-10 w-max items-center justify-center relative py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-blue before:duration-200 hover:before:scale-x-100"
              >
                {link.name}
              </NavLink>
            ) : (
              <button
                onClick={() => handleDropdownToggle(index)}
                className="inline-flex h-10 w-max items-center justify-center relative py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-blue before:duration-200 hover:before:scale-x-100 cursor-pointer"
              >
                {link.name}
                <ChevronDown
                  className={`w-5 h-5 ml-2 font-semibold transition-transform ${
                    openDropdown === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            )}

            {link.submenu && (
              <div
                className={`absolute z-50 top-full left-1/2 transform -translate-x-1/2 ${
                  openDropdown === index ? "flex" : "hidden"
                } lg:group-hover:flex flex-col min-w-[300px] bg-white shadow-lg rounded-md`}
              >
                {link.submenu.map((item) => (
                  <div
                    key={item.title}
                    className="relative group/subitem"
                    // Desktop hover behavior
                    onMouseEnter={() =>
                      item.subsubmenu && setOpenSubmenu(item.title)
                    }
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {item.subsubmenu ? (
                      <button
                        onClick={() => handleSubmenuToggle(item.title)}
                        className="w-full p-4 hover:bg-gray-100 flex flex-col text-left"
                      >
                        <div className="flex items-center gap-2">
                          {typeof item.icon === "string" ? (
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="w-6 h-6"
                            />
                          ) : (
                            item.icon && (
                              <item.icon
                                className={`w-6 h-6 ${getItemColor(item)}`}
                              />
                            )
                          )}
                          <span className="font-semibold text-gray-900 hover:text-blue">
                            {item.title}
                          </span>
                          <ArrowRight
                            className={`transform transition-all duration-300 ${
                              openSubmenu === item.title
                                ? "rotate-90"
                                : "rotate-0"
                            } text-blue w-4 h-4 ml-2`}
                          />
                        </div>
                      </button>
                    ) : (
                      <NavLink
                        to={item.path || "#"}
                        className="p-4 hover:bg-gray-100 flex flex-col text-left"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="flex items-center gap-2">
                          {typeof item.icon === "string" ? (
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="w-6 h-6"
                            />
                          ) : (
                            item.icon && (
                              <item.icon
                                className={`w-6 h-6 ${getItemColor(item)}`}
                              />
                            )
                          )}
                          <span className={`font-semibold text-gray-900`}>
                            {item.title}
                          </span>
                        </div>
                      </NavLink>
                    )}

                    {item.subsubmenu && (
                      <div
                        className={`absolute z-50 top-0 left-full ml-1 min-w-[400px] bg-white shadow-lg rounded-md ${
                          openSubmenu === item.title ? "block" : "hidden"
                        } lg:group-hover/subitem:block`}
                      >
                        {item.subsubmenu.map((subitem) => (
                          <NavLink
                            key={subitem.title}
                            to={subitem.path}
                            className="p-4 hover:bg-gray-100 block font-semibold text-gray-900 hover:text-blue"
                            onClick={() => {
                              setOpenDropdown(null);
                              setOpenSubmenu(null);
                            }}
                          >
                            <span>{subitem.title}</span>
                            <p className="text-sm text-gray-600 line-clamp-3">
                              {subitem.description}
                            </p>
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
      </div>
    </div>
  );
};

export default Navbar;
