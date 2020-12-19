import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";
import MessagesScreen from "./app/Screens/MessagesScreen";
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Screen>
        <Icon  
          name="email"
          size={50}
          backgroundColor = 'tomato'
          iconColor="white"
        />
      </Screen>
    </View>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <WelcomeScreen />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
