import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-open-maps'

let location = {
  latitude: 23,
  longitude: 77,
  latitudeDelta: 0.009,
  longitudeDelta: 0.009
}

const MapDarkMode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mapDarkMode}>
      <Image
        style={[styles.mapExampleIcon, styles.mapPosition]}
        contentFit="cover"
        source={require("../assets/map--example1.png")}
      />

      <View style={[styles.mapDarkModeChild, styles.mapPosition]} />
      <Image
        style={styles.mapDarkModeItem}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={styles.plus1}
        onPress={() => navigation.navigate("PostDarkMode")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/plus-12.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.search1, styles.user1Layout]}
        onPress={() => navigation.navigate("SearchDarkMode")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/search-11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.user1, styles.user1Layout]}
        onPress={() => navigation.navigate("UserDarkMode")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/user-11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.settings1, styles.settings1Position]}
        onPress={() => navigation.navigate("SettingsDarkMode")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/settings-11.png")}
        />
      </Pressable>
      <Image
        style={[styles.cat1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cat-1.png")}
      />
      <Image
        style={[styles.wolf1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wolf-1.png")}
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
        style={[styles.boar1Icon, styles.fox1Position]}
        contentFit="cover"
        source={require("../assets/boar-2.png")}
      />
      <Image
        style={[styles.other1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/other-1.png")}
      />
      <Image
        style={styles.mapDarkModeInner}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Pressable
        style={[styles.fox1, styles.fox1Position]}
        onPress={() => navigation.navigate("MapDarkMode1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/fox-1.png")}
        />
      </Pressable>
      <Text style={[styles.fox, styles.containerTypo]}>Fox</Text>
      <Text
        style={[
          styles.descriptionExampleDescriptiContainer,
          styles.containerTypo,
        ]}
      >
        <Text style={styles.foxTypo}>{`Description:
`}</Text>
        <Text style={styles.exampleDescription}>Example description</Text>
      </Text>
      <Text style={[styles.foundByUsernameContainer, styles.containerTypo]}>
        <Text style={styles.foxTypo}>
          <Text style={styles.foundBy1}>Found by:</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.username}>Username</Text>
      </Text>
      <Text style={[styles.minutesAgo, styles.containerTypo]}>
        5 minutes ago
      </Text>
      <Text style={[styles.photos, styles.containerTypo]}>{`Photos:
`}</Text>
      <Image
        style={[styles.example1Icon, styles.settings1Position]}
        contentFit="cover"
        source={require("../assets/example-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapPosition: {
    left: 0,
    position: "absolute",
  },
  user1Layout: {
    height: 40,
    width: 40,
    top: 737,
  },
  settings1Position: {
    left: 22,
    position: "absolute",
  },
  iconLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  fox1Position: {
    left: 76,
    height: 50,
    width: 50,
    position: "absolute",
  },
  containerTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  mapExampleIcon: {
    top: 0,
    width: 713,
    height: 767,
  },
  mapDarkModeChild: {
    top: 713,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_100,
    width: 360,
    height: 324,
  },
  mapDarkModeItem: {
    top: 687,
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
    left: 147,
    top: 694,
    width: 66,
    height: 66,
    position: "absolute",
  },
  search1: {
    left: 233,
    position: "absolute",
  },
  user1: {
    left: 298,
    position: "absolute",
  },
  settings1: {
    height: 40,
    width: 40,
    top: 737,
  },
  cat1Icon: {
    top: 400,
    left: 241,
  },
  wolf1Icon: {
    left: 248,
    top: 178,
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
  boar1Icon: {
    top: 178,
  },
  other1Icon: {
    top: 562,
    left: 67,
  },
  mapDarkModeInner: {
    top: 357,
    left: 7,
    borderRadius: Border.br_xl,
    width: 195,
    height: 301,
    position: "absolute",
  },
  fox1: {
    top: 323,
  },
  fox: {
    top: 373,
    left: 56,
    width: 90,
    height: 28,
    color: Color.darkText,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  foxTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  exampleDescription: {
    fontFamily: FontFamily.interRegular,
  },
  descriptionExampleDescriptiContainer: {
    top: 435,
    left: 36,
    width: 130,
    height: 30,
    color: Color.darkText,
  },
  foundBy1: {
    color: Color.darkText,
  },
  text: {
    color: Color.colorWhite,
  },
  username: {
    fontFamily: FontFamily.interRegular,
    color: Color.darkText,
  },
  foundByUsernameContainer: {
    top: 390,
    left: 8,
    width: 186,
    height: 19,
  },
  minutesAgo: {
    top: 409,
    left: 35,
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 131,
    height: 16,
    color: Color.darkText,
  },
  photos: {
    top: 503,
    left: 66,
    width: 70,
    height: 21,
    color: Color.darkText,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  example1Icon: {
    top: 529,
    borderRadius: Border.br_7xs,
    width: 157,
    height: 101,
  },
  mapDarkMode: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MapDarkMode;
