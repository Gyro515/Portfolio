"use cliet"

import {TbBrandTypescript, TbBrandNextjs, TbBrandTailwind, TbBrandVercel, TbBrandGithub} from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] border-t border-gray-200 relative z-50">
            <div className="mx-auto max-w-screen-xl px-5 py-4">
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-1">

                    {/* Social Media */}
                    <div>
                        <img src="/favicon.ico" alt="Logo" height={48} width={48} className="brightness-50 transition-transform"/>
                        <div className="flex flex-row items-stretch gap-1">
                            <h2 className="text-sm tracking-wide text-gray-700">Powered by</h2>
                            <ul className="text-2xl text-gray-600 flex gap-0">
                                <TbBrandNextjs/>
                                <TbBrandTypescript/>
                                <TbBrandTailwind/>
                                <TbBrandVercel/>
                                <TbBrandGithub/>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="leading-relaxed text-gray-700 text-left text-sm md:text-md md:text-right flex flex-col gap-2">
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