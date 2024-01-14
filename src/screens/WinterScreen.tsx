import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WinterCloth } from '../dummydata/WinterCloth'
import Winter from '../component/Winter'
export default function WinterScreen() {
  return (
    <View>
    <Winter cheeku={WinterCloth}/>
    </View>
  )
}

const styles = StyleSheet.create({})