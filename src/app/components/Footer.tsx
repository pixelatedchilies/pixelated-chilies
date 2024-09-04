import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container">
      <div className="bg-gradient-to-tr from-[#000000] via-[#001116] to-[#000000] border border-slate-900/10 dark:border-slate-50/[0.06] rounded-xl my-8">
        <div className="footer text-base-content p-4">
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
            <Link className="link link-hover" href="/contact">
              Contact us
            </Link>
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
            <a className="link link-hover" href="terms-and-conditions">
              Terms and Conditions
            </a>
            <a className="link link-hover" href="privacy-policy">
              Privacy Policy
            </a>
            <a className="link link-hover" href="/imprint">
              Imprint
            </a>
          </nav>
        </div>
        <div className="footer text-base-content border-slate-900/10 dark:border-slate-50/[0.06] border-t px-4 py-4">
          <aside className="grid-flow-col items-center">
            <p className="font-normal">
              Pixelated Chilies
              <br />
              Your digital marketing agency for growth
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a
                className="footer-icon w-8"
                href="https://www.facebook.com/share/FGiVYtjHdVbEHU4R/?mibextid=LQQJ4d"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook icon"
                  width={20}
                  height={20}
                />
              </a>
              <a
                className="footer-icon w-8"
                href="https://www.instagram.com/pixelatedchilies?igsh=bm82NzRuZDV3bmNm"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram icon"
                  width={32}
                  height={32}
                />
              </a>
              <a
                className="footer-icon w-8"
                href="https://www.linkedin.com/company/pxchilies"
              >
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin icon"
                  width={20}
                  height={20}
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
