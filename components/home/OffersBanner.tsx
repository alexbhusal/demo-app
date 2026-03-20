import { View, Image, StyleSheet, FlatList, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import BorderBottom from "./BorderBottom";

const { width } = Dimensions.get("window");

const banners = [
  {
    id: "1",
    image:
      "https://imgs.search.brave.com/U7wk9UgiEeIAo6xg16C8bqZ1JTANpWji3bfNTjMPM7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/NzczODU0NS92ZWN0/b3IvbGltaXRlZC1v/ZmZlci1iYW5uZXIt/dGVtcGxhdGUtb24t/dGhlLWFic3RyYWN0/LXBvcC1hcnQtc3Vu/YnVyc3QtYmFja2dy/b3VuZC12ZWN0b3It/aWxsdXN0cmF0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0yVkxBUkxxV21r/TWJ5YV8xSVhjc1BQ/RHUwcExJTjBHRkJL/VTdVc3Y1RXRFPQ",
  },
  {
    id: "2",
    image:
      "https://imgs.search.brave.com/U7wk9UgiEeIAo6xg16C8bqZ1JTANpWji3bfNTjMPM7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/NzczODU0NS92ZWN0/b3IvbGltaXRlZC1v/ZmZlci1iYW5uZXIt/dGVtcGxhdGUtb24t/dGhlLWFic3RyYWN0/LXBvcC1hcnQtc3Vu/YnVyc3QtYmFja2dy/b3VuZC12ZWN0b3It/aWxsdXN0cmF0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0yVkxBUkxxV21r/TWJ5YV8xSVhjc1BQ/RHUwcExJTjBHRkJL/VTdVc3Y1RXRFPQ",
  },
  {
    id: "3",
    image:
      "https://imgs.search.brave.com/U7wk9UgiEeIAo6xg16C8bqZ1JTANpWji3bfNTjMPM7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/NzczODU0NS92ZWN0/b3IvbGltaXRlZC1v/ZmZlci1iYW5uZXIt/dGVtcGxhdGUtb24t/dGhlLWFic3RyYWN0/LXBvcC1hcnQtc3Vu/YnVyc3QtYmFja2dy/b3VuZC12ZWN0b3It/aWxsdXN0cmF0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0yVkxBUkxxV21r/TWJ5YV8xSVhjc1BQ/RHUwcExJTjBHRkJL/VTdVc3Y1RXRFPQ",
  },
  {
    id: "4",
    image:
      "https://imgs.search.brave.com/U7wk9UgiEeIAo6xg16C8bqZ1JTANpWji3bfNTjMPM7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/NzczODU0NS92ZWN0/b3IvbGltaXRlZC1v/ZmZlci1iYW5uZXIt/dGVtcGxhdGUtb24t/dGhlLWFic3RyYWN0/LXBvcC1hcnQtc3Vu/YnVyc3QtYmFja2dy/b3VuZC12ZWN0b3It/aWxsdXN0cmF0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0yVkxBUkxxV21r/TWJ5YV8xSVhjc1BQ/RHUwcExJTjBHRkJL/VTdVc3Y1RXRFPQ",
  },
];

const OfferBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={banners}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          onScroll={onScroll}
          renderItem={({ item }) => (
            <Image source={{ uri: item.image }} style={styles.banner} />
          )}
        />

        <View style={styles.dotsContainer}>
          {banners.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
      <BorderBottom />
    </>
  );
};

export default OfferBanner;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  banner: {
    width: width - 20,
    height: 160,
    borderRadius: 30,
    marginHorizontal: 10,
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 20,
    backgroundColor: "#5A5CE6", // purple like your image
  },
});
