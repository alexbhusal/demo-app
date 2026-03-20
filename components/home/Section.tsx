import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';

const Section = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.viewAllContainer}>
        <Text style={styles.viewAllText}>View All</Text>
        <AntDesign name="right" size={18} color="#FFD700" />
      </TouchableOpacity>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold', 
    color: 'black',
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5, 
  },
  viewAllText: {
    color: '#EFC030', 
    fontSize: 14,
    fontWeight: '500',
  },
});