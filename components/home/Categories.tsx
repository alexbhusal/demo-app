import { categories } from "@/data";
import React from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Section from "./Section";
import BorderBottom from "./BorderBottom";

type Category = {
  id: string;
  name: string;
  image: string;
};

const Categories = () => {
  const CategoryItem = ({ item }: { item: Category }) => (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <>
      <Section title={"Categories"} />
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={CategoryItem}
      />
      <BorderBottom />
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
  },
});
