import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home';
import Breads from '../../screens/Breads';
import Details from '../../screens/Details';
import { COLORS } from '../../constants/color';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: COLORS.secondary,
            headerTitleStyle: { fontWeight: 'bold'}
        }}
    >
        <Stack.Screen name="Home" component={Home} options={{title: 'Panaderia PAN'}}/>
        <Stack.Screen name="Breads" component={Breads} options={({route}) => ({title: route.params.name})}/>
        <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
);