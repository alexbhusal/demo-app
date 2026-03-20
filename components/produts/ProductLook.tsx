import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";

const { width } = Dimensions.get("window");

const images = [
  "https://images.pexels.com/photos/36619221/pexels-photo-36619221.jpeg",
  "https://images.pexels.com/photos/4735940/pexels-photo-4735940.jpeg",
  "https://images.pexels.com/photos/4735904/pexels-photo-4735904.jpeg",
  "https://images.pexels.com/photos/7038242/pexels-photo-7038242.jpeg",
  "https://images.pexels.com/photos/2061/restaurant-beans-coffee-cup.jpg",
  "https://images.pexels.com/photos/5951182/pexels-photo-5951182.jpeg",
  "https://images.pexels.com/photos/36619221/pexels-photo-36619221.jpeg",
  "https://images.pexels.com/photos/4735940/pexels-photo-4735940.jpeg",
];

export default function ProductLook() {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(0);

  const onViewRef = useRef(({ viewableItems }:any) => {
    if (viewableItems.length > 0) {
      setIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      <View style={styles.counter}>
        <Text style={styles.counterText}>
          {index + 1}/{images.length}
        </Text>
      </View>

      <View style={styles.dots}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              index === i && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 420,
    backgroundColor: "#f5f5f5",
  },

  image: {
    width: width,
    height: 420,
    resizeMode: "cover",
  },

  counter: {
    position: "absolute",
    top: 20,
    right: 15,
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  counterText: {
    color: "#fff",
    fontSize: 12,
  },

  dots: {
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
    flexDirection: "row",
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#5a67d8",
    width: 8,
    height: 8,
  },
});