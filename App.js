import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

export default function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({


});
