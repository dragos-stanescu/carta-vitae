import { PreviewProjectCard } from "./PreviewProjectCard";
import type { CvData } from "../../data/types";

interface PreviewMainContentProps {
  name: string;
  titles: string[];
  aboutMe: string;
  projects: CvData["projects"];
}

export function PreviewMainContent({
  name,
  titles,
  aboutMe,
  projects,
}: PreviewMainContentProps) {
  return (
    <main className="flex-1 p-6">
      <div className="text-center">
        <h1 className="text-3xl uppercase tracking-wide">{name}</h1>
        <p className="mt-1 text-sm text-gray-600">
          {titles.join(" • ")}
        </p>
      </div>

      <hr className="my-4 border-gray-300" />

      <h2 className="uppercase text-sm font-bold text-[#202A44] mb-1">
        About Me
      </h2>
      <p className="text-xs text-gray-500 mb-4">{aboutMe}</p>

      <h2 className="uppercase text-sm font-bold text-[#202A44] mt-4">
        Most Relevant Work Experience
      </h2>

      {projects.map((project, index) => (
        <PreviewProjectCard
          key={project.projectName}
          isLastItem={index === projects.length - 1}
          {...project}
        />
      ))}
    </main>
  );
}
