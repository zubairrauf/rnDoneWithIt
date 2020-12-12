import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function ItemSeparator() {
  return <View style={styles.separator} />;
}
export default ItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.light,
  },
});
