import { View, Text } from "react-native";
import React from "react";
import ProductList2 from "../produts/ProductList2";
import DealsBarr from "./DealsBarr";
import BorderBottom from "./BorderBottom";

const BestDeals = () => {
  return (
    <>
      <View>
        <DealsBarr />
        <ProductList2 />
      </View>
      <BorderBottom />
    </>
  );
};

export default BestDeals;
