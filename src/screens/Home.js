import React from 'react';
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/categories';
import GridItem from '../components/GridItem';

const Home = ({ navigation }) => {

  const handleSelectedCategory = (item) => {
    navigation.navigate('Breads', {
      categoryID: item.id,
      name: item.title,
    });
  }
  
  return (
    <View>
      <FlatList
        data = { CATEGORIES }
        renderItem = { ({item}) => <GridItem onSelected={handleSelectedCategory} item={item}/>}
        keyExtractor = {item => item.id}
        numColumns = {2}
      />
    </View>
  )
}

export default Home