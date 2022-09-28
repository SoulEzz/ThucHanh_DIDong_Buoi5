import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import Phone1 from './PhoneDisplay/Phone1';
import Phone2 from './PhoneDisplay/Phone2';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Phone1" screenOptions={{headerShown:false}}> 
        <Stack.Screen name="Phone1" component={Phone1} />
        <Stack.Screen name="Phone2" component={Phone2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  
});
