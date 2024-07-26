import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky top-0 right-0 left-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-900/10 dark:border-slate-50/[0.06]">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <a href="/">
            <Image
              src={"/pixelated-chilies-logo.svg"}
              width={150}
              height={55}
              alt="Pixelated Chilies logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white">
              <a>Home</a>
            </li>
            <li className="text-white">
              <a>About Us</a>
            </li>
            <li className="text-white">
              <a>Services</a>
            </li>
            <li className="text-white">
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-primary"
            href="https://help.pixelatedchilies.com"
          >
            Free consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
