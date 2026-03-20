import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";

const ProductFooter = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.btnGroup}>
        <TouchableOpacity>
          <Text style={styles.addCartBtn}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buyNowBtn}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductFooter;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    zIndex: 1000,
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 5,
  },
  addCartBtn: {
    backgroundColor: "#ffffff",
    color: "#EFC030",
    paddingHorizontal: 55,
    paddingVertical: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#EFC030",
  },
  buyNowBtn: {
    backgroundColor: Colors.tint,
    color: "#ffffff",
    paddingHorizontal: 55,
    paddingVertical: 16,
    borderRadius: 50,
  },
});
