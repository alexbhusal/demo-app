import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const Products = () => {
  return (
    <View>
      <Image
      source={{ uri: "https://res.cloudinary.com/dxdbrqanq/image/upload/v1773993893/xm9fxsslm813iplxjfzg.png" }}
      style={styles.banner}
    />
    </View>
  )
}

export default Products;

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius:30,
    padding:3
  },
});