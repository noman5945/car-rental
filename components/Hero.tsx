"use client";
import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

function Hero() {
  /**
   * Click button function to scroll down to car menu
   */
  const handleScroll = () => {
    console.log("car menue");
  };
  return (
    <div className="hero">
      <div className=" flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find,book and rent a car- quick and easy!
        </h1>
        <p className="hero__subtitle">
          Streamline your car booking experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Select Cars"
          contentStyle=" bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        ></CustomButton>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={"/hero.png"}
            alt={"hero"}
            fill
            className=" object-contain"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
}

export default Hero;
