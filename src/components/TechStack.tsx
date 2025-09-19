'use client';

import { Icon } from '@iconify/react';

/**
 * Renders the technologies section.
 *
 * @param props Component props.
 * @param props.category Category of the group of technologies (e.g., "Languages").
 * @param props.tech Technology objects list containing `name` and `icon`.
 * @returns Returns the rendered section component.
 */
export default function TechStack({
  category,
  tech = [],
}: {
  category: string;
  tech?: { name: string; icon: string }[];
}) {
  return (
    <article className="flex flex-row items-center py-4">
      <p className="text-md md:text-lg font-bold text-gray-800 w-full">{category}</p>
      <ul className="flex flex-row justify-end gap-2 md:gap-4">
        {tech.map((t) => (
          <li key={`${t.icon}-${t.name}`} className="relative group">
            <Icon icon={t.icon} className="size-5 md:size-9" aria-hidden="true" />
            <span className="sr-only">{t.name}</span>
            <span className="absolute top-full left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
              {t.name}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
