import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const DealsBarr = () => {
  const [activeTab, setActiveTab] = useState('Offers');

  const tabs = [
    { name: 'Offers', icon: 'local-offer', color: '#fa7575' },
    { name: 'Discounts', icon: 'discount', color: '#4a90e2' },
    { name: 'Best Price', icon: 'price-check', color: '#34a853' },
    { name: 'Hot Deals', icon: 'local-fire-department', color: '#ff9800' },
    { name: 'Top Rated', icon: 'star', color: '#9c27b0' },
    { name: 'New', icon: 'new-releases', color: '#00acc1' },
    { name: 'Bundles', icon: 'shopping-cart', color: '#e91e63' },
    { name: 'Free Delivery', icon: 'local-shipping', color: '#607d8b' },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.barStyle}>

        {tabs.map((item, index) => {
          const isActive = activeTab === item.name;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveTab(item.name)}
              style={[
                styles.item,
                isActive && { backgroundColor: '#f0f0f0' }
              ]}
            >
              <MaterialIcons name={item.icon} size={18} color={item.color} />
              <Text style={[styles.text, { color: item.color }]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>
    </ScrollView>
  )
}

export default DealsBarr

const styles = StyleSheet.create({
  barStyle: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 10,
    alignItems: "center",
    marginTop:10
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 5
  },
  text: {
    fontSize: 12,
    fontWeight: "500"
  }
})