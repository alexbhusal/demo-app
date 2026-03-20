import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const colors = [
  "https://images.pexels.com/photos/36619221/pexels-photo-36619221.jpeg",
  "https://images.pexels.com/photos/4735940/pexels-photo-4735940.jpeg",
  "https://images.pexels.com/photos/4735904/pexels-photo-4735904.jpeg",
  "https://images.pexels.com/photos/7038242/pexels-photo-7038242.jpeg",
];

const storageOptions = ["64 GB", "256 GB", "512 GB", "1 TB", "2 TB"];

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Iphone 17 Pro Max</Text>

          <View style={styles.ratingRow}>
            <Text style={styles.ratingText}>4.0</Text>
            {[...Array(5)].map((_, i) => (
              <Ionicons
                key={i}
                name={i < 4 ? "star" : "star-outline"}
                size={16}
                color="#f4b400"
              />
            ))}
            <Text style={styles.reviewCount}>(242)</Text>
          </View>
        </View>

        <View style={styles.iconRow}>
          <Ionicons name="heart-outline" size={24} color="#777" />
          <Ionicons
            name="share-social-outline"
            size={24}
            color="#777"
            style={{ marginLeft: 15 }}
          />
        </View>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>Rs. 192,000</Text>
        <Text style={styles.oldPrice}>2,00,000</Text>
        <Text style={styles.discount}>-8%</Text>
      </View>

      <View style={styles.offerBox}>
        <Ionicons name="pricetag-outline" size={20} color="#f28c28" />
        <Text style={styles.offerText}>
          NPR 1,000 OFF above orders 5k
        </Text>
        <Ionicons
          name="chevron-forward"
          size={18}
          color="#f28c28"
          style={{ marginLeft: "auto" }}
        />
      </View>

      <Text style={styles.label}>Color: White</Text>

      <View style={styles.colorRow}>
        {colors.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedColor(index)}
            style={[
              styles.colorWrapper,
              selectedColor === index && styles.activeColor,
            ]}
          >
            <Image source={{ uri: item }} style={styles.colorImage} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Storage :</Text>

      <View style={styles.storageRow}>
        {storageOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedStorage(index)}
            style={[
              styles.storageBtn,
              selectedStorage === index && styles.activeStorage,
            ]}
          >
            <Text
              style={[
                styles.storageText,
                selectedStorage === index && styles.activeStorageText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  ratingText: {
    fontSize: 14,
    marginRight: 6,
  },

  reviewCount: {
    marginLeft: 6,
    color: "#888",
  },

  iconRow: {
    flexDirection: "row",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  price: {
    fontSize: 22,
    fontWeight: "700",
    color: "#5a67d8",
    marginRight: 10,
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    marginRight: 6,
  },

  discount: {
    color: "#555",
  },

  offerBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff3e8",
    padding: 8,
    borderRadius: 8,
    marginTop: 15,
  },

  offerText: {
    marginLeft: 10,
    color: "#f28c28",
    fontWeight: "400",
  },

  label: {
    marginTop: 20,
    fontSize: 12,
    color: "#444",
  },

  colorRow: {
    flexDirection: "row",
    marginTop: 10,
  },

  colorWrapper: {
    width: 40,
    height: 40,
    borderRadius: 35,
    padding: 3,
    marginRight: 12,
  },

  activeColor: {
    borderWidth: 2,
    borderColor: "#5a67d8",
  },

  colorImage: {
    width: "100%",
    height: "100%",
    borderRadius: 35,
  },

  storageRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  storageBtn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 10,
    marginBottom: 10,
  },

  activeStorage: {
    borderColor: "#5a67d8",
    backgroundColor: "#eef0ff",
  },

  storageText: {
    color: "#555",
    fontSize: 12,
  },

  activeStorageText: {
    color: "#5a67d8",
    fontWeight: "600",
  },
});