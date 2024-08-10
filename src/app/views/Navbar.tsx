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
      <nav className="container mx-auto navbar px-0">
        <div className="navbar-start w-full md:w-3/6 flex">
          <div className="drawer lg:hidden w-auto">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content pr-2 pt-1">
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
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-gradient-to-tr from-[#000000] via-[#001116] to-[#000000] text-base-content min-h-full w-80 p-4 flex flex-col gap-12">
                <li aria-label="close sidebar">
                  <Link href={"/"}>
                    <Image
                      src={"/pixelated-chilies-logo.svg"}
                      width={170}
                      height={25}
                      alt="Pixelated Chilies logo"
                    />
                  </Link>
                </li>
                <ul>
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
                <div className="flex gap-4 pl-3">
                  <a>
                    <Image
                      src="/facebook.svg"
                      alt="Facebook icon"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a>
                    <Image
                      src="/instagram.svg"
                      alt="Instagram icon"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <Link href="/">
            <Image
              src={"/pixelated-chilies-logo.svg"}
              width={170}
              height={25}
              alt="Pixelated Chilies logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuLinks.map(({ id, href, title }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="text-base text-white font-normal rounded-xl"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex">
          <a
            className="btn bg-white text-black hover:bg-primary btn-sm font-normal border-none rounded-lg"
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
