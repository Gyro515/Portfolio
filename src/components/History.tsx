'use client';

export default function History({
  classification,
  role,
  meta,
  bullets,
}: {
  classification: string;
  role: string;
  meta: string;
  bullets: string[];
}) {
  return (
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
  );
}
