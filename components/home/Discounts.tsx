import { View, Image, StyleSheet } from "react-native";
import React from "react";
import BorderBottom from "./BorderBottom";

const Discounts = () => {
  return (
    <>
      <View>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dxdbrqanq/image/upload/v1773994294/exg9qrubgrciw0xcb4sh.png",
          }}
          style={styles.banner}
        />
      </View>
      <BorderBottom />
    </>
  );
};

export default Discounts;

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
    borderRadius: 30,
    padding: 3,
  },
});
