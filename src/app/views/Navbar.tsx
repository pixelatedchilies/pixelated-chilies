import Image from "next/image";
import Link from "next/link";
import { menuLinks } from "../constants/menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 right-0 left-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-900/10 dark:border-slate-50/[0.06]">
      <nav className="container mx-auto navbar">
        <div className="navbar-start flex justify-between w-full md:w-3/6 pl-4 md:pl-0">
          <Link href="/">
            <Image
              src={"/pixelated-chilies-logo.svg"}
              width={150}
              height={55}
              alt="Pixelated Chilies logo"
              className="w-[8rem] h-14 md:w-[150px] md:h-[55px]"
            />
          </Link>
          <div className="flex-none lg:hidden">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary className="text-white">Menu</summary>
                  <ul className="bg-base-100 rounded-t-none p-2 w-max right-0">
                    {menuLinks.map(({ id, href, title }) => (
                      <li key={id}>
                        <Link href={href} className="text-white font-normal">
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
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
        <div className="navbar-end hidden md:flex">
          <a
            className="btn btn-primary btn-sm font-normal"
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
