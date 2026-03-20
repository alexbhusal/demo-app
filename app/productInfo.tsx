import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import SearchScreen from "./searchScreen";
import Section from "@/components/home/Section";
import ProductList from "@/components/produts/ProductList";
import ProductFooter from "@/components/produts/ProductFooter";
import Review from "@/components/produts/Review";
import ProductHighlight from "@/components/produts/ProductHighlight";
import DeliverySection from "@/components/produts/DeliverySection";
import ProductDetails from "@/components/produts/ProductDetails";
import ProductLook from "@/components/produts/ProductLook";

const ProductInfo = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <SearchScreen />
        <ProductLook/>
        <ProductDetails/>
        <DeliverySection/>
        <ProductHighlight/>
        <Review/>
        <View>
          <Section title={"You may also like "} />
          <ProductList />
          <Section title={"Related Products "} />
          <ProductList />
        </View>
      </ScrollView>
      <ProductFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 80
  },
});

export default ProductInfo;