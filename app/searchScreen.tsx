import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductList2 from "@/components/produts/ProductList2";

const historyData = [
  "Laptops",
  "Iphone 16 Pro Max",
  "Protein Powder",
  "Glass Bottle",
  "Iphone 18 pro max",
  "Lenovo Loq RTX 4060",
  "MSI Monitors",
  "Macbook air m4 16/512",
  "Chicken Pickle",
];

export default function SearchScreen() {
  const router = useRouter();

  const [history, setHistory] = useState(historyData);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);

  const clearAll = () => setHistory([]);

  const handleSearch = () => {
    Keyboard.dismiss();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSearching(true);
    }, 800);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={24} />
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={20} color={Colors.text} />

          <TextInput
            placeholder="Search for products..."
            style={styles.input}
            autoFocus={true}
            onSubmitEditing={handleSearch}
          />

          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Text style={{ color: "#fff" }}>Search</Text>
          </TouchableOpacity>
        </View>

        <MaterialIcons name="shopping-cart" size={24} color={Colors.tint} />
      </View>

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.tint} />
        </View>
      ) : isSearching ? (
        <ProductList2 />
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>Search History</Text>

            <TouchableOpacity onPress={clearAll}>
              <Text style={styles.clear}>
                Clear All <EvilIcons name="trash" size={18} color="gray" />
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={history}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.chip}
                onPress={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    setIsSearching(true);
                  }, 1200);
                }}
              >
                <Text style={styles.historyItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  historyItem: {
    fontSize: 11,
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.tint,
    borderRadius: 40,
    paddingLeft: 16,
    paddingRight: 3,
    marginHorizontal: 10,
    height: 40,
  },

  input: {
    flex: 1,
    marginHorizontal: 8,
  },

  searchBtn: {
    backgroundColor: Colors.tint,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  clear: {
    color: "gray",
    fontSize: 14,
  },

  chip: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
