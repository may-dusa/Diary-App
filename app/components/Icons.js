import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Icons = ({ name, size, color, style }) => {
  let sizeNumber = size == "small" ? 12 : size == "big" ? 24 : 16;
  return <Icon name={name} size={sizeNumber} color={color} style={style} />;
};

export default Icons;
