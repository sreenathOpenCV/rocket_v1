"use client";

import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { PiArrowsInSimpleLight } from "react-icons/pi";

interface CardsProps {
  company_name: string;
  country: string;
  job_title: string;
  link: string;
  location: string;
  logo: string;
  tags: string[];
  isOpen: boolean;
  onTogglePopup: () => void;
}

const Cards: React.FC<CardsProps> = ({
  company_name,
  country,
  job_title,
  link,
  location,
  logo,
  tags,
  isOpen,
  onTogglePopup,
}) => {
  const truncateTitle = (title: any, maxLength: any) => {
    if (title.length > maxLength) {
      return `${title.slice(0, maxLength)}...`;
    }
    return title;
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = "/defaultCompany.png";
  };

  return (
    <div className="relative">
      <div
        className={`flex flex-col text-black bg-white text-center items-center w-full h-70 rounded-xl py-4 px-6 border border-2 shadow-lg hover:shadow-2xl hover:cursor-pointer hover:bg-gray-50 ${
          isOpen ? "z-10" : "z-10"
        }`}
      >
        <h3 className="text-lg text-black font-semibold mb-2">
          {truncateTitle(job_title, 33)}
        </h3>
        <div className="flex flex-row items-center mb-4">
          <img
            src={logo}
            alt={`${company_name} logo`}
            className="w-12 h-12 rounded-full mr-2"
            onError={handleImageError}
          />
          <h2 className="text-sm text-black font-bold">
            {truncateTitle(company_name, 20)}
          </h2>
        </div>
        <div className="flex items-center text-xs text-gray-600 mb-4">
          <FaLocationDot style={{ color: "#ff0033" }} fontSize="1rem" />
          <span className="ml-1">{location}</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="flex flex-wrap justify-center">
            {tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-sm text-black font-semibold bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2"
              >
                {truncateTitle(tag, 12)}
              </span>
            ))}
          </div>
          {tags.length > 2 && (
            <button
              onClick={onTogglePopup}
              className="text-sm font-semibold text-blue-500 mb-2"
            >
              {isOpen ? (
                <PiArrowsInSimpleLight fontSize={"1.2rem"} />
              ) : (
                "Show More"
              )}
            </button>
          )}
        </div>
        <div className="flex justify-center mt-auto">
          <div className="flex flex-row items-center text-white bg-[#138dff] rounded-lg px-3 py-1 font-bold">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              <span>Apply Now</span>
              <BsLinkedin style={{ color: "white", marginLeft: "8px" }} />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`absolute text-black w-[105%] inset-0 -mt-10 -ml-2 md:-ml-3 md:mx-1 h-80 bg-gray-50 flex flex-col items-center justify-center p-4 z-20 border border-gray-300 rounded-2xl shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <button
          onClick={onTogglePopup}
          className="absolute top-2 right-2 text-gray-500"
        >
          <PiArrowsInSimpleLight fontSize={"1.8rem"} />
        </button>
        <h3 className="text-lg font-semibold mb-2">
          {truncateTitle(job_title, 33)}
        </h3>
        <div className="flex flex-row items-center mb-4">
          <img
            src={logo}
            alt={`${company_name} logo`}
            className="w-12 h-12 rounded-full mr-2"
            onError={handleImageError}
          />
          <h2 className="text-sm font-bold">
            {truncateTitle(company_name, 20)}
          </h2>
        </div>
        <div className="flex items-center text-xs text-gray-600 mb-4">
          <FaLocationDot style={{ color: "#ff0033" }} fontSize="1rem" />
          <span className="ml-1">{location}</span>
        </div>
        <div className="flex flex-wrap justify-center mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm font-semibold bg-gray-200 rounded-full px-2 py-1 mr-2 mb-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center text-white bg-[#138dff] rounded-lg px-3 py-1 font-bold"
        >
          <span>Apply Now</span>
          <BsLinkedin style={{ color: "white", marginLeft: "8px" }} />
        </a>
      </div>
    </div>
  );
};

export default Cards;
