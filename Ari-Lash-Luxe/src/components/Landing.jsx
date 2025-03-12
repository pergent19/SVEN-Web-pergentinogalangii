import React from "react";
import landing from "@/assets/images/landing.jpg";
import { Link } from 'react-scroll';

export default function Landing() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${landing})` }}
    >
      <div className="relative h-screen flex items-center justify-center lg:block">
        <div className="absolute top-1/2 lg:right-10 transform -translate-y-1/2 lg:pr-16 space-y-8 text-center lg:text-left">
          <h1 className="text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] inter-bold leading-tight">
            WELCOME TO THE <br /> NEW ERA <br />
            LASHES IN MINUTES, <br /> NOT HOURS
          </h1>
          <Link
            to="appointment"
            smooth={true}
            duration={800}
            className="inline-block rounded-md border border-transparent bg-[#CDB287] px-8 py-3 text-center font-medium text-white hover:bg-[#9E842D] self-center lg:self-start"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
