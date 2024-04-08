import Image from "next/image";
import React from "react";
import { footerLinks } from "@/constants";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" flex flex-col text-black-100 border-t border-gray-100">
      <div className=" flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className=" flex flex-col items-start justify-start gap-6">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={118}
            height={18}
            className=" object-contain"
          ></Image>
          <p className=" text-base text-gray-700">
            Car Hub 2024
            <br />
            All rights reserved &copy;
            <br />
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((links) => (
            <div key={links.title} className="footer__link">
              <h3 className=" font-bold">{links.title}</h3>
              {links.links.map((link) => (
                <Link
                  href={link.url}
                  key={link.title}
                  className=" text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-wrap justify-between items-center mt-10 border-t border-gray-100 sm:px-6 px-3 py-10">
        <p>@2024 Car Hub.All rights reserved.</p>
        <div className="footer__copyrights-link">
          <Link href={"/"} className=" text-gray-500">
            Privacy Policy
          </Link>
          <Link href={"/"} className=" text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
