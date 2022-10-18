import Image from "next/image";
import React from "react";

const MediumCard = ({ img, title }) => {
  return (
    <section className="cursor-pointer transform transition ease-out duration-300 hover:scale-105">
      <div className="relative w-72 h-72">
        <Image 
            src={img}
            layout="fill"                               
            className="rounded-lg"
        />
      </div>
      <div className="text-2xl mt-3">
        {title}
      </div>
    </section>
  );
};

export default MediumCard;
