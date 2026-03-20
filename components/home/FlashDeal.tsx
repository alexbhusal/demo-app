import { View, Text } from 'react-native'
import React from 'react'
import Section from './Section'
import ProductList2 from '../produts/ProductList2'

const FlashDeal = () => {
  return (
    <View>
      <Section title={"Flash Deal"}/>
      <ProductList2/>
    </View>
  )
}

export default FlashDeal