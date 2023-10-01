import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1fromLightModeTo from "../components/Property1fromLightModeTo";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SettingsDarkMode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingsDarkMode}>
      <Image
        style={styles.settingsDarkModeChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={styles.settingsDarkModeItem} />
      <View style={[styles.darkModeWrapper, styles.englishParentLayout]}>
        <Text style={[styles.darkMode, styles.englishTypo]}>DARK MODE</Text>
      </View>
      <View style={[styles.englishParent, styles.englishParentLayout]}>
        <Text style={[styles.english, styles.englishTypo]}>English</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
      <Pressable
        style={styles.back1}
        onPress={() => navigation.navigate("MapDarkMode1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-1.png")}
        />
      </Pressable>
      <Property1fromLightModeTo
        property1fromLightModeToPosition="absolute"
        property1fromLightModeToTop={227}
        property1fromLightModeToLeft={245}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  englishParentLayout: {
    height: 50,
    width: 221,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    borderStyle: "solid",
    borderRadius: Border.br_26xl,
    left: 10,
    position: "absolute",
    overflow: "hidden",
  },
  englishTypo: {
    textAlign: "left",
    color: Color.darkText,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    top: 13,
    position: "absolute",
  },
  settingsDarkModeChild: {
    top: 617,
    left: 95,
    width: 433,
    height: 365,
    position: "absolute",
  },
  settingsDarkModeItem: {
    top: -40,
    left: 140,
    borderRadius: Border.br_71xl,
    backgroundColor: Color.lightSecondary,
    width: 80,
    height: 80,
    position: "absolute",
    overflow: "hidden",
  },
  darkMode: {
    left: 51,
  },
  darkModeWrapper: {
    top: 227,
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
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back1: {
    left: 31,
    top: 27,
    width: 30,
    height: 27,
    position: "absolute",
  },
  settingsDarkMode: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default SettingsDarkMode;
