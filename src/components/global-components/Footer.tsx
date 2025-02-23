import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1C388C] text-white py-4">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl font-semibold">LOGO</h2>

        <div className="max-w-[1440px] w-[90%] mx-auto px-6 grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Column 1 - Contact */}
          <div className="flex flex-col items-center md:items-center space-y-5">
            <h2 className="text-xl text-white">QUICK NAVIGATE</h2>
            <hr className="border-gray-600 w-16" />
            <div className="flex flex-col gap-2">
              <a
                className="border border-gray-500 py-2 px-6 hover:bg-gray-800 transition"
                href="/community"
              >
                Home
              </a>
              <a
                className="border border-gray-500 py-2 px-6 hover:bg-gray-800 transition"
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Column 2 - Social Media */}
          <div className="border-t border-gray-600 pt-6 md:border-l md:border-t-0 md:pl-6 space-y-7 flex flex-col items-center md:items-center">
            <h2 className="text-xl text-white">SOCIAL MEDIA</h2>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-gray-400 transition">
                <img src="/Discord.png" alt="Discord" className="w-7" />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <Twitter className="text-blue-400 text-2xl" />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <Linkedin className="text-blue text-2xl" />
              </a>
            </div>
          </div>

          {/* Column 3 - Company */}
          <div className="border-t border-gray-600 pt-6 md:border-l md:border-t-0 md:pl-6 space-y-5 flex flex-col items-center ">
            <h2 className="text-xl text-white">COMPANY</h2>
            <hr className="border-gray-600 w-16" />
            <div className="flex flex-col gap-2">
              <a
                className="border border-gray-500 py-2 px-6 hover:bg-gray-800 transition"
                href="/about"
              >
                About Us
              </a>
              <a
                className="border border-gray-500 py-2 px-6 hover:bg-gray-800 transition"
                href="/community"
              >
                Community
              </a>
              <a
                className="border border-gray-500 py-2 px-6 hover:bg-gray-800 transition"
                href="/careers"
              >
                Careers
              </a>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
