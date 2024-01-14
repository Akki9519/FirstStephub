import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react'
import FDetail from '../component/FDetail';

export default function Details({ route}: any) {
   const requiredVenues=route.params.requiredVenues
   const kullu=route.params.kullu
  const cheeku=route.params.cheeku
  return (
    <>
   
    <View>
    <FDetail lists={requiredVenues} kullu={kullu} cheeku={cheeku}/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({})