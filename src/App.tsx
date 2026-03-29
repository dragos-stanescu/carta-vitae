import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { CvPreview } from "./components/cv-preview/CvPreview";
import { CvDocument } from "./components/cv-pdf/CvDocument";

type View = "preview" | "pdf";

function App() {
  const [view, setView] = useState<View>("preview");

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex items-center justify-center gap-4 p-4 bg-white shadow-sm">
        <button
          onClick={() => setView("preview")}
          className={`px-4 py-2 rounded text-sm font-medium ${
            view === "preview"
              ? "bg-[#202A44] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Web Preview
        </button>
        <button
          onClick={() => setView("pdf")}
          className={`px-4 py-2 rounded text-sm font-medium ${
            view === "pdf"
              ? "bg-[#202A44] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          PDF Export
        </button>
      </nav>

      {view === "preview" ? (
        <div className="py-8">
          <CvPreview />
        </div>
      ) : (
        <PDFViewer className="w-full h-[calc(100vh-64px)]">
          <CvDocument />
        </PDFViewer>
      )}
    </div>
  );
}

export default App;
