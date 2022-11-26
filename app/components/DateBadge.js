import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { fonts, colors } from "./Themes";

const DateBadge = () => {
  let prototype = new Date();
  let dateDate = {
    month: prototype.getMonth().toString().padStart(2, "0"),
    day: prototype.getDate().toString().padStart(2, "0"),
    weekday: weekdays[prototype.getDay()],
    hours: (prototype.getHours() % 12).toString().padStart(2, "0"),
    minutes: prototype.getMinutes().toString().padStart(2, "0"),
    period: prototype.getHours() >= 12 ? "pm" : "am",
  };
  return (
    <View style={styles.datebadge}>
      <View style={styles.meta}>
        <Text style={[fonts.serifSmall, { color: colors.primaryDarkest }]}>
          {dateDate.day + " / " + dateDate.month}
        </Text>
      </View>
      <Text style={[fonts.small, { color: colors.primaryDark }]}>
        {dateDate.day +
          ", " +
          dateDate.hours +
          ":" +
          dateDate.minutes +
          " " +
          dateDate.period}
      </Text>
    </View>
  );
};

export default DateBadge;

const styles = StyleSheet.create({
  datebadge: {
    display: "flex",
    flexDirection: "column",
  },
  meta: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
