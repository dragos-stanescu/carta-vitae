import { Document, Page, Font, StyleSheet } from "@react-pdf/renderer";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { cvData } from "../../data/cv-data";

Font.register({
  family: "Lato",
  src: "/fonts/Lato/Lato-Regular.ttf",
  fontStyle: "normal",
  fontWeight: "normal",
});
Font.register({
  family: "Lato",
  src: "/fonts/Lato/Lato-Black.ttf",
  fontStyle: "normal",
  fontWeight: 900,
});

export function CvDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Sidebar
          contact={cvData.contact}
          skills={cvData.skills}
          education={cvData.education}
        />
        <MainContent
          name={cvData.name}
          titles={cvData.titles}
          aboutMe={cvData.aboutMe}
          projects={cvData.projects}
        />
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
});
