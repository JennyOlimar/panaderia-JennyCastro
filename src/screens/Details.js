import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Details = ({route}) => {
    const pan = route.params;
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{pan.name}</Text>
        <Text>{pan.description}</Text>
        <Text>{pan.price}</Text>
        <Text>{pan.weight}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: 20,
    fontFamily: 'sans-serif',
    marginBottom: 10,
    fontWeight: '600',
  }
});

export default Details