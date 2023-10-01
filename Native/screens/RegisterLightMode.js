import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PasswordFormContainer from "../components/PasswordFormContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const RegisterLightMode = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.registerLightMode, styles.eye1IconLayout]}>
      <Image
        style={[styles.registerLightModeChild, styles.lightPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={styles.createAccount}
        onPress={() => navigation.navigate("MapLightMode1")}
      >
        <Text style={[styles.createAccount1, styles.eMail1Typo]}>
          CREATE ACCOUNT
        </Text>
      </Pressable>
      <View style={[styles.eMail, styles.eMailLayout]}>
        <Text style={[styles.eMail1, styles.eMail1Typo]}>{`E-mail
`}</Text>
        <Image
          style={styles.malpa2Icon}
          contentFit="cover"
          source={require("../assets/malpa-2.png")}
        />
      </View>
      <View style={[styles.username, styles.eMailLayout]}>
        <Text style={[styles.eMail1, styles.eMail1Typo]}>Username</Text>
        <Image
          style={styles.malpa2Icon}
          contentFit="cover"
          source={require("../assets/user-2.png")}
        />
      </View>
      <View style={[styles.password, styles.eMailLayout]}>
        <Text style={[styles.eMail1, styles.eMail1Typo]}>{`Password
`}</Text>
        <View style={styles.eyeToggleLight}>
          <Image
            style={[styles.eye1Icon, styles.eye1IconLayout]}
            contentFit="cover"
            source={require("../assets/eye-11.png")}
          />
        </View>
        <Image
          style={styles.malpa1Icon}
          contentFit="cover"
          source={require("../assets/malpa-1.png")}
        />
        <Image
          style={styles.malpa2Icon}
          contentFit="cover"
          source={require("../assets/lock-1.png")}
        />
      </View>
      <PasswordFormContainer
        eye1={require("../assets/eye-11.png")}
        lock2={require("../assets/lock-1.png")}
      />
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.logoLight1, styles.logoLayout]}
          contentFit="cover"
          source={require("../assets/logo-light-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eye1IconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  lightPosition: {
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
    borderColor: Color.lightAccent,
    borderStyle: "solid",
    width: 244,
    borderRadius: Border.br_26xl,
    left: 55,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.lightBackground,
  },
  logoLayout: {
    height: 160,
    width: 160,
    position: "absolute",
  },
  registerLightModeChild: {
    width: 517,
    height: 462,
    position: "absolute",
  },
  createAccount1: {
    left: 31,
    color: Color.lightText,
    top: 17,
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
    color: Color.colorGray_300,
    width: 100,
    height: 22,
  },
  malpa2Icon: {
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
  eye1Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  eyeToggleLight: {
    top: 5,
    left: 190,
    width: 40,
    height: 40,
    position: "absolute",
  },
  malpa1Icon: {
    left: 19,
    width: 15,
    height: 17,
    top: 17,
    position: "absolute",
  },
  password: {
    top: 496,
  },
  logoLight1: {
    left: 0,
    top: 0,
  },
  logo: {
    top: 156,
    left: 100,
    backgroundColor: Color.lightText,
    overflow: "hidden",
  },
  registerLightMode: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.lightBackground,
    width: "100%",
  },
});

export default RegisterLightMode;
