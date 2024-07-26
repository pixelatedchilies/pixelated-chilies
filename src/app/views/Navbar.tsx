import Image from "next/image";
import { menuLinks } from "../constants/menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 right-0 left-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-900/10 dark:border-slate-50/[0.06]">
      <nav className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
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
              className="menu menu-sm flex flex-col gap-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 h-screen p-4 shadow"
            >
              {menuLinks.map(({ id, href, title }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="text-base text-white font-normal"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image
              src={"/pixelated-chilies-logo.svg"}
              width={150}
              height={55}
              alt="Pixelated Chilies logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuLinks.map(({ id, href, title }) => (
              <li key={id}>
                <Link href={href} className="text-base text-white font-normal">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-primary font-normal"
            href="https://help.pixelatedchilies.com"
          >
            Free consultation
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
