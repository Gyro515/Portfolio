/**
 * @file useSupabaseDb
 * @description React hook to fetch and manage data from my Supabase database.
 */

'use client';

import { useEffect, useState, useMemo } from 'react';
import { supabase } from '../lib/supabaseClient';

/**
 * Record from the `projects` table.
 */
export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  tech: string[] | null;
};

/**
 * Record from the `technologies` table.
 */
export type Technology = {
  id: number;
  name: string;
  icon: string;
  category: string;
};

/**
 * Record from the `history` table.
 */
export type History = {
  id: string;
  classification: string;
  role: string;
  meta: string;
  bullets: string[] | null;
};

/**
 * Mapping of technology categories to their respective technologies.
 */
export type TechGroup = Record<string, { name: string; icon: string }[]>;

/**
 * Fetches all `projects` and `technologies` tables from Supabase and returns results.
 */
export function useSupabaseDb(): {
  projects: Project[];
  groupedTech: TechGroup;
  history: History[];
} {
  const [projects, setProjects] = useState<Project[]>([]);
  const [technologies, setTech] = useState<Technology[]>([]);
  const [history, setHist] = useState<History[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function fetchAll() {
      const [projectsRes, techRes, histRest] = await Promise.all([
        supabase.from('projects').select('*'),
        supabase.from('technologies').select('*'),
        supabase.from('history').select('*'),
      ]);

      if (!cancelled) {
        if (projectsRes.error) {
          console.error('Error fetching projects:', projectsRes.error);
          setProjects([]);
        } else {
          setProjects(projectsRes.data ?? []);
        }

        if (techRes.error) {
          console.error('Error fetching technologies:', techRes.error);
          setTech([]);
        } else {
          setTech(techRes.data ?? []);
        }

        if (histRest.error) {
          console.error('Error fetching technologies:', histRest.error);
          setHist([]);
        } else {
          setHist(histRest.data ?? []);
        }
      }
    }

    fetchAll();

    return () => {
      cancelled = true;
    };
  }, []);

  const groupedTech: TechGroup = useMemo(() => {
    const group = technologies.reduce((acc, t) => {
      const cat = (t.category ?? 'Other').trim();
      (acc[cat] ??= []).push({ name: t.name, icon: t.icon });
      return acc;
    }, {} as TechGroup);

    Object.entries(group).forEach(([category, list]) => {
      const sorted = list.sort((a, b) => {
        const techA = technologies.find((tech) => tech.name === a.name);
        const techB = technologies.find((tech) => tech.name === b.name);

        return (techA?.id ?? 0) - (techB?.id ?? 0);
      });
      group[category] = sorted;
    });

    return group;
  }, [technologies]);

  return { projects, groupedTech, history };
}
