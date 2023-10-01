import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PasswordFormContainer = ({
  eye1,
  lock2,
  propTop,
  propColor,
  propBackgroundColor,
}) => {
  const passwordStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const password1Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const eyeToggleLightStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={[styles.password, styles.passwordPosition, passwordStyle]}>
      <Text style={[styles.password1, password1Style]}>{`Password
`}</Text>
      <View style={[styles.eyeToggleLight, eyeToggleLightStyle]}>
        <Image
          style={[styles.eye1Icon, styles.passwordPosition]}
          contentFit="cover"
          source={eye1}
        />
      </View>
      <Image style={styles.lock2Icon} contentFit="cover" source={lock2} />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  password1: {
    top: 12,
    left: 40,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_300,
    textAlign: "left",
    width: 100,
    height: 22,
    position: "absolute",
  },
  eye1Icon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  eyeToggleLight: {
    top: 5,
    left: 190,
    width: 40,
    height: 40,
    position: "absolute",
  },
  lock2Icon: {
    top: 14,
    left: 11,
    width: 19,
    height: 19,
    position: "absolute",
  },
  password: {
    top: 561,
    left: 55,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.lightBackground,
    borderStyle: "solid",
    borderColor: Color.lightAccent,
    borderWidth: 1,
    width: 244,
    height: 47,
  },
});

export default PasswordFormContainer;
