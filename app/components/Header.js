import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { fonts, colors } from "./Themes";

const Header = ({ title, rightActions }) => {
  return (
    <View style={styles.header}>
      <Text style={[fonts.header, { color: colors.primaryDarkest }]}>
        {title}
      </Text>
      <View>{rightActions}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    margin: 16,
    justifyContent: "space-between",
  },
});
