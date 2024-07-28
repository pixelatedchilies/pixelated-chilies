"use client";

import Image from "next/image";
import Link from "next/link";
import { menuLinks } from "../constants/menu";

const Navbar = () => {
  // Handler to close the drawer
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <header className="sticky top-0 right-0 left-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-900/10 dark:border-slate-50/[0.06]">
      <nav className="container mx-auto navbar">
        <div className="navbar-start w-full md:w-3/6 pl-4 md:pl-0 flex justify-between">
          <Link href="/">
            <Image
              src={"/pixelated-chilies-logo.svg"}
              width={150}
              height={55}
              alt="Pixelated Chilies logo"
              className="w-[8rem] h-14 md:w-[150px] md:h-[55px]"
            />
          </Link>
          <div className="drawer lg:hidden w-auto">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content pr-4">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="drawer-button flex items-center gap-1 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                Menu
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col gap-1">
                <li aria-label="close sidebar">
                  <Link href={"/"}>
                    <Image
                      src={"/pixelated-chilies-logo.svg"}
                      width={150}
                      height={55}
                      alt="Pixelated Chilies logo"
                      className="w-[8rem] h-14 md:w-[150px] md:h-[55px]"
                    />
                  </Link>
                </li>
                {menuLinks.map(({ id, href, title }) => (
                  <li key={id} onClick={closeDrawer}>
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
