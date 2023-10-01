import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LightMode from "../components/LightMode";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SettingsLightMode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingsLightMode}>
      <Image
        style={styles.settingsLightModeChild}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <View style={styles.settingsLightModeItem} />
      <View style={[styles.lightModeWrapper, styles.englishParentLayout]}>
        <Text style={[styles.lightMode, styles.englishTypo]}>LIGHT MODE</Text>
      </View>
      <View style={[styles.englishParent, styles.englishParentLayout]}>
        <Text style={[styles.english, styles.englishTypo]}>English</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/arrow-11.png")}
        />
      </View>
      <Pressable
        style={styles.back1}
        onPress={() => navigation.navigate("MapLightMode1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-11.png")}
        />
      </Pressable>
      <LightMode
        lightModePosition="absolute"
        lightModeTop={227}
        lightModeLeft={245}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  englishParentLayout: {
    height: 50,
    width: 221,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_26xl,
    left: 10,
    position: "absolute",
    overflow: "hidden",
  },
  englishTypo: {
    textAlign: "left",
    color: Color.lightText,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    top: 13,
    position: "absolute",
  },
  settingsLightModeChild: {
    top: 617,
    left: 95,
    width: 433,
    height: 365,
    position: "absolute",
  },
  settingsLightModeItem: {
    top: -40,
    left: 140,
    borderRadius: Border.br_71xl,
    backgroundColor: Color.lightSecondary,
    width: 80,
    height: 80,
    position: "absolute",
    overflow: "hidden",
  },
  lightMode: {
    left: 48,
  },
  lightModeWrapper: {
    top: 227,
    borderColor: Color.lightSecondary,
  },
  english: {
    left: 19,
  },
  frameChild: {
    top: 21,
    left: 181,
    width: 17,
    height: 15,
    position: "absolute",
  },
  englishParent: {
    top: 303,
    borderColor: "#445e26",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back1: {
    left: 32,
    top: 28,
    width: 30,
    height: 27,
    position: "absolute",
  },
  settingsLightMode: {
    backgroundColor: Color.lightBackground,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default SettingsLightMode;
