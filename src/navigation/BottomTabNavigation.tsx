
import React from 'react'
import {Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeNavigation from './HomeNavigation';
import MyNotification from '../screens/MyNotification';
import AddToCart from '../screens/AddToCart';
import Profile from '../screens/Profile';
const Tab = createMaterialBottomTabNavigator();
export default function BottomTabNavigation() {
  return ( <Tab.Navigator
     initialRouteName='Home'
       screenOptions={{ 
       }}>

      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image source={require("../assets/icons/Home.png")} style={{height:30 ,width:30 ,tintColor: focused ? "black":"red"}}/>
           
          ),
        }}
      />



<Tab.Screen
        name="Notification"
        component={MyNotification}
        options={{
          tabBarIcon: ({ focused}) => (
            <Image source={require("../assets/icons/bell.png")} style={{height:30 ,width:30 ,tintColor: focused ? "black":"red"}}/>
          ),
        }}
      />
       <Tab.Screen
        name="Cart"
        component={AddToCart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={require("../assets/icons/add-to-cart.png")} style={{height:30 ,width:30 ,tintColor: focused ? "black":"red"}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused}) => (
            <Image source={require("../assets/icons/user.png")} style={{height:30 ,width:30 ,tintColor: focused ? "black":"red"}}/>
          ),
        }}
      />
  
  </Tab.Navigator>
  )
    }
