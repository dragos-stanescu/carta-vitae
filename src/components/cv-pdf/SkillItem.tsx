import { View, StyleSheet } from "@react-pdf/renderer";
import { PdfText } from "./PdfText";

interface SkillItemProps {
  name: string;
  years: number;
}

export function SkillItem({ name, years }: SkillItemProps) {
  return (
    <View style={styles.container}>
      <PdfText contrast>{name}</PdfText>
      <View style={styles.years}>
        <PdfText contrast>{`${years} ${years > 1 ? "years" : "year"}`}</PdfText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  years: {
    width: 40,
  },
});
