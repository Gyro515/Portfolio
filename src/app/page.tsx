'use client';

import { motion } from 'framer-motion';
import { GraduationCap, GraduationCapIcon } from 'lucide-react';

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
  <article className="pl-10 border-l-2 border-black">
    <h1 className="text-2xl font-extrabold italic uppercase">{classification}</h1>
    <h2 className="text-xl font-semibold">{role}</h2>
    <h3 className="font-medium tracking-wide">{meta}</h3>
    <ul className="text-gray-600 list-disc pl-4">{bullets.map((i, j)=> (<li key={j}>{i}</li>))}
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

           {/* About Section */}
            <section id="about" className="min-h-screen flex flex-wrap justify-evenly items-center w-screen p-10">
              <div className="backdrop-blur-sm rounded-3xl bg-gradient-to-br from-white via-white- to-gray-950 shadow-lg p-4">
                <h1 className="text-9xl font-extrabold italic uppercase">About Me</h1>
              </div>

              <div className="pt-20 flex flex-col gap-4 text-left"> 
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