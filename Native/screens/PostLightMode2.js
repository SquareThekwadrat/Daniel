import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PostLightMode2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.postLightMode2}>
      <Image
        style={[styles.mapExampleIcon, styles.mapExampleIconPosition]}
        contentFit="cover"
        source={require("../assets/map--example1.png")}
      />
      <View
        style={[styles.postLightMode2Child, styles.mapExampleIconPosition]}
      />
      <Image
        style={styles.postLightMode2Item}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.postLightMode2Inner}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Text style={[styles.selectLocation, styles.submitTypo]}>
        Select location:
      </Text>
      <Pressable
        style={styles.createAccount}
        onPress={() => navigation.navigate("MapLightMode1")}
      >
        <Text style={[styles.submit, styles.submitTypo]}>SUBMIT</Text>
      </Pressable>
      <Pressable
        style={styles.back1}
        onPress={() => navigation.navigate("PostLightMode")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-11.png")}
        />
      </Pressable>
      <Image
        style={styles.mapExampleIcon1}
        contentFit="cover"
        source={require("../assets/map--example2.png")}
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
    color: Color.lightText,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  mapExampleIcon: {
    width: 713,
    height: 767,
    top: 0,
  },
  postLightMode2Child: {
    top: -24,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.lightBackground,
    width: 360,
    height: 1061,
  },
  postLightMode2Item: {
    left: 140,
    width: 80,
    height: 80,
    top: 0,
    position: "absolute",
  },
  postLightMode2Inner: {
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
    backgroundColor: Color.lightAccent,
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
  postLightMode2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PostLightMode2;
