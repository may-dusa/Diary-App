import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { configureStore } from "@reduxjs/toolkit";
import { useFonts } from "expo-font";
import {
  OpenSans_400Regular as Regular,
  OpenSans_600SemiBold as SemiBold,
  OpenSans_400Regular_Italic as Italic,
} from "@expo-google-fonts/open-sans";
import {
  PlayfairDisplay_400Regular as Serif,
  PlayfairDisplay_600SemiBold as SerifBold,
} from "@expo-google-fonts/playfair-display";

import { fonts, colors } from "./app/components/Themes";

import HomePage from "./app/HomePage";

import EntrySlice from "./app/router/EntrySlice";
import { Provider } from "react-redux";

export default function App() {
  let [fontsLoaded] = useFonts({
    Regular,
    SemiBold,
    Italic,
    Serif,
    SerifBold,
  });

  let store = configureStore({
    reducer: {
      entries: EntrySlice,
    },
  });

  return (
    <Provider store={store}>
      {fontsLoaded ? <HomePage /> : <SplashScreen />}
    </Provider>
  );
}

const SplashScreen = () => {
  return (
    <View style={styles.splash}>
      <Text style={{ color: colors.primaryVariant }}>YOUR DIARY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
});
