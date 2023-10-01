import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LightMode = ({ lightModePosition, lightModeTop, lightModeLeft }) => {
  const lightModeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", lightModePosition),
      ...getStyleValue("top", lightModeTop),
      ...getStyleValue("left", lightModeLeft),
    };
  }, [lightModePosition, lightModeTop, lightModeLeft]);

  return (
    <View style={[styles.lightMode, lightModeStyle]}>
      <View style={[styles.lightModeChild, styles.lightLayout]} />
      <View style={[styles.lightModeItem, styles.lightLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  lightLayout: {
    overflow: "hidden",
    borderRadius: Border.br_71xl,
    position: "absolute",
  },
  lightModeChild: {
    top: 48,
    left: 95,
    backgroundColor: Color.colorDarkseagreen,
    width: 90,
    height: 45,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  lightModeItem: {
    top: 4,
    left: 5,
    backgroundColor: Color.colorOlivedrab_100,
    width: 44,
    height: 44,
  },
  lightMode: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    width: 100,
    height: 50,
  },
});

export default LightMode;
