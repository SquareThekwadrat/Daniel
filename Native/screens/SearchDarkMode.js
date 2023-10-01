import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const SearchDarkMode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchDarkMode}>
      <Image
        style={[styles.mapExampleIcon, styles.mapExampleIconPosition]}
        contentFit="cover"
        source={require("../assets/map--example1.png")}
      />
      <Image
        style={[styles.wolf1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wolf-1.png")}
      />
      <Image
        style={[styles.fox1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/fox-1.png")}
      />
      <Image
        style={[styles.dog1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/dog-1.png")}
      />
      <Image
        style={[styles.deer1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/deer-1.png")}
      />
      <Image
        style={[styles.bear1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bear-1.png")}
      />
      <Image
        style={[styles.other1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/other-1.png")}
      />
      <Image
        style={[styles.cat1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cat-1.png")}
      />
      <Image
        style={[styles.boar1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/boar-2.png")}
      />
      <View
        style={[styles.searchDarkModeChild, styles.mapExampleIconPosition]}
      />
      <Pressable
        style={styles.createAccount}
        onPress={() => navigation.navigate("MapDarkMode1")}
      >
        <Text style={[styles.submit, styles.animalTypo]}>SUBMIT</Text>
      </Pressable>
      <View style={[styles.username, styles.usernamePosition]}>
        <Text style={[styles.animal, styles.animalTypo]}>Animal</Text>
        <Image
          style={styles.usernameChild}
          contentFit="cover"
          source={require("../assets/polygon-11.png")}
        />
      </View>
      <Image
        style={styles.searchDarkModeItem}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={styles.plus1}
        onPress={() => navigation.navigate("MapDarkMode1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/plus-13.png")}
        />
      </Pressable>
      <Text style={[styles.searchByAnimal, styles.usernamePosition]}>
        Search by Animal:
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mapExampleIconPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  iconPosition: {
    left: 76,
    height: 50,
    width: 50,
    position: "absolute",
  },
  animalTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  usernamePosition: {
    width: 313,
    left: 24,
    position: "absolute",
  },
  mapExampleIcon: {
    top: 0,
    width: 713,
    height: 767,
  },
  wolf1Icon: {
    left: 248,
    top: 178,
  },
  fox1Icon: {
    top: 323,
  },
  dog1Icon: {
    top: 439,
    left: 180,
  },
  deer1Icon: {
    top: 56,
    left: 51,
  },
  bear1Icon: {
    top: 122,
    left: 291,
  },
  other1Icon: {
    top: 562,
    left: 67,
  },
  cat1Icon: {
    top: 400,
    left: 241,
  },
  boar1Icon: {
    top: 178,
  },
  searchDarkModeChild: {
    top: 480,
    borderRadius: Border.br_11xl,
    width: 360,
    height: 557,
    backgroundColor: Color.colorGray_100,
  },
  submit: {
    top: 17,
    left: 20,
    color: Color.darkText,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  createAccount: {
    top: 706,
    left: 122,
    backgroundColor: Color.colorYellowgreen_100,
    width: 117,
    height: 58,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  animal: {
    top: 12,
    left: 14,
    color: Color.colorBeige_100,
    width: 217,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  usernameChild: {
    top: 20,
    left: 281,
    width: 15,
    height: 10,
    position: "absolute",
  },
  username: {
    top: 607,
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 1,
    height: 47,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
  },
  searchDarkModeItem: {
    top: 449,
    left: 140,
    width: 80,
    height: 80,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  plus1: {
    left: 133,
    top: 442,
    width: 93,
    height: 93,
    position: "absolute",
  },
  searchByAnimal: {
    top: 573,
    height: 28,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.darkText,
  },
  searchDarkMode: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default SearchDarkMode;
