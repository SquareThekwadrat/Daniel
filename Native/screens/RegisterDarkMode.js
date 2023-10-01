import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PasswordForm from "../components/PasswordForm";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const RegisterDarkMode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerDarkMode}>
      <Image
        style={[styles.registerDarkModeChild, styles.darkPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Pressable
        style={styles.createAccount}
        onPress={() => navigation.navigate("MapDarkMode1")}
      >
        <Text style={[styles.createAccount1, styles.eMail1Typo]}>
          CREATE ACCOUNT
        </Text>
      </Pressable>
      <View style={[styles.eMail, styles.eMailLayout]}>
        <Text style={[styles.eMail1, styles.eMail1Typo]}>{`E-mail
`}</Text>
        <Image
          style={styles.malpa3Icon}
          contentFit="cover"
          source={require("../assets/malpa-3.png")}
        />
      </View>
      <View style={[styles.username, styles.eMailLayout]}>
        <Text style={[styles.eMail1, styles.eMail1Typo]}>Username</Text>
        <Image
          style={styles.malpa3Icon}
          contentFit="cover"
          source={require("../assets/user-21.png")}
        />
      </View>
      <PasswordForm
        passwordInput={`Password
`}
      />
      <PasswordForm
        passwordInput={`Password
`}
        propTop={561}
        propLeft={40}
        propWidth={100}
      />
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.logoDark1, styles.logoLayout]}
          contentFit="cover"
          source={require("../assets/logo-dark-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  darkPosition: {
    left: 0,
    top: 0,
  },
  eMail1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  eMailLayout: {
    height: 47,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    borderStyle: "solid",
    width: 244,
    borderRadius: Border.br_26xl,
    left: 55,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  logoLayout: {
    height: 160,
    width: 160,
    position: "absolute",
  },
  registerDarkModeChild: {
    width: 517,
    height: 462,
    position: "absolute",
  },
  createAccount1: {
    top: 17,
    left: 31,
    color: Color.darkText,
  },
  createAccount: {
    top: 705,
    backgroundColor: Color.lightSecondary,
    height: 58,
    width: 244,
    borderRadius: Border.br_26xl,
    left: 55,
    position: "absolute",
  },
  eMail1: {
    top: 12,
    left: 40,
    color: Color.colorBeige_100,
    width: 100,
    height: 22,
  },
  malpa3Icon: {
    top: 14,
    left: 11,
    width: 19,
    height: 19,
    position: "absolute",
  },
  eMail: {
    top: 431,
  },
  username: {
    top: 366,
  },
  logoDark1: {
    left: 0,
    top: 0,
  },
  logo: {
    top: 156,
    left: 100,
    backgroundColor: Color.darkText,
    overflow: "hidden",
  },
  registerDarkMode: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default RegisterDarkMode;
