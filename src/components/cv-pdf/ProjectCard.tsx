import { View, StyleSheet } from "@react-pdf/renderer";
import { PdfText } from "./PdfText";
import type { Project } from "../../data/types";

interface ProjectCardProps extends Project {
  isLastItem?: boolean;
}

export function ProjectCard({
  projectName,
  from,
  to,
  title,
  company,
  clientProblem,
  achievements,
  skills,
  isLastItem,
}: ProjectCardProps) {
  const timelineLineStyle = isLastItem
    ? { ...styles.timelineLine, bottom: 5 }
    : styles.timelineLine;

  return (
    <View style={styles.container} wrap={false}>
      <View style={styles.content}>
        <View style={timelineLineStyle} />
        <View style={styles.timelineMarker} />

        <View style={styles.heading}>
          <PdfText style={styles.title}>{title} </PdfText>
          <PdfText style={styles.period}>
            {from} - {to}
          </PdfText>
        </View>

        <View style={styles.body}>
          <PdfText style={styles.projectName}>
            {projectName}
            {company && ` | ${company}`}
          </PdfText>

          <PdfText style={styles.clientProblem}>{clientProblem}</PdfText>

          <View style={styles.achievements}>
            {achievements.map((achievement, i) => (
              <PdfText key={i} style={styles.achievement}>
                <PdfText style={styles.bulletPoint}>{"• "}</PdfText>
                <PdfText bold style={styles.achievementText}>
                  {achievement.bold}
                </PdfText>{" "}
                {achievement.detail}
              </PdfText>
            ))}
          </View>

          <View style={styles.skillsContainer}>
            <PdfText style={styles.skillText}>
              <PdfText style={styles.skillText} bold>
                Skills:
              </PdfText>{" "}
              {skills.join(", ")}
            </PdfText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingBottom: 8,
    paddingTop: 12,
  },
  timelineLine: {
    position: "absolute",
    left: 0,
    top: 16,
    bottom: -16,
    width: 1,
    backgroundColor: "#d4d4d4",
  },
  timelineMarker: {
    position: "absolute",
    width: 9,
    height: 9,
    backgroundColor: "rgb(74, 74, 74)",
    borderRadius: 9,
    left: -4,
    top: 16,
  },
  heading: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 4,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  period: {
    fontSize: 10,
    opacity: 0.8,
  },
  body: {
    minHeight: 90,
  },
  projectName: {
    fontSize: 10,
    marginBottom: 5,
  },
  clientProblem: {
    fontSize: 10,
    opacity: 0.7,
  },
  achievements: {
    marginTop: 7,
    opacity: 0.7,
  },
  bulletPoint: {
    letterSpacing: 5,
    textIndent: 10,
  },
  achievement: {
    marginBottom: 10,
    fontSize: 10,
  },
  achievementText: {
    fontSize: 10,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    opacity: 0.7,
  },
  skillText: {
    fontSize: 10,
  },
});
