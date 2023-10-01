import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1eye1 = ({
  eye1,
  property1eye1Position,
  property1eye1Width,
  property1eye1Height,
  property1eye1Top,
  property1eye1Left,
  property1eye1BackgroundColor,
}) => {
  const property1eye1Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1eye1Position),
      ...getStyleValue("width", property1eye1Width),
      ...getStyleValue("height", property1eye1Height),
      ...getStyleValue("top", property1eye1Top),
      ...getStyleValue("left", property1eye1Left),
      ...getStyleValue("backgroundColor", property1eye1BackgroundColor),
    };
  }, [
    property1eye1Position,
    property1eye1Width,
    property1eye1Height,
    property1eye1Top,
    property1eye1Left,
    property1eye1BackgroundColor,
  ]);

  return (
    <View style={[styles.property1eye1, property1eye1Style]}>
      <Image style={styles.eye1Icon} contentFit="cover" source={eye1} />
    </View>
  );
};

const styles = StyleSheet.create({
  eye1Icon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  property1eye1: {
    width: 140,
    height: 140,
  },
});

export default Property1eye1;
