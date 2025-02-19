import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../helper/Navlink";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (index: any) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center h-[88px] mx-auto w-full max-w-[900px] min-w-[590px]">
        <div className="flex w-full justify-around">
          {navLinks.map((link, index: any) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.path ? (
                <NavLink
                  to={link.path}
                  className="inline-flex h-10 w-max items-center justify-center relative py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-blue before:duration-200 hover:before:scale-x-100"
                >
                  {link.name}
                </NavLink>
              ) : (
                <span
                  className="inline-flex h-10 w-max items-center justify-center relative py-2 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-blue before:duration-200 group-hover:before:scale-x-100 cursor-pointer"
                  onClick={() => handleDropdownToggle(index)}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-5 h-5 ml-2 font-semibold transition-transform ${
                      openDropdown === index ? "rotate-180" : "rotate-0"
                    } `}
                  />
                </span>
              )}

              {link.submenu && (
                <div
                  className={`absolute z-50 top-full left-1/2 transform -translate-x-1/2 ${
                    openDropdown === index ? "flex" : "hidden"
                  } group-hover:flex flex-col min-w-[400px] bg-white shadow-lg rounded-md overflow-hidden`}
                >
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
      </div>
    </>
  );
};

export default Navbar;
