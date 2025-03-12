import React from "react";
import lash from "@/assets/images/lash.jpg";
import facial from "@/assets/images/facial.jpg";
import nails from "@/assets/images/nails.jpg";
import makeup from "@/assets/images/makeup.jpg";
import { Link } from 'react-scroll';

export default function Gallery() {
  return (
    <div className="flex flex-col lg:flex-row" id='gallery'> 
      <div className="w-full lg:w-[50%] flex flex-col justify-center items-start px-6 py-16 sm:px-12 sm:py-24 md:px-24 md:py-32 lg:px-[50px] lg:py-[50px] xl:px-[200px] xl:py-[200px] space-y-6">
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold">
          Your Journey Starts Here, <br /> Discover More Today
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px]">
          Unlock the secrets of fast and efficient lashes application with our
          professional services that save you time and offer stunning results.
          Whether you're looking for something subtle or bold, we’ve got you
          covered.
        </p>
        <Link
          to="appointment" 
          smooth={true}
          duration={800}
          className="inline-block rounded-md border border-transparent bg-[#CDB287] px-8 py-3 text-center font-medium text-white hover:bg-[#9E842D] self-center lg:self-start"
        >
          BOOK NOW
        </Link>
      </div>
       <div className="w-full lg:w-[50%]  grid grid-cols-2 gap-4 p-4 ">
        <img src={nails} alt="gallery" className="w-[250px] h-[250px] object-cover rounded-lg col-span-1 row-start-1 justify-self-end self-end" />
        <img src={facial} alt="gallery" className="w-[250px] h-[250px] object-cover rounded-lg self-end" />
        <img src={lash} alt="gallery" className="w-[250px] h-[250px] object-cover rounded-lg justify-self-end" />
        <img src={makeup} alt="gallery" className="w-[250px] h-[250px] object-cover rounded-lg" />
      </div>
    </div>
  );
}
