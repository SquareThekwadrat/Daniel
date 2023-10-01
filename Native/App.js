const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SettingsDarkMode from "./screens/SettingsDarkMode";
import Property1fromLightModeTo from "./components/Property1fromLightModeTo";
import LightMode from "./components/LightMode";
import Property1eye1 from "./components/Property1eye1";
import RegisterLightMode from "./screens/RegisterLightMode";
import MapLightMode1 from "./screens/MapLightMode1";
import PostLightMode from "./screens/PostLightMode";
import PostLightMode2 from "./screens/PostLightMode2";
import SearchLightMode from "./screens/SearchLightMode";
import UserLightMode from "./screens/UserLightMode";
import MapLightMode from "./screens/MapLightMode";
import LoginLightMode from "./screens/LoginLightMode";
import SettingsLightMode from "./screens/SettingsLightMode";
import ForgotPasswordDarkMode from "./screens/ForgotPasswordDarkMode";
import LoginDarkMode from "./screens/LoginDarkMode";
import MapDarkMode1 from "./screens/MapDarkMode1";
import PostDarkMode from "./screens/PostDarkMode";
import SearchDarkMode from "./screens/SearchDarkMode";
import UserDarkMode from "./screens/UserDarkMode";
import MapDarkMode from "./screens/MapDarkMode";
import RegisterDarkMode from "./screens/RegisterDarkMode";
import PostDarkMode2 from "./screens/PostDarkMode2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginDarkMode">
            <Stack.Screen
              name="SettingsDarkMode"
              component={SettingsDarkMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterLightMode"
              component={RegisterLightMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapLightMode1"
              component={MapLightMode1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostLightMode"
              component={PostLightMode}
              options={{ headerShown: false }}
              screenOptions={{ animation: 'none' }}
            />
            <Stack.Screen
              name="PostLightMode2"
              component={PostLightMode2}
              options={{ headerShown: false }}
              screenOptions={{ animation: 'none' }}
            />
            <Stack.Screen
              name="SearchLightMode"
              component={SearchLightMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserLightMode"
              component={UserLightMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapLightMode"
              component={MapLightMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginLightMode"
              component={LoginLightMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsLightMode"
              component={SettingsLightMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPasswordDarkMode"
              component={ForgotPasswordDarkMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginDarkMode"
              component={LoginDarkMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapDarkMode1"
              component={MapDarkMode1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostDarkMode"
              component={PostDarkMode}
              options={{ headerShown: false, }}
              screenOptions={{ animation: 'none' }}
            />
            <Stack.Screen
              name="SearchDarkMode"
              component={SearchDarkMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserDarkMode"
              component={UserDarkMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapDarkMode"
              component={MapDarkMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterDarkMode"
              component={RegisterDarkMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostDarkMode2"
              component={PostDarkMode2}
              options={{ headerShown: false, }}
              screenOptions={{ animation: 'none' }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
