import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BorderBottom = () => {
  return <View style={styles.borders}></View>;
};

export default BorderBottom;

const styles = StyleSheet.create({
  borders: {
    marginTop:10,
    borderBottomWidth: 4,
    borderBottomColor: "#F9FAFF",
  },
});
