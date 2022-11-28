import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { addEntry } from "./router/EntrySlice";
import { useDispatch } from "react-redux";
import { colors, fonts } from "./components/Themes";
import { TextButton, IconButton } from "./components/Button";

const BottomTextField = () => {
  let [isFocus, setFocus] = useState(false);
  let inputRef = useRef(null);
  let entry = "";

  let dispatcher = useDispatch();

  function dateData(date) {
    return {
      month: date.getMonth().toString().padStart(2, "0"),
      day: date.getDate().toString().padStart(2, "0"),
      weekdays: weekdays[date.getDay()],
      hours: (date.getHours() % 12).toString().padStart(2, "0"),
      minutes: date.getMinutes().toString().padStart(2, "0"),
      period: date.getHours() >= 12 ? "PM" : "AM",
    };
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={[fonts.italic, styles.textInput]}
        selectionColor={colors.primaryDarkest}
        placeholder="Pour your heart out..."
        placeholderTextColor={colors.primaryDark}
        multiline={true}
        onFocus={() => {
          setFocus(true);
        }}
        onChangeText={(e) => (entry = e)}
      />
      {isFocus ? (
        <View style={styles.buttonGroup}>
          <IconButton
            icon="close"
            subtle={true}
            onPress={() => {
              inputRef.current.blur();
              inputRef.current.clear();
              setFocus(false);
            }}
          />
          <View style={{ width: 12 }}></View>
          <TextButton
            title="Okay"
            iconLeft="check"
            flexed={true}
            onPress={() => {
              dispatcher(
                addEntry({
                  date: dateData(new Date()),
                  entry: entry,
                })
              );
              inputRef.current.blur();
              inputRef.current.clear();
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default BottomTextField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginHorizontal: 16,
  },
  textInput: {
    marginTop: 8,
    padding: 0,
    height: 120,
  },
  buttonGroup: {
    flexDirection: "row",
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
