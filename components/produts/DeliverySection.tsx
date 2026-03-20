import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import BorderBottom from "../home/BorderBottom";

const Row = ({ icon, title, subtitle, rightText, showArrow = true }: any) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.iconContainer}>{icon}</View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      <View style={styles.right}>
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
        {showArrow && (
          <Ionicons name="chevron-forward" size={18} color="#888" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default function DeliverySection() {
  return (
    <>
      <View style={styles.container}>
        <Row
          icon={<Ionicons name="location-outline" size={22} color="#00b386" />}
          title="Delivery"
          rightText="Butwal-13, Belbas"
        />

        <Row
          icon={
            <MaterialCommunityIcons
              name="truck-outline"
              size={22}
              color="#00b386"
            />
          }
          title="Shipping Fee"
          subtitle="Delivery 20-21 March"
          rightText="Rs. 200"
          showArrow={false}
        />

        <Row
          icon={
            <Ionicons
              name="return-down-back-outline"
              size={22}
              color="#00b386"
            />
          }
          title="Returns & Refund Policy"
        />
      </View>
      <BorderBottom />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  iconContainer: {
    width: 30,
    alignItems: "center",
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
  },

  title: {
    fontSize: 12,
    color: "#222",
  },

  subtitle: {
    fontSize: 11,
    color: "#888",
    marginTop: 2,
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  rightText: {
    fontSize: 13,
    color: "#333",
    marginRight: 5,
    fontStyle:"italic",
    fontWeight:500
  },
});
