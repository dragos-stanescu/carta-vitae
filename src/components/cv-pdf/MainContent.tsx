import { View, StyleSheet } from "@react-pdf/renderer";
import { PdfText } from "./PdfText";
import { PdfTitle } from "./PdfTitle";
import { PdfHr } from "./PdfHr";
import { ProjectCard } from "./ProjectCard";
import type { CvData } from "../../data/types";

interface MainContentProps {
  name: string;
  titles: string[];
  aboutMe: string;
  projects: CvData["projects"];
}

export function MainContent({
  name,
  titles,
  aboutMe,
  projects,
}: MainContentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PdfText style={styles.name}>{name}</PdfText>
        <View style={styles.titleContainer}>
          {titles.map((title, index) => (
            <View key={title} style={styles.titleItemContainer}>
              {!!index && <PdfText style={styles.titleSeparator}>•</PdfText>}
              <PdfText style={styles.titleItem}>{title}</PdfText>
            </View>
          ))}
        </View>
      </View>

      <PdfHr />

      <PdfTitle style={styles.sectionTitle}>About Me</PdfTitle>
      <PdfText style={styles.aboutMe}>{aboutMe}</PdfText>

      <PdfTitle style={styles.workExperienceTitle}>
        Most Relevant Work Experience
      </PdfTitle>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.projectName}
          isLastItem={index === projects.length - 1}
          {...project}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "0 20px 20px 20px",
    flex: 1,
  },
  header: {
    alignItems: "center",
  },
  name: {
    fontSize: 32,
    textTransform: "uppercase",
    marginTop: 15,
  },
  titleContainer: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  titleItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleItem: {
    fontSize: 12,
  },
  titleSeparator: {
    paddingHorizontal: 2,
  },
  sectionTitle: {
    color: "#202A44",
    fontSize: 12,
    marginBottom: 5,
  },
  aboutMe: {
    opacity: 0.7,
    fontSize: 10,
    marginTop: 2,
    marginBottom: 3,
  },
  workExperienceTitle: {
    color: "#202A44",
    fontSize: 12,
    marginTop: 18,
  },
});
