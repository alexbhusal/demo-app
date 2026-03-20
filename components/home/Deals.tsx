import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Section from './Section'
import BorderBottom from './BorderBottom'

const Deals = () => {
  return (
    <>
    <View>
      <Section title={"More Deals"}/>
 <Image
      source={{ uri: "https://imgs.search.brave.com/iiSK3AT355LGpsrMhNQIXQZZR6WWNARm3vl8949bkvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/MTUwLzMwOC9zbWFs/bC9zZXQtb2YtZGlz/Y291bnQtbGFiZWwt/d2l0aC1jaGluZXNl/LW9ybmFtZW50LWls/bHVzdHJhdGlvbi1z/YWxlLWJhbm5lci1m/b3ItcHJvbW90aW9u/YWwtc3BlY2lhbC1v/ZmZlci10YWctc3Rp/Y2tlci1lbGVtZW50/LWZvci1vcmllbnRh/bC1ldmVudC1zYWxl/LXZlY3Rvci5qcGc" }}
      style={styles.banner}
    />
    </View>
    <BorderBottom/>
    </>
  )
}

export default Deals


const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
    borderRadius:30,
    padding:10
  },
});


