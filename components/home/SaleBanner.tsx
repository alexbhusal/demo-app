import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import BorderBottom from "./BorderBottom";

const SalesBanner = () => {
  return (
    <>
      <View>
        <Image
          source={{
            uri: "https://imgs.search.brave.com/b8O01AM2d25mNHqIlMutoZ-lSkjncI6bWhfDbPVUdZw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/MzgyLzg2OS9zbWFs/bC9zcGVjaWFsLXNh/bGUtYmFubmVyLXRl/bXBsYXRlLXZlY3Rv/ci5qcGc",
          }}
          style={styles.banner}
        />
      </View>
      <BorderBottom />
    </>
  );
};

export default SalesBanner;

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
    borderRadius: 30,
    padding: 10,
  },
});
