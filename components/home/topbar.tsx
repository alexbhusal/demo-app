import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";

const Topbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialIcons name="favorite-border" size={20} color={Colors.tint} />
      </View>

      <View style={styles.search}>
        <MaterialIcons name="search" size={22} color={"#b7b6b6"} />
        <TextInput
          placeholder="Search for products..."
          placeholderTextColor={"#b7b6b6"}
          style={styles.input}
            editable={false}
          onPress={() => router.push(`/searchScreen?focus=${true}`)}
        />

        <TouchableOpacity>
          <Text style={styles.searchBtn}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.icon}>
        <MaterialIcons
          name="notifications-none"
          size={20}
          color={Colors.tint}
        />
      </View>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  icon: {
    backgroundColor: "#F8FAFF",
    padding: 8,
    borderRadius: 50,
  },

  search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.tint,
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 16,
    paddingRight: 3,
    marginHorizontal: 10,
    height: 40,
  },

  input: {
    flex: 1,
    marginHorizontal: 3,
    color: Colors.text,
  },

  searchBtn: {
    color: "#ffffff",
    fontWeight: "400",
    backgroundColor: Colors.tint,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
});
