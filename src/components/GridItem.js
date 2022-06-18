import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GridItem = ({item, onSelected}) => {
  return (
    <View style={style.gridItem}>
      <TouchableOpacity style={{...style.container, backgroundColor: item.color, borderRadius: '6px'}} onPress={() => onSelected(item)}>
        <View>
          <Text style={style.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: '6px',
    margin: '15px',
    height: '150px',
  },
  container: {
    flex: 1,
    borderRadius: '6px',
    shadowColor: 'black',
    shadowOpacity: '0.26',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: '6px',
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '8px',
    height: '100%',
  },
  title: {
    fontFamily: 'sans-serif',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'flex',
    padding: '20px',
    fontWeight: '600',
    height: '150px',
  }
});

export default GridItem