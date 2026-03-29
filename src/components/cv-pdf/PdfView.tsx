import { PDFViewer } from "@react-pdf/renderer";
import { CvDocument } from "./CvDocument";

export default function PdfView() {
  return (
    <PDFViewer style={{ width: "100%", height: "calc(100vh - 64px)" }}>
      <CvDocument />
    </PDFViewer>
  );
}
