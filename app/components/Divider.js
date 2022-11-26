import React from "react";
import { View, StyleSheet } from "react-native";

import { colors } from "./Themes";

const Divider = () => {
  return <View style={styles.style}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  style: {
    display: "flex",
    height: 1,
    backgroundColor: colors.primaryDark,
    marginHorizontal: 16,
  },
});
