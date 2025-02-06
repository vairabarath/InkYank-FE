import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
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
          title: "DeFi",
          description:
            "Dive into decentralized finance platforms that redefine how you manage, trade, and invest in digital assets securely.",
          path: "/products/defi",
        },
        {
          title: "Blockchain Infrastructure",
          description:
            "Learn about cutting-edge blockchain solutions that enable secure, scalable, and efficient infrastructure for businesses.",
          path: "/products/blockchain-infra",
        },
      ],
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="hidden justify-around gap-20 md:flex h-[88px] items-center w-full">
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
            </span>
          )}

          {link.submenu && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col min-w-[400px] bg-white shadow-lg shadow-blue-200 rounded-md overflow-hidden">
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
  );
};

export default Navbar;
