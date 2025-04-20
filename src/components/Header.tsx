"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const pathname = usePathname();

  switch (pathname) {
    case "/":
      navClass.home = "text-green-700";
      break;
    case "/about-us":
      navClass.about = "text-green-700";
      break;
    case "/services":
      navClass.services = "text-green-700";
      break;
    case "/blogs":
      navClass.blogs = "text-green-700";
      break;
    case "/contact-us":
      navClass.contact = "text-green-700";
      break;
    default:
      break;
  }

  return (
    <header className="w-[100dvw] flex items-center justify-center">
      <nav className="w-[90%] py-2 flex justify-around rounded-b-2xl drop-shadow-sm bg-green-50">
        {/* logo */}
        <div className="w-[20%]">
          <Image src={Logo} alt="NaryosMed" width={140} />
        </div>

        {/* navigation */}
        <div className="w-[70%] flex justify-end items-center gap-12">
          <ul className="flex gap-6 items-center flex-row">
            <li>
              <Link
                className={`${
                  pathname === "/"
                    ? navClass.home
                    : "text-gray-500 hover:text-green-600"
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
                    : "text-gray-500 hover:text-green-600"
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
                    : "text-gray-500 hover:text-green-600"
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
                    : "text-gray-500 hover:text-green-600"
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
                    : "text-gray-500 hover:text-green-600"
                }`}
                href="/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <button className="gradient-button px-4 py-2 font-ibrand text-white rounded-xl shadow-md hover:shadow-lg hover:translate-x-1 cursor-pointer">
            Enquire Us
          </button>
        </div>
      </nav>
    </header>
  );
};

const navClass = {
  home: "",
  about: "",
  services: "",
  blogs: "",
  contact: "",
};

export default Header;
