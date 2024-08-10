import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container">
      <div className="bg-gradient-to-tr from-[#000000] via-[#001116] to-[#000000] border border-slate-900/10 dark:border-slate-50/[0.06] rounded-3xl my-8">
        <div className="footer text-base-content p-6">
          <nav>
            <h6 className="font-normal text-white text-lg">Services</h6>
            <a className="link link-hover">Web Design & Development</a>
            <a className="link link-hover">E-Commerce Shop</a>
            <a className="link link-hover">Social Media Management</a>
            <a className="link link-hover">Brand Design</a>
            <a className="link link-hover">Interactive Funnels</a>
            <a className="link link-hover">Social Recruiting</a>
          </nav>
          <nav>
            <h6 className="font-normal text-white text-lg">Company</h6>
            <Link className="link link-hover" href="/about-us">
              About us
            </Link>
            <Link className="link link-hover" href="/services">
              Our services
            </Link>
            <a className="link link-hover">Contact us</a>
            <a
              className="link link-hover"
              href="https://help.pixelatedchilies.com"
            >
              Help
            </a>
            <a
              className="link link-hover"
              href="mailto: info@pixelatedchilies.com"
            >
              info@pixelatedchilies.com
            </a>
            <a className="link link-hover" href="tel: +38345820089">
              +383 45 820 089
            </a>
          </nav>
          <nav>
            <h6 className="font-normal text-white text-lg">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Imprint</a>
          </nav>
        </div>
        <div className="footer text-base-content border-base-100 border-t px-6 py-4">
          <aside className="grid-flow-col items-center">
            <p>
              Pixelated Chilies
              <br />
              Your digital marketing agency for growth
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
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
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
