'use client';

import { motion } from 'framer-motion';

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
}){return(
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

          {/* Project Section */}
          <section id="projects" className="min-h-screen">
             
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen flex flex-col md:flex-row items-stretch gap-28 p-32 mb-[-75]">
            <div className="flex flex-col justify-center md:col-span-1 max-w-lg">
              <h1 className="text-7xl font-extrabold italic uppercase text-gray-900">About Me</h1>
              <h2 className="pt-10 text-lg font-semibold leading-relaxed text-gray-800">
                I recently earned my BSc Honours in Applied Computer Science with a Statistics minor, 
                where I developed a strong foundation across full-stack development, data analytics, 
                and system security. I'm driven by a desire to solve problems and create solutions that
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