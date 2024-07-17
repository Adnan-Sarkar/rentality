"use client";

import React, {useState} from "react";
import PromotionalVideoImage from "@/assets/promotionalVideo.png";
import PlayIcon from "@/assets/playIcon.png";
import Image from "next/image";

const PromotionalVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section className="bg-tertiary pt-[50px] pb-[50px] lg:pt-[82px] lg:pb-[147px]">
      <div className="container">
        <div className="text-center text-white pb-[30px] lg:pb-[50px]">
          <h2 className="uppercase text-[25px] sm:text-[30px] font-semibold leading-[40px]">
            Promotional Video
          </h2>
        </div>

        <div className="flex justify-center items-center rounded-[7.44px] overflow-hidden relative">
          <div className="relative border-2 border-primary rounded-[7.44px] overflow-hidden bg-primary">
            <Image
              className="flex justify-center items-center relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-[50px] after:h-[50px] after:bg-red after:opacity-50 after:z-10"
              src={PromotionalVideoImage}
              alt="promotional video"
            />
            <span className="cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[75px] h-[75px] md:w-[95px] md:h-[95px] bg-white/50 flex items-center justify-center rounded-full trnsition-all delay-100 hover:bg-primary/50">
              <Image src={PlayIcon} alt="play" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalVideo;
