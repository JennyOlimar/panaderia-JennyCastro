import React from 'react';
import { View, FlatList } from 'react-native';
import { BREADS } from '../data/breads';
import BreadItem from './BreadItem';

const Breads = ({navigation, route}) => {

  const breads = BREADS.filter( bread => bread.category === route.params.categoryID);

  const handleSelected = (item) => {
    navigation.navigate('Details', {
      productID: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      weight: item.weight
    });
  };

  return (
    <View>
      <FlatList
      data = { breads }
      renderItem = { ({item}) => <BreadItem item={item} onSelected={handleSelected}/>}
      keyExtractor = {item => item.id}
      />
    </View>
  )
}

export default Breads;