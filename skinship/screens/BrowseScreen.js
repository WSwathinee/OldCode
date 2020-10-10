import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import DropdownMenu from 'react-native-dropdown-menu';

import Type from '../Page/Type';
import Ingredients from '../Page/Ingredients';
import Brand from '../Page/Brand';
import All from '../Page/All';

const Tab = createMaterialTopTabNavigator();

const BrowseScreen = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Category" component={Type} />
          <Tab.Screen name="Ingredien" component={Ingredients} />
          <Tab.Screen name="Brand" component={Brand} />
          <Tab.Screen name="All" component={All} />
        </Tab.Navigator>
      );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});