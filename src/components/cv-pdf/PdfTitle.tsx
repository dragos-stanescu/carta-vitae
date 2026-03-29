import { StyleSheet } from "@react-pdf/renderer";
import { PdfText } from "./PdfText";
import type { ComponentProps } from "react";

type PdfTitleProps = ComponentProps<typeof PdfText>;

export function PdfTitle({ style, ...props }: PdfTitleProps) {
  const styleArray = Array.isArray(style) ? style : style ? [style] : [];
  return <PdfText style={[styles.title, ...styleArray]} {...props} />;
}

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
    fontSize: 12,
  },
});
