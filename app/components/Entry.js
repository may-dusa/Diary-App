import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DateBadge from "./DateBadge";

import { fonts, colors } from "./Themes";

const Entry = ({ date, entry }) => {
  return (
    <View style={styles.entry}>
      <DateBadge date={date} />
      <Text style={[fonts.body, { color: colors.text, marginTop: 4 }]}>
        {entry}
      </Text>
    </View>
  );
};

export default Entry;

const styles = StyleSheet.create({
  entry: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
