import { View, Text } from 'react-native'
import React from 'react'
import Section from './Section'
import ProductList2 from '../produts/ProductList2'

const SpecialOffer = () => {
  return (
    <View>
      <Section title={"Special Offer"}/>
      <ProductList2/>
    </View>
  )
}

export default SpecialOffer