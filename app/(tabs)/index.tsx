import { ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "@/components/home/Categories";
import OfferBanner from "@/components/home/OffersBanner";
import Deals from "@/components/home/Deals";
import SalesBanner from "@/components/home/SaleBanner";
import Products from "@/components/home/Products";
import Discounts from "@/components/home/Discounts";
import LiveSell from "@/components/home/LiveSell";
import SpecialOffer from "@/components/home/SpecialOffer";
import TodaysDeal from "@/components/home/TodaysDeal";
import FlashDeal from "@/components/home/FlashDeal";
import BestDeals from "@/components/home/BestDeals";
import Topbar from "@/components/home/topbar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff"}} edges={["left","right","top"]} >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Topbar />
        <OfferBanner />
        <Categories />
        <Deals />
        <TodaysDeal/>
        <Products/>
        <SalesBanner/>
        <BestDeals/>
        <Discounts/>
        <LiveSell/>
        <FlashDeal/>
        <SalesBanner/>
        <SpecialOffer/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
