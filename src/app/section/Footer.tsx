"use client"

import Image from "next/image";
import {TbBrandTypescript, TbBrandNextjs, TbBrandTailwind, TbBrandVercel, TbBrandGithub} from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="w-full shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.4)] pt-[env(safe-area-inset-top)] relative z-50">
            <div className="mx-auto md:max-w-screen-lg px-5 py-4">
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-1 pb-4">

                    {/* Social Media */}
                    <div>
                        <Image src="/favicon.ico" alt="Logo" height={48} width={48} className="brightness-50"/>
                        <div className="flex flex-row items-stretch gap-1">
                            <h2 className="text-md text-gray-700">Powered by</h2>
                            <ul className="flex flex-row text-2xl text-gray-600">
                                <TbBrandNextjs/>
                                <TbBrandTypescript/>
                                <TbBrandTailwind/>
                                <TbBrandVercel/>
                                <TbBrandGithub/>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col text-gray-700 text-left text-md md:text-right gap-1">
                        <p>Email: <a href="mailto:jusagebriones@yahoo.com" className="hover:underline ">jusagebriones@yahoo.com</a></p>
                        <p>Phone: <a href="tel:+12043966559" className="hover:underline"> +1 (204) 396-6559</a></p>
                    </div>

                </div>
                
                <div className="w-full border-t border-gray-300 py-4">
                    {/* Copyright */}
                    <p className="text-md text-center text-gray-600">
                        © {new Date().getFullYear()} Justin Sage Briones. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}