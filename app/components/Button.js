import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

import Icons from "./Icons";

import { colors, fonts } from "./Themes";

const TextButton = ({
  title,
  transparent,
  iconLeft,
  iconRight,
  onPress,
  flexed,
  subtle,
}) => {
  let idle = transparent
    ? colors.secondary
    : subtle
    ? colors.primaryLightest
    : colors.primaryDark;
  let press = transparent
    ? colors.primaryLightest
    : subtle
    ? colors.primaryLight
    : colors.primaryDarkest;
  let text = transparent ? colors.text : colors.secondary;
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
          flexed ? { flex: 1 } : null,
        ];
      }}
    >
      {iconLeft ? (
        <Icons name={iconLeft} color={text} style={styles.iconLeft} />
      ) : null}
      {title ? (
        <Text style={[fonts.body, { color: text }]}>{title}</Text>
      ) : null}
      {iconRight ? (
        <Icons name={iconRight} color={text} style={styles.iconRight} />
      ) : null}
    </Pressable>
  );
};

const IconButton = ({ icon, transparent, onPress, flexed, subtle }) => {
  let idle = transparent
    ? colors.secondary
    : subtle
    ? colors.primaryLightest
    : colors.primaryDark;
  let press = transparent
    ? colors.primaryLightest
    : subtle
    ? colors.primaryLight
    : colors.primaryDarkest;
  let text = transparent ? colors.text : colors.secondary;
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
          flexed ? { flex: 1 } : null,
        ];
      }}
    >
      <Icons name={icon} color={text} />
    </Pressable>
  );
};

export { TextButton, IconButton };

const styles = StyleSheet.create({
  textButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});
