import React, { useState, useRef } from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";

import { addEntry, getEntries } from "./router/EntrySlice";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import Divider from "./components/Divider";

import { colors, fonts } from "./components/Themes";
import { TextButton } from "./components/Button";

const HomePage = () => {
  let currentEntries = useSelector(getEntries);

  return (
    <View classname="main-container">
      <Header title="Year 2022" />
      <NewEntry />
      {/* All entries divided by month */}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  newEntry: {
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 16,
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

const NewEntry = () => {
  let [isFocus, setFocus] = useState(false);
  let inputRef = useRef(null);

  let entry = "";

  let dispatch = useDispatch();

  return (
    <View style={styles.newEntry}>
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
          <TextButton
            title="Cancel"
            transparent={true}
            onPress={() => {
              inputRef.current.blur();
              setFocus(false);
            }}
          />
          <View style={{ width: 12 }}></View>
          <TextButton
            title="Okay"
            iconLeft="check"
            onPress={() => {
              dispatch(
                addEntry({
                  dt: new Date().getSeconds().toString(),
                  entry: entry,
                })
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};
