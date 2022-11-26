import { StyleSheet } from "react-native";

const fonts = StyleSheet.create({
  body: {
    fontFamily: "Regular",
    fontSize: 16,
  },
  header: {
    fontFamily: "SerifBold",
    fontSize: 44,
    lineHeight: 48,
  },
  small: {
    fontFamily: "Regular",
    fontSize: 16,
  },
  serifBig: {
    fontFamily: "Serif",
    fontSize: 32,
    lineHeight: 32,
  },
  serifSmall: {
    fontFamily: "Serif",
    fontSize: 24,
    lineHeight: 28,
  },
  italic: {
    fontFamily: "Italic",
  },
});

const colors = {
  primaryDarkest: "rgb(15, 15, 15)",
  primaryDark: "rgb(52, 52, 52)",
  primaryLightest: "rgb(239, 239, 239)",
  secondary: "rgb(255, 255, 255)",
};

export { fonts, colors };
