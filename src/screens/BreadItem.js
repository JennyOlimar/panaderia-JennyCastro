import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const BreadItem = ({item, onSelected}) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
        <View style={styles.panItem}>
            <View>
              <Text style={styles.title}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.details}>$ {item.price}</Text>
              <Text style={styles.details}>{item.weight}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  panItem: {
    padding: '20px',
    margin: '10px',
    borderRadius: '3px',
    backgroundColor: '#ccc',
  },
  title:{
    fontSize: '20px',
    fontFamily: 'sans-serif',
    fontWeight: '600',
  },
  details: {
    fontSize: '18px',
  }
});

export default BreadItem;