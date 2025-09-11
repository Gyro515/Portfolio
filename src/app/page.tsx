'use client';

import { projectsdata } from "./data/projectdata";
import { motion } from 'framer-motion';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
    <article className="order-2 lg:order-1 relative overflow-hidden w-full max-w-80 h-[53vh] rounded-xl border-gray-200 bg-white shadow-md hover:shadow-xl transition">
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
        <main className="flex flex-col items-center justify-center text-center">

          {/* Home Section */}
          <section id="home" className="min-h-screen flex flex-col justify-center items-center p-10">
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
          <section id="technologies" className="min-h-screen"></section>

          {/* Project Section */}
          <section id="projects" className="min-h-screen flex flex-col lg:flex-row gap-16 xl:gap-28 items-center pt-16">
            <div className="order-2 lg:order-none border-2 border-gray-300 bg-gray-200 shadow-2xl rounded-xl p-3">
              <div className="h-[57.5vh] overflow-y-scroll px-4 pb-6 snap-y snap-mandatory">
                <div className="grid gap-8 grid-cols-1 xl:grid-cols-2 py-2">
                  {projectsdata.map((p) => {
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

          {/* About Section */}
          <section id="about" className="min-h-screen flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-28 p-32">
            <div className="flex flex-col justify-center md:col-span-1 max-w-lg">
              <h1 className="text-7xl font-extrabold italic uppercase text-gray-900">About Me</h1>
              <h2 className="pt-10 text-lg font-semibold leading-relaxed text-gray-800">
                I recently earned my BSc Honours in Applied Computer Science with a Statistics minor, 
                where I developed a strong foundation across full-stack development, data analytics, 
                and system security. I&apos;m driven by a desire to solve problems and create solutions that
                bring meaningful impact. My goal is to continue growing my skills while contributing to
                projects that help people and organizations work smarter and make data-driven decisions.</h2>
            </div>

            <div className="pt-1 flex flex-col gap-4 text-left"> 
              <TimelineComponent
              classification="Education"
              role="BSc. Honours in Applied Computer Science with Statistics minor"
              meta="The University of Winnipeg | June 2025"
              bullets={["Advanced Internet Programming", "Software Design & Architecture", "Senior System Development Project", "Advanced Database", "Conceptual Modeling", "Intro to Machine Learning", "Computer Privacy and Security"]}/>

              <TimelineComponent
              classification="Additional Experience"
              role="T1/T3 Data Processor"
              meta="Government of Canada, Canada Revenue Agency | Feb. 2024 - June 2025 (Terms)"
              bullets={["Collaborated with a team to maintain smooth and high-volume operations", "Ensured accuracy and compliance while processing sensitive government data", "Managed a high workload while consistently meeting SLAs/KPIs"]}/>

              <TimelineComponent
              classification=""
              role="Accessibility Services Invigilator"
              meta="The University of Winnipeg | Oct. 2023 - Present"
              bullets={["Supported students with accommodations through assistive resources","Coordinated exam logistics, including setup and data management"]}/>

              <TimelineComponent
              classification="Certifications"
              role="Google Data Analytics"
              meta="Coursera | In Progress (Expected Nov. 2025)"
              bullets={[]}/>
            </div>
          </section>
        </main>
  );
}