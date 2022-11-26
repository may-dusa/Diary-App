import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

import Icons from "./Icons";

import { colors, fonts } from "./Themes";

const TextButton = ({ title, transparent, iconLeft, iconRight, onPress }) => {
  let idle = transparent ? colors.secondary : colors.primaryDark;
  let press = transparent ? colors.primaryLightest : colors.primaryDarkest;
  let text = transparent ? colors.primaryDarkest : colors.secondary;
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={({ pressed }) => {
        return [
          {
            backgroundColor: pressed ? press : idle,
          },
          styles.textButton,
        ];
      }}
    >
      {iconLeft ? (
        <Icons name={iconLeft} color={text} style={styles.iconLeft} />
      ) : null}
      <Text style={[fonts.small, { color: text }]}>{title}</Text>
      {iconRight ? (
        <Icons name={iconRight} color={text} style={styles.iconRight} />
      ) : null}
    </Pressable>
  );
};

export { TextButton };

const styles = StyleSheet.create({
  textButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});
