import React from "react";
import { FlatList } from "react-native";
import { data } from "@/data";
import ProductCardSmall from "./ProductCardSmall";

export default function ProductList() {
  return (
    <FlatList
      data={data.products}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ProductCardSmall item={item} />}
    />
  );
}