import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { fonts, colors } from "./Themes";

const DateBadge = ({ date }) => {
  return (
    <View style={styles.datebadge}>
      <Text style={[fonts.body, { color: colors.text }]}>
        {date.weekdays +
          " / " +
          date.hours +
          ":" +
          date.minutes +
          " " +
          date.period}
      </Text>
    </View>
  );
};

export default DateBadge;

const styles = StyleSheet.create({
  datebadge: {
    display: "flex",
    flexDirection: "row",
  },
});
