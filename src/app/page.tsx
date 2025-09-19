'use client';

import { useEffect } from 'react';
import { useSupabaseDb } from '../hooks/useSupabaseDb';
import { motion, useReducedMotion } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/next';

import ProjectCard from '../components/ProjectCard';
import TechStack from '../components/TechStack';
import History from '../components/History';

/**
 * Scrolls to a section id saved in sessionStorage.
 */
function ScrollToSection() {
  useEffect(() => {
    const id = sessionStorage.getItem('scroll-target');
    if (!id) return;
    sessionStorage.removeItem('scroll-target');

    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  return null;
}

/**
 * Landing page with home, projects, technologies, and about me sections.
 *
 * @returns Main content for homepage.
 */
export default function Home() {
  const rm = useReducedMotion();
  const { projects, groupedTech, history } = useSupabaseDb();

  return (
    <main className="flex flex-col justify-start items-center text-center pb-32 mx-auto w-full max-w-screen-xl">
      <ScrollToSection />
      <SpeedInsights />
      {/* Home Section */}
      <section
        id="home"
        aria-labelledby="home-heading"
        className="flex flex-col items-center justify-center min-h-[clamp(540px,91.75svh,900px)] w-[90%] md:w-[60%] gap-4"
      >
        <motion.h1
          id="home-heading"
          className="text-black text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight"
          initial={rm ? false : { opacity: 0, y: 100 }}
          whileInView={rm ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Hey! I&apos;m Justin Sage
        </motion.h1>

        <motion.p
          className="text-md md:text-lg text-gray-600 leading-relaxed"
          initial={rm ? false : { opacity: 0, y: 100 }}
          whileInView={rm ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Recent graduate specializing in data analytics, full-stack development, and automation. I
          am passionate about transforming data into meaningful and actionable insights.
        </motion.p>
      </section>

      {/* Project Section */}
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="flex flex-col items-center justify-start scroll-mt-[clamp(30px,2.5svh,96px)] min-h-[clamp(540px,80svh,900px)] w-full md:w-[70%] gap-8 md:gap-10"
      >
        <h2
          id="projects-heading"
          className="text-3xl md:text-5xl font-extrabold italic uppercase text-gray-900"
        >
          My Projects
        </h2>
        <div className="w-[80%] rounded-xl border border-gray-200 bg-gray-200 p-4 shadow-sm">
          <div
            className="h-[22rem] md:h-[24rem] overflow-y-auto pr-1"
            role="region"
            aria-label="Project list"
          >
            <ul className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              {projects.map((p) => {
                const pn = p.name.toLowerCase().replace(/\s+/g, '_');
                return (
                  <li key={pn} className="list-none">
                    <ProjectCard
                      name={p.name}
                      image={p.image}
                      description={p.description}
                      pn={pn}
                      tech={Array.isArray(p.tech) ? p.tech : []}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section
        id="technologies"
        aria-labelledby="technologies-heading"
        className="flex flex-col items-center justify-start scroll-mt-[clamp(30px,2.5svh,96px)] min-h-[clamp(540px,80svh,900px)] w-[90%] md:w-[70%] gap-10"
      >
        <div className="flex flex-col items-center justify-center">
          <h2
            id="technologies-heading"
            className="text-3xl md:text-5xl font-extrabold italic uppercase text-gray-900"
          >
            What I build with
          </h2>
          <p className="pt-4 text-md md:text-lg leading-relaxed text-gray-600 w-[90%] md:w-[80%]">
            Over the years I&apos;ve worked with cutting-edge technologies, making interfaces easy
            to use, connecting the pieces behind the scenes and bringing it to life.
          </p>
        </div>

        <div className="md:pt-1 flex flex-col text-left justify-center w-[90%] md:w-[80%]">
          {Object.entries(groupedTech).map(([category, items]) => (
            <TechStack key={category} category={`${category}:`} tech={items} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="flex flex-col items-center justify-start scroll-mt-[clamp(30px,20svh,96px)] md:scroll-mt-[clamp(30px,2.5svh,96px)] min-h-[clamp(540px,80svh,900px)] w-[90%] md:w-[70%] gap-8 md:gap-10"
      >
        <div className="container mx-auto px-4">
          <h2
            id="about-heading"
            className="text-3xl md:text-5xl font-extrabold italic uppercase text-gray-900"
          >
            About Me
          </h2>
          <div className="flex flex-col gap-8 pt-4 md:w-[80%] mx-auto">
            <p className="text-md md:text-lg leading-relaxed text-gray-600">
              I recently earned my BSc Honours in Applied Computer Science with a Statistics minor,
              where I developed a strong foundation across full-stack development, data analytics,
              and system security. I&apos;m driven by a desire to solve problems and create
              solutions that bring meaningful impact. My goal is to continue growing my skills while
              contributing to projects that help people and organizations work smarter and make
              data-driven decisions.
            </p>

            {/* History Component */}
            <div className="pt-1 flex flex-col gap-5 md:pl-10 md:border-l-2 md:border-gray-900">
              {history.map((p) => {
                return (
                  <li key={p.id} className="list-none">
                    <History
                      classification={p.classification}
                      role={p.role}
                      meta={p.meta}
                      bullets={p.bullets || []}
                    />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
