import { View, StyleSheet } from "@react-pdf/renderer";

export function PdfHr() {
  return <View style={styles.hr} />;
}

const styles = StyleSheet.create({
  hr: {
    width: "100%",
    backgroundColor: "#9b9b9b",
    height: 1,
    marginVertical: 15,
  },
});
