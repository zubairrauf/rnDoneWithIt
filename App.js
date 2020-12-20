import React, { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";
import MessagesScreen from "./app/Screens/MessagesScreen";
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from "./app/components/ListItem";
import AccountScreen from './app/Screens/AccountScreen'
import ListingsScreen from './app/Screens/ListingsScreen'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'

const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3},
]

export default function App() {
  const [ firstName, setFirstName ] = useState('')
  const [ isNew, setIsNew ] = useState('false')
  const [ category, setCategory ] = useState('')

  return (
    <Screen>
     <AppPicker 
        items={categories} 
        icon='apps' 
        placeholder={'Category'} 
        selectedItem={category} 
        onSelectItem={item => setCategory(item.label)}
      />
     <AppTextInput icon='email' placeholder={'email'}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
