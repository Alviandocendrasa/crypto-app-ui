import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../component';
import {MainNews,Market,Wallet} from '../pages'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <Tab.Screen name="Home" component={MainNews} options={{headerShown: false}}/>
            <Tab.Screen name="Market" component={Market} options={{headerShown: false}}/>
            <Tab.Screen name="Wallet" component={Wallet} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='MainApp'>

            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
            <Stack.Screen name="MainNews" component={MainNews} options={{headerShown: false}}/>
            <Stack.Screen name="Market" component={Market} options={{headerShown: false}}/>
            <Stack.Screen name="Wallet" component={Wallet} options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}

export default Router
