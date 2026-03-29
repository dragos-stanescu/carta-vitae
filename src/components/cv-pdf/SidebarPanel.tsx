import { View, StyleSheet } from "@react-pdf/renderer";
import { PdfTitle } from "./PdfTitle";
import type { ReactNode } from "react";

interface SidebarPanelProps {
  title: string;
  children: ReactNode;
}

export function SidebarPanel({ title, children }: SidebarPanelProps) {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <PdfTitle contrast>{title}</PdfTitle>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "8px 10px",
  },
  heading: {
    paddingBottom: 10,
    borderBottom: "2px solid #8e8e8f",
  },
  content: {
    paddingTop: 10,
  },
});
