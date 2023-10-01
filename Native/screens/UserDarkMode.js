import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const UserDarkMode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userDarkMode}>
      <Image
        style={styles.userDarkModeChild}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <View style={styles.logo} />
      <Text style={styles.myProfile}>My Profile</Text>
      <Pressable
        style={[styles.createAccount, styles.createLayout]}
        onPress={() => navigation.navigate("LoginDarkMode")}
      >
        <Text style={[styles.logOut, styles.editTypo]}>LOG OUT</Text>
      </Pressable>
      <View style={[styles.createAccount1, styles.createLayout]}>
        <Text style={[styles.edit, styles.editTypo]}>EDIT</Text>
      </View>
      <Pressable
        style={styles.back2}
        onPress={() => navigation.navigate("MapDarkMode1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-1.png")}
        />
      </Pressable>
      <Text style={styles.userInfoUsernameContainer}>
        <Text style={styles.userInfo}>{`User Info:
`}</Text>
        <Text style={styles.blankLine}> </Text>
        <Text style={styles.userInfo}>Username:</Text>
        <Text style={styles.blankLine}>{` Example
`}</Text>
        <Text style={styles.userInfo}>Email:</Text>
        <Text style={styles.blankLine}>{` email@example.com
`}</Text>
        <Text style={styles.userInfo}>Password:</Text>
        <Text style={styles.blankLine}>{` *********

`}</Text>
        <Text style={styles.userInfo}>Date joined:</Text>
        <Text style={styles.blankLine}>{` xx-xx-xxxx

`}</Text>
        <Text style={styles.userInfo}>Animals spotted:</Text>
        <Text style={styles.blankLine}>{` 0
`}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  createLayout: {
    height: 58,
    borderRadius: Border.br_26xl,
    width: 140,
    left: 110,
    position: "absolute",
  },
  editTypo: {
    textAlign: "left",
    top: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  userDarkModeChild: {
    top: 0,
    left: 0,
    width: 517,
    height: 462,
    position: "absolute",
  },
  logo: {
    top: 138,
    borderRadius: Border.br_71xl,
    backgroundColor: Color.darkText,
    height: 140,
    width: 140,
    left: 110,
    position: "absolute",
    overflow: "hidden",
  },
  myProfile: {
    top: 60,
    left: 85,
    fontSize: FontSize.size_17xl,
    width: 190,
    height: 56,
    textAlign: "center",
    color: Color.darkText,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  logOut: {
    left: 25,
    color: Color.lightText,
  },
  createAccount: {
    top: 703,
    backgroundColor: Color.lightBackground,
  },
  edit: {
    left: 48,
    color: Color.darkText,
    top: 17,
  },
  createAccount1: {
    top: 627,
    backgroundColor: Color.lightSecondary,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back2: {
    left: 19,
    top: 18,
    width: 30,
    height: 27,
    position: "absolute",
  },
  userInfo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  blankLine: {
    fontFamily: FontFamily.interRegular,
  },
  userInfoUsernameContainer: {
    top: 300,
    left: 16,
    width: 322,
    height: 368,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.darkText,
    position: "absolute",
  },
  userDarkMode: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default UserDarkMode;
