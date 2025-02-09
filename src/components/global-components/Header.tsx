import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full h-[88px] shadow-[0_1px_0_#CED0D5] ">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4">
        <div>
          <img src="/logo.png" alt="LOGO" className="w-[150px] md:w-[225px]" />
        </div>

        <div>
          <Navbar />
        </div>

        <div className="hidden md:block">
          <button className="bg-blue cursor-pointer transition-all duration-300 ease-in-out border border-blue hover:bg-white hover:text-blue text-white font-semibold py-2 px-4 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
