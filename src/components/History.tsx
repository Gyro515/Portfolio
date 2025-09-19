'use client';

/**
 * Renders the about me section that includes education and certifications.
 *
 * @param props Component props.
 * @param props.classification Classification of information.
 * @param props.role Role within the classification.
 * @param props.meta Location and date.
 * @param props.bullets List of items that include responsibilities, achievements, etc.
 * @returns Returns the rendered section component.
 */
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
