import React from "react";
import { FlatList, View } from "react-native";
import ProductCard from "./ProductCard";
import { data } from "@/data";

export default function ProductList2() {
  return (
    <FlatList
      data={data.products}
      keyExtractor={(item) => item.id}
      numColumns={2} 
      scrollEnabled={false}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item }) => (
        <View style={{ flex: 1, margin: 5 }}>
          <ProductCard item={item} />
        </View>
      )}
    />
  );
}