import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, Keyboard, SafeAreaView } from "react-native";

import { getEntries } from "./router/EntrySlice";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Entry from "./components/Entry";
import BottomTextField from "./BottomTextField";

const HomePage = () => {
  let currentEntries = useSelector(getEntries);

  let [keyboardHeight, setKeyboardHeight] = useState(0);

  function keyboardShow(e) {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function keyboardHide() {
    setKeyboardHeight(0);
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      "keyboardWillShow",
      keyboardShow
    );
    const hideSubsscription = Keyboard.addListener(
      "keyboardWillHide",
      keyboardHide
    );

    return function cleanup() {
      showSubscription.remove();
      hideSubsscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ marginBottom: keyboardHeight + 16 }}>
      <View style={{ height: "100%" }}>
        <Header title="Year 2022" />
        <ScrollView style={{ flex: 1 }}>
          {Array.from(currentEntries).map((value, index) => (
            <Entry key={index} date={value.date} entry={value.entry} />
          ))}
        </ScrollView>
        <BottomTextField />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
