import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PasswordForm from "../components/PasswordForm";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

const ForgotPasswordDarkMode = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.forgotPasswordDarkMode, styles.usernameBg]}>
      <Image
        style={[styles.forgotPasswordDarkModeChild, styles.darkPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Pressable
        style={[styles.createAccount, styles.usernameLayout]}
        onPress={() => navigation.navigate("MapDarkMode1")}
      >
        <Text style={[styles.save, styles.saveTypo]}>SAVE</Text>
      </Pressable>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.enterACode, styles.saveTypo]}>Enter a code</Text>
      </View>
      <PasswordForm
        passwordInput={`New Password
`}
        propTop={431}
        propLeft={39}
        propWidth={151}
      />
      <PasswordForm
        passwordInput={`Password
`}
        propTop={496}
        propLeft={40}
        propWidth={100}
      />
      <Text style={[styles.weSendYou, styles.saveTypo]}>
        We send you a code in your e-mail
      </Text>
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
  usernameBg: {
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
  },
  darkPosition: {
    left: 0,
    top: 0,
  },
  usernameLayout: {
    width: 244,
    borderRadius: Border.br_26xl,
    left: 55,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  logoLayout: {
    height: 160,
    width: 160,
    position: "absolute",
  },
  forgotPasswordDarkModeChild: {
    width: 517,
    height: 462,
    position: "absolute",
    top: 0,
  },
  save: {
    top: 17,
    left: 97,
    color: Color.darkText,
  },
  createAccount: {
    top: 705,
    backgroundColor: Color.lightSecondary,
    height: 58,
  },
  enterACode: {
    top: 12,
    left: 40,
    color: Color.colorBeige_100,
    width: 129,
    height: 22,
  },
  username: {
    top: 366,
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 1,
    height: 47,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  weSendYou: {
    top: 324,
    left: 17,
    color: Color.colorWhite,
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
  forgotPasswordDarkMode: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ForgotPasswordDarkMode;
