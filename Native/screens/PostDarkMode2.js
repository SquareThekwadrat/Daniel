import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PostDarkMode2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.postDarkMode2}>
      <Image
        style={[styles.mapExampleIcon, styles.mapExampleIconPosition]}
        contentFit="cover"
        source={require("../assets/map--example1.png")}
      />
      <View
        style={[styles.postDarkMode2Child, styles.mapExampleIconPosition]}
      />
      <Image
        style={styles.postDarkMode2Item}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.postDarkMode2Inner}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.selectLocation, styles.submitTypo]}>
        Select location:
      </Text>
      <Pressable
        style={styles.createAccount}
        onPress={() => navigation.navigate("MapDarkMode1")}
      >
        <Text style={[styles.submit, styles.submitTypo]}>SUBMIT</Text>
      </Pressable>
      <Pressable
        style={styles.back1}
        onPress={() => navigation.navigate("PostDarkMode")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-1.png")}
        />
      </Pressable>
      <Image
        style={styles.mapExampleIcon1}
        contentFit="cover"
        source={require("../assets/map--example3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapExampleIconPosition: {
    left: 0,
    position: "absolute",
  },
  submitTypo: {
    textAlign: "left",
    color: Color.darkText,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  mapExampleIcon: {
    width: 713,
    height: 767,
    top: 0,
  },
  postDarkMode2Child: {
    top: -24,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_100,
    width: 360,
    height: 1061,
  },
  postDarkMode2Item: {
    left: 140,
    width: 80,
    height: 80,
    top: 0,
    position: "absolute",
  },
  postDarkMode2Inner: {
    top: 617,
    left: 95,
    width: 433,
    height: 365,
    position: "absolute",
  },
  selectLocation: {
    top: 147,
    left: 101,
    width: 158,
    height: 32,
  },
  submit: {
    top: 17,
    left: 20,
  },
  createAccount: {
    top: 706,
    left: 122,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorYellowgreen_100,
    width: 117,
    height: 58,
    position: "absolute",
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
  mapExampleIcon1: {
    top: 179,
    left: 42,
    width: 287,
    height: 466,
    position: "absolute",
  },
  postDarkMode2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PostDarkMode2;
