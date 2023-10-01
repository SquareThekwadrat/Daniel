import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PasswordFormContainer from "../components/PasswordFormContainer";
import PasswordFormContainer1 from "../components/PasswordFormContainer1";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const LoginLightMode = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loginLightMode, styles.singUpBg]}>
      <Image
        style={[styles.loginLightModeChild, styles.lightChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("MapLightMode1")}
      >
        <Text style={[styles.login1, styles.saveTypo]}>LOGIN</Text>
      </Pressable>
      <Pressable
        style={[styles.singUp, styles.singUpBg]}
        onPress={() => navigation.navigate("RegisterLightMode")}
      >
        <Text style={[styles.signUp, styles.saveTypo]}>SIGN UP</Text>
      </Pressable>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.username1Position]}>
          Username
        </Text>
        <Image
          style={styles.user2Icon}
          contentFit="cover"
          source={require("../assets/user-2.png")}
        />
      </View>
      <PasswordFormContainer
        eye1={require("../assets/eye-11.png")}
        lock2={require("../assets/lock-1.png")}
        propTop={500}
        propColor="rgba(45, 45, 21, 0.25)"
        propBackgroundColor="unset"
      />
      <View style={[styles.rememberMe, styles.rememberMeLayout]}>
        <Text style={[styles.rememberMe1, styles.rememberMe1Typo]}>
          Remember Me
        </Text>
        <View style={[styles.rememberMeChild, styles.childBorder]} />
        <View style={[styles.component1, styles.forgotPosition]}>
          <View style={styles.component1Child} />
        </View>
        <View style={[styles.logo, styles.logoLayout]}>
          <Image
            style={[styles.logoLight2, styles.logoLayout]}
            contentFit="cover"
            source={require("../assets/logo-light-1.png")}
          />
        </View>
      </View>
      <View style={[styles.forgotPassword, styles.rememberMeLayout]}>
        <Text style={[styles.forgotPassord, styles.forgotPosition]}>
          forgot passord?
        </Text>
        <View style={[styles.forgotPasswordChild, styles.forgotPosition]} />
      </View>
      <View style={styles.forgotPasswordLightMode}>
        <Image
          style={[styles.forgotPasswordLightModeChild, styles.lightChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Pressable
          style={styles.createAccount}
          onPress={() => navigation.navigate("MapDarkMode1")}
        >
          <Text style={[styles.save, styles.saveTypo]}>SAVE</Text>
        </Pressable>
        <View style={[styles.username2, styles.usernameLayout]}>
          <Text style={[styles.enterACode, styles.username1Position]}>
            Enter a code
          </Text>
        </View>
        <PasswordFormContainer1
          passwordInput={`New Password
`}
        />
        <PasswordFormContainer1
          passwordInput={`Password
`}
          propTop={496}
          propLeft={40}
          propWidth={100}
        />
        <View style={[styles.logo1, styles.logoLayout]}>
          <Image
            style={[styles.logoLight2, styles.logoLayout]}
            contentFit="cover"
            source={require("../assets/logo-light-1.png")}
          />
        </View>
        <Text style={[styles.weSendYou, styles.saveTypo]}>
          We send you a code in your e-mail
        </Text>
      </View>
      <View style={[styles.logo1, styles.logoLayout]}>
        <Image
          style={[styles.logoLight2, styles.logoLayout]}
          contentFit="cover"
          source={require("../assets/logo-light-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singUpBg: {
    overflow: "hidden",
    backgroundColor: Color.lightBackground,
  },
  lightChildLayout: {
    height: 462,
    width: 517,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "left",
    color: Color.lightText,
    fontSize: FontSize.size_xl,
  },
  usernameLayout: {
    height: 47,
    borderColor: Color.lightAccent,
    width: 244,
    borderWidth: 1,
    borderStyle: "solid",
    left: 55,
    borderRadius: Border.br_26xl,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.lightBackground,
  },
  username1Position: {
    height: 22,
    left: 40,
    top: 12,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rememberMeLayout: {
    height: 20,
    width: 110,
    top: 550,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.lightBackground,
  },
  rememberMe1Typo: {
    height: 14,
    width: 80,
    fontSize: FontSize.size_3xs,
    top: 3,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  childBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
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
  loginLightModeChild: {
    left: 0,
    top: 0,
  },
  login1: {
    fontFamily: FontFamily.interRegular,
    color: Color.lightText,
    fontSize: FontSize.size_xl,
    position: "absolute",
    left: 25,
    top: 17,
  },
  login: {
    left: 222,
    width: 113,
    height: 58,
    backgroundColor: Color.lightSecondary,
    borderRadius: Border.br_26xl,
    top: 705,
    position: "absolute",
  },
  signUp: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.lightText,
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
    backgroundColor: Color.lightBackground,
  },
  username1: {
    width: 100,
    color: Color.colorGray_300,
    height: 22,
    left: 40,
    top: 12,
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
    borderColor: Color.lightText,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.lightBackground,
  },
  component1: {
    top: 5,
    width: 10,
    height: 10,
  },
  logoLight2: {
    left: 0,
    top: 0,
  },
  logo: {
    top: -394,
    left: 45,
    backgroundColor: Color.lightText,
    width: 160,
    overflow: "hidden",
  },
  rememberMe: {
    left: 55,
    height: 20,
    width: 110,
    top: 550,
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
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  forgotPasswordChild: {
    width: 76,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
    top: 16,
    borderStyle: "solid",
  },
  forgotPassword: {
    left: 189,
  },
  forgotPasswordLightModeChild: {
    top: -306,
    left: -142,
  },
  save: {
    left: 97,
    fontFamily: FontFamily.interRegular,
    color: Color.lightText,
    fontSize: FontSize.size_xl,
    position: "absolute",
    top: 17,
  },
  createAccount: {
    width: 244,
    left: 55,
    height: 58,
    backgroundColor: Color.lightSecondary,
    borderRadius: Border.br_26xl,
    top: 705,
    position: "absolute",
  },
  enterACode: {
    width: 129,
    height: 22,
    left: 40,
    top: 12,
    color: Color.lightText,
  },
  username2: {
    top: 366,
  },
  logo1: {
    top: 156,
    left: 100,
    backgroundColor: Color.lightText,
    width: 160,
    overflow: "hidden",
  },
  weSendYou: {
    top: 324,
    left: 17,
    fontFamily: FontFamily.interRegular,
    color: Color.lightText,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  forgotPasswordLightMode: {
    left: 400,
    width: 360,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.lightBackground,
  },
  loginLightMode: {
    flex: 1,
    height: 800,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.lightBackground,
  },
});

export default LoginLightMode;
