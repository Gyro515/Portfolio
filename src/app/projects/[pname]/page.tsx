import { projectdata } from "@/app/data/projectdata";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({
  params,
}: {
  params: { pname: string };
}) {
  const key = decodeURIComponent(params.pname).replace(/_/g, " ");
  const project = projectdata.find(
    (x) => x.name.toLowerCase() === key.toLowerCase()
  );
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-5xl space-y-8 pt-32 pb-32">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">{project.name}</h1>
        <p className="text-gray-600">{project.description}</p>

        {project.tech?.length ? (
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border bg-gray-50 px-3 py-1 text-xs text-gray-700"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {"links" in project && (project as any).links ? (
        <div className="flex gap-2">
          {(project as any).links?.demo && (
            <Link
              href={(project as any).links.demo}
              target="_blank"
              className="rounded-md border px-3 py-1 text-sm"
            >
              Live demo
            </Link>
          )}
          {(project as any).links?.repo && (
            <Link
              href={(project as any).links.repo}
              target="_blank"
              className="rounded-md border px-3 py-1 text-sm"
            >
              Source
            </Link>
          )}
        </div>
      ) : null}

      <Link href="/" className="text-sm text-blue-600 hover:underline">
        ← Back to home
      </Link>
    </main>
  );
}

export function generateStaticParams() {
  return projectdata.map((p) => ({
    pname: p.name.toLowerCase().replace(/\s+/g, "_"),
  }));
}
