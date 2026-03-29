import type { Project } from "../../data/types";

interface PreviewProjectCardProps extends Project {
  isLastItem?: boolean;
}

export function PreviewProjectCard({
  projectName,
  from,
  to,
  title,
  company,
  clientProblem,
  achievements,
  skills,
  isLastItem,
}: PreviewProjectCardProps) {
  return (
    <div className="relative pl-5 pb-3 pt-3">
      <div
        className={`absolute left-0 top-4 w-px bg-gray-300 ${isLastItem ? "bottom-1" : "-bottom-4"}`}
      />
      <div className="absolute w-2.5 h-2.5 bg-gray-600 rounded-full -left-1 top-4" />

      <div className="flex flex-wrap justify-between items-end mb-1">
        <span className="text-sm font-bold">{title}</span>
        <span className="text-xs text-gray-500">
          {from} - {to}
        </span>
      </div>

      <p className="text-xs mb-1">
        {projectName}
        {company && ` | ${company}`}
      </p>

      <p className="text-xs text-gray-500">{clientProblem}</p>

      <ul className="mt-2 space-y-2">
        {achievements.map((achievement, i) => (
          <li key={i} className="text-xs text-gray-500">
            <span className="mr-1">•</span>
            <strong className="text-gray-700">{achievement.bold}</strong>{" "}
            {achievement.detail}
          </li>
        ))}
      </ul>

      <p className="text-xs text-gray-500 mt-2">
        <strong className="text-gray-700">Skills:</strong> {skills.join(", ")}
      </p>
    </div>
  );
}
