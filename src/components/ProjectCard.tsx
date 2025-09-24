'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getPublicImageUrl } from '@/lib/supabaseClient';

/**
 * Renders the projects section that includes project cards that links to its detail page.
 *
 * @param props Component props.
 * @param props.name Name of the project.
 * @param props.image Image sample of the project.
 * @param props.summary Summary of the project.
 * @param props.pn Identifier for routing.
 * @param props.tech Optional list of technologies used in the project.
 * @returns Returns the rendered section component.
 */
export default function ProjectCard({
  name,
  image,
  summary,
  pn,
  tech = [],
}: {
  name: string;
  image: string;
  summary: string;
  pn: string;
  tech?: string[];
}) {
  const titleId = `project-${pn}-title`;

  return (
    <Link
      href={`/projects/${pn}`}
      aria-labelledby={titleId}
      className="group block relative overflow-hidden w-full h-[20rem] md:h-[22rem] rounded-xl bg-gray-50 hover:shadow-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-800"
    >
      {/* Image */}
      <div className="relative h-[35%] md:h-[45%] w-full overflow-hidden rounded-t-xl">
        <Image
          src={getPublicImageUrl(image, 'project-images')}
          alt={`Screenshot of ${name} project`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          priority={false}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center py-1 md:py-3">
        <h3 id={titleId} className="text-md md:text-lg font-semibold text-gray-900 leading-loose">
          {name}
        </h3>
        <p className="text-md text-gray-700 text-balance">{summary}</p>
        <ul className="flex flex-wrap gap-2 items-stretch py-2 mx-3">
          {tech.map((t) => (
            <li key={t}>
              <span className="rounded-full border border-gray-300 bg-gray-200 px-1.5 py-0.5 text-sm text-gray-700">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
