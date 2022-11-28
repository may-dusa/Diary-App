import { StyleSheet } from "react-native";

const fonts = StyleSheet.create({
  body: {
    fontFamily: "Regular",
    fontSize: 16,
  },
  header: {
    fontFamily: "Regular",
    fontSize: 32,
  },
  small: {
    fontFamily: "SemiBold",
    fontSize: 12,
  },
  serif: {
    fontFamily: "Serif",
    fontSize: 16,
  },
  italic: {
    fontFamily: "Italic",
    fontSize: 16,
  },
});

const colors = {
  primaryDarkest: "rgb(15, 15, 15)",
  primaryDark: "rgb(52, 52, 52)",
  primaryLight: "rgb(114, 114, 114)",
  primaryLightest: "rgb(164, 164, 164)",
  secondaryDark: "rgb(239, 239, 239)",
  secondary: "rgb(255, 255, 255)",
  text: "rgb(52, 52, 52)",
  subtext: "rgb(114, 114, 114)",
};

export { fonts, colors };
