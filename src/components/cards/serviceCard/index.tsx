import React from "react";
import { ArrowIcon } from "@/assets/icons/arrowIcon";
import Image from "next/image";

type ResearchReportCardT = {
  bgImage: any;
  headerText: string;
  subtitle: string;
  detailedText: string;
  dynamicRoute: string;
};

const ResearchReportCard = ({
  bgImage,
  headerText,
  subtitle,
  detailedText,
  dynamicRoute,
}: ResearchReportCardT) => {
  return (
    <div className="relative bg-gray-800 text-white p-4 rounded-lg w-full sm:w-[320px] lg:w-[350px] shadow-lg group cursor-pointer">
      <div className="relative">
        {/* Image Section */}
        <Image
          src={bgImage}
          alt={headerText}
          className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-lg"
        />
        {/* Learn More Overlay */}
        <a
          href={dynamicRoute}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg"
        >
          <div className="text-white text-lg font-extrabold flex items-center z-10 duration-500 translate-x-1 pt-6 whitespace-nowrap">
            Learn More
            <ArrowIcon />
          </div>
        </a>
      </div>

      {/* Text Section */}
      <div className="mt-4">
        <div className="text-xs font-semibold">{headerText}</div>
        <h3 className="text-lg font-bold mt-1">{subtitle}</h3>
      </div>

      {/* Detailed Text Hover Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-sm sm:text-base">{detailedText}</p>
      </div>
    </div>
  );
};

export default ResearchReportCard;
