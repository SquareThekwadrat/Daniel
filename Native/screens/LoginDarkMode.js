import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PasswordForm from "../components/PasswordForm";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";





const LoginDarkMode = () => {

  const navigation = useNavigation();



  return (
    <View style={[styles.loginDarkMode, styles.usernameBg]}>
      <Image
        style={[styles.loginDarkModeChild, styles.darkPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("MapDarkMode1")}
      >
        <Text style={[styles.login1, styles.login1Typo]}>LOGIN</Text>
      </Pressable>
      <Pressable
        style={styles.singUp}
        onPress={() => navigation.navigate("RegisterDarkMode")}
      >
        <Text style={[styles.signUp, styles.login1Typo]}>SIGN UP</Text>
      </Pressable>
      <View style={[styles.username, styles.usernameBorder]}>
        <Text style={styles.username1}>Username</Text>
        <Image
          style={styles.user2Icon}
          contentFit="cover"
          source={require("../assets/user-21.png")}
        />
      </View>
      <PasswordForm
        passwordInput={`Password
`}
        propTop={500}
        propLeft={40}
        propWidth={100}
      />
      <View style={[styles.rememberMe, styles.rememberMeLayout]}>
        <Text style={[styles.rememberMe1, styles.rememberMe1Typo]}>
          Remember Me
        </Text>
        <View style={[styles.rememberMeChild, styles.childBorder]} />
        <View style={[styles.component1, styles.forgotPosition]}>
          <View style={[styles.component1Child, styles.usernameBorder]} />
        </View>
      </View>
      <View style={[styles.forgotPassword, styles.rememberMeLayout]}>
        <Text style={[styles.forgotPassord, styles.forgotPosition]}>
          forgot passord?
        </Text>
        <View style={[styles.forgotPasswordChild, styles.forgotPosition]} />
      </View>
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
  login1Typo: {
    textAlign: "left",
    color: Color.darkText,
    fontSize: FontSize.size_xl,
  },
  usernameBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  rememberMeLayout: {
    height: 20,
    width: 110,
    top: 550,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  rememberMe1Typo: {
    height: 14,
    width: 80,
    fontSize: FontSize.size_3xs,
    top: 3,
    color: Color.colorBeige_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  childBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorBeige_100,
    top: 16,
    borderStyle: "solid",
  },
  forgotPosition: {
    left: 15,
    position: "absolute",
  },
  logoLayout: {
    height: 160,
    width: 160,
    position: "absolute",
  },
  loginDarkModeChild: {
    width: 517,
    height: 462,
    position: "absolute",
  },
  login1: {
    top: 17,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.darkText,
    fontSize: FontSize.size_xl,
    left: 25,
    position: "absolute",
  },
  login: {
    top: 705,
    left: 222,
    backgroundColor: Color.lightSecondary,
    width: 113,
    height: 58,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  signUp: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    textAlign: "left",
    color: Color.darkText,
    fontSize: FontSize.size_xl,
  },
  singUp: {
    top: 700,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_3xl,
    left: 25,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  username1: {
    top: 12,
    left: 40,
    width: 100,
    height: 22,
    color: Color.colorBeige_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  user2Icon: {
    top: 14,
    left: 11,
    width: 19,
    height: 19,
    position: "absolute",
  },
  username: {
    top: 431,
    borderColor: Color.colorYellowgreen_100,
    width: 244,
    height: 47,
    left: 55,
    borderRadius: Border.br_26xl,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  rememberMe1: {
    left: 30,
    position: "absolute",
  },
  rememberMeChild: {
    width: 70,
    left: 30,
    position: "absolute",
  },
  component1Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.lightBackground,
    borderColor: Color.lightText,
    width: "100%",
  },
  component1: {
    top: 5,
    width: 10,
    height: 10,
  },
  rememberMe: {
    left: 55,
  },
  forgotPassord: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    height: 14,
    width: 80,
    fontSize: FontSize.size_3xs,
    top: 3,
    color: Color.colorBeige_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  forgotPasswordChild: {
    width: 76,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorBeige_100,
    top: 16,
    borderStyle: "solid",
  },
  forgotPassword: {
    left: 189,
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
  loginDarkMode: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginDarkMode;
