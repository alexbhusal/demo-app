import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductCardSmall({ item }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push(`/productInfo?id=${item.id}`)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.badgeRow}>
          <View style={styles.newBadge}>
            <Text style={styles.badgeText}>New</Text>
          </View>

          <View style={styles.discountBadge}>
            <Text style={styles.badgeText}>-40%</Text>
          </View>
        </View>
      </View>

      <Text numberOfLines={2} style={styles.name}>
        {item.name}
      </Text>

      <View style={styles.bottomSection}>
        <Text style={styles.price}>Rs. {item.price}</Text>
        <Text style={styles.oldPrice}>NPR {item.original_price}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 130,
    margin: 10,
  },

  imageContainer: {
    backgroundColor: "#f3f3f3",
    borderRadius: 20,
    padding: 15,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  image: {
    width: 80,
    height: 250,
    resizeMode: "contain",
  },

  badgeRow: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
  },

  newBadge: {
    backgroundColor: "#5b6cff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 5,
  },

  discountBadge: {
    backgroundColor: "#ff8c00",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
    height: 44,
  },

  bottomSection: {
    marginTop: "auto",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4a6cf7",
    marginTop: 5,
  },

  oldPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "gray",
    marginTop: 2,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  star: {
    fontSize: 16,
    marginRight: 4,
  },

  rating: {
    fontSize: 12,
    color: "#333",
  },
});
