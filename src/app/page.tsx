"use client"

import { useEffect } from "react";
import { projectdata } from "./data/projectdata";
import { motion } from 'framer-motion';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

function ScrollLoad(){
  useEffect(() => {
    const id = sessionStorage.getItem("scroll-target");
    if (!id) return;
    sessionStorage.removeItem("scroll-target");

    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}, []);

  return null;
}

function TechStackComponent({
  category,
  tech = [],
  size = 64,
}:{
  category: string;
  tech?: string[];
  size?: number;
}){
  return(
    <article className="flex flex-row gap-8 items-center p-2">
      <div className="font-extrabold text-gray-800">{category}</div>
      <ul className="ml-auto flex flex-wrap items-center gap-4 justify-end">
        {tech.map((t, idx) => (
          <li key={idx}>
            <Icon icon={t} width={size} height={size} />
            </li>
        ))}
      </ul>
    </article>
  )
}

function ProjectCardComponent({
  name,
  image,
  description,
  pn,
  tech = [],
}:{
  name: string;
  image: string | StaticImageData;
  description: string;
  pn: string;
  tech?: string[];
}){
  return(
    <article className="order-2 lg:order-1 relative overflow-hidden w-full max-w-80 h-[390]  rounded-xl border-gray-200 bg-white shadow-md hover:shadow-xl transition">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
        <Image src={image} alt={name} fill className="object-fill"/>
      </div>

      {/* Text */}
      <div className="p-5 flex flex-col">
        <h1 className="text-lg font-semibold text-gray-900 leading-snug">{name}</h1>
        <h3 className="pb-3 mt-1 text-md text-gray-600 break-words">{description}</h3>
        
        <div className="flex flex-wrap gap-2 items-center">
          {tech.map((t) => (
            <span key={t}>
              <h2 className="border-gray-400 border-solid border text-xs px-2 py-1 bg-gray-300 text-gray-700 rounded-full">{t}</h2>
            </span>
          ))}
        </div>
      </div>

      <Link href={`/projects/${pn}`} className="absolute inset-0 focus:outline-none focus-visible:ring-2 focus-variable:ring-black/10 rounded-xl" aria-label={`Open ${name}`}/>
      </article>
)}

function TimelineComponent({
  classification,
  role,
  meta,
  bullets,
}:{
  classification: string;
  role: string;
  meta: string;
  bullets: string[];
}){
  return(
    <article className="pl-10 border-l-2 border-gray-900">
      <h1 className="text-2xl font-extrabold italic uppercase text-gray-900">{classification}</h1>
      <h2 className="text-xl font-semibold text-gray-900">{role}</h2>
      <h3 className="font-medium tracking-wide text-gray-800">{meta}</h3>
      <ul className="text-gray-700 list-disc pl-4">{bullets.map((i, j)=> (<li key={j}>{i}</li>))}
      </ul>
    </article>
)}

export default function Home() {
  return (
        <main className="flex flex-col items-center text-center w-[100vw]">
          <ScrollLoad/>
        </main>
  );
}