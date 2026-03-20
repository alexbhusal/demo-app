import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductList from '../produts/ProductList'

const TodaysDeal = () => {
  const [timeLeft, setTimeLeft] = useState(7790)  //in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds:any) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    return [
      hrs.toString().padStart(2, '0'),
      mins.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0'),
    ]
  }

  const [hh, mm, ss] = formatTime(timeLeft)

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Today’s Deal</Text>

      <View style={styles.timerWrapper}>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{hh}</Text>
        </View>

        <Text style={styles.colon}>:</Text>

        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{mm}</Text>
        </View>

        <Text style={styles.colon}>:</Text>

        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{ss}</Text>
        </View>
      </View>
    </View>
      <ProductList/>
</>
  )
}

export default TodaysDeal

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 12,
  },
  timerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeBox: {
    backgroundColor: '#5B63D3',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 25,
    marginHorizontal: 2,
  },
  timeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  colon: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
})