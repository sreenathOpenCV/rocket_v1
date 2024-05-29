"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 0 z-30 w-full bg-[#1e1e1e] text-white">
      <nav className="flex justify-between items-center 3xl:w-[1600px] 2xl:w-[1200px] xl:w-[1140px] lg:w-[1024px] md:w-[767px] sm:min-w-screen max-sm:min-w-screen mx-auto py-4">
        <div className="flex items-center">
          <Link href="/">
            <span>
              <Image
                src={"/logo.png"}
                alt="logo"
                width={160}
                height={40}
                className="px-2"
              />
            </span>
          </Link>
        </div>
        <div className="flex space-x-10 hidden md:flex">
          <Link href="https://opencv.org/university/courses/" target="_blank">
            <p className="text-sm font-bold">Courses</p>
          </Link>
          <Link href="https://opencv.org/university/#programs" target="_blank">
            <p className="text-sm font-bold">Programs</p>
          </Link>
          <Link href="https://opencv.org/university/free-courses/" target="_blank">
            <p className="text-sm font-bold">Free Courses</p>
          </Link>
          <Link href="https://opencv.org/university/#pricing" target="_blank">
            <p className="text-sm font-bold">Pricing</p>
          </Link>
          <Link href="https://opencv.org/university/student-offer-opencv-university/" target="_blank">
            <p className="text-sm font-bold">Student Discount</p>
          </Link>
          <Link href="https://opencv.org/university/careerx/" target="_blank">
            <p className="text-sm font-bold">CareerX</p>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl mr-2">
            {isOpen ? <IoMdClose fontSize={"2rem"}/> : <IoMenuOutline fontSize={"2rem"}/>}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="bg-[#1e1e1e] text-white flex flex-col items-center md:hidden">
          <Link href="https://opencv.org/university/courses/" target="_blank" onClick={toggleMenu}>
            <p className="py-2 text-sm font-bold">Courses</p>
          </Link>
          <Link href="https://opencv.org/university/#programs" target="_blank" onClick={toggleMenu}>
            <p className="py-2 text-sm font-bold">Programs</p>
          </Link>
          <Link href="https://opencv.org/university/free-courses/" target="_blank" onClick={toggleMenu}>
            <p className="py-2 text-sm font-bold">Free Courses</p>
          </Link>
          <Link href="https://opencv.org/university/#pricing" target="_blank" onClick={toggleMenu}>
            <p className="py-2 text-sm font-bold">Pricing</p>
          </Link>
          <Link href="https://opencv.org/university/student-offer-opencv-university/" target="_blank" onClick={toggleMenu}>
            <p className="py-2 text-sm font-bold">Student Discount</p>
          </Link>
          <Link href="https://opencv.org/university/careerx/" target="_blank" onClick={toggleMenu}>
            <p className="py-2 text-sm font-bold">CareerX</p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
