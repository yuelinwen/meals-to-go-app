// npm install react-native-paper 
// npm install --save styled-components

//fonts install
//expo install expo-font
//expo install @expo-google-fonts/oswald 
//expo install @expo-google-fonts/lato 
//svg icon
//expo install react-native-svg
//navigation
//npm install @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/bottom-tabs

//分页
//npm install @react-navigation/stack

//map
//expo install react-native-maps

//andriod image web view 插件
//expo install react-native-webview

//expo local storage
//expo install @react-native-async-storage/async-storage
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}