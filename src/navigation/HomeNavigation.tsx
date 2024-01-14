import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreee from '../screens/HomeScreee';
import Details from '../screens/Details';
import BookingSummary from '../screens/BookingSummary';
import SummerScreen from '../screens/SummerScreen';
import WinterScreen from '../screens/WinterScreen';
import FashionScreen from '../screens/FashionScreen';
// import { BottomNavigation } from 'react-native-paper';
// import BottomTabNavigation from './BottomTabNavigation';
const HomeStack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Screen"
          component={HomeScreee}
          options={{headerShown: false}}
        />

        <HomeStack.Screen name="Fashion" component={FashionScreen} />
        <HomeStack.Screen name="Summer" component={SummerScreen} />
        <HomeStack.Screen name="Winter" component={WinterScreen} />
        <HomeStack.Screen name="Details" component={Details} />
        <HomeStack.Screen name="Booking Summary" component={BookingSummary} />
        {/* <HomeStack.Screen name="hh" component={BottomTabNavigation} /> */}
      </HomeStack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
