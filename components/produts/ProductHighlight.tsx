import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BorderBottom from "../home/BorderBottom";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const CollapsibleSection = ({ title, children }: any) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <View style={styles.section}>
      <TouchableOpacity style={styles.header} onPress={toggle}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={22}
          color="#333"
        />
      </TouchableOpacity>

      {open && <View style={styles.content}>{children}</View>}
    </View>
  );
};

export default function ProductHighlight() {
  return (
    <>
      <View style={styles.container}>
        <CollapsibleSection title="Product Highlights">
          {[
            "A19 Pro Fusion Chip for ultra-fast performance",
            '7.1" ProMotion XDR Display with peak outdoor brightness',
            "Quad-Lens Pro Camera System with improved low-light capture",
            "48MP UltraZoom Periscope Lens up to 30x optical clarity",
            "All-Day Power with next-gen battery optimization",
            "Satellite+ Connectivity for emergency reach anywhere",
            "MagSafe 3.0 faster wireless charging",
            "On-Device AI Engine for smarter apps and personalization",
            "Water & Dust Resistance IP69 for maximum durability",
          ].map((item, index) => (
            <Text key={index} style={styles.bullet}>
              • {item}
            </Text>
          ))}
        </CollapsibleSection>

        <CollapsibleSection title="Product Details">
          <Text style={styles.subTitle}>Description</Text>

          <Text style={styles.text}>
            Experience unparalleled audio quality and convenience with the NB121
            Pods Wireless Earbuds. Designed for active lifestyles and daily use,
            these earbuds offer a host of features to enhance your Music
            listening experience. Extended Playtime: Enjoy up to 40 hours of
            uninterrupted playtime on a single charge.
          </Text>

          <Text style={styles.text}>
            Ensuring your voice is heard clearly during calls and voice
            commands. This microphone excels in various environments, whether
            you are in a busy cafe or a quiet office, providing reliable and
            crisp audio.
          </Text>

          <Text style={styles.subTitle}>Specifications</Text>

          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Brand</Text>
            <Text style={styles.specValue}>Apple</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Modal ID</Text>
            <Text style={styles.specValue}>NB121 Pods</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Color</Text>
            <Text style={styles.specValue}>Black</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>RAM</Text>
            <Text style={styles.specValue}>8GB</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Storage</Text>
            <Text style={styles.specValue}>512GB</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Fast Charging</Text>
            <Text style={styles.specValue}>30W</Text>
          </View>

          <Text style={styles.subTitle}>Disclaimer</Text>
          <Text style={styles.text}>
            Specifications and availability may vary by region. Prices are
            subject to change.
          </Text>
        </CollapsibleSection>
      </View>
      <BorderBottom />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },

  section: {
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingVertical: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },

  content: {
    marginTop: 12,
  },

  bullet: {
    fontSize: 12,
    color: "#444",
    marginBottom: 8,
  },

  subTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 6,
    color: "#222",
  },

  text: {
    fontSize: 12,
    color: "#555",
    lineHeight: 20,
    marginBottom: 10,
  },

  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },

  specLabel: {
    color: "#777",
    fontSize: 14,
  },

  specValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#222",
  },
});
