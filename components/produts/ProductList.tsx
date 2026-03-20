import React from "react";
import { FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { data } from "@/data";

export default function ProductList() {
  return (
    <FlatList
      data={data.products}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ProductCard item={item} />}
    />
  );
}