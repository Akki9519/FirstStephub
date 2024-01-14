import {StyleSheet, Text, View, Image, FlatList,ScrollView,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Cloths} from '../dummydata/ScrouselCloth'
import SportsCarousel from '../component/SportCarousel';
import Search from '../component/Search';
import UpcomingCloth from '../component/UpcomingCloth'
import { Upcomingcloths } from '../dummydata/Upcoming';
export default function HomeScreee({navigation}:any) {
  


  return (
    <>
   <ScrollView>
      <View style={styles.a}>
        <View style={{margin:5}}>
          <Image
            source={require('../assets/FirstStephub.png')}
            style={{height: 80, width: 80}}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight:'700',fontFamily:'serif',marginTop:20,color:'gray'}}>Hello,Akki</Text>
          <Text>FirstStepHub</Text>
        </View>

<View>
      <TouchableOpacity>
       <View >
       <Image source={require("../assets/icons/menu-bar.png")} style={{height:30 ,width:30 ,marginLeft:150,marginTop:25}} />
       </View>
       </TouchableOpacity>
       
</View>

      </View>
      <Search />
      <View style={{marginTop: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{paddingLeft:20,fontWeight:'700',color:'red'}}>Please Select the Latest Sesons Cloth!!!</Text>
          {/* <Text style={{paddingRight:30,fontWeight:'700',color:"blue"}}>See All</Text> */}
        </View>
      </View>

    <View>
      <SportsCarousel list={Cloths} />
    </View>
    <Text style={{paddingLeft:20,fontFamily:"sans",fontWeight:"900",color:"black",fontSize:18,paddingTop:10,paddingBottom:10}}>UPCOMING SALES</Text>
    <View>
     <UpcomingCloth list={Upcomingcloths}/>
    </View>
   
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  a: {
    flexDirection: 'row',
    backgroundColor:'white',
    

  },
});
