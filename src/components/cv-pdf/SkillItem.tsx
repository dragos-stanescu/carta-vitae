import { View, StyleSheet } from "@react-pdf/renderer";
import { PdfText } from "./PdfText";

interface SkillItemProps {
  category: string;
  skills: string[];
}

export function SkillItem({ category, skills }: SkillItemProps) {
  return (
    <View style={styles.container}>
      <PdfText contrast bold style={styles.category}>{category}</PdfText>
      <PdfText contrast style={styles.skills}>{skills.join(", ")}</PdfText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 6,
  },
  category: {
    fontSize: 9,
    marginBottom: 1,
  },
  skills: {
    fontSize: 9,
    opacity: 0.8,
  },
});
