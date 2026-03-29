import { Text, StyleSheet } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";
import type { PropsWithChildren } from "react";

interface PdfTextProps extends PropsWithChildren {
  contrast?: boolean;
  bold?: boolean;
  style?: Style | Style[];
}

export function PdfText({ contrast, bold, style, ...props }: PdfTextProps) {
  const computed: Style = { ...styles.base };

  if (contrast) computed.color = "#FFF";
  if (bold) computed.fontWeight = 900;

  const styleArray = Array.isArray(style) ? style : style ? [style] : [];
  return <Text style={[computed, ...styleArray]} {...props} />;
}

const styles = StyleSheet.create({
  base: {
    fontFamily: "Lato",
    color: "#242424",
    fontSize: 11,
    textAlign: "justify",
  },
});
