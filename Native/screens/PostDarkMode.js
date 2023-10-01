import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PostDarkMode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.postDarkMode}>
      <Image
        style={styles.mapExampleIcon}
        contentFit="cover"
        source={require("../assets/map--example1.png")}
      />
      <View style={styles.postDarkModeChild} />
      <View style={[styles.username, styles.usernameBorder]}>
        <Text style={[styles.howDoesIt, styles.animalTypo]}>
          How does it look like?
        </Text>
      </View>
      <View style={[styles.username1, styles.usernameBorder]}>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <Image
        style={styles.postDarkModeItem}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.postDarkModeInner}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={[styles.username2, styles.username2Layout]}>
        <Text style={[styles.animal, styles.animalTypo]}>Animal</Text>
        <Image
          style={styles.usernameChild}
          contentFit="cover"
          source={require("../assets/polygon-11.png")}
        />
      </View>
      <Text style={[styles.whatAnimalDid, styles.nextTypo]}>
        What animal did you see?
      </Text>
      <Text style={[styles.describeItsAppearance, styles.optionalSendATypo]}>
        Describe its appearance:
      </Text>
      <Text style={[styles.optionalSendA, styles.optionalSendATypo]}>
        (Optional) Send a photo.
      </Text>
      <Pressable
        style={[styles.createAccount, styles.username2Layout]}
        onPress={() => navigation.navigate("PostDarkMode2")}
      >
        <Text style={[styles.next, styles.nextPosition]}>NEXT</Text>
      </Pressable>
      <Pressable
        style={[styles.back1, styles.nextPosition]}
        onPress={() => navigation.navigate("MapDarkMode1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  usernameBorder: {
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    borderStyle: "solid",
    left: 58,
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
  },
  animalTypo: {
    height: 22,
    textAlign: "left",
    color: Color.colorBeige_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  username2Layout: {
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  nextTypo: {
    color: Color.darkText,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  optionalSendATypo: {
    left: 62,
    color: Color.darkText,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  nextPosition: {
    left: 32,
    position: "absolute",
  },
  mapExampleIcon: {
    width: 713,
    height: 767,
    left: 0,
    top: 0,
    position: "absolute",
  },
  postDarkModeChild: {
    top: -24,
    borderRadius: Border.br_11xl,
    width: 360,
    height: 1061,
    backgroundColor: Color.colorGray_100,
    left: 0,
    position: "absolute",
  },
  howDoesIt: {
    top: 14,
    left: 11,
    width: 222,
  },
  username: {
    top: 284,
    height: 116,
    borderRadius: Border.br_6xl,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    borderStyle: "solid",
    position: "absolute",
  },
  image1Icon: {
    top: 16,
    left: 89,
    width: 67,
    height: 67,
    position: "absolute",
  },
  username1: {
    top: 459,
    height: 100,
    borderRadius: Border.br_6xl,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    borderStyle: "solid",
    position: "absolute",
  },
  postDarkModeItem: {
    left: 140,
    width: 80,
    height: 80,
    top: 0,
    position: "absolute",
  },
  postDarkModeInner: {
    top: 617,
    left: 95,
    width: 433,
    height: 365,
    position: "absolute",
  },
  animal: {
    top: 12,
    left: 14,
    width: 217,
  },
  usernameChild: {
    top: 20,
    left: 215,
    width: 15,
    height: 10,
    position: "absolute",
  },
  username2: {
    top: 179,
    height: 47,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    borderStyle: "solid",
    left: 58,
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
  },
  whatAnimalDid: {
    top: 147,
    width: 255,
    height: 32,
    left: 58,
    color: Color.darkText,
    position: "absolute",
  },
  describeItsAppearance: {
    top: 253,
    width: 261,
    height: 23,
  },
  optionalSendA: {
    top: 423,
    width: 251,
    height: 25,
  },
  next: {
    top: 17,
    color: Color.darkText,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  createAccount: {
    top: 706,
    left: 122,
    backgroundColor: Color.colorYellowgreen_100,
    width: 117,
    height: 58,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back1: {
    top: 28,
    width: 30,
    height: 27,
  },
  postDarkMode: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PostDarkMode;
