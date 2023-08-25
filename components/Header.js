import { BsFillRocketTakeoffFill } from "react-icons/bs";

import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link
            href={"/"}
            className="flex items-center text-white cursor-pointer"
          >
            <BsFillRocketTakeoffFill size="3rem" />
            <span className="px-1 font-semibold text-3xl">Portfolio</span>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
