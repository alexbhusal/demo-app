import { View, Text } from "react-native";
import React from "react";
import Section from "./Section";
import LiveProducts from "../produts/LiveProduts";
import BorderBottom from "./BorderBottom";

const LiveSell = () => {
  return (
    <>
      <View>
        <Section title="Live Sell" />
        <LiveProducts />
      </View>
      <BorderBottom />
    </>
  );
};

export default LiveSell;
