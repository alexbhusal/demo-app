import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BorderLine = () => {
  return (
    <View style={styles.line}>
    </View>
  )
}

export default BorderLine

const styles = StyleSheet.create({
  line:{
    borderBottomWidth:1,
    paddingTop:10,
    borderBottomColor:"#cecece"
  }
})
