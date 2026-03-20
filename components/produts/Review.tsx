import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import Section from "../home/Section";
import BorderBottom from "../home/BorderBottom";
import BorderLine from "./BorderLine";

const images = [
  { uri: "https://images.pexels.com/photos/36619221/pexels-photo-36619221.jpeg" },
  { uri: "https://images.pexels.com/photos/4735940/pexels-photo-4735940.jpeg" },
  { uri: "https://images.pexels.com/photos/4735904/pexels-photo-4735904.jpeg" },
  { uri: "https://images.pexels.com/photos/7038242/pexels-photo-7038242.jpeg" },
  { uri: "https://images.pexels.com/photos/36619221/pexels-photo-36619221.jpeg" },
  { uri: "https://images.pexels.com/photos/4735940/pexels-photo-4735940.jpeg" },
  { uri: "https://images.pexels.com/photos/4735904/pexels-photo-4735904.jpeg" },
  { uri: "https://images.pexels.com/photos/7038242/pexels-photo-7038242.jpeg" },
];

const reviewImages = [
  { uri: "https://images.pexels.com/photos/2061/restaurant-beans-coffee-cup.jpg" },
  { uri: "https://images.pexels.com/photos/5951182/pexels-photo-5951182.jpeg" },
  { uri: "https://imgs.search.brave.com/gRgUP_h6bNurRSjU009suL4jwgeCSP0GtoTZyEKXX4g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWct/djItcHJvZC53aG9w/LmNvbS91bnNhZmUv/cnM6Zml0OjEwODA6/MC9wbGFpbi9odHRwczovL2Fzc2V0cy53aG9wLmNvbS9pbWFnZXMvaW1hZ2VzLzQ2MTM3Lm9yaWdpbmFsLmpwZWdAYXZpZj93PTEwODAmcT03NQ" },
];

const StarRow = ({ count, total }:any) => {
  return (
    <View style={styles.starRow}>
      <Text style={styles.starLabel}>{count}</Text>
      <Ionicons name="star" size={14} color="#f4b400" />
      <View style={styles.bar}>
        <View style={[styles.fill, { width: `${(total / 1000) * 100}%` }]} />
      </View>
      <Text style={styles.starCount}>{total}</Text>
    </View>
  );
};

const ReviewCard = () => {
  return (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <View style={styles.avatar}>
          <Text style={{ color: "#fff" }}>A</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.ratingText}>4.0</Text>
            {[...Array(5)].map((_, i) => (
              <Ionicons key={i} name="star" size={14} color="#f4b400" />
            ))}
            <Text style={styles.date}>Mar 18, 2026</Text>
          </View>

          <Text style={styles.name}>S***R</Text>
        </View>
      </View>

      <Text style={styles.reviewText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={styles.reviewImages}>
        {reviewImages.map((img, index) => (
          <Image key={index} source={img} style={styles.reviewImg} />
        ))}
      </View>

      <Text style={styles.meta}>Color Family: Brown, Size:04</Text>

      <View style={styles.likeRow}>
        <Feather name="thumbs-up" size={18} color="black" />
        <Text style={{ marginLeft: 5 }}>69</Text>
      </View>
    </View>
  );
};

export default function Review() {
  return (<>
        <Section title={"Reviews"}/>
        <BorderLine/>
    <View style={styles.container}>
      <View style={styles.summary}>
        <View style={styles.left}>
          <Text style={styles.bigRating}>4.5</Text>
          <View style={{ flexDirection: "row" }}>
            {[...Array(5)].map((_, i) => (
              <Ionicons key={i} name="star" size={16} color="#f4b400" />
            ))}
          </View>
          <Text style={styles.total}>(84)</Text>
        </View>

        <View style={styles.right}>
          <StarRow count={5} total={1000} />
          <StarRow count={4} total={300} />
          <StarRow count={3} total={422} />
          <StarRow count={2} total={90} />
          <StarRow count={1} total={32} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>All Photos</Text>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.media} />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>All Videos</Text>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <Image source={{ uri: item.uri }} style={styles.media} />
            <View style={styles.playIcon}>
              <Ionicons name="play" size={20} color="#fff" />
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
      <ReviewCard />
      <BorderLine/>
      <ReviewCard />
    </View>
    <BorderBottom/>
  </>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },

  summary: {
    flexDirection: "row",
    marginBottom: 20,
  },

  left: {
    width: 100,
    alignItems: "center",
  },

  bigRating: {
    fontSize: 36,
    fontWeight: "bold",
  },

  total: {
    color: "#888",
  },

  right: {
    flex: 1,
    marginLeft: 10,
  },

  starRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },

  starLabel: {
    width: 15,
  },

  bar: {
    flex: 1,
    height: 6,
    backgroundColor: "#eee",
    marginHorizontal: 5,
    borderRadius: 5,
  },

  fill: {
    height: 6,
    backgroundColor: "#f4b400",
    borderRadius: 5,
  },

  starCount: {
    width: 40,
    textAlign: "right",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },

  media: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginRight: 10,
  },

  videoContainer: {
    position: "relative",
  },

  playIcon: {
    position: "absolute",
    top: "35%",
    left: "35%",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
  },

  reviewCard: {
    marginTop: 20,
    paddingVertical:10
  },

  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  ratingText: {
    fontWeight: "bold",
    marginRight: 5,
  },

  date: {
    marginLeft: 5,
    color: "#888",
    fontSize: 12,
  },

  name: {
    color: "#555",
  },

  reviewText: {
    marginVertical: 10,
    color: "#444",
  },

  reviewImages: {
    flexDirection: "row",
  },

  reviewImg: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginRight: 10,
  },

  meta: {
    marginTop: 8,
    color: "#666",
  },

  likeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});