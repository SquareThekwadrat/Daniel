import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1fromLightModeTo = ({
  property1fromLightModeToPosition,
  property1fromLightModeToTop,
  property1fromLightModeToLeft,
}) => {
  const property1fromLightModeToStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1fromLightModeToPosition),
      ...getStyleValue("top", property1fromLightModeToTop),
      ...getStyleValue("left", property1fromLightModeToLeft),
    };
  }, [
    property1fromLightModeToPosition,
    property1fromLightModeToTop,
    property1fromLightModeToLeft,
  ]);

  return (
    <View
      style={[styles.property1fromLightModeTo, property1fromLightModeToStyle]}
    >
      <View
        style={[
          styles.property1fromLightModeToChild,
          styles.property1fromPosition,
        ]}
      />
      <View
        style={[
          styles.property1fromLightModeToItem,
          styles.property1fromPosition,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1fromPosition: {
    overflow: "hidden",
    borderRadius: Border.br_71xl,
    top: 3,
    position: "absolute",
  },
  property1fromLightModeToChild: {
    left: 4,
    backgroundColor: Color.colorDarkolivegreen_100,
    width: 91,
    height: 45,
  },
  property1fromLightModeToItem: {
    left: 51,
    backgroundColor: Color.colorGray_400,
    width: 44,
    height: 44,
  },
  property1fromLightModeTo: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    width: 100,
    height: 50,
  },
});

export default Property1fromLightModeTo;
