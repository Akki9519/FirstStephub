import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import { SummerCloths } from '../dummydata/SummerCloth'
import Summer from '../component/Summer'
export default function SummerScreen({route}:any) {

  return (
  <View>
    <Summer kullu={SummerCloths}  />
  </View>
  )
}

const styles = StyleSheet.create({})