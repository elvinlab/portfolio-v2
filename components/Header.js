import { DiCssdeck } from "react-icons/di";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link
            href={"/"}
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" />
            <span className="px-1 font-semibold text-xl">Portfolio</span>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
