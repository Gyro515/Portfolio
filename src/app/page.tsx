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

export default function Home() {
  return (
        <main className="flex flex-col items-center text-center w-[100vw]">
          <ScrollLoad/>
          {/* Home Section */}
          <section id="home" className="flex flex-col items-center justify-center mx-auto p-10">
            <motion.h1
              className="text-black text-5xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hey! I&apos;m Justin Sage
            </motion.h1>

            <motion.h2
              className="text-xl max-w-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              Recent graduate specializing in data analytics, full-stack development, and automation. I am passionate about transforming data into meaningful and actionable insights.
            </motion.h2>
          </section>

          {/* Technologies */}
          <section id="technologies" className="scroll-mt-60 flex flex-col md:flex-row flex-wrap justify-center mx-auto gap-8 px-16 pt-16 pb-16">
            <div className="flex flex-col justify-center md:col-span-1 max-w-lg">
              <h1 className="text-7xl font-extrabold italic uppercase text-gray-900">What <br/> I built with</h1>
              <h2 className="pt-10 text-lg font-semibold leading-relaxed text-gray-600">
                Over the years I&apos;ve worked with cutting-edge technologies, making interfaces easy to use, connecting the pieces behind the scenes and bringing it to life. </h2>
            </div>

            <div className="pt-1 flex flex-col text-left justify-center pl-10 border-l-2 border-gray-900"> 
              <TechStackComponent
              category="Programming:"
              tech={["devicon:java", "devicon:javascript", "devicon:typescript", "devicon:python", "devicon:r", "devicon:csharp"]}
              />
              <TechStackComponent
              category="Frameworks & Libraries:"
              tech={["devicon:react", "devicon:nextjs", "devicon:nodejs", "devicon:express"]}
              />
              <TechStackComponent
              category="Database & Cloud:"
              tech={["devicon:postgresql", "devicon:mysql", "devicon:googlecloud", "devicon:azure"]}
              />
              <TechStackComponent
              category="Analytics & Visualization:"
              tech={["logos:tableau-icon", "devicon:pandas", "devicon:numpy", "vscode-icons:file-type-excel"]}
              />
              <TechStackComponent
              category="Tools:"
              tech={["devicon:git", "devicon:github", "devicon:vscode", "devicon:postman", "devicon:figma"]}
              />
            </div>
          </section>

          {/* Project Section */}
          <section id="projects" className="scroll-mt-36 flex flex-col lg:flex-row items-center gap-16 xl:gap-28 mx-auto py-16 md:py-28">
            <div className="order-2 lg:order-none border-2 border-gray-100 bg-gray-100 shadow-2xl rounded-xl p-3">
              <div className="h-[420px] overflow-y-scroll px-4 pb-6 snap-y snap-mandatory">
                <div className="grid gap-8 grid-cols-1 xl:grid-cols-2 py-2">
                  {projectdata.map((p) => {
                    const pn = p.name.toLowerCase().replace(/\s+/g, "_")
                    return (
                      <ProjectCardComponent
                      key={p.name}
                      name={p.name}
                      image={p.image}
                      description={p.description}
                      pn={pn}
                      tech={p.tech}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="text-7xl font-extrabold italic uppercase text-gray-900">My <br /> Projects</h1>
            </div>
          </section>

        </main>
  );
}