import { View, Link, StyleSheet } from "@react-pdf/renderer";
import { PdfText } from "./PdfText";
import type { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  text: string;
  link?: string;
}

export function ContactItem({ icon, text, link }: ContactItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      {link ? (
        <Link src={link}>
          <PdfText contrast style={styles.linkText}>
            {text}
          </PdfText>
        </Link>
      ) : (
        <PdfText contrast>{text}</PdfText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  icon: {
    width: 10,
    height: 10,
    alignItems: "center",
    marginRight: 10,
  },
  linkText: {
    textDecoration: "line-through underline",
  },
});
