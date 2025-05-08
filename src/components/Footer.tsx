"use client";

import Link from "next/link";
import InstagramIcon from "../assets/icons/InstagramIcon";
import FacebookIcon from "../assets/icons/Facebookicon";
import YoutubeIcon from "../assets/icons/YoutubeIcon";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  switch (pathname) {
    case "/":
      navClass.home = "text-green-400";
      break;
    case "/about-us":
      navClass.about = "text-green-400";
      break;
    case "/services":
      navClass.services = "text-green-400";
      break;
    case "/blogs":
      navClass.blogs = "text-green-400";
      break;
    case "/contact-us":
      navClass.contact = "text-green-400";
      break;
    default:
      break;
  }

  return (
    <footer className="bottom-0 w-[100dvw] flex justify-center items-center bg-green-50">
      <div className="w-[85%] py-4 flex flex-col items-center">
        {/* top-footer */}
        <div className="flex py-6 flex-row flex-wrap justify-around items-center">
          <div className="w-[25%] flex flex-col items-start">
            <Image src={Logo} alt="NaryosMed Logo" width={250} />
            <p className=" text-gray-300 text-lg">
              Experience personalized medical care from the comfort of your
              home.
            </p>
          </div>

          <div className="w-[55%] flex flex-col items-start">
            <h6 className="font-ibrand text-green-400 text-xl tracking-wider">
              Your Trusted Health Referral Partner
            </h6>
            <p className="text-gray-300 text-sm pt-1 font-lato leading-5.5">
              NaryosMed is a dynamic and innovative platform designed to ease
              the healthcare journey for patients by connecting them with the
              right doctors, hospitals, clinics, and diagnostic labs. Our
              mission is to empower patients to make informed decisions about
              their treatment while offering healthcare providers a seamless way
              to reach and serve their patients.
            </p>
          </div>

          <div className="w-[10%] flex flex-col">
            <h6 className="font-ibrand text-green-400 text-xl tracking-wider">
              Navigate
            </h6>
            <ul className="pl-2">
              <li>
                <Link
                  className={`${
                    pathname === "/"
                      ? navClass.home
                      : "text-gray-300 hover:text-green-600"
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === "/about-us"
                      ? navClass.about
                      : "text-gray-300 hover:text-green-600"
                  }`}
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === "/services"
                      ? navClass.services
                      : "text-gray-300 hover:text-green-600"
                  }`}
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === "/blogs"
                      ? navClass.blogs
                      : "text-gray-300 hover:text-green-600"
                  }`}
                  href="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === "/contact-us"
                      ? navClass.contact
                      : "text-gray-300 hover:text-green-600"
                  }`}
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* divider */}
        <div className="w-full my-3 h-[2.5px] bg-green-400 rounded-lg"></div>

        {/* bottom-footer */}
        <div className="w-full py-3 px-3 flex flex-row justify-between items-center">
          {/* icons */}
          <div className="flex items-center justify-center gap-2">
            <Link href="www.facebook.com" target="_blank">
              <FacebookIcon width={24} height={25} color="#028483" />
            </Link>
            <Link href="www.instagram.com" target="_blank">
              <InstagramIcon width={24} height={25} color="#028483" />
            </Link>
            <Link href="www.youtube.com" target="_blank">
              <YoutubeIcon width={24} height={25} color="#028483" />
            </Link>
            <Link href="www.linkedin.com" target="_blank">
              <LinkedInIcon width={24} height={25} color="#028483" />
            </Link>
          </div>
          {/* copyright */}
          <p className="text-gray-300 text-md font-lato">
            NaryosMed &copy; 2025. All Rights Reserved | Powered By{" "}
            <Link href="https://www.aryan-adhikari.com.np/" target="_blank">
              Naryos
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

const navClass = {
  home: "",
  about: "",
  services: "",
  blogs: "",
  contact: "",
};

export default Footer;
