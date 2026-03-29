import { PreviewSidebar } from "./PreviewSidebar";
import { PreviewMainContent } from "./PreviewMainContent";
import { cvData } from "../../data/cv-data";

export function CvPreview() {
  return (
    <div className="flex w-[210mm] min-h-[297mm] mx-auto bg-white shadow-lg">
      <PreviewSidebar
        contact={cvData.contact}
        skills={cvData.skills}
        education={cvData.education}
      />
      <PreviewMainContent
        name={cvData.name}
        titles={cvData.titles}
        aboutMe={cvData.aboutMe}
        projects={cvData.projects}
      />
    </div>
  );
}
