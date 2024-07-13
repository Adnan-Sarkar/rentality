import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <header className="bg-tertiary">
        <div className="container">
          <div className="flex flex-col justify-center items-center py-[30px] md:py-[80px] lg:py-[150px] text-center text-white">
            <h1 className="font-bold text-[36px] tracking-[-1%] leading-[40px] uppercase">
              Explore the Open Road <div className="hidden md:block"></div> with
              Confidence
            </h1>
            <p className="max-w-[722px] text-[16px] font-light tracking-[1%] leading-[19.2px] pt-[25px] pb-[40px]">
              Discover a wide range of affordable, reliable, and convenient car
              rentals tailored to meet your every requirement. Your perfect ride
              awaits for every journey.
            </p>

            <div className="flex justify-center items-center space-x-[30px]">
              <Link
                className="p-[11px] border border-primary rounded-[5px] font-medium text-[16px] tracking-[1%] leading-[24px] transition-all delay-100 hover:bg-primary"
                href={"/"}
              >
                Book a meeting
              </Link>
              <Link
                className="p-[11px] border border-primary rounded-[5px] font-medium text-[16px] tracking-[1%] leading-[24px] transition-all delay-100 bg-primary hover:bg-transparent"
                href={"/"}
              >
                Rent a car
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
