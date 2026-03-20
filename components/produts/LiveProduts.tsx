import { LiveProdustsData } from "@/data";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";


const LiveProducts = () => {
  const ProductCard = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />

          <View style={styles.badgeRow}>
            <View style={styles.newBadge}>
              <Text style={styles.badgeText}>
                <Feather name="wifi" size={12} color="#fff" />{"  "}
                Live
              </Text>
            </View>

            <View style={styles.discountBadge}>
              <Text style={styles.badgeText}>
                <Feather name="eye" size={12} color="#fff" />{"  "}10.3K
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.nameBar}>
          <Image source={{ uri: item.image }} style={styles.image2} />
          <Text numberOfLines={2} style={styles.name}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={LiveProdustsData}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={ProductCard}
    />
  );
};

export default LiveProducts;

const styles = StyleSheet.create({
  card: {
    width: 200,
    margin: 5,
  },

  imageContainer: {
    height: 250,
    alignItems: "center",
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 40,
  },

  image2: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    borderRadius: 40,
  },

  badgeRow: {
    position: "absolute",
    top: 10,
    left: 20,
    flexDirection: "row",
  },

  newBadge: {
    backgroundColor: "#DD4142",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 5,
  },

  discountBadge: {
    backgroundColor: "#1D222B",
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
  },
  nameBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },

  bottomSection: {
    marginTop: "auto",
  },

  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4a6cf7",
    marginTop: 5,
  },

  oldPrice: {
    fontSize: 14,
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
    fontSize: 16,
    color: "#333",
  },
});
