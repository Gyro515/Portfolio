"use client"

import { useEffect } from "react";
import { projectData } from "./data/projectData";
import { motion, useReducedMotion } from 'framer-motion';
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
  // Refence to a title card
  const titleId = `project-${pn}-title`;

  return(
    <article className="relative overflow-hidden w-full h-[20rem] md:h-[23rem] rounded-xl bg-gray-50 hover:shadow-xl transition" aria-labelledby={titleId}>
      {/* Image */}
      <div className="relative aspect-[4/2] md:aspect-[16/9] overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={`Screenshot of ${name} project`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          priority={false}
        />
      </div>

      {/* Text */}
      <div className="m-4 flex flex-col">
        <h3 id={titleId} className="text-md md:text-lg font-semibold text-gray-900 leading-snug">{name}</h3>
        <p className="pb-2 text-md text-gray-700 break-words">{description}</p>
        
        <div className="flex flex-wrap gap-2 items-center">
          {tech.map((t) => (
            <span key={t}>
              <span className="rounded-full border border-gray-300 bg-gray-200 px-1.5 py-0.5 text-xs md:text-sm text-gray-700">{t}</span>
            </span>
          ))}
        </div>
      </div>

      <Link
        href={`/projects/${pn}`}
        className="absolute inset-0 rounded-xl"
        aria-labelledby={titleId}
      />
    </article>
  )
}

function TechStackComponent({
  category,
  tech = [],
}:{
  category: string;
  tech?: {name: string; icon: string}[];
}){
  return(
    <article className="flex flex-row gap-4 items-center p-2">
      <p className="text-md md:text-lg text-gray-800">{category}</p>
      <ul className="flex flex-row w-full justify-end gap-2 md:gap-4">
        {tech.map((t) => (
          <li key={`${t.icon}-${t.name}`} className="relative group">
            <Icon icon={t.icon} className="size-5 md:size-12" aria-hidden="true" />
            <span className="sr-only">{t.name}</span>
            <span className="absolute top-full left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
              {t.name}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

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
    <article className="text-left">
      <h3 className="text-xl font-extrabold italic uppercase text-gray-900">{classification}</h3>
      <h4 className="text-lg font-bold text-gray-900">{role}</h4>
      <p className="text-md font-semibold text-gray-800">{meta}</p>
      <ul className="list-disc pl-5 text-md text-gray-700">
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Home() {
  const rm = useReducedMotion();
  return (
    <main className="flex flex-col justify-start items-center text-center pb-20 mx-auto w-full max-w-screen-xl">
      <ScrollLoad/>
        {/* Home Section */}
        <section id="home" aria-labelledby="home-heading" className="flex flex-col items-center justify-center min-h-[clamp(540px,91.75svh,900px)] w-[90%] md:w-[60%] gap-4">
          <motion.h1
            id="home-heading"
            className="text-black text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight"
            initial={ rm ? false : { opacity: 0, y: 100 }}
            whileInView={ rm ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hey! I&apos;m Justin Sage
          </motion.h1>

          <motion.p
            className="text-md md:text-lg text-gray-600 leading-relaxed"
            initial={ rm ? false : { opacity: 0, y: 100 }}
            whileInView={ rm ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            Recent graduate specializing in data analytics, full-stack development, and automation. I am passionate about transforming data into meaningful and actionable insights.
          </motion.p>
        </section>

        {/* Project Section */}
        <section id="projects" aria-labelledby="projects-heading" className="flex flex-col items-center justify-start scroll-mt-[clamp(30px,2.5svh,96px)] min-h-[clamp(540px,80svh,900px)] w-full md:w-[60%] gap-8 md:gap-10">
          <h2 id="projects-heading" className="text-3xl md:text-5xl font-extrabold italic uppercase text-gray-900">My Projects</h2>
          <div className="w-[80%] rounded-xl border border-gray-200 bg-gray-200 p-4 shadow-sm">
              <div className="h-[22rem] md:h-[25rem] overflow-y-auto pr-1" role="region" aria-label="Project list">
                <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
                  {projectData.map((p) => {
                    const pn = p.name.toLowerCase().replace(/\s+/g, "_")
                    return (
                      <li key={pn}>
                        <ProjectCardComponent
                        key={p.name}
                        name={p.name}
                        image={p.image}
                        description={p.description}
                        pn={pn}
                        tech={p.tech}
                        />
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>

        </section>

        {/* Technologies */}
        <section id="technologies" aria-labelledby="technologies-heading" className="flex flex-col items-center justify-start scroll-mt-[clamp(30px,2.5svh,96px)] min-h-[clamp(540px,80svh,900px)] w-[90%] md:w-[60%] gap-10">
          <div className="flex flex-col items-center justify-center">
            <h2 id="technologies-heading" className="text-3xl md:text-5xl font-extrabold italic uppercase text-gray-900">What I build with</h2>
            <p className=" pt-4 text-md md:text-lg leading-relaxed text-gray-600 w-[90%] md:w-[80%]">
              Over the years I&apos;ve worked with cutting-edge technologies, making interfaces easy to use, connecting the pieces behind the scenes and bringing it to life. </p>
          </div>

          <div className="md:pt-1 flex flex-col text-left justify-center w-[90%] md:w-[80%]"> 
            <TechStackComponent
            category="Programming:"
            tech={[{name: "Java", icon: "devicon:java"}, {name: "Javascript", icon: "devicon:javascript"}, {name: "Typescript", icon: "devicon:typescript"}, {name: "Python", icon: "devicon:python"}, {name: "R", icon:"devicon:r"}, {name:"C#", icon:"devicon:csharp"}]}
            />
            <TechStackComponent
            category="Frameworks & Libraries:"
            tech={[{name: "React", icon: "devicon:react"}, {name:"Next.js", icon: "devicon:nextjs"}, {name: "Node.js", icon: "devicon:nodejs"}, {name: "Express.js", icon: "devicon:express"}]}
            />
            <TechStackComponent
            category="Database & Cloud:"
            tech={[{name: "PostgreSQL", icon: "devicon:postgresql"}, {name: "MySQL", icon: "devicon:mysql"}, {name: "Google Cloud", icon: "devicon:googlecloud"}, {name: "Microsoft Azure", icon: "devicon:azure"}]}
            />
            <TechStackComponent
            category="Analytics & Visualization:"
            tech={[{name: "Tableau", icon:"logos:tableau-icon"}, {name:"Pandas", icon:"devicon:pandas"}, {name:"NumPy", icon:"devicon:numpy"}, {name:"Excel", icon:"vscode-icons:file-type-excel"}]}
            />
            <TechStackComponent
            category="Tools:"
            tech={[{name:"Git", icon:"devicon:git"}, {name:"GitHub", icon:"devicon:github"}, {name:"Visual Studio Code", icon:"devicon:vscode"}, {name:"Postman", icon:"devicon:postman"}, {name:"Figma", icon:"devicon:figma"}]}
            />
          </div>
        </section>

        {/* About Section */}
          <section id="about" aria-labelledby="about-heading" className="flex flex-col items-center justify-start scroll-mt-[clamp(30px,20svh,96px)] md:scroll-mt-[clamp(30px,2.5svh,96px)] min-h-[clamp(540px,80svh,900px)] w-[90%] md:w-[60%] gap-8 md:gap-10">
            <div className="container mx-auto px-4">
              <h2 id="about-heading" className="text-3xl md:text-5xl font-extrabold italic uppercase text-gray-900">About Me</h2>
              <div className="flex flex-col gap-8 pt-4 md:w-[80%] mx-auto">
                <p className="text-md md:text-lg leading-relaxed text-gray-600">
                      I recently earned my BSc Honours in Applied Computer Science with a Statistics minor, 
                      where I developed a strong foundation across full-stack development, data analytics, 
                      and system security. I&apos;m driven by a desire to solve problems and create solutions that
                      bring meaningful impact. My goal is to continue growing my skills while contributing to
                      projects that help people and organizations work smarter and make data-driven decisions.</p>

                <div className="pt-1 flex flex-col gap-5 md:pl-10 md:border-l-2 md:border-gray-900"> 
                  <TimelineComponent
                  classification="Education"
                  role="BSc. Honours in Applied Computer Science with Statistics minor"
                  meta="The University of Winnipeg | June 2025"
                  bullets={["Advanced Internet Programming", "Software Design & Architecture", "Senior System Development Project", "Advanced Database", "Conceptual Modeling", "Intro to Machine Learning", "Computer Privacy and Security"]}
                  />

                  <TimelineComponent
                  classification="Certifications"
                  role="Google Data Analytics"
                  meta="Coursera | In Progress (Expected Nov. 2025)"
                  bullets={[]}
                  />
                </div>
              </div>
            </div>

          </section>
        </main>
  );
}
