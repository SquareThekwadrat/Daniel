import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Property1eye1 from "./Property1eye1";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PasswordFormContainer1 = ({
  passwordInput,
  propTop,
  propLeft,
  propWidth,
}) => {
  const password2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const newPasswordStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propLeft, propWidth]);

  return (
    <View style={[styles.password, password2Style]}>
      <Text style={[styles.newPassword, newPasswordStyle]}>
        {passwordInput}
      </Text>
      <Property1eye1
        eye1={require("../assets/eye-12.png")}
        property1eye1Position="absolute"
        property1eye1Width={40}
        property1eye1Height={40}
        property1eye1Top={5}
        property1eye1Left={190}
        property1eye1BackgroundColor="rgba(255, 255, 255, 0)"
      />
      <Image
        style={styles.lock1Icon}
        contentFit="cover"
        source={require("../assets/lock-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newPassword: {
    top: 12,
    left: 39,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.lightText,
    textAlign: "left",
    width: 151,
    height: 22,
    position: "absolute",
  },
  lock1Icon: {
    top: 14,
    left: 11,
    width: 19,
    height: 19,
    position: "absolute",
  },
  password: {
    top: 431,
    left: 55,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.lightBackground,
    borderStyle: "solid",
    borderColor: Color.lightAccent,
    borderWidth: 1,
    width: 244,
    height: 47,
    overflow: "hidden",
    position: "absolute",
  },
});

export default PasswordFormContainer1;
