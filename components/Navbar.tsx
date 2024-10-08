import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

function Navbar() {
  return (
    <header className=" w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center">
        <Link
          href={"/"}
          className=" flex justify-center items-center sm:px-16 px-6 py-4"
        >
          <Image
            src={"/logo.svg"}
            alt="Car hub logo"
            width={118}
            height={18}
            className=" object-contain"
          ></Image>
        </Link>
        <Link href={"/SignUp"}>
          <CustomButton
            title="Sign In"
            contentStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
            btnType="button"
          ></CustomButton>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
