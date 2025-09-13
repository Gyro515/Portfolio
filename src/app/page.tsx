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
}:{
  category: string;
  tech?: string[];
}){
  return(
    <article className="flex flex-row gap-2 md:gap-8 items-center p-2">
      <div className="text-sm md:text-lg font-extrabold text-gray-800">{category}</div>
      <ul className="flex flex-row w-full justify-end gap-4">
        {tech.map((t, idx) => (
          <li key={idx}>
            <Icon icon={t} className="size-6 md:size-12"/>
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
    <article className="relative overflow-hidden w-[72vw] h-[48vh] md:w-[16vw] md:h-[45vh] rounded-xl border-gray-200 bg-white shadow-md hover:shadow-xl transition">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
        <Image src={image} alt={name} fill className="object-fill"/>
      </div>

      {/* Text */}
      <div className="p-5 flex flex-col">
        <h1 className="text-lg font-semibold text-gray-900 leading-snug">{name}</h1>
        <h3 className="py-3 text-sm md:text-md text-gray-600 break-words">{description}</h3>
        
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
  bullets2,
}:{
  classification: string;
  role: string;
  meta: string;
  bullets: string[];
  bullets2: string[];
}){
  return(
    <article className="md:pl-10 md:border-l-2 md:border-gray-900">
      <h1 className="md:text-xl font-extrabold italic uppercase text-gray-900">{classification}</h1>
      <h2 className="md:text-md md:text-lg font-semibold text-gray-900">{role}</h2>
      <h3 className="md:text-md font-medium tracking-wide text-gray-800">{meta}</h3>
      <ul className="md:text-md text-gray-700 list-disc grid grid-cols-2 pl-4">{bullets.map((i, j)=> (<li key={j}>{i}</li>))}
      </ul>
      <ul className="md:text-md text-gray-700 list-disc pl-4">{bullets2.map((i, j) => (<li key={j}>{i}</li>))}
      </ul>
    </article>
)}

export default function Home() {
  return (
        <main className="flex flex-col justify-start items-center text-center pt-[10vh] snap-y snap-mandatory w-full overflow-hidden">
          <ScrollLoad/>
          {/* Home Section */}
          <section id="home" className="flex flex-col items-center justify-center h-[75vh] md:h-[80vh]">
            <motion.h1
              className="text-black text-3xl md:text-5xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hey! I&apos;m Justin Sage
            </motion.h1>

            <motion.h2
              className="text-lg md:text-xl text-gray-600 leading-relaxed w-[50%]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              Recent graduate specializing in data analytics, full-stack development, and automation. I am passionate about transforming data into meaningful and actionable insights.
            </motion.h2>
          </section>

          {/* Technologies */}
          <section id="technologies" className="flex flex-col justify-start items-center h-[100vh] md:pt-[2vh] md:h-[80vh] w-[100vw] gap-3 md:gap-12">
            <div className="flex flex-col items-center justify-center w-[90vw] md:w-[60vw]">
              <h1 className="text-3xl md:text-5xl font-extrabold italic uppercase text-gray-900">What I built with</h1>
              <h2 className=" pt-4 text-md md:text-lg font-semibold leading-relaxed text-gray-600 w-[70%]">
                Over the years I&apos;ve worked with cutting-edge technologies, making interfaces easy to use, connecting the pieces behind the scenes and bringing it to life. </h2>
            </div>

            <div className="md:pt-1 flex flex-col text-left justify-center md:pl-10 md:border-l-2 md:border-gray-900"> 
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
          <section id="projects" className="flex flex-col items-center justify-start h-[100vh] md:pt-[2vh] md:h-[80vh] w-[100vw] gap-8 md:gap-12">
            <h1 className="text-3xl md:text-5xl font-extrabold italic uppercase text-gray-900">My Projects</h1>
            
            <div className="border-2 border-gray-100 bg-gray-100 shadow-2xl rounded-xl px-2 py-6 md:p-1">
              <div className="w-[80vw] md:w-[36vw] h-[55vh] md:h-[55vh] overflow-y-scroll px-4 py-6 snap-y snap-mandatory">
                <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
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
          </section>

          {/* About Section */}
          <section id="about" className="flex flex-col justify-start items-center mb-[10vh] md:pt-[2vh] md:h-[80vh] w-[100vw] gap-8">
            <h1 className="text-3xl md:text-5xl font-extrabold italic uppercase text-gray-900">About Me</h1>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col justify-start md:col-span-1 md:w-[15vw]">
                <h2 className="pt-4 md:pt-10 text-sm md:text-lg font-semibold leading-relaxed text-gray-600">
                    I recently earned my BSc Honours in Applied Computer Science with a Statistics minor, 
                    where I developed a strong foundation across full-stack development, data analytics, 
                    and system security. I&apos;m driven by a desire to solve problems and create solutions that
                    bring meaningful impact. My goal is to continue growing my skills while contributing to
                    projects that help people and organizations work smarter and make data-driven decisions.</h2>
              </div>

              <div className="pt-1 flex flex-col gap-2 text-left justify-center"> 
                <TimelineComponent
                classification="Education"
                role="BSc. Honours in Applied Computer Science with Statistics minor"
                meta="The University of Winnipeg | June 2025"
                bullets={["Advanced Internet Programming", "Software Design & Architecture", "Senior System Development Project", "Advanced Database", "Conceptual Modeling", "Intro to Machine Learning", "Computer Privacy and Security"]}
                bullets2={[]}
                />

                <TimelineComponent
                classification="Additional Experience"
                role="T1/T3 Data Processor"
                meta="Government of Canada, Canada Revenue Agency | Feb. 2024 - June 2025 (Terms)"
                bullets={[]}
                bullets2={["Collaborated with a team to maintain smooth and high-volume operations", "Ensured accuracy and compliance while processing sensitive government data", "Managed a high workload while consistently meeting SLAs/KPIs"]}
                />

                <TimelineComponent
                classification=""
                role="Accessibility Services Invigilator"
                meta="The University of Winnipeg | Oct. 2023 - Present"
                bullets={[]}
                bullets2={["Supported students with accommodations through assistive resources","Coordinated exam logistics, including setup and data management"]}
                />

                <TimelineComponent
                classification="Certifications"
                role="Google Data Analytics"
                meta="Coursera | In Progress (Expected Nov. 2025)"
                bullets={[]}
                bullets2={[]}
                />
              </div>
            </div>
          </section>
        </main>
  );
}