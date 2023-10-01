import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-open-maps'

// let location = {
//   latitude: 23,
//   longitude: 77,
//   latitudeDelta: 0.009,
//   longitudeDelta: 0.009
// }


const MapDarkMode1 = () => {
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
      <Image
        style={[styles.settings1Icon, styles.user1Layout]}
        contentFit="cover"
        source={require("../assets/settings-11.png")}
      />
      <Image
        style={[styles.wolf1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wolf-1.png")}
      />
      <Pressable
        style={[styles.fox1, styles.fox1Position]}
        onPress={() => navigation.navigate("MapDarkMode")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/fox-1.png")}
        />
      </Pressable>
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
        style={[styles.boar1Icon, styles.fox1Position]}
        contentFit="cover"
        source={require("../assets/boar-2.png")}
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
  },
  user1: {
    left: 298,
  },
  settings1Icon: {
    left: 22,
  },
  wolf1Icon: {
    left: 248,
    top: 178,
  },
  fox1: {
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
  mapDarkMode: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MapDarkMode1;
