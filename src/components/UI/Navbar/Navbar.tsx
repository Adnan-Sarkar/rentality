"use client";

import React, {useState} from 'react';
import Image from "next/image";

import logo from "@/assets/logo.png";
import searchIcon from "@/assets/search-icon.png";
import Link from "next/link";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    const handleShowNavbar = () => {
        setShowNavbar((prevState) => !prevState);
    }
    return (
        <nav className="py-8 border-b-2 border-primary bg-secondary text-white relative">
            <div className="container">
                <div className="flex justify-between items-center">
                    {/*navbar logo*/}
                    <div>
                        <Link href={"/"}>
                            <Image src={logo} alt={"Rentality"} width={162} height={25}/>
                        </Link>
                    </div>
                    {/*responsive navbar button*/}
                    <div className="md:hidden">
                        <button className="relative group" onClick={handleShowNavbar}>
                            <div
                                className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-primary hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                                {showNavbar ? (
                                    <div
                                        className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                        <div
                                            className="absolute items-center justify-between transform transition-all duration-500 top-2.5 translate-x-0 flex w-12">
                                            <div
                                                className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-45 delay-300"></div>
                                            <div
                                                className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-45 delay-300"></div>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                        <div
                                            className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
                                        <div
                                            className="bg-white h-[2px] w-7 rounded transform transition-all duration-300"></div>
                                        <div
                                            className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
                                    </div>
                                )}
                            </div>
                        </button>
                    </div>
                    {/*navbar items*/}
                    <div
                        className={`flex absolute bottom-[-292px] pb-[20px] transition-all ease-linear delay-400 ${showNavbar ? "left-0" : "left-[-100%]"} bg-secondary w-full md:pb-0 md:relative md:left-0 md:bottom-0 flex-col items-center gap-[20px] md:flex-row md:justify-end md:items-center md:gap-[50px]`}>
                        <ul className="flex flex-col text-center pt-[20px] space-y-[30px] md:space-y-0 md:pt-0 md:flex-row md:space-x-[30px] font[15px] font-normal">
                            <li>
                                <Link href={"/about-us"}>About Us</Link>
                            </li>
                            <li>
                                <Link href={"/vehicles"}>Vehicles</Link>
                            </li>
                            <li>
                                <Link href={"/rentals"}>Rentals</Link>
                            </li>
                            <li>
                                <Link href={"/contact"}>Contact</Link>
                            </li>
                        </ul>

                        <div className="relative">
                            <input
                                className="bg-transparent py-[10px] pl-[38px] outline-0 rounded-full w-[173px] focus:bg-tertiary"
                                type={"text"} placeholder={"Find a Rental"}/>
                            <Image className="absolute top-[50%] translate-y-[-50%] left-3 z-10 w-[18px]"
                                   src={searchIcon} alt={"search"} width={18} height={18}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;