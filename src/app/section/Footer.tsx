"use cliet"

import Image from "next/image";
import {TbBrandTypescript, TbBrandNextjs, TbBrandTailwind, TbBrandVercel, TbBrandGithub} from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] border-t border-gray-200 relative z-50">
            <div className="mx-auto max-w-screen-xl px-5 py-4">
                <div className="flex justify-between items-center">

                    {/* Social Media */}
                    <div>
                        <Image src="/favicon.ico" alt="Logo" height={48} width={48} className="brightness-50 hover:scale-110 transition-transform"/>
                        <div className="flex flex-row items-stretch gap-1">
                            <h2 className="text-sm tracking-wide text-gray-600">Powered by</h2>
                            <ul className="text-2xl text-gray-600 flex gap-0">
                                <TbBrandNextjs className="hover:scale-110"/>
                                <TbBrandTypescript className="hover:scale-110"/>
                                <TbBrandTailwind className="hover:scale-110"/>
                                <TbBrandVercel className="hover:scale-110"/>
                                <TbBrandGithub className="hover:scale-110"/>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="leading-relaxed text-gray-700 text-right">
                        <p>Email: <a href="mailto:jusagebriones@yahoo.com" className="hover:underline ">jusagebriones@yahoo.com</a></p>
                        <p>Phone: <a href="tel:+12043966559" className="hover:underline"> +1 (204) 396-6559</a></p>
                    </div>

                </div>

                
                <div className="w-full border-t border-gray-300 my-4"></div>
                {/* Copyright */}
                <p className="text-sm text-center text-gray-600">
                    © {new Date().getFullYear()} Justin Sage Briones. All rights reserved.
                </p>
            </div>
        </footer>
    )
}